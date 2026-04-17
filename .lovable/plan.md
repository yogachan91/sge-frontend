

## Plan: Enhance Dashboard with Business-Critical Insights + NG Codes

### Changes

**1. Add NG codes to flagged production layers** (approved earlier)
- Add `ngCode` and `ngReason` optional fields to `ProcessLayer` type
- Add NG data to flagged layers in mock orders (e.g., `NG-CRM-001: Terminal bent — die crimping aus`)
- Display NG code below flagged layer in `OrderMilestone.tsx`

**2. Add Revenue-at-Risk KPI to dashboard stats row**
- Calculate total invoice amount of orders with `at-risk` or `blocked` status
- Add as 5th KPI card: "Revenue at Risk" with warning color
- Restructure grid to `grid-cols-2 lg:grid-cols-5`

**3. Add deadline countdown on collapsed order cards**
- Replace static deadline date with relative text: "5 hari lagi", "Hari ini!", "Terlambat 2 hari"
- Color-code: green (7+ days), yellow (3-6 days), red (0-2 days or overdue)
- Keep exact date as secondary text

**4. Add On-Time Delivery Rate KPI**
- Calculate from completed orders: orders delivered on/before deadline vs total completed
- Display as percentage in stats row

**5. Add days-in-stage indicator inside expanded order view**
- Show "Di tahap ini: 3 hari" next to the active stage badge
- Color-coded: normal (< expected), warning (approaching), red (overdue for stage)

**6. Cross-order material shortage linking**
- When a material is `out` or `low` in Material Check, show count of other orders needing same material
- e.g., "⚠️ Terminal Female 250 — juga dibutuhkan oleh 2 order lain"

### Technical Details

**Files modified:**
- `src/data/mockData.ts` — Add `ngCode`/`ngReason` to ProcessLayer type, add `poDate` field to orders, add NG data to flagged layers, add `stageEnteredDate` to active stages
- `src/components/OrderMilestone.tsx` — Display NG codes on flagged layers, show days-in-stage indicator, show cross-order material alerts, add deadline countdown
- `src/pages/Dashboard.tsx` — Add Revenue-at-Risk and OTD Rate KPIs, adjust grid layout

**No new components or pages.** All enhancements are inline additions to existing components.

