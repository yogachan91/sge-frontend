import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  currencyData,
  commodityPrices,
  formatIDR,
  aiInsights,
  growthOpportunities,
  performanceReview,
} from "@/data/mockData";
import {
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
import {
  AlertTriangle,
  TrendingUp,
  Users,
  Award,
  Handshake,
  CheckCircle2,
  XCircle,
  ChevronDown,
  Lightbulb,
  ShieldAlert,
  Target,
  Sparkles,
  Clock,
} from "lucide-react";

const impactBadge = {
  high: { label: "Dampak Tinggi", className: "bg-destructive/15 text-destructive border-destructive/30" },
  medium: { label: "Dampak Sedang", className: "bg-warning/15 text-warning border-warning/30" },
  positive: { label: "Positif", className: "bg-success/15 text-success border-success/30" },
};

const impactIcon = {
  high: <AlertTriangle className="h-5 w-5 text-destructive" />,
  medium: <ShieldAlert className="h-5 w-5 text-warning" />,
  positive: <Sparkles className="h-5 w-5 text-success" />,
};

const impactBorder = {
  high: "border-l-destructive",
  medium: "border-l-warning",
  positive: "border-l-success",
};

const growthIcons = {
  "trending-up": TrendingUp,
  users: Users,
  award: Award,
  handshake: Handshake,
};

const External = () => {
  const [rate, setRate] = useState(currencyData.currentRate);
  const [showDataExplorer, setShowDataExplorer] = useState(false);
  const rateDiff = ((rate - currencyData.previousRate) / currencyData.previousRate) * 100;
  const costImpact = (currencyData.monthlyImportCost * (rate - currencyData.previousRate)) / currencyData.currentRate;
  const marginImpact = 20.8 - rateDiff * 0.2;

  return (
    <DashboardLayout title="AI Expert">
      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">
            Analisis dampak faktor eksternal terhadap bisnis PT Sentra Global Elektrindo — rekomendasi berbasis data untuk pengambilan keputusan.
          </p>
        </div>

        {/* Section 1: Impact Alerts */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-foreground" />
            <h2 className="text-base font-semibold text-foreground">Peringatan Dampak Bisnis</h2>
          </div>
          <Accordion type="multiple" className="space-y-3">
            {aiInsights.map((insight, i) => (
              <AccordionItem
                key={i}
                value={`insight-${i}`}
                className={cn(
                  "border border-border/50 rounded-lg overflow-hidden border-l-4",
                  impactBorder[insight.impactLevel]
                )}
              >
                <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-muted/50 [&[data-state=open]>svg]:rotate-180">
                  <div className="flex items-center gap-3 flex-1 text-left">
                    {impactIcon[insight.impactLevel]}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-medium text-foreground">{insight.title}</span>
                        <Badge variant="outline" className={cn("text-xs shrink-0", impactBadge[insight.impactLevel].className)}>
                          {impactBadge[insight.impactLevel].label}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">{insight.source}</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0 mr-2">
                      <Clock className="h-3 w-3" />
                      {insight.timeframe}
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 space-y-4">
                  {/* Affects Company */}
                  <div className="rounded-lg bg-muted/50 p-3 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-primary" />
                      <span className="text-xs font-semibold text-foreground uppercase tracking-wide">Apakah Berdampak ke Bisnis Saya?</span>
                    </div>
                    <p className="text-sm text-foreground/90 leading-relaxed">{insight.affectsExplanation}</p>
                  </div>

                  {/* Risk Analysis */}
                  <div className="rounded-lg bg-destructive/5 border border-destructive/10 p-3 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="h-4 w-4 text-destructive" />
                      <span className="text-xs font-semibold text-foreground uppercase tracking-wide">Analisis Risiko</span>
                    </div>
                    <p className="text-sm text-foreground/90 leading-relaxed">{insight.riskAnalysis}</p>
                  </div>

                  {/* Recommendations */}
                  <div className="rounded-lg bg-primary/5 border border-primary/10 p-3 space-y-2">
                    <div className="flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-primary" />
                      <span className="text-xs font-semibold text-foreground uppercase tracking-wide">Rekomendasi untuk Anda</span>
                    </div>
                    <ol className="space-y-1.5">
                      {insight.recommendations.map((rec, j) => (
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

        {/* Section 2: Data Explorer (Collapsible) */}
        <section className="space-y-3">
          <button
            onClick={() => setShowDataExplorer(!showDataExplorer)}
            className="flex items-center gap-2 text-base font-semibold text-foreground hover:text-primary transition-colors"
          >
            <ChevronDown className={cn("h-4 w-4 transition-transform", showDataExplorer && "rotate-180")} />
            Data Explorer — Kurs & Komoditas
          </button>
          {showDataExplorer && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Currency Simulator */}
              <Card className="border-border/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Simulator Dampak Kurs USD/IDR</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Kurs USD/IDR</span>
                    <span className="text-2xl font-semibold text-foreground">Rp {rate.toLocaleString("id-ID")}</span>
                  </div>
                  <Slider value={[rate]} onValueChange={(v) => setRate(v[0])} min={14500} max={17000} step={50} />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Rp 14.500</span>
                    <span>Rp 17.000</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    <div className="rounded-lg bg-muted p-3 text-center">
                      <p className="text-xs text-muted-foreground">Perubahan Kurs</p>
                      <p className={cn("text-lg font-semibold", rateDiff > 0 ? "text-destructive" : "text-success")}>
                        {rateDiff > 0 ? "+" : ""}{rateDiff.toFixed(1)}%
                      </p>
                    </div>
                    <div className="rounded-lg bg-muted p-3 text-center">
                      <p className="text-xs text-muted-foreground">Dampak Biaya</p>
                      <p className={cn("text-lg font-semibold", costImpact > 0 ? "text-destructive" : "text-success")}>
                        {costImpact > 0 ? "+" : ""}{formatIDR(Math.abs(costImpact))}
                      </p>
                    </div>
                    <div className="rounded-lg bg-muted p-3 text-center">
                      <p className="text-xs text-muted-foreground">Est. Margin</p>
                      <p className="text-lg font-semibold text-foreground">{marginImpact.toFixed(1)}%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Commodity Chart */}
              <Card className="border-border/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Tren Harga Komoditas (IDR/kg)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={240}>
                    <LineChart data={commodityPrices}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                      <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                      <Tooltip contentStyle={{ borderRadius: 8, fontSize: 12 }} formatter={(v: number) => `Rp ${v.toLocaleString("id-ID")}`} />
                      <Legend iconSize={8} wrapperStyle={{ fontSize: 12 }} />
                      <Line type="monotone" dataKey="cotton" name="Tembaga" stroke="hsl(var(--chart-1))" strokeWidth={2} dot={{ r: 3 }} />
                      <Line type="monotone" dataKey="polyester" name="PVC" stroke="hsl(var(--chart-2))" strokeWidth={2} dot={{ r: 3 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          )}
        </section>

        {/* Section 3: Growth Opportunities */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-foreground" />
            <h2 className="text-base font-semibold text-foreground">Peluang Pertumbuhan</h2>
          </div>
          <p className="text-sm text-muted-foreground">Berdasarkan data Anda, berikut yang perlu tim fokuskan untuk mencapai target.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {growthOpportunities.map((opp, i) => {
              const Icon = growthIcons[opp.icon];
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

        {/* Section 4: Performance Review */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-foreground" />
            <h2 className="text-base font-semibold text-foreground">Review Performa & Rekomendasi</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Good */}
            <Card className="border-border/50 border-l-4 border-l-success">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  Yang Sudah Baik
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {performanceReview.good.map((item, i) => (
                  <div key={i} className="space-y-1 pb-3 border-b border-border/30 last:border-0 last:pb-0">
                    <h4 className="text-sm font-medium text-foreground">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.detail}</p>
                    <p className="text-xs text-success font-medium">→ {item.recommendation}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Improve */}
            <Card className="border-border/50 border-l-4 border-l-warning">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <XCircle className="h-4 w-4 text-warning" />
                  Perlu Ditingkatkan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {performanceReview.improve.map((item, i) => (
                  <div key={i} className="space-y-1 pb-3 border-b border-border/30 last:border-0 last:pb-0">
                    <h4 className="text-sm font-medium text-foreground">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.detail}</p>
                    <p className="text-xs text-warning font-medium">→ {item.recommendation}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
};

export default External;
