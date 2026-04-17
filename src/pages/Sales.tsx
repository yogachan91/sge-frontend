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
  salesKPIs,
  monthlyRevenue,
  topCustomers,
  productMargins,
  arAging,
  formatIDR,
  salesInsights,
} from "@/data/mockData";
import {
  DollarSign,
  TrendingUp,
  Percent,
  AlertCircle,
  AlertTriangle,
  ShieldAlert,
  Sparkles,
  Lightbulb,
  Target,
  Award,
  BrainCircuit,
  ChevronDown,
  Clock,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { cn } from "@/lib/utils";

const revenueChartData = monthlyRevenue.map((d) => ({
  ...d,
  revenue: d.revenue / 1000000,
  target: d.target / 1000000,
}));

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

const Sales = () => {
  const [showDataExplorer, setShowDataExplorer] = useState(false);

  return (
    <DashboardLayout title="Penjualan & Revenue">
      <div className="space-y-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <KPICard title="Revenue Bulanan" value={formatIDR(salesKPIs.monthlyRevenue.value)} icon={DollarSign} trend="up" trendValue="+7.0%" />
          <KPICard title="Revenue vs Target" value={`${salesKPIs.revenueVsTarget.value}%`} icon={TrendingUp} trend="up" trendValue="On track" />
          <KPICard title="Avg Profit Margin" value={`${salesKPIs.avgMargin.value}%`} icon={Percent} trend="neutral" trendValue="Stabil" />
          <KPICard title="AR Jatuh Tempo" value={formatIDR(salesKPIs.overdueAR.value)} icon={AlertCircle} trend="down" trendValue="6 invoice" />
        </div>

        {/* AI Summary */}
        <Card className="border-border/50 border-l-4 border-l-primary bg-primary/5">
          <CardContent className="pt-5 space-y-2">
            <div className="flex items-center gap-2">
              <BrainCircuit className="h-5 w-5 text-primary" />
              <h2 className="text-sm font-semibold text-foreground">Ringkasan AI — Penjualan & Revenue</h2>
            </div>
            <p className="text-sm text-foreground/90 leading-relaxed">{salesInsights.summary}</p>
          </CardContent>
        </Card>

        {/* Sales Alerts */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-foreground" />
            <h2 className="text-base font-semibold text-foreground">Peringatan Penjualan</h2>
          </div>
          <Accordion type="multiple" className="space-y-3">
            {salesInsights.alerts.map((alert, i) => (
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
            Data Explorer — Grafik & Tabel Penjualan
          </button>
          {showDataExplorer && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Card className="border-border/50">
                  <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">Revenue vs Target (6 Bulan, dalam Juta Rp)</CardTitle></CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={260}>
                      <LineChart data={revenueChartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                        <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                        <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid hsl(var(--border))", fontSize: 12 }} formatter={(v: number) => `Rp ${v} jt`} />
                        <Legend iconSize={8} wrapperStyle={{ fontSize: 12 }} />
                        <Line type="monotone" dataKey="revenue" name="Revenue" stroke="hsl(var(--chart-1))" strokeWidth={2} dot={{ r: 4 }} />
                        <Line type="monotone" dataKey="target" name="Target" stroke="hsl(var(--chart-3))" strokeWidth={2} strokeDasharray="5 5" dot={{ r: 3 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">Profit Margin per Produk</CardTitle></CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={260}>
                      <BarChart data={productMargins} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis type="number" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" unit="%" />
                        <YAxis dataKey="product" type="category" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" width={80} />
                        <Tooltip contentStyle={{ borderRadius: 8, fontSize: 12 }} formatter={(v: number) => `${v}%`} />
                        <Bar dataKey="margin" name="Margin" fill="hsl(var(--chart-2))" radius={[0, 4, 4, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Card className="border-border/50">
                  <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">Top 5 Pelanggan</CardTitle></CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Pelanggan</TableHead>
                          <TableHead className="text-right">Revenue</TableHead>
                          <TableHead className="text-right">Order</TableHead>
                          <TableHead className="text-right">Margin</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {topCustomers.map((c) => (
                          <TableRow key={c.name}>
                            <TableCell className="font-medium">{c.name}</TableCell>
                            <TableCell className="text-right">{formatIDR(c.revenue)}</TableCell>
                            <TableCell className="text-right">{c.orders}</TableCell>
                            <TableCell className="text-right">{c.margin}%</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardHeader className="pb-2"><CardTitle className="text-sm font-medium">AR Aging</CardTitle></CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Kategori</TableHead>
                          <TableHead className="text-right">Jumlah</TableHead>
                          <TableHead className="text-right">Invoice</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {arAging.map((a) => (
                          <TableRow key={a.bucket}>
                            <TableCell className="font-medium">{a.bucket}</TableCell>
                            <TableCell className="text-right">{formatIDR(a.amount)}</TableCell>
                            <TableCell className="text-right">{a.count}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </section>

        {/* Growth Opportunities */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-foreground" />
            <h2 className="text-base font-semibold text-foreground">Peluang Pertumbuhan</h2>
          </div>
          <p className="text-sm text-muted-foreground">Berdasarkan data penjualan Anda, berikut langkah yang bisa meningkatkan revenue dan profitabilitas.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {salesInsights.opportunities.map((opp, i) => {
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

export default Sales;
