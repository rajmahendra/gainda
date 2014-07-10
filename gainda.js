(function(globalObj){
	/*function that loads mofules*/
	function loadmodules(modules){
		for(i in modules){
			load("fx:"+modules[i]+".js");
		}
	};

	this.Gaint = {
		"application":function(appname,modules){
			/*private variable for returned object form this function*/
			var requiredModules = [].concat(modules);		
			var HashMap = Java.type("java.util.HashMap"); 
			return {
				
				appName:appname,

				init:function(){
					loadmodules(requiredModules);
				},
				/*Keep updated*/
				tiles: new HashMap(),
				views: new HashMap(),
				tile:function(options){
					this.tiles.put(options.name,options.make());
				},
				getView:function(viename){
					return this.views.get(viename);
				},
				/*Keep updated*/
				view:function(options){
					var me = this;
					var viewDef =  {
						application:me,
						tile:options.tile,
						render:function(){
							var app = this.application;
							app.renderView(this);
						},
						make:options.make
					};
					this.views.put(options.name,viewDef) 
					return viewDef;

				},
				renderView:function(view){
					var tile = this.tiles.get(view.tile);
					//tile.getRoot();
					tile.getRoot().children.removeAll();
					tile.getRoot().children.add(view.make())
					$STAGE.scene =tile;
				}
			};
		}
	}
})(this);