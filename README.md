# Create Your Own npm Library and Publish 

1. **Create an Account on npm:**
   - Sign up at [npmjs.com](https://www.npmjs.com/)

2. **Login to npm:**
   - Run `npm adduser` and follow the prompts.
   - Verify your login with `npm whoami`.

3. **Initialize Your Project:**
   - Run `npm init -y` to create a package.json file.

4. **Install TypeScript and tsup:**
   - Run `sudo npm install -g typescript`
   - Run `npm install -D typescript tsup`

5. **Create Project Structure:**
   - Create `dist` and `src` folders.
   - Create a `tsconfig.json` file with the following content:

    ```json
    {
        "compilerOptions": {
            "strict": true,
            "noImplicitAny": true,
            "esModuleInterop": true,
            "strictNullChecks": true,
            "target": "ES2022",
            "moduleResolution": "Node10",
            "module": "CommonJS",
            "declaration": true,
            "isolatedModules": true,
            "noEmit": true,
            "outDir": "dist"
        },
        "include": ["src"],
        "exclude": ["node_modules"]
    }
    ```

6. **Create `tsup.config.ts` with the following content:**

    ```typescript
    import { defineConfig } from 'tsup';

    export default defineConfig({
      format: ['cjs', 'esm'],
      entryPoints: ['src/index.ts'],
      shims: true,
      skipNodeModulesBundle: true,
      clean: true,
      dts: true,
    });
    ```

7. **Update `package.json`:**
   - Your `package.json` should look like this:

    ```json
    {
      "name": "say-hello-hello-alan",
      "version": "0.0.1",
      "description": "first library",
      "main": "./dist/index.js",
      "module": "./dist/index.mjs",
      "types": "./dist/index.d.ts",
      "scripts": {
        "build": "tsup"
      },
      "keywords": [],
      "author": "alan liang",
      "license": "MIT",
      "devDependencies": {
        "tsup": "^8.0.2",
        "typescript": "^5.4.5"
      }
    }
    ```

8. **Create `index.ts` in `src`:**
   - Start creating classes, functions, etc., for your library. Keep `index.ts` simple.

9. **Use the Library in Your Project:**
   - To use the library in your project, add:
     ```javascript
     const { sayHello } = require('say-hello-hello-alan');
     ```

10. **Build Your Library:**
    - Run `npm run build` to transpile the TypeScript code to the `dist` folder.

11. **Create `.npmignore`:**
    - Make sure to exclude any files you don’t want to publish.

12. **Publish Your Library:**
    - Run `npm publish` to publish the library. Done!

