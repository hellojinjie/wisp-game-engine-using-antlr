// $ANTLR 3.2 debian-7ubuntu3 Wisp.g 2014-01-24 21:23:04

var WispParser = function(input, state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){
    }).call(this);

    WispParser.superclass.constructor.call(this, input, state);

    this.dfa4 = new WispParser.DFA4(this);

         

    /* @todo only create adaptor if output=AST */
    this.adaptor = new org.antlr.runtime.tree.CommonTreeAdaptor();

};

org.antlr.lang.augmentObject(WispParser, {
    KW_STEP: 21,
    KW_UP: 17,
    KW_AND: 12,
    TOK_RIGHT: 8,
    TOK_MOVE: 5,
    KW_LEFT: 18,
    TOK_USE: 4,
    Digit: 27,
    EOF: -1,
    TOK_UP: 9,
    Identifier: 14,
    WS: 24,
    TOK_LEFT: 7,
    TOK_ATTACK: 6,
    KW_RIGHT: 19,
    TOK_DOWN: 10,
    KW_USE: 13,
    TOK_AND: 11,
    KW_DOWN: 16,
    COMMENT: 25,
    KW_MOVE: 15,
    Letter: 26,
    Integer: 20,
    KW_ATTACK: 23,
    KW_STEPS: 22
});

(function(){
// public class variables
var KW_STEP= 21,
    KW_UP= 17,
    KW_AND= 12,
    TOK_RIGHT= 8,
    TOK_MOVE= 5,
    KW_LEFT= 18,
    TOK_USE= 4,
    Digit= 27,
    EOF= -1,
    TOK_UP= 9,
    Identifier= 14,
    WS= 24,
    TOK_LEFT= 7,
    TOK_ATTACK= 6,
    KW_RIGHT= 19,
    TOK_DOWN= 10,
    KW_USE= 13,
    TOK_AND= 11,
    KW_DOWN= 16,
    COMMENT= 25,
    KW_MOVE= 15,
    Letter= 26,
    Integer= 20,
    KW_ATTACK= 23,
    KW_STEPS= 22;

// public instance methods/vars
org.antlr.lang.extend(WispParser, org.antlr.runtime.Parser, {
        
    setTreeAdaptor: function(adaptor) {
        this.adaptor = adaptor;
    },
    getTreeAdaptor: function() {
        return this.adaptor;
    },

    getTokenNames: function() { return WispParser.tokenNames; },
    getGrammarFileName: function() { return "Wisp.g"; }
});
org.antlr.lang.augmentObject(WispParser.prototype, {

    // inline static return class
    statement_return: (function() {
        WispParser.statement_return = function(){};
        org.antlr.lang.extend(WispParser.statement_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // Wisp.g:22:1: statement : command EOF ;
    // $ANTLR start "statement"
    statement: function() {
        var retval = new WispParser.statement_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var EOF2 = null;
         var command1 = null;

        var EOF2_tree=null;

        try {
            // Wisp.g:23:2: ( command EOF )
            // Wisp.g:23:4: command EOF
            root_0 = this.adaptor.nil();

            this.pushFollow(WispParser.FOLLOW_command_in_statement80);
            command1=this.command();

            this.state._fsp--;

            this.adaptor.addChild(root_0, command1.getTree());
            EOF2=this.match(this.input,EOF,WispParser.FOLLOW_EOF_in_statement82); 
            EOF2_tree = this.adaptor.create(EOF2);
            this.adaptor.addChild(root_0, EOF2_tree);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    command_return: (function() {
        WispParser.command_return = function(){};
        org.antlr.lang.extend(WispParser.command_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // Wisp.g:26:1: command : ( attack | use | move | ( use | move | attack ) ( KW_AND ( move | attack ) )+ );
    // $ANTLR start "command"
    command: function() {
        var retval = new WispParser.command_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var KW_AND9 = null;
         var attack3 = null;
         var use4 = null;
         var move5 = null;
         var use6 = null;
         var move7 = null;
         var attack8 = null;
         var move10 = null;
         var attack11 = null;

        var KW_AND9_tree=null;

        try {
            // Wisp.g:27:2: ( attack | use | move | ( use | move | attack ) ( KW_AND ( move | attack ) )+ )
            var alt4=4;
            alt4 = this.dfa4.predict(this.input);
            switch (alt4) {
                case 1 :
                    // Wisp.g:27:4: attack
                    root_0 = this.adaptor.nil();

                    this.pushFollow(WispParser.FOLLOW_attack_in_command94);
                    attack3=this.attack();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, attack3.getTree());


                    break;
                case 2 :
                    // Wisp.g:28:4: use
                    root_0 = this.adaptor.nil();

                    this.pushFollow(WispParser.FOLLOW_use_in_command99);
                    use4=this.use();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, use4.getTree());


                    break;
                case 3 :
                    // Wisp.g:29:4: move
                    root_0 = this.adaptor.nil();

                    this.pushFollow(WispParser.FOLLOW_move_in_command104);
                    move5=this.move();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, move5.getTree());


                    break;
                case 4 :
                    // Wisp.g:30:4: ( use | move | attack ) ( KW_AND ( move | attack ) )+
                    root_0 = this.adaptor.nil();

                    // Wisp.g:30:4: ( use | move | attack )
                    var alt1=3;
                    switch ( this.input.LA(1) ) {
                    case KW_USE:
                        alt1=1;
                        break;
                    case KW_MOVE:
                        alt1=2;
                        break;
                    case KW_ATTACK:
                        alt1=3;
                        break;
                    default:
                        var nvae =
                            new org.antlr.runtime.NoViableAltException("", 1, 0, this.input);

                        throw nvae;
                    }

                    switch (alt1) {
                        case 1 :
                            // Wisp.g:30:6: use
                            this.pushFollow(WispParser.FOLLOW_use_in_command111);
                            use6=this.use();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, use6.getTree());


                            break;
                        case 2 :
                            // Wisp.g:30:12: move
                            this.pushFollow(WispParser.FOLLOW_move_in_command115);
                            move7=this.move();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, move7.getTree());


                            break;
                        case 3 :
                            // Wisp.g:30:19: attack
                            this.pushFollow(WispParser.FOLLOW_attack_in_command119);
                            attack8=this.attack();

                            this.state._fsp--;

                            this.adaptor.addChild(root_0, attack8.getTree());


                            break;

                    }

                    // Wisp.g:30:28: ( KW_AND ( move | attack ) )+
                    var cnt3=0;
                    loop3:
                    do {
                        var alt3=2;
                        var LA3_0 = this.input.LA(1);

                        if ( (LA3_0==KW_AND) ) {
                            alt3=1;
                        }


                        switch (alt3) {
                        case 1 :
                            // Wisp.g:30:30: KW_AND ( move | attack )
                            KW_AND9=this.match(this.input,KW_AND,WispParser.FOLLOW_KW_AND_in_command125); 
                            KW_AND9_tree = this.adaptor.create(KW_AND9);
                            this.adaptor.addChild(root_0, KW_AND9_tree);

                            // Wisp.g:30:37: ( move | attack )
                            var alt2=2;
                            var LA2_0 = this.input.LA(1);

                            if ( (LA2_0==KW_MOVE) ) {
                                alt2=1;
                            }
                            else if ( (LA2_0==KW_ATTACK) ) {
                                alt2=2;
                            }
                            else {
                                var nvae =
                                    new org.antlr.runtime.NoViableAltException("", 2, 0, this.input);

                                throw nvae;
                            }
                            switch (alt2) {
                                case 1 :
                                    // Wisp.g:30:39: move
                                    this.pushFollow(WispParser.FOLLOW_move_in_command129);
                                    move10=this.move();

                                    this.state._fsp--;

                                    this.adaptor.addChild(root_0, move10.getTree());


                                    break;
                                case 2 :
                                    // Wisp.g:30:46: attack
                                    this.pushFollow(WispParser.FOLLOW_attack_in_command133);
                                    attack11=this.attack();

                                    this.state._fsp--;

                                    this.adaptor.addChild(root_0, attack11.getTree());


                                    break;

                            }



                            break;

                        default :
                            if ( cnt3 >= 1 ) {
                                break loop3;
                            }
                                var eee = new org.antlr.runtime.EarlyExitException(3, this.input);
                                throw eee;
                        }
                        cnt3++;
                    } while (true);



                    break;

            }
            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    use_return: (function() {
        WispParser.use_return = function(){};
        org.antlr.lang.extend(WispParser.use_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // Wisp.g:33:1: use : KW_USE name= Identifier -> ^( TOK_USE $name) ;
    // $ANTLR start "use"
    use: function() {
        var retval = new WispParser.use_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var name = null;
        var KW_USE12 = null;

        var name_tree=null;
        var KW_USE12_tree=null;
        var stream_KW_USE=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token KW_USE");
        var stream_Identifier=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token Identifier");

        try {
            // Wisp.g:33:5: ( KW_USE name= Identifier -> ^( TOK_USE $name) )
            // Wisp.g:33:7: KW_USE name= Identifier
            KW_USE12=this.match(this.input,KW_USE,WispParser.FOLLOW_KW_USE_in_use148);  
            stream_KW_USE.add(KW_USE12);

            name=this.match(this.input,Identifier,WispParser.FOLLOW_Identifier_in_use152);  
            stream_Identifier.add(name);



            // AST REWRITE
            // elements: name
            // token labels: name
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_name=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token name",name);
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 34:3: -> ^( TOK_USE $name)
            {
                // Wisp.g:34:6: ^( TOK_USE $name)
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(TOK_USE, "TOK_USE"), root_1);

                this.adaptor.addChild(root_1, stream_name.nextNode());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    move_return: (function() {
        WispParser.move_return = function(){};
        org.antlr.lang.extend(WispParser.move_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // Wisp.g:37:1: move : KW_MOVE ( KW_DOWN | KW_UP | KW_LEFT | KW_RIGHT ) stepnum= Integer ( KW_STEP | KW_STEPS ) -> ^( TOK_MOVE ( KW_DOWN )? ( KW_UP )? ( KW_LEFT )? ( KW_RIGHT )? $stepnum) ;
    // $ANTLR start "move"
    move: function() {
        var retval = new WispParser.move_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var stepnum = null;
        var KW_MOVE13 = null;
        var KW_DOWN14 = null;
        var KW_UP15 = null;
        var KW_LEFT16 = null;
        var KW_RIGHT17 = null;
        var KW_STEP18 = null;
        var KW_STEPS19 = null;

        var stepnum_tree=null;
        var KW_MOVE13_tree=null;
        var KW_DOWN14_tree=null;
        var KW_UP15_tree=null;
        var KW_LEFT16_tree=null;
        var KW_RIGHT17_tree=null;
        var KW_STEP18_tree=null;
        var KW_STEPS19_tree=null;
        var stream_KW_STEP=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token KW_STEP");
        var stream_KW_RIGHT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token KW_RIGHT");
        var stream_KW_LEFT=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token KW_LEFT");
        var stream_KW_MOVE=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token KW_MOVE");
        var stream_KW_DOWN=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token KW_DOWN");
        var stream_KW_UP=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token KW_UP");
        var stream_Integer=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token Integer");
        var stream_KW_STEPS=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token KW_STEPS");

        try {
            // Wisp.g:38:2: ( KW_MOVE ( KW_DOWN | KW_UP | KW_LEFT | KW_RIGHT ) stepnum= Integer ( KW_STEP | KW_STEPS ) -> ^( TOK_MOVE ( KW_DOWN )? ( KW_UP )? ( KW_LEFT )? ( KW_RIGHT )? $stepnum) )
            // Wisp.g:38:4: KW_MOVE ( KW_DOWN | KW_UP | KW_LEFT | KW_RIGHT ) stepnum= Integer ( KW_STEP | KW_STEPS )
            KW_MOVE13=this.match(this.input,KW_MOVE,WispParser.FOLLOW_KW_MOVE_in_move174);  
            stream_KW_MOVE.add(KW_MOVE13);

            // Wisp.g:38:12: ( KW_DOWN | KW_UP | KW_LEFT | KW_RIGHT )
            var alt5=4;
            switch ( this.input.LA(1) ) {
            case KW_DOWN:
                alt5=1;
                break;
            case KW_UP:
                alt5=2;
                break;
            case KW_LEFT:
                alt5=3;
                break;
            case KW_RIGHT:
                alt5=4;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 5, 0, this.input);

                throw nvae;
            }

            switch (alt5) {
                case 1 :
                    // Wisp.g:38:14: KW_DOWN
                    KW_DOWN14=this.match(this.input,KW_DOWN,WispParser.FOLLOW_KW_DOWN_in_move178);  
                    stream_KW_DOWN.add(KW_DOWN14);



                    break;
                case 2 :
                    // Wisp.g:38:24: KW_UP
                    KW_UP15=this.match(this.input,KW_UP,WispParser.FOLLOW_KW_UP_in_move182);  
                    stream_KW_UP.add(KW_UP15);



                    break;
                case 3 :
                    // Wisp.g:38:32: KW_LEFT
                    KW_LEFT16=this.match(this.input,KW_LEFT,WispParser.FOLLOW_KW_LEFT_in_move186);  
                    stream_KW_LEFT.add(KW_LEFT16);



                    break;
                case 4 :
                    // Wisp.g:38:42: KW_RIGHT
                    KW_RIGHT17=this.match(this.input,KW_RIGHT,WispParser.FOLLOW_KW_RIGHT_in_move190);  
                    stream_KW_RIGHT.add(KW_RIGHT17);



                    break;

            }

            stepnum=this.match(this.input,Integer,WispParser.FOLLOW_Integer_in_move196);  
            stream_Integer.add(stepnum);

            // Wisp.g:38:69: ( KW_STEP | KW_STEPS )
            var alt6=2;
            var LA6_0 = this.input.LA(1);

            if ( (LA6_0==KW_STEP) ) {
                alt6=1;
            }
            else if ( (LA6_0==KW_STEPS) ) {
                alt6=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 6, 0, this.input);

                throw nvae;
            }
            switch (alt6) {
                case 1 :
                    // Wisp.g:38:71: KW_STEP
                    KW_STEP18=this.match(this.input,KW_STEP,WispParser.FOLLOW_KW_STEP_in_move200);  
                    stream_KW_STEP.add(KW_STEP18);



                    break;
                case 2 :
                    // Wisp.g:38:81: KW_STEPS
                    KW_STEPS19=this.match(this.input,KW_STEPS,WispParser.FOLLOW_KW_STEPS_in_move204);  
                    stream_KW_STEPS.add(KW_STEPS19);



                    break;

            }



            // AST REWRITE
            // elements: KW_DOWN, KW_UP, KW_LEFT, stepnum, KW_RIGHT
            // token labels: stepnum
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_stepnum=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token stepnum",stepnum);
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 39:3: -> ^( TOK_MOVE ( KW_DOWN )? ( KW_UP )? ( KW_LEFT )? ( KW_RIGHT )? $stepnum)
            {
                // Wisp.g:39:6: ^( TOK_MOVE ( KW_DOWN )? ( KW_UP )? ( KW_LEFT )? ( KW_RIGHT )? $stepnum)
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(TOK_MOVE, "TOK_MOVE"), root_1);

                // Wisp.g:39:17: ( KW_DOWN )?
                if ( stream_KW_DOWN.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_KW_DOWN.nextNode());

                }
                stream_KW_DOWN.reset();
                // Wisp.g:39:26: ( KW_UP )?
                if ( stream_KW_UP.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_KW_UP.nextNode());

                }
                stream_KW_UP.reset();
                // Wisp.g:39:33: ( KW_LEFT )?
                if ( stream_KW_LEFT.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_KW_LEFT.nextNode());

                }
                stream_KW_LEFT.reset();
                // Wisp.g:39:42: ( KW_RIGHT )?
                if ( stream_KW_RIGHT.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_KW_RIGHT.nextNode());

                }
                stream_KW_RIGHT.reset();
                this.adaptor.addChild(root_1, stream_stepnum.nextNode());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    attack_return: (function() {
        WispParser.attack_return = function(){};
        org.antlr.lang.extend(WispParser.attack_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // Wisp.g:42:1: attack : KW_ATTACK -> ^( TOK_ATTACK ) ;
    // $ANTLR start "attack"
    attack: function() {
        var retval = new WispParser.attack_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var KW_ATTACK20 = null;

        var KW_ATTACK20_tree=null;
        var stream_KW_ATTACK=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token KW_ATTACK");

        try {
            // Wisp.g:43:2: ( KW_ATTACK -> ^( TOK_ATTACK ) )
            // Wisp.g:43:4: KW_ATTACK
            KW_ATTACK20=this.match(this.input,KW_ATTACK,WispParser.FOLLOW_KW_ATTACK_in_attack241);  
            stream_KW_ATTACK.add(KW_ATTACK20);



            // AST REWRITE
            // elements: 
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 44:3: -> ^( TOK_ATTACK )
            {
                // Wisp.g:44:6: ^( TOK_ATTACK )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(TOK_ATTACK, "TOK_ATTACK"), root_1);

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    }

    // Delegated rules




}, true); // important to pass true to overwrite default implementations

org.antlr.lang.augmentObject(WispParser, {
    DFA4_eotS:
        "\u0010\uffff",
    DFA4_eofS:
        "\u0001\uffff\u0001\u0004\u0004\uffff\u0001\u000b\u0006\uffff\u0002"+
    "\u000f\u0001\uffff",
    DFA4_minS:
        "\u0001\u000d\u0001\u000c\u0001\u000e\u0001\u0010\u0002\uffff\u0001"+
    "\u000c\u0004\u0014\u0001\uffff\u0001\u0015\u0002\u000c\u0001\uffff",
    DFA4_maxS:
        "\u0001\u0017\u0001\u000c\u0001\u000e\u0001\u0013\u0002\uffff\u0001"+
    "\u000c\u0004\u0014\u0001\uffff\u0001\u0016\u0002\u000c\u0001\uffff",
    DFA4_acceptS:
        "\u0004\uffff\u0001\u0001\u0001\u0004\u0005\uffff\u0001\u0002\u0003"+
    "\uffff\u0001\u0003",
    DFA4_specialS:
        "\u0010\uffff}>",
    DFA4_transitionS: [
            "\u0001\u0002\u0001\uffff\u0001\u0003\u0007\uffff\u0001\u0001",
            "\u0001\u0005",
            "\u0001\u0006",
            "\u0001\u0007\u0001\u0008\u0001\u0009\u0001\u000a",
            "",
            "",
            "\u0001\u0005",
            "\u0001\u000c",
            "\u0001\u000c",
            "\u0001\u000c",
            "\u0001\u000c",
            "",
            "\u0001\u000d\u0001\u000e",
            "\u0001\u0005",
            "\u0001\u0005",
            ""
    ]
});

org.antlr.lang.augmentObject(WispParser, {
    DFA4_eot:
        org.antlr.runtime.DFA.unpackEncodedString(WispParser.DFA4_eotS),
    DFA4_eof:
        org.antlr.runtime.DFA.unpackEncodedString(WispParser.DFA4_eofS),
    DFA4_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(WispParser.DFA4_minS),
    DFA4_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(WispParser.DFA4_maxS),
    DFA4_accept:
        org.antlr.runtime.DFA.unpackEncodedString(WispParser.DFA4_acceptS),
    DFA4_special:
        org.antlr.runtime.DFA.unpackEncodedString(WispParser.DFA4_specialS),
    DFA4_transition: (function() {
        var a = [],
            i,
            numStates = WispParser.DFA4_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(WispParser.DFA4_transitionS[i]));
        }
        return a;
    })()
});

WispParser.DFA4 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 4;
    this.eot = WispParser.DFA4_eot;
    this.eof = WispParser.DFA4_eof;
    this.min = WispParser.DFA4_min;
    this.max = WispParser.DFA4_max;
    this.accept = WispParser.DFA4_accept;
    this.special = WispParser.DFA4_special;
    this.transition = WispParser.DFA4_transition;
};

org.antlr.lang.extend(WispParser.DFA4, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "26:1: command : ( attack | use | move | ( use | move | attack ) ( KW_AND ( move | attack ) )+ );";
    },
    dummy: null
});
 

// public class variables
org.antlr.lang.augmentObject(WispParser, {
    tokenNames: ["<invalid>", "<EOR>", "<DOWN>", "<UP>", "TOK_USE", "TOK_MOVE", "TOK_ATTACK", "TOK_LEFT", "TOK_RIGHT", "TOK_UP", "TOK_DOWN", "TOK_AND", "KW_AND", "KW_USE", "Identifier", "KW_MOVE", "KW_DOWN", "KW_UP", "KW_LEFT", "KW_RIGHT", "Integer", "KW_STEP", "KW_STEPS", "KW_ATTACK", "WS", "COMMENT", "Letter", "Digit"],
    FOLLOW_command_in_statement80: new org.antlr.runtime.BitSet([0x00000000, 0x00000000]),
    FOLLOW_EOF_in_statement82: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_attack_in_command94: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_use_in_command99: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_move_in_command104: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_use_in_command111: new org.antlr.runtime.BitSet([0x00001000, 0x00000000]),
    FOLLOW_move_in_command115: new org.antlr.runtime.BitSet([0x00001000, 0x00000000]),
    FOLLOW_attack_in_command119: new org.antlr.runtime.BitSet([0x00001000, 0x00000000]),
    FOLLOW_KW_AND_in_command125: new org.antlr.runtime.BitSet([0x00808000, 0x00000000]),
    FOLLOW_move_in_command129: new org.antlr.runtime.BitSet([0x00001002, 0x00000000]),
    FOLLOW_attack_in_command133: new org.antlr.runtime.BitSet([0x00001002, 0x00000000]),
    FOLLOW_KW_USE_in_use148: new org.antlr.runtime.BitSet([0x00004000, 0x00000000]),
    FOLLOW_Identifier_in_use152: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_KW_MOVE_in_move174: new org.antlr.runtime.BitSet([0x000F0000, 0x00000000]),
    FOLLOW_KW_DOWN_in_move178: new org.antlr.runtime.BitSet([0x00100000, 0x00000000]),
    FOLLOW_KW_UP_in_move182: new org.antlr.runtime.BitSet([0x00100000, 0x00000000]),
    FOLLOW_KW_LEFT_in_move186: new org.antlr.runtime.BitSet([0x00100000, 0x00000000]),
    FOLLOW_KW_RIGHT_in_move190: new org.antlr.runtime.BitSet([0x00100000, 0x00000000]),
    FOLLOW_Integer_in_move196: new org.antlr.runtime.BitSet([0x00600000, 0x00000000]),
    FOLLOW_KW_STEP_in_move200: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_KW_STEPS_in_move204: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_KW_ATTACK_in_attack241: new org.antlr.runtime.BitSet([0x00000002, 0x00000000])
});

})();