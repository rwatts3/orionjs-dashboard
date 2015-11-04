Options.init('showDashboardTab', true);

if (Options.get('showDashboardTab') == true) {
	Options.set('adminHomeRoute', 'orionDashboard');
}

ReactiveTemplates.request('orionDashboard', 'orion_dashboard_bootstrap');

if (_.has(Package, 'orionjs:materialize')) {
	ReactiveTemplates.set('orionDashboard','orion_dashboard_materialize');
}

ReactiveTemplates.request('orionDashboardWidget', 'orion_dashboard_default_widget_bootstrap');

if (_.has(Package, 'orionjs:materialize')) {
	ReactiveTemplates.set('orionDashboardWidget','orion_dashboard_default_widget_materialize');
}

/**
 * Initialize orionDashboard Roles
 */

Roles.registerAction('orionDashboard', true);

/**
 * Register the orionDashboard route
 */
RouterLayer.route('/admin/dashboard', {
	layout: 'layout',
	template: 'orionDashboard',
	name: 'orionDashboard',
	reactiveTemplates: true
});

/**
 * Dashboard Security
 */
orion.accounts.addProtectedRoute('orionDashboard');
