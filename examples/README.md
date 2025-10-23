# GTM Custom Template Examples Intellisense implementation

This directory contains example implementation of the Intellisense for GTM Custom Templates for Google Tag Manager, for both the **✅ Recommended** and **🚫 Not Recommended** Options.
Please, use the **✅ Recommended Option**.

For detailed information on how to use these examples, please refer to the main [README](../README.md).


## `template.js` vs `template.tpl`

The `template.js` files in these examples contain only the sandboxed JavaScript code for the custom template.

In a complete GTM Custom Template, this JavaScript code is embedded within the `template.tpl` file. The `.tpl` file is the actual file you import into Google Tag Manager, as it contains not only the script but also the template's UI fields, permissions, and other metadata.