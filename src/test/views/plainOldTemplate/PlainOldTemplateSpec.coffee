require ["PlainOldTemplate" 
         "text!templates/desktop/desktopTemplate.html"
         "sinon"
         "jquery"
], (PlainOldTemplate, DesktopTemplate) ->
		
	describe "PlainOldTemplate", ->

		plainOldTemplate = undefined
		testRegion = undefined

		beforeEach ->
			plainOldTemplate = new PlainOldTemplate("../templates/desktop/desktopTemplate.html")
			testRegion = new Backbone.Marionette.Region
				el: "#testRegion"
			@
			
		afterEach ->
  			plainOldTemplate = null
  			testRegion = null
  			$('#testRegion').html ''
  			@

		it "should (in this test) initialize with the default desktop view template ", -> 
  			expect(plainOldTemplate.template).toEqual DesktopTemplate


