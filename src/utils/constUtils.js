// Symbols
const OPENING_PARENTHESIS = '(';
const CLOSING_PARENTHESIS = ')';
const OPENING_CURLY_BRACKET = '{';
const CLOSING_CURLY_BRACKET = '}';
const OPENING_SQUARE_BRACKET = '[';
const CLOSING_SQUARE_BRACKET = ']';
const LOGICAL_OR = '|';
const SEMICOLON=';';
const DOLLAR = '$';
const AMPERSAND = '&';
const EQUALS = '=';

// Types
const SHAPE_TYPE = 'shape'
const COMMENT_TYPE = 'comment';
const WS_TYPE = 'ws';
const VALUESET_TYPE = 'valueSet';
const PREFIXED_IRI = 'string-2';
const IRI = 'variable-3';
const PREFIX_ALIAS_TYPE = 'prefixDelcAlias';
const PREFIX_IRI_TYPE = 'prefixDelcIRI';
const BASE_TYPE = 'baseDecl';
const IMPORT_TYPE = 'importDecl';
const PUNC_TYPE = 'punc';
const KEYWORD_TYPE = 'keyword';
const SHAPE_REF_TYPE = 'shapeRef';

// Keywords
const AND_KEYWORD = 'AND';
const OR_KEYWORD = 'OR';
const PREFIX_KEYWORD = 'PREFIX';
const BASE_KEYWORD = 'BASE';
const IMPORT_KEYWORD = 'IMPORT';
const START_KEYWORD = 'START';


module.exports ={
    OPENING_PARENTHESIS:OPENING_PARENTHESIS,
    CLOSING_PARENTHESIS:CLOSING_PARENTHESIS,
    OPENING_CURLY_BRACKET:OPENING_CURLY_BRACKET,
    CLOSING_CURLY_BRACKET:CLOSING_CURLY_BRACKET,
    OPENING_SQUARE_BRACKET:OPENING_SQUARE_BRACKET,
    CLOSING_SQUARE_BRACKET:CLOSING_SQUARE_BRACKET,
    LOGICAL_OR:LOGICAL_OR,
    DOLLAR:DOLLAR,
    SEMICOLON:SEMICOLON,
    AMPERSAND:AMPERSAND,
    EQUALS:EQUALS,

    SHAPE_TYPE:SHAPE_TYPE,
    COMMENT_TYPE:COMMENT_TYPE,
    WS_TYPE:WS_TYPE,
    VALUESET_TYPE:VALUESET_TYPE,
    PREFIXED_IRI:PREFIXED_IRI,
    IRI:IRI,
    PREFIX_ALIAS_TYPE:PREFIX_ALIAS_TYPE,
    PREFIX_IRI_TYPE:PREFIX_IRI_TYPE,
    BASE_TYPE:BASE_TYPE,
    IMPORT_TYPE:IMPORT_TYPE,
    PUNC_TYPE:PUNC_TYPE,
    KEYWORD_TYPE:KEYWORD_TYPE,
    SHAPE_REF_TYPE:SHAPE_REF_TYPE,

    AND_KEYWORD:AND_KEYWORD,
    OR_KEYWORD:OR_KEYWORD,
    PREFIX_KEYWORD:PREFIX_KEYWORD,
    BASE_KEYWORD:BASE_KEYWORD,
    IMPORT_KEYWORD:IMPORT_KEYWORD,
    START_KEYWORD:START_KEYWORD
}