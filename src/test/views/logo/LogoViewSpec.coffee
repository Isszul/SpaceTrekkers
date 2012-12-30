require ["LogoView" 
		 "text!templates/logo/logoTemplate.html"
], (LogoView, logoTemplate) ->
		
	describe "LogoView", ->

		logoView = undefined
		testRegion = undefined

		beforeEach () ->
			logoView = new LogoView()
			testRegion = new Backbone.Marionette.Region( 
				el: "#testRegion"
			)
			@
			
		afterEach () ->
			logoView = null
			testRegion = null
			$('#testRegion').html ''
			@

		it "should initialize with the default view template ", () -> 
			expect(logoView.template).toEqual logoTemplate
		
		it "should render a logo dialog", () ->
			testRegion.show(logoView)
			expect($('#testRegion').html().length).toBeGreaterThan 0