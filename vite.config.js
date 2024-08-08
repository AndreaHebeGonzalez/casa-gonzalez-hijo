// vite.config.js
import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import imagemin from 'vite-plugin-imagemin';

export default defineConfig({
    css: {
        postcss: {
            plugins: [
                autoprefixer(),
            ]
        },
        devSourcemap: true
    },
    plugins: [
        imagemin({
            webp: {
                quality: 95,
                method: 6,
            },
            svgo: {
                plugins: [
                    { name: 'removeDoctype', active: true },
                    { name: 'removeComments', active: true },
                ],
            },
        })
    ]
});