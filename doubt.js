"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2016 Richeve Siodina Bebedor
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
	@end-module-license

	@module-configuration:
		{
			"package": "olivant",
			"path": "olivant/olivant.js",
			"file": "olivant.js",
			"module": "olivant",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/olivant.git",
			"test": "olivant-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
	@end-module-documentation

	@include:
		{
			"harden": "harden",
			"raze": "raze"
		}
	@end-include
*/

//: @support-module:
	if( !Array.isArray ){
		Array.isArray = function isArray( parameter ){
			return Object.prototype.toString.call( parameter ) === "[object Array]";
		};
	}
//: @end-support-module


if( typeof window == "undefined" ){
	var harden = require( "harden" );
	var raze = require( "raze" );
}

if( typeof window != "undefined" &&
	!( "harden" in window ) )
{
	throw new Error( "harden is not defined" );
}

if( typeof window != "undefined" &&
	!( "raze" in window ) )
{
	throw new Error( "raze is not defined" );
}

harden( "ARRAY", "array" );
harden( "AS_ARRAY", "as-array" );
harden( "ARGUMENTS", "arguments" );
harden( "ARRAY_LIKE", "array-like" );
harden( "ITERABLE", "iterable" );

var doubt = function doubt( array, condition ){
	/*;
		@meta-configuration:
			{
				"array:required": [
					"[*]",
					"Array",
					"Arguments"
				],
				"condition": "string"
			}
		@end-meta-configuration
	*/

	if( typeof condition == "string" &&
		condition != ARRAY &&
		condition != AS_ARRAY &&
		condition != ARGUMENTS &&
		condition != ARRAY_LIKE &&
		condition != ITERABLE )
	{
		throw new Error( "invalid condition" );
	}

	if( typeof condition == "string" ){
		if( condition == ARRAY ){
			return Array.isArray( array );

		}else if( condition == AS_ARRAY ){
			return ( doubt( array, ARRAY ) ||
				doubt( array, ARGUMENTS ) ||
				doubt( array, ARRAY_LIKE ) ||
				doubt( array, ITERABLE ) );

		}else if( condition == ARGUMENTS ){
			return ( typeof array == "object" &&
				( /Arguments/ ).test( array.toString( ) ) );

		}else if( condition == ARRAY_LIKE ){
			return ( typeof array.length == "number" &&
				!!Object.keys( array ).length &&
				Object.keys( array )
					.some( function onEachIndex( index ){
						return ( typeof index == "number" );
					} ) );

		}else if( condition == ITERABLE ){
			return ( typeof Symbol == "function" &&
				typeof Symbol.iterator == "symbol" &&
				!!array[ Symbol.iterator ] );

		}else{
			return false;
		}

	}else{
		var result = { };

		harden( "ARRAY", doubt( array, ARRAY ), result );
		harden( "AS_ARRAY", doubt( array, AS_ARRAY ), result );
		harden( "ARGUMENTS", doubt( array, ARGUMENTS ), result );
		harden( "ARRAY_LIKE", doubt( array, ARRAY_LIKE ), result );
		harden( "ITERABLE", doubt( array, ITERABLE ), result );

		result.valueOf = function valueOf( ){
			return ( result.ARGUMENTS? ARGUMENTS :
				result.ITERABLE? ITERABLE :
				result.ARRAY_LIKE? ARRAY_LIKE :
				result.ARRAY? ARRAY :
				typeof array );
		};

		result.toString = function toString( ){
			return result.valueOf( );
		};

		harden( "value", function value( ){
			return raze( array );
		}, result );

		return result;
	}
};

if( typeof module != "undefined" ){
	module.exports = doubt;
}
