grammar Wisp;

options
{
    output=AST;
    ASTLabelType=CommonTree;
    language=JavaScript;
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

statement
	:	command EOF
	;
	
command
	: attack
	| use
	| move
	| ( use | move | attack ) ( KW_AND ( move | attack ) )+
	;

use	: KW_USE name=Identifier
		-> ^(TOK_USE $name)
	;

move
	: KW_MOVE ( KW_DOWN | KW_UP | KW_LEFT | KW_RIGHT ) stepnum=Integer ( KW_STEP | KW_STEPS )
		-> ^(TOK_MOVE KW_DOWN? KW_UP? KW_LEFT? KW_RIGHT? $stepnum)
	;
	
attack
	: KW_ATTACK 
		-> ^( TOK_ATTACK )
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
