/// <reference types="vite/client" />
/// <reference types="vitest" />
/// <reference types="vitest/globals" />

// import matchers from '@testing-library/jest-dom/matchers'
// import AutoImport from 'unplugin-auto-import/vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

// @ts-nocheck
export default defineConfig({
	build: {
		sourcemap: true,
	},

	plugins: [
		vue(),
		// AutoImport({
		// 	imports: [
		// 		'vue',
		// 		// could add 'vue-router' or 'vitest', whatever else you need.
		// 	],
		// }),
	],

	resolve: {
		alias: {
			'@/': resolve(__dirname, '/'),
		},
	},

	test: {
		environment: 'jsdom',
		exclude: [
			'node_modules',
			'test/e2e/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
		],
		globals: true,
		include: ['**/*.spec.(js|jsx|ts|tsx)'],
		includeSource: ['**/*.{js,ts}'],
		setupFiles: './tests/test.config.ts',
	},
})
