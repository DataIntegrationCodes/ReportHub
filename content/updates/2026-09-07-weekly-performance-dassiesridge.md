---
title: 'Weekly performance: Dassiesridge (31 Aug - 6 Sep)'
date: '2026-09-07'
layout: tabs
notesStatus: draft
---

Dassiesridge Hybrid (Wind + BESS) exported 4.22 GWh this week, up 29.5% on last week and essentially tying the 10 Aug peak — the strongest week of the recovery. Net MWh (penalty-adjusted) swung to +1,497.3 MWh, the best single-week figure this report series has tracked. The one thing that needs attention: PCS14 degraded steadily across the week and was fully offline by Friday.

<div class="summary-grid">
  <div class="summary-item"><span class="summary-label">Week 32 Exported</span><span class="summary-value">4.22 GWh</span></div>
  <div class="summary-item"><span class="summary-label">MTD Exported</span><span class="summary-value">4.2 GWh</span></div>
  <div class="summary-item"><span class="summary-label">YTD Exported</span><span class="summary-value">101.4 GWh</span></div>
  <div class="summary-item"><span class="summary-label">Weighting factor</span><span class="summary-value">68% @1.0x&nbsp;/&nbsp;22% @2.0x*</span></div>
</div>

<div class="callout callout-issue">
<strong>Alert:</strong> PCS14 declined steadily through the week — 50.0% Mon-Wed, dropping to 16.6% Thursday, then a full 0.0% Friday through Sunday. A pinned 50% reading has previously matched a one-of-two-inverter-modules-down pattern; this week's progression from 50% to a complete 0% looks consistent with that same fault worsening to a full unit failure, but that needs confirming at the module level rather than assumed from the unit-level signal alone. Every other PCS unit had a clean week (only a brief Monday dip on PCS07).
</div>

<div class="callout callout-win">
<strong>Strongest week of the recovery:</strong> exported production hit 4.22 GWh (+29.5% w/w), declared utilisation reached 99.4%, and export-vs-declared hit 97.9% — both among the best readings in this report series. Wind and BESS availability both recovered to 100%, resolving last week's availability-vs-output inconsistency without explanation needed. Net MWh was positive and the best week yet.
</div>

## Exported Production — last ~2 months

<svg class="report-chart" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="16" fill="#52525b" font-size="12">Weekly exported production (GWh)</text>
  <line x1="50" y1="190" x2="730" y2="190" stroke="#d1d5db" stroke-width="1"/>
  <rect x="60" y="148" width="45" height="42" rx="4" fill="#3b82f6"/>
  <text x="82" y="142" fill="#52525b" font-size="11" text-anchor="middle">1.24</text>
  <text x="82" y="205" fill="#6b7280" font-size="10" text-anchor="middle">06 Jul</text>
  <rect x="135" y="172" width="45" height="18" rx="4" fill="#3b82f6"/>
  <text x="157" y="166" fill="#52525b" font-size="11" text-anchor="middle">0.53</text>
  <text x="157" y="205" fill="#6b7280" font-size="10" text-anchor="middle">13 Jul</text>
  <rect x="210" y="118" width="45" height="72" rx="4" fill="#3b82f6"/>
  <text x="232" y="112" fill="#52525b" font-size="11" text-anchor="middle">2.12</text>
  <text x="232" y="205" fill="#6b7280" font-size="10" text-anchor="middle">20 Jul</text>
  <rect x="285" y="99" width="45" height="91" rx="4" fill="#3b82f6"/>
  <text x="307" y="93" fill="#52525b" font-size="11" text-anchor="middle">2.67</text>
  <text x="307" y="205" fill="#6b7280" font-size="10" text-anchor="middle">27 Jul</text>
  <rect x="360" y="74" width="45" height="116" rx="4" fill="#3b82f6"/>
  <text x="382" y="68" fill="#52525b" font-size="11" text-anchor="middle">3.42</text>
  <text x="382" y="205" fill="#6b7280" font-size="10" text-anchor="middle">03 Aug</text>
  <rect x="435" y="47" width="45" height="143" rx="4" fill="#3b82f6"/>
  <text x="457" y="41" fill="#52525b" font-size="11" text-anchor="middle">4.21</text>
  <text x="457" y="205" fill="#6b7280" font-size="10" text-anchor="middle">10 Aug</text>
  <rect x="510" y="121" width="45" height="69" rx="4" fill="#3b82f6"/>
  <text x="532" y="115" fill="#52525b" font-size="11" text-anchor="middle">2.02</text>
  <text x="532" y="205" fill="#6b7280" font-size="10" text-anchor="middle">17 Aug</text>
  <rect x="585" y="79" width="45" height="111" rx="4" fill="#3b82f6"/>
  <text x="607" y="73" fill="#52525b" font-size="11" text-anchor="middle">3.26</text>
  <text x="607" y="205" fill="#6b7280" font-size="10" text-anchor="middle">24 Aug</text>
  <rect x="660" y="47" width="45" height="143" rx="4" fill="#1d4ed8"/>
  <text x="682" y="41" fill="#111827" font-size="11" text-anchor="middle">4.22</text>
  <text x="682" y="205" fill="#52525b" font-size="10" text-anchor="middle">31 Aug (this wk)</text>
</svg>

A near-exact repeat of 10 Aug's peak, and the third strong week out of the last four — the two disrupted weeks (17 Aug's PCS/BESS event, 24 Aug's availability inconsistency) increasingly look like isolated data/reporting issues rather than a genuine downward trend.

<svg class="report-chart" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="16" fill="#52525b" font-size="12">Weekly avg BESS discharge hours (per day)</text>
  <line x1="50" y1="190" x2="730" y2="190" stroke="#d1d5db" stroke-width="1"/>
  <text x="45" y="193" fill="#6b7280" font-size="9" text-anchor="end">0h</text>
  <text x="45" y="24" fill="#6b7280" font-size="9" text-anchor="end">12h</text>
  <polyline points="82,67 157,85 232,28 307,92 382,53 457,52 532,103 607,75 682,46" fill="none" stroke="#3b82f6" stroke-width="2"/>
  <circle cx="82" cy="67" r="3" fill="#3b82f6"/><circle cx="157" cy="85" r="3" fill="#3b82f6"/><circle cx="232" cy="28" r="3" fill="#3b82f6"/><circle cx="307" cy="92" r="3" fill="#3b82f6"/><circle cx="382" cy="53" r="3" fill="#3b82f6"/><circle cx="457" cy="52" r="3" fill="#3b82f6"/><circle cx="532" cy="103" r="3" fill="#3b82f6"/><circle cx="607" cy="75" r="3" fill="#3b82f6"/><circle cx="682" cy="46" r="4" fill="#1d4ed8"/>
  <text x="82" y="59" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">8.9h</text>
  <text x="157" y="77" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">7.6h</text>
  <text x="232" y="20" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">11.7h</text>
  <text x="307" y="84" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">7.1h</text>
  <text x="382" y="45" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">9.9h</text>
  <text x="457" y="44" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">10.0h</text>
  <text x="532" y="95" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">6.3h</text>
  <text x="607" y="67" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">8.3h</text>
  <text x="682" y="38" fill="#111827" font-size="10" font-weight="600" text-anchor="middle">10.4h</text>
  <text x="82" y="205" fill="#6b7280" font-size="10" text-anchor="middle">06 Jul</text>
  <text x="157" y="205" fill="#6b7280" font-size="10" text-anchor="middle">13 Jul</text>
  <text x="232" y="205" fill="#6b7280" font-size="10" text-anchor="middle">20 Jul</text>
  <text x="307" y="205" fill="#6b7280" font-size="10" text-anchor="middle">27 Jul</text>
  <text x="382" y="205" fill="#6b7280" font-size="10" text-anchor="middle">03 Aug</text>
  <text x="457" y="205" fill="#6b7280" font-size="10" text-anchor="middle">10 Aug</text>
  <text x="532" y="205" fill="#6b7280" font-size="10" text-anchor="middle">17 Aug</text>
  <text x="607" y="205" fill="#6b7280" font-size="10" text-anchor="middle">24 Aug</text>
  <text x="682" y="205" fill="#52525b" font-size="10" text-anchor="middle">31 Aug (this wk)</text>
</svg>

<svg class="report-chart" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="16" fill="#52525b" font-size="12">Weekly avg discharge rate (MW per discharging hour)</text>
  <line x1="50" y1="190" x2="730" y2="190" stroke="#d1d5db" stroke-width="1"/>
  <text x="45" y="193" fill="#6b7280" font-size="9" text-anchor="end">0 MW</text>
  <text x="45" y="24" fill="#6b7280" font-size="9" text-anchor="end">16 MW</text>
  <polyline points="82,125 157,155 232,119 307,53 382,61 457,82 532,96 607,83 682,110" fill="none" stroke="#059669" stroke-width="2"/>
  <circle cx="82" cy="125" r="3" fill="#059669"/><circle cx="157" cy="155" r="3" fill="#059669"/><circle cx="232" cy="119" r="3" fill="#059669"/><circle cx="307" cy="53" r="3" fill="#059669"/><circle cx="382" cy="61" r="3" fill="#059669"/><circle cx="457" cy="82" r="3" fill="#059669"/><circle cx="532" cy="96" r="3" fill="#059669"/><circle cx="607" cy="83" r="3" fill="#059669"/><circle cx="682" cy="110" r="3" fill="#059669"/>
  <text x="82" y="117" fill="#047857" font-size="10" font-weight="600" text-anchor="middle">6.3</text>
  <text x="157" y="147" fill="#047857" font-size="10" font-weight="600" text-anchor="middle">3.4</text>
  <text x="232" y="111" fill="#047857" font-size="10" font-weight="600" text-anchor="middle">6.8</text>
  <text x="307" y="45" fill="#047857" font-size="10" font-weight="600" text-anchor="middle">13.2</text>
  <text x="382" y="53" fill="#047857" font-size="10" font-weight="600" text-anchor="middle">12.4</text>
  <text x="457" y="74" fill="#047857" font-size="10" font-weight="600" text-anchor="middle">10.4</text>
  <text x="532" y="88" fill="#047857" font-size="10" font-weight="600" text-anchor="middle">9.1</text>
  <text x="607" y="75" fill="#047857" font-size="10" font-weight="600" text-anchor="middle">10.3</text>
  <text x="682" y="102" fill="#047857" font-size="10" font-weight="600" text-anchor="middle">7.7</text>
  <text x="82" y="205" fill="#6b7280" font-size="10" text-anchor="middle">06 Jul</text>
  <text x="157" y="205" fill="#6b7280" font-size="10" text-anchor="middle">13 Jul</text>
  <text x="232" y="205" fill="#6b7280" font-size="10" text-anchor="middle">20 Jul</text>
  <text x="307" y="205" fill="#6b7280" font-size="10" text-anchor="middle">27 Jul</text>
  <text x="382" y="205" fill="#6b7280" font-size="10" text-anchor="middle">03 Aug</text>
  <text x="457" y="205" fill="#6b7280" font-size="10" text-anchor="middle">10 Aug</text>
  <text x="532" y="205" fill="#6b7280" font-size="10" text-anchor="middle">17 Aug</text>
  <text x="607" y="205" fill="#6b7280" font-size="10" text-anchor="middle">24 Aug</text>
  <text x="682" y="205" fill="#52525b" font-size="10" text-anchor="middle">31 Aug (this wk)</text>
</svg>

Discharge hours (10.4h/day) were among the highest of the period this week, but at a below-median rate (7.7 MW/hour) — a similar shape to 20 Jul, where the battery cycled for longer at a gentler rate rather than fewer, more powerful bursts.

## This week vs. last week

| Metric | This week (31 Aug-6 Sep) | Last week (24-30 Aug) | Change |
|---|---|---|---|
| Exported production | <span class="pos">4.22 GWh</span> | 3.26 GWh | <span class="pos">+0.96 GWh (+29.5%)</span> |
| Net MWh (penalty-adjusted) | <span class="pos">+1,497.3</span> | <span class="neg">-728.5</span> | <span class="pos">+2,225.8 (swung positive)</span> |
| Net gain / net loss (MWh) | +2,869.4 / -1,372.2 | +1,945.8 / -2,674.3 | Gain grew; loss shrank sharply |
| Positive net periods | 63.3% | 45.0% | <span class="pos">+18.3pp</span> |
| Declared utilisation | 99.4% | 93.9% | +5.5pp |
| Export vs. declared ratio | 97.9% | 91.5% | +6.4pp |
| Wind availability (declared) | <span class="pos">100%</span> | 76.6% | <span class="pos">+23.4pp</span> |
| BESS availability (declared) | <span class="pos">100%</span> | 76.6% | <span class="pos">+23.4pp</span> |
| BESS contribution to exports | 13.2% | 18.4% | -5.2pp |
| BESS charge / discharge (MWh) | 756.1 / 559.2 | 692.3 / 599.1 | Similar cycling |
| Avg. hours to recover from a loss period | 11.76h | 12.30h | -0.54h |

Wind and BESS declared availability both returned to a clean 100% every day this week — no repeat of last week's Wed/Thu inconsistency. Declaration coverage was 93 of 119 relevant hours (78.2%), with the usual early-week gaps (Mon 7/17, Tue 10/17) clearing up by Thursday.

## BESS Daily View

<svg class="report-chart" viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="16" fill="#52525b" font-size="12">Daily hours charging vs. discharging, vs. weekly average discharge (10.4h)</text>
  <line x1="55" y1="190" x2="705" y2="190" stroke="#d1d5db" stroke-width="1"/>
  <text x="50" y="193" fill="#6b7280" font-size="9" text-anchor="end">0h</text>
  <text x="50" y="108" fill="#6b7280" font-size="9" text-anchor="end">12h</text>
  <text x="50" y="24" fill="#6b7280" font-size="9" text-anchor="end">24h</text>
  <rect x="81" y="84" width="40" height="106" fill="#3b82f6"/>
  <rect x="81" y="20" width="40" height="64" fill="#b45309"/>
  <rect x="174" y="70" width="40" height="120" fill="#3b82f6"/>
  <rect x="174" y="20" width="40" height="50" fill="#b45309"/>
  <rect x="267" y="105" width="40" height="85" fill="#3b82f6"/>
  <rect x="267" y="20" width="40" height="85" fill="#b45309"/>
  <rect x="360" y="77" width="40" height="113" fill="#3b82f6"/>
  <rect x="360" y="20" width="40" height="57" fill="#b45309"/>
  <rect x="453" y="105" width="40" height="85" fill="#3b82f6"/>
  <rect x="453" y="20" width="40" height="85" fill="#b45309"/>
  <rect x="546" y="112" width="40" height="78" fill="#3b82f6"/>
  <rect x="546" y="20" width="40" height="92" fill="#b45309"/>
  <rect x="639" y="105" width="40" height="85" fill="#3b82f6"/>
  <rect x="639" y="20" width="40" height="85" fill="#b45309"/>
  <line x1="55" y1="116" x2="705" y2="116" stroke="#111827" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="710" y="119" fill="#111827" font-size="9" text-anchor="start">avg 10.4h</text>
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
  <polyline points="99,105 196,136 293,89 390,188 487,172 584,154 681,162" fill="none" stroke="#3b82f6" stroke-width="2"/>
  <circle cx="99" cy="105" r="3" fill="#3b82f6"/><circle cx="196" cy="136" r="3" fill="#3b82f6"/><circle cx="293" cy="89" r="3" fill="#3b82f6"/><circle cx="390" cy="188" r="3" fill="#3b82f6"/><circle cx="487" cy="172" r="3" fill="#3b82f6"/><circle cx="584" cy="154" r="3" fill="#3b82f6"/><circle cx="681" cy="162" r="3" fill="#3b82f6"/>
  <text x="99" y="97" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">40.8%</text>
  <text x="196" y="128" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">25.9%</text>
  <text x="293" y="81" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">48.7%</text>
  <text x="390" y="180" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">1.1%</text>
  <text x="487" y="164" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">8.4%</text>
  <text x="584" y="146" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">17.6%</text>
  <text x="681" y="154" fill="#1d4ed8" font-size="10" font-weight="600" text-anchor="middle">13.4%</text>
  <text x="99" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Mon</text>
  <text x="196" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Tue</text>
  <text x="293" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Wed</text>
  <text x="390" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Thu</text>
  <text x="487" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Fri</text>
  <text x="584" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Sat</text>
  <text x="681" y="205" fill="#374151" font-size="10" font-weight="600" text-anchor="middle">Sun</text>
</svg>

<svg class="report-chart" viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="16" fill="#52525b" font-size="12">Daily exported production vs. declared (MWh) — axis extended to fit Friday's 1,193.7 MWh record</text>
  <line x1="55" y1="190" x2="705" y2="190" stroke="#d1d5db" stroke-width="1"/>
  <text x="50" y="193" fill="#6b7280" font-size="9" text-anchor="end">0</text>
  <text x="50" y="108" fill="#6b7280" font-size="9" text-anchor="end">625</text>
  <text x="50" y="24" fill="#6b7280" font-size="9" text-anchor="end">1250</text>
  <rect x="81" y="185" width="40" height="5" fill="#3b82f6"><title>Mon: Wind 36.9 MWh</title></rect>
  <rect x="81" y="183" width="40" height="2" fill="#059669"><title>Mon: BESS +11.5 MWh (net positive)</title></rect>
  <line x1="77" y1="184" x2="125" y2="184" stroke="#111827" stroke-width="2"><title>Mon: Declared 44.1 MWh</title></line>
  <rect x="174" y="161" width="40" height="29" fill="#3b82f6"><title>Tue: Exported 215.4 MWh (Wind, BESS net-charged)</title></rect>
  <line x1="170" y1="165" x2="218" y2="165" stroke="#111827" stroke-width="2"><title>Tue: Declared 186.8 MWh</title></line>
  <rect x="267" y="159" width="40" height="31" fill="#3b82f6"><title>Wed: Wind 232.9 MWh</title></rect>
  <rect x="267" y="158" width="40" height="1" fill="#059669"><title>Wed: BESS +10.0 MWh (net positive)</title></rect>
  <line x1="263" y1="159" x2="311" y2="159" stroke="#111827" stroke-width="2"><title>Wed: Declared 231.7 MWh</title></line>
  <rect x="360" y="79" width="40" height="111" fill="#3b82f6"><title>Thu: Exported 837.5 MWh (Wind, BESS net-charged)</title></rect>
  <line x1="356" y1="82" x2="404" y2="82" stroke="#111827" stroke-width="2"><title>Thu: Declared 814.9 MWh</title></line>
  <rect x="453" y="31" width="40" height="159" fill="#3b82f6"><title>Fri: Exported 1,193.7 MWh (Wind, BESS net-charged) — record</title></rect>
  <line x1="449" y1="33" x2="497" y2="33" stroke="#111827" stroke-width="2"><title>Fri: Declared 1,183.8 MWh</title></line>
  <rect x="546" y="93" width="40" height="97" fill="#3b82f6"><title>Sat: Wind 729.3 MWh</title></rect>
  <rect x="546" y="86" width="40" height="7" fill="#059669"><title>Sat: BESS +55.0 MWh (net positive)</title></rect>
  <line x1="542" y1="87" x2="590" y2="87" stroke="#111827" stroke-width="2"><title>Sat: Declared 773.9 MWh</title></line>
  <rect x="639" y="69" width="40" height="121" fill="#3b82f6"><title>Sun: Exported 912.4 MWh (Wind, BESS net-charged)</title></rect>
  <line x1="635" y1="56" x2="683" y2="56" stroke="#111827" stroke-width="2"><title>Sun: Declared 1,010.9 MWh</title></line>
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

Friday set a new single-day record — 1,193.7 MWh exported against 1,183.8 MWh declared (100.8%), the first day in this report series to exceed 1,000 MWh, let alone match declaration this closely. Sunday (912.4 MWh) was the second-biggest day. Monday, Wednesday and Saturday were the three net-positive BESS days, though all three were small margins.

### PCS availability heatmap

<svg class="report-chart" viewBox="0 0 740 340" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="16" fill="#52525b" font-size="12">Per-unit PCS availability by day — PCS14 is the story this week</text>
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
  <rect x="420" y="40" width="86" height="16" rx="2" fill="#059669"><title>PCS01 Fri: 99.9% available</title></rect>
  <rect x="510" y="40" width="86" height="16" rx="2" fill="#059669"><title>PCS01 Sat: 100.0% available</title></rect>
  <rect x="600" y="40" width="86" height="16" rx="2" fill="#059669"><title>PCS01 Sun: 100.0% available</title></rect>
  <text x="55" y="71" fill="#374151" font-size="10" text-anchor="end">PCS02</text>
  <rect x="60" y="58" width="86" height="16" rx="2" fill="#059669"><title>PCS02 Mon: 100.0% available</title></rect>
  <rect x="150" y="58" width="86" height="16" rx="2" fill="#059669"><title>PCS02 Tue: 100.0% available</title></rect>
  <rect x="240" y="58" width="86" height="16" rx="2" fill="#059669"><title>PCS02 Wed: 100.0% available</title></rect>
  <rect x="330" y="58" width="86" height="16" rx="2" fill="#059669"><title>PCS02 Thu: 100.0% available</title></rect>
  <rect x="420" y="58" width="86" height="16" rx="2" fill="#059669"><title>PCS02 Fri: 99.9% available</title></rect>
  <rect x="510" y="58" width="86" height="16" rx="2" fill="#059669"><title>PCS02 Sat: 100.0% available</title></rect>
  <rect x="600" y="58" width="86" height="16" rx="2" fill="#059669"><title>PCS02 Sun: 100.0% available</title></rect>
  <text x="55" y="89" fill="#374151" font-size="10" text-anchor="end">PCS03</text>
  <rect x="60" y="76" width="86" height="16" rx="2" fill="#059669"><title>PCS03 Mon: 100.0% available</title></rect>
  <rect x="150" y="76" width="86" height="16" rx="2" fill="#059669"><title>PCS03 Tue: 100.0% available</title></rect>
  <rect x="240" y="76" width="86" height="16" rx="2" fill="#059669"><title>PCS03 Wed: 100.0% available</title></rect>
  <rect x="330" y="76" width="86" height="16" rx="2" fill="#059669"><title>PCS03 Thu: 100.0% available</title></rect>
  <rect x="420" y="76" width="86" height="16" rx="2" fill="#059669"><title>PCS03 Fri: 99.9% available</title></rect>
  <rect x="510" y="76" width="86" height="16" rx="2" fill="#059669"><title>PCS03 Sat: 100.0% available</title></rect>
  <rect x="600" y="76" width="86" height="16" rx="2" fill="#059669"><title>PCS03 Sun: 100.0% available</title></rect>
  <text x="55" y="107" fill="#374151" font-size="10" text-anchor="end">PCS04</text>
  <rect x="60" y="94" width="86" height="16" rx="2" fill="#059669"><title>PCS04 Mon: 100.0% available</title></rect>
  <rect x="150" y="94" width="86" height="16" rx="2" fill="#059669"><title>PCS04 Tue: 100.0% available</title></rect>
  <rect x="240" y="94" width="86" height="16" rx="2" fill="#059669"><title>PCS04 Wed: 100.0% available</title></rect>
  <rect x="330" y="94" width="86" height="16" rx="2" fill="#059669"><title>PCS04 Thu: 100.0% available</title></rect>
  <rect x="420" y="94" width="86" height="16" rx="2" fill="#059669"><title>PCS04 Fri: 99.9% available</title></rect>
  <rect x="510" y="94" width="86" height="16" rx="2" fill="#059669"><title>PCS04 Sat: 100.0% available</title></rect>
  <rect x="600" y="94" width="86" height="16" rx="2" fill="#059669"><title>PCS04 Sun: 100.0% available</title></rect>
  <text x="55" y="125" fill="#374151" font-size="10" text-anchor="end">PCS05</text>
  <rect x="60" y="112" width="86" height="16" rx="2" fill="#059669"><title>PCS05 Mon: 100.0% available</title></rect>
  <rect x="150" y="112" width="86" height="16" rx="2" fill="#059669"><title>PCS05 Tue: 100.0% available</title></rect>
  <rect x="240" y="112" width="86" height="16" rx="2" fill="#059669"><title>PCS05 Wed: 100.0% available</title></rect>
  <rect x="330" y="112" width="86" height="16" rx="2" fill="#059669"><title>PCS05 Thu: 100.0% available</title></rect>
  <rect x="420" y="112" width="86" height="16" rx="2" fill="#059669"><title>PCS05 Fri: 99.9% available</title></rect>
  <rect x="510" y="112" width="86" height="16" rx="2" fill="#059669"><title>PCS05 Sat: 100.0% available</title></rect>
  <rect x="600" y="112" width="86" height="16" rx="2" fill="#059669"><title>PCS05 Sun: 100.0% available</title></rect>
  <text x="55" y="143" fill="#374151" font-size="10" text-anchor="end">PCS06</text>
  <rect x="60" y="130" width="86" height="16" rx="2" fill="#059669"><title>PCS06 Mon: 100.0% available</title></rect>
  <rect x="150" y="130" width="86" height="16" rx="2" fill="#059669"><title>PCS06 Tue: 100.0% available</title></rect>
  <rect x="240" y="130" width="86" height="16" rx="2" fill="#059669"><title>PCS06 Wed: 100.0% available</title></rect>
  <rect x="330" y="130" width="86" height="16" rx="2" fill="#059669"><title>PCS06 Thu: 100.0% available</title></rect>
  <rect x="420" y="130" width="86" height="16" rx="2" fill="#059669"><title>PCS06 Fri: 99.9% available</title></rect>
  <rect x="510" y="130" width="86" height="16" rx="2" fill="#059669"><title>PCS06 Sat: 100.0% available</title></rect>
  <rect x="600" y="130" width="86" height="16" rx="2" fill="#059669"><title>PCS06 Sun: 100.0% available</title></rect>
  <text x="55" y="161" fill="#374151" font-size="10" text-anchor="end">PCS07</text>
  <rect x="60" y="148" width="86" height="16" rx="2" fill="#d97706"><title>PCS07 Mon: 78.8% available</title></rect>
  <rect x="150" y="148" width="86" height="16" rx="2" fill="#059669"><title>PCS07 Tue: 100.0% available</title></rect>
  <rect x="240" y="148" width="86" height="16" rx="2" fill="#059669"><title>PCS07 Wed: 100.0% available</title></rect>
  <rect x="330" y="148" width="86" height="16" rx="2" fill="#059669"><title>PCS07 Thu: 100.0% available</title></rect>
  <rect x="420" y="148" width="86" height="16" rx="2" fill="#059669"><title>PCS07 Fri: 99.9% available</title></rect>
  <rect x="510" y="148" width="86" height="16" rx="2" fill="#059669"><title>PCS07 Sat: 100.0% available</title></rect>
  <rect x="600" y="148" width="86" height="16" rx="2" fill="#059669"><title>PCS07 Sun: 100.0% available</title></rect>
  <text x="55" y="179" fill="#374151" font-size="10" text-anchor="end">PCS08</text>
  <rect x="60" y="166" width="86" height="16" rx="2" fill="#059669"><title>PCS08 Mon: 100.0% available</title></rect>
  <rect x="150" y="166" width="86" height="16" rx="2" fill="#059669"><title>PCS08 Tue: 100.0% available</title></rect>
  <rect x="240" y="166" width="86" height="16" rx="2" fill="#059669"><title>PCS08 Wed: 100.0% available</title></rect>
  <rect x="330" y="166" width="86" height="16" rx="2" fill="#059669"><title>PCS08 Thu: 100.0% available</title></rect>
  <rect x="420" y="166" width="86" height="16" rx="2" fill="#059669"><title>PCS08 Fri: 99.9% available</title></rect>
  <rect x="510" y="166" width="86" height="16" rx="2" fill="#059669"><title>PCS08 Sat: 100.0% available</title></rect>
  <rect x="600" y="166" width="86" height="16" rx="2" fill="#059669"><title>PCS08 Sun: 100.0% available</title></rect>
  <text x="55" y="197" fill="#374151" font-size="10" text-anchor="end">PCS09</text>
  <rect x="60" y="184" width="86" height="16" rx="2" fill="#059669"><title>PCS09 Mon: 99.7% available</title></rect>
  <rect x="150" y="184" width="86" height="16" rx="2" fill="#059669"><title>PCS09 Tue: 97.2% available</title></rect>
  <rect x="240" y="184" width="86" height="16" rx="2" fill="#059669"><title>PCS09 Wed: 99.4% available</title></rect>
  <rect x="330" y="184" width="86" height="16" rx="2" fill="#059669"><title>PCS09 Thu: 99.9% available</title></rect>
  <rect x="420" y="184" width="86" height="16" rx="2" fill="#059669"><title>PCS09 Fri: 98.2% available</title></rect>
  <rect x="510" y="184" width="86" height="16" rx="2" fill="#059669"><title>PCS09 Sat: 97.2% available</title></rect>
  <rect x="600" y="184" width="86" height="16" rx="2" fill="#059669"><title>PCS09 Sun: 99.9% available</title></rect>
  <text x="55" y="215" fill="#374151" font-size="10" text-anchor="end">PCS10</text>
  <rect x="60" y="202" width="86" height="16" rx="2" fill="#059669"><title>PCS10 Mon: 100.0% available</title></rect>
  <rect x="150" y="202" width="86" height="16" rx="2" fill="#059669"><title>PCS10 Tue: 100.0% available</title></rect>
  <rect x="240" y="202" width="86" height="16" rx="2" fill="#059669"><title>PCS10 Wed: 100.0% available</title></rect>
  <rect x="330" y="202" width="86" height="16" rx="2" fill="#059669"><title>PCS10 Thu: 100.0% available</title></rect>
  <rect x="420" y="202" width="86" height="16" rx="2" fill="#059669"><title>PCS10 Fri: 99.9% available</title></rect>
  <rect x="510" y="202" width="86" height="16" rx="2" fill="#059669"><title>PCS10 Sat: 100.0% available</title></rect>
  <rect x="600" y="202" width="86" height="16" rx="2" fill="#059669"><title>PCS10 Sun: 100.0% available</title></rect>
  <text x="55" y="233" fill="#374151" font-size="10" text-anchor="end">PCS11</text>
  <rect x="60" y="220" width="86" height="16" rx="2" fill="#059669"><title>PCS11 Mon: 99.9% available</title></rect>
  <rect x="150" y="220" width="86" height="16" rx="2" fill="#059669"><title>PCS11 Tue: 100.0% available</title></rect>
  <rect x="240" y="220" width="86" height="16" rx="2" fill="#059669"><title>PCS11 Wed: 100.0% available</title></rect>
  <rect x="330" y="220" width="86" height="16" rx="2" fill="#059669"><title>PCS11 Thu: 100.0% available</title></rect>
  <rect x="420" y="220" width="86" height="16" rx="2" fill="#059669"><title>PCS11 Fri: 99.9% available</title></rect>
  <rect x="510" y="220" width="86" height="16" rx="2" fill="#059669"><title>PCS11 Sat: 100.0% available</title></rect>
  <rect x="600" y="220" width="86" height="16" rx="2" fill="#059669"><title>PCS11 Sun: 100.0% available</title></rect>
  <text x="55" y="251" fill="#374151" font-size="10" text-anchor="end">PCS12</text>
  <rect x="60" y="238" width="86" height="16" rx="2" fill="#059669"><title>PCS12 Mon: 100.0% available</title></rect>
  <rect x="150" y="238" width="86" height="16" rx="2" fill="#059669"><title>PCS12 Tue: 100.0% available</title></rect>
  <rect x="240" y="238" width="86" height="16" rx="2" fill="#059669"><title>PCS12 Wed: 100.0% available</title></rect>
  <rect x="330" y="238" width="86" height="16" rx="2" fill="#059669"><title>PCS12 Thu: 100.0% available</title></rect>
  <rect x="420" y="238" width="86" height="16" rx="2" fill="#059669"><title>PCS12 Fri: 99.9% available</title></rect>
  <rect x="510" y="238" width="86" height="16" rx="2" fill="#059669"><title>PCS12 Sat: 100.0% available</title></rect>
  <rect x="600" y="238" width="86" height="16" rx="2" fill="#059669"><title>PCS12 Sun: 100.0% available</title></rect>
  <text x="55" y="269" fill="#374151" font-size="10" text-anchor="end">PCS13</text>
  <rect x="60" y="256" width="86" height="16" rx="2" fill="#059669"><title>PCS13 Mon: 100.0% available</title></rect>
  <rect x="150" y="256" width="86" height="16" rx="2" fill="#059669"><title>PCS13 Tue: 100.0% available</title></rect>
  <rect x="240" y="256" width="86" height="16" rx="2" fill="#059669"><title>PCS13 Wed: 100.0% available</title></rect>
  <rect x="330" y="256" width="86" height="16" rx="2" fill="#059669"><title>PCS13 Thu: 100.0% available</title></rect>
  <rect x="420" y="256" width="86" height="16" rx="2" fill="#059669"><title>PCS13 Fri: 99.9% available</title></rect>
  <rect x="510" y="256" width="86" height="16" rx="2" fill="#059669"><title>PCS13 Sat: 100.0% available</title></rect>
  <rect x="600" y="256" width="86" height="16" rx="2" fill="#059669"><title>PCS13 Sun: 100.0% available</title></rect>
  <text x="55" y="287" fill="#374151" font-size="10" text-anchor="end">PCS14</text>
  <rect x="60" y="274" width="86" height="16" rx="2" fill="#d97706"><title>PCS14 Mon: 50.0% available</title></rect>
  <rect x="150" y="274" width="86" height="16" rx="2" fill="#d97706"><title>PCS14 Tue: 50.0% available</title></rect>
  <rect x="240" y="274" width="86" height="16" rx="2" fill="#d97706"><title>PCS14 Wed: 50.0% available</title></rect>
  <rect x="330" y="274" width="86" height="16" rx="2" fill="#dc2626"><title>PCS14 Thu: 16.6% available</title></rect>
  <rect x="420" y="274" width="86" height="16" rx="2" fill="#dc2626"><title>PCS14 Fri: 0.0% available</title></rect>
  <rect x="510" y="274" width="86" height="16" rx="2" fill="#dc2626"><title>PCS14 Sat: 0.0% available</title></rect>
  <rect x="600" y="274" width="86" height="16" rx="2" fill="#dc2626"><title>PCS14 Sun: 0.0% available</title></rect>
  <rect x="60" y="308" width="14" height="12" rx="2" fill="#059669"/>
  <text x="78" y="317" fill="#52525b" font-size="10">&#8805;90% available</text>
  <rect x="220" y="308" width="14" height="12" rx="2" fill="#d97706"/>
  <text x="238" y="317" fill="#52525b" font-size="10">60-89%</text>
  <rect x="360" y="308" width="14" height="12" rx="2" fill="#dc2626"/>
  <text x="378" y="317" fill="#52525b" font-size="10">&lt;60%</text>
</svg>

The cleanest week for the fleet since this heatmap started — every unit but two had a perfect or near-perfect week, and for the first time there's no fleet-wide day-of-week dip at all. **PCS14** is the exception and the whole story: a steady, one-directional decline from a pinned 50% (Mon-Wed) to 16.6% (Thu) to a complete 0% for the final three days. PCS11, the unit flagged as chronically weak in every report since the PCS heatmap began, had its best week yet — 99.9%+ every day.

## Month- and year-to-date

| Period | Exported production | Declared utilisation | Wind contribution | BESS contribution |
|---|---|---|---|---|
| MTD (1-6 Sep) | 4.2 GWh | 99.3% | 106.2% | 12.9% |
| YTD (Jan-6 Sep) | 101.4 GWh | 87.3% | 104.3% | 19.4% |

YTD exported production has now crossed 100 GWh.

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
  <rect x="665" y="87" width="55" height="23" rx="4" fill="#1d4ed8"/>
  <text x="692" y="81" fill="#111827" font-size="10" text-anchor="middle">4.2</text>
  <text x="692" y="125" fill="#52525b" font-size="10" text-anchor="middle">Sep (MTD)</text>
</svg>

<svg class="report-chart" viewBox="0 0 780 150" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="14" fill="#52525b" font-size="12">Monthly average ALP weighting factor</text>
  <line x1="50" y1="110" x2="730" y2="110" stroke="#d1d5db" stroke-width="1"/>
  <text x="45" y="113" fill="#6b7280" font-size="9" text-anchor="end">1.0x</text>
  <text x="45" y="24" fill="#6b7280" font-size="9" text-anchor="end">1.7x</text>
  <polyline points="88,78 164,93 239,79 315,56 390,65 466,81 542,69 617,61 693,75" fill="none" stroke="#b45309" stroke-width="2"/>
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
  <circle cx="693" cy="75" r="4" fill="#b45309"/>
  <text x="693" y="66" fill="#b45309" font-size="10" text-anchor="middle">1.29x*</text>
  <text x="693" y="125" fill="#52525b" font-size="10" text-anchor="middle">Sep (MTD)</text>
</svg>

\* Two methodology changes affect Jul-Sep and aren't directly comparable to Jan-Jun: the 21:30-05:00 exclusion, and (new this week) the switch to a revised penalty factor definition — see the Weighting tab below. Jul and Aug have both been recalculated on the revised definition for a consistent trend line.

## Weighting (ALP penalty factor) this week

**Methodology change this week**: this section now uses `Penalty Factor_rev` in place of the original `Penalty Factor`. The revised definition compares the governing submission (the one that last changed the declared capacity) against the submission immediately before it, and only exposes a **downward** revision to the lead-time penalty bands (>6h=1.0x, >4h=1.25x, >2h=1.75x, else 2.0x). An upward revision, a repeat of the standing value, or a first-ever declaration all score 1.0x regardless of how late they were made. This generally produces a more lenient distribution than the original definition, which penalised lateness regardless of direction.

This week's 119 relevant hours (excluding 21:30-05:00) split as:

| Penalty factor | Hours | Share |
|---|---|---|
| 1.00x | 81 | 68.1% |
| 1.25x | 7 | 5.9% |
| 1.75x | 5 | 4.2% |
| 2.00x | 26 | 21.8% |

Tied with 17 Aug for the lowest 2.00x-tier share of the period under this revised definition.

### Short-notice declaration rate — trend

<svg class="report-chart" viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="16" fill="#52525b" font-size="12">Share of hours at the 2.00x penalty tier (revised definition), excl. 21:30-05:00 (%)</text>
  <line x1="50" y1="190" x2="730" y2="190" stroke="#d1d5db" stroke-width="1"/>
  <rect x="60" y="122" width="45" height="68" rx="4" fill="#3b82f6"/>
  <text x="82" y="116" fill="#52525b" font-size="11" text-anchor="middle">24.4%</text>
  <text x="82" y="205" fill="#6b7280" font-size="10" text-anchor="middle">06 Jul</text>
  <rect x="135" y="125" width="45" height="65" rx="4" fill="#3b82f6"/>
  <text x="157" y="119" fill="#52525b" font-size="11" text-anchor="middle">23.5%</text>
  <text x="157" y="205" fill="#6b7280" font-size="10" text-anchor="middle">13 Jul</text>
  <rect x="210" y="113" width="45" height="77" rx="4" fill="#3b82f6"/>
  <text x="232" y="107" fill="#52525b" font-size="11" text-anchor="middle">27.7%</text>
  <text x="232" y="205" fill="#6b7280" font-size="10" text-anchor="middle">20 Jul</text>
  <rect x="285" y="74" width="45" height="116" rx="4" fill="#3b82f6"/>
  <text x="307" y="68" fill="#52525b" font-size="11" text-anchor="middle">42.0%</text>
  <text x="307" y="205" fill="#6b7280" font-size="10" text-anchor="middle">27 Jul</text>
  <rect x="360" y="97" width="45" height="93" rx="4" fill="#3b82f6"/>
  <text x="382" y="91" fill="#52525b" font-size="11" text-anchor="middle">33.6%</text>
  <text x="382" y="205" fill="#6b7280" font-size="10" text-anchor="middle">03 Aug</text>
  <rect x="435" y="67" width="45" height="123" rx="4" fill="#dc2626"/>
  <text x="457" y="61" fill="#111827" font-size="11" text-anchor="middle">44.5% &#9888;</text>
  <text x="457" y="205" fill="#6b7280" font-size="10" text-anchor="middle">10 Aug</text>
  <rect x="510" y="130" width="45" height="60" rx="4" fill="#3b82f6"/>
  <text x="532" y="124" fill="#52525b" font-size="11" text-anchor="middle">21.8%</text>
  <text x="532" y="205" fill="#6b7280" font-size="10" text-anchor="middle">17 Aug</text>
  <rect x="585" y="71" width="45" height="119" rx="4" fill="#3b82f6"/>
  <text x="607" y="65" fill="#52525b" font-size="11" text-anchor="middle">42.9%</text>
  <text x="607" y="205" fill="#6b7280" font-size="10" text-anchor="middle">24 Aug</text>
  <rect x="660" y="130" width="45" height="60" rx="4" fill="#3b82f6"/>
  <text x="682" y="124" fill="#52525b" font-size="11" text-anchor="middle">21.8%</text>
  <text x="682" y="205" fill="#52525b" font-size="10" text-anchor="middle">31 Aug (this wk)</text>
</svg>

This trend line has been recalculated in full using `Penalty Factor_rev`, so it now differs from the same chart in earlier reports (which used the original definition) — treat this as the new baseline going forward rather than a direct continuation.

## Reviewer Notes

HR: PCS14 fan fault reported since Monday (31 August) affecting one inverter module 1(0% Availability). Second inverter followed with same issue since Thursday and still ongoing. Both Inverter is currently at 0% Availability and PCS overall SOC at 0%. Sungrow to resolve the issue on 2026/09/08. 

PCS02 triggered a fan fault (2026/09/08) issue as well and currently affecting Inverter module 1 and Availability now at 50 %
