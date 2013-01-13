
define(["jquery", "underscore", "backbone.marionette", "text!templates/tree/treeTemplate.html", "translationUtil", "jstree"], function($, _, Marionette, TreeTemplate, TranslationUtil, jstree) {
  var TreeView;
  TreeView = Marionette.ItemView.extend({
    template: TranslationUtil.geti18nTemplate(TreeTemplate),
    onShow: function() {
      return $("#tree").jstree({
        "themes": {
          "theme": "default"
        },
        "json_data": {
          "data": [
            {
              "data": "test",
              "children": [
                {
                  "data": "child"
                }
              ]
            }, {
              "data": "test2",
              "children": [
                {
                  "data": "child2"
                }
              ]
            }
          ]
        },
        "plugins": ["themes", "json_data", "ui", "crrm", "contextmenu"]
      });
    }
  });
  return TreeView;
});
