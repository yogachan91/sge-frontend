// PT Sentra Global Elektrindo — Wiring Harness Assembly & Assy Transformer
// Kawasan Industri Jababeka, Cikarang - Bekasi, 17550, Indonesia
// Website: https://sgelektrindo.com

export const companyInfo = {
  name: "PT Sentra Global Elektrindo",
  location: "Kawasan Industri Jababeka, Cikarang - Bekasi",
  type: "Wiring Harness Assembly & Assy Transformer",
  machines: 30,
};

// ===== PRODUCTION =====
export const machines = [
  // Auto Cutting Stripping & Twist
  { id: "ACS-01", name: "Auto Cut Strip & Twist 1", type: "Auto Cutting Stripping & Twist", dailyOutput: 24500, target: 28000, oee: 87.5, downtime: 0.5, defectRate: 1.2 },
  { id: "ACS-02", name: "Auto Cut Strip & Twist 2", type: "Auto Cutting Stripping & Twist", dailyOutput: 26200, target: 28000, oee: 92.1, downtime: 0.3, defectRate: 0.8 },
  // Auto Cutting Stripping (Japan)
  { id: "ACS-03", name: "Auto Cut Strip JP-1", type: "Auto Cutting Stripping", dailyOutput: 38000, target: 40000, oee: 94.2, downtime: 0.2, defectRate: 0.6 },
  { id: "ACS-04", name: "Auto Cut Strip JP-2", type: "Auto Cutting Stripping", dailyOutput: 36500, target: 40000, oee: 89.8, downtime: 0.6, defectRate: 1.0 },
  // Crimping 1.5 TON
  { id: "CRM-01", name: "Crimping 1.5T China-1", type: "Crimping 1.5T", dailyOutput: 15200, target: 16000, oee: 90.3, downtime: 0.4, defectRate: 1.5 },
  { id: "CRM-02", name: "Crimping 1.5T China-2", type: "Crimping 1.5T", dailyOutput: 14800, target: 16000, oee: 88.1, downtime: 0.5, defectRate: 1.8 },
  { id: "CRM-03", name: "Crimping 1.5T China-3", type: "Crimping 1.5T", dailyOutput: 15500, target: 16000, oee: 91.2, downtime: 0.3, defectRate: 1.1 },
  { id: "CRM-04", name: "Crimping 1.5T China-4", type: "Crimping 1.5T", dailyOutput: 14200, target: 16000, oee: 84.5, downtime: 1.0, defectRate: 2.4 },
  { id: "CRM-05", name: "Crimping 1.5T Japan-1", type: "Crimping 1.5T", dailyOutput: 15800, target: 16000, oee: 93.5, downtime: 0.2, defectRate: 0.7 },
  { id: "CRM-06", name: "Crimping 1.5T Japan-2", type: "Crimping 1.5T", dailyOutput: 15600, target: 16000, oee: 92.8, downtime: 0.3, defectRate: 0.9 },
  { id: "CRM-07", name: "Crimping 1.5T Korea-1", type: "Crimping 1.5T", dailyOutput: 15000, target: 16000, oee: 89.0, downtime: 0.5, defectRate: 1.3 },
  { id: "CRM-08", name: "Crimping 1.5T Korea-2", type: "Crimping 1.5T", dailyOutput: 15300, target: 16000, oee: 90.6, downtime: 0.4, defectRate: 1.2 },
  // Crimping 2.5 TON
  { id: "CRM-09", name: "Crimping 2.5T Taiwan-1", type: "Crimping 2.5T", dailyOutput: 15100, target: 16000, oee: 88.7, downtime: 0.6, defectRate: 1.6 },
  { id: "CRM-10", name: "Crimping 2.5T Taiwan-2", type: "Crimping 2.5T", dailyOutput: 15400, target: 16000, oee: 91.0, downtime: 0.3, defectRate: 1.0 },
  { id: "CRM-11", name: "Crimping 2.5T Taiwan-3", type: "Crimping 2.5T", dailyOutput: 14900, target: 16000, oee: 87.2, downtime: 0.7, defectRate: 1.9 },
  { id: "CRM-12", name: "Crimping 2.5T Taiwan-4", type: "Crimping 2.5T", dailyOutput: 15200, target: 16000, oee: 89.5, downtime: 0.5, defectRate: 1.4 },
  { id: "CRM-13", name: "Crimping 2.5T Taiwan-5", type: "Crimping 2.5T", dailyOutput: 15600, target: 16000, oee: 92.3, downtime: 0.3, defectRate: 0.8 },
  { id: "CRM-14", name: "Crimping 2.5T Local-1", type: "Crimping 2.5T", dailyOutput: 13800, target: 16000, oee: 82.0, downtime: 1.2, defectRate: 2.8 },
  // Crimping & Strip
  { id: "CRS-01", name: "Crimp & Strip 1.5T JP-1", type: "Crimping & Strip 1.5T", dailyOutput: 7500, target: 8000, oee: 90.1, downtime: 0.4, defectRate: 1.3 },
  { id: "CRS-02", name: "Crimp & Strip 1.5T JP-2", type: "Crimping & Strip 1.5T", dailyOutput: 7200, target: 8000, oee: 87.5, downtime: 0.6, defectRate: 1.7 },
  { id: "CRS-03", name: "Crimp & Strip 2.5T TW-1", type: "Crimping & Strip 2.5T", dailyOutput: 7800, target: 8000, oee: 92.4, downtime: 0.3, defectRate: 0.9 },
  { id: "CRS-04", name: "Crimp & Strip 2.5T TW-2", type: "Crimping & Strip 2.5T", dailyOutput: 7400, target: 8000, oee: 88.0, downtime: 0.5, defectRate: 1.5 },
  // Winding Enamel
  { id: "WND-01", name: "Winding Enamel JP-1", type: "Winding Enamel", dailyOutput: 95, target: 100, oee: 91.0, downtime: 0.3, defectRate: 1.0 },
  { id: "WND-02", name: "Winding Enamel JP-2", type: "Winding Enamel", dailyOutput: 98, target: 100, oee: 93.5, downtime: 0.2, defectRate: 0.7 },
  { id: "WND-03", name: "Winding Enamel JP-3", type: "Winding Enamel", dailyOutput: 88, target: 100, oee: 85.2, downtime: 0.8, defectRate: 2.1 },
  { id: "WND-04", name: "Winding Enamel JP-4", type: "Winding Enamel", dailyOutput: 92, target: 100, oee: 89.0, downtime: 0.5, defectRate: 1.4 },
  { id: "WND-05", name: "Winding Enamel JP-5", type: "Winding Enamel", dailyOutput: 96, target: 100, oee: 92.0, downtime: 0.3, defectRate: 0.9 },
];

export const dailyProduction = [
  { day: "Sen", output: 3850, target: 4200 },
  { day: "Sel", output: 3920, target: 4200 },
  { day: "Rab", output: 4150, target: 4200 },
  { day: "Kam", output: 3780, target: 4200 },
  { day: "Jum", output: 3950, target: 4200 },
  { day: "Sab", output: 3680, target: 4200 },
  { day: "Min", output: 3890, target: 4200 },
];

export const downtimeBreakdown = [
  { name: "Mekanis", value: 35, fill: "hsl(var(--chart-1))" },
  { name: "Material", value: 22, fill: "hsl(var(--chart-3))" },
  { name: "Changeover Die", value: 28, fill: "hsl(var(--chart-2))" },
  { name: "Lainnya", value: 15, fill: "hsl(var(--chart-5))" },
];

export const productionKPIs = {
  dailyOutput: { value: 3889, target: 4200, unit: "set" },
  oee: { value: 89.4, unit: "%" },
  totalDowntime: { value: 4.8, unit: "jam" },
  avgDefectRate: { value: 1.3, unit: "%" },
};

// ===== SALES & REVENUE =====
export const monthlyRevenue = [
  { month: "Nov", revenue: 1250000000, target: 1300000000 },
  { month: "Des", revenue: 1380000000, target: 1300000000 },
  { month: "Jan", revenue: 1180000000, target: 1400000000 },
  { month: "Feb", revenue: 1320000000, target: 1400000000 },
  { month: "Mar", revenue: 1450000000, target: 1400000000 },
  { month: "Apr", revenue: 1420000000, target: 1500000000 },
];

export const topCustomers = [
  { name: "PT Schneider Electric Indonesia", revenue: 420000000, orders: 14, margin: 23.5 },
  { name: "PT Panasonic Manufacturing", revenue: 350000000, orders: 10, margin: 21.8 },
  { name: "PT Astra Otoparts", revenue: 280000000, orders: 8, margin: 19.2 },
  { name: "PT Sumitomo Wiring Systems", revenue: 210000000, orders: 12, margin: 25.1 },
  { name: "PT Yazaki Indonesia", revenue: 160000000, orders: 6, margin: 22.4 },
];

export const productMargins = [
  { product: "Wiring Harness Assy", margin: 22.5, revenue: 520000000 },
  { product: "Transformer Assy", margin: 25.8, revenue: 380000000 },
  { product: "Custom Cable Assembly", margin: 18.2, revenue: 320000000 },
  { product: "Control Panel Wiring", margin: 20.4, revenue: 200000000 },
];

export const arAging = [
  { bucket: "Lancar", amount: 680000000, count: 22 },
  { bucket: "30 Hari", amount: 285000000, count: 9 },
  { bucket: "60 Hari", amount: 145000000, count: 5 },
  { bucket: "90+ Hari", amount: 72000000, count: 3 },
];

export const salesKPIs = {
  monthlyRevenue: { value: 1420000000, unit: "IDR" },
  revenueVsTarget: { value: 94.7, unit: "%" },
  avgMargin: { value: 21.5, unit: "%" },
  overdueAR: { value: 217000000, unit: "IDR" },
};

// ===== SUPPLY CHAIN =====
export const rawMaterials = [
  { name: "Wire AWG 18 (UL1007)", sku: "WIR-001", stock: 180, unit: "roll", reorderPoint: 200, status: "low" as const },
  { name: "Wire AWG 22 (UL1015)", sku: "WIR-002", stock: 250, unit: "roll", reorderPoint: 150, status: "ok" as const },
  { name: "Terminal Female 250", sku: "TRM-001", stock: 8000, unit: "pcs", reorderPoint: 15000, status: "critical" as const },
  { name: "Terminal Ring M4", sku: "TRM-002", stock: 25000, unit: "pcs", reorderPoint: 10000, status: "ok" as const },
  { name: "Connector Housing 6P", sku: "CON-001", stock: 3500, unit: "pcs", reorderPoint: 5000, status: "low" as const },
  { name: "Heat Shrink Tube 6mm", sku: "HST-001", stock: 120, unit: "meter", reorderPoint: 100, status: "ok" as const },
  { name: "Enamel Wire 0.5mm", sku: "ENM-001", stock: 15, unit: "roll", reorderPoint: 30, status: "critical" as const },
  { name: "Solder Wire Sn60/Pb40", sku: "SLD-001", stock: 25, unit: "kg", reorderPoint: 20, status: "ok" as const },
];

export const suppliers = [
  { name: "PT Kabel Metal Indonesia", location: "Tangerang", score: 93, onTime: 96, qualityScore: 91, items: "Wire AWG, Enamel Wire" },
  { name: "CV Terminal Jaya Abadi", location: "Cikarang", score: 89, onTime: 91, qualityScore: 88, items: "Terminal, Connector Housing" },
  { name: "PT Sumitec Nusantara", location: "Jakarta", score: 85, onTime: 88, qualityScore: 83, items: "Heat Shrink, Insulation" },
  { name: "UD Solder Makmur", location: "Surabaya", score: 78, onTime: 75, qualityScore: 82, items: "Solder Wire, Flux" },
  { name: "PT Furukawa Electric Indonesia", location: "Bekasi", score: 95, onTime: 97, qualityScore: 94, items: "Wire AWG Premium, Enamel Wire" },
];

export const materialCostTrend = [
  { month: "Feb", katun: 285000, polyester: 42000, benang: 185000 },
  { month: "Mar", katun: 292000, polyester: 43500, benang: 190000 },
  { month: "Apr", katun: 305000, polyester: 45000, benang: 198000 },
];

export const supplyChainKPIs = {
  totalSKUs: { value: 8, unit: "" },
  lowStockItems: { value: 4, unit: "items" },
  avgSupplierScore: { value: 88.0, unit: "/100" },
  materialCostChange: { value: 6.8, unit: "%" },
};

// ===== EXTERNAL INTELLIGENCE =====
export const currencyData = {
  currentRate: 15850,
  previousRate: 15420,
  monthlyImportCost: 320000000, // IDR
  importPercentage: 55, // % of raw materials imported (copper, connectors)
};

export const regulatoryUpdates = [
  {
    title: "Pembaruan Standar SNI Kabel & Wiring 2026",
    date: "25 Mar 2026",
    summary: "Kementerian Perindustrian memperbarui standar SNI untuk produk kabel dan wiring harness. Deadline kepatuhan: Juli 2026.",
    impact: "medium" as const,
  },
  {
    title: "Perubahan Bea Masuk Tembaga & Komponen Impor",
    date: "15 Mar 2026",
    summary: "Pemerintah menaikkan bea masuk tembaga impor dari 5% menjadi 7.5% untuk mendukung smelter domestik.",
    impact: "high" as const,
  },
  {
    title: "UU Ketenagakerjaan: Upah Minimum 2026",
    date: "1 Mar 2026",
    summary: "UMK Bekasi naik 6.2% menjadi Rp 5.350.000/bulan efektif April 2026. Perlu penyesuaian biaya produksi.",
    impact: "high" as const,
  },
];

export const commodityPrices = [
  { month: "Nov", cotton: 128000, polyester: 38000 },
  { month: "Des", cotton: 132000, polyester: 39500 },
  { month: "Jan", cotton: 138000, polyester: 40000 },
  { month: "Feb", cotton: 142000, polyester: 41500 },
  { month: "Mar", cotton: 148000, polyester: 43000 },
  { month: "Apr", cotton: 155000, polyester: 45000 },
];

// ===== AI CHAT RESPONSES =====
export const chatResponses: Record<string, string> = {
  "defect": `Berdasarkan data hari ini, **Crimping 2.5T Local-1 (CRM-14)** memiliki defect rate tertinggi yaitu **2.8%**, di atas rata-rata pabrik 1.3%.

Penyebab utama:
- Die crimping aus, perlu penggantian
- Downtime mekanis 1.2 jam (tertinggi dari semua unit crimping)
- OEE hanya 82.0%

Selain itu, **Winding Enamel JP-3 (WND-03)** juga perlu perhatian dengan defect rate 2.1% dan OEE 85.2%.

**Rekomendasi:** Ganti die pada CRM-14 dan lakukan kalibrasi ulang. Periksa tension enamel wire pada WND-03.`,

  "profitable": `**PT Schneider Electric Indonesia** adalah pelanggan terbesar dengan revenue **Rp 420 juta** dari 14 order bulan ini.

Namun dari segi margin, **PT Sumitomo Wiring Systems** memiliki margin tertinggi yaitu **25.1%** meskipun revenue-nya lebih rendah (Rp 210 juta).

Top 3 berdasarkan margin:
1. PT Sumitomo Wiring Systems — 25.1%
2. PT Schneider Electric Indonesia — 23.5%
3. PT Yazaki Indonesia — 22.4%

**Rekomendasi:** Prioritaskan order dari PT Sumitomo dan Schneider untuk profitabilitas optimal. Negosiasi volume discount dengan Astra Otoparts (margin 19.2%) untuk menjaga margin.`,

  "reorder": `⚠️ Ada **4 material** yang perlu perhatian:

**KRITIS (Perlu order segera):**
- Terminal Female 250 (TRM-001): Stok 8.000 pcs, reorder point 15.000
- Enamel Wire 0.5mm (ENM-001): Stok 15 roll, reorder point 30

**RENDAH (Segera reorder):**
- Wire AWG 18 UL1007 (WIR-001): Stok 180 roll, reorder point 200
- Connector Housing 6P (CON-001): Stok 3.500 pcs, reorder point 5.000

**Rekomendasi:** Hubungi CV Terminal Jaya Abadi untuk terminal (score 89/100) dan PT Furukawa Electric Indonesia untuk enamel wire (score 95/100).`,

  "currency": `Kurs USD/IDR saat ini **Rp 15.850**, naik dari Rp 15.420 bulan lalu (+2.8%).

**Dampak ke PT Sentra Global Elektrindo:**
- Biaya impor bulanan: ~Rp 320 juta (55% bahan baku impor — tembaga, connector, terminal)
- Kenaikan kurs 2.8% = tambahan biaya ~**Rp 9 juta/bulan**
- Margin keseluruhan turun dari 22.0% → **21.5%**

Ditambah kenaikan bea masuk tembaga 5% → 7.5%, biaya material bisa naik lebih tajam. Pertimbangkan lock-in kontrak dengan PT Furukawa Electric Indonesia.`,

  "production": `📊 **Ringkasan Produksi Hari Ini:**

- Output: **3.889 set** dari target 4.200 set (92.6%)
- OEE rata-rata: **89.4%**
- Total downtime: **4.8 jam**
- Defect rate: **1.3%**

**Performa terbaik:** Auto Cut Strip JP-1 (OEE 94.2%, defect 0.6%)
**Perlu perhatian:** Crimping 2.5T Local-1 (OEE 82.0%, defect 2.8%)

Lab facilities:
- Jig Tester: 450 set/hour (3 unit) — kapasitas testing cukup
- Push Pull Machine, Digital Caliper, Micrometer — semua operasional
- Dino Lite Microscope — visual check crimping terminal berjalan normal`,

  "default": `Terima kasih atas pertanyaannya! Saya adalah AI Advisor untuk PT Sentra Global Elektrindo — spesialis Wiring Harness Assembly & Assy Transformer.

Saya bisa membantu Anda menganalisis:
- 📈 **Produksi** — output cutting/stripping, crimping, winding, defect rate
- 💰 **Penjualan** — revenue, margin per produk, pelanggan automotive & elektrik
- 📦 **Supply chain** — stok wire, terminal, connector, performa supplier
- 🌍 **Eksternal** — kurs, regulasi SNI kabel, harga tembaga
- 🔬 **Lab** — hasil Jig Tester, Push Pull, kalibrasi crimping

Silakan tanyakan hal spesifik atau gunakan quick question di atas!`,
};

export const quickQuestions = [
  { label: "Apa penyebab defect rate tinggi?", keyword: "defect" },
  { label: "Pelanggan mana paling menguntungkan?", keyword: "profitable" },
  { label: "Material apa yang perlu reorder?", keyword: "reorder" },
  { label: "Bagaimana dampak kurs USD/IDR?", keyword: "currency" },
  { label: "Ringkasan produksi hari ini", keyword: "production" },
];

// ===== AI EXPERT INSIGHTS =====
export const aiInsights = [
  {
    title: "Kenaikan UMK Bekasi 6.2% (April 2026)",
    source: "UU Ketenagakerjaan — UMK Bekasi 2026",
    impactLevel: "high" as const,
    affectsCompany: true,
    affectsExplanation:
      "PT Sentra Global Elektrindo memiliki ~120 pekerja di Kawasan Jababeka. Kenaikan UMK dari Rp 5.035.000 → Rp 5.350.000 akan menambah biaya tenaga kerja sekitar Rp 37,8 juta/bulan atau Rp 453 juta/tahun.",
    riskAnalysis:
      "Margin keseluruhan saat ini 21,5% bisa turun menjadi ~20,2%. Produk Custom Cable Assembly (margin 18,2%) berisiko menjadi kurang profitable. Jika tidak disesuaikan, cash flow bulanan berkurang ~2,7%.",
    recommendations: [
      "Negosiasi ulang harga jual ke 3 pelanggan teratas (Schneider, Panasonic, Sumitomo) — targetkan kenaikan 3-5%.",
      "Optimasi CRM-14 (OEE 82%) — jika naik ke 90%, output +3.200 pcs/hari, mengimbangi kenaikan biaya.",
      "Evaluasi profitabilitas Custom Cable Assembly (margin 18,2%) — pertimbangkan kenaikan harga atau shift ke wiring harness margin lebih tinggi.",
      "Tinjau efisiensi shift kerja: otomasi proses crimping manual untuk kurangi dependensi tenaga kerja.",
    ],
    timeframe: "Segera — Efektif April 2026",
  },
  {
    title: "Kenaikan Bea Masuk Tembaga (5% → 7,5%)",
    source: "Peraturan Kementerian Keuangan",
    impactLevel: "high" as const,
    affectsCompany: true,
    affectsExplanation:
      "55% bahan baku PT SGE diimpor (wire, terminal, connector). Kenaikan bea masuk tembaga langsung menaikkan biaya wire sebesar ~2,5%. Dengan konsumsi 400+ roll wire/bulan, tambahan biaya ~Rp 12 juta/bulan.",
    riskAnalysis:
      "Tembaga adalah material utama untuk wire & enamel wire. Kenaikan ini dikombinasi pelemahan kurs USD (+2,8%) berarti total kenaikan biaya material bisa mencapai Rp 21 juta/bulan. Margin Transformer Assy (25,8%) masih aman, tapi Custom Cable Assembly (18,2%) sangat terdampak.",
    recommendations: [
      "Lock-in kontrak 6 bulan dengan PT Kabel Metal Indonesia dan PT Furukawa Electric — kunci harga sebelum naik lebih lanjut.",
      "Evaluasi supplier wire domestik untuk kurangi exposure impor — PT Kabel Metal (score 93) sudah cukup kompetitif.",
      "Naikkan harga jual Custom Cable Assembly 3-5% segera — komunikasikan kenaikan bea masuk sebagai justifikasi.",
      "Pertimbangkan hedging tembaga melalui kontrak futures.",
    ],
    timeframe: "Segera — Efektif Mei 2026",
  },
  {
    title: "Pembaruan SNI Kabel & Wiring Harness",
    source: "Kementerian Perindustrian",
    impactLevel: "medium" as const,
    affectsCompany: true,
    affectsExplanation:
      "Standar baru SNI mensyaratkan pengujian tambahan untuk wiring harness dan kabel — termasuk flame retardant test dan voltage withstand test. PT SGE perlu update prosedur testing dan mungkin tambahan alat lab.",
    riskAnalysis:
      "Deadline kepatuhan Juli 2026. Jika tidak comply, produk tidak bisa dijual ke pelanggan yang mensyaratkan SNI. Investasi alat testing tambahan estimasi Rp 50-80 juta. Namun compliance ini bisa menjadi competitive advantage.",
    recommendations: [
      "Audit gap lab facilities vs persyaratan SNI baru — prioritaskan alat yang belum ada.",
      "Manfaatkan Jig Tester dan Push Pull Machine yang sudah ada — mungkin hanya perlu kalibrasi ulang.",
      "Daftarkan produk utama (Wiring Harness Assy, Transformer Assy) ke lembaga sertifikasi segera.",
      "Gunakan sertifikasi SNI sebagai value proposition ke pelanggan baru.",
    ],
    timeframe: "Deadline Juli 2026",
  },
  {
    title: "Tren Kenaikan Harga Tembaga (+21% dalam 6 Bulan)",
    source: "Data Harga Komoditas Internasional — LME Copper",
    impactLevel: "high" as const,
    affectsCompany: true,
    affectsExplanation:
      "Harga tembaga naik dari Rp 128.000 → Rp 155.000/kg dalam 6 bulan. Tembaga adalah bahan utama wire dan enamel wire yang menyumbang 60% biaya material harness dan transformer.",
    riskAnalysis:
      "Jika tren berlanjut, harga tembaga bisa mencapai Rp 170.000/kg dalam 3 bulan. Margin Wiring Harness Assy turun dari 22,5% → ~19%. Total tambahan biaya material ~Rp 28 juta/bulan. Custom Cable Assembly (margin 18,2%) berisiko tidak profitable.",
    recommendations: [
      "Negosiasi kontrak bulk 6 bulan dengan PT Furukawa Electric (score 95) — minta diskon volume 5-8%.",
      "Eksplorasi CCA (Copper Clad Aluminum) wire untuk aplikasi non-kritis — hemat ~30% biaya material.",
      "Tingkatkan alokasi produksi Transformer Assy (margin 25,8%) yang lebih tahan terhadap kenaikan harga.",
      "Lock-in harga tembaga melalui forward contract 3-6 bulan.",
    ],
    timeframe: "2-4 minggu ke depan",
  },
];

export const growthOpportunities = [
  {
    title: "Tingkatkan Produksi Transformer Assy — Margin Tertinggi 25,8%",
    description:
      "Transformer Assy memiliki margin 25,8%, tertinggi dari semua produk. Saat ini revenue Rp 380 juta (26,8% dari total). Dengan 5 unit Winding Enamel, kapasitas masih bisa ditingkatkan 20%.",
    action: "Optimalkan utilisasi WND-03 (OEE 85,2%) dan WND-04 (OEE 89%). Jika naik ke 92%+, output tambahan 15 unit/hari. Prospek order transformer ke PT Schneider Electric.",
    icon: "trending-up" as const,
  },
  {
    title: "Kejar Order dari PT Sumitomo — Margin Pelanggan Terbaik",
    description:
      "PT Sumitomo Wiring Systems memberikan margin 25,1% (tertinggi), tapi baru 12 order/bulan dengan revenue Rp 210 juta. Sebagai sesama pemain wiring harness, ada synergy potensial.",
    action: "Tim sales hubungi PT Sumitomo minggu ini. Tawarkan kapasitas crimping tambahan dan quick turnaround sebagai value proposition. Target: 18-20 order/bulan.",
    icon: "users" as const,
  },
  {
    title: "Replikasi Best Practice Auto Cut Strip JP-1 ke Mesin Lain",
    description:
      "ACS-03 mencapai OEE 94,2% dan defect rate 0,6% — jauh di atas rata-rata pabrik. Jika semua mesin cutting mencapai OEE 92%+, output naik ~5.000 pcs/hari.",
    action: "Dokumentasikan SOP ACS-03 (setup blade, parameter stripping, maintenance schedule). Terapkan ke ACS-04 terlebih dahulu. Libatkan operator ACS-03 sebagai mentor.",
    icon: "award" as const,
  },
  {
    title: "Perkuat Hubungan dengan PT Furukawa Electric — Supplier Terbaik",
    description:
      "Score 95/100 dengan on-time delivery 97%. Supplier premium untuk wire dan enamel wire. Potensi negosiasi harga lebih baik dengan volume commitment.",
    action: "Tawarkan kontrak eksklusif 6 bulan untuk wire AWG dan enamel wire. Minta diskon 5-8% sebagai imbalan volume commitment. Ini juga mengamankan supply enamel wire yang saat ini kritis.",
    icon: "handshake" as const,
  },
];

export const performanceReview = {
  good: [
    {
      title: "Auto Cut Strip JP-1 — OEE 94,2%, Defect Rate 0,6%",
      detail: "Performa terbaik di seluruh pabrik. Output 38.000 pcs/hari mendekati kapasitas maksimum 40.000.",
      recommendation: "Pertahankan jadwal maintenance. Dokumentasikan SOP sebagai standar untuk mesin cutting lain.",
    },
    {
      title: "Revenue Bulanan Trending Up",
      detail: "Revenue naik dari Rp 1,18 M (Jan) → Rp 1,42 M (Apr), pertumbuhan 20% dalam 3 bulan.",
      recommendation: "Momentum bagus. Fokus pada closing order Q2 dari pelanggan existing — Schneider & Sumitomo.",
    },
    {
      title: "PT Furukawa Electric — Supplier Score 95/100",
      detail: "On-time delivery 97%, quality score 94. Partner terpercaya untuk wire dan enamel wire.",
      recommendation: "Jadikan benchmark untuk evaluasi supplier lain. Pertimbangkan kontrak jangka panjang.",
    },
    {
      title: "Lab Facilities Lengkap — Kapasitas Jig Tester Surplus",
      detail: "3 unit Jig Tester @450 set/hour = kapasitas 1.350 set/hour. Output saat ini ~500 set/hour — utilisasi baru 37%.",
      recommendation: "Tawarkan jasa testing ke perusahaan wiring harness lain sebagai additional revenue stream.",
    },
  ],
  improve: [
    {
      title: "CRM-14 (Crimping 2.5T Local) — Defect Rate 2,8%",
      detail: "OEE hanya 82%, downtime 1,2 jam/hari. Die crimping aus. Output 13.800 pcs vs target 16.000.",
      recommendation: "Ganti die crimping segera. Jika masalah berlanjut, pertimbangkan upgrade ke mesin Taiwan atau Japan yang konsisten lebih baik.",
    },
    {
      title: "4 Material di Bawah Reorder Point",
      detail: "Terminal Female 250 dan Enamel Wire KRITIS. Wire AWG 18 dan Connector Housing LOW. Risiko production stop jika tidak segera reorder.",
      recommendation: "Order hari ini: Terminal (15.000 pcs) ke CV Terminal Jaya Abadi, Enamel Wire (20 roll) ke PT Furukawa Electric. Wire dan connector order dalam 3 hari.",
    },
    {
      title: "AR Aging 90+ Hari — Rp 72 Juta Outstanding",
      detail: "3 invoice sudah lewat 90 hari. Cash flow terganggu, total overdue AR Rp 217 juta.",
      recommendation: "Tim finance hubungi pelanggan terkait minggu ini. Terapkan limit kredit lebih ketat. Pertimbangkan factoring untuk invoice besar.",
    },
    {
      title: "Supplier UD Solder Makmur — Score Rendah 78/100",
      detail: "On-time delivery hanya 75%, terendah dari semua supplier. Memasok solder wire yang penting untuk assembly.",
      recommendation: "Berikan peringatan resmi dan target perbaikan 30 hari. Cari alternatif supplier solder sebagai backup.",
    },
  ],
};

// ===== PRODUCTION AI INSIGHTS =====
export const productionInsights = {
  summary:
    "Pabrik memproduksi 3.889 set hari ini — 92,6% dari target 4.200 set. Gap 311 set terutama berasal dari CRM-14 yang underperform (output 13.800 vs target 16.000 pcs). OEE rata-rata 89,4% solid, tapi total downtime 4,8 jam masih bisa ditekan. Auto Cut Strip JP-1 mencapai OEE 94,2% — bukti bahwa target bisa dicapai. Fokus utama minggu ini: perbaiki CRM-14 dan kurangi changeover die time.",
  alerts: [
    {
      title: "CRM-14 (Crimping 2.5T Local) — Defect Rate 2,8% & Output Turun",
      impactLevel: "high" as const,
      impactExplanation:
        "Crimping Machine CRM-14 hanya menghasilkan 13.800 pcs/hari, 2.200 pcs di bawah target. Defect rate 2,8% — tertinggi di lini crimping. Die crimping aus menyebabkan crimping force tidak konsisten.",
      riskAnalysis:
        "Kehilangan output ~2.200 pcs/hari setara ~Rp 8 juta/bulan revenue yang hilang. Terminal yang di-crimp tidak sempurna bisa gagal di Jig Tester — menyebabkan rework dan delay delivery ke PT Schneider Electric.",
      recommendations: [
        "Ganti die crimping CRM-14 hari ini — gunakan die cadangan dari inventory spare parts.",
        "Setelah ganti die, lakukan pull test sample menggunakan Push Pull Machine untuk verifikasi.",
        "Pindahkan order urgent ke CRM-13 (OEE 92,3%) sementara CRM-14 diperbaiki.",
        "Evaluasi apakah mesin local-made ini layak dipertahankan vs upgrade ke mesin Taiwan/Japan.",
      ],
      timeframe: "Segera — Hari Ini",
    },
    {
      title: "WND-03 (Winding Enamel) — OEE 85,2%, Tension Issue",
      impactLevel: "medium" as const,
      impactExplanation:
        "Winding Enamel WND-03 output 88 unit/hari dari target 100. Defect rate 2,1% menunjukkan masalah tension enamel wire — winding tidak rapi dan risiko short circuit pada transformer.",
      riskAnalysis:
        "Transformer dengan winding cacat bisa lolos visual check tapi gagal di voltage withstand test. Jika terkirim ke customer, recall cost bisa mencapai 10x biaya produksi. Downtime 0,8 jam/hari juga mengurangi kapasitas.",
      recommendations: [
        "Kalibrasi tension device pada WND-03 — bandingkan setting dengan WND-02 (OEE 93,5%).",
        "Periksa kualitas Enamel Wire dari batch terakhir — mungkin diameter tidak konsisten.",
        "Tambahkan visual check dengan Dino Lite Microscope setelah winding untuk early detection.",
      ],
      timeframe: "Minggu ini",
    },
    {
      title: "Changeover Die Time — 28% dari Total Downtime",
      impactLevel: "medium" as const,
      impactExplanation:
        "Pergantian die crimping menyumbang 28% dari total downtime (terbesar kedua setelah mekanis). Rata-rata changeover 25 menit per mesin, total ~1,3 jam/hari untuk semua lini crimping.",
      riskAnalysis:
        "Dengan 14 mesin crimping yang sering ganti die untuk berbagai ukuran terminal, total changeover time menjadi signifikan. Setiap menit changeover = ~33 pcs output hilang. Total kerugian ~2.600 pcs/hari.",
      recommendations: [
        "Implementasi SMED (Single Minute Exchange of Die) — target changeover <10 menit per mesin.",
        "Kelompokkan order berdasarkan ukuran terminal untuk minimasi frekuensi changeover.",
        "Siapkan die set lengkap per mesin — hindari berbagi die antar mesin.",
      ],
      timeframe: "2 minggu",
    },
  ],
  opportunities: [
    {
      title: "Replikasi ACS-03 ke Mesin Cutting Lain — Potensi +5.000 pcs/hari",
      description:
        "Auto Cut Strip JP-1 (ACS-03) mencapai OEE 94,2% dan defect rate 0,6% — terbaik di pabrik. Jika ACS-01, ACS-02, dan ACS-04 bisa mencapai level ini, output cutting naik ~5.000 pcs/hari.",
      action:
        "Dokumentasikan SOP ACS-03 (blade setting, stripping length, twist parameter). Terapkan ke ACS-04 terlebih dahulu (OEE 89,8%). Target: OEE 92%+ untuk semua mesin cutting dalam 1 bulan.",
      icon: "award" as const,
    },
    {
      title: "Kurangi Downtime Mekanis — Hemat 1,5+ Jam/Hari",
      description:
        "Downtime mekanis menyumbang 35% dari total downtime. Preventive maintenance pada mesin crimping (terutama CRM-04 dan CRM-14) bisa menghemat 1,5+ jam/hari setara ~3.000 pcs output tambahan.",
      action:
        "Buat jadwal maintenance preventif mingguan untuk semua mesin crimping. Prioritaskan CRM-14 (1,2 jam downtime) dan CRM-04 (1,0 jam). Sediakan spare die dan blade di gudang.",
      icon: "trending-up" as const,
    },
    {
      title: "Utilisasi Lab Jig Tester Baru 37% — Revenue Opportunity",
      description:
        "Kapasitas Jig Tester 1.350 set/hour, utilisasi baru 37%. Surplus kapasitas bisa dimonetisasi sebagai jasa testing untuk perusahaan wiring harness lain di Jababeka.",
      action:
        "Survey 5 perusahaan wiring harness di Kawasan Jababeka yang belum punya Jig Tester sendiri. Tawarkan jasa testing @Rp 5.000/set. Potensi revenue tambahan Rp 15-25 juta/bulan.",
      icon: "trending-up" as const,
    },
  ],
};

// ===== SALES AI INSIGHTS =====
export const salesInsights = {
  summary:
    "Revenue bulan ini Rp 1,42 M, 94,7% dari target Rp 1,5 M. Margin rata-rata 21,5% stabil, namun AR jatuh tempo Rp 72 juta di bucket 90+ hari perlu perhatian segera. PT Schneider Electric menyumbang 30% revenue — diversifikasi pelanggan disarankan. Kabar baiknya, revenue trending up 3 bulan berturut dan produk Transformer Assy (margin 25,8%) menunjukkan potensi pertumbuhan terbesar.",
  alerts: [
    {
      title: "AR Aging 90+ Hari — Rp 72 Juta Tertahan",
      impactLevel: "high" as const,
      impactExplanation:
        "3 invoice senilai Rp 72 juta sudah melewati 90 hari jatuh tempo. Total AR overdue mencapai Rp 217 juta. Cash flow terganggu — dana ini dibutuhkan untuk pembelian wire dan terminal yang kritis.",
      riskAnalysis:
        "Jika AR 90+ hari tidak tertagih, bisa mengganggu pembelian Terminal Female 250 dan Enamel Wire yang sudah kritis. Cash flow gap bisa memaksa penundaan pembayaran ke PT Furukawa Electric, merusak hubungan dengan supplier terbaik.",
      recommendations: [
        "Kirim reminder formal ke pelanggan terkait minggu ini — lampirkan detail invoice.",
        "Pertimbangkan diskon early payment 2% untuk invoice baru.",
        "Siapkan cadangan dana Rp 80 juta untuk buffer cash flow bulan depan.",
        "Terapkan limit kredit lebih ketat untuk pelanggan dengan riwayat telat bayar.",
      ],
      timeframe: "Segera — Minggu Ini",
    },
    {
      title: "Konsentrasi Pelanggan — Schneider Electric = 30% Revenue",
      impactLevel: "medium" as const,
      impactExplanation:
        "PT Schneider Electric menyumbang Rp 420 juta/bulan (30% dari total). Ketergantungan ini menciptakan risiko bisnis signifikan jika mereka pindah supplier.",
      riskAnalysis:
        "Kehilangan Schneider berarti defisit Rp 420 juta/bulan. Kompetitor wiring harness di Jababeka bisa menawarkan harga lebih rendah. Schneider juga punya bargaining power untuk menekan harga.",
      recommendations: [
        "Target akuisisi 2 pelanggan baru di Q2 — prospek sektor otomotif (Astra group) dan white goods (LG, Samsung).",
        "Perkuat hubungan dengan PT Sumitomo (margin terbaik 25,1%) — push volume dari 12 ke 18+ order/bulan.",
        "Prospek pasar ekspor wiring harness ke ASEAN melalui channel Sumitomo & Yazaki.",
      ],
      timeframe: "Q2 2026",
    },
    {
      title: "Custom Cable Assembly Margin Rendah — 18,2%",
      impactLevel: "medium" as const,
      impactExplanation:
        "Custom Cable Assembly memiliki margin hanya 18,2%, di bawah rata-rata 21,5%. Meskipun revenue Rp 320 juta, profit per unit lebih tipis. Kenaikan harga tembaga +21% semakin menggerus margin.",
      riskAnalysis:
        "Dengan tren kenaikan harga tembaga dan bea masuk, margin bisa turun ke 15-16% — mendekati tidak profitable. Volume tinggi dengan margin rendah juga menyerap kapasitas crimping yang bisa digunakan untuk Wiring Harness Assy margin lebih tinggi.",
      recommendations: [
        "Naikkan harga Custom Cable Assembly 3-5% — komunikasikan kenaikan biaya bahan baku.",
        "Optimasi wire waste di cutting — kurangi defect bisa hemat 2-3% biaya material.",
        "Pertimbangkan CCA wire untuk lini cable assembly budget — hemat ~30% biaya wire.",
      ],
      timeframe: "1-2 bulan",
    },
  ],
  opportunities: [
    {
      title: "Alokasi Lebih Banyak Kapasitas ke Transformer Assy — Margin 25,8%",
      description:
        "Transformer Assy margin tertinggi 25,8%. Revenue Rp 380 juta (26,8% total). Dengan 5 Winding Enamel machine, kapasitas masih bisa naik 20% jika OEE ditingkatkan.",
      action:
        "Optimalkan WND-03 dan WND-04. Prospek order transformer ke Schneider Electric dan produsen panel listrik lain di Jababeka. Target: naikkan share revenue ke 35%.",
      icon: "trending-up" as const,
    },
    {
      title: "Push Kontrak Jangka Panjang dengan PT Sumitomo",
      description:
        "PT Sumitomo margin terbaik 25,1% dengan 12 order/bulan. Revenue Rp 210 juta — ada ruang besar untuk meningkatkan 1,5x.",
      action:
        "Tim sales hubungi Sumitomo minggu ini. Tawarkan kontrak 6 bulan dengan dedicated crimping line dan fast delivery. Target: 18 order/bulan, revenue Rp 315 juta.",
      icon: "award" as const,
    },
    {
      title: "Manfaatkan Momentum Revenue Naik 3 Bulan Berturut",
      description:
        "Revenue naik konsisten: Rp 1,18 M (Jan) → Rp 1,32 M (Feb) → Rp 1,45 M (Mar) → Rp 1,42 M (Apr). Tren positif ini posisi kuat untuk renegosiasi harga.",
      action:
        "Gunakan data tren untuk renegosiasi harga dengan pelanggan existing — targetkan kenaikan 3-5%. Tunjukkan investasi lab dan sertifikasi SNI sebagai value added.",
      icon: "trending-up" as const,
    },
  ],
};

// ===== SUPPLY CHAIN AI INSIGHTS =====
export const supplyChainInsights = {
  summary:
    "4 dari 8 SKU di bawah reorder point — risiko produksi terhenti dalam 3-5 hari jika tidak segera reorder. Biaya material naik 6,8% dalam 3 bulan, didorong harga tembaga (+21%) dan kenaikan bea masuk. Supplier terbaik PT Furukawa Electric (skor 95) sangat reliable, namun UD Solder Makmur (skor 78) perlu evaluasi serius. Prioritas: reorder terminal dan enamel wire segera.",
  alerts: [
    {
      title: "Stok Terminal Female 250 Kritis — 8.000 pcs (Reorder: 15.000)",
      impactLevel: "high" as const,
      impactExplanation:
        "Terminal Female 250 adalah komponen utama untuk crimping wiring harness. Stok 8.000 pcs, jauh di bawah reorder point 15.000. Dengan konsumsi harian ~3.000 pcs, stok hanya cukup untuk 2-3 hari.",
      riskAnalysis:
        "Jika tidak reorder hari ini, lini crimping bisa idle mulai 3 hari lagi — kerugian ~Rp 15 juta/hari dari output hilang. Lead time CV Terminal Jaya Abadi rata-rata 4 hari, jadi order hari ini pun sangat ketat.",
      recommendations: [
        "Order darurat ke CV Terminal Jaya Abadi hari ini — minta pengiriman express same-day (biaya tambahan ~8% tapi jauh lebih murah dari idle cost).",
        "Cek apakah Terminal Ring M4 (stok surplus 25.000) bisa disubstitusi untuk beberapa order — diskusi dengan engineering.",
        "Set up safety stock minimum 5 hari konsumsi (15.000 pcs) untuk terminal kritis.",
        "Pertimbangkan dual-sourcing terminal dari PT Furukawa sebagai backup.",
      ],
      timeframe: "Segera — Hari Ini",
    },
    {
      title: "UD Solder Makmur Skor Rendah — 78/100",
      impactLevel: "medium" as const,
      impactExplanation:
        "UD Solder Makmur on-time delivery hanya 75% dan quality score 82. Solder wire adalah material kritis untuk assembly dan transformer winding. Keterlambatan bisa delay seluruh proses assembly.",
      riskAnalysis:
        "Solder quality yang tidak konsisten bisa menyebabkan cold solder joint — berbahaya untuk produk elektrik. Jika gagal di testing, rework cost tinggi. Keterlambatan pengiriman juga memaksa overtime di assembly line.",
      recommendations: [
        "Kirim warning letter dengan KPI target: on-time delivery minimal 90%, quality score 85.",
        "Cari supplier solder alternatif — PT Timah (Bangka) atau supplier Jepang di Jababeka.",
        "Untuk sementara, lakukan incoming QC 100% untuk solder dari UD Solder Makmur.",
      ],
      timeframe: "30 Hari",
    },
    {
      title: "Enamel Wire 0.5mm Kritis — 15 Roll (Reorder: 30)",
      impactLevel: "high" as const,
      impactExplanation:
        "Enamel wire adalah bahan utama Winding Enamel untuk produksi Transformer Assy. Stok 15 roll, setengah dari reorder point. Dengan 5 mesin winding konsumsi ~5 roll/hari, stok hanya 3 hari.",
      riskAnalysis:
        "Transformer Assy adalah produk margin tertinggi (25,8%). Jika winding stop karena kehabisan enamel wire, revenue hilang ~Rp 18 juta/hari. PT Furukawa lead time 5-7 hari — sangat ketat.",
      recommendations: [
        "Order darurat ke PT Furukawa Electric hari ini — request priority delivery (score 95, biasa on-time 97%).",
        "Kurangi output winding sementara dari 5 mesin ke 3 mesin untuk stretch stok sampai delivery tiba.",
        "Pertimbangkan PT Kabel Metal sebagai second source untuk enamel wire (score 93).",
      ],
      timeframe: "Segera — Hari Ini",
    },
  ],
  opportunities: [
    {
      title: "Konsolidasi Order ke PT Furukawa Electric — Skor Tertinggi 95",
      description:
        "PT Furukawa Electric on-time delivery 97% dan quality score 94. Konsolidasi lebih banyak order wire dan enamel bisa membuka diskon volume 5-8%.",
      action:
        "Pindahkan 40% order wire dari supplier lain ke PT Furukawa. Negosiasi kontrak volume 6 bulan — target penghematan Rp 15-25 juta/bulan.",
      icon: "award" as const,
    },
    {
      title: "Evaluasi CCA Wire untuk Custom Cable Assembly",
      description:
        "Copper Clad Aluminum (CCA) wire bisa hemat ~30% vs pure copper wire. Cocok untuk Custom Cable Assembly yang margin-nya tipis (18,2%). Beberapa customer sudah accept CCA untuk aplikasi non-kritis.",
      action:
        "Request sample CCA wire dari PT Kabel Metal. Lakukan testing di lab (pull test, continuity, voltage withstand). Jika pass, tawarkan ke pelanggan cable assembly sebagai cost-effective option.",
      icon: "trending-up" as const,
    },
    {
      title: "Dual-Source Terminal untuk Mitigasi Risiko",
      description:
        "Saat ini terminal hanya dari CV Terminal Jaya Abadi (score 89). Single-sourcing terminal kritis ini berisiko. PT Furukawa Electric juga bisa supply terminal berkualitas tinggi.",
      action:
        "Mulai trial order terminal dari PT Furukawa (500 pcs). Jika quality OK, split order 60/40 antara CV Terminal dan Furukawa. Ini juga memberi leverage negosiasi harga.",
      icon: "trending-up" as const,
    },
  ],
};

// ===== ORDERS (Milestone Pipeline) =====
export type OrderStage = "materialCheck" | "loa" | "production" | "delivery" | "closing";
export type StageStatus = "completed" | "active" | "at-risk" | "blocked" | "pending";
export type PaymentStatus = "unpaid" | "paid" | "overdue";
export type MaterialCheckStatus = "ok" | "low" | "out";
export type ProcessLayerStatus = "completed" | "active" | "flagged" | "pending";
export type DeliveryOrderStatus = "delivered" | "in-transit" | "pending";
export type POHealthStatus = "good" | "at-risk" | "bad";

export interface PurchasingOrder {
  poNumber: string;
  supplier: string;
  material: string;
  qtyOrdered: number;
  unit: string;
  eta: string;
  status: "ordered" | "shipped" | "received" | "delayed";
  outstandingQty: number;
  aiInsight?: string;
}

export interface OrderMaterial {
  name: string;
  required: number;
  unit: string;
  status: MaterialCheckStatus;
  currentStock: number;
  allocated: number;
  purchasingOrders?: PurchasingOrder[];
  aiInsight?: string;
}

export interface ProcessLayer {
  name: string;
  status: ProcessLayerStatus;
  defectRate?: number;
  note?: string;
  ngCode?: string;
  ngReason?: string;
}

export interface DeliveryOrder {
  doNumber: string;
  qty: number;
  status: DeliveryOrderStatus;
  scheduledDate?: string;
  courier?: string;
  trackingNote?: string;
}

export interface Order {
  id: string;
  client: string;
  product: string;
  qty: number;
  deadline: string;
  poDate?: string;
  currentStage: OrderStage;
  stageEnteredDate?: string;
  stages: {
    materialCheck: {
      status: StageStatus;
      materials: OrderMaterial[];
      aiInsight?: string;
    };
    loa: {
      status: StageStatus;
      loaNumber?: string;
      issuedDate?: string;
      referencedMaterials?: string;
      assignedJobTask?: string;
      aiInsight?: string;
    };
    production: {
      status: StageStatus;
      progress: number;
      target: number;
      defectRate?: number;
      estimatedReady?: string;
      assignedLine?: string;
      processLayers?: ProcessLayer[];
      bottleneck?: string;
      aiInsight?: string;
    };
    delivery: {
      status: StageStatus;
      deliveryOrders: DeliveryOrder[];
      aiInsight?: string;
    };
    closing: {
      status: StageStatus;
      invoiceAmount?: number;
      paymentStatus?: PaymentStatus;
      poHealth: POHealthStatus;
      poHealthNote?: string;
      notes?: string;
      aiInsight?: string;
    };
  };
}

export const orders: Order[] = [
  {
    id: "PO-SGE-2026-001",
    client: "PT Schneider Electric Indonesia",
    product: "Wiring Harness Assy — Control Panel 24V",
    qty: 2000,
    deadline: "30 Apr 2026",
    poDate: "5 Mar 2026",
    currentStage: "production",
    stageEnteredDate: "18 Mar 2026",
    stages: {
      materialCheck: {
        status: "completed",
        materials: [
          { name: "Wire AWG 18 (UL1007)", required: 40, unit: "roll", status: "ok", currentStock: 180, allocated: 40 },
          {
            name: "Terminal Female 250", required: 6000, unit: "pcs", status: "low", currentStock: 8000, allocated: 6000,
            purchasingOrders: [
              { poNumber: "PO-SUP-001", supplier: "CV Terminal Jaya Abadi", material: "Terminal Female 250", qtyOrdered: 20000, unit: "pcs", eta: "8 Apr 2026", status: "shipped", outstandingQty: 15000, aiInsight: "ETA 8 Apr, deadline PO 30 Apr — 22 hari margin, aman." },
            ],
            aiInsight: "Stok terminal tersisa 8.000 pcs, cukup untuk order ini tapi kritis untuk order berikutnya. PO restock sudah dikirim.",
          },
          { name: "Connector Housing 6P", required: 2000, unit: "pcs", status: "ok", currentStock: 3500, allocated: 2000 },
          { name: "Heat Shrink Tube 6mm", required: 30, unit: "meter", status: "ok", currentStock: 120, allocated: 30 },
        ],
        aiInsight: "Material tersedia. Terminal Female 250 perlu reorder untuk order berikutnya — PO-SUP-001 sudah dalam pengiriman.",
      },
      loa: {
        status: "completed",
        loaNumber: "LoA-SGE-2026-001",
        issuedDate: "12 Mar 2026",
        referencedMaterials: "Wire AWG 18 (40 roll), Terminal Female 250 (6.000 pcs), Connector Housing 6P (2.000 pcs), Heat Shrink (30 m)",
        assignedJobTask: "JOB-SGE-2026-001 — Wiring Harness Assy Control Panel 24V × 2.000 set",
      },
      production: {
        status: "active",
        progress: 1240,
        target: 2000,
        defectRate: 1.2,
        estimatedReady: "22 Apr 2026",
        assignedLine: "ACS-03, CRM-05, CRM-06",
        processLayers: [
          { name: "Cutting & Stripping", status: "completed" },
          { name: "Crimping", status: "active", defectRate: 1.2 },
          { name: "Assembly", status: "pending" },
          { name: "Testing (Jig Tester)", status: "pending" },
        ],
        aiInsight: "Progress 62% — on track untuk deadline 30 Apr. CRM-05 & CRM-06 (Japan) performa stabil di atas 92% OEE. Defect rate 1.2% — di bawah rata-rata. Pull test via Push Pull Machine: PASS.",
      },
      delivery: {
        status: "pending",
        deliveryOrders: [
          { doNumber: "DO-SGE-001-A", qty: 1000, status: "pending", scheduledDate: "25 Apr 2026", courier: "JNE Cargo" },
          { doNumber: "DO-SGE-001-B", qty: 1000, status: "pending", scheduledDate: "28 Apr 2026", courier: "JNE Cargo" },
        ],
        aiInsight: "Split 2 pengiriman @1.000 set. Jadwal delivery sesuai deadline.",
      },
      closing: {
        status: "pending",
        invoiceAmount: 180000000,
        paymentStatus: "unpaid",
        poHealth: "good",
        poHealthNote: "Semua tahap berjalan sesuai jadwal. 22 hari sebelum deadline.",
      },
    },
  },
  {
    id: "PO-SGE-2026-002",
    client: "PT Panasonic Manufacturing",
    product: "Transformer Assy — Step Down 220V/12V",
    qty: 500,
    deadline: "15 Apr 2026",
    poDate: "25 Feb 2026",
    currentStage: "production",
    stageEnteredDate: "8 Mar 2026",
    stages: {
      materialCheck: {
        status: "completed",
        materials: [
          { name: "Enamel Wire 0.5mm", required: 12, unit: "roll", status: "low", currentStock: 15, allocated: 12,
            purchasingOrders: [
              { poNumber: "PO-SUP-003", supplier: "PT Furukawa Electric Indonesia", material: "Enamel Wire 0.5mm", qtyOrdered: 30, unit: "roll", eta: "10 Apr 2026", status: "shipped", outstandingQty: 30, aiInsight: "PT Furukawa score 95/100, on-time 97%. ETA 10 Apr — sangat ketat tapi reliable." },
            ],
            aiInsight: "Enamel wire stok 15 roll, setelah order ini tersisa 3 roll — kritis. PO restock sudah dikirim.",
          },
          { name: "Solder Wire Sn60/Pb40", required: 5, unit: "kg", status: "ok", currentStock: 25, allocated: 5 },
          { name: "Terminal Ring M4", required: 1000, unit: "pcs", status: "ok", currentStock: 25000, allocated: 1000 },
        ],
      },
      loa: {
        status: "completed",
        loaNumber: "LoA-SGE-2026-002",
        issuedDate: "1 Mar 2026",
        referencedMaterials: "Enamel Wire 0.5mm (12 roll), Solder Wire (5 kg), Terminal Ring M4 (1.000 pcs)",
        assignedJobTask: "JOB-SGE-2026-002 — Transformer Assy Step Down 220V/12V × 500 unit",
      },
      production: {
        status: "at-risk",
        progress: 310,
        target: 500,
        defectRate: 2.1,
        estimatedReady: "13 Apr 2026",
        assignedLine: "WND-03, WND-04",
        processLayers: [
          { name: "Winding", status: "flagged", defectRate: 2.1, note: "WND-03 tension issue — winding tidak rapi", ngCode: "NG-WND-001", ngReason: "Winding tidak rapi — tension enamel wire inconsistent" },
          { name: "Soldering", status: "active", defectRate: 0.8 },
          { name: "Assembly", status: "pending" },
          { name: "Testing (Voltage Withstand)", status: "pending" },
        ],
        bottleneck: "WND-03 — tension enamel wire tidak konsisten, defect rate 2.1%. Downtime 0.8 jam/hari.",
        aiInsight: "⚠️ WND-03 defect rate 2.1% memperlambat produksi. Risiko terlambat 2 hari. Pertimbangkan pindah ke WND-02 (OEE 93.5%). Periksa enamel wire quality dari batch terakhir.",
      },
      delivery: {
        status: "pending",
        deliveryOrders: [
          { doNumber: "DO-SGE-002-A", qty: 500, status: "pending", scheduledDate: "14 Apr 2026", courier: "SiCepat Cargo" },
        ],
      },
      closing: {
        status: "pending",
        invoiceAmount: 125000000,
        paymentStatus: "unpaid",
        poHealth: "at-risk",
        poHealthNote: "Produksi terlambat 2 hari dari jadwal. Deadline 15 Apr sangat ketat.",
        aiInsight: "⚠️ PO berisiko terlambat. Produksi baru 62%, deadline 2 hari lagi. Segera eskalasi WND-03.",
      },
    },
  },
  {
    id: "PO-SGE-2026-003",
    client: "PT Astra Otoparts",
    product: "Wiring Harness Assy — Engine Bay Sensor",
    qty: 3000,
    deadline: "20 Apr 2026",
    poDate: "10 Mar 2026",
    currentStage: "materialCheck",
    stageEnteredDate: "10 Mar 2026",
    stages: {
      materialCheck: {
        status: "blocked",
        materials: [
          {
            name: "Wire AWG 22 (UL1015)", required: 60, unit: "roll", status: "ok", currentStock: 250, allocated: 60,
          },
          {
            name: "Terminal Female 250", required: 9000, unit: "pcs", status: "out", currentStock: 8000, allocated: 6000,
            purchasingOrders: [
              { poNumber: "PO-SUP-001", supplier: "CV Terminal Jaya Abadi", material: "Terminal Female 250", qtyOrdered: 20000, unit: "pcs", eta: "8 Apr 2026", status: "shipped", outstandingQty: 15000, aiInsight: "PO-SUP-001 shared dengan PO-SGE-001. ETA 8 Apr — setelah diterima, alokasi 9.000 pcs untuk PO-SGE-003. Deadline 20 Apr masih feasible." },
            ],
            aiInsight: "Setelah alokasi PO-SGE-001, stok terminal tidak cukup. Harus tunggu PO-SUP-001 tiba.",
          },
          { name: "Connector Housing 6P", required: 3000, unit: "pcs", status: "low", currentStock: 3500, allocated: 2000,
            aiInsight: "Stok connector 3.500, sudah 2.000 dialokasikan untuk PO-SGE-001. Tersisa 1.500 — kurang 1.500.",
          },
        ],
        aiInsight: "🔴 Blocked: Terminal Female 250 tidak cukup setelah alokasi PO-SGE-001. ETA reorder dari CV Terminal Jaya: 8 Apr. Connector Housing juga kurang — perlu PO tambahan. Produksi bisa mulai ~10 Apr, menyisakan 10 hari — ketat.",
      },
      loa: {
        status: "pending",
        aiInsight: "LoA belum bisa diterbitkan — menunggu terminal dan connector tersedia.",
      },
      production: {
        status: "pending",
        progress: 0,
        target: 3000,
      },
      delivery: {
        status: "pending",
        deliveryOrders: [],
      },
      closing: {
        status: "pending",
        invoiceAmount: 210000000,
        paymentStatus: "unpaid",
        poHealth: "at-risk",
        poHealthNote: "Material blocked. Jika PO-SUP-001 terlambat, deadline 20 Apr terancam.",
        aiInsight: "PO bergantung pada kedatangan terminal. Timeline sangat ketat — 0 hari buffer jika ada delay.",
      },
    },
  },
  {
    id: "PO-SGE-2026-004",
    client: "PT Sumitomo Wiring Systems",
    product: "Custom Cable Assembly — Multi-Core 8P",
    qty: 5000,
    deadline: "10 Mei 2026",
    poDate: "1 Apr 2026",
    currentStage: "materialCheck",
    stageEnteredDate: "1 Apr 2026",
    stages: {
      materialCheck: {
        status: "pending",
        materials: [],
        aiInsight: "Belum dilakukan pengecekan material. Menunggu konfirmasi order dan drawing approval.",
      },
      loa: {
        status: "pending",
      },
      production: {
        status: "pending",
        progress: 0,
        target: 5000,
      },
      delivery: {
        status: "pending",
        deliveryOrders: [],
      },
      closing: {
        status: "pending",
        invoiceAmount: 250000000,
        paymentStatus: "unpaid",
        poHealth: "good",
        poHealthNote: "Deadline 10 Mei — masih banyak waktu jika segera dikonfirmasi.",
        aiInsight: "Custom Cable Assembly margin rendah (18.2%). Dengan kenaikan harga tembaga, pastikan harga jual sudah disesuaikan +3-5% sebelum konfirmasi.",
      },
    },
  },
  {
    id: "PO-SGE-2026-005",
    client: "PT Yazaki Indonesia",
    product: "Wiring Harness Assy — Automotive Dashboard",
    qty: 1500,
    deadline: "5 Apr 2026",
    poDate: "10 Feb 2026",
    currentStage: "delivery",
    stageEnteredDate: "1 Apr 2026",
    stages: {
      materialCheck: {
        status: "completed",
        materials: [
          { name: "Wire AWG 22 (UL1015)", required: 30, unit: "roll", status: "ok", currentStock: 250, allocated: 30 },
          { name: "Terminal Female 250", required: 4500, unit: "pcs", status: "ok", currentStock: 8000, allocated: 4500 },
          { name: "Connector Housing 6P", required: 1500, unit: "pcs", status: "ok", currentStock: 3500, allocated: 1500 },
        ],
      },
      loa: {
        status: "completed",
        loaNumber: "LoA-SGE-2026-005",
        issuedDate: "20 Feb 2026",
        referencedMaterials: "Wire AWG 22 (30 roll), Terminal Female 250 (4.500 pcs), Connector Housing 6P (1.500 pcs)",
        assignedJobTask: "JOB-SGE-2026-005 — Wiring Harness Assy Automotive Dashboard × 1.500 set",
      },
      production: {
        status: "completed",
        progress: 1500,
        target: 1500,
        defectRate: 0.8,
        estimatedReady: "1 Apr 2026",
        assignedLine: "ACS-03, CRM-05, CRM-10",
        processLayers: [
          { name: "Cutting & Stripping", status: "completed" },
          { name: "Crimping", status: "completed", defectRate: 0.8 },
          { name: "Assembly", status: "completed" },
          { name: "Testing (Jig Tester)", status: "completed" },
        ],
      },
      delivery: {
        status: "active",
        deliveryOrders: [
          { doNumber: "DO-SGE-005-A", qty: 1000, status: "delivered", scheduledDate: "3 Apr 2026", courier: "JNE Cargo", trackingNote: "Diterima 3 Apr 2026." },
          { doNumber: "DO-SGE-005-B", qty: 500, status: "in-transit", scheduledDate: "4 Apr 2026", courier: "JNE Cargo", trackingNote: "Dalam pengiriman — estimasi tiba 5 Apr." },
        ],
        aiInsight: "Split 2 pengiriman. Batch pertama 1.000 set sudah diterima. Batch kedua 500 set in-transit, estimasi tiba tepat di deadline 5 Apr.",
      },
      closing: {
        status: "pending",
        invoiceAmount: 97500000,
        paymentStatus: "unpaid",
        poHealth: "good",
        poHealthNote: "Delivery on track. Batch pertama sudah diterima client.",
      },
    },
  },
  {
    id: "PO-SGE-2026-006",
    client: "PT Schneider Electric Indonesia",
    product: "Control Panel Wiring — Distribution Board",
    qty: 800,
    deadline: "25 Mar 2026",
    poDate: "15 Jan 2026",
    currentStage: "closing",
    stageEnteredDate: "21 Mar 2026",
    stages: {
      materialCheck: {
        status: "completed",
        materials: [
          { name: "Wire AWG 18 (UL1007)", required: 20, unit: "roll", status: "ok", currentStock: 180, allocated: 20 },
          { name: "Terminal Ring M4", required: 2400, unit: "pcs", status: "ok", currentStock: 25000, allocated: 2400 },
        ],
      },
      loa: {
        status: "completed",
        loaNumber: "LoA-SGE-2026-006",
        issuedDate: "25 Jan 2026",
        referencedMaterials: "Wire AWG 18 (20 roll), Terminal Ring M4 (2.400 pcs)",
        assignedJobTask: "JOB-SGE-2026-006 — Control Panel Wiring Distribution Board × 800 set",
      },
      production: {
        status: "completed",
        progress: 800,
        target: 800,
        defectRate: 0.6,
        estimatedReady: "18 Mar 2026",
        assignedLine: "ACS-03, CRM-05",
        processLayers: [
          { name: "Cutting & Stripping", status: "completed" },
          { name: "Crimping", status: "completed", defectRate: 0.6 },
          { name: "Assembly", status: "completed" },
          { name: "Testing (Jig Tester)", status: "completed" },
        ],
      },
      delivery: {
        status: "completed",
        deliveryOrders: [
          { doNumber: "DO-SGE-006-A", qty: 800, status: "delivered", scheduledDate: "20 Mar 2026", courier: "SiCepat Cargo", trackingNote: "Diterima 20 Mar 2026." },
        ],
      },
      closing: {
        status: "active",
        invoiceAmount: 112000000,
        paymentStatus: "overdue",
        poHealth: "at-risk",
        poHealthNote: "Produksi & delivery selesai tepat waktu, tapi pembayaran overdue.",
        notes: "Invoice dikirim 21 Mar. Jatuh tempo 21 Apr. DP 50% sudah diterima.",
        aiInsight: "⚠️ Pembayaran belum lunas meski delivery sudah selesai. Schneider biasanya bayar tepat waktu — follow up segera. Outstanding Rp 56 jt.",
      },
    },
  },
  {
    id: "PO-SGE-2026-007",
    client: "PT Panasonic Manufacturing",
    product: "Wiring Harness Assy — AC Indoor Unit",
    qty: 1200,
    deadline: "1 Mar 2026",
    poDate: "5 Jan 2026",
    currentStage: "closing",
    stageEnteredDate: "26 Feb 2026",
    stages: {
      materialCheck: {
        status: "completed",
        materials: [
          { name: "Wire AWG 18 (UL1007)", required: 25, unit: "roll", status: "ok", currentStock: 180, allocated: 25 },
          { name: "Terminal Female 250", required: 3600, unit: "pcs", status: "ok", currentStock: 8000, allocated: 3600 },
        ],
      },
      loa: {
        status: "completed",
        loaNumber: "LoA-SGE-2026-007",
        issuedDate: "15 Jan 2026",
        referencedMaterials: "Wire AWG 18 (25 roll), Terminal Female 250 (3.600 pcs)",
        assignedJobTask: "JOB-SGE-2026-007 — Wiring Harness Assy AC Indoor Unit × 1.200 set",
      },
      production: {
        status: "completed",
        progress: 1200,
        target: 1200,
        defectRate: 1.0,
        estimatedReady: "22 Feb 2026",
        assignedLine: "ACS-01, CRM-01, CRM-02",
        processLayers: [
          { name: "Cutting & Stripping", status: "completed" },
          { name: "Crimping", status: "completed", defectRate: 1.0 },
          { name: "Assembly", status: "completed" },
          { name: "Testing (Jig Tester)", status: "completed" },
        ],
      },
      delivery: {
        status: "completed",
        deliveryOrders: [
          { doNumber: "DO-SGE-007-A", qty: 1200, status: "delivered", scheduledDate: "25 Feb 2026", courier: "JNE Cargo", trackingNote: "Diterima 26 Feb 2026." },
        ],
      },
      closing: {
        status: "completed",
        invoiceAmount: 84000000,
        paymentStatus: "paid",
        poHealth: "good",
        poHealthNote: "Order selesai dengan baik. Semua tahap on-time. Jig Tester pass rate 99%.",
        notes: "Lunas 10 Mar 2026. Order berjalan lancar.",
      },
    },
  },
];

// Helper to format IDR
export const formatIDR = (value: number): string => {
  if (value >= 1000000000) return `Rp ${(value / 1000000000).toFixed(1)} M`;
  if (value >= 1000000) return `Rp ${(value / 1000000).toFixed(0)} jt`;
  return `Rp ${value.toLocaleString("id-ID")}`;
};

export const formatNumber = (value: number): string => value.toLocaleString("id-ID");
