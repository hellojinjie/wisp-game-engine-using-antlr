goog.provide('wisp');

//get requirements
goog.require('lime.Director');
goog.require('lime.Scene');
goog.require('lime.Layer');
goog.require('lime.Circle');
goog.require('lime.Label');
goog.require('lime.animation.Spawn');
goog.require('lime.animation.FadeTo');
goog.require('lime.animation.ScaleTo');
goog.require('lime.animation.MoveTo');
goog.require('lime.animation.MoveBy');

// RPG Game Engine: Wisp
wisp.engine = function(){

    var director = new lime.Director(document.body,1024,768);
    var scene = new lime.Scene();

    this.bloodmage = new lime.Sprite().setSize(94, 103).setFill('images/bloodmage_static.gif')
        .setPosition(512, 150);
    var bloodmage = this.bloodmage;
    var demonhunter = new lime.Sprite().setSize(94, 103).setFill('images/demonhunter.gif')
        .setPosition(890, 650);
    var druidclaw = new lime.Sprite().setSize(94, 103).setFill('images/druidclaw.gif')
        .setPosition(790, 150);

    //add things to the scene
    scene.appendChild(bloodmage);
    scene.appendChild(demonhunter);
    scene.appendChild(druidclaw);

    //bloodmage is draggable
    goog.events.listen(bloodmage, ['mousedown'], function(e) {
        e.startDrag();
    });

    this.execute = function(command) {
        var lexer = new WispLexer(new org.antlr.runtime.ANTLRStringStream(command));
        var parser = new WispParser(new org.antlr.runtime.CommonTokenStream(lexer));
        var root = parser.statement().getTree();
        if (root.getChildCount() == 0) {
            console.log('error: the root has child');
            return;
        }
        var node = root.getChild(0);
        if (node.getType() == WispParser.TOK_ATTACK) {
            bloodmage.setFill('images/bloodmage.gif');
            lime.scheduleManager.callAfter(function() {
                this.setFill('images/bloodmage_static.gif'); 
            }, bloodmage, 1500);

            lime.scheduleManager.callAfter(function() {
                var scene = this;
                var x = bloodmage.getPosition().x;
                var y = bloodmage.getPosition().y;
                var fireball = new lime.Sprite().setSize(15, 15).setFill('images/fireball.jpg') 
                    .setPosition(x, y);
                scene.appendChild(fireball);
                var fire = new lime.animation.MoveBy(150, 0).setDuration(0.4);
                goog.events.listen(fire, lime.animation.Event.STOP, function() {
                    scene.removeChild(fireball);
                });
                fireball.runAction(fire);
            }, scene, 800);
        } else if (node.getType() == WispParser.TOK_MOVE) {
            var childNode = node.getChild(0);
            var step = parseInt(node.getChild(1).getText());
            bloodmage.setFill('images/bloodmage.gif');
            var walk = undefined;
            switch (childNode.getType()) {
                case WispParser.KW_UP: 
                    walk = new lime.animation.MoveBy(0, -20 * step).setSpeed(0.4);
                    break;
                case WispParser.KW_DOWN:
                    walk = new lime.animation.MoveBy(0, 20 * step).setSpeed(0.4);
                    break;
                case WispParser.KW_LEFT:
                    walk = new lime.animation.MoveBy(-20 * step, 0).setSpeed(0.4);
                    break;
                case WispParser.KW_RIGHT:
                    walk = new lime.animation.MoveBy(20 * step, 0).setSpeed(0.4);
                    break;
            }
            walk.addTarget(bloodmage);
            walk.play();
            goog.events.listen(walk, lime.animation.Event.STOP, function() {
                bloodmage.setFill('images/bloodmage_static.gif');
            });
        }
        
    };

    // set current scene active
    director.replaceScene(scene);
}


