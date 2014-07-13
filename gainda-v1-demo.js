load("gainda-v1.js");

var options = {
	appName:'Gainda-v1-demo',
	uses:['base','graphics','controls','fxml','web','media','swing','swt'],
	views:[
		{
			tile:'landing',
			name:'loginView',
			make:function(){
				var application = this.application;
				var button = new Button();
				button.text = 'Yeah! Clik Me';
				button.onAction = function() {
					application.render("home","homeView");
					print("from login view working !!!")
				}
				return button;
			}
		},
		{
			tile:'home',
			name:'homeView',
			make:function(){
				var application = this.application;
				var button = new Button();
				button.text = 'Home Button';
				button.onAction = function() { 
					application.render("landing","loginView");
					print("from home view working !!!")
				}
				return button;
			}
		}

	],
	tiles:[
		{
			name:'landing',
			make:function(){
				var pane = new StackPane();
				pane.title = "Landing"; 
				return new Scene(pane,500,500);
			}
		},
		{
			name:'home',
			make:function(){
				var pane = new StackPane();
				pane.title = "Home"; 
				return new Scene(pane,500,500);
			}
		}
	],
	onStartup:function(){
		this.render("landing","loginView");
	}

	

}
var app = Gaint.application(options);
app.run();