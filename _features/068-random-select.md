---
title: Random select
reference: '/tools/random-select'
icon: '/assets/images/icons/rndSel_48.png'
excerpt: Select random nodes.
description:
    - Several options for randomizing a selection set.
# footer:
# footer_images:
category: Object Utilities
---

1. make a selection of objects. The list of objects follows the selection order.
2. Select the algorithm:
    - **Percent**: Keep a random percentage of the total quantity of nodes in the current selection.
    - **Set**: Group the selection in sets of (N) items, and randomly deselect some of these sets.
    - **Subtract**: Randomly reduce the selection by the given percentage.
    - **Pattern**: Reduction pattern determined by the "Keep" and "Quit" values that sets how much objects will be skipped or flagged for deselect.
3. Each iteration works over the original selection. Use the "re-select objects" to update it.
