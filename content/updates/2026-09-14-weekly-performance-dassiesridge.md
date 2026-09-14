---
title: 'Weekly performance: Dassiesridge (7 Sep - 13 Sep)'
date: '2026-09-14'
layout: tabs
notesStatus: draft
---

Dassiesridge Hybrid (Wind + BESS) exported 3.45 GWh this week, down 18.2% on last week's peak but still a solid week by recent standards. Net MWh swung back negative (-1,045.6 MWh) after last week's best-ever positive figure. The good follow-up news: PCS14, last week's Alert, fully recovered by midweek.

<div class="summary-grid">
  <div class="summary-item"><span class="summary-label">Week 33 Exported</span><span class="summary-value">3.45 GWh</span></div>
  <div class="summary-item"><span class="summary-label">MTD Exported</span><span class="summary-value">7.6 GWh</span></div>
  <div class="summary-item"><span class="summary-label">YTD Exported</span><span class="summary-value">104.9 GWh</span></div>
  <div class="summary-item"><span class="summary-label">Weighting factor</span><span class="summary-value">55% @1.0x&nbsp;/&nbsp;31% @2.0x*</span></div>
</div>

<div class="callout callout-issue">
<strong>Alert:</strong> a new fleet-wide dip appeared on Sunday — nearly every PCS unit dropped to ~70.7% simultaneously, echoing the same uniform-magnitude pattern seen in prior weeks, just on a different day again (Tue, then Thu, then Mon, now Sun). Separately, Wind Overview shows a new weakest turbine: **WTG30** (85.3% technical / 86.7% contractual availability) — while WTG61, flagged for the prior two reports, has fully recovered to 99.99%+ on both measures.
</div>

<div class="callout callout-win">
<strong>PCS14 recovered</strong>: after last week's progressive failure (50% down to a full 0%), it returned to 100% by Wednesday and has tracked with the fleet since. Also notable: this month is the first time Wind Overview shows production running *ahead* of plan — 113.0% of P50 and 129.7% of P90 MTD, driven by measured wind speed (7.22 m/s) actually exceeding forecast (6.90 m/s) for the first time this series. Declaration coverage was the best yet at 89.9% of relevant hours.
</div>

## Exported Production — last ~2 months

<svg class="report-chart" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="16" fill="#52525b" font-size="12">Weekly exported production (GWh)</text>
  <line x1="50" y1="190" x2="730" y2="190" stroke="#d1d5db" stroke-width="1"/>
  <rect x="60" y="172" width="45" height="18" rx="4" fill="#3b82f6"/>
  <text x="82" y="166" fill="#52525b" font-size="11" text-anchor="middle">0.53</text>
  <text x="82" y="205" fill="#6b7280" font-size="10" text-anchor="middle">13 Jul</text>
  <rect x="135" y="118" width="45" height="72" rx="4" fill="#3b82f6"/>
  <text x="157" y="112" fill="#52525b" font-size="11" text-anchor="middle">2.12</text>
  <text x="157" y="205" fill="#6b7280" font-size="10" text-anchor="middle">20 Jul</text>
  <rect x="210" y="99" width="45" height="91" rx="4" fill="#3b82f6"/>
  <text x="232" y="93" fill="#52525b" font-size="11" text-anchor="middle">2.67</text>
  <text x="232" y="205" fill="#6b7280" font-size="10" text-anchor="middle">27 Jul</text>
  <rect x="285" y="74" width="45" height="116" rx="4" fill="#3b82f6"/>
  <text x="307" y="68" fill="#52525b" font-size="11" text-anchor="middle">3.42</text>
  <text x="307" y="205" fill="#6b7280" font-size="10" text-anchor="middle">03 Aug</text>
  <rect x="360" y="47" width="45" height="143" rx="4" fill="#3b82f6"/>
  <text x="382" y="41" fill="#52525b" font-size="11" text-anchor="middle">4.21</text>
  <text x="382" y="205" fill="#6b7280" font-size="10" text-anchor="middle">10 Aug</text>
  <rect x="435" y="121" width="45" height="69" rx="4" fill="#3b82f6"/>
  <text x="457" y="115" fill="#52525b" font-size="11" text-anchor="middle">2.02</text>
  <text x="457" y="205" fill="#6b7280" font-size="10" text-anchor="middle">17 Aug</text>
  <rect x="510" y="79" width="45" height="111" rx="4" fill="#3b82f6"/>
  <text x="532" y="73" fill="#52525b" font-size="11" text-anchor="middle">3.26</text>
  <text x="532" y="205" fill="#6b7280" font-size="10" text-anchor="middle">24 Aug</text>
  <rect x="585" y="47" width="45" height="143" rx="4" fill="#3b82f6"/>
  <text x="607" y="41" fill="#52525b" font-size="11" text-anchor="middle">4.22</text>
  <text x="607" y="205" fill="#6b7280" font-size="10" text-anchor="middle">31 Aug</text>
  <rect x="660" y="73" width="45" height="117" rx="4" fill="#1d4ed8"/>
  <text x="682" y="67" fill="#111827" font-size="11" text-anchor="middle">3.45</text>
  <text x="682" y="205" fill="#52525b" font-size="10" text-anchor="middle">07 Sep (this wk)</text>
</svg>

A step down from the 31 Aug peak, but still the third-best week of the last nine — the recovery trend remains intact even with week-to-week variation.

<svg class="report-chart" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="16" fill="#52525b" font-size="12">Weekly avg BESS discharge hours (per day)</text>
  <line x1="50" y1="190" x2="730" y2="190" stroke="#d1d5db" stroke-width="1"/>
  <text x="45" y="193" fill="#6b7280" font-size="9" text-anchor="end">0h</text>
  <text x="45" y="24" fill="#6b7280" font-size="9" text-anchor="end">12h</text>
  <polyline points="82,85 157,28 232,92 307,53 382,52 457,103 532,75 607,46 682,49" fill="none" stroke="#3b82f6" stroke-width="2"/>
  <circle cx="82" cy="85" r="3" fill="#3b82f6"/><circle cx="157" cy="28" r="3" fill="#3b82f6"/><circle cx="232" cy="92" r="3" fill="#3b82f6"/><circle cx="307" cy="53" r="3" fill="#3b82f6"/><circle cx="382" cy="52" r="3" fill="#3b82f6"/><circle cx="457" cy="103" r="3" fill="#3b82f6"/><circle cx="532" cy="75" r="3" fill="#3b82f6"/><circle cx="607" cy="46" r="3" fill="#3b82f6"/><circle cx="682" cy="49" r="4" fill="#1d4ed8"/>
  <text x="82" y="77" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">7.6h</text>
  <text x="157" y="20" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">11.7h</text>
  <text x="232" y="84" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">7.1h</text>
  <text x="307" y="45" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">9.9h</text>
  <text x="382" y="44" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">10.0h</text>
  <text x="457" y="95" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">6.3h</text>
  <text x="532" y="67" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">8.3h</text>
  <text x="607" y="38" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">10.4h</text>
  <text x="682" y="41" fill="#111827" font-size="10" font-weight="600" text-anchor="middle">10.7h</text>
  <text x="82" y="205" fill="#6b7280" font-size="10" text-anchor="middle">13 Jul</text>
  <text x="157" y="205" fill="#6b7280" font-size="10" text-anchor="middle">20 Jul</text>
  <text x="232" y="205" fill="#6b7280" font-size="10" text-anchor="middle">27 Jul</text>
  <text x="307" y="205" fill="#6b7280" font-size="10" text-anchor="middle">03 Aug</text>
  <text x="382" y="205" fill="#6b7280" font-size="10" text-anchor="middle">10 Aug</text>
  <text x="457" y="205" fill="#6b7280" font-size="10" text-anchor="middle">17 Aug</text>
  <text x="532" y="205" fill="#6b7280" font-size="10" text-anchor="middle">24 Aug</text>
  <text x="607" y="205" fill="#6b7280" font-size="10" text-anchor="middle">31 Aug</text>
  <text x="682" y="205" fill="#52525b" font-size="10" text-anchor="middle">07 Sep (this wk)</text>
</svg>

<svg class="report-chart" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="16" fill="#52525b" font-size="12">Weekly avg discharge rate (MW per discharging hour)</text>
  <line x1="50" y1="190" x2="730" y2="190" stroke="#d1d5db" stroke-width="1"/>
  <text x="45" y="193" fill="#6b7280" font-size="9" text-anchor="end">0 MW</text>
  <text x="45" y="24" fill="#6b7280" font-size="9" text-anchor="end">16 MW</text>
  <polyline points="82,155 157,119 232,53 307,61 382,82 457,96 532,83 607,110 682,82" fill="none" stroke="#059669" stroke-width="2"/>
  <circle cx="82" cy="155" r="3" fill="#059669"/><circle cx="157" cy="119" r="3" fill="#059669"/><circle cx="232" cy="53" r="3" fill="#059669"/><circle cx="307" cy="61" r="3" fill="#059669"/><circle cx="382" cy="82" r="3" fill="#059669"/><circle cx="457" cy="96" r="3" fill="#059669"/><circle cx="532" cy="83" r="3" fill="#059669"/><circle cx="607" cy="110" r="3" fill="#059669"/><circle cx="682" cy="82" r="3" fill="#059669"/>
  <text x="82" y="147" fill="#047857" font-size="10" font-weight="600" text-anchor="middle">3.4</text>
  <text x="157" y="111" fill="#047857" font-size="10" font-weight="600" text-anchor="middle">6.8</text>
  <text x="232" y="45" fill="#047857" font-size="10" font-weight="600" text-anchor="middle">13.2</text>
  <text x="307" y="53" fill="#047857" font-size="10" font-weight="600" text-anchor="middle">12.4</text>
  <text x="382" y="74" fill="#047857" font-size="10" font-weight="600" text-anchor="middle">10.4</text>
  <text x="457" y="88" fill="#047857" font-size="10" font-weight="600" text-anchor="middle">9.1</text>
  <text x="532" y="75" fill="#047857" font-size="10" font-weight="600" text-anchor="middle">10.3</text>
  <text x="607" y="102" fill="#047857" font-size="10" font-weight="600" text-anchor="middle">7.7</text>
  <text x="682" y="74" fill="#111827" font-size="10" font-weight="600" text-anchor="middle">10.4</text>
  <text x="82" y="205" fill="#6b7280" font-size="10" text-anchor="middle">13 Jul</text>
  <text x="157" y="205" fill="#6b7280" font-size="10" text-anchor="middle">20 Jul</text>
  <text x="232" y="205" fill="#6b7280" font-size="10" text-anchor="middle">27 Jul</text>
  <text x="307" y="205" fill="#6b7280" font-size="10" text-anchor="middle">03 Aug</text>
  <text x="382" y="205" fill="#6b7280" font-size="10" text-anchor="middle">10 Aug</text>
  <text x="457" y="205" fill="#6b7280" font-size="10" text-anchor="middle">17 Aug</text>
  <text x="532" y="205" fill="#6b7280" font-size="10" text-anchor="middle">24 Aug</text>
  <text x="607" y="205" fill="#6b7280" font-size="10" text-anchor="middle">31 Aug</text>
  <text x="682" y="205" fill="#52525b" font-size="10" text-anchor="middle">07 Sep (this wk)</text>
</svg>

Both discharge metrics land close to the middle of the period's range this week (10.7h/day at 10.4 MW/hour) — an unremarkable, healthy profile.

## This week vs. last week

| Metric | This week (7-13 Sep) | Last week (31 Aug-6 Sep) | Change |
|---|---|---|---|
| Exported production | <span class="neg">3.45 GWh</span> | 4.22 GWh | <span class="neg">-0.77 GWh (-18.2%)</span> |
| Net MWh (penalty-adjusted) | <span class="neg">-1,045.6</span> | <span class="pos">+1,497.3</span> | <span class="neg">-2,542.9 (swung negative)</span> |
| Net gain / net loss (MWh) | +2,093.8 / -3,139.4 | +2,869.4 / -1,372.2 | Gain shrank; loss grew sharply |
| Positive net periods | 41.9% | 63.3% | -21.4pp |
| Declared utilisation | 93.0% | 99.4% | -6.4pp |
| Export vs. declared ratio | 92.4% | 97.9% | -5.5pp |
| Wind availability (declared) | 100% | 100% | flat |
| BESS availability (declared) | 100% | 100% | flat |
| BESS contribution to exports | 22.6% | 13.2% | +9.4pp |
| BESS charge / discharge (MWh) | 771.4 / 779.6 | 756.1 / 559.2 | More discharge cycling |
| Avg. hours to recover from a loss period | 10.15h | 11.76h | -1.61h |

Declaration coverage reached 107 of 119 relevant hours (89.9%) — the most complete week yet, with no single day below 13 of 17 hours.

## BESS Daily View

<svg class="report-chart" viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="16" fill="#52525b" font-size="12">Daily hours charging vs. discharging, vs. weekly average discharge (10.7h)</text>
  <line x1="55" y1="190" x2="705" y2="190" stroke="#d1d5db" stroke-width="1"/>
  <text x="50" y="193" fill="#6b7280" font-size="9" text-anchor="end">0h</text>
  <text x="50" y="108" fill="#6b7280" font-size="9" text-anchor="end">12h</text>
  <text x="50" y="24" fill="#6b7280" font-size="9" text-anchor="end">24h</text>
  <rect x="81" y="105" width="40" height="85" fill="#3b82f6"/>
  <rect x="81" y="20" width="40" height="85" fill="#b45309"/>
  <rect x="174" y="119" width="40" height="71" fill="#3b82f6"/>
  <rect x="174" y="20" width="40" height="99" fill="#b45309"/>
  <rect x="267" y="84" width="40" height="106" fill="#3b82f6"/>
  <rect x="267" y="20" width="40" height="64" fill="#b45309"/>
  <rect x="360" y="48" width="40" height="142" fill="#3b82f6"/>
  <rect x="360" y="20" width="40" height="28" fill="#b45309"/>
  <rect x="453" y="105" width="40" height="85" fill="#3b82f6"/>
  <rect x="453" y="20" width="40" height="85" fill="#b45309"/>
  <rect x="546" y="98" width="40" height="92" fill="#3b82f6"/>
  <rect x="546" y="20" width="40" height="78" fill="#b45309"/>
  <rect x="639" y="112" width="40" height="78" fill="#3b82f6"/>
  <rect x="639" y="20" width="40" height="92" fill="#b45309"/>
  <line x1="55" y1="114" x2="705" y2="114" stroke="#111827" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="710" y="117" fill="#111827" font-size="9" text-anchor="start">avg 10.7h</text>
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
  <polyline points="99,122 196,148 293,139 390,166 487,85 584,167 681,150" fill="none" stroke="#3b82f6" stroke-width="2"/>
  <circle cx="99" cy="122" r="3" fill="#3b82f6"/><circle cx="196" cy="148" r="3" fill="#3b82f6"/><circle cx="293" cy="139" r="3" fill="#3b82f6"/><circle cx="390" cy="166" r="3" fill="#3b82f6"/><circle cx="487" cy="85" r="3" fill="#3b82f6"/><circle cx="584" cy="167" r="3" fill="#3b82f6"/><circle cx="681" cy="150" r="3" fill="#3b82f6"/>
  <text x="99" y="114" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">32.6%</text>
  <text x="196" y="140" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">20.4%</text>
  <text x="293" y="131" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">24.7%</text>
  <text x="390" y="158" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">11.5%</text>
  <text x="487" y="77" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">50.4%</text>
  <text x="584" y="159" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">10.9%</text>
  <text x="681" y="142" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">19.1%</text>
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
  <rect x="81" y="141" width="40" height="49" fill="#3b82f6"><title>Mon: Wind 297.1 MWh</title></rect>
  <rect x="81" y="124" width="40" height="17" fill="#059669"><title>Mon: BESS +100.1 MWh (net positive)</title></rect>
  <line x1="77" y1="107" x2="125" y2="107" stroke="#111827" stroke-width="2"><title>Mon: Declared 497.1 MWh</title></line>
  <rect x="174" y="87" width="40" height="103" fill="#3b82f6"><title>Tue: Exported 621.9 MWh (Wind, BESS net-charged)</title></rect>
  <line x1="170" y1="82" x2="218" y2="82" stroke="#111827" stroke-width="2"><title>Tue: Declared 650.4 MWh</title></line>
  <rect x="267" y="92" width="40" height="98" fill="#3b82f6"><title>Wed: Exported 590.9 MWh (Wind, BESS net-charged)</title></rect>
  <line x1="263" y1="90" x2="311" y2="90" stroke="#111827" stroke-width="2"><title>Wed: Declared 603.9 MWh</title></line>
  <rect x="360" y="112" width="40" height="78" fill="#3b82f6"><title>Thu: Exported 466.9 MWh (Wind, BESS net-charged)</title></rect>
  <line x1="356" y1="107" x2="404" y2="107" stroke="#111827" stroke-width="2"><title>Thu: Declared 502.4 MWh</title></line>
  <rect x="453" y="150" width="40" height="40" fill="#3b82f6"><title>Fri: Wind 242.8 MWh</title></rect>
  <rect x="453" y="142" width="40" height="8" fill="#059669"><title>Fri: BESS +49.5 MWh (net positive)</title></rect>
  <line x1="449" y1="134" x2="497" y2="134" stroke="#111827" stroke-width="2"><title>Fri: Declared 340.1 MWh</title></line>
  <rect x="546" y="133" width="40" height="57" fill="#3b82f6"><title>Sat: Exported 341.5 MWh (Wind, BESS net-charged)</title></rect>
  <line x1="542" y1="134" x2="590" y2="134" stroke="#111827" stroke-width="2"><title>Sat: Declared 339.8 MWh</title></line>
  <rect x="639" y="82" width="40" height="108" fill="#3b82f6"><title>Sun: Wind 650.4 MWh</title></rect>
  <rect x="639" y="64" width="40" height="18" fill="#059669"><title>Sun: BESS +110.7 MWh (net positive)</title></rect>
  <line x1="635" y1="61" x2="683" y2="61" stroke="#111827" stroke-width="2"><title>Sun: Declared 779.3 MWh</title></line>
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

Friday's 50.4% BESS contribution was the week's standout, and Saturday (339.8 MWh declared, 341.5 MWh exported — 100.5%) was the most precisely-met declaration of the week. Monday, Friday and Sunday were the three net-positive BESS days.

### PCS availability heatmap

<svg class="report-chart" viewBox="0 0 740 340" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="16" fill="#52525b" font-size="12">Per-unit PCS availability by day — PCS14 recovers, a new fleet-wide Sunday dip appears</text>
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
  <rect x="330" y="40" width="86" height="16" rx="2" fill="#059669"><title>PCS01 Thu: 100.0% available</title></rect>
  <rect x="420" y="40" width="86" height="16" rx="2" fill="#059669"><title>PCS01 Fri: 100.0% available</title></rect>
  <rect x="510" y="40" width="86" height="16" rx="2" fill="#059669"><title>PCS01 Sat: 93.2% available</title></rect>
  <rect x="600" y="40" width="86" height="16" rx="2" fill="#d97706"><title>PCS01 Sun: 70.6% available</title></rect>
  <text x="55" y="71" fill="#374151" font-size="10" text-anchor="end">PCS02</text>
  <rect x="60" y="58" width="86" height="16" rx="2" fill="#d97706"><title>PCS02 Mon: 67.3% available</title></rect>
  <rect x="150" y="58" width="86" height="16" rx="2" fill="#d97706"><title>PCS02 Tue: 71.2% available</title></rect>
  <rect x="240" y="58" width="86" height="16" rx="2" fill="#059669"><title>PCS02 Wed: 100.0% available</title></rect>
  <rect x="330" y="58" width="86" height="16" rx="2" fill="#059669"><title>PCS02 Thu: 100.0% available</title></rect>
  <rect x="420" y="58" width="86" height="16" rx="2" fill="#059669"><title>PCS02 Fri: 100.0% available</title></rect>
  <rect x="510" y="58" width="86" height="16" rx="2" fill="#059669"><title>PCS02 Sat: 93.2% available</title></rect>
  <rect x="600" y="58" width="86" height="16" rx="2" fill="#d97706"><title>PCS02 Sun: 70.7% available</title></rect>
  <text x="55" y="89" fill="#374151" font-size="10" text-anchor="end">PCS03</text>
  <rect x="60" y="76" width="86" height="16" rx="2" fill="#059669"><title>PCS03 Mon: 99.9% available</title></rect>
  <rect x="150" y="76" width="86" height="16" rx="2" fill="#059669"><title>PCS03 Tue: 100.0% available</title></rect>
  <rect x="240" y="76" width="86" height="16" rx="2" fill="#059669"><title>PCS03 Wed: 100.0% available</title></rect>
  <rect x="330" y="76" width="86" height="16" rx="2" fill="#059669"><title>PCS03 Thu: 100.0% available</title></rect>
  <rect x="420" y="76" width="86" height="16" rx="2" fill="#059669"><title>PCS03 Fri: 100.0% available</title></rect>
  <rect x="510" y="76" width="86" height="16" rx="2" fill="#059669"><title>PCS03 Sat: 93.2% available</title></rect>
  <rect x="600" y="76" width="86" height="16" rx="2" fill="#d97706"><title>PCS03 Sun: 70.8% available</title></rect>
  <text x="55" y="107" fill="#374151" font-size="10" text-anchor="end">PCS04</text>
  <rect x="60" y="94" width="86" height="16" rx="2" fill="#059669"><title>PCS04 Mon: 100.0% available</title></rect>
  <rect x="150" y="94" width="86" height="16" rx="2" fill="#059669"><title>PCS04 Tue: 100.0% available</title></rect>
  <rect x="240" y="94" width="86" height="16" rx="2" fill="#059669"><title>PCS04 Wed: 100.0% available</title></rect>
  <rect x="330" y="94" width="86" height="16" rx="2" fill="#059669"><title>PCS04 Thu: 100.0% available</title></rect>
  <rect x="420" y="94" width="86" height="16" rx="2" fill="#059669"><title>PCS04 Fri: 100.0% available</title></rect>
  <rect x="510" y="94" width="86" height="16" rx="2" fill="#059669"><title>PCS04 Sat: 93.2% available</title></rect>
  <rect x="600" y="94" width="86" height="16" rx="2" fill="#d97706"><title>PCS04 Sun: 70.7% available</title></rect>
  <text x="55" y="125" fill="#374151" font-size="10" text-anchor="end">PCS05</text>
  <rect x="60" y="112" width="86" height="16" rx="2" fill="#059669"><title>PCS05 Mon: 99.9% available</title></rect>
  <rect x="150" y="112" width="86" height="16" rx="2" fill="#059669"><title>PCS05 Tue: 100.0% available</title></rect>
  <rect x="240" y="112" width="86" height="16" rx="2" fill="#059669"><title>PCS05 Wed: 100.0% available</title></rect>
  <rect x="330" y="112" width="86" height="16" rx="2" fill="#059669"><title>PCS05 Thu: 100.0% available</title></rect>
  <rect x="420" y="112" width="86" height="16" rx="2" fill="#059669"><title>PCS05 Fri: 100.0% available</title></rect>
  <rect x="510" y="112" width="86" height="16" rx="2" fill="#059669"><title>PCS05 Sat: 96.5% available</title></rect>
  <rect x="600" y="112" width="86" height="16" rx="2" fill="#d97706"><title>PCS05 Sun: 72.4% available</title></rect>
  <text x="55" y="143" fill="#374151" font-size="10" text-anchor="end">PCS06</text>
  <rect x="60" y="130" width="86" height="16" rx="2" fill="#059669"><title>PCS06 Mon: 100.0% available</title></rect>
  <rect x="150" y="130" width="86" height="16" rx="2" fill="#059669"><title>PCS06 Tue: 100.0% available</title></rect>
  <rect x="240" y="130" width="86" height="16" rx="2" fill="#059669"><title>PCS06 Wed: 100.0% available</title></rect>
  <rect x="330" y="130" width="86" height="16" rx="2" fill="#059669"><title>PCS06 Thu: 100.0% available</title></rect>
  <rect x="420" y="130" width="86" height="16" rx="2" fill="#059669"><title>PCS06 Fri: 100.0% available</title></rect>
  <rect x="510" y="130" width="86" height="16" rx="2" fill="#059669"><title>PCS06 Sat: 93.2% available</title></rect>
  <rect x="600" y="130" width="86" height="16" rx="2" fill="#d97706"><title>PCS06 Sun: 70.7% available</title></rect>
  <text x="55" y="161" fill="#374151" font-size="10" text-anchor="end">PCS07</text>
  <rect x="60" y="148" width="86" height="16" rx="2" fill="#059669"><title>PCS07 Mon: 100.0% available</title></rect>
  <rect x="150" y="148" width="86" height="16" rx="2" fill="#059669"><title>PCS07 Tue: 100.0% available</title></rect>
  <rect x="240" y="148" width="86" height="16" rx="2" fill="#059669"><title>PCS07 Wed: 100.0% available</title></rect>
  <rect x="330" y="148" width="86" height="16" rx="2" fill="#059669"><title>PCS07 Thu: 100.0% available</title></rect>
  <rect x="420" y="148" width="86" height="16" rx="2" fill="#059669"><title>PCS07 Fri: 100.0% available</title></rect>
  <rect x="510" y="148" width="86" height="16" rx="2" fill="#059669"><title>PCS07 Sat: 93.2% available</title></rect>
  <rect x="600" y="148" width="86" height="16" rx="2" fill="#d97706"><title>PCS07 Sun: 70.8% available</title></rect>
  <text x="55" y="179" fill="#374151" font-size="10" text-anchor="end">PCS08</text>
  <rect x="60" y="166" width="86" height="16" rx="2" fill="#059669"><title>PCS08 Mon: 100.0% available</title></rect>
  <rect x="150" y="166" width="86" height="16" rx="2" fill="#059669"><title>PCS08 Tue: 100.0% available</title></rect>
  <rect x="240" y="166" width="86" height="16" rx="2" fill="#059669"><title>PCS08 Wed: 100.0% available</title></rect>
  <rect x="330" y="166" width="86" height="16" rx="2" fill="#059669"><title>PCS08 Thu: 100.0% available</title></rect>
  <rect x="420" y="166" width="86" height="16" rx="2" fill="#059669"><title>PCS08 Fri: 100.0% available</title></rect>
  <rect x="510" y="166" width="86" height="16" rx="2" fill="#059669"><title>PCS08 Sat: 93.2% available</title></rect>
  <rect x="600" y="166" width="86" height="16" rx="2" fill="#d97706"><title>PCS08 Sun: 70.7% available</title></rect>
  <text x="55" y="197" fill="#374151" font-size="10" text-anchor="end">PCS09</text>
  <rect x="60" y="184" width="86" height="16" rx="2" fill="#059669"><title>PCS09 Mon: 99.5% available</title></rect>
  <rect x="150" y="184" width="86" height="16" rx="2" fill="#059669"><title>PCS09 Tue: 99.6% available</title></rect>
  <rect x="240" y="184" width="86" height="16" rx="2" fill="#059669"><title>PCS09 Wed: 94.9% available</title></rect>
  <rect x="330" y="184" width="86" height="16" rx="2" fill="#059669"><title>PCS09 Thu: 98.6% available</title></rect>
  <rect x="420" y="184" width="86" height="16" rx="2" fill="#059669"><title>PCS09 Fri: 99.7% available</title></rect>
  <rect x="510" y="184" width="86" height="16" rx="2" fill="#059669"><title>PCS09 Sat: 93.0% available</title></rect>
  <rect x="600" y="184" width="86" height="16" rx="2" fill="#d97706"><title>PCS09 Sun: 70.7% available</title></rect>
  <text x="55" y="215" fill="#374151" font-size="10" text-anchor="end">PCS10</text>
  <rect x="60" y="202" width="86" height="16" rx="2" fill="#059669"><title>PCS10 Mon: 99.9% available</title></rect>
  <rect x="150" y="202" width="86" height="16" rx="2" fill="#059669"><title>PCS10 Tue: 100.0% available</title></rect>
  <rect x="240" y="202" width="86" height="16" rx="2" fill="#059669"><title>PCS10 Wed: 100.0% available</title></rect>
  <rect x="330" y="202" width="86" height="16" rx="2" fill="#059669"><title>PCS10 Thu: 100.0% available</title></rect>
  <rect x="420" y="202" width="86" height="16" rx="2" fill="#059669"><title>PCS10 Fri: 100.0% available</title></rect>
  <rect x="510" y="202" width="86" height="16" rx="2" fill="#059669"><title>PCS10 Sat: 93.2% available</title></rect>
  <rect x="600" y="202" width="86" height="16" rx="2" fill="#d97706"><title>PCS10 Sun: 70.7% available</title></rect>
  <text x="55" y="233" fill="#374151" font-size="10" text-anchor="end">PCS11</text>
  <rect x="60" y="220" width="86" height="16" rx="2" fill="#059669"><title>PCS11 Mon: 100.0% available</title></rect>
  <rect x="150" y="220" width="86" height="16" rx="2" fill="#059669"><title>PCS11 Tue: 100.0% available</title></rect>
  <rect x="240" y="220" width="86" height="16" rx="2" fill="#059669"><title>PCS11 Wed: 100.0% available</title></rect>
  <rect x="330" y="220" width="86" height="16" rx="2" fill="#059669"><title>PCS11 Thu: 100.0% available</title></rect>
  <rect x="420" y="220" width="86" height="16" rx="2" fill="#059669"><title>PCS11 Fri: 100.0% available</title></rect>
  <rect x="510" y="220" width="86" height="16" rx="2" fill="#059669"><title>PCS11 Sat: 93.2% available</title></rect>
  <rect x="600" y="220" width="86" height="16" rx="2" fill="#d97706"><title>PCS11 Sun: 70.7% available</title></rect>
  <text x="55" y="251" fill="#374151" font-size="10" text-anchor="end">PCS12</text>
  <rect x="60" y="238" width="86" height="16" rx="2" fill="#059669"><title>PCS12 Mon: 100.0% available</title></rect>
  <rect x="150" y="238" width="86" height="16" rx="2" fill="#059669"><title>PCS12 Tue: 100.0% available</title></rect>
  <rect x="240" y="238" width="86" height="16" rx="2" fill="#059669"><title>PCS12 Wed: 100.0% available</title></rect>
  <rect x="330" y="238" width="86" height="16" rx="2" fill="#059669"><title>PCS12 Thu: 100.0% available</title></rect>
  <rect x="420" y="238" width="86" height="16" rx="2" fill="#059669"><title>PCS12 Fri: 100.0% available</title></rect>
  <rect x="510" y="238" width="86" height="16" rx="2" fill="#059669"><title>PCS12 Sat: 93.2% available</title></rect>
  <rect x="600" y="238" width="86" height="16" rx="2" fill="#d97706"><title>PCS12 Sun: 70.7% available</title></rect>
  <text x="55" y="269" fill="#374151" font-size="10" text-anchor="end">PCS13</text>
  <rect x="60" y="256" width="86" height="16" rx="2" fill="#059669"><title>PCS13 Mon: 100.0% available</title></rect>
  <rect x="150" y="256" width="86" height="16" rx="2" fill="#059669"><title>PCS13 Tue: 100.0% available</title></rect>
  <rect x="240" y="256" width="86" height="16" rx="2" fill="#059669"><title>PCS13 Wed: 100.0% available</title></rect>
  <rect x="330" y="256" width="86" height="16" rx="2" fill="#059669"><title>PCS13 Thu: 100.0% available</title></rect>
  <rect x="420" y="256" width="86" height="16" rx="2" fill="#059669"><title>PCS13 Fri: 100.0% available</title></rect>
  <rect x="510" y="256" width="86" height="16" rx="2" fill="#059669"><title>PCS13 Sat: 99.9% available</title></rect>
  <rect x="600" y="256" width="86" height="16" rx="2" fill="#d97706"><title>PCS13 Sun: 72.4% available</title></rect>
  <text x="55" y="287" fill="#374151" font-size="10" text-anchor="end">PCS14</text>
  <rect x="60" y="274" width="86" height="16" rx="2" fill="#dc2626"><title>PCS14 Mon: 0.0% available</title></rect>
  <rect x="150" y="274" width="86" height="16" rx="2" fill="#dc2626"><title>PCS14 Tue: 39.5% available</title></rect>
  <rect x="240" y="274" width="86" height="16" rx="2" fill="#059669"><title>PCS14 Wed: 100.0% available</title></rect>
  <rect x="330" y="274" width="86" height="16" rx="2" fill="#d97706"><title>PCS14 Thu: 87.3% available</title></rect>
  <rect x="420" y="274" width="86" height="16" rx="2" fill="#d97706"><title>PCS14 Fri: 85.1% available</title></rect>
  <rect x="510" y="274" width="86" height="16" rx="2" fill="#059669"><title>PCS14 Sat: 93.2% available</title></rect>
  <rect x="600" y="274" width="86" height="16" rx="2" fill="#d97706"><title>PCS14 Sun: 70.7% available</title></rect>
  <rect x="60" y="308" width="14" height="12" rx="2" fill="#059669"/>
  <text x="78" y="317" fill="#52525b" font-size="10">&#8805;90% available</text>
  <rect x="220" y="308" width="14" height="12" rx="2" fill="#d97706"/>
  <text x="238" y="317" fill="#52525b" font-size="10">60-89%</text>
  <rect x="360" y="308" width="14" height="12" rx="2" fill="#dc2626"/>
  <text x="378" y="317" fill="#52525b" font-size="10">&lt;60%</text>
</svg>

**PCS14** is the recovery story: 0.0% Monday, 39.5% Tuesday, then a clean jump to 100% Wednesday and normal fleet-tracking behaviour from there on — last week's Alert is resolved. The bigger pattern this week is the fleet-wide **Sunday** dip to ~70.7% across every single unit, plus a milder Saturday dip to ~93%. This is now the fourth different day this pattern has shown up on (Tue, Thu, Mon, now Sun) — always fleet-wide, always a similar magnitude, which keeps pointing to a recurring scheduled event rather than a fault. PCS02 also had a brief two-day soft patch (67-71%, Mon-Tue) that cleared on its own by Wednesday.

## Wind Overview

### Per-turbine MTD production, technical & contractual availability

<svg class="report-chart" viewBox="0 0 860 340" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="16" fill="#52525b" font-size="12">MTD production (MWh, bars) with technical &amp; contractual availability (%, lines) — 1-13 Sep</text>
  <line x1="55" y1="190" x2="775" y2="190" stroke="#d1d5db" stroke-width="1"/>
  <text x="50" y="193" fill="#6b7280" font-size="9" text-anchor="end">0</text>
  <text x="50" y="108" fill="#6b7280" font-size="9" text-anchor="end">350</text>
  <text x="50" y="24" fill="#6b7280" font-size="9" text-anchor="end">700 MWh</text>
  <text x="783" y="193" fill="#6b7280" font-size="9" text-anchor="start">80%</text>
  <text x="783" y="110" fill="#6b7280" font-size="9" text-anchor="start">90%</text>
  <text x="783" y="27" fill="#6b7280" font-size="9" text-anchor="start">100%</text>
  <line x1="55" y1="55" x2="775" y2="55" stroke="#d1d5db" stroke-width="1" stroke-dasharray="2,3"/>
  <rect x="58" y="59" width="38" height="131" fill="#3b82f6"><title>WTG01: 552.6 MWh MTD</title></rect>
  <rect x="110" y="53" width="38" height="137" fill="#3b82f6"><title>WTG16: 578.4 MWh MTD</title></rect>
  <rect x="162" y="51" width="38" height="139" fill="#3b82f6"><title>WTG20: 587.0 MWh MTD</title></rect>
  <rect x="214" y="58" width="38" height="132" fill="#3b82f6"><title>WTG21: 555.1 MWh MTD</title></rect>
  <rect x="266" y="73" width="38" height="117" fill="#3b82f6"><title>WTG25: 492.2 MWh MTD</title></rect>
  <rect x="318" y="48" width="38" height="142" fill="#3b82f6"><title>WTG30: 600.1 MWh MTD</title></rect>
  <rect x="370" y="55" width="38" height="135" fill="#3b82f6"><title>WTG52: 569.4 MWh MTD</title></rect>
  <rect x="422" y="44" width="38" height="146" fill="#3b82f6"><title>WTG54: 614.9 MWh MTD</title></rect>
  <rect x="474" y="48" width="38" height="142" fill="#3b82f6"><title>WTG60: 599.1 MWh MTD</title></rect>
  <rect x="526" y="66" width="38" height="124" fill="#3b82f6"><title>WTG61: 524.2 MWh MTD</title></rect>
  <rect x="578" y="55" width="38" height="135" fill="#3b82f6"><title>WTG63: 570.9 MWh MTD</title></rect>
  <rect x="630" y="48" width="38" height="142" fill="#3b82f6"><title>WTG64: 596.9 MWh MTD</title></rect>
  <rect x="682" y="42" width="38" height="148" fill="#3b82f6"><title>WTG65: 624.0 MWh MTD</title></rect>
  <rect x="734" y="66" width="38" height="124" fill="#3b82f6"><title>WTG67: 521.8 MWh MTD</title></rect>
  <polyline points="77,90 129,30 181,27 233,36 285,26 337,146 389,28 441,25 493,25 545,24 597,26 649,25 701,24 753,26" fill="none" stroke="#059669" stroke-width="2"/>
  <circle cx="77" cy="90" r="3" fill="#059669"><title>WTG01 Technical Availability: 92.1%</title></circle>
  <circle cx="129" cy="30" r="3" fill="#059669"><title>WTG16 Technical Availability: 99.3%</title></circle>
  <circle cx="181" cy="27" r="3" fill="#059669"><title>WTG20 Technical Availability: 99.6%</title></circle>
  <circle cx="233" cy="36" r="3" fill="#059669"><title>WTG21 Technical Availability: 98.5%</title></circle>
  <circle cx="285" cy="26" r="3" fill="#059669"><title>WTG25 Technical Availability: 99.7%</title></circle>
  <circle cx="337" cy="146" r="3" fill="#059669"><title>WTG30 Technical Availability: 85.3%</title></circle>
  <circle cx="389" cy="28" r="3" fill="#059669"><title>WTG52 Technical Availability: 99.5%</title></circle>
  <circle cx="441" cy="25" r="3" fill="#059669"><title>WTG54 Technical Availability: 99.9%</title></circle>
  <circle cx="493" cy="25" r="3" fill="#059669"><title>WTG60 Technical Availability: 99.9%</title></circle>
  <circle cx="545" cy="24" r="3" fill="#059669"><title>WTG61 Technical Availability: 100.0%</title></circle>
  <circle cx="597" cy="26" r="3" fill="#059669"><title>WTG63 Technical Availability: 99.8%</title></circle>
  <circle cx="649" cy="25" r="3" fill="#059669"><title>WTG64 Technical Availability: 99.9%</title></circle>
  <circle cx="701" cy="24" r="3" fill="#059669"><title>WTG65 Technical Availability: 100.0%</title></circle>
  <circle cx="753" cy="26" r="3" fill="#059669"><title>WTG67 Technical Availability: 99.7%</title></circle>
  <polyline points="77,81 129,24 181,24 233,35 285,24 337,134 389,26 441,24 493,24 545,24 597,24 649,24 701,24 753,24" fill="none" stroke="#7c3aed" stroke-width="2"/>
  <circle cx="77" cy="81" r="3" fill="#7c3aed"><title>WTG01 Contractual Availability: 93.1%</title></circle>
  <circle cx="129" cy="24" r="3" fill="#7c3aed"><title>WTG16 Contractual Availability: 100.0%</title></circle>
  <circle cx="181" cy="24" r="3" fill="#7c3aed"><title>WTG20 Contractual Availability: 100.0%</title></circle>
  <circle cx="233" cy="35" r="3" fill="#7c3aed"><title>WTG21 Contractual Availability: 98.7%</title></circle>
  <circle cx="285" cy="24" r="3" fill="#7c3aed"><title>WTG25 Contractual Availability: 100.0%</title></circle>
  <circle cx="337" cy="134" r="3" fill="#7c3aed"><title>WTG30 Contractual Availability: 86.7%</title></circle>
  <circle cx="389" cy="26" r="3" fill="#7c3aed"><title>WTG52 Contractual Availability: 99.8%</title></circle>
  <circle cx="441" cy="24" r="3" fill="#7c3aed"><title>WTG54 Contractual Availability: 100.0%</title></circle>
  <circle cx="493" cy="24" r="3" fill="#7c3aed"><title>WTG60 Contractual Availability: 100.0%</title></circle>
  <circle cx="545" cy="24" r="3" fill="#7c3aed"><title>WTG61 Contractual Availability: 100.0%</title></circle>
  <circle cx="597" cy="24" r="3" fill="#7c3aed"><title>WTG63 Contractual Availability: 100.0%</title></circle>
  <circle cx="649" cy="24" r="3" fill="#7c3aed"><title>WTG64 Contractual Availability: 100.0%</title></circle>
  <circle cx="701" cy="24" r="3" fill="#7c3aed"><title>WTG65 Contractual Availability: 100.0%</title></circle>
  <circle cx="753" cy="24" r="3" fill="#7c3aed"><title>WTG67 Contractual Availability: 100.0%</title></circle>
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
  <text x="258" y="231" fill="#52525b" font-size="10">Fleet avg production (570.5 MWh)</text>
  <line x1="470" y1="227" x2="492" y2="227" stroke="#059669" stroke-width="2"/>
  <text x="498" y="231" fill="#52525b" font-size="10">Technical availability (right axis)</text>
  <line x1="670" y1="227" x2="692" y2="227" stroke="#7c3aed" stroke-width="2"/>
  <text x="698" y="231" fill="#52525b" font-size="10">Contractual availability (right axis)</text>
</svg>

The weakest-turbine story has changed: **WTG30** is now the clear outlier (85.3% technical / 86.7% contractual, and the lowest of either measure across the fleet), while **WTG61** — flagged in the prior two reports — has fully recovered to 100.0% on both. Every other turbine sits at 92.1% or better on technical and 93.1% or better on contractual availability. Production is fairly even (WTG65 leads at 624.0 MWh, WTG25 trails at 492.2 MWh).

### MTD & YTD vs P50/P90 and wind speed

| Period | Production (turbines) | P50 target | P90 target | Technical availability | Contractual availability | Measured wind speed | Forecasted wind speed |
|---|---|---|---|---|---|---|---|
| MTD (1-13 Sep) | 7,986.6 MWh | 7,069.4 MWh (+13.0%) | 6,155.7 MWh (+29.7%) | 98.1% | 98.4% | 7.22 m/s | 6.90 m/s |
| YTD (Jan-13 Sep) | 111,379.4 MWh | 145,502.4 MWh (-23.5%) | 126,687.7 MWh (-12.1%) | 90.2% | 93.8% | 6.41 m/s | 7.15 m/s |

Production is the sum of the 14 turbines' technical output. Targets are pro-rated to elapsed days in the period (13 of 30 days for MTD).

<svg class="report-chart" viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="16" fill="#52525b" font-size="12">Production as % of P50 / P90 target</text>
  <line x1="50" y1="190" x2="370" y2="190" stroke="#d1d5db" stroke-width="1"/>
  <text x="45" y="193" fill="#6b7280" font-size="9" text-anchor="end">0%</text>
  <text x="45" y="75" fill="#6b7280" font-size="9" text-anchor="end">100%</text>
  <line x1="50" y1="71" x2="370" y2="71" stroke="#111827" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="375" y="74" fill="#111827" font-size="9" text-anchor="start">on target</text>
  <rect x="70" y="56" width="40" height="134" fill="#3b82f6"><title>MTD vs P50: 113.0%</title></rect>
  <text x="90" y="50" fill="#52525b" font-size="10" text-anchor="middle">113.0%</text>
  <rect x="120" y="36" width="40" height="154" fill="#7c3aed"><title>MTD vs P90: 129.7%</title></rect>
  <text x="140" y="30" fill="#52525b" font-size="10" text-anchor="middle">129.7%</text>
  <text x="115" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">MTD</text>
  <rect x="230" y="99" width="40" height="91" fill="#3b82f6"><title>YTD vs P50: 76.5%</title></rect>
  <text x="250" y="93" fill="#52525b" font-size="10" text-anchor="middle">76.5%</text>
  <rect x="280" y="86" width="40" height="104" fill="#7c3aed"><title>YTD vs P90: 87.9%</title></rect>
  <text x="300" y="80" fill="#52525b" font-size="10" text-anchor="middle">87.9%</text>
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
  <rect x="70" y="40" width="40" height="150" fill="#3b82f6"><title>MTD Measured: 7.22 m/s</title></rect>
  <text x="90" y="34" fill="#52525b" font-size="10" text-anchor="middle">7.22</text>
  <rect x="120" y="47" width="40" height="143" fill="#b45309"><title>MTD Forecasted: 6.90 m/s</title></rect>
  <text x="140" y="41" fill="#52525b" font-size="10" text-anchor="middle">6.90</text>
  <text x="115" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">MTD</text>
  <rect x="230" y="57" width="40" height="133" fill="#3b82f6"><title>YTD Measured: 6.41 m/s</title></rect>
  <text x="250" y="51" fill="#52525b" font-size="10" text-anchor="middle">6.41</text>
  <rect x="280" y="42" width="40" height="148" fill="#b45309"><title>YTD Forecasted: 7.15 m/s</title></rect>
  <text x="300" y="36" fill="#52525b" font-size="10" text-anchor="middle">7.15</text>
  <text x="275" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">YTD</text>
  <rect x="70" y="222" width="12" height="10" fill="#3b82f6"/>
  <text x="86" y="231" fill="#52525b" font-size="10">Measured</text>
  <rect x="150" y="222" width="12" height="10" fill="#b45309"/>
  <text x="166" y="231" fill="#52525b" font-size="10">Forecasted</text>
</svg>

First time this series has shown measured wind speed exceeding forecast (+4.6% MTD), and production has followed through emphatically — 113.0% of P50 and 129.7% of P90 for the month so far. YTD remains below plan (76.5% of P50), but this is the strongest single month relative to target the year has had.

## Month- and year-to-date

| Period | Exported production | Declared utilisation | Wind contribution | BESS contribution |
|---|---|---|---|---|
| MTD (1-13 Sep) | 7.6 GWh | 96.3% | 104.0% | 17.3% |
| YTD (Jan-13 Sep) | 104.9 GWh | 87.5% | 104.2% | 19.5% |

## Monthly trend

<svg class="report-chart" viewBox="0 0 780 150" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="14" fill="#52525b" font-size="12">Monthly exported production (GWh)</text>
  <line x1="50" y1="110" x2="730" y2="110" stroke="#d1d5db" stroke-width="1"/>
  <rect x="60" y="30" width="55" height="80" rx="4" fill="#3b82f6"/>
  <text x="87" y="24" fill="#52525b" font-size="10" text-anchor="middle">14.2</text>
  <text x="87" y="125" fill="#6b7280" font-size="10" text-anchor="middle">Jan</text>
  <rect x="136" y="46" width="55" height="64" rx="4" fill="#3b82f6"/>
  <text x="163" y="40" fill="#52525b" font-size="10" text-anchor="middle">11.3</text>
  <text x="163" y="125" fill="#6b7280" font-size="10" text-anchor="middle">Feb</text>
  <rect x="211" y="54" width="55" height="56" rx="4" fill="#3b82f6"/>
  <text x="238" y="48" fill="#52525b" font-size="10" text-anchor="middle">10.0</text>
  <text x="238" y="125" fill="#6b7280" font-size="10" text-anchor="middle">Mar</text>
  <rect x="287" y="24" width="55" height="86" rx="4" fill="#3b82f6"/>
  <text x="314" y="18" fill="#52525b" font-size="10" text-anchor="middle">15.2</text>
  <text x="314" y="125" fill="#6b7280" font-size="10" text-anchor="middle">Apr</text>
  <rect x="362" y="42" width="55" height="68" rx="4" fill="#3b82f6"/>
  <text x="389" y="36" fill="#52525b" font-size="10" text-anchor="middle">12.1</text>
  <text x="389" y="125" fill="#6b7280" font-size="10" text-anchor="middle">May</text>
  <rect x="438" y="50" width="55" height="60" rx="4" fill="#3b82f6"/>
  <text x="465" y="44" fill="#52525b" font-size="10" text-anchor="middle">10.7</text>
  <text x="465" y="125" fill="#6b7280" font-size="10" text-anchor="middle">Jun</text>
  <rect x="514" y="53" width="55" height="57" rx="4" fill="#3b82f6"/>
  <text x="541" y="47" fill="#52525b" font-size="10" text-anchor="middle">10.1</text>
  <text x="541" y="125" fill="#6b7280" font-size="10" text-anchor="middle">Jul</text>
  <rect x="589" y="34" width="55" height="76" rx="4" fill="#3b82f6"/>
  <text x="616" y="28" fill="#52525b" font-size="10" text-anchor="middle">13.5</text>
  <text x="616" y="125" fill="#6b7280" font-size="10" text-anchor="middle">Aug</text>
  <rect x="665" y="67" width="55" height="43" rx="4" fill="#1d4ed8"/>
  <text x="692" y="61" fill="#111827" font-size="10" text-anchor="middle">7.6</text>
  <text x="692" y="125" fill="#52525b" font-size="10" text-anchor="middle">Sep (MTD)</text>
</svg>

<svg class="report-chart" viewBox="0 0 780 150" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="14" fill="#52525b" font-size="12">Monthly average ALP weighting factor</text>
  <line x1="50" y1="110" x2="730" y2="110" stroke="#d1d5db" stroke-width="1"/>
  <text x="45" y="113" fill="#6b7280" font-size="9" text-anchor="end">1.0x</text>
  <text x="45" y="24" fill="#6b7280" font-size="9" text-anchor="end">1.7x</text>
  <polyline points="88,78 164,93 239,79 315,56 390,65 466,81 542,69 617,61 693,69" fill="none" stroke="#b45309" stroke-width="2"/>
  <circle cx="88" cy="78" r="4" fill="#b45309"/>
  <text x="88" y="69" fill="#b45309" font-size="10" text-anchor="middle">1.26x</text>
  <text x="88" y="125" fill="#6b7280" font-size="10" text-anchor="middle">Jan</text>
  <circle cx="164" cy="93" r="4" fill="#b45309"/>
  <text x="164" y="84" fill="#b45309" font-size="10" text-anchor="middle">1.14x</text>
  <text x="164" y="125" fill="#6b7280" font-size="10" text-anchor="middle">Feb</text>
  <circle cx="239" cy="79" r="4" fill="#b45309"/>
  <text x="239" y="70" fill="#b45309" font-size="10" text-anchor="middle">1.25x</text>
  <text x="239" y="125" fill="#6b7280" font-size="10" text-anchor="middle">Mar</text>
  <circle cx="315" cy="56" r="4" fill="#b45309"/>
  <text x="315" y="47" fill="#b45309" font-size="10" text-anchor="middle">1.44x</text>
  <text x="315" y="125" fill="#6b7280" font-size="10" text-anchor="middle">Apr</text>
  <circle cx="390" cy="65" r="4" fill="#b45309"/>
  <text x="390" y="56" fill="#b45309" font-size="10" text-anchor="middle">1.37x</text>
  <text x="390" y="125" fill="#6b7280" font-size="10" text-anchor="middle">May</text>
  <circle cx="466" cy="81" r="4" fill="#b45309"/>
  <text x="466" y="72" fill="#b45309" font-size="10" text-anchor="middle">1.24x</text>
  <text x="466" y="125" fill="#6b7280" font-size="10" text-anchor="middle">Jun</text>
  <circle cx="542" cy="69" r="4" fill="#b45309"/>
  <text x="542" y="60" fill="#b45309" font-size="10" text-anchor="middle">1.33x*</text>
  <text x="542" y="125" fill="#6b7280" font-size="10" text-anchor="middle">Jul</text>
  <circle cx="617" cy="61" r="4" fill="#b45309"/>
  <text x="617" y="52" fill="#b45309" font-size="10" text-anchor="middle">1.40x*</text>
  <text x="617" y="125" fill="#6b7280" font-size="10" text-anchor="middle">Aug</text>
  <circle cx="693" cy="69" r="4" fill="#b45309"/>
  <text x="693" y="60" fill="#b45309" font-size="10" text-anchor="middle">1.33x*</text>
  <text x="693" y="125" fill="#52525b" font-size="10" text-anchor="middle">Sep (MTD)</text>
</svg>

\* Jul-Sep use both the 21:30-05:00 exclusion and the revised (`_rev`) penalty factor definition, and aren't directly comparable to Jan-Jun.

## Weighting (ALP penalty factor) this week

This week's 119 relevant hours (excluding 21:30-05:00) split as:

| Penalty factor | Hours | Share |
|---|---|---|
| 1.00x | 66 | 55.5% |
| 1.25x | 9 | 7.6% |
| 1.75x | 7 | 5.9% |
| 2.00x | 37 | 31.1% |

Roughly mid-range for the period — well below the 44.5% record but above the 21.8% lows seen in two recent weeks.

### Short-notice declaration rate — trend

<svg class="report-chart" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="16" fill="#52525b" font-size="12">Share of hours at the 2.00x penalty tier (revised definition), excl. 21:30-05:00 (%)</text>
  <line x1="50" y1="190" x2="730" y2="190" stroke="#d1d5db" stroke-width="1"/>
  <rect x="60" y="125" width="45" height="65" rx="4" fill="#3b82f6"/>
  <text x="82" y="119" fill="#52525b" font-size="11" text-anchor="middle">23.5%</text>
  <text x="82" y="205" fill="#6b7280" font-size="10" text-anchor="middle">13 Jul</text>
  <rect x="135" y="113" width="45" height="77" rx="4" fill="#3b82f6"/>
  <text x="157" y="107" fill="#52525b" font-size="11" text-anchor="middle">27.7%</text>
  <text x="157" y="205" fill="#6b7280" font-size="10" text-anchor="middle">20 Jul</text>
  <rect x="210" y="74" width="45" height="116" rx="4" fill="#3b82f6"/>
  <text x="232" y="68" fill="#52525b" font-size="11" text-anchor="middle">42.0%</text>
  <text x="232" y="205" fill="#6b7280" font-size="10" text-anchor="middle">27 Jul</text>
  <rect x="285" y="97" width="45" height="93" rx="4" fill="#3b82f6"/>
  <text x="307" y="91" fill="#52525b" font-size="11" text-anchor="middle">33.6%</text>
  <text x="307" y="205" fill="#6b7280" font-size="10" text-anchor="middle">03 Aug</text>
  <rect x="360" y="67" width="45" height="123" rx="4" fill="#dc2626"/>
  <text x="382" y="61" fill="#111827" font-size="11" text-anchor="middle">44.5% &#9888;</text>
  <text x="382" y="205" fill="#6b7280" font-size="10" text-anchor="middle">10 Aug</text>
  <rect x="435" y="130" width="45" height="60" rx="4" fill="#3b82f6"/>
  <text x="457" y="124" fill="#52525b" font-size="11" text-anchor="middle">21.8%</text>
  <text x="457" y="205" fill="#6b7280" font-size="10" text-anchor="middle">17 Aug</text>
  <rect x="510" y="71" width="45" height="119" rx="4" fill="#3b82f6"/>
  <text x="532" y="65" fill="#52525b" font-size="11" text-anchor="middle">42.9%</text>
  <text x="532" y="205" fill="#6b7280" font-size="10" text-anchor="middle">24 Aug</text>
  <rect x="585" y="130" width="45" height="60" rx="4" fill="#3b82f6"/>
  <text x="607" y="124" fill="#52525b" font-size="11" text-anchor="middle">21.8%</text>
  <text x="607" y="205" fill="#6b7280" font-size="10" text-anchor="middle">31 Aug</text>
  <rect x="660" y="104" width="45" height="86" rx="4" fill="#3b82f6"/>
  <text x="682" y="98" fill="#52525b" font-size="11" text-anchor="middle">31.1%</text>
  <text x="682" y="205" fill="#52525b" font-size="10" text-anchor="middle">07 Sep (this wk)</text>
</svg>

## Reviewer Notes

_Pending review._
