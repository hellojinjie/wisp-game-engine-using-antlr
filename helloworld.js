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
helloworld.start = function() {

    engine = new wisp.engine();
    
    goog.events.listen(engine.bloodmage, ['keydown'], function(e) {
        var keyCode = e.event.keyCode;
        switch (keyCode) {
            case 74: 
                // attack
                engine.execute('ATTACK');
                break;
            case 65: 
                // walk left
                engine.execute('MOVE LEFT 1 STEP');
                break;
            case 83: 
                // walk down
                engine.execute('MOVE DOWN 1 STEP');
                break;
            case 87: 
                // walk up
                engine.execute('MOVE UP 1 STEP');
                break;
            case 68: 
                // walk right
                engine.execute('MOVE RIGHT 1 STEP');
                break;
            default:
                console.log('unhandled key press');
        }
    });
}

