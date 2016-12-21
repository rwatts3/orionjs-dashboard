Package.describe({
	name: 'rwatts:orionjs-dashboard',
	version: '0.1.3',
	// Brief, one-line summary of the package.
	summary: 'Adds a Dashboard and Widgets to Orion.',
	// URL to the Git repository containing the source code for this package.
	git: 'https://github.com/rwatts3/orionjs-dashboard',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.2.1');
	api.use([
		'ecmascript',
    'meteor-platform',
    'check',
    'orionjs:core@1.6.0',
    'nicolaslopezj:roles@2.0.1',
		'tmeasday:publish-counts@0.7.2',
    'fortawesome:fontawesome@4.5.0'
    ]);
	api.imply(['tmeasday:publish-counts','orionjs:core']);

  api.use(['orionjs:bootstrap@1.6.0','orionjs:materialize@1.6.0'],'client',{weak:true});

	api.addFiles('src/orionjs-dashboard.js');

  api.addFiles([
    'src/orionjs-dashboard.css',
    'src/orionjs-dashboard-bootstrap.html',
    'src/orionjs-dashboard-bootstrap.css',
    'src/orionjs-dashboard-materialize.html',
    'src/orionjs-dashboard-client.js',
    'src/orionjs-dashboard-api.js'
  ], 'client');

  api.export('orion');
});

Package.onTest(function (api) {
	api.use([
		'rwatts:orionjs-dashboard','orionjs:core','kadira:flow-router','kadira:blaze-layout','aldeed:tabular','mike:mocha-package'
	]);
	api.addFiles(['tests/orionjs-dashboard-tests.js']);
});

// meteor test-packages --velocity --driver-package respondly:test-reporter rwatts:orionjs-dashboard
