---
title: Energy Data Pipeline
tagline: An end-to-end Norwegian energy data pipeline that turns two public APIs into 60 monthly flow summaries across three connections and 25 months.
course: IND320 · NMBU
year: '2025'
role: Developer — data engineering, analysis & app
order: 2
repo: https://github.com/Mehdij1511/IND320-Mehdij1511
stack: [Python, Streamlit, Apache Spark, Cassandra, MongoDB, ENTSO-E API, NVE API, Plotly, pandas]
coverKind: graphic
accent: '#6d7a52'
metrics:
  - { value: '2', label: 'Public energy APIs' }
  - { value: '60', label: 'Monthly flow summaries' }
  - { value: '3', label: 'Cross-border connections' }
  - { value: '25', label: 'Months of data (Oct 2024–Oct 2026)' }
---

## The problem

Norway's power system produces huge amounts of open data — hydropower reservoir levels from **NVE** and cross-border electricity flows from **ENTSO-E**. The data is valuable, but scattered across APIs with different formats, time zones and granularities. The goal was to build a pipeline that collects it reliably, stores it at scale and makes it explorable.

## Architecture

```text
ENTSO-E API ─┐
             ├─▶ Python loaders ─▶ Cassandra ─▶ Spark (aggregation) ─▶ MongoDB ─▶ Streamlit
NVE API ─────┘
```

- **Ingestion** — Python clients for the ENTSO-E Transparency Platform and the NVE reservoir API, with pagination, time-zone handling and retries.
- **Raw storage** — time series land in **Apache Cassandra**, partitioned for fast range queries.
- **Processing** — **Apache Spark** reads from Cassandra and aggregates hourly flows into monthly totals per interconnector and direction.
- **Serving** — processed results are written to **MongoDB** for fast lookups by the app.
- **App** — a multi-page **Streamlit** dashboard with data tables, interactive Plotly charts and a reservoir snapshot.

## Analysis

The interactive chart above shows monthly energy flows across the **SE3 → NO4** interconnector (Sweden ↔ central Norway). Clear seasonal patterns emerge: Norway imports heavily in late spring and summer when Swedish supply is abundant, and exports more in winter and early spring as reservoir levels and prices shift.

## Engineering practices

- Secrets kept out of git via `secrets.toml` and an example template
- Reproducible environment with a **dev container** and `requirements.txt`
- Modular loaders (`entsoe_data.py`, `nve_data.py`, `cassandra_data.py`, `mongo_data.py`) that can run independently
- Notebooks documenting each project part, exported to PDF

## What I learned

- Designing a pipeline across heterogeneous storage engines — and when each one fits
- Working with real, messy public APIs at scale
- Distributed aggregation with Spark
- Shipping analysis as a product people can click through, not just a notebook
