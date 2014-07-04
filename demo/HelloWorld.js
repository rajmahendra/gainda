load('./dist/gainda.js');

Gainda.run([ 'base', 'graphics', 'controls' ], function (stage) {

    var button = new Button();
    var root = new StackPane();

    stage.title = "Hello World!";
    
    button.text = "Say 'Hello World'";
    button.onAction = function() print("Hello World!");
    
    root.children.add(button);

    stage.scene = new Scene(root, 300, 250);
    stage.show();

});