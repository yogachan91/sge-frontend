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
  materialCheck: { icon: Package, label: "Cek Material & Purchasing" },
  loa: { icon: FileCheck, label: "Letter of Acceptance (LoA)" },
  production: { icon: Factory, label: "Produksi" },
  delivery: { icon: Truck, label: "Delivery Order" },
  closing: { icon: CheckCircle2, label: "Closing / Status PO" },
};

const statusStyles: Record<StageStatus, { dot: string; badge: string; label: string }> = {
  completed: { dot: "bg-[hsl(var(--success))]", badge: "bg-[hsl(var(--success))]/15 text-[hsl(var(--success))]", label: "Selesai" },
  active: { dot: "bg-primary", badge: "bg-primary/15 text-primary", label: "Aktif" },
  "at-risk": { dot: "bg-[hsl(var(--warning))]", badge: "bg-[hsl(var(--warning))]/15 text-[hsl(var(--warning))]", label: "Berisiko" },
  blocked: { dot: "bg-destructive", badge: "bg-destructive/15 text-destructive", label: "Terhambat" },
  pending: { dot: "bg-muted-foreground/40", badge: "bg-muted text-muted-foreground", label: "Menunggu" },
};

const stageOrder: OrderStage[] = ["materialCheck", "loa", "production", "delivery", "closing"];

const currentStageLabel: Record<OrderStage, string> = {
  materialCheck: "Cek Material",
  loa: "Proses LoA",
  production: "Dalam Produksi",
  delivery: "Dalam Pengiriman",
  closing: "Closing",
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

  const today = new Date(2026, 3, 11); // Current date: 2026-04-11
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
                    <span className="text-sm text-muted-foreground">{order.product}</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{order.qty.toLocaleString("id-ID")} pcs</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <DeadlineCountdown deadline={order.deadline} />
                  </div>
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
                        <div className="space-y-2">
                          {order.stages.materialCheck.materials.map((m, i) => (
                            <div key={i}>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
                                <MaterialStatusIcon status={m.status} />
                                <span>{m.name} — {m.required} {m.unit}</span>
                                <span className="text-xs text-muted-foreground/70">(stok: {m.currentStock})</span>
                                {m.status === "low" && <span className="text-[hsl(var(--warning))] font-medium text-xs">LOW</span>}
                                {m.status === "out" && <span className="text-destructive font-medium text-xs">OUT</span>}
                                {(m.status === "out" || m.status === "low") && (
                                  <CrossOrderMaterialAlert materialName={m.name} currentOrderId={order.id} />
                                )}
                              </div>
                              {/* Purchasing sub-flow */}
                              {m.purchasingOrders && m.purchasingOrders.length > 0 && (
                                <div className="ml-6 mt-1.5 pl-3 border-l-2 border-primary/20 space-y-1.5">
                                  <div className="flex items-center gap-1.5 text-xs font-medium text-primary/70">
                                    <ShoppingCart className="h-3 w-3" />
                                    <span>Purchasing Flow</span>
                                  </div>
                                  {m.purchasingOrders.map((po, pi) => (
                                    <div key={pi} className="text-xs text-muted-foreground space-y-0.5 bg-muted/50 rounded-md p-2">
                                      <div className="flex items-center gap-1.5 flex-wrap">
                                        <ArrowRight className="h-3 w-3 text-primary/50" />
                                        <span className="font-medium">{po.poNumber}</span>
                                        <span>→ {po.supplier}</span>
                                      </div>
                                      <div className="ml-4.5 space-y-0.5">
                                        <p>ETA: {po.eta} — Status: <span className={cn("font-medium", po.status === "delayed" ? "text-destructive" : po.status === "received" ? "text-[hsl(var(--success))]" : "text-primary")}>{po.status}</span></p>
                                        <p>Outstanding: {po.outstandingQty} {po.unit}</p>
                                      </div>
                                      {po.aiInsight && <AiNote text={po.aiInsight} />}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                          {order.stages.materialCheck.aiInsight && <AiNote text={order.stages.materialCheck.aiInsight} />}
                        </div>
                      )}
                      {stageKey === "materialCheck" && order.stages.materialCheck.materials.length === 0 && order.stages.materialCheck.aiInsight && (
                        <AiNote text={order.stages.materialCheck.aiInsight} />
                      )}

                      {/* LoA */}
                      {stageKey === "loa" && stage.status !== "pending" && (
                        <div className="text-sm text-muted-foreground space-y-1">
                          {order.stages.loa.loaNumber && <p className="font-medium text-foreground">{order.stages.loa.loaNumber}</p>}
                          {order.stages.loa.issuedDate && <p>Tanggal terbit: {order.stages.loa.issuedDate}</p>}
                          {order.stages.loa.referencedMaterials && <p className="text-xs">Material: {order.stages.loa.referencedMaterials}</p>}
                          {order.stages.loa.assignedJobTask && <p className="text-xs">Job: {order.stages.loa.assignedJobTask}</p>}
                          {order.stages.loa.aiInsight && <AiNote text={order.stages.loa.aiInsight} />}
                        </div>
                      )}
                      {stageKey === "loa" && stage.status === "pending" && order.stages.loa.aiInsight && (
                        <AiNote text={order.stages.loa.aiInsight} />
                      )}

                      {/* Production */}
                      {stageKey === "production" && stage.status !== "pending" && (
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <Progress value={(order.stages.production.progress / order.stages.production.target) * 100} className="h-2.5 flex-1" />
                            <span className="text-sm text-muted-foreground font-medium">
                              {order.stages.production.progress}/{order.stages.production.target}
                            </span>
                          </div>
                          <div className="flex gap-4 text-sm text-muted-foreground flex-wrap">
                            {order.stages.production.defectRate !== undefined && (
                              <span>Defect: <span className={cn("font-medium", order.stages.production.defectRate > 3 ? "text-destructive" : "text-foreground")}>{order.stages.production.defectRate}%</span></span>
                            )}
                            {order.stages.production.estimatedReady && <span>Est. ready: {order.stages.production.estimatedReady}</span>}
                            {order.stages.production.assignedLine && <span>Line: {order.stages.production.assignedLine}</span>}
                          </div>
                          {/* Process Layers */}
                          {order.stages.production.processLayers && order.stages.production.processLayers.length > 0 && (
                            <div className="space-y-1.5">
                              <div className="flex items-center gap-3 flex-wrap">
                                {order.stages.production.processLayers.map((layer, li) => (
                                  <div key={li} className="flex items-center gap-1.5 text-sm">
                                    <ProcessLayerBadge status={layer.status} />
                                    <span className={cn("text-muted-foreground", layer.status === "flagged" && "text-destructive font-medium")}>{layer.name}</span>
                                    {layer.defectRate !== undefined && layer.status === "flagged" && (
                                      <span className="text-xs text-destructive">({layer.defectRate}%)</span>
                                    )}
                                  </div>
                                ))}
                              </div>
                              {/* NG Codes for flagged layers */}
                              {order.stages.production.processLayers
                                .filter(layer => layer.status === "flagged" && layer.ngCode)
                                .map((layer, li) => (
                                  <div key={li} className="flex items-center gap-2 text-xs bg-destructive/5 rounded-md px-2.5 py-1.5 border border-destructive/10">
                                    <XCircle className="h-3.5 w-3.5 text-destructive shrink-0" />
                                    <span className="text-destructive font-mono font-medium">{layer.ngCode}</span>
                                    <span className="text-muted-foreground">— {layer.ngReason}</span>
                                  </div>
                                ))}
                            </div>
                          )}
                          {order.stages.production.bottleneck && (
                            <div className="flex items-center gap-2 text-xs text-destructive bg-destructive/5 rounded-md px-2.5 py-1.5">
                              <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
                              <span>Bottleneck: {order.stages.production.bottleneck}</span>
                            </div>
                          )}
                          {order.stages.production.aiInsight && <AiNote text={order.stages.production.aiInsight} />}
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
                      {stageKey === "closing" && (
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
                      )}
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