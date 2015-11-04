/**
 * @where {client}
 * @public
 * @return {Object}
 * 
 * Declares the orion namespace
 */
orion = orion;

/**
 * @property orion.dashboard
 * @where {client}
 * @public
 * @return {Object}
 * 
 * Declares the orion.dashboard namespace and Object.
 */
orion.dashboard = {};

/**
 * @property orion.dashboard._widgets
 * @where {client}
 * @public
 * @return {[Object]}
 * 
 * Declares the orion.dashboard._widgets array. Which is an array
 * of objects that are 
 */
orion.dashboard._widgets = [];

/**
 * @method orion.dashboard.registerWidget
 * @param  {Object} data An object that contains the data to be passed to the template
 * @return {Object}      Returns an object with data for the widet.
 *
 * Registers the widget and passes the data along to the declared template.
 * Template must be defined within the Passed argument otherwise it will default
 * to the default widget template.
 */
orion.dashboard.registerWidget = function (data){
	check(data,Object);
	
	if (data.template === undefined || data.template == 'default') {
		data.template = ReactiveTemplates.get('orionDashboardWidget');
	}
	return orion.dashboard._widgets.push(data);
}; 

/**
 * @where {client}
 * @public
 * @return {none}
 * 
 * Pulls all widgets from the orion.dashboard._widgets array and passes them
 * along to the declared template.
 */
ReactiveTemplates.helpers('orionDashboard', {
	widgets: function () {
		return orion.dashboard._widgets;
	}
});
