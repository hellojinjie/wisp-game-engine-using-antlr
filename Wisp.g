grammar Wisp;

options
{
    ASTLabelType=CommonTree;
    output=AST;
    backtrack=false;
    language=JavaScript;
}

tokens
{
	TOK_CREATE_VIEW;
}

statement
	: ;


KW_USE	: 'USE';
KW_MOVE	: 'MOVE';
KW_UP: 'UP';
KW_DOWN: 'DOWN';
KW_LEFT: 'LEFT';
KW_RIGHT: 'RIGHT';
KW_STEP: 'STEP';
KW_STEPS: 'STEPS';
KW_ATTACK: 'ATTACK';
