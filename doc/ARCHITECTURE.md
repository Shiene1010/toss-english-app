# Engineering & Build System Architecture

## 1. Local Environment Parameters (M1 Mac Mini)
- **Runtime**: Node.js `v22.x.x` / NPM `11.x.x`
- **IDE**: Visual Studio Code (Native Apple Silicon Build)
- **Required Extensions**: Live Server, Prettier, Tailwind CSS IntelliSense

## 2. Compilation Matrix (Vite)
To optimize performance and code security for the 30M+ Toss user base, the source directory must go through a production compiler.
- **Compiler**: Vite v6+
- **Output Mode**: Modern ES Modules (`"type": "module"` initialized).
- **Asset Directory Rule**: Relative pathways (`base: './'`) enforced via `vite.config.js` to eliminate 404 resource asset mapping failures on distributed cloud networks.

## 3. Runtime Event Binding Solution
To prevent Vite's tree-shaking minification matrix from stripping inline functional scopes, raw HTML inline events (`onclick`) are forbidden. 
All actions must be attached using standard decoupled JavaScript event hooks inside a `DOMContentLoaded` lifecycle listener wrapper:

```javascript
document.getElementById('targetId').addEventListener('click', functionalCallback);
```
