# GTM Sandboxed API IntelliSense


This guide explains how to use the provided TypeScript Declaration Files (`.d.ts`) to enable IntelliSense (autocompletion and hover-documentation) for Google Tag Manager's Sandboxed JavaScript APIs in your code editor.

## Now Available as an npm Package!

You can now install the type definitions directly from npm:

```bash
pnpm install -D stape-gtm-api-types
# or
npm install --save-dev stape-gtm-api-types
```

This is the recommended way to keep your GTM API types up to date.

There are two type definition files included:
- `server-gtm-sandboxed-apis.d.ts`: For **Server-side** GTM templates.
- `web-gtm-sandboxed-apis.d.ts`: For **Web** GTM templates.

---

## What Are These Files?

Google Tag Manager's custom templates run in a "sandboxed" JavaScript environment that has a special set of APIs (like `copyFromDataLayer` or `sendHttpRequest`). Standard code editors don't know about these custom APIs, so they can't provide any help as you code.

These `.d.ts` files act as a guide for your editor. They define the signatures, parameters, and documentation for every GTM API, effectively teaching your editor how the GTM environment works.


https://github.com/user-attachments/assets/868bbe2c-3e28-47b1-b195-cdfc509ec340


---

## How to Use


After installing the package, you can reference the type definitions in your project as follows:

### Method 1: Using a Triple-Slash Directive (File-by-File)

Add a special comment to the **very top** of each JavaScript file where you want IntelliSense:

```javascript
/// <reference types="stape-gtm-api-types/web-gtm-sandboxed-apis" />
// or
/// <reference types="stape-gtm-api-types/server-gtm-sandboxed-apis" />
```

Choose the appropriate type for your environment (Web or Server).

### Method 2: Using `jsconfig.json` or `tsconfig.json`

Add the package to your `jsconfig.json` or `tsconfig.json`:

```json
{
  "compilerOptions": {
  "typeRoots": ["./node_modules/stape-gtm-api-types"]
  },
  "include": ["**/*"]
}
```

Reload your editor if IntelliSense does not appear immediately.

---

## Editor-Specific Instructions


### Visual Studio Code

Both `jsconfig.json` and the triple-slash directive methods work perfectly. The npm package approach is recommended for easier updates and maintenance.

### JetBrains IDEs (WebStorm, IntelliJ IDEA, etc.)

JetBrains IDEs will automatically index type definitions from installed npm packages. No manual copying required.

### Other Editors (Sublime Text, Neovim, etc.)

Other editors that support TypeScript/JavaScript language servers will automatically detect type definitions from npm packages.

---

## Examples

For tag configuration examples, please refer to the [/examples](./examples) folder.

---

## Authors
Created and developed by **Giovani Ortolani Barbosa** ([LinkedIn](https://linkedin.com/in/giovani-ortolani-barbosa/), [GitHub](https://github.com/giovaniortolani)).
