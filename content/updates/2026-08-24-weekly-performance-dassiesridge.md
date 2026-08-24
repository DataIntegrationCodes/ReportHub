---
title: 'Weekly performance: Dassiesridge (17 Aug - 23 Aug)'
date: '2026-08-24'
layout: tabs
notesStatus: draft
---
Dassiesridge Hybrid (Wind + BESS) exported 2.02 GWh this week, down 52.0% on last week — the five-week recovery streak breaks here. Two things stand out: a 48-hour stretch (Sat 22 - Sun 23 Aug) where every PCS unit and the BESS both went suspiciously flat, and a wind resource shortfall this month that the new Wind Overview data below can now explain directly.

<div class="summary-grid">
  <div class="summary-item"><span class="summary-label">Week 30 Exported</span><span class="summary-value">2.02 GWh</span></div>
  <div class="summary-item"><span class="summary-label">MTD Exported</span><span class="summary-value">10.2 GWh</span></div>
  <div class="summary-item"><span class="summary-label">YTD Exported</span><span class="summary-value">94.0 GWh</span></div>
  <div class="summary-item"><span class="summary-label">Weighting factor</span><span class="summary-value">58% @1.0x&nbsp;/&nbsp;25% @2.0x</span></div>
</div>

<div class="callout callout-issue">
<strong>Alert:</strong> for a full 48 hours (Sat 22 - Sun 23 Aug), every one of the 14 PCS units read exactly 0.0% availability, and the BESS logged 24 hours of charging with zero discharge hours on both days. Every reading in that window is a literal, present zero, not missing data — but 14 independent units and the BESS all going flat at once looks far more like a monitoring/telemetry gap than a genuine simultaneous fleet failure. Needs operational confirmation before it's read either way. Separately, the production recovery streak broke this week (-52.0%), and the new Wind Overview tab below shows why: measured wind speed has been running well below forecast all month.
</div>

<div class="callout callout-win">
<strong>One genuine bright spot:</strong> the share of hours at the harshest 2.00x penalty tier fell to 25.2%, down sharply from last week's record 55.5% — a much healthier weighting mix even in an otherwise weak week. Declaration coverage also held up better than the 6-9 Aug episode, with gaps this week limited to partial hours on Wed/Thu/Fri/Sun rather than a multi-day blackout.
</div>

## Exported Production — last ~2 months

<svg class="report-chart" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="16" fill="#52525b" font-size="12">Weekly exported production (GWh)</text>
  <line x1="50" y1="190" x2="730" y2="190" stroke="#d1d5db" stroke-width="1"/>
  <rect x="60" y="50" width="45" height="140" rx="4" fill="#3b82f6"/>
  <text x="82" y="44" fill="#52525b" font-size="11" text-anchor="middle">4.12</text>
  <text x="82" y="205" fill="#6b7280" font-size="10" text-anchor="middle">22 Jun</text>
  <rect x="135" y="29" width="45" height="161" rx="4" fill="#3b82f6"/>
  <text x="157" y="23" fill="#52525b" font-size="11" text-anchor="middle">4.74</text>
  <text x="157" y="205" fill="#6b7280" font-size="10" text-anchor="middle">29 Jun</text>
  <rect x="210" y="148" width="45" height="42" rx="4" fill="#3b82f6"/>
  <text x="232" y="142" fill="#52525b" font-size="11" text-anchor="middle">1.24</text>
  <text x="232" y="205" fill="#6b7280" font-size="10" text-anchor="middle">06 Jul</text>
  <rect x="285" y="172" width="45" height="18" rx="4" fill="#3b82f6"/>
  <text x="307" y="166" fill="#52525b" font-size="11" text-anchor="middle">0.53</text>
  <text x="307" y="205" fill="#6b7280" font-size="10" text-anchor="middle">13 Jul</text>
  <rect x="360" y="118" width="45" height="72" rx="4" fill="#3b82f6"/>
  <text x="382" y="112" fill="#52525b" font-size="11" text-anchor="middle">2.12</text>
  <text x="382" y="205" fill="#6b7280" font-size="10" text-anchor="middle">20 Jul</text>
  <rect x="435" y="99" width="45" height="91" rx="4" fill="#3b82f6"/>
  <text x="457" y="93" fill="#52525b" font-size="11" text-anchor="middle">2.67</text>
  <text x="457" y="205" fill="#6b7280" font-size="10" text-anchor="middle">27 Jul</text>
  <rect x="510" y="74" width="45" height="116" rx="4" fill="#3b82f6"/>
  <text x="532" y="68" fill="#52525b" font-size="11" text-anchor="middle">3.42</text>
  <text x="532" y="205" fill="#6b7280" font-size="10" text-anchor="middle">03 Aug</text>
  <rect x="585" y="47" width="45" height="143" rx="4" fill="#3b82f6"/>
  <text x="607" y="41" fill="#52525b" font-size="11" text-anchor="middle">4.21</text>
  <text x="607" y="205" fill="#6b7280" font-size="10" text-anchor="middle">10 Aug</text>
  <rect x="660" y="122" width="45" height="68" rx="4" fill="#dc2626"/>
  <text x="682" y="116" fill="#111827" font-size="11" text-anchor="middle">2.02 &#9888;</text>
  <text x="682" y="205" fill="#52525b" font-size="10" text-anchor="middle">17 Aug (this wk)</text>
</svg>

The five-week climb from the 13 Jul low ends here — production fell back to roughly 20 Jul levels. Unlike the earlier dips this year, this one has a clean explanation: see Wind Overview below.

## This week vs. last week

| Metric | This week (17-23 Aug) | Last week (10-16 Aug) | Change |
|---|---|---|---|
| Exported production | <span class="neg">2.02 GWh</span> | 4.21 GWh | <span class="neg">-2.19 GWh (-52.0%)</span> |
| Net MWh (penalty-adjusted) | <span class="neg">-2,591.9</span> | <span class="neg">-335.9</span> | <span class="neg">-2,256.0 (worse)</span> |
| Net gain / net loss (MWh) | +649.9 / -3,241.8 | +2,618.3 / -2,954.2 | Gain shrank sharply; loss grew |
| Positive net periods | 20.6% | 45.1% | -24.5pp |
| Declared utilisation | 88.5% | 91.6% | -3.1pp |
| Export vs. declared ratio | 85.7% | 87.3% | -1.6pp |
| Wind availability (declared) | 100% | 100% | flat |
| BESS availability (declared) | 100% | 100% | flat |
| BESS contribution to exports | 19.9% | 17.3% | +2.6pp |
| BESS charge / discharge (MWh) | 382.3 / 401.8 | 787.0 / 729.2 | Much less cycling |
| Avg. hours to recover from a loss period | 12.16h | 8.25h | +3.91h (worse) |

Less wind meant less excess to cycle through the battery — both charge and discharge volumes roughly halved. Declaration coverage was 93 of 119 relevant hours (78.2%), down from 88.2% last week; the gaps this week are scattered across Wed (1h), Thu (5h), Fri (7h) and a larger Sun gap (13h), rather than one clean multi-day block.

## BESS Daily View

<svg class="report-chart" viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="16" fill="#52525b" font-size="12">Daily hours charging vs. discharging, vs. weekly average discharge (6.3h)</text>
  <line x1="55" y1="190" x2="705" y2="190" stroke="#d1d5db" stroke-width="1"/>
  <text x="50" y="193" fill="#6b7280" font-size="9" text-anchor="end">0h</text>
  <text x="50" y="108" fill="#6b7280" font-size="9" text-anchor="end">12h</text>
  <text x="50" y="24" fill="#6b7280" font-size="9" text-anchor="end">24h</text>
  <rect x="81" y="84" width="40" height="106" fill="#3b82f6"/>
  <rect x="81" y="20" width="40" height="64" fill="#b45309"/>
  <rect x="174" y="91" width="40" height="99" fill="#3b82f6"/>
  <rect x="174" y="20" width="40" height="71" fill="#b45309"/>
  <rect x="267" y="84" width="40" height="106" fill="#3b82f6"/>
  <rect x="267" y="20" width="40" height="64" fill="#b45309"/>
  <rect x="360" y="91" width="40" height="99" fill="#3b82f6"/>
  <rect x="360" y="20" width="40" height="71" fill="#b45309"/>
  <rect x="453" y="63" width="40" height="127" fill="#3b82f6"/>
  <rect x="453" y="20" width="40" height="43" fill="#b45309"/>
  <rect x="546" y="20" width="40" height="170" fill="#3b82f6"/>
  <rect x="639" y="20" width="40" height="170" fill="#3b82f6"/>
  <line x1="55" y1="145" x2="705" y2="145" stroke="#111827" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="710" y="148" fill="#111827" font-size="9" text-anchor="start">avg 6.3h</text>
  <text x="101" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Mon</text>
  <text x="194" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Tue</text>
  <text x="287" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Wed</text>
  <text x="380" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Thu</text>
  <text x="473" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Fri</text>
  <text x="566" y="205" fill="#dc2626" font-size="10" font-weight="600" text-anchor="middle">Sat &#9888;</text>
  <text x="659" y="205" fill="#dc2626" font-size="10" font-weight="600" text-anchor="middle">Sun &#9888;</text>
  <rect x="90" y="222" width="12" height="10" fill="#3b82f6"/>
  <text x="106" y="231" fill="#52525b" font-size="10">Charging hours</text>
  <rect x="260" y="222" width="12" height="10" fill="#b45309"/>
  <text x="276" y="231" fill="#52525b" font-size="10">Discharging hours</text>
  <line x1="430" y1="227" x2="452" y2="227" stroke="#111827" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="458" y="231" fill="#52525b" font-size="10">Weekly avg discharge</text>
</svg>

<svg class="report-chart" viewBox="0 0 760 250" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="16" fill="#52525b" font-size="12">Daily BESS contribution to exports this week (%) — Sat/Sun read zero alongside the PCS blackout</text>
  <line x1="50" y1="190" x2="730" y2="190" stroke="#d1d5db" stroke-width="1"/>
  <text x="45" y="193" fill="#6b7280" font-size="9" text-anchor="end">0%</text>
  <text x="45" y="108" fill="#6b7280" font-size="9" text-anchor="end">40%</text>
  <text x="45" y="24" fill="#6b7280" font-size="9" text-anchor="end">80%</text>
  <polyline points="99,102 196,115 293,162 390,89 487,100 584,190 681,190" fill="none" stroke="#3b82f6" stroke-width="2"/>
  <circle cx="99" cy="102" r="3" fill="#3b82f6"/><circle cx="196" cy="115" r="3" fill="#3b82f6"/><circle cx="293" cy="162" r="3" fill="#3b82f6"/><circle cx="390" cy="89" r="3" fill="#3b82f6"/><circle cx="487" cy="100" r="3" fill="#3b82f6"/><circle cx="584" cy="190" r="3" fill="#dc2626"/><circle cx="681" cy="190" r="3" fill="#dc2626"/>
  <text x="99" y="94" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">42.2%</text>
  <text x="196" y="107" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">36.0%</text>
  <text x="293" y="154" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">13.6%</text>
  <text x="390" y="81" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">48.5%</text>
  <text x="487" y="92" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">43.1%</text>
  <text x="584" y="182" fill="#dc2626" font-size="10" font-weight="600" text-anchor="middle">0.0%</text>
  <text x="681" y="182" fill="#dc2626" font-size="10" font-weight="600" text-anchor="middle">0.0%</text>
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
  <rect x="81" y="149" width="40" height="41" fill="#3b82f6"><title>Mon: Wind 246.2 MWh</title></rect>
  <rect x="81" y="140" width="40" height="9" fill="#059669"><title>Mon: BESS +54.5 MWh (net positive)</title></rect>
  <line x1="77" y1="140" x2="125" y2="140" stroke="#111827" stroke-width="2"><title>Mon: Declared 301.4 MWh</title></line>
  <rect x="174" y="152" width="40" height="38" fill="#3b82f6"><title>Tue: Exported 231.0 MWh (Wind, BESS net-charged)</title></rect>
  <line x1="170" y1="151" x2="218" y2="151" stroke="#111827" stroke-width="2"><title>Tue: Declared 237.8 MWh</title></line>
  <rect x="267" y="113" width="40" height="77" fill="#3b82f6"><title>Wed: Exported 465.5 MWh (Wind, BESS net-charged)</title></rect>
  <line x1="263" y1="107" x2="311" y2="107" stroke="#111827" stroke-width="2"><title>Wed: Declared 499.6 MWh</title></line>
  <rect x="360" y="161" width="40" height="29" fill="#3b82f6"><title>Thu: Wind 174.1 MWh</title></rect>
  <rect x="360" y="160" width="40" height="1" fill="#059669"><title>Thu: BESS +6.3 MWh (net positive)</title></rect>
  <line x1="356" y1="159" x2="404" y2="159" stroke="#111827" stroke-width="2"><title>Thu: Declared 186.7 MWh</title></line>
  <rect x="453" y="174" width="40" height="16" fill="#3b82f6"><title>Fri: Wind 94.1 MWh</title></rect>
  <rect x="453" y="173" width="40" height="1" fill="#059669"><title>Fri: BESS +7.9 MWh (net positive)</title></rect>
  <line x1="449" y1="170" x2="497" y2="170" stroke="#111827" stroke-width="2"><title>Fri: Declared 118.1 MWh</title></line>
  <rect x="546" y="81" width="40" height="109" fill="#3b82f6"><title>Sat: Exported 656.9 MWh (Wind, BESS net-charged)</title></rect>
  <line x1="542" y1="53" x2="590" y2="53" stroke="#111827" stroke-width="2"><title>Sat: Declared 825.9 MWh</title></line>
  <rect x="639" y="175" width="40" height="15" fill="#3b82f6"><title>Sun: Exported 92.1 MWh (Wind, BESS net-charged)</title></rect>
  <line x1="635" y1="171" x2="683" y2="171" stroke="#111827" stroke-width="2"><title>Sun: Declared 115.8 MWh</title></line>
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

Saturday was the week's biggest declared day (825.9 MWh) but delivered only 656.9 MWh (79.5%) against it — the largest single shortfall of the week, and it happened during the same 48-hour window the PCS/BESS telemetry went flat. Monday, Thursday and Friday were the three (barely) net-positive BESS days; Saturday and Sunday both show BESS net-charging at essentially zero (-1.0 MWh each), consistent with a battery that simply wasn't cycling during the blackout window.

### PCS availability heatmap

<svg class="report-chart" viewBox="0 0 740 340" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="16" fill="#52525b" font-size="12">Per-unit PCS availability by day — every unit reads exactly 0% on Sat and Sun</text>
  <text x="103" y="32" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Mon</text>
  <text x="193" y="32" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Tue</text>
  <text x="283" y="32" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Wed</text>
  <text x="373" y="32" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Thu</text>
  <text x="463" y="32" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Fri</text>
  <text x="553" y="32" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Sat</text>
  <text x="643" y="32" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Sun</text>
  <text x="55" y="53" fill="#374151" font-size="10" text-anchor="end">PCS01</text>
  <rect x="60" y="40" width="86" height="16" rx="2" fill="#059669"><title>PCS01 Mon: 100.0% available</title></rect>
  <rect x="150" y="40" width="86" height="16" rx="2" fill="#059669"><title>PCS01 Tue: 100.0% available</title></rect>
  <rect x="240" y="40" width="86" height="16" rx="2" fill="#059669"><title>PCS01 Wed: 100.0% available</title></rect>
  <rect x="330" y="40" width="86" height="16" rx="2" fill="#d97706"><title>PCS01 Thu: 78.0% available</title></rect>
  <rect x="420" y="40" width="86" height="16" rx="2" fill="#059669"><title>PCS01 Fri: 93.0% available</title></rect>
  <rect x="510" y="40" width="86" height="16" rx="2" fill="#dc2626"><title>PCS01 Sat: 0.0% available</title></rect>
  <rect x="600" y="40" width="86" height="16" rx="2" fill="#dc2626"><title>PCS01 Sun: 0.0% available</title></rect>
  <text x="55" y="71" fill="#374151" font-size="10" text-anchor="end">PCS02</text>
  <rect x="60" y="58" width="86" height="16" rx="2" fill="#d97706"><title>PCS02 Mon: 89.7% available</title></rect>
  <rect x="150" y="58" width="86" height="16" rx="2" fill="#059669"><title>PCS02 Tue: 100.0% available</title></rect>
  <rect x="240" y="58" width="86" height="16" rx="2" fill="#059669"><title>PCS02 Wed: 100.0% available</title></rect>
  <rect x="330" y="58" width="86" height="16" rx="2" fill="#d97706"><title>PCS02 Thu: 78.1% available</title></rect>
  <rect x="420" y="58" width="86" height="16" rx="2" fill="#059669"><title>PCS02 Fri: 93.0% available</title></rect>
  <rect x="510" y="58" width="86" height="16" rx="2" fill="#dc2626"><title>PCS02 Sat: 0.0% available</title></rect>
  <rect x="600" y="58" width="86" height="16" rx="2" fill="#dc2626"><title>PCS02 Sun: 0.0% available</title></rect>
  <text x="55" y="89" fill="#374151" font-size="10" text-anchor="end">PCS03</text>
  <rect x="60" y="76" width="86" height="16" rx="2" fill="#059669"><title>PCS03 Mon: 100.0% available</title></rect>
  <rect x="150" y="76" width="86" height="16" rx="2" fill="#059669"><title>PCS03 Tue: 100.0% available</title></rect>
  <rect x="240" y="76" width="86" height="16" rx="2" fill="#059669"><title>PCS03 Wed: 100.0% available</title></rect>
  <rect x="330" y="76" width="86" height="16" rx="2" fill="#d97706"><title>PCS03 Thu: 78.1% available</title></rect>
  <rect x="420" y="76" width="86" height="16" rx="2" fill="#059669"><title>PCS03 Fri: 93.0% available</title></rect>
  <rect x="510" y="76" width="86" height="16" rx="2" fill="#dc2626"><title>PCS03 Sat: 0.0% available</title></rect>
  <rect x="600" y="76" width="86" height="16" rx="2" fill="#dc2626"><title>PCS03 Sun: 0.0% available</title></rect>
  <text x="55" y="107" fill="#374151" font-size="10" text-anchor="end">PCS04</text>
  <rect x="60" y="94" width="86" height="16" rx="2" fill="#059669"><title>PCS04 Mon: 100.0% available</title></rect>
  <rect x="150" y="94" width="86" height="16" rx="2" fill="#059669"><title>PCS04 Tue: 100.0% available</title></rect>
  <rect x="240" y="94" width="86" height="16" rx="2" fill="#059669"><title>PCS04 Wed: 100.0% available</title></rect>
  <rect x="330" y="94" width="86" height="16" rx="2" fill="#d97706"><title>PCS04 Thu: 78.1% available</title></rect>
  <rect x="420" y="94" width="86" height="16" rx="2" fill="#059669"><title>PCS04 Fri: 93.0% available</title></rect>
  <rect x="510" y="94" width="86" height="16" rx="2" fill="#dc2626"><title>PCS04 Sat: 0.0% available</title></rect>
  <rect x="600" y="94" width="86" height="16" rx="2" fill="#dc2626"><title>PCS04 Sun: 0.0% available</title></rect>
  <text x="55" y="125" fill="#374151" font-size="10" text-anchor="end">PCS05</text>
  <rect x="60" y="112" width="86" height="16" rx="2" fill="#059669"><title>PCS05 Mon: 100.0% available</title></rect>
  <rect x="150" y="112" width="86" height="16" rx="2" fill="#059669"><title>PCS05 Tue: 100.0% available</title></rect>
  <rect x="240" y="112" width="86" height="16" rx="2" fill="#059669"><title>PCS05 Wed: 100.0% available</title></rect>
  <rect x="330" y="112" width="86" height="16" rx="2" fill="#d97706"><title>PCS05 Thu: 78.1% available</title></rect>
  <rect x="420" y="112" width="86" height="16" rx="2" fill="#059669"><title>PCS05 Fri: 93.0% available</title></rect>
  <rect x="510" y="112" width="86" height="16" rx="2" fill="#dc2626"><title>PCS05 Sat: 0.0% available</title></rect>
  <rect x="600" y="112" width="86" height="16" rx="2" fill="#dc2626"><title>PCS05 Sun: 0.0% available</title></rect>
  <text x="55" y="143" fill="#374151" font-size="10" text-anchor="end">PCS06</text>
  <rect x="60" y="130" width="86" height="16" rx="2" fill="#059669"><title>PCS06 Mon: 100.0% available</title></rect>
  <rect x="150" y="130" width="86" height="16" rx="2" fill="#059669"><title>PCS06 Tue: 100.0% available</title></rect>
  <rect x="240" y="130" width="86" height="16" rx="2" fill="#059669"><title>PCS06 Wed: 100.0% available</title></rect>
  <rect x="330" y="130" width="86" height="16" rx="2" fill="#d97706"><title>PCS06 Thu: 78.1% available</title></rect>
  <rect x="420" y="130" width="86" height="16" rx="2" fill="#059669"><title>PCS06 Fri: 93.0% available</title></rect>
  <rect x="510" y="130" width="86" height="16" rx="2" fill="#dc2626"><title>PCS06 Sat: 0.0% available</title></rect>
  <rect x="600" y="130" width="86" height="16" rx="2" fill="#dc2626"><title>PCS06 Sun: 0.0% available</title></rect>
  <text x="55" y="161" fill="#374151" font-size="10" text-anchor="end">PCS07</text>
  <rect x="60" y="148" width="86" height="16" rx="2" fill="#059669"><title>PCS07 Mon: 100.0% available</title></rect>
  <rect x="150" y="148" width="86" height="16" rx="2" fill="#059669"><title>PCS07 Tue: 100.0% available</title></rect>
  <rect x="240" y="148" width="86" height="16" rx="2" fill="#059669"><title>PCS07 Wed: 100.0% available</title></rect>
  <rect x="330" y="148" width="86" height="16" rx="2" fill="#d97706"><title>PCS07 Thu: 78.1% available</title></rect>
  <rect x="420" y="148" width="86" height="16" rx="2" fill="#059669"><title>PCS07 Fri: 93.0% available</title></rect>
  <rect x="510" y="148" width="86" height="16" rx="2" fill="#dc2626"><title>PCS07 Sat: 0.0% available</title></rect>
  <rect x="600" y="148" width="86" height="16" rx="2" fill="#dc2626"><title>PCS07 Sun: 0.0% available</title></rect>
  <text x="55" y="179" fill="#374151" font-size="10" text-anchor="end">PCS08</text>
  <rect x="60" y="166" width="86" height="16" rx="2" fill="#059669"><title>PCS08 Mon: 100.0% available</title></rect>
  <rect x="150" y="166" width="86" height="16" rx="2" fill="#059669"><title>PCS08 Tue: 100.0% available</title></rect>
  <rect x="240" y="166" width="86" height="16" rx="2" fill="#059669"><title>PCS08 Wed: 100.0% available</title></rect>
  <rect x="330" y="166" width="86" height="16" rx="2" fill="#d97706"><title>PCS08 Thu: 78.1% available</title></rect>
  <rect x="420" y="166" width="86" height="16" rx="2" fill="#059669"><title>PCS08 Fri: 93.0% available</title></rect>
  <rect x="510" y="166" width="86" height="16" rx="2" fill="#dc2626"><title>PCS08 Sat: 0.0% available</title></rect>
  <rect x="600" y="166" width="86" height="16" rx="2" fill="#dc2626"><title>PCS08 Sun: 0.0% available</title></rect>
  <text x="55" y="197" fill="#374151" font-size="10" text-anchor="end">PCS09</text>
  <rect x="60" y="184" width="86" height="16" rx="2" fill="#059669"><title>PCS09 Mon: 97.9% available</title></rect>
  <rect x="150" y="184" width="86" height="16" rx="2" fill="#059669"><title>PCS09 Tue: 98.1% available</title></rect>
  <rect x="240" y="184" width="86" height="16" rx="2" fill="#059669"><title>PCS09 Wed: 98.6% available</title></rect>
  <rect x="330" y="184" width="86" height="16" rx="2" fill="#d97706"><title>PCS09 Thu: 75.3% available</title></rect>
  <rect x="420" y="184" width="86" height="16" rx="2" fill="#059669"><title>PCS09 Fri: 92.2% available</title></rect>
  <rect x="510" y="184" width="86" height="16" rx="2" fill="#dc2626"><title>PCS09 Sat: 0.0% available</title></rect>
  <rect x="600" y="184" width="86" height="16" rx="2" fill="#dc2626"><title>PCS09 Sun: 0.0% available</title></rect>
  <text x="55" y="215" fill="#374151" font-size="10" text-anchor="end">PCS10</text>
  <rect x="60" y="202" width="86" height="16" rx="2" fill="#059669"><title>PCS10 Mon: 100.0% available</title></rect>
  <rect x="150" y="202" width="86" height="16" rx="2" fill="#059669"><title>PCS10 Tue: 100.0% available</title></rect>
  <rect x="240" y="202" width="86" height="16" rx="2" fill="#059669"><title>PCS10 Wed: 100.0% available</title></rect>
  <rect x="330" y="202" width="86" height="16" rx="2" fill="#d97706"><title>PCS10 Thu: 78.1% available</title></rect>
  <rect x="420" y="202" width="86" height="16" rx="2" fill="#059669"><title>PCS10 Fri: 93.0% available</title></rect>
  <rect x="510" y="202" width="86" height="16" rx="2" fill="#dc2626"><title>PCS10 Sat: 0.0% available</title></rect>
  <rect x="600" y="202" width="86" height="16" rx="2" fill="#dc2626"><title>PCS10 Sun: 0.0% available</title></rect>
  <text x="55" y="233" fill="#374151" font-size="10" text-anchor="end">PCS11</text>
  <rect x="60" y="220" width="86" height="16" rx="2" fill="#d97706"><title>PCS11 Mon: 84.9% available</title></rect>
  <rect x="150" y="220" width="86" height="16" rx="2" fill="#d97706"><title>PCS11 Tue: 84.9% available</title></rect>
  <rect x="240" y="220" width="86" height="16" rx="2" fill="#d97706"><title>PCS11 Wed: 85.0% available</title></rect>
  <rect x="330" y="220" width="86" height="16" rx="2" fill="#d97706"><title>PCS11 Thu: 61.8% available</title></rect>
  <rect x="420" y="220" width="86" height="16" rx="2" fill="#d97706"><title>PCS11 Fri: 76.7% available</title></rect>
  <rect x="510" y="220" width="86" height="16" rx="2" fill="#dc2626"><title>PCS11 Sat: 0.0% available</title></rect>
  <rect x="600" y="220" width="86" height="16" rx="2" fill="#dc2626"><title>PCS11 Sun: 0.0% available</title></rect>
  <text x="55" y="251" fill="#374151" font-size="10" text-anchor="end">PCS12</text>
  <rect x="60" y="238" width="86" height="16" rx="2" fill="#059669"><title>PCS12 Mon: 100.0% available</title></rect>
  <rect x="150" y="238" width="86" height="16" rx="2" fill="#059669"><title>PCS12 Tue: 100.0% available</title></rect>
  <rect x="240" y="238" width="86" height="16" rx="2" fill="#059669"><title>PCS12 Wed: 100.0% available</title></rect>
  <rect x="330" y="238" width="86" height="16" rx="2" fill="#d97706"><title>PCS12 Thu: 78.1% available</title></rect>
  <rect x="420" y="238" width="86" height="16" rx="2" fill="#059669"><title>PCS12 Fri: 93.0% available</title></rect>
  <rect x="510" y="238" width="86" height="16" rx="2" fill="#dc2626"><title>PCS12 Sat: 0.0% available</title></rect>
  <rect x="600" y="238" width="86" height="16" rx="2" fill="#dc2626"><title>PCS12 Sun: 0.0% available</title></rect>
  <text x="55" y="269" fill="#374151" font-size="10" text-anchor="end">PCS13</text>
  <rect x="60" y="256" width="86" height="16" rx="2" fill="#059669"><title>PCS13 Mon: 100.0% available</title></rect>
  <rect x="150" y="256" width="86" height="16" rx="2" fill="#059669"><title>PCS13 Tue: 100.0% available</title></rect>
  <rect x="240" y="256" width="86" height="16" rx="2" fill="#059669"><title>PCS13 Wed: 100.0% available</title></rect>
  <rect x="330" y="256" width="86" height="16" rx="2" fill="#d97706"><title>PCS13 Thu: 78.1% available</title></rect>
  <rect x="420" y="256" width="86" height="16" rx="2" fill="#059669"><title>PCS13 Fri: 93.0% available</title></rect>
  <rect x="510" y="256" width="86" height="16" rx="2" fill="#dc2626"><title>PCS13 Sat: 0.0% available</title></rect>
  <rect x="600" y="256" width="86" height="16" rx="2" fill="#dc2626"><title>PCS13 Sun: 0.0% available</title></rect>
  <text x="55" y="287" fill="#374151" font-size="10" text-anchor="end">PCS14</text>
  <rect x="60" y="274" width="86" height="16" rx="2" fill="#059669"><title>PCS14 Mon: 100.0% available</title></rect>
  <rect x="150" y="274" width="86" height="16" rx="2" fill="#059669"><title>PCS14 Tue: 100.0% available</title></rect>
  <rect x="240" y="274" width="86" height="16" rx="2" fill="#059669"><title>PCS14 Wed: 100.0% available</title></rect>
  <rect x="330" y="274" width="86" height="16" rx="2" fill="#d97706"><title>PCS14 Thu: 78.1% available</title></rect>
  <rect x="420" y="274" width="86" height="16" rx="2" fill="#059669"><title>PCS14 Fri: 93.0% available</title></rect>
  <rect x="510" y="274" width="86" height="16" rx="2" fill="#dc2626"><title>PCS14 Sat: 0.0% available</title></rect>
  <rect x="600" y="274" width="86" height="16" rx="2" fill="#dc2626"><title>PCS14 Sun: 0.0% available</title></rect>
  <rect x="60" y="308" width="14" height="12" rx="2" fill="#059669"/>
  <text x="78" y="317" fill="#52525b" font-size="10">&#8805;90% available</text>
  <rect x="220" y="308" width="14" height="12" rx="2" fill="#d97706"/>
  <text x="238" y="317" fill="#52525b" font-size="10">60-89%</text>
  <rect x="360" y="308" width="14" height="12" rx="2" fill="#dc2626"/>
  <text x="378" y="317" fill="#52525b" font-size="10">&lt;60%</text>
</svg>

The Sat/Sun red band across all 14 rows is the standout: a perfectly uniform, simultaneous, complete drop to zero across the entire fleet doesn't look like 14 independent mechanical faults — it reads like a monitoring outage. Separately, Thursday brought a fleet-wide dip to ~78% (a new day for the recurring pattern that's shown up as Tuesday in each of the past two weeks), and PCS11 remains the weakest unit on every normal day this week, though the gap to the fleet narrowed since Thursday's dip pulled everyone else down closer to its usual level.

## Wind Overview

This tab is new this week, sourced from the P&O_Custom_Semantic_Model (technical/contractual availability and P50/P90 targets) rather than UMO_Production.

### Per-turbine MTD production, technical & contractual availability

<svg class="report-chart" viewBox="0 0 860 340" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="16" fill="#52525b" font-size="12">MTD production (MWh, bars) with technical &amp; contractual availability (%, lines) — 1-23 Aug</text>
  <line x1="55" y1="190" x2="775" y2="190" stroke="#d1d5db" stroke-width="1"/>
  <text x="50" y="193" fill="#6b7280" font-size="9" text-anchor="end">0</text>
  <text x="50" y="108" fill="#6b7280" font-size="9" text-anchor="end">500</text>
  <text x="50" y="24" fill="#6b7280" font-size="9" text-anchor="end">1000 MWh</text>
  <text x="783" y="193" fill="#6b7280" font-size="9" text-anchor="start">80%</text>
  <text x="783" y="110" fill="#6b7280" font-size="9" text-anchor="start">90%</text>
  <text x="783" y="27" fill="#6b7280" font-size="9" text-anchor="start">100%</text>
  <line x1="55" y1="64" x2="775" y2="64" stroke="#d1d5db" stroke-width="1" stroke-dasharray="2,3"/>
  <rect x="58" y="61" width="38" height="129" fill="#3b82f6"><title>WTG01: 779.2 MWh MTD</title></rect>
  <rect x="110" y="66" width="38" height="124" fill="#3b82f6"><title>WTG16: 746.3 MWh MTD</title></rect>
  <rect x="162" y="65" width="38" height="125" fill="#3b82f6"><title>WTG20: 755.1 MWh MTD</title></rect>
  <rect x="214" y="71" width="38" height="119" fill="#3b82f6"><title>WTG21: 718.0 MWh MTD</title></rect>
  <rect x="266" y="72" width="38" height="118" fill="#3b82f6"><title>WTG25: 708.9 MWh MTD</title></rect>
  <rect x="318" y="42" width="38" height="148" fill="#3b82f6"><title>WTG30: 890.7 MWh MTD</title></rect>
  <rect x="370" y="67" width="38" height="123" fill="#3b82f6"><title>WTG52: 738.5 MWh MTD</title></rect>
  <rect x="422" y="64" width="38" height="126" fill="#3b82f6"><title>WTG54: 761.1 MWh MTD</title></rect>
  <rect x="474" y="48" width="38" height="142" fill="#3b82f6"><title>WTG60: 856.7 MWh MTD</title></rect>
  <rect x="526" y="73" width="38" height="117" fill="#3b82f6"><title>WTG61: 704.7 MWh MTD</title></rect>
  <rect x="578" y="72" width="38" height="118" fill="#3b82f6"><title>WTG63: 710.1 MWh MTD</title></rect>
  <rect x="630" y="59" width="38" height="131" fill="#3b82f6"><title>WTG64: 786.2 MWh MTD</title></rect>
  <rect x="682" y="60" width="38" height="130" fill="#3b82f6"><title>WTG65: 782.8 MWh MTD</title></rect>
  <rect x="734" y="69" width="38" height="121" fill="#3b82f6"><title>WTG67: 728.8 MWh MTD</title></rect>
  <polyline points="77,57 129,66 181,50 233,57 285,63 337,54 389,52 441,69 493,50 545,102 597,53 649,60 701,57 753,61" fill="none" stroke="#059669" stroke-width="2"/>
  <circle cx="77" cy="57" r="3" fill="#059669"><title>WTG01 Technical Availability: 96.0%</title></circle>
  <circle cx="129" cy="66" r="3" fill="#059669"><title>WTG16 Technical Availability: 95.0%</title></circle>
  <circle cx="181" cy="50" r="3" fill="#059669"><title>WTG20 Technical Availability: 96.8%</title></circle>
  <circle cx="233" cy="57" r="3" fill="#059669"><title>WTG21 Technical Availability: 96.0%</title></circle>
  <circle cx="285" cy="63" r="3" fill="#059669"><title>WTG25 Technical Availability: 95.3%</title></circle>
  <circle cx="337" cy="54" r="3" fill="#059669"><title>WTG30 Technical Availability: 96.4%</title></circle>
  <circle cx="389" cy="52" r="3" fill="#059669"><title>WTG52 Technical Availability: 96.6%</title></circle>
  <circle cx="441" cy="69" r="3" fill="#059669"><title>WTG54 Technical Availability: 94.6%</title></circle>
  <circle cx="493" cy="50" r="3" fill="#059669"><title>WTG60 Technical Availability: 96.8%</title></circle>
  <circle cx="545" cy="102" r="3" fill="#059669"><title>WTG61 Technical Availability: 90.6%</title></circle>
  <circle cx="597" cy="53" r="3" fill="#059669"><title>WTG63 Technical Availability: 96.6%</title></circle>
  <circle cx="649" cy="60" r="3" fill="#059669"><title>WTG64 Technical Availability: 95.7%</title></circle>
  <circle cx="701" cy="57" r="3" fill="#059669"><title>WTG65 Technical Availability: 96.0%</title></circle>
  <circle cx="753" cy="61" r="3" fill="#059669"><title>WTG67 Technical Availability: 95.6%</title></circle>
  <polyline points="77,33 129,26 181,26 233,31 285,51 337,26 389,26 441,43 493,26 545,65 597,28 649,33 701,26 753,35" fill="none" stroke="#7c3aed" stroke-width="2"/>
  <circle cx="77" cy="33" r="3" fill="#7c3aed"><title>WTG01 Contractual Availability: 98.9%</title></circle>
  <circle cx="129" cy="26" r="3" fill="#7c3aed"><title>WTG16 Contractual Availability: 99.7%</title></circle>
  <circle cx="181" cy="26" r="3" fill="#7c3aed"><title>WTG20 Contractual Availability: 99.8%</title></circle>
  <circle cx="233" cy="31" r="3" fill="#7c3aed"><title>WTG21 Contractual Availability: 99.2%</title></circle>
  <circle cx="285" cy="51" r="3" fill="#7c3aed"><title>WTG25 Contractual Availability: 96.8%</title></circle>
  <circle cx="337" cy="26" r="3" fill="#7c3aed"><title>WTG30 Contractual Availability: 99.8%</title></circle>
  <circle cx="389" cy="26" r="3" fill="#7c3aed"><title>WTG52 Contractual Availability: 99.8%</title></circle>
  <circle cx="441" cy="43" r="3" fill="#7c3aed"><title>WTG54 Contractual Availability: 97.7%</title></circle>
  <circle cx="493" cy="26" r="3" fill="#7c3aed"><title>WTG60 Contractual Availability: 99.8%</title></circle>
  <circle cx="545" cy="65" r="3" fill="#7c3aed"><title>WTG61 Contractual Availability: 95.1%</title></circle>
  <circle cx="597" cy="28" r="3" fill="#7c3aed"><title>WTG63 Contractual Availability: 99.6%</title></circle>
  <circle cx="649" cy="33" r="3" fill="#7c3aed"><title>WTG64 Contractual Availability: 98.9%</title></circle>
  <circle cx="701" cy="26" r="3" fill="#7c3aed"><title>WTG65 Contractual Availability: 99.7%</title></circle>
  <circle cx="753" cy="35" r="3" fill="#7c3aed"><title>WTG67 Contractual Availability: 98.7%</title></circle>
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
  <text x="258" y="231" fill="#52525b" font-size="10">Fleet avg production (761.9 MWh)</text>
  <line x1="470" y1="227" x2="492" y2="227" stroke="#059669" stroke-width="2"/>
  <text x="498" y="231" fill="#52525b" font-size="10">Technical availability (right axis)</text>
  <line x1="670" y1="227" x2="692" y2="227" stroke="#7c3aed" stroke-width="2"/>
  <text x="698" y="231" fill="#52525b" font-size="10">Contractual availability (right axis)</text>
</svg>

Production is fairly even across the fleet (WTG30 leads at 890.7 MWh, WTG61 trails at 704.7 MWh), but **WTG61** is the one unit to watch — it's the only turbine below 95% on both availability measures (90.6% technical, 95.1% contractual), and it's also the weakest producer. Every other turbine sits at 94.6% or better on technical availability and 96.8% or better on contractual. Note the right axis is truncated to 80-100% to make the spread between turbines legible — all units are in a fairly tight, healthy band except WTG61.

### MTD & YTD vs P50/P90 and wind speed

| Period | Production (turbines) | P50 target | P90 target | Measured wind speed | Forecasted wind speed |
|---|---|---|---|---|---|
| MTD (1-23 Aug) | 10,667.1 MWh | 13,901.4 MWh (-23.3%) | 12,103.6 MWh (-11.9%) | 6.24 m/s | 7.49 m/s |
| YTD (Jan-23 Aug) | 99,789.7 MWh | 133,596.4 MWh (-25.3%) | 116,320.6 MWh (-14.2%) | 6.39 m/s | 7.18 m/s |

Production is the sum of the 14 turbines' technical output (the same basis as the per-turbine chart above). The variance shown in each target cell is production vs. that target. Targets are pro-rated to elapsed days in the period — the model's raw target tables store whole-month buckets, not a running daily accrual.

<svg class="report-chart" viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="16" fill="#52525b" font-size="12">Production as % of P50 / P90 target</text>
  <line x1="50" y1="190" x2="370" y2="190" stroke="#d1d5db" stroke-width="1"/>
  <text x="45" y="193" fill="#6b7280" font-size="9" text-anchor="end">0%</text>
  <text x="45" y="52" fill="#6b7280" font-size="9" text-anchor="end">100%</text>
  <line x1="50" y1="52" x2="370" y2="52" stroke="#111827" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="375" y="55" fill="#111827" font-size="9" text-anchor="start">on target</text>
  <rect x="70" y="84" width="40" height="106" fill="#3b82f6"><title>MTD vs P50: 76.7%</title></rect>
  <text x="90" y="78" fill="#52525b" font-size="10" text-anchor="middle">76.7%</text>
  <rect x="120" y="68" width="40" height="122" fill="#7c3aed"><title>MTD vs P90: 88.1%</title></rect>
  <text x="140" y="62" fill="#52525b" font-size="10" text-anchor="middle">88.1%</text>
  <text x="115" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">MTD</text>
  <rect x="230" y="87" width="40" height="103" fill="#3b82f6"><title>YTD vs P50: 74.7%</title></rect>
  <text x="250" y="81" fill="#52525b" font-size="10" text-anchor="middle">74.7%</text>
  <rect x="280" y="71" width="40" height="119" fill="#7c3aed"><title>YTD vs P90: 85.8%</title></rect>
  <text x="300" y="65" fill="#52525b" font-size="10" text-anchor="middle">85.8%</text>
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
  <rect x="70" y="60" width="40" height="130" fill="#3b82f6"><title>MTD Measured: 6.24 m/s</title></rect>
  <text x="90" y="54" fill="#52525b" font-size="10" text-anchor="middle">6.24</text>
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

This is the clearest resource-vs-plan story in the model: wind speed has undershot forecast both MTD (-16.7%) and YTD (-11.0%), and turbine production has fallen further behind plan than the wind shortfall alone would suggest (76.7% of P50 MTD vs a wind shortfall of "only" 16.7%) — consistent with the wind-power cubic relationship, where a moderate wind speed miss produces a larger energy shortfall. YTD sits at a similar 74.7% of P50, so the gap isn't unique to August — it's been a feature of the year so far.

## Month- and year-to-date

| Period | Exported production | Declared utilisation | Wind contribution | BESS contribution |
|---|---|---|---|---|
| MTD (1-23 Aug) | 10.2 GWh | 88.5% | 102.9% | 21.4% |
| YTD (Jan-23 Aug) | 94.0 GWh | 86.6% | 104.3% | 19.7% |

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
  <rect x="665" y="53" width="55" height="57" rx="4" fill="#1d4ed8"/>
  <text x="692" y="47" fill="#111827" font-size="10" text-anchor="middle">10.2</text>
  <text x="692" y="125" fill="#52525b" font-size="10" text-anchor="middle">Aug (MTD)</text>
</svg>

<svg class="report-chart" viewBox="0 0 780 150" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="14" fill="#52525b" font-size="12">Monthly average ALP weighting factor</text>
  <line x1="50" y1="110" x2="730" y2="110" stroke="#d1d5db" stroke-width="1"/>
  <text x="45" y="113" fill="#6b7280" font-size="9" text-anchor="end">1.0x</text>
  <text x="45" y="24" fill="#6b7280" font-size="9" text-anchor="end">1.7x</text>
  <polyline points="88,77 164,78 239,93 315,79 390,56 466,65 542,81 617,63 693,47" fill="none" stroke="#b45309" stroke-width="2"/>
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
  <circle cx="693" cy="47" r="4" fill="#b45309"/>
  <text x="693" y="38" fill="#b45309" font-size="10" text-anchor="middle">1.51x*</text>
  <text x="693" y="125" fill="#52525b" font-size="10" text-anchor="middle">Aug (MTD)</text>
</svg>

\* July and August use the 21:30-05:00 exclusion methodology; December-June use the prior all-24h method and aren't directly comparable. August's reading eased slightly from last week's 1.60x MTD as this week's lower 2.00x-tier share pulled the month average back down a little.

## Weighting (ALP penalty factor) this week

This week's 119 relevant hours (excluding 21:30-05:00) split as:

| Penalty factor | Hours | Share |
|---|---|---|
| 1.00x | 69 | 58.0% |
| 1.25x | 13 | 10.9% |
| 1.75x | 7 | 5.9% |
| 2.00x | 30 | 25.2% |

A big improvement on last week's record 55.5% at the 2.00x tier — this week's 25.2% is back in the range seen across most of July. With production this low, the plant simply had less to lose from short-notice repricing even when it happened.

### Short-notice declaration rate — trend

<svg class="report-chart" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="16" fill="#52525b" font-size="12">Share of hours at the 2.00x penalty tier, excl. 21:30-05:00 (%)</text>
  <line x1="50" y1="190" x2="730" y2="190" stroke="#d1d5db" stroke-width="1"/>
  <rect x="60" y="120" width="45" height="70" rx="4" fill="#3b82f6"/>
  <text x="82" y="114" fill="#52525b" font-size="11" text-anchor="middle">25.2%</text>
  <text x="82" y="205" fill="#6b7280" font-size="10" text-anchor="middle">22 Jun</text>
  <rect x="135" y="118" width="45" height="72" rx="4" fill="#3b82f6"/>
  <text x="157" y="112" fill="#52525b" font-size="11" text-anchor="middle">26.1%</text>
  <text x="157" y="205" fill="#6b7280" font-size="10" text-anchor="middle">29 Jun</text>
  <rect x="210" y="116" width="45" height="74" rx="4" fill="#3b82f6"/>
  <text x="232" y="110" fill="#52525b" font-size="11" text-anchor="middle">26.9%</text>
  <text x="232" y="205" fill="#6b7280" font-size="10" text-anchor="middle">06 Jul</text>
  <rect x="285" y="125" width="45" height="65" rx="4" fill="#3b82f6"/>
  <text x="307" y="119" fill="#52525b" font-size="11" text-anchor="middle">23.5%</text>
  <text x="307" y="205" fill="#6b7280" font-size="10" text-anchor="middle">13 Jul</text>
  <rect x="360" y="92" width="45" height="98" rx="4" fill="#3b82f6"/>
  <text x="382" y="86" fill="#52525b" font-size="11" text-anchor="middle">35.3%</text>
  <text x="382" y="205" fill="#6b7280" font-size="10" text-anchor="middle">20 Jul</text>
  <rect x="435" y="55" width="45" height="135" rx="4" fill="#3b82f6"/>
  <text x="457" y="49" fill="#52525b" font-size="11" text-anchor="middle">48.7%</text>
  <text x="457" y="205" fill="#6b7280" font-size="10" text-anchor="middle">27 Jul</text>
  <rect x="510" y="144" width="45" height="46" rx="4" fill="#3b82f6"/>
  <text x="532" y="138" fill="#52525b" font-size="11" text-anchor="middle">16.8%</text>
  <text x="532" y="205" fill="#6b7280" font-size="10" text-anchor="middle">03 Aug</text>
  <rect x="585" y="60" width="45" height="130" rx="4" fill="#dc2626"/>
  <text x="607" y="54" fill="#111827" font-size="11" text-anchor="middle">55.5% &#9888;</text>
  <text x="607" y="205" fill="#6b7280" font-size="10" text-anchor="middle">10 Aug</text>
  <rect x="660" y="120" width="45" height="70" rx="4" fill="#3b82f6"/>
  <text x="682" y="114" fill="#52525b" font-size="11" text-anchor="middle">25.2%</text>
  <text x="682" y="205" fill="#6b7280" font-size="10" text-anchor="middle">17 Aug (this wk)</text>
</svg>

## Reviewer Notes

_Pending review — please confirm whether the 22-23 Aug PCS/BESS zero readings reflect a real event or a monitoring outage._
