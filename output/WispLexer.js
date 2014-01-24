// $ANTLR 3.2 debian-7ubuntu3 Wisp.g 2014-01-24 21:23:04

var WispLexer = function(input, state) {
// alternate constructor @todo
// public WispLexer(CharStream input)
// public WispLexer(CharStream input, RecognizerSharedState state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){
    }).call(this);

    this.dfa4 = new WispLexer.DFA4(this);
    WispLexer.superclass.constructor.call(this, input, state);


};

org.antlr.lang.augmentObject(WispLexer, {
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
    KW_STEPS: 22,
    KW_ATTACK: 23
});

(function(){
var HIDDEN = org.antlr.runtime.Token.HIDDEN_CHANNEL,
    EOF = org.antlr.runtime.Token.EOF;
org.antlr.lang.extend(WispLexer, org.antlr.runtime.Lexer, {
    KW_STEP : 21,
    KW_UP : 17,
    KW_AND : 12,
    TOK_RIGHT : 8,
    TOK_MOVE : 5,
    KW_LEFT : 18,
    TOK_USE : 4,
    Digit : 27,
    EOF : -1,
    TOK_UP : 9,
    Identifier : 14,
    WS : 24,
    TOK_LEFT : 7,
    TOK_ATTACK : 6,
    KW_RIGHT : 19,
    TOK_DOWN : 10,
    KW_USE : 13,
    TOK_AND : 11,
    KW_DOWN : 16,
    COMMENT : 25,
    KW_MOVE : 15,
    Letter : 26,
    Integer : 20,
    KW_STEPS : 22,
    KW_ATTACK : 23,
    getGrammarFileName: function() { return "Wisp.g"; }
});
org.antlr.lang.augmentObject(WispLexer.prototype, {
    // $ANTLR start KW_USE
    mKW_USE: function()  {
        try {
            var _type = this.KW_USE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // Wisp.g:47:8: ( 'USE' )
            // Wisp.g:47:10: 'USE'
            this.match("USE"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "KW_USE",

    // $ANTLR start KW_AND
    mKW_AND: function()  {
        try {
            var _type = this.KW_AND;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // Wisp.g:48:8: ( 'AND' )
            // Wisp.g:48:10: 'AND'
            this.match("AND"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "KW_AND",

    // $ANTLR start KW_MOVE
    mKW_MOVE: function()  {
        try {
            var _type = this.KW_MOVE;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // Wisp.g:49:9: ( 'MOVE' )
            // Wisp.g:49:11: 'MOVE'
            this.match("MOVE"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "KW_MOVE",

    // $ANTLR start KW_UP
    mKW_UP: function()  {
        try {
            var _type = this.KW_UP;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // Wisp.g:50:6: ( 'UP' )
            // Wisp.g:50:8: 'UP'
            this.match("UP"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "KW_UP",

    // $ANTLR start KW_DOWN
    mKW_DOWN: function()  {
        try {
            var _type = this.KW_DOWN;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // Wisp.g:51:8: ( 'DOWN' )
            // Wisp.g:51:10: 'DOWN'
            this.match("DOWN"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "KW_DOWN",

    // $ANTLR start KW_LEFT
    mKW_LEFT: function()  {
        try {
            var _type = this.KW_LEFT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // Wisp.g:52:8: ( 'LEFT' )
            // Wisp.g:52:10: 'LEFT'
            this.match("LEFT"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "KW_LEFT",

    // $ANTLR start KW_RIGHT
    mKW_RIGHT: function()  {
        try {
            var _type = this.KW_RIGHT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // Wisp.g:53:9: ( 'RIGHT' )
            // Wisp.g:53:11: 'RIGHT'
            this.match("RIGHT"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "KW_RIGHT",

    // $ANTLR start KW_STEP
    mKW_STEP: function()  {
        try {
            var _type = this.KW_STEP;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // Wisp.g:54:8: ( 'STEP' )
            // Wisp.g:54:10: 'STEP'
            this.match("STEP"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "KW_STEP",

    // $ANTLR start KW_STEPS
    mKW_STEPS: function()  {
        try {
            var _type = this.KW_STEPS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // Wisp.g:55:9: ( 'STEPS' )
            // Wisp.g:55:11: 'STEPS'
            this.match("STEPS"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "KW_STEPS",

    // $ANTLR start KW_ATTACK
    mKW_ATTACK: function()  {
        try {
            var _type = this.KW_ATTACK;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // Wisp.g:56:10: ( 'ATTACK' )
            // Wisp.g:56:12: 'ATTACK'
            this.match("ATTACK"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "KW_ATTACK",

    // $ANTLR start WS
    mWS: function()  {
        try {
            var _type = this.WS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // Wisp.g:59:5: ( ( ' ' | '\\r' | '\\t' | '\\n' ) )
            // Wisp.g:59:8: ( ' ' | '\\r' | '\\t' | '\\n' )
            if ( (this.input.LA(1)>='\t' && this.input.LA(1)<='\n')||this.input.LA(1)=='\r'||this.input.LA(1)==' ' ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            _channel=HIDDEN;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "WS",

    // $ANTLR start COMMENT
    mCOMMENT: function()  {
        try {
            var _type = this.COMMENT;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // Wisp.g:63:2: ( '--' (~ ( '\\n' | '\\r' ) )* )
            // Wisp.g:63:4: '--' (~ ( '\\n' | '\\r' ) )*
            this.match("--"); 

            // Wisp.g:63:9: (~ ( '\\n' | '\\r' ) )*
            loop1:
            do {
                var alt1=2;
                var LA1_0 = this.input.LA(1);

                if ( ((LA1_0>='\u0000' && LA1_0<='\t')||(LA1_0>='\u000B' && LA1_0<='\f')||(LA1_0>='\u000E' && LA1_0<='\uFFFF')) ) {
                    alt1=1;
                }


                switch (alt1) {
                case 1 :
                    // Wisp.g:63:10: ~ ( '\\n' | '\\r' )
                    if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='\t')||(this.input.LA(1)>='\u000B' && this.input.LA(1)<='\f')||(this.input.LA(1)>='\u000E' && this.input.LA(1)<='\uFFFF') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

                default :
                    break loop1;
                }
            } while (true);

             _channel=HIDDEN; 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "COMMENT",

    // $ANTLR start Letter
    mLetter: function()  {
        try {
            // Wisp.g:69:5: ( 'a' .. 'z' | 'A' .. 'Z' )
            // Wisp.g:
            if ( (this.input.LA(1)>='A' && this.input.LA(1)<='Z')||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}




        }
        finally {
        }
    },
    // $ANTLR end "Letter",

    // $ANTLR start Digit
    mDigit: function()  {
        try {
            // Wisp.g:74:5: ( '0' .. '9' )
            // Wisp.g:75:5: '0' .. '9'
            this.matchRange('0','9'); 



        }
        finally {
        }
    },
    // $ANTLR end "Digit",

    // $ANTLR start Integer
    mInteger: function()  {
        try {
            var _type = this.Integer;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // Wisp.g:79:2: ( ( Digit )+ )
            // Wisp.g:80:2: ( Digit )+
            // Wisp.g:80:2: ( Digit )+
            var cnt2=0;
            loop2:
            do {
                var alt2=2;
                var LA2_0 = this.input.LA(1);

                if ( ((LA2_0>='0' && LA2_0<='9')) ) {
                    alt2=1;
                }


                switch (alt2) {
                case 1 :
                    // Wisp.g:80:3: Digit
                    this.mDigit(); 


                    break;

                default :
                    if ( cnt2 >= 1 ) {
                        break loop2;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(2, this.input);
                        throw eee;
                }
                cnt2++;
            } while (true);




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "Integer",

    // $ANTLR start Identifier
    mIdentifier: function()  {
        try {
            var _type = this.Identifier;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // Wisp.g:84:5: ( ( Letter | Digit ) ( Letter | Digit | '_' )* )
            // Wisp.g:85:5: ( Letter | Digit ) ( Letter | Digit | '_' )*
            if ( (this.input.LA(1)>='0' && this.input.LA(1)<='9')||(this.input.LA(1)>='A' && this.input.LA(1)<='Z')||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            // Wisp.g:85:22: ( Letter | Digit | '_' )*
            loop3:
            do {
                var alt3=2;
                var LA3_0 = this.input.LA(1);

                if ( ((LA3_0>='0' && LA3_0<='9')||(LA3_0>='A' && LA3_0<='Z')||LA3_0=='_'||(LA3_0>='a' && LA3_0<='z')) ) {
                    alt3=1;
                }


                switch (alt3) {
                case 1 :
                    // Wisp.g:
                    if ( (this.input.LA(1)>='0' && this.input.LA(1)<='9')||(this.input.LA(1)>='A' && this.input.LA(1)<='Z')||this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

                default :
                    break loop3;
                }
            } while (true);




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "Identifier",

    mTokens: function() {
        // Wisp.g:1:8: ( KW_USE | KW_AND | KW_MOVE | KW_UP | KW_DOWN | KW_LEFT | KW_RIGHT | KW_STEP | KW_STEPS | KW_ATTACK | WS | COMMENT | Integer | Identifier )
        var alt4=14;
        alt4 = this.dfa4.predict(this.input);
        switch (alt4) {
            case 1 :
                // Wisp.g:1:10: KW_USE
                this.mKW_USE(); 


                break;
            case 2 :
                // Wisp.g:1:17: KW_AND
                this.mKW_AND(); 


                break;
            case 3 :
                // Wisp.g:1:24: KW_MOVE
                this.mKW_MOVE(); 


                break;
            case 4 :
                // Wisp.g:1:32: KW_UP
                this.mKW_UP(); 


                break;
            case 5 :
                // Wisp.g:1:38: KW_DOWN
                this.mKW_DOWN(); 


                break;
            case 6 :
                // Wisp.g:1:46: KW_LEFT
                this.mKW_LEFT(); 


                break;
            case 7 :
                // Wisp.g:1:54: KW_RIGHT
                this.mKW_RIGHT(); 


                break;
            case 8 :
                // Wisp.g:1:63: KW_STEP
                this.mKW_STEP(); 


                break;
            case 9 :
                // Wisp.g:1:71: KW_STEPS
                this.mKW_STEPS(); 


                break;
            case 10 :
                // Wisp.g:1:80: KW_ATTACK
                this.mKW_ATTACK(); 


                break;
            case 11 :
                // Wisp.g:1:90: WS
                this.mWS(); 


                break;
            case 12 :
                // Wisp.g:1:93: COMMENT
                this.mCOMMENT(); 


                break;
            case 13 :
                // Wisp.g:1:101: Integer
                this.mInteger(); 


                break;
            case 14 :
                // Wisp.g:1:109: Identifier
                this.mIdentifier(); 


                break;

        }

    }

}, true); // important to pass true to overwrite default implementations

org.antlr.lang.augmentObject(WispLexer, {
    DFA4_eotS:
        "\u0001\uffff\u0007\u000b\u0002\uffff\u0001\u0016\u0001\uffff\u0001"+
    "\u000b\u0001\u0018\u0007\u000b\u0001\u0016\u0001\uffff\u0001\u0020\u0001"+
    "\uffff\u0001\u0021\u0006\u000b\u0002\uffff\u0001\u000b\u0001\u0029\u0001"+
    "\u002a\u0001\u002b\u0001\u000b\u0001\u002e\u0001\u000b\u0003\uffff\u0001"+
    "\u0030\u0001\u0031\u0001\uffff\u0001\u0032\u0003\uffff",
    DFA4_eofS:
        "\u0033\uffff",
    DFA4_minS:
        "\u0001\u0009\u0001\u0050\u0001\u004e\u0002\u004f\u0001\u0045\u0001"+
    "\u0049\u0001\u0054\u0002\uffff\u0001\u0030\u0001\uffff\u0001\u0045\u0001"+
    "\u0030\u0001\u0044\u0001\u0054\u0001\u0056\u0001\u0057\u0001\u0046\u0001"+
    "\u0047\u0001\u0045\u0001\u0030\u0001\uffff\u0001\u0030\u0001\uffff\u0001"+
    "\u0030\u0001\u0041\u0001\u0045\u0001\u004e\u0001\u0054\u0001\u0048\u0001"+
    "\u0050\u0002\uffff\u0001\u0043\u0003\u0030\u0001\u0054\u0001\u0030\u0001"+
    "\u004b\u0003\uffff\u0002\u0030\u0001\uffff\u0001\u0030\u0003\uffff",
    DFA4_maxS:
        "\u0001\u007a\u0001\u0053\u0001\u0054\u0002\u004f\u0001\u0045\u0001"+
    "\u0049\u0001\u0054\u0002\uffff\u0001\u007a\u0001\uffff\u0001\u0045\u0001"+
    "\u007a\u0001\u0044\u0001\u0054\u0001\u0056\u0001\u0057\u0001\u0046\u0001"+
    "\u0047\u0001\u0045\u0001\u007a\u0001\uffff\u0001\u007a\u0001\uffff\u0001"+
    "\u007a\u0001\u0041\u0001\u0045\u0001\u004e\u0001\u0054\u0001\u0048\u0001"+
    "\u0050\u0002\uffff\u0001\u0043\u0003\u007a\u0001\u0054\u0001\u007a\u0001"+
    "\u004b\u0003\uffff\u0002\u007a\u0001\uffff\u0001\u007a\u0003\uffff",
    DFA4_acceptS:
        "\u0008\uffff\u0001\u000b\u0001\u000c\u0001\uffff\u0001\u000e\u000a"+
    "\uffff\u0001\u000d\u0001\uffff\u0001\u0004\u0007\uffff\u0001\u0001\u0001"+
    "\u0002\u0007\uffff\u0001\u0003\u0001\u0005\u0001\u0006\u0002\uffff\u0001"+
    "\u0008\u0001\uffff\u0001\u0007\u0001\u0009\u0001\u000a",
    DFA4_specialS:
        "\u0033\uffff}>",
    DFA4_transitionS: [
            "\u0002\u0008\u0002\uffff\u0001\u0008\u0012\uffff\u0001\u0008"+
            "\u000c\uffff\u0001\u0009\u0002\uffff\u000a\u000a\u0007\uffff"+
            "\u0001\u0002\u0002\u000b\u0001\u0004\u0007\u000b\u0001\u0005"+
            "\u0001\u0003\u0004\u000b\u0001\u0006\u0001\u0007\u0001\u000b"+
            "\u0001\u0001\u0005\u000b\u0006\uffff\u001a\u000b",
            "\u0001\u000d\u0002\uffff\u0001\u000c",
            "\u0001\u000e\u0005\uffff\u0001\u000f",
            "\u0001\u0010",
            "\u0001\u0011",
            "\u0001\u0012",
            "\u0001\u0013",
            "\u0001\u0014",
            "",
            "",
            "\u000a\u0015\u0007\uffff\u001a\u000b\u0004\uffff\u0001\u000b"+
            "\u0001\uffff\u001a\u000b",
            "",
            "\u0001\u0017",
            "\u000a\u000b\u0007\uffff\u001a\u000b\u0004\uffff\u0001\u000b"+
            "\u0001\uffff\u001a\u000b",
            "\u0001\u0019",
            "\u0001\u001a",
            "\u0001\u001b",
            "\u0001\u001c",
            "\u0001\u001d",
            "\u0001\u001e",
            "\u0001\u001f",
            "\u000a\u0015\u0007\uffff\u001a\u000b\u0004\uffff\u0001\u000b"+
            "\u0001\uffff\u001a\u000b",
            "",
            "\u000a\u000b\u0007\uffff\u001a\u000b\u0004\uffff\u0001\u000b"+
            "\u0001\uffff\u001a\u000b",
            "",
            "\u000a\u000b\u0007\uffff\u001a\u000b\u0004\uffff\u0001\u000b"+
            "\u0001\uffff\u001a\u000b",
            "\u0001\u0022",
            "\u0001\u0023",
            "\u0001\u0024",
            "\u0001\u0025",
            "\u0001\u0026",
            "\u0001\u0027",
            "",
            "",
            "\u0001\u0028",
            "\u000a\u000b\u0007\uffff\u001a\u000b\u0004\uffff\u0001\u000b"+
            "\u0001\uffff\u001a\u000b",
            "\u000a\u000b\u0007\uffff\u001a\u000b\u0004\uffff\u0001\u000b"+
            "\u0001\uffff\u001a\u000b",
            "\u000a\u000b\u0007\uffff\u001a\u000b\u0004\uffff\u0001\u000b"+
            "\u0001\uffff\u001a\u000b",
            "\u0001\u002c",
            "\u000a\u000b\u0007\uffff\u0012\u000b\u0001\u002d\u0007\u000b"+
            "\u0004\uffff\u0001\u000b\u0001\uffff\u001a\u000b",
            "\u0001\u002f",
            "",
            "",
            "",
            "\u000a\u000b\u0007\uffff\u001a\u000b\u0004\uffff\u0001\u000b"+
            "\u0001\uffff\u001a\u000b",
            "\u000a\u000b\u0007\uffff\u001a\u000b\u0004\uffff\u0001\u000b"+
            "\u0001\uffff\u001a\u000b",
            "",
            "\u000a\u000b\u0007\uffff\u001a\u000b\u0004\uffff\u0001\u000b"+
            "\u0001\uffff\u001a\u000b",
            "",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(WispLexer, {
    DFA4_eot:
        org.antlr.runtime.DFA.unpackEncodedString(WispLexer.DFA4_eotS),
    DFA4_eof:
        org.antlr.runtime.DFA.unpackEncodedString(WispLexer.DFA4_eofS),
    DFA4_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(WispLexer.DFA4_minS),
    DFA4_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(WispLexer.DFA4_maxS),
    DFA4_accept:
        org.antlr.runtime.DFA.unpackEncodedString(WispLexer.DFA4_acceptS),
    DFA4_special:
        org.antlr.runtime.DFA.unpackEncodedString(WispLexer.DFA4_specialS),
    DFA4_transition: (function() {
        var a = [],
            i,
            numStates = WispLexer.DFA4_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(WispLexer.DFA4_transitionS[i]));
        }
        return a;
    })()
});

WispLexer.DFA4 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 4;
    this.eot = WispLexer.DFA4_eot;
    this.eof = WispLexer.DFA4_eof;
    this.min = WispLexer.DFA4_min;
    this.max = WispLexer.DFA4_max;
    this.accept = WispLexer.DFA4_accept;
    this.special = WispLexer.DFA4_special;
    this.transition = WispLexer.DFA4_transition;
};

org.antlr.lang.extend(WispLexer.DFA4, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "1:1: Tokens : ( KW_USE | KW_AND | KW_MOVE | KW_UP | KW_DOWN | KW_LEFT | KW_RIGHT | KW_STEP | KW_STEPS | KW_ATTACK | WS | COMMENT | Integer | Identifier );";
    },
    dummy: null
});
 
})();