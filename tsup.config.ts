import {defineConfig} from 'tsup'

export default defineConfig({
  format:[ 'cjs', 'esm'],
  entryPoints: ['src/index.ts'],
  shims:true,
  skipNodeModulesBundle: true,
  clean:true,
  dts: true,
})