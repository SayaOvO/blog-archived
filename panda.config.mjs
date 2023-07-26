import { defineConfig } from '@pandacss/dev';

import typographyPreset from "pandacss-preset-typography";

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ['./src/**/*.{js,ts,svelte}'],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {}
	},
    presets: [
        typographyPreset(),
        "@pandacss/preset-panda"
    ],

	// The output directory for your css system
	outdir: 'styled-system'
});
