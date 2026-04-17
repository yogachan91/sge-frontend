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
  productionKPIs,
  machines,
  dailyProduction,
  downtimeBreakdown,
  formatNumber,
  productionInsights,
} from "@/data/mockData";
import {
  Factory,
  Gauge,
  Clock,
  AlertTriangle,
  ChevronDown,
  ShieldAlert,
  Sparkles,
  Lightbulb,
  Target,
  TrendingUp,
  Award,
  BrainCircuit,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { cn } from "@/lib/utils";

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

const Production = () => {
  const [showDataExplorer, setShowDataExplorer] = useState(false);

  return (
    <DashboardLayout title="Produksi">
      <div className="space-y-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <KPICard
            title="Output Harian"
            value={`${formatNumber(productionKPIs.dailyOutput.value)} pcs`}
            subtitle={`Target: ${formatNumber(productionKPIs.dailyOutput.target)}`}
            icon={Factory}
            trend="down"
            trendValue="96.7%"
          />
          <KPICard title="OEE" value={`${productionKPIs.oee.value}%`} icon={Gauge} trend="up" trendValue="+1.2%" />
          <KPICard title="Total Downtime" value={`${productionKPIs.totalDowntime.value} jam`} icon={Clock} trend="down" trendValue="5.7 jam" />
          <KPICard title="Avg Defect Rate" value={`${productionKPIs.avgDefectRate.value}%`} icon={AlertTriangle} trend="neutral" trendValue="Stabil" />
        </div>

        {/* AI Summary */}
        <Card className="border-border/50 border-l-4 border-l-primary bg-primary/5">
          <CardContent className="pt-5 space-y-2">
            <div className="flex items-center gap-2">
              <BrainCircuit className="h-5 w-5 text-primary" />
              <h2 className="text-sm font-semibold text-foreground">Ringkasan AI — Produksi Hari Ini</h2>
            </div>
            <p className="text-sm text-foreground/90 leading-relaxed">{productionInsights.summary}</p>
          </CardContent>
        </Card>

        {/* Production Alerts */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-foreground" />
            <h2 className="text-base font-semibold text-foreground">Peringatan Produksi</h2>
          </div>
          <Accordion type="multiple" className="space-y-3">
            {productionInsights.alerts.map((alert, i) => (
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
                      <span className="text-xs font-semibold text-foreground uppercase tracking-wide">Dampak ke Produksi</span>
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
            Data Explorer — Grafik & Tabel Produksi
          </button>
          {showDataExplorer && (
            <div className="space-y-4">
              {/* Charts row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <Card className="lg:col-span-2 border-border/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Output vs Target (7 Hari Terakhir)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={260}>
                      <BarChart data={dailyProduction} barGap={4}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis dataKey="day" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                        <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                        <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid hsl(var(--border))", fontSize: 12 }} />
                        <Bar dataKey="output" name="Output" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="target" name="Target" fill="hsl(var(--chart-1) / 0.25)" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Breakdown Downtime</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={260}>
                      <PieChart>
                        <Pie data={downtimeBreakdown} cx="50%" cy="50%" innerRadius={55} outerRadius={85} dataKey="value" paddingAngle={3}>
                          {downtimeBreakdown.map((entry, i) => (
                            <Cell key={i} fill={entry.fill} />
                          ))}
                        </Pie>
                        <Legend iconSize={8} wrapperStyle={{ fontSize: 12 }} />
                        <Tooltip contentStyle={{ borderRadius: 8, fontSize: 12 }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Machine table */}
              <Card className="border-border/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Performa Per Mesin</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Nama</TableHead>
                        <TableHead>Tipe</TableHead>
                        <TableHead className="text-right">Output</TableHead>
                        <TableHead className="text-right">Target</TableHead>
                        <TableHead className="text-right">OEE %</TableHead>
                        <TableHead className="text-right">Downtime (jam)</TableHead>
                        <TableHead className="text-right">Defect %</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {machines.map((m) => (
                        <TableRow key={m.id}>
                          <TableCell className="font-mono text-xs">{m.id}</TableCell>
                          <TableCell>{m.name}</TableCell>
                          <TableCell>{m.type}</TableCell>
                          <TableCell className="text-right">{formatNumber(m.dailyOutput)}</TableCell>
                          <TableCell className="text-right">{formatNumber(m.target)}</TableCell>
                          <TableCell className={cn("text-right font-medium", m.oee >= 90 ? "text-success" : m.oee >= 80 ? "text-foreground" : "text-destructive")}>
                            {m.oee}%
                          </TableCell>
                          <TableCell className="text-right">{m.downtime}</TableCell>
                          <TableCell className={cn("text-right font-medium", m.defectRate > 3 ? "text-destructive" : "text-foreground")}>
                            {m.defectRate}%
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}
        </section>

        {/* Optimization Opportunities */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-foreground" />
            <h2 className="text-base font-semibold text-foreground">Peluang Optimasi</h2>
          </div>
          <p className="text-sm text-muted-foreground">Berdasarkan data produksi Anda, berikut langkah yang bisa meningkatkan output dan efisiensi.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {productionInsights.opportunities.map((opp, i) => {
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

export default Production;
