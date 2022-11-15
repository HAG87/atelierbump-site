---
title: DesignToolBox troubleshooting
excerpt: Fix common problems
permalink: /docs/troubleshooting
---

## Reset configuration

Run this command in 3ds Max listener to reset the plugin configuration to factory default.

```mxs
-- This script will delete the plugin stored configuration and Menu. It will also reset the ribbon to factory defaults.
fileIn ("$UserScripts/startup/dstlbx_clean.ms")

```

## To install *DesignToolBox* under multiple 3ds Max versions

Run the installer each time choosing the corresponding 3ds max installation folder. Opt-out when the installer prompts to uninstall previous version.

## Uninstall

When you want to uninstall the tool, the installer will only remove the last iteration.
The procedure in this case is to **re-install the plugin in the 3ds Max version you want to remove it, and then uninstall again**.

## For old refGuides users

If you are upgrading from refGuides (prior to version 3.1), you will need to uninstall it first. some features needs to be manually removed so, please, follow this steps:

- Close 3ds Max if its open.
- Uninstall refGuides form Control Panel.
- Open Max and remove refGuides Ribbon Tab.
- Install DesignToolBox.

{% include video id="7BGmn4DNlPs" provider="youtube" %}

## Manual remove

<script src="https://gist.github.com/HAG87/9719331c48738c158f493de13290bc83.js"></script>
