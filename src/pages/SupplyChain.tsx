import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import KPICard from "@/components/KPICard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  supplyChainKPIs,
  rawMaterials,
  suppliers,
  materialCostTrend,
  formatNumber,
  supplyChainInsights,
} from "@/data/mockData";
import {
  Package,
  AlertTriangle,
  Star,
  TrendingUp,
  BrainCircuit,
  ShieldAlert,
  Lightbulb,
  Target,
  Sparkles,
  Award,
  ChevronDown,
  Clock,
} from "lucide-react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { cn } from "@/lib/utils";

const statusConfig = {
  ok: { label: "Aman", className: "bg-success/15 text-success border-success/30" },
  low: { label: "Rendah", className: "bg-warning/15 text-warning border-warning/30" },
  critical: { label: "Kritis", className: "bg-destructive/15 text-destructive border-destructive/30" },
};

const alertBadge = {
  high: { label: "Kritis", className: "bg-destructive/15 text-destructive border-destructive/30" },
  medium: { label: "Perhatian", className: "bg-warning/15 text-warning border-warning/30" },
};

const alertIcon = {
  high: <AlertTriangle className="h-5 w-5 text-destructive" />,
  medium: <ShieldAlert className="h-5 w-5 text-warning" />,
};

const alertBorder = {
  high: "border-l-destructive",
  medium: "border-l-warning",
};

const oppIcons = {
  "trending-up": TrendingUp,
  award: Award,
};

const SupplyChain = () => {
  const [showDataExplorer, setShowDataExplorer] = useState(false);

  return (
    <DashboardLayout title="Supply Chain">
      <div className="space-y-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <KPICard title="Total SKU" value={`${supplyChainKPIs.totalSKUs.value}`} icon={Package} />
          <KPICard title="Stok Rendah" value={`${supplyChainKPIs.lowStockItems.value} items`} icon={AlertTriangle} trend="down" trendValue="Perlu reorder" />
          <KPICard title="Avg Supplier Score" value={`${supplyChainKPIs.avgSupplierScore.value}/100`} icon={Star} trend="up" trendValue="+2.1" />
          <KPICard title="Kenaikan Biaya Material" value={`+${supplyChainKPIs.materialCostChange.value}%`} icon={TrendingUp} trend="down" trendValue="3 bulan" />
        </div>

        {/* AI Summary */}
        <Card className="border-border/50 border-l-4 border-l-primary bg-primary/5">
          <CardContent className="pt-5 space-y-2">
            <div className="flex items-center gap-2">
              <BrainCircuit className="h-5 w-5 text-primary" />
              <h2 className="text-sm font-semibold text-foreground">Ringkasan AI — Supply Chain</h2>
            </div>
            <p className="text-sm text-foreground/90 leading-relaxed">{supplyChainInsights.summary}</p>
          </CardContent>
        </Card>

        {/* Supply Chain Alerts */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-foreground" />
            <h2 className="text-base font-semibold text-foreground">Peringatan Supply Chain</h2>
          </div>
          <Accordion type="multiple" className="space-y-3">
            {supplyChainInsights.alerts.map((alert, i) => (
              <AccordionItem
                key={i}
                value={`alert-${i}`}
                className={cn(
                  "border border-border/50 rounded-lg overflow-hidden border-l-4",
                  alertBorder[alert.impactLevel]
                )}
              >
                <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-muted/50 [&[data-state=open]>svg]:rotate-180">
                  <div className="flex items-center gap-3 flex-1 text-left">
                    {alertIcon[alert.impactLevel]}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-medium text-foreground">{alert.title}</span>
                        <Badge variant="outline" className={cn("text-xs shrink-0", alertBadge[alert.impactLevel].className)}>
                          {alertBadge[alert.impactLevel].label}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0 mr-2">
                      <Clock className="h-3 w-3" />
                      {alert.timeframe}
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 space-y-4">
                  <div className="rounded-lg bg-muted/50 p-3 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-primary" />
                      <span className="text-xs font-semibold text-foreground uppercase tracking-wide">Dampak ke Bisnis</span>
                    </div>
                    <p className="text-sm text-foreground/90 leading-relaxed">{alert.impactExplanation}</p>
                  </div>
                  <div className="rounded-lg bg-destructive/5 border border-destructive/10 p-3 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="h-4 w-4 text-destructive" />
                      <span className="text-xs font-semibold text-foreground uppercase tracking-wide">Analisis Risiko</span>
                    </div>
                    <p className="text-sm text-foreground/90 leading-relaxed">{alert.riskAnalysis}</p>
                  </div>
                  <div className="rounded-lg bg-primary/5 border border-primary/10 p-3 space-y-2">
                    <div className="flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-primary" />
                      <span className="text-xs font-semibold text-foreground uppercase tracking-wide">Rekomendasi untuk Anda</span>
                    </div>
                    <ol className="space-y-1.5">
                      {alert.recommendations.map((rec, j) => (
                        <li key={j} className="text-sm text-foreground/90 leading-relaxed flex gap-2">
                          <span className="text-primary font-semibold shrink-0">{j + 1}.</span>
                          {rec}
                        </li>
                      ))}
                    </ol>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Data Explorer (Collapsible) */}
        <section className="space-y-3">
          <button
            onClick={() => setShowDataExplorer(!showDataExplorer)}
            className="flex items-center gap-2 text-base font-semibold text-foreground hover:text-primary transition-colors"
          >
            <ChevronDown className={cn("h-4 w-4 transition-transform", showDataExplorer && "rotate-180")} />
            Data Explorer — Stok, Supplier & Tren Biaya
          </button>
          {showDataExplorer && (
            <div className="space-y-4">
              <Card className="border-border/50">
                <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">Stok Bahan Baku</CardTitle></CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>SKU</TableHead>
                        <TableHead>Material</TableHead>
                        <TableHead className="text-right">Stok</TableHead>
                        <TableHead className="text-right">Reorder Point</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {rawMaterials.map((m) => (
                        <TableRow key={m.sku}>
                          <TableCell className="font-mono text-xs">{m.sku}</TableCell>
                          <TableCell className="font-medium">{m.name}</TableCell>
                          <TableCell className="text-right">{formatNumber(m.stock)} {m.unit}</TableCell>
                          <TableCell className="text-right">{formatNumber(m.reorderPoint)} {m.unit}</TableCell>
                          <TableCell>
                            <Badge variant="outline" className={cn("text-xs", statusConfig[m.status].className)}>
                              {statusConfig[m.status].label}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Card className="border-border/50">
                  <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">Skor Performa Supplier</CardTitle></CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={260}>
                      <BarChart data={suppliers} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                        <YAxis dataKey="name" type="category" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" width={130} />
                        <Tooltip contentStyle={{ borderRadius: 8, fontSize: 12 }} />
                        <Bar dataKey="score" name="Skor" fill="hsl(var(--chart-1))" radius={[0, 4, 4, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">Tren Biaya Material (Rp/unit)</CardTitle></CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={260}>
                      <LineChart data={materialCostTrend}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                        <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                        <Tooltip contentStyle={{ borderRadius: 8, fontSize: 12 }} />
                        <Legend iconSize={8} wrapperStyle={{ fontSize: 12 }} />
                        <Line type="monotone" dataKey="katun" name="Wire (Tembaga)" stroke="hsl(var(--chart-1))" strokeWidth={2} dot={{ r: 4 }} />
                        <Line type="monotone" dataKey="polyester" name="PVC Insulation" stroke="hsl(var(--chart-2))" strokeWidth={2} dot={{ r: 4 }} />
                        <Line type="monotone" dataKey="benang" name="Terminal" stroke="hsl(var(--chart-3))" strokeWidth={2} dot={{ r: 4 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </section>

        {/* Optimization Opportunities */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-foreground" />
            <h2 className="text-base font-semibold text-foreground">Peluang Optimasi</h2>
          </div>
          <p className="text-sm text-muted-foreground">Berdasarkan data supply chain Anda, berikut langkah yang bisa mengoptimalkan biaya dan keandalan pasokan.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {supplyChainInsights.opportunities.map((opp, i) => {
              const Icon = oppIcons[opp.icon];
              return (
                <Card key={i} className="border-border/50">
                  <CardContent className="pt-5 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="rounded-lg bg-primary/10 p-2 shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm font-semibold text-foreground">{opp.title}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">{opp.description}</p>
                      </div>
                    </div>
                    <div className="rounded-lg bg-primary/5 border border-primary/10 p-3">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Target className="h-3.5 w-3.5 text-primary" />
                        <span className="text-xs font-semibold text-primary">Langkah Aksi</span>
                      </div>
                      <p className="text-xs text-foreground/80 leading-relaxed">{opp.action}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default SupplyChain;