import { BrainCircuit, Package, FileCheck, Factory, Truck, CheckCircle2, AlertTriangle, XCircle, Clock, ChevronDown, ShoppingCart, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { formatIDR, orders } from "@/data/mockData";
import type { Order, StageStatus, OrderStage, ProcessLayerStatus, DeliveryOrderStatus, POHealthStatus } from "@/data/mockData";
import { useState, useMemo } from "react";

const stageConfig: Record<OrderStage, { icon: typeof Package; label: string }> = {
  materialCheck: { icon: Package, label: "Cek Material" },
  loa: { icon: FileCheck, label: "Letter of Acceptance (LoA)" },
  production: { icon: Factory, label: "Produksi" },
  delivery: { icon: Truck, label: "Delivery Order" },
//  closing: { icon: CheckCircle2, label: "Closing / Status PO" },
};

const statusStyles: Record<StageStatus, { dot: string; badge: string; label: string }> = {
  completed: { dot: "bg-[hsl(var(--success))]", badge: "bg-[hsl(var(--success))]/15 text-[hsl(var(--success))]", label: "Selesai" },
  active: { dot: "bg-primary", badge: "bg-primary/15 text-primary", label: "Aktif" },
  "at-risk": { dot: "bg-[hsl(var(--warning))]", badge: "bg-[hsl(var(--warning))]/15 text-[hsl(var(--warning))]", label: "Berisiko" },
  blocked: { dot: "bg-destructive", badge: "bg-destructive/15 text-destructive", label: "Terhambat" },
  pending: { dot: "bg-muted-foreground/40", badge: "bg-muted text-muted-foreground", label: "Menunggu" },
};

// const stageOrder: OrderStage[] = ["materialCheck", "loa", "production", "delivery", "closing"];
const stageOrder: OrderStage[] = ["materialCheck", "loa", "production", "delivery"];

const currentStageLabel: Record<OrderStage, string> = {
  materialCheck: "Cek Material",
  loa: "Proses LoA",
  production: "Dalam Produksi",
  delivery: "Dalam Pengiriman",
//  closing: "Closing",
};

function AiNote({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 mt-2.5 p-2.5 rounded-lg bg-primary/5 border border-primary/10">
      <BrainCircuit className="h-4 w-4 text-primary mt-0.5 shrink-0" />
      <p className="text-xs italic text-primary/80 leading-relaxed">{text}</p>
    </div>
  );
}

function MaterialStatusIcon({ status }: { status: "ok" | "low" | "out" }) {
  if (status === "ok") return <CheckCircle2 className="h-4 w-4 text-[hsl(var(--success))]" />;
  if (status === "low") return <AlertTriangle className="h-4 w-4 text-[hsl(var(--warning))]" />;
  return <XCircle className="h-4 w-4 text-destructive" />;
}

function ProcessLayerBadge({ status }: { status: ProcessLayerStatus }) {
  const map: Record<ProcessLayerStatus, { label: string; cls: string }> = {
    completed: { label: "✅", cls: "" },
    active: { label: "▶", cls: "text-primary" },
    flagged: { label: "⚠️", cls: "text-destructive" },
    pending: { label: "○", cls: "text-muted-foreground" },
  };
  const s = map[status];
  return <span className={cn("text-sm", s.cls)}>{s.label}</span>;
}

function DOStatusBadge({ status }: { status: DeliveryOrderStatus }) {
  const map: Record<DeliveryOrderStatus, { label: string; cls: string }> = {
    delivered: { label: "Diterima", cls: "bg-[hsl(var(--success))]/15 text-[hsl(var(--success))]" },
    "in-transit": { label: "In Transit", cls: "bg-primary/15 text-primary" },
    pending: { label: "Menunggu", cls: "bg-muted text-muted-foreground" },
  };
  const s = map[status];
  return <span className={cn("inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium", s.cls)}>{s.label}</span>;
}

function PaymentBadge({ status }: { status: "unpaid" | "paid" | "overdue" }) {
  const map = {
    unpaid: { label: "Belum Bayar", cls: "bg-muted text-muted-foreground" },
    paid: { label: "Lunas", cls: "bg-[hsl(var(--success))]/15 text-[hsl(var(--success))]" },
    overdue: { label: "Jatuh Tempo", cls: "bg-destructive/15 text-destructive" },
  };
  const s = map[status];
  return <span className={cn("inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium", s.cls)}>{s.label}</span>;
}

function POHealthBadge({ status }: { status: POHealthStatus }) {
  const map: Record<POHealthStatus, { label: string; cls: string }> = {
    good: { label: "✅ On Track", cls: "bg-[hsl(var(--success))]/15 text-[hsl(var(--success))]" },
    "at-risk": { label: "⚠️ Berisiko", cls: "bg-[hsl(var(--warning))]/15 text-[hsl(var(--warning))]" },
    bad: { label: "🔴 Terlambat", cls: "bg-destructive/15 text-destructive" },
  };
  const s = map[status];
  return <span className={cn("inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium", s.cls)}>{s.label}</span>;
}

// Parse Indonesian date string like "30 Apr 2026"
function parseIndonesianDate(dateStr: string): Date | null {
  const months: Record<string, number> = {
    Jan: 0, Feb: 1, Mar: 2, Apr: 3, Mei: 4, Jun: 5,
    Jul: 6, Agu: 7, Sep: 8, Okt: 9, Nov: 10, Des: 11,
  };
  const parts = dateStr.split(" ");
  if (parts.length !== 3) return null;
  const day = parseInt(parts[0]);
  const month = months[parts[1]];
  const year = parseInt(parts[2]);
  if (isNaN(day) || month === undefined || isNaN(year)) return null;
  return new Date(year, month, day);
}

function DeadlineCountdown({ deadline }: { deadline: string }) {
  const deadlineDate = parseIndonesianDate(deadline);
  if (!deadlineDate) return <span className="text-sm text-muted-foreground flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{deadline}</span>;

//  const today = new Date(2026, 3, 11); // Current date: 2026-04-11
  const today = new Date();
  const diffMs = deadlineDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  let countdownText: string;
  let colorClass: string;

  if (diffDays < 0) {
    countdownText = `Terlambat ${Math.abs(diffDays)} hari`;
    colorClass = "text-destructive font-medium";
  } else if (diffDays === 0) {
    countdownText = "Hari ini!";
    colorClass = "text-destructive font-medium";
  } else if (diffDays <= 2) {
    countdownText = `${diffDays} hari lagi`;
    colorClass = "text-destructive font-medium";
  } else if (diffDays <= 6) {
    countdownText = `${diffDays} hari lagi`;
    colorClass = "text-[hsl(var(--warning))] font-medium";
  } else {
    countdownText = `${diffDays} hari lagi`;
    colorClass = "text-[hsl(var(--success))]";
  }

  return (
    <span className={cn("text-sm flex items-center gap-1", colorClass)}>
      <Clock className="h-3.5 w-3.5" />
      {countdownText}
      <span className="text-muted-foreground font-normal text-xs">({deadline})</span>
    </span>
  );
}

function DaysInStage({ stageEnteredDate }: { stageEnteredDate?: string }) {
  if (!stageEnteredDate) return null;
  const entered = parseIndonesianDate(stageEnteredDate);
  if (!entered) return null;

  const today = new Date(2026, 3, 11);
  const diffDays = Math.floor((today.getTime() - entered.getTime()) / (1000 * 60 * 60 * 24));

  let colorClass = "text-muted-foreground";
  if (diffDays >= 14) colorClass = "text-destructive font-medium";
  else if (diffDays >= 7) colorClass = "text-[hsl(var(--warning))] font-medium";

  return (
    <span className={cn("text-xs", colorClass)}>
      Di tahap ini: {diffDays} hari
    </span>
  );
}

function CrossOrderMaterialAlert({ materialName, currentOrderId }: { materialName: string; currentOrderId: string }) {
  const otherOrders = useMemo(() => {
    return orders.filter(o => {
      if (o.id === currentOrderId) return false;
      if (o.currentStage === "closing" && o.stages.closing.status === "completed") return false;
      return o.stages.materialCheck.materials.some(
        m => m.name === materialName && (m.status === "out" || m.status === "low")
      );
    });
  }, [materialName, currentOrderId]);

  if (otherOrders.length === 0) return null;

  return (
    <span className="text-xs text-[hsl(var(--warning))] ml-1">
      — juga dibutuhkan oleh {otherOrders.length} order lain
    </span>
  );
}

export default function OrderMilestone({ order }: { order: Order }) {
  const [open, setOpen] = useState(false);

  const overallStatus = (() => {
    const s = order.stages;
    const currentStatus = s[order.currentStage].status;
    if (currentStatus === "blocked" || currentStatus === "at-risk") return currentStatus;
    if (order.currentStage === "closing" && s.closing.status === "completed") return "completed" as StageStatus;
    return "active" as StageStatus;
  })();

  const statusStyle = statusStyles[overallStatus];

  return (
    <Card className="overflow-hidden">
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-accent/50 transition-colors p-5">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 min-w-0">
                <div className={cn("h-3.5 w-3.5 rounded-full shrink-0", statusStyle.dot)} />
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-base text-foreground">{order.id}</span>
                    <span className="text-sm text-muted-foreground">— {order.client}</span>
                  </div>
                  <div className="flex items-center gap-2.5 mt-1 flex-wrap">
                    {/* <span className="text-sm text-muted-foreground">{order.product}</span> */}
                    <span className="text-xs text-muted-foreground">TOTAL QTY : </span>
                    <span className="text-sm text-muted-foreground">{order.qty.toLocaleString("id-ID")} pcs</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">TOTAL AMOUNT : Rp. {order.total ? Number(order.total).toLocaleString("id-ID") : 0}</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <DeadlineCountdown deadline={order.deadline} />
                  </div>
                  {/* 🔥 PART NUMBER LIST */}
                  {order.partNumbers && order.partNumbers.length > 0 && (
                  <div className="mt-3 text-xs border rounded-md overflow-hidden w-full">

    {/* HEADER */}
    <div className="grid grid-cols-9 gap-3 px-3 py-2 bg-muted text-muted-foreground font-semibold border-b w-full">
      <span>P/N Customer</span>
      <span>Qty</span>
      <span>Harga Satuan</span>
      <span>Total</span>
      <span>Tanggal PO</span>
      <span>Delivery Time</span>
      <span>Qty Terdeliver</span>
      <span>Tanggal Delivery</span>
      <span>Status</span>
    </div>

    {/* BODY */}
    <div className="bg-muted/30">
      {order.partNumbers.map((p: any, i: number) => (
        <div
          key={i}
          className="grid grid-cols-9 gap-3 px-3 py-2 items-center border-b last:border-0 w-full"
        >
          <span className="font-medium text-foreground">
            {p.nama}
          </span>

          <span className="text-muted-foreground">
            {p.qty}
          </span>

          <span className="text-muted-foreground">
            Rp. {p.harga_satuan ? Number(p.harga_satuan).toLocaleString("id-ID") : 0}
          </span>

          <span className="text-muted-foreground">
            Rp. {p.total ? Number(p.total).toLocaleString("id-ID") : 0}
          </span>

          <span className="text-muted-foreground">
            {p.tgl_po}
          </span>

          <span className="text-muted-foreground">
            {p.delivery_time}
          </span>

          <span className="text-muted-foreground">
            {p.qty_terdeliver}
          </span>

          <span className="text-muted-foreground">
            {p.tanggal_delivery}
          </span>

          <span className="text-muted-foreground">
            {p.status}
          </span>
        </div>
      ))}
    </div>

  </div>
)}

                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <Badge className={cn("text-xs px-2.5 py-1", statusStyle.badge)}>
                  {currentStageLabel[order.currentStage]}
                </Badge>
                <ChevronDown className={cn("h-5 w-5 text-muted-foreground transition-transform", open && "rotate-180")} />
              </div>
            </div>
          </CardHeader>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <CardContent className="px-5 pb-5 pt-0">
            <div className="relative ml-2">
              {stageOrder.map((stageKey, idx) => {
                const config = stageConfig[stageKey];
                const stage = order.stages[stageKey];
                const style = statusStyles[stage.status];
                const Icon = config.icon;
                const isLast = idx === stageOrder.length - 1;
                const isCurrentStage = stageKey === order.currentStage;

                return (
                  <div key={stageKey} className="relative flex gap-4">
                    {!isLast && (
                      <div className="absolute left-[8px] top-[24px] bottom-0 w-px bg-border" />
                    )}
                    <div className={cn("relative z-10 mt-1.5 h-[17px] w-[17px] rounded-full border-2 border-background shrink-0", style.dot)} />
                    <div className={cn("pb-6 flex-1 min-w-0", isLast && "pb-0")}>
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        <Icon className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium text-foreground">{config.label}</span>
                        <span className={cn("inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium", style.badge)}>
                          {style.label}
                        </span>
                        {isCurrentStage && <DaysInStage stageEnteredDate={order.stageEnteredDate} />}
                      </div>

                      {/* Material Check */}
                      {stageKey === "materialCheck" && order.stages.materialCheck.materials.length > 0 && (
  <div className="mt-4 overflow-hidden border rounded-lg bg-white">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-slate-50 border-b">
          <th className="px-4 py-3 text-xs font-semibold text-muted-foreground tracking-wider">Nama Material</th>
          <th className="px-4 py-3 text-xs font-semibold text-muted-foreground tracking-wider">Vendor</th>
          <th className="px-4 py-3 text-xs font-semibold text-muted-foreground tracking-wider">Jenis</th>
          <th className="px-4 py-3 text-xs font-semibold text-muted-foreground tracking-wider text-center">Qty Dibutuhkan</th>
          <th className="px-4 py-3 text-xs font-semibold text-muted-foreground tracking-wider text-center">Stok Gudang</th>
          <th className="px-4 py-3 text-xs font-semibold text-muted-foreground tracking-wider text-center">Sisa Stok Gudang</th>
          <th className="px-4 py-3 text-xs font-semibold text-muted-foreground tracking-wider text-center">Status</th>
        </tr>
      </thead>
      <tbody className="divide-y">
        {order.stages.materialCheck.materials.map((m, i) => (
          <tr key={i} className="hover:bg-slate-50/50 transition-colors">
            {/* Nama Material */}
            <td className="px-4 py-3">
              <div className="flex flex-col">
                <span className="font-bold text-sm text-slate-900 uppercase">{m.name}</span>
                {m.aiInsight && <span className="text-[10px] text-muted-foreground italic">{m.aiInsight}</span>}
              </div>
            </td>

            <td className="px-4 py-3">
              <div className="flex flex-col">
                <span className="text-sm text-slate-900 uppercase">{m.vendor}</span>
              </div>
            </td>

            <td className="px-4 py-3">
              <div className="flex flex-col">
                <span className="text-sm text-slate-900 uppercase">{m.jenis}</span>
              </div>
            </td>

            {/* Qty */}
            <td className="px-4 py-3 text-sm text-center font-medium">
              {m.required} {m.unit}
            </td>

            {/* Stok Gudang */}
            <td className="px-4 py-3 text-sm text-center">
              <span className={m.currentStock < m.required ? "text-destructive font-semibold" : "text-slate-600"}>
                {m.currentStock} {m.unit}
              </span>
            </td>

            {/* Sisa Stok Gudang */}
            <td className="px-4 py-3 text-sm text-center font-medium">
            {(() => {
              const sisa = m.currentStock - m.required;

            return (
            <span
              className={
                sisa < 0
                ? "text-destructive font-semibold"
                : sisa === 0
                ? "text-amber-600 font-semibold"
                : "text-emerald-600"
            }
            >
            {sisa} {m.unit}
            </span>
            );
            })()}
            </td>

            {/* Status dengan Icon */}
            <td className="px-4 py-3 text-center">
              <div className="flex items-center justify-center gap-2">
                {m.status === "ok" ? (
                  <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full text-[10px] font-bold">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    AVAILABLE
                  </div>
                ) : m.status === "low" ? (
                  <div className="flex items-center gap-1 text-amber-600 bg-amber-50 px-2 py-1 rounded-full text-[10px] font-bold">
                    <AlertTriangle className="h-3.5 w-3.5" />
                    LOW
                  </div>
                ) : (
                  <div className="flex items-center gap-1 text-destructive bg-red-50 px-2 py-1 rounded-full text-[10px] font-bold">
                    <XCircle className="h-3.5 w-3.5" />
                    OUT
                  </div>
                )}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    
    {/* Insight Global jika ada */}
    {order.stages.materialCheck.aiInsight && (
      <div className="p-3 border-t bg-slate-50/50">
        <AiNote text={order.stages.materialCheck.aiInsight} />
      </div>
    )}
  </div>
)}

                      {/* LoA */}
                      {stageKey === "loa" && stage.status !== "pending" && (
  <div className="text-sm text-muted-foreground space-y-2">

    {order.stages.loa.items?.map((item, i) => (
      <div key={i} className="flex flex-col border rounded-md p-2 bg-slate-50">

        {/* Part Number */}
        <span className="text-xs text-muted-foreground">
          P/N Customer : {item.partNumber}
        </span>

        {/* SPK + Status */}
        <span
          className={`font-semibold text-sm ${
            item.loaNumber === "-"
              ? "text-red-600"
              : "text-emerald-600"
          }`}
        >
          No. SPK : {item.loaNumber === "-" ? "SPK Belum Tersedia" : item.loaNumber}
        </span>

      </div>
    ))}

    {order.stages.loa.aiInsight && (
      <AiNote text={order.stages.loa.aiInsight} />
    )}
  </div>
)}

                      {/* Production */}
                      {stageKey === "production" && 
 order.stages.production.status !== "pending" && // ✅ Cek status di sini
 order.stages.production.items && 
 order.stages.production.items.length > 0 && (
  <div className="mt-4 overflow-x-auto border rounded-lg bg-white">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-slate-50 border-b">
          <th className="px-4 py-3 text-xs font-semibold text-muted-foreground uppercase">Part Number</th>
          {/* Header Kolom Tahapan */}
          {[...new Set(order.stages.production.items.map(i => i.tahapan))]
            .sort((a, b) => {
                const numA = order.stages.production.items.find(i => i.tahapan === a)?.nomor || 0;
                const numB = order.stages.production.items.find(i => i.tahapan === b)?.nomor || 0;
                return numA - numB;
            })
            .map((tahapan) => (
              <th key={tahapan} className="px-4 py-3 text-xs font-semibold text-muted-foreground text-center uppercase">
                {tahapan}
              </th>
            ))}
        </tr>
      </thead>
      <tbody className="divide-y">
        {Object.entries(
          order.stages.production.items.reduce((acc, item) => {
            if (!acc[item.partNumber]) acc[item.partNumber] = {};
            acc[item.partNumber][item.tahapan] = item.jumlah;
            return acc;
          }, {})
        ).map(([pn, tahapanValues], idx) => (
          <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
            <td className="px-4 py-3 font-bold text-sm text-slate-900 uppercase">
              {pn}
            </td>
            {/* Value per Tahapan */}
            {[...new Set(order.stages.production.items.map(i => i.tahapan))]
              .sort((a, b) => {
                const numA = order.stages.production.items.find(i => i.tahapan === a)?.nomor || 0;
                const numB = order.stages.production.items.find(i => i.tahapan === b)?.nomor || 0;
                return numA - numB;
              })
              .map((tahapan) => (
                <td key={tahapan} className="px-4 py-3 text-sm text-center font-medium text-blue-600">
                  {tahapanValues[tahapan] || 0}
                </td>
              ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
                      )}

                      {/* Delivery */}
                      {stageKey === "delivery" && order.stages.delivery.deliveryOrders.length > 0 && (
                        <div className="space-y-2">
                          {order.stages.delivery.deliveryOrders.map((dOrder, di) => (
                            <div key={di} className="flex items-center gap-3 text-sm text-muted-foreground bg-muted/30 rounded-md px-3 py-2">
                              <span className="font-medium text-foreground">{dOrder.doNumber}</span>
                              <span>{dOrder.qty} pcs</span>
                              <DOStatusBadge status={dOrder.status} />
                              {dOrder.courier && <span className="text-xs">({dOrder.courier})</span>}
                            </div>
                          ))}
                          {order.stages.delivery.aiInsight && <AiNote text={order.stages.delivery.aiInsight} />}
                        </div>
                      )}

                      {/* Closing */}
                      {/* {stageKey === "closing" && (
                        <div className="text-sm text-muted-foreground space-y-2">
                          <div className="flex items-center gap-3 flex-wrap">
                            <span>Invoice: {formatIDR(order.stages.closing.invoiceAmount)}</span>
                            <PaymentBadge status={order.stages.closing.paymentStatus} />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs">Status PO:</span>
                            <POHealthBadge status={order.stages.closing.poHealth} />
                          </div>
                          {order.stages.closing.poHealthNote && <p className="text-xs">{order.stages.closing.poHealthNote}</p>}
                          {order.stages.closing.notes && <p className="text-xs">{order.stages.closing.notes}</p>}
                          {order.stages.closing.aiInsight && <AiNote text={order.stages.closing.aiInsight} />}
                        </div>
                      )} */}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}