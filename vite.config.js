import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const mod = import.meta.env.VITE_DEV_MODE;

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: mod === "prod" ? "0.0.0.0" : "localhost",
    },
});
