// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      // Cada vez que hagas fetch a '/api-local/...' Vite lo mandará al json-server
      "/api-local": {
        target: "http://localhost:6969",
        changeOrigin: true,
        // Eliminamos el prefijo para que al json-server le llegue la ruta limpia
        rewrite: (path) => path.replace(/^\/api-local/, ""),
      },
    },
  },
});
