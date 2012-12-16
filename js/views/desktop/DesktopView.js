define([
    'text!templates/desktop/desktopTemplate.html',
    'backbone.marionette',
    'underscore',
    'i18n!nls/general'
], function(desktopTemplate, Marionette, _, nls) {


    var DesktopView = Marionette.ItemView.extend({

        template: _.template(desktopTemplate, nls),


    });

    return DesktopView;

});