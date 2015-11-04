Package.describe({
	name: 'rwatts:orionjs-dashboard',
	version: '0.1.0',
	// Brief, one-line summary of the package.
	summary: 'Adds a dashboard to Orion.',
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
        'orionjs:base@1.6.0',
        'orionjs:dictionary@1.6.0',
        'orionjs:collections@1.6.0',
        'nicolaslopezj:roles@2.0.1',
		'tmeasday:publish-counts@0.7.2'
    ]);
	api.imply('tmeasday:publish-counts');
    
    api.use(['orionjs:bootstrap@1.6.0','orionjs:materialize@1.6.0'],'client',{weak:true});
    
	api.addFiles('orionjs-dashboard.js');
    
    api.addFiles([
        'orionjs-dashboard-bootstrap.html',
        'orionjs-dashboard-materialize.html',
        'orionjs-dashboard-client.js',
        'orionjs-dashboard-api.js'
    ], 'client');
    
    api.export('orion');
});