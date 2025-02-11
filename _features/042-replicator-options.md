---
title: Replicator options
reference: '/userguide/#replicator'
icon: '/assets/images/icons/repl_2_48.png'
excerpt: Toggles that changes the behavior of the tool
description:
    - Toggles that changes the behavior of the tool
# footer:
footer_images:
  - '/assets/images/icons/eyedrop_1_48.png'
category: Replicator and Eyedropper
--- 

* **Multi Target toggle**: continuos target picking.
* **Transform copy toggle**: copy reference object transformation.
* **Replace instances of target nodes**: replace all instances of the target. Does not work with groups.
* Behavior for groups:
  * **Source node group mode:** When enabled, the entire group that contains the source object will be selected. When disabled, only the picked object will be used.
  * **Target node group mode:** When enabled, the entire target group will be replaced with an instance of the source. If this checkbox is disabled, only the picked member of the target group will be replaced. Specially useful to quickly replace parts of a group.
