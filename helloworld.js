//set main namespace
goog.provide('helloworld');


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


// entrypoint
helloworld.start = function(){

	var director = new lime.Director(document.body,1024,768),
	    scene = new lime.Scene(),

	    target = new lime.Layer().setPosition(512,384),
        circle = new lime.Circle().setSize(150,150).setFill(255,150,0),
        lbl = new lime.Label().setSize(160,50).setFontSize(30).setText('TOUCH ME!'),
        title = new lime.Label().setSize(800,70).setFontSize(60).setText('Now move me around!')
            .setOpacity(0).setPosition(512,80).setFontColor('#999').setFill(200,100,0,.1);

    var bloodmage = new lime.Sprite().setSize(94, 103).setFill('images/bloodmage_static.gif')
        .setPosition(512, 150);

    var demonhunter = new lime.Sprite().setSize(94, 103).setFill('images/demonhunter.gif')
        .setPosition(890, 650);

    var druidclaw = new lime.Sprite().setSize(94, 103).setFill('images/druidclaw.gif')
        .setPosition(790, 150);

    //add circle and label to target object
    target.appendChild(circle);
    target.appendChild(lbl);

    //add target and title to the scene
    //we do not want this any more
    //scene.appendChild(target);
    scene.appendChild(title);
    scene.appendChild(bloodmage);
    scene.appendChild(demonhunter);
    scene.appendChild(druidclaw);

    //bloodmage is draggable
    goog.events.listen(bloodmage, ['mousedown'], function(e) {
        e.startDrag();
    });

    goog.events.listen(bloodmage, ['keydown'], function(e) {
        var keyCode = e.event.keyCode;
        if (keyCode == 74) {
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
        } else if (keyCode == 65) {
            //wake left
            bloodmage.setFill('images/bloodmage.gif');
            var wakeLeft = new lime.animation.MoveBy(-1000, 0).setSpeed(0.4);
            wakeLeft.addTarget(bloodmage);
            wakeLeft.play();
            e.swallow(['keyup'], function() {
                bloodmage.setFill('images/bloodmage_static.gif');
                wakeLeft.stop();
            });
        } else if (keyCode == 83) {
            //wake down
            bloodmage.setFill('images/bloodmage.gif');
            var wakeDown = new lime.animation.MoveBy(0, 1000).setSpeed(0.4);
            wakeDown.addTarget(bloodmage);
            wakeDown.play();
            e.swallow(['keyup'], function() {
                bloodmage.setFill('images/bloodmage_static.gif');
                wakeDown.stop();
            });
        } else if (keyCode == 87) {
            //wake up
            bloodmage.setFill('images/bloodmage.gif');
            var wakeUp = new lime.animation.MoveBy(0, -1000).setSpeed(0.4);
            wakeUp.addTarget(bloodmage);
            wakeUp.play();
            e.swallow(['keyup'], function() {
                bloodmage.setFill('images/bloodmage_static.gif');
                wakeUp.stop();
            });
        } else if (keyCode == 68) {
            //wake right
            bloodmage.setFill('images/bloodmage.gif');
            var wakeRight = new lime.animation.MoveBy(1000, 0).setSpeed(0.4);
            wakeRight.addTarget(bloodmage);
            wakeRight.play();
            e.swallow(['keyup'], function() {
                bloodmage.setFill('images/bloodmage_static.gif');
                wakeRight.stop();
            });
        }
    });

	director.makeMobileWebAppCapable();

    //add some interaction
    goog.events.listen(target,['mousedown','touchstart'],function(e){

        //animate
        target.runAction(new lime.animation.Spawn(
            new lime.animation.FadeTo(.5).setDuration(.2),
            new lime.animation.ScaleTo(1.5).setDuration(.8)
        ));

        title.runAction(new lime.animation.FadeTo(1));

        //let target follow the mouse/finger
        e.startDrag();

        //listen for end event
        e.swallow(['mouseup','touchend'],function(){
            target.runAction(new lime.animation.Spawn(
                new lime.animation.FadeTo(1),
                new lime.animation.ScaleTo(1),
                new lime.animation.MoveTo(512,384)
            ));

            title.runAction(new lime.animation.FadeTo(0));
        });


    });

	// set current scene active
	director.replaceScene(scene);

}


//this is required for outside access after code is compiled in ADVANCED_COMPILATIONS mode
goog.exportSymbol('helloworld.start', helloworld.start);
