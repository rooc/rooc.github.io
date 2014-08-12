requirejs.config({
	baseUrl: '/assets/js/',
	paths: {
		vendor:      'vendor',
		plugin:      'plugins',
		jquery:      'vendor/jquery',
		lodash:      'vendor/lodash',
		toastr:      'vendor/toastr',
		headjs:      'vendor/head.min',
		caniuse:     'vendor/caniuse',
		highlightjs: 'vendor/highlight',
		jsbin: "vendor/jsbin"
	}
});

requirejs(['main']);