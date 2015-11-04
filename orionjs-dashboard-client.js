Tracker.autorun(function(){ 
	var index = Options.get('showDashboardTab') ? 1 : undefined;
	orion.links.add({
		index: index,
		identifier: 'orion-dashboard',
		title: 'Dashboard',
		routeName: 'orionDashboard',
		activeRouteRegex: 'orionDashboard',
		permission: 'orionDashboard'
	});
});
