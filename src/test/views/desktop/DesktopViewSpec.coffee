require ["DesktopView" 
         "text!templates/desktop/desktopTemplate.html"
         "sinon"
         "jquery"
], (DesktopView, DesktopTemplate) ->
		
	describe "DesktopView", ->

		desktopView = undefined
		testRegion = undefined

		beforeEach ->
			desktopView = new DesktopView()
			testRegion = new Backbone.Marionette.Region( 
				el: "#testRegion"
			)
			@
			
		afterEach ->
  			desktopView = null
  			testRegion = null
  			$('#testRegion').html ''
  			$('#WelcomeDialog').dialog( "close" )
  			@

		it "should initialize with the default desktop view template ", -> 
  			expect(desktopView.template).toEqual DesktopTemplate
		
		it "should render a welcome dialog", ->
			testRegion.show(desktopView)
			expect($('#WelcomeDialog').html().length).toBeGreaterThan 0

