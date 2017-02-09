"use strict";

/*;
	@module-license:
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
			"falzy": "falzy",
			"harden": "harden",
			"protype": "protype"
		}
	@end-include
*/

var _iterator = require("babel-runtime/core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require("babel-runtime/core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cemento = require("cemento");
var falzy = require("falzy");
var harden = require("harden");
var protype = require("protype");

var ARGUMENTS_CLASS_PATTERN = /Arguments/;

harden("ARRAY", "array");
harden("AS_ARRAY", "as-array");
harden("ARGUMENTS", "arguments");
harden("ARRAY_LIKE", "array-like");
harden("ITERABLE", "iterable");

var doubt = function doubt(array, condition) {
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

	if (falzy(array) || protype(array, STRING, NUMBER, BOOLEAN, SYMBOL) || (0, _stringify2.default)(array) === "{}") {
		return false;
	}

	if (arguments.length === 2 && condition !== ARRAY && condition !== AS_ARRAY && condition !== ARGUMENTS && condition !== ARRAY_LIKE && condition !== ITERABLE) {
		throw new Error("invalid condition");
	}

	if (arguments.length === 2) {
		if (condition == ARRAY) {
			return Array.isArray(array);
		} else if (condition == AS_ARRAY) {
			return doubt(array, ARRAY) || doubt(array, ARGUMENTS) || doubt(array, ARRAY_LIKE) || doubt(array, ITERABLE);
		} else if (condition == ARGUMENTS) {
			return protype(array, OBJECT) && ARGUMENTS_CLASS_PATTERN.test(array.toString());
		} else if (condition == ARRAY_LIKE) {
			var key = (0, _keys2.default)(array);

			return protype(array.length, NUMBER) && key.length > 0 && key.some(function (index) {
				return protype(index, NUMBER);
			});
		} else if (condition == ITERABLE) {
			return protype(_symbol2.default, FUNCTION) && protype(_iterator2.default, SYMBOL) && !!array[_iterator2.default];
		} else {
			return false;
		}
	} else {
		return cemento({
			"ARRAY": doubt(array, ARRAY),
			"AS_ARRAY": doubt(array, AS_ARRAY),
			"ARGUMENTS": doubt(array, ARGUMENTS),
			"ARRAY_LIKE": doubt(array, ARRAY_LIKE),
			"ITERABLE": doubt(array, ITERABLE)
		});
	}
};

module.exports = doubt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvdWJ0LmpzIl0sIm5hbWVzIjpbImNlbWVudG8iLCJyZXF1aXJlIiwiZmFsenkiLCJoYXJkZW4iLCJwcm90eXBlIiwiQVJHVU1FTlRTX0NMQVNTX1BBVFRFUk4iLCJkb3VidCIsImFycmF5IiwiY29uZGl0aW9uIiwiU1RSSU5HIiwiTlVNQkVSIiwiQk9PTEVBTiIsIlNZTUJPTCIsImFyZ3VtZW50cyIsImxlbmd0aCIsIkFSUkFZIiwiQVNfQVJSQVkiLCJBUkdVTUVOVFMiLCJBUlJBWV9MSUtFIiwiSVRFUkFCTEUiLCJFcnJvciIsIkFycmF5IiwiaXNBcnJheSIsIk9CSkVDVCIsInRlc3QiLCJ0b1N0cmluZyIsImtleSIsInNvbWUiLCJpbmRleCIsIkZVTkNUSU9OIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkRBLElBQU1BLFVBQVVDLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUUsU0FBU0YsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNRyxVQUFVSCxRQUFTLFNBQVQsQ0FBaEI7O0FBRUEsSUFBTUksMEJBQTBCLFdBQWhDOztBQUVBRixPQUFRLE9BQVIsRUFBaUIsT0FBakI7QUFDQUEsT0FBUSxVQUFSLEVBQW9CLFVBQXBCO0FBQ0FBLE9BQVEsV0FBUixFQUFxQixXQUFyQjtBQUNBQSxPQUFRLFlBQVIsRUFBc0IsWUFBdEI7QUFDQUEsT0FBUSxVQUFSLEVBQW9CLFVBQXBCOztBQUVBLElBQU1HLFFBQVEsU0FBU0EsS0FBVCxDQUFnQkMsS0FBaEIsRUFBdUJDLFNBQXZCLEVBQWtDO0FBQy9DOzs7Ozs7Ozs7Ozs7O0FBYUEsS0FBSU4sTUFBT0ssS0FBUCxLQUNISCxRQUFTRyxLQUFULEVBQWdCRSxNQUFoQixFQUF3QkMsTUFBeEIsRUFBZ0NDLE9BQWhDLEVBQXlDQyxNQUF6QyxDQURHLElBRUYseUJBQWdCTCxLQUFoQixNQUE0QixJQUY5QixFQUdBO0FBQ0MsU0FBTyxLQUFQO0FBQ0E7O0FBRUQsS0FBSU0sVUFBVUMsTUFBVixLQUFxQixDQUFyQixJQUNITixjQUFjTyxLQURYLElBRUhQLGNBQWNRLFFBRlgsSUFHSFIsY0FBY1MsU0FIWCxJQUlIVCxjQUFjVSxVQUpYLElBS0hWLGNBQWNXLFFBTGYsRUFNQTtBQUNDLFFBQU0sSUFBSUMsS0FBSixDQUFXLG1CQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJUCxVQUFVQyxNQUFWLEtBQXFCLENBQXpCLEVBQTRCO0FBQzNCLE1BQUlOLGFBQWFPLEtBQWpCLEVBQXdCO0FBQ3ZCLFVBQU9NLE1BQU1DLE9BQU4sQ0FBZWYsS0FBZixDQUFQO0FBRUEsR0FIRCxNQUdNLElBQUlDLGFBQWFRLFFBQWpCLEVBQTJCO0FBQ2hDLFVBQVNWLE1BQU9DLEtBQVAsRUFBY1EsS0FBZCxLQUNSVCxNQUFPQyxLQUFQLEVBQWNVLFNBQWQsQ0FEUSxJQUVSWCxNQUFPQyxLQUFQLEVBQWNXLFVBQWQsQ0FGUSxJQUdSWixNQUFPQyxLQUFQLEVBQWNZLFFBQWQsQ0FIRDtBQUtBLEdBTkssTUFNQSxJQUFJWCxhQUFhUyxTQUFqQixFQUE0QjtBQUNqQyxVQUFTYixRQUFTRyxLQUFULEVBQWdCZ0IsTUFBaEIsS0FDUmxCLHdCQUF3Qm1CLElBQXhCLENBQThCakIsTUFBTWtCLFFBQU4sRUFBOUIsQ0FERDtBQUdBLEdBSkssTUFJQSxJQUFJakIsYUFBYVUsVUFBakIsRUFBNkI7QUFDbEMsT0FBSVEsTUFBTSxvQkFBYW5CLEtBQWIsQ0FBVjs7QUFFQSxVQUFTSCxRQUFTRyxNQUFNTyxNQUFmLEVBQXVCSixNQUF2QixLQUFtQ2dCLElBQUlaLE1BQUosR0FBYSxDQUFoRCxJQUNSWSxJQUFJQyxJQUFKLENBQVUsVUFBRUMsS0FBRixFQUFhO0FBQUUsV0FBT3hCLFFBQVN3QixLQUFULEVBQWdCbEIsTUFBaEIsQ0FBUDtBQUFrQyxJQUEzRCxDQUREO0FBR0EsR0FOSyxNQU1BLElBQUlGLGFBQWFXLFFBQWpCLEVBQTJCO0FBQ2hDLFVBQVNmLDBCQUFpQnlCLFFBQWpCLEtBQ1J6Qiw0QkFBMEJRLE1BQTFCLENBRFEsSUFFUixDQUFDLENBQUNMLHlCQUZIO0FBSUEsR0FMSyxNQUtEO0FBQ0osVUFBTyxLQUFQO0FBQ0E7QUFFRCxFQTdCRCxNQTZCSztBQUNKLFNBQU9QLFFBQVM7QUFDZixZQUFTTSxNQUFPQyxLQUFQLEVBQWNRLEtBQWQsQ0FETTtBQUVmLGVBQVlULE1BQU9DLEtBQVAsRUFBY1MsUUFBZCxDQUZHO0FBR2YsZ0JBQWFWLE1BQU9DLEtBQVAsRUFBY1UsU0FBZCxDQUhFO0FBSWYsaUJBQWNYLE1BQU9DLEtBQVAsRUFBY1csVUFBZCxDQUpDO0FBS2YsZUFBWVosTUFBT0MsS0FBUCxFQUFjWSxRQUFkO0FBTEcsR0FBVCxDQUFQO0FBT0E7QUFDRCxDQXJFRDs7QUF1RUFXLE9BQU9DLE9BQVAsR0FBaUJ6QixLQUFqQiIsImZpbGUiOiJkb3VidC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZG91YnRcIixcblx0XHRcdFwicGF0aFwiOiBcImRvdWJ0L2RvdWJ0LmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJkb3VidC5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJkb3VidFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2RvdWJ0LmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwiZG91YnQtdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRGaW5hbGx5LCB0aGUgb25lIHRoYXQgd2lsbCBmaXggeW91ciBkb3VidHMgaWYgYXJyYXkgaXMgYW4gYXJyYXksXG5cdFx0XHRhcmd1bWVudHMsIGl0ZXJhYmxlIG9yIGFycmF5LWxpa2UuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImNlbWVudG9cIjogXCJjZW1lbnRvXCIsXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcblx0XHRcdFwiaGFyZGVuXCI6IFwiaGFyZGVuXCIsXG5cdFx0XHRcInByb3R5cGVcIjogXCJwcm90eXBlXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgY2VtZW50byA9IHJlcXVpcmUoIFwiY2VtZW50b1wiICk7XG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xuY29uc3QgaGFyZGVuID0gcmVxdWlyZSggXCJoYXJkZW5cIiApO1xuY29uc3QgcHJvdHlwZSA9IHJlcXVpcmUoIFwicHJvdHlwZVwiICk7XG5cbmNvbnN0IEFSR1VNRU5UU19DTEFTU19QQVRURVJOID0gL0FyZ3VtZW50cy87XG5cbmhhcmRlbiggXCJBUlJBWVwiLCBcImFycmF5XCIgKTtcbmhhcmRlbiggXCJBU19BUlJBWVwiLCBcImFzLWFycmF5XCIgKTtcbmhhcmRlbiggXCJBUkdVTUVOVFNcIiwgXCJhcmd1bWVudHNcIiApO1xuaGFyZGVuKCBcIkFSUkFZX0xJS0VcIiwgXCJhcnJheS1saWtlXCIgKTtcbmhhcmRlbiggXCJJVEVSQUJMRVwiLCBcIml0ZXJhYmxlXCIgKTtcblxuY29uc3QgZG91YnQgPSBmdW5jdGlvbiBkb3VidCggYXJyYXksIGNvbmRpdGlvbiApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImFycmF5OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcIlsqXVwiLFxuXHRcdFx0XHRcdFwiQXJyYXlcIixcblx0XHRcdFx0XHRcIkFyZ3VtZW50c1wiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwiY29uZGl0aW9uXCI6IFwic3RyaW5nXCJcblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCBmYWx6eSggYXJyYXkgKSB8fFxuXHRcdHByb3R5cGUoIGFycmF5LCBTVFJJTkcsIE5VTUJFUiwgQk9PTEVBTiwgU1lNQk9MICkgfHxcbiBcdFx0SlNPTi5zdHJpbmdpZnkoIGFycmF5ICkgPT09IFwie31cIiApXG5cdHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRpZiggYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJlxuXHRcdGNvbmRpdGlvbiAhPT0gQVJSQVkgJiZcblx0XHRjb25kaXRpb24gIT09IEFTX0FSUkFZICYmXG5cdFx0Y29uZGl0aW9uICE9PSBBUkdVTUVOVFMgJiZcblx0XHRjb25kaXRpb24gIT09IEFSUkFZX0xJS0UgJiZcblx0XHRjb25kaXRpb24gIT09IElURVJBQkxFIClcblx0e1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGNvbmRpdGlvblwiICk7XG5cdH1cblxuXHRpZiggYXJndW1lbnRzLmxlbmd0aCA9PT0gMiApe1xuXHRcdGlmKCBjb25kaXRpb24gPT0gQVJSQVkgKXtcblx0XHRcdHJldHVybiBBcnJheS5pc0FycmF5KCBhcnJheSApO1xuXG5cdFx0fWVsc2UgaWYoIGNvbmRpdGlvbiA9PSBBU19BUlJBWSApe1xuXHRcdFx0cmV0dXJuICggZG91YnQoIGFycmF5LCBBUlJBWSApIHx8XG5cdFx0XHRcdGRvdWJ0KCBhcnJheSwgQVJHVU1FTlRTICkgfHxcblx0XHRcdFx0ZG91YnQoIGFycmF5LCBBUlJBWV9MSUtFICkgfHxcblx0XHRcdFx0ZG91YnQoIGFycmF5LCBJVEVSQUJMRSApICk7XG5cblx0XHR9ZWxzZSBpZiggY29uZGl0aW9uID09IEFSR1VNRU5UUyApe1xuXHRcdFx0cmV0dXJuICggcHJvdHlwZSggYXJyYXksIE9CSkVDVCApICYmXG5cdFx0XHRcdEFSR1VNRU5UU19DTEFTU19QQVRURVJOLnRlc3QoIGFycmF5LnRvU3RyaW5nKCApICkgKTtcblxuXHRcdH1lbHNlIGlmKCBjb25kaXRpb24gPT0gQVJSQVlfTElLRSApe1xuXHRcdFx0bGV0IGtleSA9IE9iamVjdC5rZXlzKCBhcnJheSApO1xuXG5cdFx0XHRyZXR1cm4gKCBwcm90eXBlKCBhcnJheS5sZW5ndGgsIE5VTUJFUiApICYmIGtleS5sZW5ndGggPiAwICYmXG5cdFx0XHRcdGtleS5zb21lKCAoIGluZGV4ICkgPT4geyByZXR1cm4gcHJvdHlwZSggaW5kZXgsIE5VTUJFUiApOyB9ICkgKTtcblxuXHRcdH1lbHNlIGlmKCBjb25kaXRpb24gPT0gSVRFUkFCTEUgKXtcblx0XHRcdHJldHVybiAoIHByb3R5cGUoIFN5bWJvbCwgRlVOQ1RJT04gKSAmJlxuXHRcdFx0XHRwcm90eXBlKCBTeW1ib2wuaXRlcmF0b3IsIFNZTUJPTCApICYmXG5cdFx0XHRcdCEhYXJyYXlbIFN5bWJvbC5pdGVyYXRvciBdICk7XG5cblx0XHR9ZWxzZXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0fWVsc2V7XG5cdFx0cmV0dXJuIGNlbWVudG8oIHtcblx0XHRcdFwiQVJSQVlcIjogZG91YnQoIGFycmF5LCBBUlJBWSApLFxuXHRcdFx0XCJBU19BUlJBWVwiOiBkb3VidCggYXJyYXksIEFTX0FSUkFZICksXG5cdFx0XHRcIkFSR1VNRU5UU1wiOiBkb3VidCggYXJyYXksIEFSR1VNRU5UUyApLFxuXHRcdFx0XCJBUlJBWV9MSUtFXCI6IGRvdWJ0KCBhcnJheSwgQVJSQVlfTElLRSApLFxuXHRcdFx0XCJJVEVSQUJMRVwiOiBkb3VidCggYXJyYXksIElURVJBQkxFIClcblx0XHR9ICk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZG91YnQ7XG4iXX0=
