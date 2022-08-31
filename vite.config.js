import { sveltekit } from '@sveltejs/kit/vite';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import nodePolyfills from 'rollup-plugin-polyfill-node';

/**
 * Borrowed from https://stackoverflow.com/questions/69286329/polyfill-node-os-module-with-vite-rollup-js/70666018#70666018
 * Tryed to polyfill modules in the browser, not working
 */

const defineConfig ={
	plugins: [sveltekit()]};
// 	 resolve: {
// 	   alias: {
// 		 crypto: "crypto-browserify",
// 	   },
// 	 },
// 	 build: {
// 	   target: "es2020",
// 	   rollupOptions: {
// 		 plugins: [nodePolyfills({ crypto: true })],
// 	   },
// 	 }
//    };

  export default defineConfig;