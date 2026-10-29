---
title: Dairy Supply Chain Optimisation
tagline: Linear programming, routing heuristics and production levelling for TINE Brumunddal — +9.7% daily contribution margin at the bottleneck.
course: IND210 · NMBU
year: '2026'
role: Lead analyst — linear programming
order: 4
repo: https://github.com/Mehdij1511/Industrial-management-IND210
stack: [Python, pandas, NumPy, SciPy, HiGHS, Google Routes API, GeoJSON]
coverKind: graphic
accent: '#f2b705'
metrics:
  - { value: '+9.7%', label: 'Daily contribution margin' }
  - { value: '≈29.6k', label: 'NOK per day' }
  - { value: '2-opt', label: 'Routing heuristic' }
  - { value: '100%', label: 'Driver-rest compliance' }
team: [Mehdi Jamali, Daniel Yang Tsan, Oliver Tschudi Madsen, Helena Liepina Vollestad, Victoria Wallin]
---

## The problem

TINE Brumunddal faces a classic operations challenge: fluctuating raw-milk supply, limited processing capacity and a fragmented farm-collection network. One step — the **DA-101 pasteurisation line** — is the bottleneck, and some products use scarce bottleneck time without earning competitive margins.

> Rather than asking *"how do we produce more?"*, we asked *"what is the true constraint, and what creates the most value per bottleneck hour?"*

## 01 — Product mix with linear programming

I led the optimisation model. Production decisions were formulated as a **linear program** solved with **HiGHS** via SciPy: maximise total contribution margin subject to line capacity, supply and process constraints.

- Ranked products by **contribution margin per bottleneck hour**
- Identified low-margin products (e.g. *mellommelk*) consuming DA-101 capacity
- Reallocated capacity to higher-value products

**Result:** about **+9.7 % daily contribution margin** — roughly **29,625 NOK per day** — a textbook Theory of Constraints win.

## 02 — Route optimisation

Milk collection routes were improved with a **2-opt heuristic** on real road distances from the Google Routes API, while respecting truck capacity and mandatory driver rest rules. The outcome: shorter total distance, better vehicle utilisation and full regulatory compliance.

## 03 — Production levelling (Heijunka)

Supply variability creates bullwhip effects downstream. We simulated a **Heijunka** levelling strategy — smoothing output and diverting surplus milk into storable products — to stabilise production and inventory.

## What I learned

- Bottlenecks define system performance — improve the constraint first
- The right product mix beats more volume
- Logistics is a strategic lever, not just a cost line
- Optimisation is valuable only when it becomes an operational decision
