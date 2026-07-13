---
title: "Weekly performance: Dassiesridge (6 Jul - 12 Jul)"
date: "2026-07-13"
---

Dassiesridge Hybrid (Wind + BESS) exported just 1.24 GWh this week, down from 4.74 GWh last week. The cause wasn't wind resource — it was a fleet-wide turbine fault. The penalty-adjusted net position swung to -3,176.0 MWh, the worst week in the last two months.

<div class="summary-grid">
  <div class="summary-item"><span class="summary-label">Week 6 Exported</span><span class="summary-value">1.24 GWh</span></div>
  <div class="summary-item"><span class="summary-label">MTD Exported</span><span class="summary-value">5.37 GWh</span></div>
  <div class="summary-item"><span class="summary-label">YTD Exported</span><span class="summary-value">79.0 GWh</span></div>
  <div class="summary-item"><span class="summary-label">Weighting factor</span><span class="summary-value">64% @1.0x&nbsp;/&nbsp;23% @2.0x</span></div>
</div>

<div class="callout callout-issue">
<strong>Major issue:</strong> all 14 wind turbines are showing an active "Operating state: Unknown" alarm (severity 70), and wind performance collapsed to 0.00% this week despite normal wind speeds (~3 m/s avg) — this is a turbine control/SCADA fault, not a resource shortfall. BESS was drained to 4.8% SOC covering the gap, and PCS warning count rose from 1 to 6 units.
</div>

<div class="callout callout-win">
<strong>Resilience note:</strong> BESS availability held at 98.8% throughout and covered 31.2% of this week's (much smaller) exports, up from 15.2% last week — it absorbed as much of the shortfall as a battery fleet can, but a depleted, still-not-recovered BESS heading into next week is itself a risk to watch.
</div>

## Exported Production — last ~2 months

<svg class="report-chart" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="16" fill="#a0a0a0" font-size="12">Weekly exported production (GWh)</text>
  <line x1="50" y1="190" x2="730" y2="190" stroke="#4a4a4a" stroke-width="1"/>

  <rect x="63" y="66" width="50" height="124" rx="4" fill="#60a5fa"/>
  <text x="88" y="60" fill="#a0a0a0" font-size="11" text-anchor="middle">3.65</text>
  <text x="88" y="205" fill="#6b6b6b" font-size="10" text-anchor="middle">11 May</text>

  <rect x="138" y="130" width="50" height="60" rx="4" fill="#60a5fa"/>
  <text x="163" y="124" fill="#a0a0a0" font-size="11" text-anchor="middle">1.76</text>
  <text x="163" y="205" fill="#6b6b6b" font-size="10" text-anchor="middle">18 May</text>

  <rect x="214" y="175" width="50" height="15" rx="4" fill="#60a5fa"/>
  <text x="239" y="169" fill="#a0a0a0" font-size="11" text-anchor="middle">0.45</text>
  <text x="239" y="205" fill="#6b6b6b" font-size="10" text-anchor="middle">25 May</text>

  <circle cx="314" cy="190" r="4" fill="#f87171"/>
  <text x="314" y="169" fill="#f87171" font-size="11" text-anchor="middle">0.00 &#9888;</text>
  <text x="314" y="205" fill="#6b6b6b" font-size="10" text-anchor="middle">01 Jun</text>

  <rect x="365" y="87" width="50" height="103" rx="4" fill="#60a5fa"/>
  <text x="390" y="81" fill="#a0a0a0" font-size="11" text-anchor="middle">3.04</text>
  <text x="390" y="205" fill="#6b6b6b" font-size="10" text-anchor="middle">08 Jun</text>

  <rect x="441" y="90" width="50" height="100" rx="4" fill="#60a5fa"/>
  <text x="466" y="84" fill="#a0a0a0" font-size="11" text-anchor="middle">2.94</text>
  <text x="466" y="205" fill="#6b6b6b" font-size="10" text-anchor="middle">15 Jun</text>

  <rect x="516" y="50" width="50" height="140" rx="4" fill="#60a5fa"/>
  <text x="541" y="44" fill="#a0a0a0" font-size="11" text-anchor="middle">4.12</text>
  <text x="541" y="205" fill="#6b6b6b" font-size="10" text-anchor="middle">22 Jun</text>

  <rect x="592" y="29" width="50" height="161" rx="4" fill="#60a5fa"/>
  <text x="617" y="23" fill="#a0a0a0" font-size="11" text-anchor="middle">4.74</text>
  <text x="617" y="205" fill="#6b6b6b" font-size="10" text-anchor="middle">29 Jun</text>

  <rect x="667" y="148" width="50" height="42" rx="4" fill="#f87171"/>
  <text x="692" y="142" fill="#ededed" font-size="11" text-anchor="middle">1.24 &#9888;</text>
  <text x="692" y="205" fill="#a0a0a0" font-size="10" text-anchor="middle">06 Jul (this wk)</text>
</svg>

Output had climbed for three straight weeks through 29 Jun. This week erased most of that gain — its 1.24 GWh is the lowest full week since late May, and unlike the 01 Jun outage (a clean zero), this week still had turbines nominally online, just not converting wind into power.

## This week vs. last week

| Metric | This week (6-12 Jul) | Last week (29 Jun-5 Jul) | Change |
|---|---|---|---|
| Exported production | <span class="neg">1.24 GWh</span> | 4.74 GWh | <span class="neg">-3.50 GWh (-73.9%)</span> |
| Net MWh (penalty-adjusted) | <span class="neg">-3,176.0</span> | <span class="pos">+1,932.3</span> | <span class="neg">-5,108.3</span> |
| Net gain / net loss (MWh) | +255.3 / -3,431.3 | +3,732.4 / -1,800.2 | Gain collapsed, loss nearly doubled |
| Positive net periods | 11.6% | 63.3% | <span class="neg">-51.7pp</span> |
| Declared utilisation | 82.3% | 98.7% | <span class="neg">-16.4pp</span> |
| Export vs. declared ratio | 72.0% | 97.9% | <span class="neg">-25.9pp</span> |
| Wind availability (declared) | 100% | 100% | flat |
| BESS availability (declared) | 98.8% | 100% | -1.2pp |
| BESS contribution to exports | 31.2% | 15.2% | +16.0pp |
| BESS charge / discharge (MWh) | 461.4 / 388.7 | 836.0 / 721.3 | Much less cycling (less energy to move) |
| Avg. hours to recover from a loss period | 11.3h | 9.8h | <span class="neg">+1.5h (slower)</span> |

**Is under-delivery an efficiency problem this week? Yes.** Wind availability was still declared at 100% — the turbines were nominally in service — yet performance was 0%. That gap between "available" and "producing" is exactly what the fleet-wide operating-state fault would cause, and it's a different failure mode from last week's wind-resource-driven shortfall. BESS took on double the share of exports it carried last week, which is why it ended the week at 4.8% SOC instead of its usual mid-range.

## Month- and year-to-date

| Period | Exported production | Declared utilisation | Wind contribution | BESS contribution |
|---|---|---|---|---|
| MTD (1-12 Jul) | 5.37 GWh | 94.5% | 104.7% | 17.2% |
| YTD (Jan-12 Jul) | 79.0 GWh | 86.5% | 104.2% | 19.1% |

## Monthly trend

<svg class="report-chart" viewBox="0 0 780 150" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="14" fill="#a0a0a0" font-size="12">Monthly exported production (GWh)</text>
  <line x1="50" y1="110" x2="730" y2="110" stroke="#4a4a4a" stroke-width="1"/>

  <rect x="65" y="29" width="55" height="81" rx="4" fill="#60a5fa"/>
  <text x="92" y="23" fill="#a0a0a0" font-size="10" text-anchor="middle">14.4</text>
  <text x="92" y="125" fill="#6b6b6b" font-size="10" text-anchor="middle">Dec</text>

  <rect x="150" y="30" width="55" height="80" rx="4" fill="#60a5fa"/>
  <text x="177" y="24" fill="#a0a0a0" font-size="10" text-anchor="middle">14.2</text>
  <text x="177" y="125" fill="#6b6b6b" font-size="10" text-anchor="middle">Jan</text>

  <rect x="235" y="46" width="55" height="64" rx="4" fill="#60a5fa"/>
  <text x="262" y="40" fill="#a0a0a0" font-size="10" text-anchor="middle">11.3</text>
  <text x="262" y="125" fill="#6b6b6b" font-size="10" text-anchor="middle">Feb</text>

  <rect x="320" y="54" width="55" height="56" rx="4" fill="#60a5fa"/>
  <text x="347" y="48" fill="#a0a0a0" font-size="10" text-anchor="middle">10.0</text>
  <text x="347" y="125" fill="#6b6b6b" font-size="10" text-anchor="middle">Mar</text>

  <rect x="405" y="24" width="55" height="86" rx="4" fill="#60a5fa"/>
  <text x="432" y="18" fill="#a0a0a0" font-size="10" text-anchor="middle">15.2</text>
  <text x="432" y="125" fill="#6b6b6b" font-size="10" text-anchor="middle">Apr</text>

  <rect x="490" y="42" width="55" height="68" rx="4" fill="#60a5fa"/>
  <text x="517" y="36" fill="#a0a0a0" font-size="10" text-anchor="middle">12.1</text>
  <text x="517" y="125" fill="#6b6b6b" font-size="10" text-anchor="middle">May</text>

  <rect x="575" y="50" width="55" height="60" rx="4" fill="#60a5fa"/>
  <text x="602" y="44" fill="#a0a0a0" font-size="10" text-anchor="middle">10.7</text>
  <text x="602" y="125" fill="#6b6b6b" font-size="10" text-anchor="middle">Jun</text>

  <rect x="660" y="80" width="55" height="30" rx="4" fill="#3b82f6"/>
  <text x="687" y="74" fill="#ededed" font-size="10" text-anchor="middle">5.4</text>
  <text x="687" y="125" fill="#a0a0a0" font-size="10" text-anchor="middle">Jul (MTD)</text>
</svg>

<svg class="report-chart" viewBox="0 0 780 150" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="14" fill="#a0a0a0" font-size="12">Monthly average ALP weighting factor</text>
  <line x1="50" y1="110" x2="730" y2="110" stroke="#4a4a4a" stroke-width="1"/>
  <text x="45" y="113" fill="#6b6b6b" font-size="9" text-anchor="end">1.0x</text>
  <text x="45" y="24" fill="#6b6b6b" font-size="9" text-anchor="end">1.5x</text>

  <polyline points="93,61 178,63 263,85 348,65 433,31 518,43 603,67 688,58" fill="none" stroke="#fbbf24" stroke-width="2"/>
  <circle cx="93" cy="61" r="4" fill="#fbbf24"/>
  <text x="93" y="52" fill="#fbbf24" font-size="10" text-anchor="middle">1.27x</text>
  <text x="93" y="125" fill="#6b6b6b" font-size="10" text-anchor="middle">Dec</text>
  <circle cx="178" cy="63" r="4" fill="#fbbf24"/>
  <text x="178" y="54" fill="#fbbf24" font-size="10" text-anchor="middle">1.26x</text>
  <text x="178" y="125" fill="#6b6b6b" font-size="10" text-anchor="middle">Jan</text>
  <circle cx="263" cy="85" r="4" fill="#fbbf24"/>
  <text x="263" y="76" fill="#fbbf24" font-size="10" text-anchor="middle">1.14x</text>
  <text x="263" y="125" fill="#6b6b6b" font-size="10" text-anchor="middle">Feb</text>
  <circle cx="348" cy="65" r="4" fill="#fbbf24"/>
  <text x="348" y="56" fill="#fbbf24" font-size="10" text-anchor="middle">1.25x</text>
  <text x="348" y="125" fill="#6b6b6b" font-size="10" text-anchor="middle">Mar</text>
  <circle cx="433" cy="31" r="4" fill="#fbbf24"/>
  <text x="433" y="22" fill="#fbbf24" font-size="10" text-anchor="middle">1.44x</text>
  <text x="433" y="125" fill="#6b6b6b" font-size="10" text-anchor="middle">Apr</text>
  <circle cx="518" cy="43" r="4" fill="#fbbf24"/>
  <text x="518" y="34" fill="#fbbf24" font-size="10" text-anchor="middle">1.37x</text>
  <text x="518" y="125" fill="#6b6b6b" font-size="10" text-anchor="middle">May</text>
  <circle cx="603" cy="67" r="4" fill="#fbbf24"/>
  <text x="603" y="58" fill="#fbbf24" font-size="10" text-anchor="middle">1.24x</text>
  <text x="603" y="125" fill="#6b6b6b" font-size="10" text-anchor="middle">Jun</text>
  <circle cx="688" cy="58" r="4" fill="#fbbf24"/>
  <text x="688" y="49" fill="#fbbf24" font-size="10" text-anchor="middle">1.29x</text>
  <text x="688" y="125" fill="#a0a0a0" font-size="10" text-anchor="middle">Jul (MTD)</text>
</svg>

July's exported total (5.4 GWh) is running well behind a typical full month, but that's mostly this week's fault, not a broader July trend — the first six days of July were still on pace with June. The average weighting factor stayed range-bound as before: lowest in February (1.14x), highest in April (1.44x), July's MTD average (1.29x) mid-pack and not itself unusual.

## Weighting (ALP penalty factor) this week

Declared periods are weighted by a penalty factor that varies by period type. This week's 168 recorded hours split as:

| Penalty factor | Hours | Share |
|---|---|---|
| 1.00x | 108 | 64.3% |
| 1.25x | 12 | 7.1% |
| 1.75x | 10 | 6.0% |
| 2.00x | 38 | 22.6% |

38 of this week's hours (22.6%) were declared with under 2 hours' notice before execution — and, as in prior weeks, every one of those short-notice hours also landed in the highest 2.00x penalty tier. That correlation continues to hold regardless of how the week otherwise performed.

## Operational context (Unity portal)

The story this week is the turbine fault, not the weather: wind speeds averaged a normal ~3 m/s, but all 14 turbines carry an active "Operating state: Unknown" alarm and wind performance read 0.00% for the week. The Wind tab's asset heatmap shows all 14 turbines in Warning state (none Normal). On the BESS side, availability held at 98.8% but SOC has been driven down to 4.8% and PCS warnings rose from 1 to 6 units, consistent with the battery working overtime to cover the wind shortfall. The previously-reported combustible-gas alarm on the battery container no longer appears in the active alert list.
