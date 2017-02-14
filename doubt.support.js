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
			"json": "circular-json",
			"kount": "kount",
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cemento = require("cemento");
var falzy = require("falzy");
var harden = require("harden");
var json = require("circular-json");
var kount = require("kount");
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

	if (falzy(array) || protype(array, STRING, NUMBER, BOOLEAN, SYMBOL) || kount(array) == 0 && json.stringify(array) === "{}") {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvdWJ0LmpzIl0sIm5hbWVzIjpbImNlbWVudG8iLCJyZXF1aXJlIiwiZmFsenkiLCJoYXJkZW4iLCJqc29uIiwia291bnQiLCJwcm90eXBlIiwiQVJHVU1FTlRTX0NMQVNTX1BBVFRFUk4iLCJkb3VidCIsImFycmF5IiwiY29uZGl0aW9uIiwiU1RSSU5HIiwiTlVNQkVSIiwiQk9PTEVBTiIsIlNZTUJPTCIsInN0cmluZ2lmeSIsImFyZ3VtZW50cyIsImxlbmd0aCIsIkFSUkFZIiwiQVNfQVJSQVkiLCJBUkdVTUVOVFMiLCJBUlJBWV9MSUtFIiwiSVRFUkFCTEUiLCJFcnJvciIsIkFycmF5IiwiaXNBcnJheSIsIk9CSkVDVCIsInRlc3QiLCJ0b1N0cmluZyIsImtleSIsInNvbWUiLCJpbmRleCIsIkZVTkNUSU9OIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZEQSxJQUFNQSxVQUFVQyxRQUFTLFNBQVQsQ0FBaEI7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1FLFNBQVNGLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUcsT0FBT0gsUUFBUyxlQUFULENBQWI7QUFDQSxJQUFNSSxRQUFRSixRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1LLFVBQVVMLFFBQVMsU0FBVCxDQUFoQjs7QUFFQSxJQUFNTSwwQkFBMEIsV0FBaEM7O0FBRUFKLE9BQVEsT0FBUixFQUFpQixPQUFqQjtBQUNBQSxPQUFRLFVBQVIsRUFBb0IsVUFBcEI7QUFDQUEsT0FBUSxXQUFSLEVBQXFCLFdBQXJCO0FBQ0FBLE9BQVEsWUFBUixFQUFzQixZQUF0QjtBQUNBQSxPQUFRLFVBQVIsRUFBb0IsVUFBcEI7O0FBRUEsSUFBTUssUUFBUSxTQUFTQSxLQUFULENBQWdCQyxLQUFoQixFQUF1QkMsU0FBdkIsRUFBa0M7QUFDL0M7Ozs7Ozs7Ozs7Ozs7QUFhQSxLQUFJUixNQUFPTyxLQUFQLEtBQ0hILFFBQVNHLEtBQVQsRUFBZ0JFLE1BQWhCLEVBQXdCQyxNQUF4QixFQUFnQ0MsT0FBaEMsRUFBeUNDLE1BQXpDLENBREcsSUFFRFQsTUFBT0ksS0FBUCxLQUFrQixDQUFsQixJQUNETCxLQUFLVyxTQUFMLENBQWdCTixLQUFoQixNQUE0QixJQUg5QixFQUlBO0FBQ0MsU0FBTyxLQUFQO0FBQ0E7O0FBRUQsS0FBSU8sVUFBVUMsTUFBVixLQUFxQixDQUFyQixJQUNIUCxjQUFjUSxLQURYLElBRUhSLGNBQWNTLFFBRlgsSUFHSFQsY0FBY1UsU0FIWCxJQUlIVixjQUFjVyxVQUpYLElBS0hYLGNBQWNZLFFBTGYsRUFNQTtBQUNDLFFBQU0sSUFBSUMsS0FBSixDQUFXLG1CQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJUCxVQUFVQyxNQUFWLEtBQXFCLENBQXpCLEVBQTRCO0FBQzNCLE1BQUlQLGFBQWFRLEtBQWpCLEVBQXdCO0FBQ3ZCLFVBQU9NLE1BQU1DLE9BQU4sQ0FBZWhCLEtBQWYsQ0FBUDtBQUVBLEdBSEQsTUFHTSxJQUFJQyxhQUFhUyxRQUFqQixFQUEyQjtBQUNoQyxVQUFTWCxNQUFPQyxLQUFQLEVBQWNTLEtBQWQsS0FDUlYsTUFBT0MsS0FBUCxFQUFjVyxTQUFkLENBRFEsSUFFUlosTUFBT0MsS0FBUCxFQUFjWSxVQUFkLENBRlEsSUFHUmIsTUFBT0MsS0FBUCxFQUFjYSxRQUFkLENBSEQ7QUFLQSxHQU5LLE1BTUEsSUFBSVosYUFBYVUsU0FBakIsRUFBNEI7QUFDakMsVUFBU2QsUUFBU0csS0FBVCxFQUFnQmlCLE1BQWhCLEtBQ1JuQix3QkFBd0JvQixJQUF4QixDQUE4QmxCLE1BQU1tQixRQUFOLEVBQTlCLENBREQ7QUFHQSxHQUpLLE1BSUEsSUFBSWxCLGFBQWFXLFVBQWpCLEVBQTZCO0FBQ2xDLE9BQUlRLE1BQU0sb0JBQWFwQixLQUFiLENBQVY7O0FBRUEsVUFBU0gsUUFBU0csTUFBTVEsTUFBZixFQUF1QkwsTUFBdkIsS0FBbUNpQixJQUFJWixNQUFKLEdBQWEsQ0FBaEQsSUFDUlksSUFBSUMsSUFBSixDQUFVLFVBQUVDLEtBQUYsRUFBYTtBQUFFLFdBQU96QixRQUFTeUIsS0FBVCxFQUFnQm5CLE1BQWhCLENBQVA7QUFBa0MsSUFBM0QsQ0FERDtBQUdBLEdBTkssTUFNQSxJQUFJRixhQUFhWSxRQUFqQixFQUEyQjtBQUNoQyxVQUFTaEIsMEJBQWlCMEIsUUFBakIsS0FDUjFCLDRCQUEwQlEsTUFBMUIsQ0FEUSxJQUVSLENBQUMsQ0FBQ0wseUJBRkg7QUFJQSxHQUxLLE1BS0Q7QUFDSixVQUFPLEtBQVA7QUFDQTtBQUVELEVBN0JELE1BNkJLO0FBQ0osU0FBT1QsUUFBUztBQUNmLFlBQVNRLE1BQU9DLEtBQVAsRUFBY1MsS0FBZCxDQURNO0FBRWYsZUFBWVYsTUFBT0MsS0FBUCxFQUFjVSxRQUFkLENBRkc7QUFHZixnQkFBYVgsTUFBT0MsS0FBUCxFQUFjVyxTQUFkLENBSEU7QUFJZixpQkFBY1osTUFBT0MsS0FBUCxFQUFjWSxVQUFkLENBSkM7QUFLZixlQUFZYixNQUFPQyxLQUFQLEVBQWNhLFFBQWQ7QUFMRyxHQUFULENBQVA7QUFPQTtBQUNELENBdEVEOztBQXdFQVcsT0FBT0MsT0FBUCxHQUFpQjFCLEtBQWpCIiwiZmlsZSI6ImRvdWJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJkb3VidFwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiZG91YnQvZG91YnQuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcImRvdWJ0LmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcImRvdWJ0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZG91YnQuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJkb3VidC10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdEZpbmFsbHksIHRoZSBvbmUgdGhhdCB3aWxsIGZpeCB5b3VyIGRvdWJ0cyBpZiBhcnJheSBpcyBhbiBhcnJheSxcblx0XHRcdGFyZ3VtZW50cywgaXRlcmFibGUgb3IgYXJyYXktbGlrZS5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiY2VtZW50b1wiOiBcImNlbWVudG9cIixcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxuXHRcdFx0XCJoYXJkZW5cIjogXCJoYXJkZW5cIixcblx0XHRcdFwianNvblwiOiBcImNpcmN1bGFyLWpzb25cIixcblx0XHRcdFwia291bnRcIjogXCJrb3VudFwiLFxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGNlbWVudG8gPSByZXF1aXJlKCBcImNlbWVudG9cIiApO1xuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcbmNvbnN0IGhhcmRlbiA9IHJlcXVpcmUoIFwiaGFyZGVuXCIgKTtcbmNvbnN0IGpzb24gPSByZXF1aXJlKCBcImNpcmN1bGFyLWpzb25cIiApO1xuY29uc3Qga291bnQgPSByZXF1aXJlKCBcImtvdW50XCIgKTtcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xuXG5jb25zdCBBUkdVTUVOVFNfQ0xBU1NfUEFUVEVSTiA9IC9Bcmd1bWVudHMvO1xuXG5oYXJkZW4oIFwiQVJSQVlcIiwgXCJhcnJheVwiICk7XG5oYXJkZW4oIFwiQVNfQVJSQVlcIiwgXCJhcy1hcnJheVwiICk7XG5oYXJkZW4oIFwiQVJHVU1FTlRTXCIsIFwiYXJndW1lbnRzXCIgKTtcbmhhcmRlbiggXCJBUlJBWV9MSUtFXCIsIFwiYXJyYXktbGlrZVwiICk7XG5oYXJkZW4oIFwiSVRFUkFCTEVcIiwgXCJpdGVyYWJsZVwiICk7XG5cbmNvbnN0IGRvdWJ0ID0gZnVuY3Rpb24gZG91YnQoIGFycmF5LCBjb25kaXRpb24gKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJhcnJheTpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCJbKl1cIixcblx0XHRcdFx0XHRcIkFycmF5XCIsXG5cdFx0XHRcdFx0XCJBcmd1bWVudHNcIlxuXHRcdFx0XHRdLFxuXHRcdFx0XHRcImNvbmRpdGlvblwiOiBcInN0cmluZ1wiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggZmFsenkoIGFycmF5ICkgfHxcblx0XHRwcm90eXBlKCBhcnJheSwgU1RSSU5HLCBOVU1CRVIsIEJPT0xFQU4sIFNZTUJPTCApIHx8XG5cdFx0KCBrb3VudCggYXJyYXkgKSA9PSAwICYmXG5cdFx0XHRqc29uLnN0cmluZ2lmeSggYXJyYXkgKSA9PT0gXCJ7fVwiICkgKVxuXHR7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPT09IDIgJiZcblx0XHRjb25kaXRpb24gIT09IEFSUkFZICYmXG5cdFx0Y29uZGl0aW9uICE9PSBBU19BUlJBWSAmJlxuXHRcdGNvbmRpdGlvbiAhPT0gQVJHVU1FTlRTICYmXG5cdFx0Y29uZGl0aW9uICE9PSBBUlJBWV9MSUtFICYmXG5cdFx0Y29uZGl0aW9uICE9PSBJVEVSQUJMRSApXG5cdHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBjb25kaXRpb25cIiApO1xuXHR9XG5cblx0aWYoIGFyZ3VtZW50cy5sZW5ndGggPT09IDIgKXtcblx0XHRpZiggY29uZGl0aW9uID09IEFSUkFZICl7XG5cdFx0XHRyZXR1cm4gQXJyYXkuaXNBcnJheSggYXJyYXkgKTtcblxuXHRcdH1lbHNlIGlmKCBjb25kaXRpb24gPT0gQVNfQVJSQVkgKXtcblx0XHRcdHJldHVybiAoIGRvdWJ0KCBhcnJheSwgQVJSQVkgKSB8fFxuXHRcdFx0XHRkb3VidCggYXJyYXksIEFSR1VNRU5UUyApIHx8XG5cdFx0XHRcdGRvdWJ0KCBhcnJheSwgQVJSQVlfTElLRSApIHx8XG5cdFx0XHRcdGRvdWJ0KCBhcnJheSwgSVRFUkFCTEUgKSApO1xuXG5cdFx0fWVsc2UgaWYoIGNvbmRpdGlvbiA9PSBBUkdVTUVOVFMgKXtcblx0XHRcdHJldHVybiAoIHByb3R5cGUoIGFycmF5LCBPQkpFQ1QgKSAmJlxuXHRcdFx0XHRBUkdVTUVOVFNfQ0xBU1NfUEFUVEVSTi50ZXN0KCBhcnJheS50b1N0cmluZyggKSApICk7XG5cblx0XHR9ZWxzZSBpZiggY29uZGl0aW9uID09IEFSUkFZX0xJS0UgKXtcblx0XHRcdGxldCBrZXkgPSBPYmplY3Qua2V5cyggYXJyYXkgKTtcblxuXHRcdFx0cmV0dXJuICggcHJvdHlwZSggYXJyYXkubGVuZ3RoLCBOVU1CRVIgKSAmJiBrZXkubGVuZ3RoID4gMCAmJlxuXHRcdFx0XHRrZXkuc29tZSggKCBpbmRleCApID0+IHsgcmV0dXJuIHByb3R5cGUoIGluZGV4LCBOVU1CRVIgKTsgfSApICk7XG5cblx0XHR9ZWxzZSBpZiggY29uZGl0aW9uID09IElURVJBQkxFICl7XG5cdFx0XHRyZXR1cm4gKCBwcm90eXBlKCBTeW1ib2wsIEZVTkNUSU9OICkgJiZcblx0XHRcdFx0cHJvdHlwZSggU3ltYm9sLml0ZXJhdG9yLCBTWU1CT0wgKSAmJlxuXHRcdFx0XHQhIWFycmF5WyBTeW1ib2wuaXRlcmF0b3IgXSApO1xuXG5cdFx0fWVsc2V7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdH1lbHNle1xuXHRcdHJldHVybiBjZW1lbnRvKCB7XG5cdFx0XHRcIkFSUkFZXCI6IGRvdWJ0KCBhcnJheSwgQVJSQVkgKSxcblx0XHRcdFwiQVNfQVJSQVlcIjogZG91YnQoIGFycmF5LCBBU19BUlJBWSApLFxuXHRcdFx0XCJBUkdVTUVOVFNcIjogZG91YnQoIGFycmF5LCBBUkdVTUVOVFMgKSxcblx0XHRcdFwiQVJSQVlfTElLRVwiOiBkb3VidCggYXJyYXksIEFSUkFZX0xJS0UgKSxcblx0XHRcdFwiSVRFUkFCTEVcIjogZG91YnQoIGFycmF5LCBJVEVSQUJMRSApXG5cdFx0fSApO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRvdWJ0O1xuIl19
