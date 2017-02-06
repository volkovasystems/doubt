"use strict";

const util = require( "util" );
const doubt = require( "./doubt.js" );

console.log( util.inspect( doubt( [ ] ), { "showHidden": true } ) );

console.log( doubt( [ ], ARRAY ) );

console.log( doubt( { } ) );
