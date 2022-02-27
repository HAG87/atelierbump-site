---
title: Random select
excerpt: Random node selection. By percent of the selected nodes or "Dot-Gap" pattern.
---

{{page.excerpt}}

![random-select](/assets/images/ui/random-select-ui.png)

## Modes

- Percent: Keep a random percentage of the total quantity of nodes in the current selection.
- Step: Performs a skip pattern in the selection.
- Subtract: Same as percent, but inverse: deselect a random percentage within selection.
- Pattern: Not a random mode; Instead it wil unselect nodes following a pattern.

### Values

- Percent: Percentage of nodes quantity to be selected
- Step: Quantity of objects to skip in the selection
- Subtract percent: Percentage of nodes quantity to be un-selected

{: .notice--primary}
>Note: The tool will respect the selection pick order.

### Pattern

- Keep: How much objects the pattern will keep
- Quit: Quantity of objects that will be deselected.

{: .notice--primary}
Example:
<br/>
Keep: 3; Quit: 2
<br/>
XXX--XXX--XXX--...

<a href="https://github.com/HAG87/maxscript-assorted/blob/master/release/random_select.zip" class="btn btn--primary">Download</a>
