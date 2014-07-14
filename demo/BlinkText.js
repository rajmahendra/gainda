load('./gainda.core.js');
Gainda.run([ 'base', 'graphics', 'controls' ], function (stage) {
    var txt = new Text("Hello, Gainda!");
    var blink = new FadeTransition(Duration.millis(200), txt);
    txt.effect = new Reflection();
    txt.font = new Font(50);
    txt.fill = Color.RED;
    blink.fromValue = 1;
    blink.toValue = 0;
    blink.autoReverse = true;
    blink.cycleCount = 2;
    txt.onMousePressed = function(e){
	    blink.playFromStart();	
    };
    stage.title = "Hello Gainda!";
    stage.scene = new Scene(new StackPane(txt), 350, 150);
    stage.show();
});
