# Orionjs Dashboards `v0.1.0`
![](https://img.shields.io/badge/Version-0.1.0-orange.svg) ![](https://img.shields.io/badge/License-MIT-blue.svg)   

This package brings a set of api tools as well as a new newspace to orion. `orion.dashboard`. With this package you will be able to 

This package is an extension of **Orion** and has a dependency on the `orionjs:base` package along with others.

## Instructions
1. Install the package
```sh
$ meteor add rwatts:orionjs-dashboard
```
2. Register your widget by following **Example 1 Below** `Client`
3. Register access to the dashboard by setting `Options.set('showDashboard', true)` within your lib directory. If you have used the Example project from the Orion repository this will typically be in the *lib/options.js* file.
4. If using the default widget template follow the instructions in **Example 1 Below**
5. Navigate to `/admin/dashboard/` to see your new widget.

## Register a custom Widget
1. From the instructions above register a new widget `Client`. 
2. In your widget declaration pass your template as the template key.
3. Ensure that the values you want to display in your widget is passed in the registration as individual keys. 

>**Note** `orion.dashboard.registerWidget` must be passed as an object, and template is a required field. If you do not set the template, it will default to your themes default template.

## Tips
For the best experience, if utilizing the default widgets, you will need to use `tmeasday:publish-counts` to publish the total Count of a collections records. See their documentation for instructions on publishing the record counts.

> A tutorial will be provided in the documentation demonstrating how to complete this task.

## Examples
### Example 1
```js
// Client
// Basic options passed to the default template
orion.dashboard.registerWidget({
	template: 'default', // use default if you have not created a custom widget
	count: Counts.get('somePublication'), // you must publish the counts from within the publication for them to be accessible from the widget.
	baseColor: 'teal', // the base color of the widget
	textColor: 'white', // sets the text color to white
	label: 'Users', // sets the label of the widget
	icon: 'books', // sets the icon for materialize use google's icon set for bootstrap use font awesome icons.
	path: '/admin/users/' // sets the path the widget will navigate to upon clicking on it
});
```

## API
The full API is available [here](https://github.com/rwatts3/orionjs-dashboard/api.md).

## TODO
- v0.1.1 *next*
	- Write default widget for the `orionjs:bootstrap` theme.
