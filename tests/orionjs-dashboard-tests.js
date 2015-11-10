/*******************
 * Client Testing  *
 *******************/
if(Meteor.isClient){
	describe('Dashboard', function () {
		it('orion.dashboard Should be instantiated.', function () {
			var test = result = orion.dashboard;
			chai.assert.equal(test, result);
		}),
		it('orion.dashboard Should be an object.', function () {
			var test = orion.dashboard;
			chai.assert.typeOf(test, 'object');
		})
	});
	describe('Dashboard Widgets', function () {
		it('orion.dashboard._widgets Should be an array', function () {
			var test = orion.dashboard._widgets;
			chai.assert.typeOf(test, 'array');
		}),
		it('orion.dashboard.registerWidget Should register a new widget', function () {
			orion.dashboard.registerWidget({
				template: 'default',
				publication: 'allProducts',
				count: 'totalProducts',
				label: 'Products',
				path: '/admin/products/',
				baseColor: 'blue',
				icon: 'shopping_cart',
				textColor: 'white'
			});
			
			chai.assert.equal(orion.dashboard._widgets.length > 0,true)
		})
	});
}

/******************
 * Server Testing *
 ******************/
