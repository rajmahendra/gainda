load('./dist/gainda.js');

Gainda.run([ 'base', 'graphics', 'controls' ], function (stage) {

stage.title = "Button Demo";
var root = new StackPane();
var flowPane = new FlowPane();

//Defining Buttons
var okImage = new Image("file:images/ok.png");
var cancelImage = new Image("file:images/cancel.png");
var acceptButton = new Button("Accept", new ImageView(okImage));
var simpleAcceptButton = new Button("Accept");
var simpleDeclineButton = new Button("Decline");
var statusLabel = new Label("Default");
var iconAcceptButton = new Button("", new ImageView(okImage));
var iconRejectButton = new Button("", new ImageView(cancelImage));

//Setting Flowpane v and h gaps
flowPane.vgap = 30;
flowPane.hgap = 4;

//Defining Effects
var dropShadow = new DropShadow();

simpleAcceptButton.addEventHandler(MouseEvent.MOUSE_ENTERED, function() {
    simpleAcceptButton.setEffect(dropShadow);
});
simpleAcceptButton.addEventHandler(MouseEvent.MOUSE_EXITED, function() {
    simpleAcceptButton.setEffect(null);
});

//Defining Actions
simpleAcceptButton.onAction = function() {
    statusLabel.text = "Accepted";
}
simpleDeclineButton.onAction = function() {
    statusLabel.text = "Decline";
}

//Defining list to add to flow Pane
var list = [
    acceptButton,
    simpleAcceptButton,
    simpleDeclineButton,
    statusLabel,
    iconAcceptButton,
    iconRejectButton
];
for (var i = 0; i < list.length; i++) {
    flowPane.children.add(list[i]);
}
root.children.add(flowPane);
stage.scene = new Scene(root, 300, 250);
stage.show();

});