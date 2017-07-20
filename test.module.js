const assert = require( "assert" );
const doubt = require( "./doubt.js" );

assert.equal( doubt( [ ], ARRAY ), true, "should be true" );

assert.equal( doubt( arguments, ARGUMENTS ), true, "should be true" );

assert.equal( doubt( arguments, ITERABLE ), true, "should be true" );

assert.equal( doubt( [ { "option": { "name": "jlm" } } ], ITERABLE ), true, "should be true" );

assert.equal( doubt( [ { [ Symbol.for( "hello" ) ]: "test" } ], ITERABLE ), true, "should be true" );

assert.equal( doubt( ( ( ) => arguments )( ), ARGUMENTS ), true, "should be true" );

assert.equal( doubt( [ { } ], ARRAY_LIKE ), false, "should be false" );

assert.equal( doubt( Infinity, AS_ARRAY ), false, "should be false" );

assert.equal( doubt( NaN, AS_ARRAY ), false, "should be false" );

assert.equal( doubt( false, AS_ARRAY ), false, "should be false" );

console.log( "ok" );
