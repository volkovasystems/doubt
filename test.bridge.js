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

var assert = require("should");





//: @bridge:
var path = require("path");
//: @end-bridge

describe("doubt", function () {


	//: @bridge:
	var testBridge = path.resolve(__dirname, "bridge.html");
	var bridgeURL = "file://" + testBridge;

	describe("`doubt( [ ], ARRAY )`", function () {
		it("should return true", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt([], ARRAY);}).value, true);
		});
	});

	describe("`doubt( [ ], ARRAY_LIKE )`", function () {
		it("should return true", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt([], ARRAY_LIKE);}).value, true);
		});
	});

	describe("`doubt( [ ], ITERABLE )`", function () {
		it("should return true", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt([], ITERABLE);}).value, true);
		});
	});

	describe("`doubt( [ ], AS_ARRAY )`", function () {
		it("should return true", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt([], AS_ARRAY);}).value, true);
		});
	});

	describe("`doubt( [ 1, 2, 3 ], ARRAY )`", function () {
		it("should return true", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt([1, 2, 3], ARRAY);}).value, true);
		});
	});

	describe("`doubt( [ 1, 2, 3 ], ARRAY_LIKE )`", function () {
		it("should return true", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt([1, 2, 3], ARRAY_LIKE);}).value, true);
		});
	});

	describe("`doubt( [ 1, 2, 3 ], ITERABLE )`", function () {
		it("should return true", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt([1, 2, 3], ITERABLE);}).value, true);
		});
	});

	describe("`doubt( [ 1, 2, 3 ], AS_ARRAY )`", function () {
		it("should return true", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt([1, 2, 3], AS_ARRAY);}).value, true);
		});
	});

	describe("`doubt( ( function( ){ return arguments; } )( ), ARGUMENTS )`", function () {
		it("should return true", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt(function () {return arguments;}(), ARGUMENTS);}).value, true);
		});
	});

	describe("`doubt( ( function( ){ return arguments; } )( ), ARRAY_LIKE )`", function () {
		it("should return true", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt(function () {return arguments;}(), ARRAY_LIKE);}).value, true);
		});
	});

	describe("`doubt( ( function( ){ return arguments; } )( ), ITERABLE )`", function () {
		it("should return true", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt(function () {return arguments;}(), ITERABLE);}).value, true);
		});
	});

	describe("`doubt( ( function( ){ return arguments; } )( ), AS_ARRAY )`", function () {
		it("should return true", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt(function () {return arguments;}(), AS_ARRAY);}).value, true);
		});
	});

	describe("`doubt( ( function( ){ return arguments; } )( 'hello', 'world' ) ).value, ARGUMENTS )`", function () {
		it("should return true", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt(function () {return arguments;}("hello", "world"), ARGUMENTS);}).value, true);
		});
	});

	describe("`doubt( ( function( ){ return arguments; } )( 'hello', 'world' ) ).value, ARRAY_LIKE )`", function () {
		it("should return true", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt(function () {return arguments;}("hello", "world"), ARRAY_LIKE);}).value, true);
		});
	});

	describe("`doubt( ( function( ){ return arguments; } )( 'hello', 'world' ) ).value, ITERABLE )`", function () {
		it("should return true", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt(function () {return arguments;}("hello", "world"), ITERABLE);}).value, true);
		});
	});

	describe("`doubt( ( function( ){ return arguments; } )( 'hello', 'world' ) ).value, AS_ARRAY )`", function () {
		it("should return true", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt(function () {return arguments;}("hello", "world"), AS_ARRAY);}).value, true);
		});
	});

	describe("`doubt( { 'length': 0 }, ARRAY_LIKE )`", function () {
		it("should return true", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt({ "length": 0 }, ARRAY_LIKE);}).value, true);
		});
	});

	describe("`doubt( { 'length': 0 }, AS_ARRAY )`", function () {
		it("should return true", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt({ "length": 0 }, AS_ARRAY);}).value, true);
		});
	});

	describe("`doubt( [ ], ARGUMENTS )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt([], ARGUMENTS);}).value, false);
		});
	});

	describe("`doubt( ( function( ){ return arguments; } )( ), ARRAY )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt(function () {return arguments;}(), ARRAY);}).value, false);
		});
	});

	describe("`doubt( { 'length': 0 }, ARRAY )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt({ "length": 0 }, ARRAY);}).value, false);
		});
	});

	describe("`doubt( { 'length': 0 }, ARGUMENTS )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt({ "length": 0 }, ARGUMENTS);}).value, false);
		});
	});

	describe("`doubt( { 'length': 0 }, ITERABLE )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt({ "length": 0 }, ITERABLE);}).value, false);
		});
	});

	describe("`doubt( 'hello world', ARRAY )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt("hello world", ARRAY);}).value, false);
		});
	});

	describe("`doubt( 'hello world', ARGUMENTS )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt("hello world", ARGUMENTS);}).value, false);
		});
	});

	describe("`doubt( 'hello world', ARRAY_LIKE )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt("hello world", ARRAY_LIKE);}).value, false);
		});
	});

	describe("`doubt( 'hello world', ITERABLE )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt("hello world", ITERABLE);}).value, false);
		});
	});

	describe("`doubt( 'hello world', AS_ARRAY )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt("hello world", AS_ARRAY);}).value, false);
		});
	});

	describe("`doubt( 123, ARRAY )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt(123, ARRAY);}).value, false);
		});
	});

	describe("`doubt( 123, ARGUMENTS )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt(123, ARGUMENTS);}).value, false);
		});
	});

	describe("`doubt( 123, ARRAY_LIKE )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt(123, ARRAY_LIKE);}).value, false);
		});
	});

	describe("`doubt( 123, ITERABLE )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt(123, ITERABLE);}).value, false);
		});
	});

	describe("`doubt( 123, AS_ARRAY )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt(123, AS_ARRAY);}).value, false);
		});
	});

	describe("`doubt( 0, ARRAY )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt(0, ARRAY);}).value, false);
		});
	});

	describe("`doubt( 0, ARGUMENTS )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt(0, ARGUMENTS);}).value, false);
		});
	});

	describe("`doubt( 0, ARRAY_LIKE )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt(0, ARRAY_LIKE);}).value, false);
		});
	});

	describe("`doubt( 0, ITERABLE )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt(0, ITERABLE);}).value, false);
		});
	});

	describe("`doubt( 0, AS_ARRAY )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt(0, AS_ARRAY);}).value, false);
		});
	});

	describe("`doubt( Infinity, ARRAY )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt(Infinity, ARRAY);}).value, false);
		});
	});

	describe("`doubt( Infinity, ARGUMENTS )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt(Infinity, ARGUMENTS);}).value, false);
		});
	});

	describe("`doubt( Infinity, ARRAY_LIKE )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt(Infinity, ARRAY_LIKE);}).value, false);
		});
	});

	describe("`doubt( Infinity, ITERABLE )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt(Infinity, ITERABLE);}).value, false);
		});
	});

	describe("`doubt( Infinity, AS_ARRAY )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt(Infinity, AS_ARRAY);}).value, false);
		});
	});

	describe("`doubt( NaN, ARRAY )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt(NaN, ARRAY);}).value, false);
		});
	});

	describe("`doubt( NaN, ARGUMENTS )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt(NaN, ARGUMENTS);}).value, false);
		});
	});

	describe("`doubt( NaN, ARRAY_LIKE )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt(NaN, ARRAY_LIKE);}).value, false);
		});
	});

	describe("`doubt( NaN, ITERABLE )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt(NaN, ITERABLE);}).value, false);
		});
	});

	describe("`doubt( NaN, AS_ARRAY )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt(NaN, AS_ARRAY);}).value, false);
		});
	});

	describe("`doubt( true, ARRAY )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt(true, ARRAY);}).value, false);
		});
	});

	describe("`doubt( true, ARGUMENTS )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt(true, ARGUMENTS);}).value, false);
		});
	});

	describe("`doubt( true, ARRAY_LIKE )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt(true, ARRAY_LIKE);}).value, false);
		});
	});

	describe("`doubt( true, ITERABLE )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt(true, ITERABLE);}).value, false);
		});
	});

	describe("`doubt( true, AS_ARRAY )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt(true, AS_ARRAY);}).value, false);
		});
	});

	describe("`doubt( false, ARRAY )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt(false, ARRAY);}).value, false);
		});
	});

	describe("`doubt( false, ARGUMENTS )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt(false, ARGUMENTS);}).value, false);
		});
	});

	describe("`doubt( false, ARRAY_LIKE )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt(false, ARRAY_LIKE);}).value, false);
		});
	});

	describe("`doubt( false, ITERABLE )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt(false, ITERABLE);}).value, false);
		});
	});

	describe("`doubt( false, AS_ARRAY )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt(false, AS_ARRAY);}).value, false);
		});
	});

	describe("`doubt( { }, ARRAY )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt({}, ARRAY);}).value, false);
		});
	});

	describe("`doubt( { }, ARGUMENTS )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt({}, ARGUMENTS);}).value, false);
		});
	});

	describe("`doubt( { }, ARRAY_LIKE )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt({}, ARRAY_LIKE);}).value, false);
		});
	});

	describe("`doubt( { }, ITERABLE )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt({}, ITERABLE);}).value, false);
		});
	});

	describe("`doubt( { }, AS_ARRAY )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt({}, AS_ARRAY);}).value, false);
		});
	});

	describe("`doubt( { 'hello': 'world' }, ARRAY )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt({ 'hello': 'world' }, ARRAY);}).value, false);
		});
	});

	describe("`doubt( { 'hello': 'world' }, ARGUMENTS )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt({ 'hello': 'world' }, ARGUMENTS);}).value, false);
		});
	});

	describe("`doubt( { 'hello': 'world' }, ARRAY_LIKE )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt({ 'hello': 'world' }, ARRAY_LIKE);}).value, false);
		});
	});

	describe("`doubt( { 'hello': 'world' }, ITERABLE )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt({ 'hello': 'world' }, ITERABLE);}).value, false);
		});
	});

	describe("`doubt( { 'hello': 'world' }, AS_ARRAY )`", function () {
		it("should return false", function () {
			assert.equal(browser.url(bridgeURL).execute(function () {return doubt({ 'hello': 'world' }, AS_ARRAY);}).value, false);
		});
	});
	//: @end-bridge
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJ0ZXN0QnJpZGdlIiwicmVzb2x2ZSIsIl9fZGlybmFtZSIsImJyaWRnZVVSTCIsIml0IiwiZXF1YWwiLCJicm93c2VyIiwidXJsIiwiZXhlY3V0ZSIsImRvdWJ0IiwiQVJSQVkiLCJ2YWx1ZSIsIkFSUkFZX0xJS0UiLCJJVEVSQUJMRSIsIkFTX0FSUkFZIiwiYXJndW1lbnRzIiwiQVJHVU1FTlRTIiwiSW5maW5pdHkiLCJOYU4iXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7Ozs7O0FBTUE7QUFDQSxJQUFNQyxPQUFPRCxRQUFTLE1BQVQsQ0FBYjtBQUNBOztBQUVBRSxTQUFVLE9BQVYsRUFBbUIsWUFBTzs7O0FBR3pCO0FBQ0EsS0FBSUMsYUFBYUYsS0FBS0csT0FBTCxDQUFjQyxTQUFkLEVBQXlCLGFBQXpCLENBQWpCO0FBQ0EsS0FBSUMsd0JBQXVCSCxVQUEzQjs7QUFFQUQsVUFBVSx1QkFBVixFQUFtQyxZQUFPO0FBQ3pDSyxLQUFJLG9CQUFKLEVBQTBCLFlBQU87QUFDaENSLFVBQU9TLEtBQVAsQ0FBY0MsUUFBUUMsR0FBUixDQUFhSixTQUFiLEVBQXlCSyxPQUF6QixDQUFrQyxvQkFBT0MsTUFBTyxFQUFQLEVBQVlDLEtBQVosQ0FBUCxFQUFsQyxFQUErREMsS0FBN0UsRUFBb0YsSUFBcEY7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQVosVUFBVSw0QkFBVixFQUF3QyxZQUFPO0FBQzlDSyxLQUFJLG9CQUFKLEVBQTBCLFlBQU87QUFDaENSLFVBQU9TLEtBQVAsQ0FBY0MsUUFBUUMsR0FBUixDQUFhSixTQUFiLEVBQXlCSyxPQUF6QixDQUFrQyxvQkFBT0MsTUFBTyxFQUFQLEVB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NkJLLFFBQTdCLENBQVAsRUFBbEMsRUFBbUZILEtBQWpHLEVBQXdHLEtBQXhHO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7QUFLQTtBQUNBLENBL1pEIiwiZmlsZSI6InRlc3QuYnJpZGdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJkb3VidFwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZG91YnQvdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2RvdWJ0LmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cdFx0VGVzdCBtb2R1bGUgZm9yIGRvdWJ0LlxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcImRvdWJ0XCI6IFwiZG91YnRcIixcblx0XHRcdFwicGF0aFwiOiBcInBhdGhcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XG5cblxuXG5cblxuLy86IEBicmlkZ2U6XG5jb25zdCBwYXRoID0gcmVxdWlyZSggXCJwYXRoXCIgKTtcbi8vOiBAZW5kLWJyaWRnZVxuXG5kZXNjcmliZSggXCJkb3VidFwiLCAoICkgPT4ge1xuXHRcblxuXHQvLzogQGJyaWRnZTpcblx0bGV0IHRlc3RCcmlkZ2UgPSBwYXRoLnJlc29sdmUoIF9fZGlybmFtZSwgXCJicmlkZ2UuaHRtbFwiICk7XG5cdGxldCBicmlkZ2VVUkwgPSBgZmlsZTovLyR7IHRlc3RCcmlkZ2UgfWA7XG5cblx0ZGVzY3JpYmUoIFwiYGRvdWJ0KCBbIF0sIEFSUkFZIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZG91YnQoIFsgXSwgQVJSQVkgKSApLnZhbHVlLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGRvdWJ0KCBbIF0sIEFSUkFZX0xJS0UgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBkb3VidCggWyBdLCBBUlJBWV9MSUtFICkgKS52YWx1ZSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkb3VidCggWyBdLCBJVEVSQUJMRSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IGRvdWJ0KCBbIF0sIElURVJBQkxFICkgKS52YWx1ZSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkb3VidCggWyBdLCBBU19BUlJBWSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IGRvdWJ0KCBbIF0sIEFTX0FSUkFZICkgKS52YWx1ZSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkb3VidCggWyAxLCAyLCAzIF0sIEFSUkFZIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZG91YnQoIFsgMSwgMiwgMyBdLCBBUlJBWSApICkudmFsdWUsIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZG91YnQoIFsgMSwgMiwgMyBdLCBBUlJBWV9MSUtFIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZG91YnQoIFsgMSwgMiwgMyBdLCBBUlJBWV9MSUtFICkgKS52YWx1ZSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkb3VidCggWyAxLCAyLCAzIF0sIElURVJBQkxFIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZG91YnQoIFsgMSwgMiwgMyBdLCBJVEVSQUJMRSApICkudmFsdWUsIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZG91YnQoIFsgMSwgMiwgMyBdLCBBU19BUlJBWSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IGRvdWJ0KCBbIDEsIDIsIDMgXSwgQVNfQVJSQVkgKSApLnZhbHVlLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGRvdWJ0KCAoIGZ1bmN0aW9uKCApeyByZXR1cm4gYXJndW1lbnRzOyB9ICkoICksIEFSR1VNRU5UUyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IGRvdWJ0KCAoIGZ1bmN0aW9uKCApeyByZXR1cm4gYXJndW1lbnRzOyB9ICkoICksIEFSR1VNRU5UUyApICkudmFsdWUsIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZG91YnQoICggZnVuY3Rpb24oICl7IHJldHVybiBhcmd1bWVudHM7IH0gKSggKSwgQVJSQVlfTElLRSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IGRvdWJ0KCAoIGZ1bmN0aW9uKCApeyByZXR1cm4gYXJndW1lbnRzOyB9ICkoICksIEFSUkFZX0xJS0UgKSApLnZhbHVlLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGRvdWJ0KCAoIGZ1bmN0aW9uKCApeyByZXR1cm4gYXJndW1lbnRzOyB9ICkoICksIElURVJBQkxFIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZG91YnQoICggZnVuY3Rpb24oICl7IHJldHVybiBhcmd1bWVudHM7IH0gKSggKSwgSVRFUkFCTEUgKSApLnZhbHVlLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGRvdWJ0KCAoIGZ1bmN0aW9uKCApeyByZXR1cm4gYXJndW1lbnRzOyB9ICkoICksIEFTX0FSUkFZIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZG91YnQoICggZnVuY3Rpb24oICl7IHJldHVybiBhcmd1bWVudHM7IH0gKSggKSwgQVNfQVJSQVkgKSApLnZhbHVlLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGRvdWJ0KCAoIGZ1bmN0aW9uKCApeyByZXR1cm4gYXJndW1lbnRzOyB9ICkoICdoZWxsbycsICd3b3JsZCcgKSApLnZhbHVlLCBBUkdVTUVOVFMgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHRydWVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBkb3VidCggKCBmdW5jdGlvbiggKXsgcmV0dXJuIGFyZ3VtZW50czsgfSApKCBcImhlbGxvXCIsIFwid29ybGRcIiApLCBBUkdVTUVOVFMgKSApLnZhbHVlLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGRvdWJ0KCAoIGZ1bmN0aW9uKCApeyByZXR1cm4gYXJndW1lbnRzOyB9ICkoICdoZWxsbycsICd3b3JsZCcgKSApLnZhbHVlLCBBUlJBWV9MSUtFIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZG91YnQoICggZnVuY3Rpb24oICl7IHJldHVybiBhcmd1bWVudHM7IH0gKSggXCJoZWxsb1wiLCBcIndvcmxkXCIgKSwgQVJSQVlfTElLRSApICkudmFsdWUsIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZG91YnQoICggZnVuY3Rpb24oICl7IHJldHVybiBhcmd1bWVudHM7IH0gKSggJ2hlbGxvJywgJ3dvcmxkJyApICkudmFsdWUsIElURVJBQkxFIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZG91YnQoICggZnVuY3Rpb24oICl7IHJldHVybiBhcmd1bWVudHM7IH0gKSggXCJoZWxsb1wiLCBcIndvcmxkXCIgKSwgSVRFUkFCTEUgKSApLnZhbHVlLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGRvdWJ0KCAoIGZ1bmN0aW9uKCApeyByZXR1cm4gYXJndW1lbnRzOyB9ICkoICdoZWxsbycsICd3b3JsZCcgKSApLnZhbHVlLCBBU19BUlJBWSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IGRvdWJ0KCAoIGZ1bmN0aW9uKCApeyByZXR1cm4gYXJndW1lbnRzOyB9ICkoIFwiaGVsbG9cIiwgXCJ3b3JsZFwiICksIEFTX0FSUkFZICkgKS52YWx1ZSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkb3VidCggeyAnbGVuZ3RoJzogMCB9LCBBUlJBWV9MSUtFIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiB0cnVlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZG91YnQoIHsgXCJsZW5ndGhcIjogMCB9LCBBUlJBWV9MSUtFICkgKS52YWx1ZSwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkb3VidCggeyAnbGVuZ3RoJzogMCB9LCBBU19BUlJBWSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gdHJ1ZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IGRvdWJ0KCB7IFwibGVuZ3RoXCI6IDAgfSwgQVNfQVJSQVkgKSApLnZhbHVlLCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGRvdWJ0KCBbIF0sIEFSR1VNRU5UUyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBkb3VidCggWyBdLCBBUkdVTUVOVFMgKSApLnZhbHVlLCBmYWxzZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkb3VidCggKCBmdW5jdGlvbiggKXsgcmV0dXJuIGFyZ3VtZW50czsgfSApKCApLCBBUlJBWSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBkb3VidCggKCBmdW5jdGlvbiggKXsgcmV0dXJuIGFyZ3VtZW50czsgfSApKCApLCBBUlJBWSApICkudmFsdWUsIGZhbHNlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGRvdWJ0KCB7ICdsZW5ndGgnOiAwIH0sIEFSUkFZIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBmYWxzZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IGRvdWJ0KCB7IFwibGVuZ3RoXCI6IDAgfSwgQVJSQVkgKSApLnZhbHVlLCBmYWxzZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkb3VidCggeyAnbGVuZ3RoJzogMCB9LCBBUkdVTUVOVFMgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGZhbHNlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZG91YnQoIHsgXCJsZW5ndGhcIjogMCB9LCBBUkdVTUVOVFMgKSApLnZhbHVlLCBmYWxzZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkb3VidCggeyAnbGVuZ3RoJzogMCB9LCBJVEVSQUJMRSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBkb3VidCggeyBcImxlbmd0aFwiOiAwIH0sIElURVJBQkxFICkgKS52YWx1ZSwgZmFsc2UgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZG91YnQoICdoZWxsbyB3b3JsZCcsIEFSUkFZIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBmYWxzZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IGRvdWJ0KCBcImhlbGxvIHdvcmxkXCIsIEFSUkFZICkgKS52YWx1ZSwgZmFsc2UgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZG91YnQoICdoZWxsbyB3b3JsZCcsIEFSR1VNRU5UUyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBkb3VidCggXCJoZWxsbyB3b3JsZFwiLCBBUkdVTUVOVFMgKSApLnZhbHVlLCBmYWxzZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkb3VidCggJ2hlbGxvIHdvcmxkJywgQVJSQVlfTElLRSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBkb3VidCggXCJoZWxsbyB3b3JsZFwiLCBBUlJBWV9MSUtFICkgKS52YWx1ZSwgZmFsc2UgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZG91YnQoICdoZWxsbyB3b3JsZCcsIElURVJBQkxFIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBmYWxzZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IGRvdWJ0KCBcImhlbGxvIHdvcmxkXCIsIElURVJBQkxFICkgKS52YWx1ZSwgZmFsc2UgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZG91YnQoICdoZWxsbyB3b3JsZCcsIEFTX0FSUkFZIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBmYWxzZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IGRvdWJ0KCBcImhlbGxvIHdvcmxkXCIsIEFTX0FSUkFZICkgKS52YWx1ZSwgZmFsc2UgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZG91YnQoIDEyMywgQVJSQVkgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGZhbHNlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZG91YnQoIDEyMywgQVJSQVkgKSApLnZhbHVlLCBmYWxzZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkb3VidCggMTIzLCBBUkdVTUVOVFMgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGZhbHNlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZG91YnQoIDEyMywgQVJHVU1FTlRTICkgKS52YWx1ZSwgZmFsc2UgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZG91YnQoIDEyMywgQVJSQVlfTElLRSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBkb3VidCggMTIzLCBBUlJBWV9MSUtFICkgKS52YWx1ZSwgZmFsc2UgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZG91YnQoIDEyMywgSVRFUkFCTEUgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGZhbHNlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZG91YnQoIDEyMywgSVRFUkFCTEUgKSApLnZhbHVlLCBmYWxzZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkb3VidCggMTIzLCBBU19BUlJBWSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBkb3VidCggMTIzLCBBU19BUlJBWSApICkudmFsdWUsIGZhbHNlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGRvdWJ0KCAwLCBBUlJBWSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBkb3VidCggMCwgQVJSQVkgKSApLnZhbHVlLCBmYWxzZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkb3VidCggMCwgQVJHVU1FTlRTIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBmYWxzZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IGRvdWJ0KCAwLCBBUkdVTUVOVFMgKSApLnZhbHVlLCBmYWxzZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkb3VidCggMCwgQVJSQVlfTElLRSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBkb3VidCggMCwgQVJSQVlfTElLRSApICkudmFsdWUsIGZhbHNlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGRvdWJ0KCAwLCBJVEVSQUJMRSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBkb3VidCggMCwgSVRFUkFCTEUgKSApLnZhbHVlLCBmYWxzZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkb3VidCggMCwgQVNfQVJSQVkgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGZhbHNlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZG91YnQoIDAsIEFTX0FSUkFZICkgKS52YWx1ZSwgZmFsc2UgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZG91YnQoIEluZmluaXR5LCBBUlJBWSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBkb3VidCggSW5maW5pdHksIEFSUkFZICkgKS52YWx1ZSwgZmFsc2UgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZG91YnQoIEluZmluaXR5LCBBUkdVTUVOVFMgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGZhbHNlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZG91YnQoIEluZmluaXR5LCBBUkdVTUVOVFMgKSApLnZhbHVlLCBmYWxzZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkb3VidCggSW5maW5pdHksIEFSUkFZX0xJS0UgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGZhbHNlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZG91YnQoIEluZmluaXR5LCBBUlJBWV9MSUtFICkgKS52YWx1ZSwgZmFsc2UgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZG91YnQoIEluZmluaXR5LCBJVEVSQUJMRSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBkb3VidCggSW5maW5pdHksIElURVJBQkxFICkgKS52YWx1ZSwgZmFsc2UgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZG91YnQoIEluZmluaXR5LCBBU19BUlJBWSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBkb3VidCggSW5maW5pdHksIEFTX0FSUkFZICkgKS52YWx1ZSwgZmFsc2UgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZG91YnQoIE5hTiwgQVJSQVkgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGZhbHNlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZG91YnQoIE5hTiwgQVJSQVkgKSApLnZhbHVlLCBmYWxzZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkb3VidCggTmFOLCBBUkdVTUVOVFMgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGZhbHNlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZG91YnQoIE5hTiwgQVJHVU1FTlRTICkgKS52YWx1ZSwgZmFsc2UgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZG91YnQoIE5hTiwgQVJSQVlfTElLRSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBkb3VidCggTmFOLCBBUlJBWV9MSUtFICkgKS52YWx1ZSwgZmFsc2UgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZG91YnQoIE5hTiwgSVRFUkFCTEUgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGZhbHNlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZG91YnQoIE5hTiwgSVRFUkFCTEUgKSApLnZhbHVlLCBmYWxzZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkb3VidCggTmFOLCBBU19BUlJBWSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBkb3VidCggTmFOLCBBU19BUlJBWSApICkudmFsdWUsIGZhbHNlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGRvdWJ0KCB0cnVlLCBBUlJBWSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBkb3VidCggdHJ1ZSwgQVJSQVkgKSApLnZhbHVlLCBmYWxzZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkb3VidCggdHJ1ZSwgQVJHVU1FTlRTIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBmYWxzZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IGRvdWJ0KCB0cnVlLCBBUkdVTUVOVFMgKSApLnZhbHVlLCBmYWxzZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkb3VidCggdHJ1ZSwgQVJSQVlfTElLRSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBkb3VidCggdHJ1ZSwgQVJSQVlfTElLRSApICkudmFsdWUsIGZhbHNlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGRvdWJ0KCB0cnVlLCBJVEVSQUJMRSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBkb3VidCggdHJ1ZSwgSVRFUkFCTEUgKSApLnZhbHVlLCBmYWxzZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkb3VidCggdHJ1ZSwgQVNfQVJSQVkgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGZhbHNlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZG91YnQoIHRydWUsIEFTX0FSUkFZICkgKS52YWx1ZSwgZmFsc2UgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZG91YnQoIGZhbHNlLCBBUlJBWSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBkb3VidCggZmFsc2UsIEFSUkFZICkgKS52YWx1ZSwgZmFsc2UgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZG91YnQoIGZhbHNlLCBBUkdVTUVOVFMgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGZhbHNlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZG91YnQoIGZhbHNlLCBBUkdVTUVOVFMgKSApLnZhbHVlLCBmYWxzZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkb3VidCggZmFsc2UsIEFSUkFZX0xJS0UgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGZhbHNlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZG91YnQoIGZhbHNlLCBBUlJBWV9MSUtFICkgKS52YWx1ZSwgZmFsc2UgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZG91YnQoIGZhbHNlLCBJVEVSQUJMRSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBkb3VidCggZmFsc2UsIElURVJBQkxFICkgKS52YWx1ZSwgZmFsc2UgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZG91YnQoIGZhbHNlLCBBU19BUlJBWSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBkb3VidCggZmFsc2UsIEFTX0FSUkFZICkgKS52YWx1ZSwgZmFsc2UgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZG91YnQoIHsgfSwgQVJSQVkgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGZhbHNlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZG91YnQoIHsgfSwgQVJSQVkgKSApLnZhbHVlLCBmYWxzZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkb3VidCggeyB9LCBBUkdVTUVOVFMgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGZhbHNlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZG91YnQoIHsgfSwgQVJHVU1FTlRTICkgKS52YWx1ZSwgZmFsc2UgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZG91YnQoIHsgfSwgQVJSQVlfTElLRSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBkb3VidCggeyB9LCBBUlJBWV9MSUtFICkgKS52YWx1ZSwgZmFsc2UgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZG91YnQoIHsgfSwgSVRFUkFCTEUgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGZhbHNlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZG91YnQoIHsgfSwgSVRFUkFCTEUgKSApLnZhbHVlLCBmYWxzZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBkb3VidCggeyB9LCBBU19BUlJBWSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gZmFsc2VcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBkb3VidCggeyB9LCBBU19BUlJBWSApICkudmFsdWUsIGZhbHNlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGRvdWJ0KCB7ICdoZWxsbyc6ICd3b3JsZCcgfSwgQVJSQVkgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGZhbHNlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZG91YnQoIHsgJ2hlbGxvJzogJ3dvcmxkJyB9LCBBUlJBWSApICkudmFsdWUsIGZhbHNlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGRvdWJ0KCB7ICdoZWxsbyc6ICd3b3JsZCcgfSwgQVJHVU1FTlRTIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBmYWxzZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IGRvdWJ0KCB7ICdoZWxsbyc6ICd3b3JsZCcgfSwgQVJHVU1FTlRTICkgKS52YWx1ZSwgZmFsc2UgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgZG91YnQoIHsgJ2hlbGxvJzogJ3dvcmxkJyB9LCBBUlJBWV9MSUtFIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBmYWxzZVwiLCAoICkgPT4ge1xuXHRcdFx0YXNzZXJ0LmVxdWFsKCBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IGRvdWJ0KCB7ICdoZWxsbyc6ICd3b3JsZCcgfSwgQVJSQVlfTElLRSApICkudmFsdWUsIGZhbHNlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGRvdWJ0KCB7ICdoZWxsbyc6ICd3b3JsZCcgfSwgSVRFUkFCTEUgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGZhbHNlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZG91YnQoIHsgJ2hlbGxvJzogJ3dvcmxkJyB9LCBJVEVSQUJMRSApICkudmFsdWUsIGZhbHNlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGRvdWJ0KCB7ICdoZWxsbyc6ICd3b3JsZCcgfSwgQVNfQVJSQVkgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGZhbHNlXCIsICggKSA9PiB7XG5cdFx0XHRhc3NlcnQuZXF1YWwoIGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKCAoICkgPT4gZG91YnQoIHsgJ2hlbGxvJzogJ3dvcmxkJyB9LCBBU19BUlJBWSApICkudmFsdWUsIGZhbHNlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cdC8vOiBAZW5kLWJyaWRnZVxufSApO1xuIl19
//# sourceMappingURL=test.bridge.js.map
