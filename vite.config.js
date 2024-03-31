// Custom settings needed for gh-pages compatibility
import { defineConfig } from "vite";

export default defineConfig({
    base: "./",
    build: {
        outDir: "build",
    },
});
