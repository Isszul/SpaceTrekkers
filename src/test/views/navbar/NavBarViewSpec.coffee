require ["NavBarView" 
		 "text!templates/navbar/navBarTemplate.html"
], (NavBarView, NavBarTemplate) ->
		
	describe "NavBarView", ->

		navBarView = undefined
		testRegion = undefined

		beforeEach ->
			navBarView = new NavBarView()
			testRegion = new Backbone.Marionette.Region
				el: "#testRegion"
			@
			
		afterEach ->
			navBarView = null
			testRegion = null
			$('#testRegion').html ''
			@

		it "should initialize with the default view template ", -> 
			expect(navBarView.template).toEqual NavBarTemplate
		
		it "should render a logo dialog", ->
			testRegion.show(navBarView)
			expect($('#testRegion').html().length).toBeGreaterThan 0
