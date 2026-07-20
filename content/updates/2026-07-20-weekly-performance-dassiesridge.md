---
title: "Weekly performance: Dassiesridge (13 Jul - 19 Jul)"
date: "2026-07-20"
layout: "tabs"
---

Dassiesridge Hybrid (Wind + BESS) exported just 0.53 GWh this week, down again from an already-bad 1.24 GWh last week. The wind turbine fault from last week is easing but not resolved: 12 of 14 turbines remain flagged, down from all 14. The penalty-adjusted net position hit -3,633.1 MWh, the worst week yet.

<div class="summary-grid">
  <div class="summary-item"><span class="summary-label">Week 13 Exported</span><span class="summary-value">0.53 GWh</span></div>
  <div class="summary-item"><span class="summary-label">MTD Exported</span><span class="summary-value">5.91 GWh</span></div>
  <div class="summary-item"><span class="summary-label">YTD Exported</span><span class="summary-value">79.5 GWh</span></div>
  <div class="summary-item"><span class="summary-label">Weighting factor</span><span class="summary-value">70% @1.0x&nbsp;/&nbsp;19% @2.0x</span></div>
</div>

<div class="callout callout-issue">
<strong>Major issue:</strong> the wind turbine fault continues. 12 of 14 turbines are still in Warning state with an active "Operating state: Unknown" alarm (now centered on WTG21), and wind performance managed only 5.2% this week (up from 0.0% last week, but still far below normal) despite unchanged ~3 m/s wind speeds. Only 2.7% of this week's declared hours were net-beneficial — the lowest yet.
</div>

<div class="callout callout-win">
<strong>Recovery note:</strong> BESS has fully recovered. The battery array heatmap is back to all-green (no warning/critical segments, versus 5 flagged two weeks ago), SOC has climbed back to ~40% from a low of 4.8%, and BESS availability is back to 100%. Whatever went wrong is isolated to the wind side.
</div>

## Exported Production — last ~2 months

<svg class="report-chart" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="16" fill="#a0a0a0" font-size="12">Weekly exported production (GWh)</text>
  <line x1="50" y1="190" x2="730" y2="190" stroke="#4a4a4a" stroke-width="1"/>

  <rect x="63" y="130" width="50" height="60" rx="4" fill="#60a5fa"/>
  <text x="88" y="124" fill="#a0a0a0" font-size="11" text-anchor="middle">1.76</text>
  <text x="88" y="205" fill="#6b6b6b" font-size="10" text-anchor="middle">18 May</text>

  <rect x="138" y="175" width="50" height="15" rx="4" fill="#60a5fa"/>
  <text x="163" y="169" fill="#a0a0a0" font-size="11" text-anchor="middle">0.45</text>
  <text x="163" y="205" fill="#6b6b6b" font-size="10" text-anchor="middle">25 May</text>

  <circle cx="239" cy="190" r="4" fill="#f87171"/>
  <text x="239" y="169" fill="#f87171" font-size="11" text-anchor="middle">0.00 &#9888;</text>
  <text x="239" y="205" fill="#6b6b6b" font-size="10" text-anchor="middle">01 Jun</text>

  <rect x="289" y="87" width="50" height="103" rx="4" fill="#60a5fa"/>
  <text x="314" y="81" fill="#a0a0a0" font-size="11" text-anchor="middle">3.04</text>
  <text x="314" y="205" fill="#6b6b6b" font-size="10" text-anchor="middle">08 Jun</text>

  <rect x="365" y="90" width="50" height="100" rx="4" fill="#60a5fa"/>
  <text x="390" y="84" fill="#a0a0a0" font-size="11" text-anchor="middle">2.94</text>
  <text x="390" y="205" fill="#6b6b6b" font-size="10" text-anchor="middle">15 Jun</text>

  <rect x="441" y="50" width="50" height="140" rx="4" fill="#60a5fa"/>
  <text x="466" y="44" fill="#a0a0a0" font-size="11" text-anchor="middle">4.12</text>
  <text x="466" y="205" fill="#6b6b6b" font-size="10" text-anchor="middle">22 Jun</text>

  <rect x="516" y="29" width="50" height="161" rx="4" fill="#60a5fa"/>
  <text x="541" y="23" fill="#a0a0a0" font-size="11" text-anchor="middle">4.74</text>
  <text x="541" y="205" fill="#6b6b6b" font-size="10" text-anchor="middle">29 Jun</text>

  <rect x="592" y="148" width="50" height="42" rx="4" fill="#60a5fa"/>
  <text x="617" y="142" fill="#a0a0a0" font-size="11" text-anchor="middle">1.24</text>
  <text x="617" y="205" fill="#6b6b6b" font-size="10" text-anchor="middle">06 Jul</text>

  <rect x="667" y="172" width="50" height="18" rx="4" fill="#f87171"/>
  <text x="692" y="166" fill="#ededed" font-size="11" text-anchor="middle">0.53 &#9888;</text>
  <text x="692" y="205" fill="#a0a0a0" font-size="10" text-anchor="middle">13 Jul (this wk)</text>
</svg>

Two straight weeks of decline since the 29 Jun peak. This week's 0.53 GWh is the second-lowest of the last two months, behind only the 01 Jun outage — and unlike that clean zero, this week still had 2 of 14 turbines producing normally, so the fault is a partial, not total, failure.

## This week vs. last week

| Metric | This week (13-19 Jul) | Last week (6-12 Jul) | Change |
|---|---|---|---|
| Exported production | <span class="neg">0.53 GWh</span> | 1.24 GWh | <span class="neg">-0.71 GWh (-57.1%)</span> |
| Net MWh (penalty-adjusted) | <span class="neg">-3,633.1</span> | <span class="neg">-3,176.0</span> | <span class="neg">-457.0</span> |
| Net gain / net loss (MWh) | +30.8 / -3,663.9 | +255.3 / -3,431.3 | Gain nearly gone, loss grew |
| Positive net periods | 2.7% | 11.6% | <span class="neg">-8.9pp</span> |
| Declared utilisation | 62.2% | 82.3% | <span class="neg">-20.1pp</span> |
| Export vs. declared ratio | 55.3% | 72.0% | <span class="neg">-16.7pp</span> |
| Wind availability (declared) | 100% | 100% | flat |
| BESS availability (declared) | 100% | 98.8% | +1.2pp |
| BESS contribution to exports | 33.5%* | 31.2%* | +2.3pp |
| BESS charge / discharge (MWh) | 283.1 / 178.7 | 461.4 / 388.7 | Less cycling (little wind to bank) |
| Avg. hours to recover from a loss period | 81.7h | 127.7h | -46.0h (less bad, still severe) |

\* Wind (122.9%) and BESS (33.5%) contribution percentages are on a very small exported base this week (0.53 GWh) — both ratios are more volatile than usual at this volume and shouldn't be read the same way as a normal week.

**Is under-delivery an efficiency problem this week? Still yes.** Wind availability stayed declared at 100% and wind speed was a normal ~3 m/s, yet wind performance was only 5.2% — the same available-but-not-producing pattern as last week, consistent with an ongoing turbine control fault rather than weather. BESS, by contrast, is no longer part of the problem: its availability actually improved to 100%.

## Month- and year-to-date

| Period | Exported production | Declared utilisation | Wind contribution | BESS contribution |
|---|---|---|---|---|
| MTD (1-19 Jul) | 5.91 GWh | 90.2% | 106.3% | 18.7% |
| YTD (Jan-19 Jul) | 79.5 GWh | 86.3% | 104.3% | 19.2% |

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

  <rect x="660" y="77" width="55" height="33" rx="4" fill="#3b82f6"/>
  <text x="687" y="71" fill="#ededed" font-size="10" text-anchor="middle">5.9</text>
  <text x="687" y="125" fill="#a0a0a0" font-size="10" text-anchor="middle">Jul (MTD)</text>
</svg>

<svg class="report-chart" viewBox="0 0 780 150" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="14" fill="#a0a0a0" font-size="12">Monthly average ALP weighting factor</text>
  <line x1="50" y1="110" x2="730" y2="110" stroke="#4a4a4a" stroke-width="1"/>
  <text x="45" y="113" fill="#6b6b6b" font-size="9" text-anchor="end">1.0x</text>
  <text x="45" y="24" fill="#6b6b6b" font-size="9" text-anchor="end">1.5x</text>

  <polyline points="93,61 178,63 263,85 348,65 433,31 518,43 603,67 688,62" fill="none" stroke="#fbbf24" stroke-width="2"/>
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
  <circle cx="688" cy="62" r="4" fill="#fbbf24"/>
  <text x="688" y="53" fill="#fbbf24" font-size="10" text-anchor="middle">1.27x</text>
  <text x="688" y="125" fill="#a0a0a0" font-size="10" text-anchor="middle">Jul (MTD)</text>
</svg>

July's exported total (5.9 GWh through the 19th) keeps slipping further behind a typical month as the fault drags on. The average weighting factor, though, isn't part of the story this month — July's MTD average (1.27x) sits in the same range it has all year, and remains well below April's peak of 1.44x.

## Weighting (ALP penalty factor) this week

Declared periods are weighted by a penalty factor that varies by period type. This week's 168 recorded hours split as:

| Penalty factor | Hours | Share |
|---|---|---|
| 1.00x | 118 | 70.2% |
| 1.25x | 11 | 6.5% |
| 1.75x | 8 | 4.8% |
| 2.00x | 31 | 18.5% |

31 of this week's hours (18.5%) were declared with under 2 hours' notice before execution, and — for the third week running — every one of those short-notice hours also fell in the highest 2.00x tier. This is no longer a one-off pattern; short-notice declarations have landed exclusively in the harshest penalty tier every week we've tracked it.

### Short-notice declaration rate — trend

New this week, and tracked going forward: the share of each week's hours declared with under 2 hours' notice.

<svg class="report-chart" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="16" fill="#a0a0a0" font-size="12">Share of hours declared &lt;2h before execution (%)</text>
  <line x1="50" y1="190" x2="730" y2="190" stroke="#4a4a4a" stroke-width="1"/>

  <rect x="63" y="41" width="50" height="149" rx="4" fill="#60a5fa"/>
  <text x="88" y="35" fill="#a0a0a0" font-size="11" text-anchor="middle">39.3%</text>
  <text x="88" y="205" fill="#6b6b6b" font-size="10" text-anchor="middle">18 May</text>

  <rect x="138" y="114" width="50" height="76" rx="4" fill="#60a5fa"/>
  <text x="163" y="108" fill="#a0a0a0" font-size="11" text-anchor="middle">20.2%</text>
  <text x="163" y="205" fill="#6b6b6b" font-size="10" text-anchor="middle">25 May</text>

  <rect x="214" y="188" width="50" height="2" rx="1" fill="#6b6b6b"/>
  <text x="239" y="182" fill="#6b6b6b" font-size="11" text-anchor="middle">0.0% &#9888;</text>
  <text x="239" y="205" fill="#6b6b6b" font-size="10" text-anchor="middle">01 Jun</text>

  <rect x="289" y="71" width="50" height="119" rx="4" fill="#60a5fa"/>
  <text x="314" y="65" fill="#a0a0a0" font-size="11" text-anchor="middle">31.5%</text>
  <text x="314" y="205" fill="#6b6b6b" font-size="10" text-anchor="middle">08 Jun</text>

  <rect x="365" y="109" width="50" height="81" rx="4" fill="#60a5fa"/>
  <text x="390" y="103" fill="#a0a0a0" font-size="11" text-anchor="middle">21.4%</text>
  <text x="390" y="205" fill="#6b6b6b" font-size="10" text-anchor="middle">15 Jun</text>

  <rect x="441" y="84" width="50" height="106" rx="4" fill="#60a5fa"/>
  <text x="466" y="78" fill="#a0a0a0" font-size="11" text-anchor="middle">28.0%</text>
  <text x="466" y="205" fill="#6b6b6b" font-size="10" text-anchor="middle">22 Jun</text>

  <rect x="516" y="82" width="50" height="108" rx="4" fill="#60a5fa"/>
  <text x="541" y="76" fill="#a0a0a0" font-size="11" text-anchor="middle">28.6%</text>
  <text x="541" y="205" fill="#6b6b6b" font-size="10" text-anchor="middle">29 Jun</text>

  <rect x="592" y="105" width="50" height="85" rx="4" fill="#60a5fa"/>
  <text x="617" y="99" fill="#a0a0a0" font-size="11" text-anchor="middle">22.6%</text>
  <text x="617" y="205" fill="#6b6b6b" font-size="10" text-anchor="middle">06 Jul</text>

  <rect x="667" y="120" width="50" height="70" rx="4" fill="#3b82f6"/>
  <text x="692" y="114" fill="#ededed" font-size="11" text-anchor="middle">18.5%</text>
  <text x="692" y="205" fill="#a0a0a0" font-size="10" text-anchor="middle">13 Jul (this wk)</text>
</svg>

Yes, there's improvement: from 39.3% of hours on under-2-hour notice in mid-May down to 18.5% this week — the lowest of the last two months. It hasn't been a straight line (it bounced back up to ~28% across the two peak-performance weeks in late June), but the trend across the full window is downward. The 01 Jun reading (0.0%) is the same outage week flagged elsewhere in this report and isn't a real data point for this trend — there was next to no declared activity that week to measure.

## Operational context (Unity portal)

The turbine fault is easing but not resolved: where all 14 turbines were flagged two weeks ago, 12 remain in Warning state now (2 have recovered), with the active alarm now centered on turbine WTG21 specifically rather than the whole fleet. Wind performance was 5.2% this week against a normal ~3 m/s wind speed. On the BESS side, the picture has fully turned around — the battery array heatmap is all-green, SOC has recovered to ~40%, and availability is back to 100%, with no PCS units in warning.
