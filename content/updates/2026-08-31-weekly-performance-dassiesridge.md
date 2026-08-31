---
title: 'Weekly performance: Dassiesridge (24 Aug - 30 Aug)'
date: '2026-08-31'
layout: tabs
notesStatus: draft
---

Dassiesridge Hybrid (Wind + BESS) exported 3.26 GWh this week, up 61.2% on last week's telemetry-affected low. Production is recovering, but this week has its own oddity worth a look: declared Wind and BESS availability dropped to 76.6% on Wednesday and Thursday — yet those were two of the week's best production days.

<div class="summary-grid">
  <div class="summary-item"><span class="summary-label">Week 31 Exported</span><span class="summary-value">3.26 GWh</span></div>
  <div class="summary-item"><span class="summary-label">MTD Exported</span><span class="summary-value">13.5 GWh</span></div>
  <div class="summary-item"><span class="summary-label">YTD Exported</span><span class="summary-value">97.2 GWh</span></div>
  <div class="summary-item"><span class="summary-label">Weighting factor</span><span class="summary-value">37% @1.0x&nbsp;/&nbsp;50% @2.0x</span></div>
</div>

<div class="callout callout-issue">
<strong>Major issue:</strong> declared Wind and BESS availability fell to 41.7% (Wed) and 20.8% (Thu) — yet both days were among the week's strongest for actual output (489 MWh and 611 MWh exported, on 553 MWh and 589 MWh of wind). A plant reporting itself barely available while physically producing near-normal volumes is a genuine inconsistency worth flagging for review rather than a straightforward operational problem. Separately, PCS03 is this week's clear outlier — 29.7% on Monday and 50.0% on Tuesday, the two worst single-unit readings of the week — and the 2.00x penalty tier share stayed high at 50.4%, close to two weeks ago's record.
</div>

<div class="callout callout-win">
<strong>Recovery continues:</strong> exported production rebounded 61.2% week-on-week to 3.26 GWh, and net MWh improved sharply (-728.5 MWh, up from -2,591.9 MWh) even though it's still negative. Declaration coverage also improved to 84.9% of relevant hours, up from 78.2% last week.
</div>

## Exported Production — last ~2 months

<svg class="report-chart" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="16" fill="#52525b" font-size="12">Weekly exported production (GWh)</text>
  <line x1="50" y1="190" x2="730" y2="190" stroke="#d1d5db" stroke-width="1"/>
  <rect x="60" y="29" width="45" height="161" rx="4" fill="#3b82f6"/>
  <text x="82" y="23" fill="#52525b" font-size="11" text-anchor="middle">4.74</text>
  <text x="82" y="205" fill="#6b7280" font-size="10" text-anchor="middle">29 Jun</text>
  <rect x="135" y="148" width="45" height="42" rx="4" fill="#3b82f6"/>
  <text x="157" y="142" fill="#52525b" font-size="11" text-anchor="middle">1.24</text>
  <text x="157" y="205" fill="#6b7280" font-size="10" text-anchor="middle">06 Jul</text>
  <rect x="210" y="172" width="45" height="18" rx="4" fill="#3b82f6"/>
  <text x="232" y="166" fill="#52525b" font-size="11" text-anchor="middle">0.53</text>
  <text x="232" y="205" fill="#6b7280" font-size="10" text-anchor="middle">13 Jul</text>
  <rect x="285" y="118" width="45" height="72" rx="4" fill="#3b82f6"/>
  <text x="307" y="112" fill="#52525b" font-size="11" text-anchor="middle">2.12</text>
  <text x="307" y="205" fill="#6b7280" font-size="10" text-anchor="middle">20 Jul</text>
  <rect x="360" y="99" width="45" height="91" rx="4" fill="#3b82f6"/>
  <text x="382" y="93" fill="#52525b" font-size="11" text-anchor="middle">2.67</text>
  <text x="382" y="205" fill="#6b7280" font-size="10" text-anchor="middle">27 Jul</text>
  <rect x="435" y="74" width="45" height="116" rx="4" fill="#3b82f6"/>
  <text x="457" y="68" fill="#52525b" font-size="11" text-anchor="middle">3.42</text>
  <text x="457" y="205" fill="#6b7280" font-size="10" text-anchor="middle">03 Aug</text>
  <rect x="510" y="47" width="45" height="143" rx="4" fill="#3b82f6"/>
  <text x="532" y="41" fill="#52525b" font-size="11" text-anchor="middle">4.21</text>
  <text x="532" y="205" fill="#6b7280" font-size="10" text-anchor="middle">10 Aug</text>
  <rect x="585" y="121" width="45" height="69" rx="4" fill="#3b82f6"/>
  <text x="607" y="115" fill="#52525b" font-size="11" text-anchor="middle">2.02</text>
  <text x="607" y="205" fill="#6b7280" font-size="10" text-anchor="middle">17 Aug</text>
  <rect x="660" y="79" width="45" height="111" rx="4" fill="#1d4ed8"/>
  <text x="682" y="73" fill="#111827" font-size="11" text-anchor="middle">3.26</text>
  <text x="682" y="205" fill="#52525b" font-size="10" text-anchor="middle">24 Aug (this wk)</text>
</svg>

A solid rebound from last week's low, though still short of the 10 Aug peak. Two of the last three weeks have now been disrupted by data-quality issues rather than genuine operational problems — 17 Aug's PCS/BESS telemetry gap, and this week's availability-vs-output inconsistency below.

<svg class="report-chart" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="16" fill="#52525b" font-size="12">Weekly avg BESS discharge hours (per day)</text>
  <line x1="50" y1="190" x2="730" y2="190" stroke="#d1d5db" stroke-width="1"/>
  <text x="45" y="193" fill="#6b7280" font-size="9" text-anchor="end">0h</text>
  <text x="45" y="24" fill="#6b7280" font-size="9" text-anchor="end">12h</text>
  <polyline points="82,28 157,102 232,155 307,120 382,92 457,53 532,52 607,103 682,60" fill="none" stroke="#3b82f6" stroke-width="2"/>
  <circle cx="82" cy="28" r="3" fill="#3b82f6"/><circle cx="157" cy="102" r="3" fill="#3b82f6"/><circle cx="232" cy="155" r="3" fill="#3b82f6"/><circle cx="307" cy="120" r="3" fill="#3b82f6"/><circle cx="382" cy="92" r="3" fill="#3b82f6"/><circle cx="457" cy="53" r="3" fill="#3b82f6"/><circle cx="532" cy="52" r="3" fill="#3b82f6"/><circle cx="607" cy="103" r="3" fill="#3b82f6"/><circle cx="682" cy="60" r="4" fill="#1d4ed8"/>
  <text x="82" y="20" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">11.7h</text>
  <text x="157" y="94" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">7.1h</text>
  <text x="232" y="147" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">3.4h</text>
  <text x="307" y="112" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">6.3h</text>
  <text x="382" y="84" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">7.6h</text>
  <text x="457" y="45" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">9.9h</text>
  <text x="532" y="44" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">10.0h</text>
  <text x="607" y="95" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">6.3h</text>
  <text x="682" y="52" fill="#111827" font-size="10" font-weight="600" text-anchor="middle">8.3h</text>
  <text x="82" y="205" fill="#6b7280" font-size="10" text-anchor="middle">29 Jun</text>
  <text x="157" y="205" fill="#6b7280" font-size="10" text-anchor="middle">06 Jul</text>
  <text x="232" y="205" fill="#6b7280" font-size="10" text-anchor="middle">13 Jul</text>
  <text x="307" y="205" fill="#6b7280" font-size="10" text-anchor="middle">20 Jul</text>
  <text x="382" y="205" fill="#6b7280" font-size="10" text-anchor="middle">27 Jul</text>
  <text x="457" y="205" fill="#6b7280" font-size="10" text-anchor="middle">03 Aug</text>
  <text x="532" y="205" fill="#6b7280" font-size="10" text-anchor="middle">10 Aug</text>
  <text x="607" y="205" fill="#6b7280" font-size="10" text-anchor="middle">17 Aug</text>
  <text x="682" y="205" fill="#52525b" font-size="10" text-anchor="middle">24 Aug (this wk)</text>
</svg>

<svg class="report-chart" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="16" fill="#52525b" font-size="12">Weekly avg discharge rate (MW per discharging hour)</text>
  <line x1="50" y1="190" x2="730" y2="190" stroke="#d1d5db" stroke-width="1"/>
  <text x="45" y="193" fill="#6b7280" font-size="9" text-anchor="end">0 MW</text>
  <text x="45" y="24" fill="#6b7280" font-size="9" text-anchor="end">16 MW</text>
  <polyline points="82,120 157,125 232,155 307,150 382,53 457,61 532,82 607,95 682,79" fill="none" stroke="#059669" stroke-width="2"/>
  <circle cx="82" cy="120" r="3" fill="#059669"/><circle cx="157" cy="125" r="3" fill="#059669"/><circle cx="232" cy="155" r="3" fill="#059669"/><circle cx="307" cy="150" r="3" fill="#059669"/><circle cx="382" cy="53" r="3" fill="#059669"/><circle cx="457" cy="61" r="3" fill="#059669"/><circle cx="532" cy="82" r="3" fill="#059669"/><circle cx="607" cy="95" r="3" fill="#059669"/><circle cx="682" cy="79" r="3" fill="#059669"/>
  <text x="82" y="112" fill="#047857" font-size="10" font-weight="600" text-anchor="middle">6.7</text>
  <text x="157" y="117" fill="#047857" font-size="10" font-weight="600" text-anchor="middle">6.3</text>
  <text x="232" y="147" fill="#047857" font-size="10" font-weight="600" text-anchor="middle">3.4</text>
  <text x="307" y="142" fill="#047857" font-size="10" font-weight="600" text-anchor="middle">3.7</text>
  <text x="382" y="45" fill="#047857" font-size="10" font-weight="600" text-anchor="middle">13.2</text>
  <text x="457" y="53" fill="#047857" font-size="10" font-weight="600" text-anchor="middle">12.4</text>
  <text x="532" y="74" fill="#047857" font-size="10" font-weight="600" text-anchor="middle">10.4</text>
  <text x="607" y="87" fill="#047857" font-size="10" font-weight="600" text-anchor="middle">9.1</text>
  <text x="682" y="71" fill="#047857" font-size="10" font-weight="600" text-anchor="middle">10.3</text>
  <text x="82" y="205" fill="#6b7280" font-size="10" text-anchor="middle">29 Jun</text>
  <text x="157" y="205" fill="#6b7280" font-size="10" text-anchor="middle">06 Jul</text>
  <text x="232" y="205" fill="#6b7280" font-size="10" text-anchor="middle">13 Jul</text>
  <text x="307" y="205" fill="#6b7280" font-size="10" text-anchor="middle">20 Jul</text>
  <text x="382" y="205" fill="#6b7280" font-size="10" text-anchor="middle">27 Jul</text>
  <text x="457" y="205" fill="#6b7280" font-size="10" text-anchor="middle">03 Aug</text>
  <text x="532" y="205" fill="#6b7280" font-size="10" text-anchor="middle">10 Aug</text>
  <text x="607" y="205" fill="#6b7280" font-size="10" text-anchor="middle">17 Aug</text>
  <text x="682" y="205" fill="#52525b" font-size="10" text-anchor="middle">24 Aug (this wk)</text>
</svg>

This week's discharge profile is healthy and unremarkable — 8.3h/day at 10.3 MW/hour, both mid-pack for the period — which supports reading this week as a genuine return to normal operation rather than another data anomaly.

## This week vs. last week

| Metric | This week (24-30 Aug) | Last week (17-23 Aug) | Change |
|---|---|---|---|
| Exported production | <span class="pos">3.26 GWh</span> | 2.02 GWh | <span class="pos">+1.24 GWh (+61.2%)</span> |
| Net MWh (penalty-adjusted) | <span class="neg">-728.5</span> | <span class="neg">-2,591.9</span> | <span class="pos">+1,863.4 (still negative, much improved)</span> |
| Net gain / net loss (MWh) | +1,945.8 / -2,674.3 | +649.9 / -3,241.8 | Gain grew sharply; loss shrank |
| Positive net periods | 45.0% | 20.6% | <span class="pos">+24.4pp</span> |
| Declared utilisation | 93.9% | 88.5% | +5.4pp |
| Export vs. declared ratio | 91.5% | 85.7% | +5.8pp |
| Wind availability (declared) | <span class="neg">76.6%</span> | 100% | <span class="neg">-23.4pp</span> |
| BESS availability (declared) | <span class="neg">76.6%</span> | 100% | <span class="neg">-23.4pp</span> |
| BESS contribution to exports | 18.4% | 19.9% | -1.5pp |
| BESS charge / discharge (MWh) | 692.3 / 599.1 | 382.3 / 401.8 | More cycling |
| Avg. hours to recover from a loss period | 12.30h | 12.16h | +0.14h (flat) |

The Wind/BESS availability drop is entirely down to Wed (41.7%) and Thu (27 Aug: 20.8%) — every other day this week read 100%. As the callout above notes, those two days delivered some of the week's best output, so this reads as a declaration/reporting inconsistency rather than reduced physical capability. Declaration coverage was 101 of 119 relevant hours (84.9%), concentrated gaps on Monday (7/17) and Tuesday (11/17).

## BESS Daily View

<svg class="report-chart" viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="16" fill="#52525b" font-size="12">Daily hours charging vs. discharging, vs. weekly average discharge (8.3h)</text>
  <line x1="55" y1="190" x2="705" y2="190" stroke="#d1d5db" stroke-width="1"/>
  <text x="50" y="193" fill="#6b7280" font-size="9" text-anchor="end">0h</text>
  <text x="50" y="108" fill="#6b7280" font-size="9" text-anchor="end">12h</text>
  <text x="50" y="24" fill="#6b7280" font-size="9" text-anchor="end">24h</text>
  <rect x="81" y="84" width="40" height="106" fill="#3b82f6"/>
  <rect x="81" y="20" width="40" height="64" fill="#b45309"/>
  <rect x="174" y="63" width="40" height="127" fill="#3b82f6"/>
  <rect x="174" y="20" width="40" height="43" fill="#b45309"/>
  <rect x="267" y="70" width="40" height="120" fill="#3b82f6"/>
  <rect x="267" y="20" width="40" height="50" fill="#b45309"/>
  <rect x="360" y="70" width="40" height="120" fill="#3b82f6"/>
  <rect x="360" y="20" width="40" height="50" fill="#b45309"/>
  <rect x="453" y="91" width="40" height="99" fill="#3b82f6"/>
  <rect x="453" y="20" width="40" height="71" fill="#b45309"/>
  <rect x="546" y="98" width="40" height="92" fill="#3b82f6"/>
  <rect x="546" y="20" width="40" height="78" fill="#b45309"/>
  <rect x="639" y="77" width="40" height="113" fill="#3b82f6"/>
  <rect x="639" y="20" width="40" height="57" fill="#b45309"/>
  <line x1="55" y1="131" x2="705" y2="131" stroke="#111827" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="710" y="134" fill="#111827" font-size="9" text-anchor="start">avg 8.3h</text>
  <text x="101" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Mon</text>
  <text x="194" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Tue</text>
  <text x="287" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Wed</text>
  <text x="380" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Thu</text>
  <text x="473" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Fri</text>
  <text x="566" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Sat</text>
  <text x="659" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Sun</text>
  <rect x="90" y="222" width="12" height="10" fill="#3b82f6"/>
  <text x="106" y="231" fill="#52525b" font-size="10">Charging hours</text>
  <rect x="260" y="222" width="12" height="10" fill="#b45309"/>
  <text x="276" y="231" fill="#52525b" font-size="10">Discharging hours</text>
  <line x1="430" y1="227" x2="452" y2="227" stroke="#111827" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="458" y="231" fill="#52525b" font-size="10">Weekly avg discharge</text>
</svg>

<svg class="report-chart" viewBox="0 0 760 250" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="16" fill="#52525b" font-size="12">Daily BESS contribution to exports this week (%)</text>
  <line x1="50" y1="190" x2="730" y2="190" stroke="#d1d5db" stroke-width="1"/>
  <text x="45" y="193" fill="#6b7280" font-size="9" text-anchor="end">0%</text>
  <text x="45" y="108" fill="#6b7280" font-size="9" text-anchor="end">40%</text>
  <text x="45" y="24" fill="#6b7280" font-size="9" text-anchor="end">80%</text>
  <polyline points="99,164 196,137 293,182 390,134 487,137 584,161 681,143" fill="none" stroke="#3b82f6" stroke-width="2"/>
  <circle cx="99" cy="164" r="3" fill="#3b82f6"/><circle cx="196" cy="137" r="3" fill="#3b82f6"/><circle cx="293" cy="182" r="3" fill="#3b82f6"/><circle cx="390" cy="134" r="3" fill="#3b82f6"/><circle cx="487" cy="137" r="3" fill="#3b82f6"/><circle cx="584" cy="161" r="3" fill="#3b82f6"/><circle cx="681" cy="143" r="3" fill="#3b82f6"/>
  <text x="99" y="156" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">12.3%</text>
  <text x="196" y="129" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">25.4%</text>
  <text x="293" y="174" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">4.0%</text>
  <text x="390" y="126" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">27.1%</text>
  <text x="487" y="129" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">25.5%</text>
  <text x="584" y="153" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">13.8%</text>
  <text x="681" y="135" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">22.7%</text>
  <text x="99" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Mon</text>
  <text x="196" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Tue</text>
  <text x="293" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Wed</text>
  <text x="390" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Thu</text>
  <text x="487" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Fri</text>
  <text x="584" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Sat</text>
  <text x="681" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Sun</text>
</svg>

<svg class="report-chart" viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="16" fill="#52525b" font-size="12">Daily exported production vs. declared (MWh) — BESS stacks on Wind only on days BESS was net positive</text>
  <line x1="55" y1="190" x2="705" y2="190" stroke="#d1d5db" stroke-width="1"/>
  <text x="50" y="193" fill="#6b7280" font-size="9" text-anchor="end">0</text>
  <text x="50" y="108" fill="#6b7280" font-size="9" text-anchor="end">500</text>
  <text x="50" y="24" fill="#6b7280" font-size="9" text-anchor="end">1000</text>
  <rect x="81" y="177" width="40" height="13" fill="#3b82f6"><title>Mon: Exported 77.3 MWh (Wind, BESS net-charged)</title></rect>
  <line x1="77" y1="172" x2="125" y2="172" stroke="#111827" stroke-width="2"><title>Mon: Declared 108.8 MWh</title></line>
  <rect x="174" y="167" width="40" height="23" fill="#3b82f6"><title>Tue: Wind 140.5 MWh</title></rect>
  <rect x="174" y="166" width="40" height="1" fill="#059669"><title>Tue: BESS +7.6 MWh (net positive)</title></rect>
  <line x1="170" y1="165" x2="218" y2="165" stroke="#111827" stroke-width="2"><title>Tue: Declared 149.7 MWh</title></line>
  <rect x="267" y="109" width="40" height="81" fill="#3b82f6"><title>Wed: Exported 489.2 MWh (Wind, BESS net-charged)</title></rect>
  <line x1="263" y1="107" x2="311" y2="107" stroke="#111827" stroke-width="2"><title>Wed: Declared 497.1 MWh</title></line>
  <rect x="360" y="92" width="40" height="98" fill="#3b82f6"><title>Thu: Wind 589.0 MWh</title></rect>
  <rect x="360" y="87" width="40" height="5" fill="#059669"><title>Thu: BESS +29.7 MWh (net positive)</title></rect>
  <line x1="356" y1="89" x2="404" y2="89" stroke="#111827" stroke-width="2"><title>Thu: Declared 610.9 MWh</title></line>
  <rect x="453" y="99" width="40" height="91" fill="#3b82f6"><title>Fri: Exported 546.9 MWh (Wind, BESS net-charged)</title></rect>
  <line x1="449" y1="79" x2="497" y2="79" stroke="#111827" stroke-width="2"><title>Fri: Declared 666.6 MWh</title></line>
  <rect x="546" y="27" width="40" height="163" fill="#3b82f6"><title>Sat: Exported 980.0 MWh (Wind, BESS net-charged)</title></rect>
  <line x1="542" y1="22" x2="590" y2="22" stroke="#111827" stroke-width="2"><title>Sat: Declared 1,011.9 MWh</title></line>
  <rect x="639" y="122" width="40" height="68" fill="#3b82f6"><title>Sun: Wind 409.8 MWh</title></rect>
  <rect x="639" y="121" width="40" height="1" fill="#059669"><title>Sun: BESS +6.7 MWh (net positive)</title></rect>
  <line x1="635" y1="119" x2="683" y2="119" stroke="#111827" stroke-width="2"><title>Sun: Declared 425.5 MWh</title></line>
  <text x="101" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Mon</text>
  <text x="194" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Tue</text>
  <text x="287" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Wed</text>
  <text x="380" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Thu</text>
  <text x="473" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Fri</text>
  <text x="566" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Sat</text>
  <text x="659" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Sun</text>
  <rect x="90" y="222" width="12" height="10" fill="#3b82f6"/>
  <text x="106" y="231" fill="#52525b" font-size="10">Wind (or total when BESS net-charged)</text>
  <rect x="330" y="222" width="12" height="10" fill="#059669"/>
  <text x="346" y="231" fill="#52525b" font-size="10">BESS (net positive days only)</text>
  <line x1="580" y1="227" x2="602" y2="227" stroke="#111827" stroke-width="2"/>
  <text x="608" y="231" fill="#52525b" font-size="10">Declared</text>
</svg>

Saturday was easily the week's biggest day — 980.0 MWh exported against 1,011.9 MWh declared (96.8%), close behind the 1,014.3 MWh single-day record from two weeks ago. Thursday (27.1%) and Friday (25.5%) carried the heaviest BESS contribution; Wednesday (4.0%) the lightest. Tuesday, Thursday and Sunday were the three net-positive BESS days.

### PCS availability heatmap

<svg class="report-chart" viewBox="0 0 740 340" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="16" fill="#52525b" font-size="12">Per-unit PCS availability by day — hover any cell for the exact %</text>
  <text x="103" y="32" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Mon</text>
  <text x="193" y="32" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Tue</text>
  <text x="283" y="32" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Wed</text>
  <text x="373" y="32" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Thu</text>
  <text x="463" y="32" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Fri</text>
  <text x="553" y="32" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Sat</text>
  <text x="643" y="32" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Sun</text>
  <text x="55" y="53" fill="#374151" font-size="10" text-anchor="end">PCS01</text>
  <rect x="60" y="40" width="86" height="16" rx="2" fill="#d97706"><title>PCS01 Mon: 70.0% available</title></rect>
  <rect x="150" y="40" width="86" height="16" rx="2" fill="#059669"><title>PCS01 Tue: 100.0% available</title></rect>
  <rect x="240" y="40" width="86" height="16" rx="2" fill="#059669"><title>PCS01 Wed: 100.0% available</title></rect>
  <rect x="330" y="40" width="86" height="16" rx="2" fill="#059669"><title>PCS01 Thu: 100.0% available</title></rect>
  <rect x="420" y="40" width="86" height="16" rx="2" fill="#059669"><title>PCS01 Fri: 99.7% available</title></rect>
  <rect x="510" y="40" width="86" height="16" rx="2" fill="#059669"><title>PCS01 Sat: 100.0% available</title></rect>
  <rect x="600" y="40" width="86" height="16" rx="2" fill="#059669"><title>PCS01 Sun: 100.0% available</title></rect>
  <text x="55" y="71" fill="#374151" font-size="10" text-anchor="end">PCS02</text>
  <rect x="60" y="58" width="86" height="16" rx="2" fill="#d97706"><title>PCS02 Mon: 70.1% available</title></rect>
  <rect x="150" y="58" width="86" height="16" rx="2" fill="#059669"><title>PCS02 Tue: 100.0% available</title></rect>
  <rect x="240" y="58" width="86" height="16" rx="2" fill="#059669"><title>PCS02 Wed: 98.5% available</title></rect>
  <rect x="330" y="58" width="86" height="16" rx="2" fill="#059669"><title>PCS02 Thu: 100.0% available</title></rect>
  <rect x="420" y="58" width="86" height="16" rx="2" fill="#059669"><title>PCS02 Fri: 100.0% available</title></rect>
  <rect x="510" y="58" width="86" height="16" rx="2" fill="#059669"><title>PCS02 Sat: 100.0% available</title></rect>
  <rect x="600" y="58" width="86" height="16" rx="2" fill="#059669"><title>PCS02 Sun: 100.0% available</title></rect>
  <text x="55" y="89" fill="#374151" font-size="10" text-anchor="end">PCS03</text>
  <rect x="60" y="76" width="86" height="16" rx="2" fill="#dc2626"><title>PCS03 Mon: 29.7% available</title></rect>
  <rect x="150" y="76" width="86" height="16" rx="2" fill="#dc2626"><title>PCS03 Tue: 50.0% available</title></rect>
  <rect x="240" y="76" width="86" height="16" rx="2" fill="#d97706"><title>PCS03 Wed: 73.1% available</title></rect>
  <rect x="330" y="76" width="86" height="16" rx="2" fill="#d97706"><title>PCS03 Thu: 88.2% available</title></rect>
  <rect x="420" y="76" width="86" height="16" rx="2" fill="#059669"><title>PCS03 Fri: 100.0% available</title></rect>
  <rect x="510" y="76" width="86" height="16" rx="2" fill="#059669"><title>PCS03 Sat: 100.0% available</title></rect>
  <rect x="600" y="76" width="86" height="16" rx="2" fill="#059669"><title>PCS03 Sun: 100.0% available</title></rect>
  <text x="55" y="107" fill="#374151" font-size="10" text-anchor="end">PCS04</text>
  <rect x="60" y="94" width="86" height="16" rx="2" fill="#d97706"><title>PCS04 Mon: 69.7% available</title></rect>
  <rect x="150" y="94" width="86" height="16" rx="2" fill="#059669"><title>PCS04 Tue: 100.0% available</title></rect>
  <rect x="240" y="94" width="86" height="16" rx="2" fill="#059669"><title>PCS04 Wed: 100.0% available</title></rect>
  <rect x="330" y="94" width="86" height="16" rx="2" fill="#059669"><title>PCS04 Thu: 100.0% available</title></rect>
  <rect x="420" y="94" width="86" height="16" rx="2" fill="#059669"><title>PCS04 Fri: 100.0% available</title></rect>
  <rect x="510" y="94" width="86" height="16" rx="2" fill="#059669"><title>PCS04 Sat: 100.0% available</title></rect>
  <rect x="600" y="94" width="86" height="16" rx="2" fill="#059669"><title>PCS04 Sun: 100.0% available</title></rect>
  <text x="55" y="125" fill="#374151" font-size="10" text-anchor="end">PCS05</text>
  <rect x="60" y="112" width="86" height="16" rx="2" fill="#d97706"><title>PCS05 Mon: 69.6% available</title></rect>
  <rect x="150" y="112" width="86" height="16" rx="2" fill="#059669"><title>PCS05 Tue: 100.0% available</title></rect>
  <rect x="240" y="112" width="86" height="16" rx="2" fill="#059669"><title>PCS05 Wed: 100.0% available</title></rect>
  <rect x="330" y="112" width="86" height="16" rx="2" fill="#059669"><title>PCS05 Thu: 100.0% available</title></rect>
  <rect x="420" y="112" width="86" height="16" rx="2" fill="#059669"><title>PCS05 Fri: 100.0% available</title></rect>
  <rect x="510" y="112" width="86" height="16" rx="2" fill="#059669"><title>PCS05 Sat: 100.0% available</title></rect>
  <rect x="600" y="112" width="86" height="16" rx="2" fill="#059669"><title>PCS05 Sun: 100.0% available</title></rect>
  <text x="55" y="143" fill="#374151" font-size="10" text-anchor="end">PCS06</text>
  <rect x="60" y="130" width="86" height="16" rx="2" fill="#d97706"><title>PCS06 Mon: 69.0% available</title></rect>
  <rect x="150" y="130" width="86" height="16" rx="2" fill="#059669"><title>PCS06 Tue: 100.0% available</title></rect>
  <rect x="240" y="130" width="86" height="16" rx="2" fill="#059669"><title>PCS06 Wed: 100.0% available</title></rect>
  <rect x="330" y="130" width="86" height="16" rx="2" fill="#059669"><title>PCS06 Thu: 100.0% available</title></rect>
  <rect x="420" y="130" width="86" height="16" rx="2" fill="#059669"><title>PCS06 Fri: 100.0% available</title></rect>
  <rect x="510" y="130" width="86" height="16" rx="2" fill="#059669"><title>PCS06 Sat: 99.9% available</title></rect>
  <rect x="600" y="130" width="86" height="16" rx="2" fill="#059669"><title>PCS06 Sun: 100.0% available</title></rect>
  <text x="55" y="161" fill="#374151" font-size="10" text-anchor="end">PCS07</text>
  <rect x="60" y="148" width="86" height="16" rx="2" fill="#d97706"><title>PCS07 Mon: 68.9% available</title></rect>
  <rect x="150" y="148" width="86" height="16" rx="2" fill="#059669"><title>PCS07 Tue: 100.0% available</title></rect>
  <rect x="240" y="148" width="86" height="16" rx="2" fill="#059669"><title>PCS07 Wed: 100.0% available</title></rect>
  <rect x="330" y="148" width="86" height="16" rx="2" fill="#059669"><title>PCS07 Thu: 100.0% available</title></rect>
  <rect x="420" y="148" width="86" height="16" rx="2" fill="#059669"><title>PCS07 Fri: 100.0% available</title></rect>
  <rect x="510" y="148" width="86" height="16" rx="2" fill="#d97706"><title>PCS07 Sat: 86.9% available</title></rect>
  <rect x="600" y="148" width="86" height="16" rx="2" fill="#dc2626"><title>PCS07 Sun: 50.0% available</title></rect>
  <text x="55" y="179" fill="#374151" font-size="10" text-anchor="end">PCS08</text>
  <rect x="60" y="166" width="86" height="16" rx="2" fill="#d97706"><title>PCS08 Mon: 63.3% available</title></rect>
  <rect x="150" y="166" width="86" height="16" rx="2" fill="#059669"><title>PCS08 Tue: 91.3% available</title></rect>
  <rect x="240" y="166" width="86" height="16" rx="2" fill="#059669"><title>PCS08 Wed: 100.0% available</title></rect>
  <rect x="330" y="166" width="86" height="16" rx="2" fill="#059669"><title>PCS08 Thu: 100.0% available</title></rect>
  <rect x="420" y="166" width="86" height="16" rx="2" fill="#059669"><title>PCS08 Fri: 99.7% available</title></rect>
  <rect x="510" y="166" width="86" height="16" rx="2" fill="#059669"><title>PCS08 Sat: 100.0% available</title></rect>
  <rect x="600" y="166" width="86" height="16" rx="2" fill="#059669"><title>PCS08 Sun: 100.0% available</title></rect>
  <text x="55" y="197" fill="#374151" font-size="10" text-anchor="end">PCS09</text>
  <rect x="60" y="184" width="86" height="16" rx="2" fill="#d97706"><title>PCS09 Mon: 68.7% available</title></rect>
  <rect x="150" y="184" width="86" height="16" rx="2" fill="#059669"><title>PCS09 Tue: 98.9% available</title></rect>
  <rect x="240" y="184" width="86" height="16" rx="2" fill="#059669"><title>PCS09 Wed: 100.0% available</title></rect>
  <rect x="330" y="184" width="86" height="16" rx="2" fill="#059669"><title>PCS09 Thu: 95.1% available</title></rect>
  <rect x="420" y="184" width="86" height="16" rx="2" fill="#059669"><title>PCS09 Fri: 95.8% available</title></rect>
  <rect x="510" y="184" width="86" height="16" rx="2" fill="#059669"><title>PCS09 Sat: 97.7% available</title></rect>
  <rect x="600" y="184" width="86" height="16" rx="2" fill="#059669"><title>PCS09 Sun: 100.0% available</title></rect>
  <text x="55" y="215" fill="#374151" font-size="10" text-anchor="end">PCS10</text>
  <rect x="60" y="202" width="86" height="16" rx="2" fill="#d97706"><title>PCS10 Mon: 68.6% available</title></rect>
  <rect x="150" y="202" width="86" height="16" rx="2" fill="#059669"><title>PCS10 Tue: 100.0% available</title></rect>
  <rect x="240" y="202" width="86" height="16" rx="2" fill="#059669"><title>PCS10 Wed: 100.0% available</title></rect>
  <rect x="330" y="202" width="86" height="16" rx="2" fill="#059669"><title>PCS10 Thu: 100.0% available</title></rect>
  <rect x="420" y="202" width="86" height="16" rx="2" fill="#059669"><title>PCS10 Fri: 100.0% available</title></rect>
  <rect x="510" y="202" width="86" height="16" rx="2" fill="#059669"><title>PCS10 Sat: 100.0% available</title></rect>
  <rect x="600" y="202" width="86" height="16" rx="2" fill="#059669"><title>PCS10 Sun: 100.0% available</title></rect>
  <text x="55" y="233" fill="#374151" font-size="10" text-anchor="end">PCS11</text>
  <rect x="60" y="220" width="86" height="16" rx="2" fill="#d97706"><title>PCS11 Mon: 61.1% available</title></rect>
  <rect x="150" y="220" width="86" height="16" rx="2" fill="#d97706"><title>PCS11 Tue: 84.1% available</title></rect>
  <rect x="240" y="220" width="86" height="16" rx="2" fill="#d97706"><title>PCS11 Wed: 87.5% available</title></rect>
  <rect x="330" y="220" width="86" height="16" rx="2" fill="#d97706"><title>PCS11 Thu: 87.4% available</title></rect>
  <rect x="420" y="220" width="86" height="16" rx="2" fill="#059669"><title>PCS11 Fri: 94.7% available</title></rect>
  <rect x="510" y="220" width="86" height="16" rx="2" fill="#059669"><title>PCS11 Sat: 100.0% available</title></rect>
  <rect x="600" y="220" width="86" height="16" rx="2" fill="#059669"><title>PCS11 Sun: 100.0% available</title></rect>
  <text x="55" y="251" fill="#374151" font-size="10" text-anchor="end">PCS12</text>
  <rect x="60" y="238" width="86" height="16" rx="2" fill="#d97706"><title>PCS12 Mon: 68.5% available</title></rect>
  <rect x="150" y="238" width="86" height="16" rx="2" fill="#059669"><title>PCS12 Tue: 100.0% available</title></rect>
  <rect x="240" y="238" width="86" height="16" rx="2" fill="#059669"><title>PCS12 Wed: 100.0% available</title></rect>
  <rect x="330" y="238" width="86" height="16" rx="2" fill="#059669"><title>PCS12 Thu: 100.0% available</title></rect>
  <rect x="420" y="238" width="86" height="16" rx="2" fill="#059669"><title>PCS12 Fri: 100.0% available</title></rect>
  <rect x="510" y="238" width="86" height="16" rx="2" fill="#059669"><title>PCS12 Sat: 100.0% available</title></rect>
  <rect x="600" y="238" width="86" height="16" rx="2" fill="#059669"><title>PCS12 Sun: 100.0% available</title></rect>
  <text x="55" y="269" fill="#374151" font-size="10" text-anchor="end">PCS13</text>
  <rect x="60" y="256" width="86" height="16" rx="2" fill="#d97706"><title>PCS13 Mon: 68.4% available</title></rect>
  <rect x="150" y="256" width="86" height="16" rx="2" fill="#059669"><title>PCS13 Tue: 100.0% available</title></rect>
  <rect x="240" y="256" width="86" height="16" rx="2" fill="#059669"><title>PCS13 Wed: 100.0% available</title></rect>
  <rect x="330" y="256" width="86" height="16" rx="2" fill="#059669"><title>PCS13 Thu: 100.0% available</title></rect>
  <rect x="420" y="256" width="86" height="16" rx="2" fill="#059669"><title>PCS13 Fri: 100.0% available</title></rect>
  <rect x="510" y="256" width="86" height="16" rx="2" fill="#059669"><title>PCS13 Sat: 100.0% available</title></rect>
  <rect x="600" y="256" width="86" height="16" rx="2" fill="#059669"><title>PCS13 Sun: 100.0% available</title></rect>
  <text x="55" y="287" fill="#374151" font-size="10" text-anchor="end">PCS14</text>
  <rect x="60" y="274" width="86" height="16" rx="2" fill="#d97706"><title>PCS14 Mon: 68.3% available</title></rect>
  <rect x="150" y="274" width="86" height="16" rx="2" fill="#059669"><title>PCS14 Tue: 100.0% available</title></rect>
  <rect x="240" y="274" width="86" height="16" rx="2" fill="#059669"><title>PCS14 Wed: 100.0% available</title></rect>
  <rect x="330" y="274" width="86" height="16" rx="2" fill="#059669"><title>PCS14 Thu: 100.0% available</title></rect>
  <rect x="420" y="274" width="86" height="16" rx="2" fill="#059669"><title>PCS14 Fri: 100.0% available</title></rect>
  <rect x="510" y="274" width="86" height="16" rx="2" fill="#059669"><title>PCS14 Sat: 100.0% available</title></rect>
  <rect x="600" y="274" width="86" height="16" rx="2" fill="#d97706"><title>PCS14 Sun: 69.6% available</title></rect>
  <rect x="60" y="308" width="14" height="12" rx="2" fill="#059669"/>
  <text x="78" y="317" fill="#52525b" font-size="10">&#8805;90% available</text>
  <rect x="220" y="308" width="14" height="12" rx="2" fill="#d97706"/>
  <text x="238" y="317" fill="#52525b" font-size="10">60-89%</text>
  <rect x="360" y="308" width="14" height="12" rx="2" fill="#dc2626"/>
  <text x="378" y="317" fill="#52525b" font-size="10">&lt;60%</text>
</svg>

The recurring fleet-wide dip moved again — Monday this time (~65-70% across nearly every unit), the third different day in three weeks (Tuesday, then Thursday, now Monday), reinforcing that this is a scheduled event rather than random noise. **PCS03** is the week's clear outlier: 29.7% Monday and 50.0% Tuesday are the two worst single-unit readings of the week, well below even PCS11's usual soft patch (which, notably, recovered to 94.7%+ by Friday). Two isolated single-day reds also appear — PCS07 dropped to 50.0% on Sunday and PCS14 to 69.6%, neither part of a broader pattern.

## Month- and year-to-date

| Period | Exported production | Declared utilisation | Wind contribution | BESS contribution |
|---|---|---|---|---|
| MTD (1-30 Aug) | 13.5 GWh | 89.8% | 103.3% | 20.7% |
| YTD (Jan-30 Aug) | 97.2 GWh | 86.8% | 104.3% | 19.6% |

## Monthly trend

<svg class="report-chart" viewBox="0 0 780 150" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="14" fill="#52525b" font-size="12">Monthly exported production (GWh)</text>
  <line x1="50" y1="110" x2="730" y2="110" stroke="#d1d5db" stroke-width="1"/>
  <rect x="60" y="29" width="55" height="81" rx="4" fill="#3b82f6"/>
  <text x="87" y="23" fill="#52525b" font-size="10" text-anchor="middle">14.4</text>
  <text x="87" y="125" fill="#6b7280" font-size="10" text-anchor="middle">Dec</text>
  <rect x="136" y="30" width="55" height="80" rx="4" fill="#3b82f6"/>
  <text x="163" y="24" fill="#52525b" font-size="10" text-anchor="middle">14.2</text>
  <text x="163" y="125" fill="#6b7280" font-size="10" text-anchor="middle">Jan</text>
  <rect x="211" y="46" width="55" height="64" rx="4" fill="#3b82f6"/>
  <text x="238" y="40" fill="#52525b" font-size="10" text-anchor="middle">11.3</text>
  <text x="238" y="125" fill="#6b7280" font-size="10" text-anchor="middle">Feb</text>
  <rect x="287" y="54" width="55" height="56" rx="4" fill="#3b82f6"/>
  <text x="314" y="48" fill="#52525b" font-size="10" text-anchor="middle">10.0</text>
  <text x="314" y="125" fill="#6b7280" font-size="10" text-anchor="middle">Mar</text>
  <rect x="362" y="24" width="55" height="86" rx="4" fill="#3b82f6"/>
  <text x="389" y="18" fill="#52525b" font-size="10" text-anchor="middle">15.2</text>
  <text x="389" y="125" fill="#6b7280" font-size="10" text-anchor="middle">Apr</text>
  <rect x="438" y="42" width="55" height="68" rx="4" fill="#3b82f6"/>
  <text x="465" y="36" fill="#52525b" font-size="10" text-anchor="middle">12.1</text>
  <text x="465" y="125" fill="#6b7280" font-size="10" text-anchor="middle">May</text>
  <rect x="514" y="50" width="55" height="60" rx="4" fill="#3b82f6"/>
  <text x="541" y="44" fill="#52525b" font-size="10" text-anchor="middle">10.7</text>
  <text x="541" y="125" fill="#6b7280" font-size="10" text-anchor="middle">Jun</text>
  <rect x="589" y="53" width="55" height="57" rx="4" fill="#3b82f6"/>
  <text x="616" y="47" fill="#52525b" font-size="10" text-anchor="middle">10.1</text>
  <text x="616" y="125" fill="#6b7280" font-size="10" text-anchor="middle">Jul</text>
  <rect x="665" y="34" width="55" height="76" rx="4" fill="#1d4ed8"/>
  <text x="692" y="28" fill="#111827" font-size="10" text-anchor="middle">13.5</text>
  <text x="692" y="125" fill="#52525b" font-size="10" text-anchor="middle">Aug (MTD)</text>
</svg>

<svg class="report-chart" viewBox="0 0 780 150" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="14" fill="#52525b" font-size="12">Monthly average ALP weighting factor</text>
  <line x1="50" y1="110" x2="730" y2="110" stroke="#d1d5db" stroke-width="1"/>
  <text x="45" y="113" fill="#6b7280" font-size="9" text-anchor="end">1.0x</text>
  <text x="45" y="24" fill="#6b7280" font-size="9" text-anchor="end">1.7x</text>
  <polyline points="88,77 164,78 239,93 315,79 390,56 466,65 542,81 617,63 693,44" fill="none" stroke="#b45309" stroke-width="2"/>
  <circle cx="88" cy="77" r="4" fill="#b45309"/>
  <text x="88" y="68" fill="#b45309" font-size="10" text-anchor="middle">1.27x</text>
  <text x="88" y="125" fill="#6b7280" font-size="10" text-anchor="middle">Dec</text>
  <circle cx="164" cy="78" r="4" fill="#b45309"/>
  <text x="164" y="69" fill="#b45309" font-size="10" text-anchor="middle">1.26x</text>
  <text x="164" y="125" fill="#6b7280" font-size="10" text-anchor="middle">Jan</text>
  <circle cx="239" cy="93" r="4" fill="#b45309"/>
  <text x="239" y="84" fill="#b45309" font-size="10" text-anchor="middle">1.14x</text>
  <text x="239" y="125" fill="#6b7280" font-size="10" text-anchor="middle">Feb</text>
  <circle cx="315" cy="79" r="4" fill="#b45309"/>
  <text x="315" y="70" fill="#b45309" font-size="10" text-anchor="middle">1.25x</text>
  <text x="315" y="125" fill="#6b7280" font-size="10" text-anchor="middle">Mar</text>
  <circle cx="390" cy="56" r="4" fill="#b45309"/>
  <text x="390" y="47" fill="#b45309" font-size="10" text-anchor="middle">1.44x</text>
  <text x="390" y="125" fill="#6b7280" font-size="10" text-anchor="middle">Apr</text>
  <circle cx="466" cy="65" r="4" fill="#b45309"/>
  <text x="466" y="56" fill="#b45309" font-size="10" text-anchor="middle">1.37x</text>
  <text x="466" y="125" fill="#6b7280" font-size="10" text-anchor="middle">May</text>
  <circle cx="542" cy="81" r="4" fill="#b45309"/>
  <text x="542" y="72" fill="#b45309" font-size="10" text-anchor="middle">1.24x</text>
  <text x="542" y="125" fill="#6b7280" font-size="10" text-anchor="middle">Jun</text>
  <circle cx="617" cy="63" r="4" fill="#b45309"/>
  <text x="617" y="54" fill="#b45309" font-size="10" text-anchor="middle">1.38x*</text>
  <text x="617" y="125" fill="#6b7280" font-size="10" text-anchor="middle">Jul</text>
  <circle cx="693" cy="44" r="4" fill="#b45309"/>
  <text x="693" y="35" fill="#b45309" font-size="10" text-anchor="middle">1.52x*</text>
  <text x="693" y="125" fill="#52525b" font-size="10" text-anchor="middle">Aug (MTD)</text>
</svg>

\* July and August use the 21:30-05:00 exclusion methodology; December-June use the prior all-24h method and aren't directly comparable. August's reading (1.52x, now based on nearly the full month) has held steady around 1.5x for three straight weeks.

## Weighting (ALP penalty factor) this week

This week's 119 relevant hours (excluding 21:30-05:00) split as:

| Penalty factor | Hours | Share |
|---|---|---|
| 1.00x | 44 | 37.0% |
| 1.25x | 9 | 7.6% |
| 1.75x | 6 | 5.0% |
| 2.00x | 60 | 50.4% |

Still high — 50.4% at the harshest tier, second only to 10 Aug's 55.5% record. Of the 60 hours, 58 are genuinely declared and short-notice; the other 2 are the same small undeclared-hours anomaly seen in prior weeks. The five-week correlation between short notice and the 2.00x tier continues to hold cleanly on the declared hours.

### Short-notice declaration rate — trend

<svg class="report-chart" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="16" fill="#52525b" font-size="12">Share of hours at the 2.00x penalty tier, excl. 21:30-05:00 (%)</text>
  <line x1="50" y1="190" x2="730" y2="190" stroke="#d1d5db" stroke-width="1"/>
  <rect x="60" y="116" width="45" height="74" rx="4" fill="#3b82f6"/>
  <text x="82" y="110" fill="#52525b" font-size="11" text-anchor="middle">26.9%</text>
  <text x="82" y="205" fill="#6b7280" font-size="10" text-anchor="middle">06 Jul</text>
  <rect x="135" y="125" width="45" height="65" rx="4" fill="#3b82f6"/>
  <text x="157" y="119" fill="#52525b" font-size="11" text-anchor="middle">23.5%</text>
  <text x="157" y="205" fill="#6b7280" font-size="10" text-anchor="middle">13 Jul</text>
  <rect x="210" y="92" width="45" height="98" rx="4" fill="#3b82f6"/>
  <text x="232" y="86" fill="#52525b" font-size="11" text-anchor="middle">35.3%</text>
  <text x="232" y="205" fill="#6b7280" font-size="10" text-anchor="middle">20 Jul</text>
  <rect x="285" y="55" width="45" height="135" rx="4" fill="#3b82f6"/>
  <text x="307" y="49" fill="#52525b" font-size="11" text-anchor="middle">48.7%</text>
  <text x="307" y="205" fill="#6b7280" font-size="10" text-anchor="middle">27 Jul</text>
  <rect x="360" y="144" width="45" height="46" rx="4" fill="#3b82f6"/>
  <text x="382" y="138" fill="#52525b" font-size="11" text-anchor="middle">16.8%</text>
  <text x="382" y="205" fill="#6b7280" font-size="10" text-anchor="middle">03 Aug</text>
  <rect x="435" y="60" width="45" height="130" rx="4" fill="#dc2626"/>
  <text x="457" y="54" fill="#111827" font-size="11" text-anchor="middle">55.5% &#9888;</text>
  <text x="457" y="205" fill="#6b7280" font-size="10" text-anchor="middle">10 Aug</text>
  <rect x="510" y="120" width="45" height="70" rx="4" fill="#3b82f6"/>
  <text x="532" y="114" fill="#52525b" font-size="11" text-anchor="middle">25.2%</text>
  <text x="532" y="205" fill="#6b7280" font-size="10" text-anchor="middle">17 Aug</text>
  <rect x="585" y="65" width="45" height="125" rx="4" fill="#3b82f6"/>
  <text x="607" y="59" fill="#52525b" font-size="11" text-anchor="middle">50.4%</text>
  <text x="607" y="205" fill="#6b7280" font-size="10" text-anchor="middle">24 Aug (this wk)</text>
</svg>

## Wind Overview

### Per-turbine MTD production, technical & contractual availability

<svg class="report-chart" viewBox="0 0 860 340" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="16" fill="#52525b" font-size="12">MTD production (MWh, bars) with technical &amp; contractual availability (%, lines) — 1-30 Aug</text>
  <line x1="55" y1="190" x2="775" y2="190" stroke="#d1d5db" stroke-width="1"/>
  <text x="50" y="193" fill="#6b7280" font-size="9" text-anchor="end">0</text>
  <text x="50" y="108" fill="#6b7280" font-size="9" text-anchor="end">600</text>
  <text x="50" y="24" fill="#6b7280" font-size="9" text-anchor="end">1200 MWh</text>
  <text x="783" y="193" fill="#6b7280" font-size="9" text-anchor="start">80%</text>
  <text x="783" y="110" fill="#6b7280" font-size="9" text-anchor="start">90%</text>
  <text x="783" y="27" fill="#6b7280" font-size="9" text-anchor="start">100%</text>
  <line x1="55" y1="64" x2="775" y2="64" stroke="#d1d5db" stroke-width="1" stroke-dasharray="2,3"/>
  <rect x="58" y="46" width="38" height="144" fill="#3b82f6"><title>WTG01: 1,038.4 MWh MTD</title></rect>
  <rect x="110" y="53" width="38" height="137" fill="#3b82f6"><title>WTG16: 987.6 MWh MTD</title></rect>
  <rect x="162" y="50" width="38" height="140" fill="#3b82f6"><title>WTG20: 1,010.5 MWh MTD</title></rect>
  <rect x="214" y="63" width="38" height="127" fill="#3b82f6"><title>WTG21: 915.1 MWh MTD</title></rect>
  <rect x="266" y="59" width="38" height="131" fill="#3b82f6"><title>WTG25: 945.8 MWh MTD</title></rect>
  <rect x="318" y="26" width="38" height="164" fill="#3b82f6"><title>WTG30: 1,183.5 MWh MTD</title></rect>
  <rect x="370" y="54" width="38" height="136" fill="#3b82f6"><title>WTG52: 985.8 MWh MTD</title></rect>
  <rect x="422" y="51" width="38" height="139" fill="#3b82f6"><title>WTG54: 1,006.1 MWh MTD</title></rect>
  <rect x="474" y="33" width="38" height="157" fill="#3b82f6"><title>WTG60: 1,132.2 MWh MTD</title></rect>
  <rect x="526" y="60" width="38" height="130" fill="#3b82f6"><title>WTG61: 941.9 MWh MTD</title></rect>
  <rect x="578" y="60" width="38" height="130" fill="#3b82f6"><title>WTG63: 943.0 MWh MTD</title></rect>
  <rect x="630" y="45" width="38" height="145" fill="#3b82f6"><title>WTG64: 1,047.1 MWh MTD</title></rect>
  <rect x="682" y="50" width="38" height="140" fill="#3b82f6"><title>WTG65: 1,010.7 MWh MTD</title></rect>
  <rect x="734" y="57" width="38" height="133" fill="#3b82f6"><title>WTG67: 958.2 MWh MTD</title></rect>
  <polyline points="77,50 129,60 181,45 233,73 285,54 337,47 389,46 441,62 493,46 545,98 597,46 649,52 701,58 753,52" fill="none" stroke="#059669" stroke-width="2"/>
  <circle cx="77" cy="50" r="3" fill="#059669"><title>WTG01 Technical Availability: 96.8%</title></circle>
  <circle cx="129" cy="60" r="3" fill="#059669"><title>WTG16 Technical Availability: 95.6%</title></circle>
  <circle cx="181" cy="45" r="3" fill="#059669"><title>WTG20 Technical Availability: 97.5%</title></circle>
  <circle cx="233" cy="73" r="3" fill="#059669"><title>WTG21 Technical Availability: 94.1%</title></circle>
  <circle cx="285" cy="54" r="3" fill="#059669"><title>WTG25 Technical Availability: 96.3%</title></circle>
  <circle cx="337" cy="47" r="3" fill="#059669"><title>WTG30 Technical Availability: 97.3%</title></circle>
  <circle cx="389" cy="46" r="3" fill="#059669"><title>WTG52 Technical Availability: 97.3%</title></circle>
  <circle cx="441" cy="62" r="3" fill="#059669"><title>WTG54 Technical Availability: 95.4%</title></circle>
  <circle cx="493" cy="46" r="3" fill="#059669"><title>WTG60 Technical Availability: 97.4%</title></circle>
  <circle cx="545" cy="98" r="3" fill="#059669"><title>WTG61 Technical Availability: 91.1%</title></circle>
  <circle cx="597" cy="46" r="3" fill="#059669"><title>WTG63 Technical Availability: 97.3%</title></circle>
  <circle cx="649" cy="52" r="3" fill="#059669"><title>WTG64 Technical Availability: 96.6%</title></circle>
  <circle cx="701" cy="58" r="3" fill="#059669"><title>WTG65 Technical Availability: 95.9%</title></circle>
  <circle cx="753" cy="52" r="3" fill="#059669"><title>WTG67 Technical Availability: 96.6%</title></circle>
  <polyline points="77,31 129,28 181,25 233,53 285,44 337,25 389,25 441,43 493,25 545,71 597,27 649,31 701,36 753,32" fill="none" stroke="#7c3aed" stroke-width="2"/>
  <circle cx="77" cy="31" r="3" fill="#7c3aed"><title>WTG01 Contractual Availability: 99.2%</title></circle>
  <circle cx="129" cy="28" r="3" fill="#7c3aed"><title>WTG16 Contractual Availability: 99.5%</title></circle>
  <circle cx="181" cy="25" r="3" fill="#7c3aed"><title>WTG20 Contractual Availability: 99.8%</title></circle>
  <circle cx="233" cy="53" r="3" fill="#7c3aed"><title>WTG21 Contractual Availability: 96.5%</title></circle>
  <circle cx="285" cy="44" r="3" fill="#7c3aed"><title>WTG25 Contractual Availability: 97.5%</title></circle>
  <circle cx="337" cy="25" r="3" fill="#7c3aed"><title>WTG30 Contractual Availability: 99.8%</title></circle>
  <circle cx="389" cy="25" r="3" fill="#7c3aed"><title>WTG52 Contractual Availability: 99.8%</title></circle>
  <circle cx="441" cy="43" r="3" fill="#7c3aed"><title>WTG54 Contractual Availability: 97.7%</title></circle>
  <circle cx="493" cy="25" r="3" fill="#7c3aed"><title>WTG60 Contractual Availability: 99.8%</title></circle>
  <circle cx="545" cy="71" r="3" fill="#7c3aed"><title>WTG61 Contractual Availability: 94.4%</title></circle>
  <circle cx="597" cy="27" r="3" fill="#7c3aed"><title>WTG63 Contractual Availability: 99.7%</title></circle>
  <circle cx="649" cy="31" r="3" fill="#7c3aed"><title>WTG64 Contractual Availability: 99.2%</title></circle>
  <circle cx="701" cy="36" r="3" fill="#7c3aed"><title>WTG65 Contractual Availability: 98.6%</title></circle>
  <circle cx="753" cy="32" r="3" fill="#7c3aed"><title>WTG67 Contractual Availability: 99.0%</title></circle>
  <text x="77" y="205" fill="#374151" font-size="9" font-weight="600" text-anchor="middle">WTG01</text>
  <text x="129" y="205" fill="#374151" font-size="9" font-weight="600" text-anchor="middle">WTG16</text>
  <text x="181" y="205" fill="#374151" font-size="9" font-weight="600" text-anchor="middle">WTG20</text>
  <text x="233" y="205" fill="#374151" font-size="9" font-weight="600" text-anchor="middle">WTG21</text>
  <text x="285" y="205" fill="#374151" font-size="9" font-weight="600" text-anchor="middle">WTG25</text>
  <text x="337" y="205" fill="#374151" font-size="9" font-weight="600" text-anchor="middle">WTG30</text>
  <text x="389" y="205" fill="#374151" font-size="9" font-weight="600" text-anchor="middle">WTG52</text>
  <text x="441" y="205" fill="#374151" font-size="9" font-weight="600" text-anchor="middle">WTG54</text>
  <text x="493" y="205" fill="#374151" font-size="9" font-weight="600" text-anchor="middle">WTG60</text>
  <text x="545" y="205" fill="#374151" font-size="9" font-weight="600" text-anchor="middle">WTG61</text>
  <text x="597" y="205" fill="#374151" font-size="9" font-weight="600" text-anchor="middle">WTG63</text>
  <text x="649" y="205" fill="#374151" font-size="9" font-weight="600" text-anchor="middle">WTG64</text>
  <text x="701" y="205" fill="#374151" font-size="9" font-weight="600" text-anchor="middle">WTG65</text>
  <text x="753" y="205" fill="#374151" font-size="9" font-weight="600" text-anchor="middle">WTG67</text>
  <rect x="60" y="222" width="12" height="10" fill="#3b82f6"/>
  <text x="76" y="231" fill="#52525b" font-size="10">MTD production (MWh)</text>
  <line x1="230" y1="227" x2="252" y2="227" stroke="#111827" stroke-width="1.5" stroke-dasharray="2,3"/>
  <text x="258" y="231" fill="#52525b" font-size="10">Fleet avg production (1,007.5 MWh)</text>
  <line x1="470" y1="227" x2="492" y2="227" stroke="#059669" stroke-width="2"/>
  <text x="498" y="231" fill="#52525b" font-size="10">Technical availability (right axis)</text>
  <line x1="670" y1="227" x2="692" y2="227" stroke="#7c3aed" stroke-width="2"/>
  <text x="698" y="231" fill="#52525b" font-size="10">Contractual availability (right axis)</text>
</svg>

**WTG61** remains the fleet's weakest turbine for the second week running — 91.1% technical / 94.4% contractual availability, the only unit below 95% on either measure, and one of the lower producers (941.9 MWh). Every other turbine sits at 94.1% or better on technical and 96.5% or better on contractual availability. WTG30 leads production (1,183.5 MWh).

### MTD & YTD vs P50/P90 and wind speed

| Period | Production (turbines) | P50 target | P90 target | Technical availability | Contractual availability | Measured wind speed | Forecasted wind speed |
|---|---|---|---|---|---|---|---|
| MTD (1-30 Aug) | 14,105.7 MWh | 18,134.8 MWh (-22.2%) | 15,788.7 MWh (-10.7%) | 96.1% | 98.6% | 6.32 m/s | 7.49 m/s |
| YTD (Jan-30 Aug) | 103,276.2 MWh | 137,829.8 MWh (-25.1%) | 120,005.7 MWh (-13.9%) | 89.8% | 93.6% | 6.39 m/s | 7.18 m/s |

Production is the sum of the 14 turbines' technical output. Targets are pro-rated to elapsed days in the period (30 of 31 days for MTD).

<svg class="report-chart" viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="16" fill="#52525b" font-size="12">Production as % of P50 / P90 target</text>
  <line x1="50" y1="190" x2="370" y2="190" stroke="#d1d5db" stroke-width="1"/>
  <text x="45" y="193" fill="#6b7280" font-size="9" text-anchor="end">0%</text>
  <text x="45" y="52" fill="#6b7280" font-size="9" text-anchor="end">100%</text>
  <line x1="50" y1="52" x2="370" y2="52" stroke="#111827" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="375" y="55" fill="#111827" font-size="9" text-anchor="start">on target</text>
  <rect x="70" y="82" width="40" height="108" fill="#3b82f6"><title>MTD vs P50: 77.8%</title></rect>
  <text x="90" y="76" fill="#52525b" font-size="10" text-anchor="middle">77.8%</text>
  <rect x="120" y="66" width="40" height="124" fill="#7c3aed"><title>MTD vs P90: 89.3%</title></rect>
  <text x="140" y="60" fill="#52525b" font-size="10" text-anchor="middle">89.3%</text>
  <text x="115" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">MTD</text>
  <rect x="230" y="86" width="40" height="104" fill="#3b82f6"><title>YTD vs P50: 74.9%</title></rect>
  <text x="250" y="80" fill="#52525b" font-size="10" text-anchor="middle">74.9%</text>
  <rect x="280" y="71" width="40" height="119" fill="#7c3aed"><title>YTD vs P90: 86.1%</title></rect>
  <text x="300" y="65" fill="#52525b" font-size="10" text-anchor="middle">86.1%</text>
  <text x="275" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">YTD</text>
  <rect x="70" y="222" width="12" height="10" fill="#3b82f6"/>
  <text x="86" y="231" fill="#52525b" font-size="10">vs P50</text>
  <rect x="150" y="222" width="12" height="10" fill="#7c3aed"/>
  <text x="166" y="231" fill="#52525b" font-size="10">vs P90</text>
</svg>

<svg class="report-chart" viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="16" fill="#52525b" font-size="12">Wind speed — measured vs. forecasted (m/s)</text>
  <line x1="50" y1="190" x2="370" y2="190" stroke="#d1d5db" stroke-width="1"/>
  <text x="45" y="193" fill="#6b7280" font-size="9" text-anchor="end">0</text>
  <text x="45" y="24" fill="#6b7280" font-size="9" text-anchor="end">8 m/s</text>
  <rect x="70" y="59" width="40" height="131" fill="#3b82f6"><title>MTD Measured: 6.32 m/s</title></rect>
  <text x="90" y="53" fill="#52525b" font-size="10" text-anchor="middle">6.32</text>
  <rect x="120" y="35" width="40" height="155" fill="#b45309"><title>MTD Forecasted: 7.49 m/s</title></rect>
  <text x="140" y="29" fill="#52525b" font-size="10" text-anchor="middle">7.49</text>
  <text x="115" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">MTD</text>
  <rect x="230" y="57" width="40" height="133" fill="#3b82f6"><title>YTD Measured: 6.39 m/s</title></rect>
  <text x="250" y="51" fill="#52525b" font-size="10" text-anchor="middle">6.39</text>
  <rect x="280" y="41" width="40" height="149" fill="#b45309"><title>YTD Forecasted: 7.18 m/s</title></rect>
  <text x="300" y="35" fill="#52525b" font-size="10" text-anchor="middle">7.18</text>
  <text x="275" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">YTD</text>
  <rect x="70" y="222" width="12" height="10" fill="#3b82f6"/>
  <text x="86" y="231" fill="#52525b" font-size="10">Measured</text>
  <rect x="150" y="222" width="12" height="10" fill="#b45309"/>
  <text x="166" y="231" fill="#52525b" font-size="10">Forecasted</text>
</svg>

MTD wind speed shortfall eased slightly to -15.6% (from -16.7% two weeks ago), and production tracked to 77.8% of P50 — a modest improvement on the 76.7% seen with less data. The story is essentially unchanged from last report: wind resource has been the dominant constraint on production all month, not plant performance.

## Reviewer Notes

_Pending review._
