---
title: Oil Spill Simulation
tagline: A mesh-based numerical model of how an oil slick spreads through a coastal bay — and how much of it reaches the fishing grounds.
course: INF202 · NMBU
year: '2024'
role: Developer — modelling, simulation & visualisation
order: 1
repo: https://github.com/Mehdij1511/OilSpillSimulation-Project
stack: [Python, NumPy, meshio, Matplotlib, OpenCV, TOML, pytest]
cover: /projects/oil-spill-simulation/plot_0.250.png
coverKind: image
metrics:
  - { value: '2D', label: 'Triangular mesh domain' }
  - { value: '500', label: 'Time steps per run' }
  - { value: 't = 0 → 0.5', label: 'Simulated interval' }
  - { value: '3', label: 'Test suites (pytest)' }
---

## The problem

Oil spills cause severe ecological and economic damage. Once oil is in the water it moves with the surrounding flow and can spread across large areas — threatening marine life, coastlines and fishing zones. The practical questions are simple to ask and hard to answer:

- Where does the oil go?
- How fast does it spread?
- How much of it reaches a sensitive area?
- Can we show this in a way decision-makers understand?

## Approach

I represented the bay as a **triangular mesh** loaded from a `.msh` file. Every triangle is a small computational cell that stores how much oil it currently holds. At each time step, neighbouring cells exchange oil through their shared edges, driven by a velocity field and the geometry of the edge — a finite-volume style upwind scheme.

1. Load the mesh and build cell objects
2. Initialise oil around a source point
3. Pre-compute neighbour relationships and edge normals
4. Step the oil distribution forward in time
5. Integrate the amount of oil inside the **fishing-grounds** polygon
6. Write frames, an animation and a log for analysis

> The goal was not a perfect ocean model, but a clear, testable one that shows how computation can support environmental risk decisions.

## Engineering

The code is split into small, testable modules — `mesh.py` for geometry, `cells.py` for cell types, `Simulator.py` for time stepping and `Visualizer.py` for plots and video. Runs are configured with **TOML** files and launched from a CLI with `argparse`; every run writes a structured log. A **pytest** suite covers mesh loading, cell geometry and the simulator.

```bash
python main.py --config input.toml
```

## What I learned

- Turning a physical process into a discrete numerical scheme
- Mesh-based modelling and neighbour graphs
- Time-stepping stability and conservation
- Writing scientific code that is configurable, logged and tested
- Communicating results visually — frames and video, not just numbers
