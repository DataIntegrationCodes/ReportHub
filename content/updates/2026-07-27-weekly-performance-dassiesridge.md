---
title: 'Weekly performance: Dassiesridge (20 Jul - 26 Jul)'
date: '2026-07-27'
layout: tabs
notesStatus: draft
---

Dassiesridge Hybrid (Wind + BESS) exported 2.12 GWh this week, nearly quadrupling last week's 0.53 GWh as the turbine fault continues to ease. But a new way of looking at declaration timing this week shows the highest share of harshly-penalized hours of the last two months — a different concern from the hardware fault.

<div class="summary-grid">
  <div class="summary-item"><span class="summary-label">Week 20 Exported</span><span class="summary-value">2.12 GWh</span></div>
  <div class="summary-item"><span class="summary-label">MTD Exported</span><span class="summary-value">8.03 GWh</span></div>
  <div class="summary-item"><span class="summary-label">YTD Exported</span><span class="summary-value">81.6 GWh</span></div>
  <div class="summary-item"><span class="summary-label">Weighting factor</span><span class="summary-value">48% @1.0x&nbsp;/&nbsp;35% @2.0x</span></div>
</div>

<div class="callout callout-win">
<strong>Recovery continues:</strong> exported production is up 298% week-on-week and wind performance climbed to 28.4% (from 5.2%). Net position improved to -932.3 MWh from -3,633.1 MWh, and BESS cycling nearly doubled as more wind became available to bank. Turbines remain at 12-of-14 flagged (unchanged count), but the fleet is clearly producing more than the flag count alone would suggest.
</div>

<div class="callout callout-issue">
<strong>New issue:</strong> using the corrected weighting-factor methodology (see the Weighting tab), this week has the highest short-notice declaration rate (35.3%) and highest 2.00x penalty-tier share of the last two months — worse than any week during the turbine fault itself. A new "Plant curtailment" alert (severity 20, source Hybrid PPC) also appeared today; it reads as a minor grid-side event, not an equipment fault.
</div>

## Exported Production — last ~2 months

<svg class="report-chart" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="16" fill="#52525b" font-size="12">Weekly exported production (GWh)</text>
  <line x1="50" y1="190" x2="730" y2="190" stroke="#d1d5db" stroke-width="1"/>

  <rect x="63" y="175" width="50" height="15" rx="4" fill="#3b82f6"/>
  <text x="88" y="169" fill="#52525b" font-size="11" text-anchor="middle">0.45</text>
  <text x="88" y="205" fill="#6b7280" font-size="10" text-anchor="middle">25 May</text>

  <circle cx="163" cy="190" r="4" fill="#dc2626"/>
  <text x="163" y="169" fill="#dc2626" font-size="11" text-anchor="middle">0.00 &#9888;</text>
  <text x="163" y="205" fill="#6b7280" font-size="10" text-anchor="middle">01 Jun</text>

  <rect x="214" y="87" width="50" height="103" rx="4" fill="#3b82f6"/>
  <text x="239" y="81" fill="#52525b" font-size="11" text-anchor="middle">3.04</text>
  <text x="239" y="205" fill="#6b7280" font-size="10" text-anchor="middle">08 Jun</text>

  <rect x="289" y="90" width="50" height="100" rx="4" fill="#3b82f6"/>
  <text x="314" y="84" fill="#52525b" font-size="11" text-anchor="middle">2.94</text>
  <text x="314" y="205" fill="#6b7280" font-size="10" text-anchor="middle">15 Jun</text>

  <rect x="365" y="50" width="50" height="140" rx="4" fill="#3b82f6"/>
  <text x="390" y="44" fill="#52525b" font-size="11" text-anchor="middle">4.12</text>
  <text x="390" y="205" fill="#6b7280" font-size="10" text-anchor="middle">22 Jun</text>

  <rect x="441" y="29" width="50" height="161" rx="4" fill="#3b82f6"/>
  <text x="466" y="23" fill="#52525b" font-size="11" text-anchor="middle">4.74</text>
  <text x="466" y="205" fill="#6b7280" font-size="10" text-anchor="middle">29 Jun</text>

  <rect x="516" y="148" width="50" height="42" rx="4" fill="#3b82f6"/>
  <text x="541" y="142" fill="#52525b" font-size="11" text-anchor="middle">1.24</text>
  <text x="541" y="205" fill="#6b7280" font-size="10" text-anchor="middle">06 Jul</text>

  <rect x="592" y="172" width="50" height="18" rx="4" fill="#3b82f6"/>
  <text x="617" y="166" fill="#52525b" font-size="11" text-anchor="middle">0.53</text>
  <text x="617" y="205" fill="#6b7280" font-size="10" text-anchor="middle">13 Jul</text>

  <rect x="667" y="118" width="50" height="72" rx="4" fill="#1d4ed8"/>
  <text x="692" y="112" fill="#111827" font-size="11" text-anchor="middle">2.12</text>
  <text x="692" y="205" fill="#52525b" font-size="10" text-anchor="middle">20 Jul</text>
</svg>

Two straight weeks of decline bottomed out at 13 Jul (0.53 GWh). This week's 2.12 GWh is the third straight week of directional change, but in the opposite direction — a clear recovery signal, though still well below the 29 Jun peak of 4.74 GWh.
## This week vs. last week

| Metric |Week (20-26 Jul) | Last week (13-19 Jul) | Change |
|---|---|---|---|
| Exported production | <span class="pos">2.12 GWh</span> | 0.53 GWh | <span class="pos">+1.59 GWh (+297.7%)</span> |
| Net MWh (penalty-adjusted) | <span class="neg">-932.3</span> | <span class="neg">-3,633.1</span> | <span class="pos">+2,700.8</span> |
| Net gain / net loss (MWh) | +980.9 / -1,913.2 | +30.8 / -3,663.9 | Gain grew, loss shrank sharply |
| Positive net periods | 37.2% | 2.7% | <span class="pos">+34.5pp</span> |
| Declared utilisation | 84.2% | 62.2% | <span class="pos">+22.0pp</span> |
| Export vs. declared ratio | 86.4% | 55.3% | <span class="pos">+31.1pp</span> |
| Wind availability (declared) | 100% | 100% | flat |
| BESS availability (declared) | 100% | 100% | flat |
| BESS contribution to exports | 26.2% | 33.5% | -7.3pp |
| BESS charge / discharge (MWh) | 558.1 / 556.6 | 283.1 / 178.7 | Much more cycling (more wind to bank) |
| Avg. hours to recover from a loss period | 17.9h | 78.6h | <span class="pos">-60.7h (much faster)</span> |

Recovery is broad-based, not just a lucky day or two: positive-net periods nearly tripled as a share of the week, and the export-vs-declared ratio gained 31 points. One open question worth watching: as output recovers, more real-time adjustment seems to be happening — which may be why the declaration-timing metrics (next tab) got worse even as production improved. That's plausible but not confirmed; treat it as a hypothesis, not a finding.
## Month- and year-to-date

| Period | Exported production | Declared utilisation | Wind contribution | BESS contribution |
|---|---|---|---|---|
| MTD (1-26 Jul) | 8.03 GWh | 88.6% | 105.1% | 20.7% |
| YTD (Jan-26 Jul) | 81.6 GWh | 86.2% | 104.3% | 19.4% |

## Monthly trend

<svg class="report-chart" viewBox="0 0 780 150" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="14" fill="#52525b" font-size="12">Monthly exported production (GWh)</text>
  <line x1="50" y1="110" x2="730" y2="110" stroke="#d1d5db" stroke-width="1"/>

  <rect x="65" y="29" width="55" height="81" rx="4" fill="#3b82f6"/>
  <text x="92" y="23" fill="#52525b" font-size="10" text-anchor="middle">14.4</text>
  <text x="92" y="125" fill="#6b7280" font-size="10" text-anchor="middle">Dec</text>

  <rect x="150" y="30" width="55" height="80" rx="4" fill="#3b82f6"/>
  <text x="177" y="24" fill="#52525b" font-size="10" text-anchor="middle">14.2</text>
  <text x="177" y="125" fill="#6b7280" font-size="10" text-anchor="middle">Jan</text>

  <rect x="235" y="46" width="55" height="64" rx="4" fill="#3b82f6"/>
  <text x="262" y="40" fill="#52525b" font-size="10" text-anchor="middle">11.3</text>
  <text x="262" y="125" fill="#6b7280" font-size="10" text-anchor="middle">Feb</text>

  <rect x="320" y="54" width="55" height="56" rx="4" fill="#3b82f6"/>
  <text x="347" y="48" fill="#52525b" font-size="10" text-anchor="middle">10.0</text>
  <text x="347" y="125" fill="#6b7280" font-size="10" text-anchor="middle">Mar</text>

  <rect x="405" y="24" width="55" height="86" rx="4" fill="#3b82f6"/>
  <text x="432" y="18" fill="#52525b" font-size="10" text-anchor="middle">15.2</text>
  <text x="432" y="125" fill="#6b7280" font-size="10" text-anchor="middle">Apr</text>

  <rect x="490" y="42" width="55" height="68" rx="4" fill="#3b82f6"/>
  <text x="517" y="36" fill="#52525b" font-size="10" text-anchor="middle">12.1</text>
  <text x="517" y="125" fill="#6b7280" font-size="10" text-anchor="middle">May</text>

  <rect x="575" y="50" width="55" height="60" rx="4" fill="#3b82f6"/>
  <text x="602" y="44" fill="#52525b" font-size="10" text-anchor="middle">10.7</text>
  <text x="602" y="125" fill="#6b7280" font-size="10" text-anchor="middle">Jun</text>

  <rect x="660" y="65" width="55" height="45" rx="4" fill="#1d4ed8"/>
  <text x="687" y="59" fill="#111827" font-size="10" text-anchor="middle">8.0</text>
  <text x="687" y="125" fill="#52525b" font-size="10" text-anchor="middle">Jul (MTD)</text>
</svg>

<svg class="report-chart" viewBox="0 0 780 150" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="14" fill="#52525b" font-size="12">Monthly average ALP weighting factor</text>
  <line x1="50" y1="110" x2="730" y2="110" stroke="#d1d5db" stroke-width="1"/>
  <text x="45" y="113" fill="#6b7280" font-size="9" text-anchor="end">1.0x</text>
  <text x="45" y="24" fill="#6b7280" font-size="9" text-anchor="end">1.5x</text>

  <polyline points="93,61 178,63 263,85 348,65 433,31 518,43 603,67 688,51" fill="none" stroke="#b45309" stroke-width="2"/>
  <circle cx="93" cy="61" r="4" fill="#b45309"/>
  <text x="93" y="52" fill="#b45309" font-size="10" text-anchor="middle">1.27x</text>
  <text x="93" y="125" fill="#6b7280" font-size="10" text-anchor="middle">Dec</text>
  <circle cx="178" cy="63" r="4" fill="#b45309"/>
  <text x="178" y="54" fill="#b45309" font-size="10" text-anchor="middle">1.26x</text>
  <text x="178" y="125" fill="#6b7280" font-size="10" text-anchor="middle">Jan</text>
  <circle cx="263" cy="85" r="4" fill="#b45309"/>
  <text x="263" y="76" fill="#b45309" font-size="10" text-anchor="middle">1.14x</text>
  <text x="263" y="125" fill="#6b7280" font-size="10" text-anchor="middle">Feb</text>
  <circle cx="348" cy="65" r="4" fill="#b45309"/>
  <text x="348" y="56" fill="#b45309" font-size="10" text-anchor="middle">1.25x</text>
  <text x="348" y="125" fill="#6b7280" font-size="10" text-anchor="middle">Mar</text>
  <circle cx="433" cy="31" r="4" fill="#b45309"/>
  <text x="433" y="22" fill="#b45309" font-size="10" text-anchor="middle">1.44x</text>
  <text x="433" y="125" fill="#6b7280" font-size="10" text-anchor="middle">Apr</text>
  <circle cx="518" cy="43" r="4" fill="#b45309"/>
  <text x="518" y="34" fill="#b45309" font-size="10" text-anchor="middle">1.37x</text>
  <text x="518" y="125" fill="#6b7280" font-size="10" text-anchor="middle">May</text>
  <circle cx="603" cy="67" r="4" fill="#b45309"/>
  <text x="603" y="58" fill="#b45309" font-size="10" text-anchor="middle">1.24x</text>
  <text x="603" y="125" fill="#6b7280" font-size="10" text-anchor="middle">Jun</text>
  <circle cx="688" cy="51" r="4" fill="#b45309"/>
  <text x="688" y="42" fill="#b45309" font-size="10" text-anchor="middle">1.33x*</text>
  <text x="688" y="125" fill="#52525b" font-size="10" text-anchor="middle">Jul (MTD)</text>
</svg>

\* July's figure (and this week's weighting analysis below) excludes the 21:30-05:00 non-dispatchable window; December-June figures use the prior all-24h methodology and aren't directly comparable to July. Even so, July's 1.33x sits close to the existing range (1.14x-1.44x) rather than being an outlier.

## Weighting (ALP penalty factor) this week

**Methodology change starting this week:** the 21:30-05:00 window is excluded from all weighting-factor and short-notice-declaration calculations below, since that period is non-dispatchable. This reduced the week from 168 to 119 relevant hours. It's a real change, not noise — recomputing last week's rate the same way moved it from 32.7% to 35.3% short-notice, so figures here won't line up exactly with prior reports.

This week's 119 relevant hours split as:

| Penalty factor | Hours | Share |
|---|---|---|
| 1.00x | 57 | 47.9% |
| 1.25x | 15 | 12.6% |
| 1.75x | 5 | 4.2% |
| 2.00x | 42 | 35.3% |

42 of the 119 relevant hours (35.3%) were declared with under 2 hours' notice — and, as in every week we've tracked this, every one of those short-notice hours also fell in the highest 2.00x tier. That correlation has now held for four consecutive weeks regardless of how the week otherwise performed.

### Short-notice declaration rate — trend

<svg class="report-chart" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="16" fill="#52525b" font-size="12">Share of hours declared &lt;2h before execution, excl. 21:30-05:00 (%)</text>
  <line x1="50" y1="190" x2="730" y2="190" stroke="#d1d5db" stroke-width="1"/>

  <rect x="63" y="152" width="50" height="38" rx="4" fill="#3b82f6"/>
  <text x="88" y="146" fill="#52525b" font-size="11" text-anchor="middle">22.7%</text>
  <text x="88" y="205" fill="#6b7280" font-size="10" text-anchor="middle">25 May</text>

  <rect x="138" y="188" width="50" height="2" rx="1" fill="#6b7280"/>
  <text x="163" y="182" fill="#6b7280" font-size="11" text-anchor="middle">0.0% &#9888;</text>
  <text x="163" y="205" fill="#6b7280" font-size="10" text-anchor="middle">01 Jun</text>

  <rect x="214" y="143" width="50" height="47" rx="4" fill="#3b82f6"/>
  <text x="239" y="137" fill="#52525b" font-size="11" text-anchor="middle">27.7%</text>
  <text x="239" y="205" fill="#6b7280" font-size="10" text-anchor="middle">08 Jun</text>

  <rect x="289" y="149" width="50" height="41" rx="4" fill="#3b82f6"/>
  <text x="314" y="143" fill="#52525b" font-size="11" text-anchor="middle">24.4%</text>
  <text x="314" y="205" fill="#6b7280" font-size="10" text-anchor="middle">15 Jun</text>

  <rect x="365" y="147" width="50" height="43" rx="4" fill="#3b82f6"/>
  <text x="390" y="141" fill="#52525b" font-size="11" text-anchor="middle">25.2%</text>
  <text x="390" y="205" fill="#6b7280" font-size="10" text-anchor="middle">22 Jun</text>

  <rect x="441" y="145" width="50" height="45" rx="4" fill="#3b82f6"/>
  <text x="466" y="139" fill="#52525b" font-size="11" text-anchor="middle">26.1%</text>
  <text x="466" y="205" fill="#6b7280" font-size="10" text-anchor="middle">29 Jun</text>

  <rect x="516" y="142" width="50" height="48" rx="4" fill="#3b82f6"/>
  <text x="541" y="136" fill="#52525b" font-size="11" text-anchor="middle">26.9%</text>
  <text x="541" y="205" fill="#6b7280" font-size="10" text-anchor="middle">06 Jul</text>

  <rect x="592" y="150" width="50" height="40" rx="4" fill="#3b82f6"/>
  <text x="617" y="144" fill="#52525b" font-size="11" text-anchor="middle">23.5%</text>
  <text x="617" y="205" fill="#6b7280" font-size="10" text-anchor="middle">13 Jul</text>

  <rect x="667" y="127" width="50" height="63" rx="4" fill="#dc2626"/>
  <text x="692" y="121" fill="#111827" font-size="11" text-anchor="middle">35.3% &#9888;</text>
  <text x="692" y="205" fill="#52525b" font-size="10" text-anchor="middle">20 Jul </text>
</svg>

Recomputed consistently with the new exclusion, the trend tells a different story than before: this week's 35.3% is the **highest** of the whole window, not a continuation of improvement. The prior six weeks (08 Jun-13 Jul) had actually been fairly flat, in the 23-28% range; this week is a clear step up, not noise. The 01 Jun reading is the known outage week and isn't a real data point.
## Operational context (Unity portal)

Wind performance recovered sharply to 28.4% this week (from 5.2%) on the same ~3 m/s wind speeds as every other week — the turbines are converting wind into power again even though the turbine count still shows 12 of 14 in Warning state on the heatmap (unchanged from last week). The specific "Operating state: Unknown" alarm no longer appears in the active alerts list. A new "Plant curtailment" alert (severity 20, source Hybrid PPC) appeared today — low severity, reads as a grid-side event rather than a site fault. BESS remains healthy: only 1 PCS unit flagged (down from 6 two weeks ago), SOC at 23.2% reflecting the much heavier charge/discharge cycling this week rather than any equipment concern.

## Reviewer Notes

No notes yet.
