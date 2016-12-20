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
			"package": "doubt",
			"path": "doubt/doubt.js",
			"file": "doubt.js",
			"module": "doubt",
			"author": "Richeve S. Bebedor",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/doubt.git",
			"test": "doubt-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Finally, the one that will fix your doubts if array is an array,
			arguments, iterable or array-like.
	@end-module-documentation

	@include:
		{
			"cemento": "cemento",
			"harden": "harden",
			"protype": "protype"
		}
	@end-include
*/

const cemento = require( "cemento" );
const harden = require( "harden" );
const protype = require( "protype" );

//: @support-module:
	//: @reference: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
	Array.isArray||(Array.isArray=function(r){return"[object Array]"===Object.prototype.toString.call(r)});
//: @end-support-module

harden( "ARRAY", "array" );
harden( "AS_ARRAY", "as-array" );
harden( "ARGUMENTS", "arguments" );
harden( "ARRAY_LIKE", "array-like" );
harden( "ITERABLE", "iterable" );

const doubt = function doubt( array, condition ){
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

	let conditionType = protype( condition );
	if( conditionType.STRING &&
		condition != ARRAY &&
		condition != AS_ARRAY &&
		condition != ARGUMENTS &&
		condition != ARRAY_LIKE &&
		condition != ITERABLE )
	{
		throw new Error( "invalid condition" );
	}

	if( conditionType.STRING ){
		let arrayType = protype( array );
		if( arrayType.STRING ||
			arrayType.NUMBER ||
			arrayType.BOOLEAN ||
			arrayType.UNDEFINED ||
			arrayType.SYMBOL ||
			array === null )
		{
			return false;
		}

		if( condition == ARRAY ){
			return Array.isArray( array );

		}else if( condition == AS_ARRAY ){
			return ( doubt( array, ARRAY ) ||
				doubt( array, ARGUMENTS ) ||
				doubt( array, ARRAY_LIKE ) ||
				doubt( array, ITERABLE ) );

		}else if( condition == ARGUMENTS ){
			return ( protype( array ).OBJECT &&
				( /Arguments/ ).test( array.toString( ) ) );

		}else if( condition == ARRAY_LIKE ){
			return ( protype( array.length, NUMBER ) &&
				!!Object.keys( array ).length &&
				Object.keys( array )
					.some( function onEachIndex( index ){
						return protype( index, NUMBER );
					} ) );

		}else if( condition == ITERABLE ){
			return ( protype( Symbol, FUNCTION ) &&
				protype( Symbol.iterator, SYMBOL ) &&
				!!array[ Symbol.iterator ] );

		}else{
			return false;
		}

	}else{
		return cemento( {
			"ARRAY": doubt( array, ARRAY ),
			"AS_ARRAY": doubt( array, AS_ARRAY ),
			"ARGUMENTS": doubt( array, ARGUMENTS ),
			"ARRAY_LIKE": doubt( array, ARRAY_LIKE ),
			"ITERABLE": doubt( array, ITERABLE )
		} );
	}
};

module.exports = doubt;
