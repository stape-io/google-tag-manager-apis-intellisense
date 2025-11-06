# GTM Sandboxed API IntelliSense

This guide explains how to use the provided TypeScript Declaration Files (`.d.ts`) to enable IntelliSense (autocompletion and hover-documentation) for Google Tag Manager's Sandboxed JavaScript APIs in your code editor.

There are two file definitions:
- `server-gtm-sandboxed-apis.d.ts`: For **Server-side** GTM templates.
- `web-gtm-sandboxed-apis.d.ts`: For **Web** GTM templates.

## What Are These Definitions?

Google Tag Manager's custom templates run in a "sandboxed" JavaScript environment that has a special set of APIs (like `copyFromDataLayer` or `sendHttpRequest`). Standard code editors don't know about these custom APIs, so they can't provide any help as you code.

These  files act as a guide for your editor. They define the signatures, parameters, and documentation for every GTM API, effectively teaching your editor how the GTM environment works.


https://github.com/user-attachments/assets/868bbe2c-3e28-47b1-b195-cdfc509ec340

---

## How to Use

### ✅ Recommended option

This is the recommended option to keep your GTM API types **automatically updated**.

1. Install the type definitions directly using a package manager like `npm` or `pnpm` in the root of the folder that contains your GTM template JavaScript file:
    ```bash
    pnpm install -D stape-gtm-api-types
    # or
    npm install --save-dev stape-gtm-api-types
    ```

    If you don't have one of them installed, you can follow the installation instructions. Choose your prefered package manager and install one of them:
      - [`npm`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
      - [`pnpm`](https://pnpm.io/installation)

2. After installing the package, you can reference the type definitions in your project as follows:

    #### Method 1: Using a Triple-Slash Directive (File-by-File)

    This method is useful if you prefer not to create a `jsconfig.json` file (as described in the Method 2 below).

    You must add a special comment to the **very top** of each JavaScript file containing GTM Sandboxed API code where you want IntelliSense.

    Add a special comment to the **very top** of each JavaScript file where you want IntelliSense.
    Make sure to add it exactly as is (with triple slashes).

    - For **Web** GTM Sandboxed APIs:
    ```javascript
    /// <reference types="stape-gtm-api-types/web-gtm-sandboxed-apis" />

    // Your GTM template code starts here...
    const copyFromDataLayer = require('copyFromDataLayer');
    ```

    - For **Server** GTM Sandboxed APIs:
    ```javascript
    /// <reference types="stape-gtm-api-types/server-gtm-sandboxed-apis" />

    // Your GTM template code starts here...
    const getAllEventData = require('getAllEventData');
    ```

    #### Method 2: Using `jsconfig.json` (Project-Wide)

    Create a `jsconfig.json` containing the following content in your project's root directory where the code of your template is located.

    - For **Web** GTM Sandboxed APIs:
    ```json
    {
      "compilerOptions": {
        "paths": {
          "*": ["./node_modules/stape-gtm-api-types/web-gtm-sandboxed-apis"]
        }
      },
      "include": ["**/*"]
    }
    ```

    - For **Server** GTM Sandboxed APIs:
    ```json
    {
      "compilerOptions": {
        "paths": {
          "*": ["./node_modules/stape-gtm-api-types/server-gtm-sandboxed-apis"]
        }
      },
      "include": ["**/*"]
    }
    ```

3. Reload your editor if IntelliSense does not appear immediately.

4. Make sure to periodically run the following command in the folder that contains your GTM template JavaScript files:

```bash
npm update
# or
pnpm update
```

### 🚫 Not Recommended Option

> ⚠️ If you chose this option, **you will not receive automatic updates**, and you'll have to manually update the `.d.ts` files by copying and pasting them from this GitHub repository.

Choose the file definition (`.d.ts` file) that corresponds to the environment you are developing for (Web or Server). Then, choose one of the following methods to activate IntelliSense.

#### Method 1: Using a Triple-Slash Directive (File-by-File)

This method is useful if you prefer not to create a `jsconfig.json` file.

You must add a special comment to the **very top** of each JavaScript file where you want IntelliSense.

1.  **Place the `.d.ts` file** in your project directory (e.g., in the same folder as your `.js` file).
2.  **Add the following comment** to the first line of your JavaScript file containing GTM Sandboxed API code where you want IntelliSense. Make sure to add it exactly as is (with triple slashes):
    - For **Web** GTM Sandboxed APIs:
    ```javascript
    /// <reference path="./web-gtm-sandboxed-apis.d.ts" />

    // Your GTM template code starts here...
    const copyFromDataLayer = require('copyFromDataLayer');
    ```

    - For **Server** GTM Sandboxed APIs:
    ```javascript
    /// <reference path="./server-gtm-sandboxed-apis.d.ts" />

    // Your GTM template code starts here...
    const getAllEventData = require('getAllEventData');
    ```
3.  **Adjust the path**: make sure the `path` in the comment correctly points to the location of your `.d.ts` file relative to your JavaScript file.

#### Method 2: Using `jsconfig.json`

This is a modern and reliable method for any project, even if it's just a single file. It tells your editor to treat the entire folder as a JavaScript project.

1.  **Place the `.d.ts` file** in your project's root directory.
2.  **Create a `jsconfig.json` file** in the same root directory.
3.  **Add the following content** to your `jsconfig.json`:
    ```json
    {
      "compilerOptions": {
        "target": "esnext"
      },
      "include": ["**/*"]
    }
    ```
4.  **Reload Your Editor**: if IntelliSense doesn't appear immediately, restart your editor or use the "Reload Window" command.

---

## Editor-Specific Instructions


### Visual Studio Code

Both methods work perfectly. The **Method 2** is recommended for easier updates and maintenance.

### JetBrains IDEs (WebStorm, IntelliJ IDEA, etc.)

JetBrains IDEs will automatically index type definitions from installed `npm` packages. No manual copying required.

### Other Editors (Sublime Text, Neovim, etc.)

Other editors that support TypeScript/JavaScript language servers will automatically detect type definitions from `npm` packages.

---

## Examples

For tag configuration examples, please refer to the [/examples](./examples) folder.

---

## Authors
Created and developed by **Giovani Ortolani Barbosa** ([LinkedIn](https://linkedin.com/in/giovani-ortolani-barbosa/), [GitHub](https://github.com/giovaniortolani)).


## Open Source

The **GTM Sandboxed API IntelliSense** is maintained by the [Stape Team](https://stape.io/) under the Apache 2.0 license.
