import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), vue(), vueDevTools(), tailwindcss()],
  // resolve: {
  //   alias: {
  //     '@': fileURLToPath(new URL('./src', import.meta.url)),
  //     '@pokemon': fileURLToPath(new URL('./src/modules/pokemon', import.meta.url)),
  //   },
  // },
  esbuild: {
    target: 'es2022', // Asegura compatibilidad con .at()
  },
});
