/**
 * orion.dashboard namespace
 */

orion = orion;
orion.dashboard = {};
orion.dashboard._widgets = [];
orion.dashboard.registerWidget = function (data){
	check(data,Object);
	
	if (data.template === undefined || data.template == 'default') {
		data.template = ReactiveTemplates.get('orionDashboardWidget');
	}
	return orion.dashboard._widgets.push(data);
}; 

ReactiveTemplates.helpers('orionDashboard', {
	widgets: function () {
		return orion.dashboard._widgets;
	}
});
