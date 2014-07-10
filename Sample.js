load("gainda.js");
var app = Gaint.application("New App",['base','graphics','controls','fxml','web','media','swing','swt']);
app.init();
app.tile({
	name:'landing',
	make:function(){
		var pane = new StackPane();
		pane.title = "Landing"; 
		return new Scene(pane,500,500);
	}
});
app.tile({
	name:'home',
	make:function(){
		var pane = new StackPane();
		pane.title = "Home"; 
		return new Scene(pane,500,500);
	}
});
var main = app.view({
	tile:'landing',
	name:'loginView',
	make:function(){
		var application = this.application;
		var button = new Button();
		button.text = 'Yeah! Clik Me';
		button.onAction = function() {
			application.getView("homeView").render();
			print("from login view working !!!")
		}
		return button;
	}
});
var home = app.view({
	tile:'home',
	name:'homeView',
	make:function(){
		var application = this.application;
		var button = new Button();
		button.text = 'Home Button';
		button.onAction = function() { 
			application.getView("loginView").render();
			print("from home view working !!!")
		}
		return button;
	}
});
main.render();