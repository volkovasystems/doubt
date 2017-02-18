"use strict";

const util = require( "util" );
const doubt = require( "./doubt.js" );

console.log( util.inspect( doubt( [ ] ), { "showHidden": true } ) );
console.log( doubt( [ ], ARRAY ) );
console.log( doubt( { } ) );
console.log( doubt( ) );
console.log( doubt( [ 1, 2, 3 ], ARRAY ) );
console.log( doubt( { }, ARRAY ) );

( function ( ){
	console.log( doubt( arguments, AS_ARRAY ) );
} )( );
