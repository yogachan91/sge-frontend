// import { useState, useMemo } from "react";
// import DashboardLayout from "@/components/DashboardLayout";
// import OrderMilestone from "@/components/OrderMilestone";
// import { orders, formatIDR } from "@/data/mockData";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { ClipboardList, AlertTriangle, CheckCircle2, Banknote, Search, ShieldAlert, Timer } from "lucide-react";

// const ITEMS_PER_PAGE = 3;

// const Dashboard = () => {
//   const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
//   const [searchQuery, setSearchQuery] = useState("");

//   const filteredOrders = useMemo(() => {
//     const q = searchQuery.toLowerCase().trim();
//     if (!q) return orders;
//     return orders.filter(
//       (o) =>
//         o.id.toLowerCase().includes(q) ||
//         o.client.toLowerCase().includes(q) ||
//         o.product.toLowerCase().includes(q)
//     );
//   }, [searchQuery]);

//   const sortedOrders = useMemo(
//     () =>
//       [...filteredOrders].sort((a, b) => {
//         const stageWeight = { materialCheck: 1, loa: 2, production: 3, delivery: 4, closing: 5 };
//         const aCompleted = a.currentStage === "closing" && a.stages.closing.status === "completed";
//         const bCompleted = b.currentStage === "closing" && b.stages.closing.status === "completed";
//         if (aCompleted !== bCompleted) return aCompleted ? 1 : -1;
//         return stageWeight[a.currentStage] - stageWeight[b.currentStage];
//       }),
//     [filteredOrders]
//   );

//   const visibleOrders = sortedOrders.slice(0, visibleCount);
//   const hasMore = visibleCount < sortedOrders.length;

//   const stats = useMemo(() => {
//     const active = orders.filter(
//       (o) => !(o.currentStage === "closing" && o.stages.closing.status === "completed")
//     ).length;
//     const atRisk = orders.filter((o) => {
//       const s = o.stages[o.currentStage].status;
//       return s === "at-risk" || s === "blocked";
//     }).length;
//     const completed = orders.filter(
//       (o) => o.currentStage === "closing" && o.stages.closing.status === "completed"
//     ).length;
//     const totalRevenue = orders.reduce((sum, o) => sum + o.stages.closing.invoiceAmount, 0);

//     // Revenue at Risk: sum of invoice amounts for orders with at-risk or blocked current stage
//     const revenueAtRisk = orders
//       .filter((o) => {
//         const s = o.stages[o.currentStage].status;
//         return s === "at-risk" || s === "blocked";
//       })
//       .reduce((sum, o) => sum + o.stages.closing.invoiceAmount, 0);

//     // OTD Rate: completed orders delivered on or before deadline
//     const completedOrders = orders.filter(
//       (o) => o.currentStage === "closing" && o.stages.closing.status === "completed"
//     );
//     const onTimeCount = completedOrders.filter((o) => {
//       return o.stages.closing.poHealth === "good";
//     }).length;
//     const otdRate = completedOrders.length > 0 ? Math.round((onTimeCount / completedOrders.length) * 100) : 0;

//     return { active, atRisk, completed, totalRevenue, revenueAtRisk, otdRate };
//   }, []);

//   const kpis = [
//     { label: "Order Aktif", value: String(stats.active), icon: ClipboardList, color: "text-primary" },
//     { label: "Perlu Perhatian", value: String(stats.atRisk), icon: AlertTriangle, color: "text-[hsl(var(--warning))]" },
//     { label: "Selesai", value: String(stats.completed), icon: CheckCircle2, color: "text-[hsl(var(--success))]" },
//     { label: "Revenue at Risk", value: formatIDR(stats.revenueAtRisk), icon: ShieldAlert, color: "text-destructive" },
//     { label: "OTD Rate", value: `${stats.otdRate}%`, icon: Timer, color: "text-[hsl(var(--success))]" },
//     { label: "Total Pipeline", value: formatIDR(stats.totalRevenue), icon: Banknote, color: "text-primary" },
//   ];

//   return (
//     <DashboardLayout title="Dashboard — Order Pipeline">
//       {/* Stats Row */}
//       <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 mb-6">
//         {kpis.map((kpi) => (
//           <Card key={kpi.label}>
//             <CardContent className="p-4 flex items-center gap-3">
//               <kpi.icon className={`h-5 w-5 ${kpi.color} shrink-0`} />
//               <div>
//                 <p className="text-xs text-muted-foreground">{kpi.label}</p>
//                 <p className="text-lg font-bold text-foreground">{kpi.value}</p>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       {/* Search Bar */}
//       <div className="relative mb-6">
//         <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//         <Input
//           placeholder="Cari PO number atau nama client..."
//           value={searchQuery}
//           onChange={(e) => {
//             setSearchQuery(e.target.value);
//             setVisibleCount(ITEMS_PER_PAGE);
//           }}
//           className="pl-10 h-11 text-sm"
//         />
//       </div>

//       {/* Order Cards */}
//       <div className="space-y-4">
//         {visibleOrders.length === 0 && (
//           <div className="text-center py-12 text-muted-foreground">
//             <p className="text-sm">Tidak ada order yang cocok dengan pencarian.</p>
//           </div>
//         )}
//         {visibleOrders.map((order) => (
//           <OrderMilestone key={order.id} order={order} />
//         ))}
//       </div>

//       {/* Load More */}
//       {hasMore && (
//         <div className="flex justify-center mt-6">
//           <Button
//             variant="outline"
//             onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
//           >
//             Tampilkan Lebih Banyak ({sortedOrders.length - visibleCount} order lagi)
//           </Button>
//         </div>
//       )}
//     </DashboardLayout>
//   );
// };

// export default Dashboard;

"use client";

import { useState, useMemo, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import OrderMilestone from "@/components/OrderMilestone";
import { formatIDR } from "@/data/mockData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ClipboardList,
  AlertTriangle,
  CheckCircle2,
  Banknote,
  Search,
  ShieldAlert,
  Timer,
} from "lucide-react";

const ITEMS_PER_PAGE = 3;

// =========================
// NORMALIZER (🔥 WAJIB)
// =========================
const normalizeOrder = (item: any) => ({
  id: item.id,
  client: item.client,
  product: item.product,
  qty: item.qty || 0,
  deadline: item.deadline,
  poDate: item.po_date,
  currentStage: item.current_stage, // 🔥 FIX snake_case → camelCase
  stageEnteredDate: item.stage_entered_date,
  stages: item.stages || {},
  partNumbers: item.part_number || [], // 🔥 anti undefined
});

const Dashboard = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  // =========================
  // FETCH API
  // =========================
  const fetchOrders = async (filter = "") => {
    try {
      setLoading(true);

      const res = await fetch("http://100.124.115.86:8080/search-po", {
    //    const res = await fetch("http://localhost:8080/search-po", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filters: filter,
        }),
      });

      const data = await res.json();

      // 🔥 NORMALIZE DATA
      const normalized = (data || []).map(normalizeOrder);

      setOrders(normalized);
    } catch (err) {
      console.error("Error fetch orders:", err);
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // INITIAL LOAD
  // =========================
  useEffect(() => {
    fetchOrders("");
  }, []);

  // =========================
  // DEBOUNCE SEARCH
  // =========================
  useEffect(() => {
    const delay = setTimeout(() => {
      fetchOrders(searchQuery);
    }, 500);

    return () => clearTimeout(delay);
  }, [searchQuery]);

  // =========================
  // SORT
  // =========================
  const sortedOrders = useMemo(() => {
    const stageWeight: any = {
      materialCheck: 1,
      loa: 2,
      production: 3,
      delivery: 4,
      closing: 5,
    };

    return [...orders].sort((a, b) => {
      const aStage = a.currentStage;
      const bStage = b.currentStage;

      const aCompleted =
        aStage === "closing" &&
        a.stages?.closing?.status === "completed";

      const bCompleted =
        bStage === "closing" &&
        b.stages?.closing?.status === "completed";

      if (aCompleted !== bCompleted) return aCompleted ? 1 : -1;

      return (stageWeight[aStage] || 0) - (stageWeight[bStage] || 0);
    });
  }, [orders]);

  // =========================
  // PAGINATION
  // =========================
  const visibleOrders = sortedOrders.slice(0, visibleCount);
  const hasMore = visibleCount < sortedOrders.length;

  // =========================
  // KPI
  // =========================
  const stats = useMemo(() => {
    const active = orders.filter(
      (o) =>
        !(
          o.currentStage === "closing" &&
          o.stages?.closing?.status === "completed"
        )
    ).length;

    const atRisk = orders.filter((o) => {
      const s = o.stages?.[o.currentStage]?.status;
      return s === "at-risk" || s === "blocked";
    }).length;

    const completed = orders.filter(
      (o) =>
        o.currentStage === "closing" &&
        o.stages?.closing?.status === "completed"
    ).length;

    const totalRevenue = orders.reduce(
      (sum, o) => sum + (o.stages?.closing?.invoiceAmount || 0),
      0
    );

    const revenueAtRisk = orders
      .filter((o) => {
        const s = o.stages?.[o.currentStage]?.status;
        return s === "at-risk" || s === "blocked";
      })
      .reduce(
        (sum, o) => sum + (o.stages?.closing?.invoiceAmount || 0),
        0
      );

    const completedOrders = orders.filter(
      (o) =>
        o.currentStage === "closing" &&
        o.stages?.closing?.status === "completed"
    );

    const onTimeCount = completedOrders.filter(
      (o) => o.stages?.closing?.poHealth === "good"
    ).length;

    const otdRate =
      completedOrders.length > 0
        ? Math.round((onTimeCount / completedOrders.length) * 100)
        : 0;

    return {
      active,
      atRisk,
      completed,
      totalRevenue,
      revenueAtRisk,
      otdRate,
    };
  }, [orders]);

  const kpis = [
    { label: "Order Aktif", value: String(stats.active), icon: ClipboardList, color: "text-primary" },
    { label: "Perlu Perhatian", value: String(stats.atRisk), icon: AlertTriangle, color: "text-[hsl(var(--warning))]" },
    { label: "Selesai", value: String(stats.completed), icon: CheckCircle2, color: "text-[hsl(var(--success))]" },
    { label: "Revenue at Risk", value: formatIDR(stats.revenueAtRisk), icon: ShieldAlert, color: "text-destructive" },
    { label: "OTD Rate", value: `${stats.otdRate}%`, icon: Timer, color: "text-[hsl(var(--success))]" },
    { label: "Total Pipeline", value: formatIDR(stats.totalRevenue), icon: Banknote, color: "text-primary" },
  ];

  return (
    <DashboardLayout title="Dashboard — Order Pipeline">
      
      {/* KPI */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 mb-6">
        {kpis.map((kpi) => (
          <Card key={kpi.label}>
            <CardContent className="p-4 flex items-center gap-3">
              <kpi.icon className={`h-5 w-5 ${kpi.color}`} />
              <div>
                <p className="text-xs text-muted-foreground">{kpi.label}</p>
                <p className="text-lg font-bold">{kpi.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* SEARCH */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Cari PO number atau nama client..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setVisibleCount(ITEMS_PER_PAGE);
          }}
          className="pl-10 h-11 text-sm"
        />
      </div>

      {/* LOADING */}
      {loading && (
        <div className="text-center py-4 text-muted-foreground">
          Loading data...
        </div>
      )}

      {/* LIST */}
      <div className="space-y-4">
        {!loading && visibleOrders.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            Tidak ada data
          </div>
        )}

        {visibleOrders.map((order) => (
          <OrderMilestone key={order.id} order={order} />
        ))}
      </div>

      {/* LOAD MORE */}
      {hasMore && (
        <div className="flex justify-center mt-6">
          <Button
            variant="outline"
            onClick={() =>
              setVisibleCount((prev) => prev + ITEMS_PER_PAGE)
            }
          >
            Tampilkan Lebih Banyak (
            {sortedOrders.length - visibleCount} lagi)
          </Button>
        </div>
      )}
    </DashboardLayout>
  );
};

export default Dashboard;
