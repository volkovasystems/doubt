"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "doubt",
			"path": "doubt/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/doubt.git"
		}
	@end-test-configuration

	@test-documentation:
		Test module for doubt.
	@end-test-documentation

	@include:
		{
			"assert": "should",
			"doubt": "doubt",
			"path": "path"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const doubt = require( "./doubt.js" );
//: @end-server





describe( "doubt", ( ) => {
	//: @!bridge:
	describe( "`doubt( [ ], ARRAY )`", ( ) => {
		it( "should return true", ( ) => {
			assert.equal( doubt( [ ], ARRAY ), true );
		} );
	} );

	describe( "`doubt( [ ], ARRAY_LIKE )`", ( ) => {
		it( "should return true", ( ) => {
			assert.equal( doubt( [ ], ARRAY_LIKE ), true );
		} );
	} );

	describe( "`doubt( [ ], ITERABLE )`", ( ) => {
		it( "should return true", ( ) => {
			assert.equal( doubt( [ ], ITERABLE ), true );
		} );
	} );

	describe( "`doubt( [ ], AS_ARRAY )`", ( ) => {
		it( "should return true", ( ) => {
			assert.equal( doubt( [ ], AS_ARRAY ), true );
		} );
	} );

	describe( "`doubt( [ 1, 2, 3 ], ARRAY )`", ( ) => {
		it( "should return true", ( ) => {
			assert.equal( doubt( [ 1, 2, 3 ], ARRAY ), true );
		} );
	} );

	describe( "`doubt( [ 1, 2, 3 ], ARRAY_LIKE )`", ( ) => {
		it( "should return true", ( ) => {
			assert.equal( doubt( [ 1, 2, 3 ], ARRAY_LIKE ), true );
		} );
	} );

	describe( "`doubt( [ 1, 2, 3 ], ITERABLE )`", ( ) => {
		it( "should return true", ( ) => {
			assert.equal( doubt( [ 1, 2, 3 ], ITERABLE ), true );
		} );
	} );

	describe( "`doubt( [ 1, 2, 3 ], AS_ARRAY )`", ( ) => {
		it( "should return true", ( ) => {
			assert.equal( doubt( [ 1, 2, 3 ], AS_ARRAY ), true );
		} );
	} );

	describe( "`doubt( ( function( ){ return arguments; } )( ), ARGUMENTS )`", ( ) => {
		it( "should return true", ( ) => {
			assert.equal( doubt( ( function( ){ return arguments; } )( ), ARGUMENTS ), true );
		} );
	} );

	describe( "`doubt( ( function( ){ return arguments; } )( ), ARRAY_LIKE )`", ( ) => {
		it( "should return true", ( ) => {
			assert.equal( doubt( ( function( ){ return arguments; } )( ), ARRAY_LIKE ), true );
		} );
	} );

	describe( "`doubt( ( function( ){ return arguments; } )( ), ITERABLE )`", ( ) => {
		it( "should return true", ( ) => {
			assert.equal( doubt( ( function( ){ return arguments; } )( ), ITERABLE ), true );
		} );
	} );

	describe( "`doubt( ( function( ){ return arguments; } )( ), AS_ARRAY )`", ( ) => {
		it( "should return true", ( ) => {
			assert.equal( doubt( ( function( ){ return arguments; } )( ), AS_ARRAY ), true );
		} );
	} );

	describe( "`doubt( ( function( ){ return arguments; } )( 'hello', 'world' ), ARGUMENTS )`", ( ) => {
		it( "should return true", ( ) => {
			assert.equal( doubt( ( function( ){ return arguments; } )( "hello", "world" ), ARGUMENTS ), true );
		} );
	} );

	describe( "`doubt( ( function( ){ return arguments; } )( 'hello', 'world' ), ARRAY_LIKE )`", ( ) => {
		it( "should return true", ( ) => {
			assert.equal( doubt( ( function( ){ return arguments; } )( "hello", "world" ), ARRAY_LIKE ), true );
		} );
	} );

	describe( "`doubt( ( function( ){ return arguments; } )( 'hello', 'world' ), ITERABLE )`", ( ) => {
		it( "should return true", ( ) => {
			assert.equal( doubt( ( function( ){ return arguments; } )( "hello", "world" ), ITERABLE ), true );
		} );
	} );

	describe( "`doubt( ( function( ){ return arguments; } )( 'hello', 'world' ), AS_ARRAY )`", ( ) => {
		it( "should return true", ( ) => {
			assert.equal( doubt( ( function( ){ return arguments; } )( "hello", "world" ), AS_ARRAY ), true );
		} );
	} );

	describe( "`doubt( { 'length': 0 }, ARRAY_LIKE )`", ( ) => {
		it( "should return true", ( ) => {
			assert.equal( doubt( { "length": 0 }, ARRAY_LIKE ), true );
		} );
	} );

	describe( "`doubt( { 'length': 0 }, AS_ARRAY )`", ( ) => {
		it( "should return true", ( ) => {
			assert.equal( doubt( { "length": 0 }, AS_ARRAY ), true );
		} );
	} );

	describe( "`doubt( [ ], ARGUMENTS )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( [ ], ARGUMENTS ), false );
		} );
	} );

	describe( "`doubt( ( function( ){ return arguments; } )( ), ARRAY )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( ( function( ){ return arguments; } )( ), ARRAY ), false );
		} );
	} );

	describe( "`doubt( { 'length': 0 }, ARRAY )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( { "length": 0 }, ARRAY ), false );
		} );
	} );

	describe( "`doubt( { 'length': 0 }, ARGUMENTS )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( { "length": 0 }, ARGUMENTS ), false );
		} );
	} );

	describe( "`doubt( { 'length': 0 }, ITERABLE )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( { "length": 0 }, ITERABLE ), false );
		} );
	} );

	describe( "`doubt( 'hello world', ARRAY )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( "hello world", ARRAY ), false );
		} );
	} );

	describe( "`doubt( 'hello world', ARGUMENTS )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( "hello world", ARGUMENTS ), false );
		} );
	} );

	describe( "`doubt( 'hello world', ARRAY_LIKE )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( "hello world", ARRAY_LIKE ), false );
		} );
	} );

	describe( "`doubt( 'hello world', ITERABLE )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( "hello world", ITERABLE ), false );
		} );
	} );

	describe( "`doubt( 'hello world', AS_ARRAY )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( "hello world", AS_ARRAY ), false );
		} );
	} );

	describe( "`doubt( 123, ARRAY )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( 123, ARRAY ), false );
		} );
	} );

	describe( "`doubt( 123, ARGUMENTS )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( 123, ARGUMENTS ), false );
		} );
	} );

	describe( "`doubt( 123, ARRAY_LIKE )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( 123, ARRAY_LIKE ), false );
		} );
	} );

	describe( "`doubt( 123, ITERABLE )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( 123, ITERABLE ), false );
		} );
	} );

	describe( "`doubt( 123, AS_ARRAY )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( 123, AS_ARRAY ), false );
		} );
	} );

	describe( "`doubt( 0, ARRAY )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( 0, ARRAY ), false );
		} );
	} );

	describe( "`doubt( 0, ARGUMENTS )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( 0, ARGUMENTS ), false );
		} );
	} );

	describe( "`doubt( 0, ARRAY_LIKE )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( 0, ARRAY_LIKE ), false );
		} );
	} );

	describe( "`doubt( 0, ITERABLE )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( 0, ITERABLE ), false );
		} );
	} );

	describe( "`doubt( 0, AS_ARRAY )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( 0, AS_ARRAY ), false );
		} );
	} );

	describe( "`doubt( Infinity, ARRAY )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( Infinity, ARRAY ), false );
		} );
	} );

	describe( "`doubt( Infinity, ARGUMENTS )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( Infinity, ARGUMENTS ), false );
		} );
	} );

	describe( "`doubt( Infinity, ARRAY_LIKE )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( Infinity, ARRAY_LIKE ), false );
		} );
	} );

	describe( "`doubt( Infinity, ITERABLE )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( Infinity, ITERABLE ), false );
		} );
	} );

	describe( "`doubt( Infinity, AS_ARRAY )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( Infinity, AS_ARRAY ), false );
		} );
	} );

	describe( "`doubt( NaN, ARRAY )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( NaN, ARRAY ), false );
		} );
	} );

	describe( "`doubt( NaN, ARGUMENTS )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( NaN, ARGUMENTS ), false );
		} );
	} );

	describe( "`doubt( NaN, ARRAY_LIKE )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( NaN, ARRAY_LIKE ), false );
		} );
	} );

	describe( "`doubt( NaN, ITERABLE )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( NaN, ITERABLE ), false );
		} );
	} );

	describe( "`doubt( NaN, AS_ARRAY )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( NaN, AS_ARRAY ), false );
		} );
	} );

	describe( "`doubt( true, ARRAY )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( true, ARRAY ), false );
		} );
	} );

	describe( "`doubt( true, ARGUMENTS )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( true, ARGUMENTS ), false );
		} );
	} );

	describe( "`doubt( true, ARRAY_LIKE )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( true, ARRAY_LIKE ), false );
		} );
	} );

	describe( "`doubt( true, ITERABLE )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( true, ITERABLE ), false );
		} );
	} );

	describe( "`doubt( true, AS_ARRAY )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( true, AS_ARRAY ), false );
		} );
	} );

	describe( "`doubt( false, ARRAY )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( false, ARRAY ), false );
		} );
	} );

	describe( "`doubt( false, ARGUMENTS )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( false, ARGUMENTS ), false );
		} );
	} );

	describe( "`doubt( false, ARRAY_LIKE )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( false, ARRAY_LIKE ), false );
		} );
	} );

	describe( "`doubt( false, ITERABLE )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( false, ITERABLE ), false );
		} );
	} );

	describe( "`doubt( false, AS_ARRAY )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( false, AS_ARRAY ), false );
		} );
	} );

	describe( "`doubt( { }, ARRAY )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( { }, ARRAY ), false );
		} );
	} );

	describe( "`doubt( { }, ARGUMENTS )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( { }, ARGUMENTS ), false );
		} );
	} );

	describe( "`doubt( { }, ARRAY_LIKE )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( { }, ARRAY_LIKE ), false );
		} );
	} );

	describe( "`doubt( { }, ITERABLE )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( { }, ITERABLE ), false );
		} );
	} );

	describe( "`doubt( { }, AS_ARRAY )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( { }, AS_ARRAY ), false );
		} );
	} );

	describe( "`doubt( { 'hello': 'world' }, ARRAY )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( { 'hello': 'world' }, ARRAY ), false );
		} );
	} );

	describe( "`doubt( { 'hello': 'world' }, ARGUMENTS )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( { 'hello': 'world' }, ARGUMENTS ), false );
		} );
	} );

	describe( "`doubt( { 'hello': 'world' }, ARRAY_LIKE )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( { 'hello': 'world' }, ARRAY_LIKE ), false );
		} );
	} );

	describe( "`doubt( { 'hello': 'world' }, ITERABLE )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( { 'hello': 'world' }, ITERABLE ), false );
		} );
	} );

	describe( "`doubt( { 'hello': 'world' }, AS_ARRAY )`", ( ) => {
		it( "should return false", ( ) => {
			assert.equal( doubt( { 'hello': 'world' }, AS_ARRAY ), false );
		} );
	} );
	//: @end-bridge

	
} );
