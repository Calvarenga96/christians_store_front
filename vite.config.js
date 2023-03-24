import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
});

const mod = import.meta.env.VITE_DEV_MODE;

module.exports = {
    server: {
        host: mod === "prod" ? "0.0.0.0" : "localhost",
    },
};
