grammar Wisp;

options
{
    ASTLabelType=CommonTree;
    output=AST;
    backtrack=false;
    //language=JavaScript;
}

tokens
{
	TOK_USE;
	TOK_MOVE;
	TOK_ATTACK;
	TOK_LEFT;
	TOK_RIGHT;
	TOK_UP;
	TOK_DOWN;
	TOK_AND;
}

command
	: use 
	| move
	| attack
	| ( use | move | attack ) ( KW_AND ( move | attack ) )+
	;

use	
	: KW_USE name=Identifier
		-> ^(TOK_USE $name)
	;	

move
	: KW_MOVE ( KW_DOWN | KW_UP | KW_LEFT | KW_RIGHT ) 
		num=Integer ( KW_STEP | KW_STEPS)
		-> ^(TOK_MOVE TOK_UP? TOK_DOWN? TOK_LEFT? TOK_RIGHT? $num)
	;
	
attack
	: KW_ATTACK KW_AND
	;

KW_USE	: 'USE';
KW_AND	: 'AND';
KW_MOVE	: 'MOVE';
KW_UP: 'UP';
KW_DOWN: 'DOWN';
KW_LEFT: 'LEFT';
KW_RIGHT: 'RIGHT';
KW_STEP: 'STEP';
KW_STEPS: 'STEPS';
KW_ATTACK: 'ATTACK';

WS  :  (' '|'\r'|'\t'|'\n') {$channel=HIDDEN;}
    ;

COMMENT
	: '--' (~('\n'|'\r'))*
	  { $channel=HIDDEN; }
	;
  
fragment
Letter
    : 'a'..'z' | 'A'..'Z'
    ;
 
fragment
Digit
    :
    '0'..'9'
    ;
  
Integer
	: 
	(Digit)+
	;
	
Identifier
    :
    (Letter | Digit) (Letter | Digit | '_')*
    ;
