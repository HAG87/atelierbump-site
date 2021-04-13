---
title: DesignToolBox troubleshooting
excerpt: Fix common problems.
permalink: /docs/troubleshooting
---

## Reset configuration

Run one of this command options in 3ds Max listener to reset the plugin configuration to factory default.

```
-- 3dsMax without Admin rights
copyFile "$Scripts/DesignToolbox/dstlbx_clean.mse" "@$Scripts/DesignToolbox/dstlbx_clean.mse" @"$UserScripts\startup\dstlbx_clean.mse"
fileIn ( @"$UserScripts\startup\dstlbx_clean.mse" )

-- 3dsMax executed with admin rights
fileIn ("$Scripts/DesignToolbox/dstlbx_clean.mse")
```