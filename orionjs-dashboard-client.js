/**
 * @method orion.links.add
 * @where {client}
 * @public
 * @return {Object}
 * 
 * Adds the orion dashboard link to the admin panel.
 * Note that the showDashboardTab Option defines whether
 * the ordering of the link.
 */
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
