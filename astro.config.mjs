// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import path from 'path';

// https://astro.build/config
export default defineConfig({
    output: 'server',
    integrations: [react(), tailwind()],
    vite: {
        resolve: {
            alias: {
                '@': path.resolve('./src'),
            },
        },
        esbuild: {
            loader: 'jsx',
            include: /src\/.*\.[jt]sx?$/,
            exclude: [],
        },
        optimizeDeps: {
            esbuildOptions: {
                loader: {
                    '.js': 'jsx',
                },
            },
        },
    },
});
