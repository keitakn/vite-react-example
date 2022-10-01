import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({insertTypesEntry: true})],
  define: {
    'process.env': {}
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ViteReactExample',
      formats: ['es', 'umd'],
      fileName: (format) => `vite-react-example.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components', 'next/link'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
          'next/link': 'Link',
        },
      },
    },
  },
})
