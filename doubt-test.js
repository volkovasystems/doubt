const util = require( "util" );

const assert = require( "assert" );
const doubt = require( "./doubt.js" );

assert.equal( doubt( Infinity, AS_ARRAY ), false, "should be false" );

assert.equal( doubt( NaN, AS_ARRAY ), false, "should be false" );

assert.equal( doubt( false, AS_ARRAY ), false, "should be false" );

assert.equal( doubt( "", AS_ARRAY ), false, "should be false" );

assert.equal( doubt( "hello world", AS_ARRAY ), false, "should be false" );

assert.equal( doubt( 123, AS_ARRAY ), false, "should be false" );

assert.equal( doubt( undefined, AS_ARRAY ), false, "should be false" );

assert.equal( doubt( { }, AS_ARRAY ), false, "should be false" );

assert.equal( doubt( [ ], AS_ARRAY ), true, "should be true" );

assert.equal( doubt( ( ( ) => arguments )( ), ARGUMENTS ), true, "should be true" );

console.log( "ok" );
