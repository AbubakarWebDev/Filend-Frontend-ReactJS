// vite.config.js
import { nodePolyfills } from "file:///F:/fyp/implementation/filend_complete/Filend-Frontend-ReactJS/node_modules/vite-plugin-node-polyfills/dist/index.js";
import pluginRewriteAll from "file:///F:/fyp/implementation/filend_complete/Filend-Frontend-ReactJS/node_modules/vite-plugin-rewrite-all/dist/index.mjs";
import { defineConfig, transformWithEsbuild } from "file:///F:/fyp/implementation/filend_complete/Filend-Frontend-ReactJS/node_modules/vite/dist/node/index.js";
import react from "file:///F:/fyp/implementation/filend_complete/Filend-Frontend-ReactJS/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    {
      name: "treat-js-files-as-jsx",
      async transform(code, id) {
        if (!id.match(/src\/.*\.js$/))
          return null;
        return transformWithEsbuild(code, id, {
          loader: "jsx",
          jsx: "automatic"
        });
      }
    },
    nodePolyfills({
      // To exclude specific polyfills, add them to this list.
      exclude: [
        "fs"
        // Excludes the polyfill for `fs` and `node:fs`.
      ],
      // Whether to polyfill specific globals.
      globals: {
        Buffer: true,
        // can also be 'build', 'dev', or false
        global: true,
        process: true
      },
      // Whether to polyfill `node:` protocol imports.
      protocolImports: true
    }),
    react(),
    pluginRewriteAll()
  ],
  optimizeDeps: {
    force: true,
    esbuildOptions: {
      loader: {
        ".js": "jsx"
      }
    }
  },
  server: {
    port: 3008
  },
  preview: {
    port: 3008
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxmeXBcXFxcaW1wbGVtZW50YXRpb25cXFxcZmlsZW5kX2NvbXBsZXRlXFxcXEZpbGVuZC1Gcm9udGVuZC1SZWFjdEpTXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJGOlxcXFxmeXBcXFxcaW1wbGVtZW50YXRpb25cXFxcZmlsZW5kX2NvbXBsZXRlXFxcXEZpbGVuZC1Gcm9udGVuZC1SZWFjdEpTXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9GOi9meXAvaW1wbGVtZW50YXRpb24vZmlsZW5kX2NvbXBsZXRlL0ZpbGVuZC1Gcm9udGVuZC1SZWFjdEpTL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgbm9kZVBvbHlmaWxscyB9IGZyb20gJ3ZpdGUtcGx1Z2luLW5vZGUtcG9seWZpbGxzJztcclxuaW1wb3J0IHBsdWdpblJld3JpdGVBbGwgZnJvbSAndml0ZS1wbHVnaW4tcmV3cml0ZS1hbGwnO1xyXG5cclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCB0cmFuc2Zvcm1XaXRoRXNidWlsZCB9IGZyb20gJ3ZpdGUnO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICd0cmVhdC1qcy1maWxlcy1hcy1qc3gnLFxyXG4gICAgICBhc3luYyB0cmFuc2Zvcm0oY29kZSwgaWQpIHtcclxuICAgICAgICBpZiAoIWlkLm1hdGNoKC9zcmNcXC8uKlxcLmpzJC8pKSByZXR1cm4gbnVsbFxyXG5cclxuICAgICAgICAvLyBVc2UgdGhlIGV4cG9zZWQgdHJhbnNmb3JtIGZyb20gdml0ZSwgaW5zdGVhZCBvZiBkaXJlY3RseVxyXG4gICAgICAgIC8vIHRyYW5zZm9ybWluZyB3aXRoIGVzYnVpbGRcclxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtV2l0aEVzYnVpbGQoY29kZSwgaWQsIHtcclxuICAgICAgICAgIGxvYWRlcjogJ2pzeCcsXHJcbiAgICAgICAgICBqc3g6ICdhdXRvbWF0aWMnLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIG5vZGVQb2x5ZmlsbHMoe1xyXG4gICAgICAvLyBUbyBleGNsdWRlIHNwZWNpZmljIHBvbHlmaWxscywgYWRkIHRoZW0gdG8gdGhpcyBsaXN0LlxyXG4gICAgICBleGNsdWRlOiBbXHJcbiAgICAgICAgJ2ZzJywgLy8gRXhjbHVkZXMgdGhlIHBvbHlmaWxsIGZvciBgZnNgIGFuZCBgbm9kZTpmc2AuXHJcbiAgICAgIF0sXHJcbiAgICAgIC8vIFdoZXRoZXIgdG8gcG9seWZpbGwgc3BlY2lmaWMgZ2xvYmFscy5cclxuICAgICAgZ2xvYmFsczoge1xyXG4gICAgICAgIEJ1ZmZlcjogdHJ1ZSwgLy8gY2FuIGFsc28gYmUgJ2J1aWxkJywgJ2RldicsIG9yIGZhbHNlXHJcbiAgICAgICAgZ2xvYmFsOiB0cnVlLFxyXG4gICAgICAgIHByb2Nlc3M6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIFdoZXRoZXIgdG8gcG9seWZpbGwgYG5vZGU6YCBwcm90b2NvbCBpbXBvcnRzLlxyXG4gICAgICBwcm90b2NvbEltcG9ydHM6IHRydWUsXHJcbiAgICB9KSxcclxuXHJcbiAgICByZWFjdCgpLFxyXG5cclxuICAgIHBsdWdpblJld3JpdGVBbGwoKSxcclxuICBdLFxyXG5cclxuICBvcHRpbWl6ZURlcHM6IHtcclxuICAgIGZvcmNlOiB0cnVlLFxyXG4gICAgZXNidWlsZE9wdGlvbnM6IHtcclxuICAgICAgbG9hZGVyOiB7XHJcbiAgICAgICAgJy5qcyc6ICdqc3gnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBzZXJ2ZXI6IHtcclxuICAgIHBvcnQ6IDMwMDgsXHJcbiAgfSxcclxuICBwcmV2aWV3OiB7XHJcbiAgICBwb3J0OiAzMDA4XHJcbiAgfVxyXG59KTsiXSwKICAibWFwcGluZ3MiOiAiO0FBQW1YLFNBQVMscUJBQXFCO0FBQ2paLE9BQU8sc0JBQXNCO0FBRTdCLFNBQVMsY0FBYyw0QkFBNEI7QUFDbkQsT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNLFVBQVUsTUFBTSxJQUFJO0FBQ3hCLFlBQUksQ0FBQyxHQUFHLE1BQU0sY0FBYztBQUFHLGlCQUFPO0FBSXRDLGVBQU8scUJBQXFCLE1BQU0sSUFBSTtBQUFBLFVBQ3BDLFFBQVE7QUFBQSxVQUNSLEtBQUs7QUFBQSxRQUNQLENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRjtBQUFBLElBRUEsY0FBYztBQUFBO0FBQUEsTUFFWixTQUFTO0FBQUEsUUFDUDtBQUFBO0FBQUEsTUFDRjtBQUFBO0FBQUEsTUFFQSxTQUFTO0FBQUEsUUFDUCxRQUFRO0FBQUE7QUFBQSxRQUNSLFFBQVE7QUFBQSxRQUNSLFNBQVM7QUFBQSxNQUNYO0FBQUE7QUFBQSxNQUVBLGlCQUFpQjtBQUFBLElBQ25CLENBQUM7QUFBQSxJQUVELE1BQU07QUFBQSxJQUVOLGlCQUFpQjtBQUFBLEVBQ25CO0FBQUEsRUFFQSxjQUFjO0FBQUEsSUFDWixPQUFPO0FBQUEsSUFDUCxnQkFBZ0I7QUFBQSxNQUNkLFFBQVE7QUFBQSxRQUNOLE9BQU87QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUVBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsRUFDUjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
