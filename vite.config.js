import copy from 'rollup-plugin-copy';

export default {
	plugins: [
		copy({ // copy over the calcite-components assets
			targets: [
				{
					src: './node_modules/@esri/calcite-components/dist/calcite/assets',
					dest: './public'
				},
			],
			hook: 'writeBundle'
		}),
	]
}
