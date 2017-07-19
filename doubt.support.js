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
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/doubt.git",
              			"test": "doubt-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Checks entity if array, arguments, iterable or array-like.
              	@end-module-documentation
              
              	@include:
              		{
              			"cemento": "cemento",
              			"falzy": "falzy",
              			"harden": "harden",
              			"json": "circular-json",
              			"khount": "khount",
              			"stringe": "stringe",
              			"truly": "truly"
              		}
              	@end-include
              */var _iterator = require("babel-runtime/core-js/symbol/iterator");var _iterator2 = _interopRequireDefault(_iterator);var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);var _keys = require("babel-runtime/core-js/object/keys");var _keys2 = _interopRequireDefault(_keys);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var cemento = require("cemento");
var falzy = require("falzy");
var harden = require("harden");
var json = require("circular-json");
var khount = require("khount");
var stringe = require("stringe");
var truly = require("truly");

var ARGUMENTS_CLASS_PATTERN = /^\[object Arguments\]$/;

harden("ARRAY", "array");
harden("ARGUMENTS", "arguments");
harden("ARRAY_LIKE", "array-like");
harden("AS_ARRAY", "as-array");
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
                                              			"condition": [
                                              				"string",
                                              				ARRAY,
                                              				ARGUMENTS,
                                              				ARRAY_LIKE,
                                              				AS_ARRAY,
                                              				ITERABLE
                                              			]
                                              		}
                                              	@end-meta-configuration
                                              */

	if (
	falzy(array) ||
	typeof array == "string" ||
	typeof array == "number" ||
	typeof array == "boolean" ||
	(typeof array === "undefined" ? "undefined" : (0, _typeof3.default)(array)) == "symbol" ||
	khount(array) == 0 && json.stringify(array) === "{}")
	{
		return false;
	}

	if (arguments.length === 2) {
		if (
		condition !== ARRAY &&
		condition !== AS_ARRAY &&
		condition !== ARGUMENTS &&
		condition !== ARRAY_LIKE &&
		condition !== ITERABLE)
		{
			throw new Error("invalid condition");
		}

		if (condition == ARRAY) {
			return Array.isArray(array);

		} else if (condition == AS_ARRAY) {
			return (
				doubt(array, ARRAY) ||
				doubt(array, ARGUMENTS) ||
				doubt(array, ITERABLE) ||
				doubt(array, ARRAY_LIKE));


		} else if (condition == ARGUMENTS) {
			return (
				(typeof array === "undefined" ? "undefined" : (0, _typeof3.default)(array)) == "object" &&
				/*;
                                                                                               	@note:
                                                                                               		Do not change this, this should always use stringe!
                                                                                               		Or else other modules will break.
                                                                                               	@end-note
                                                                                               */
				ARGUMENTS_CLASS_PATTERN.test(stringe(array)));


		} else if (condition == ARRAY_LIKE) {
			var key = (0, _keys2.default)(array);

			return (
				typeof array.length == "number" &&
				key.length > 0 &&
				key.some(function (index) {return typeof index == "number";}));


		} else if (condition == ITERABLE) {
			return (
				typeof _symbol2.default == "function" &&
				(0, _typeof3.default)(_iterator2.default) == "symbol" &&
				truly(array[_iterator2.default]));


		} else {
			return false;
		}

	} else {
		return cemento({
			"ARRAY": doubt(array, ARRAY),
			"AS_ARRAY": doubt(array, AS_ARRAY),
			"ARGUMENTS": doubt(array, ARGUMENTS),
			"ARRAY_LIKE": doubt(array, ARRAY_LIKE),
			"ITERABLE": doubt(array, ITERABLE) });

	}
};

module.exports = doubt;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvdWJ0LnN1cHBvcnQuanMiXSwibmFtZXMiOlsiY2VtZW50byIsInJlcXVpcmUiLCJmYWx6eSIsImhhcmRlbiIsImpzb24iLCJraG91bnQiLCJzdHJpbmdlIiwidHJ1bHkiLCJBUkdVTUVOVFNfQ0xBU1NfUEFUVEVSTiIsImRvdWJ0IiwiYXJyYXkiLCJjb25kaXRpb24iLCJzdHJpbmdpZnkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJBUlJBWSIsIkFTX0FSUkFZIiwiQVJHVU1FTlRTIiwiQVJSQVlfTElLRSIsIklURVJBQkxFIiwiRXJyb3IiLCJBcnJheSIsImlzQXJyYXkiLCJ0ZXN0Iiwia2V5Iiwic29tZSIsImluZGV4IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOERBLElBQU1BLFVBQVVDLFFBQVMsU0FBVCxDQUFoQjtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUUsU0FBU0YsUUFBUyxRQUFULENBQWY7QUFDQSxJQUFNRyxPQUFPSCxRQUFTLGVBQVQsQ0FBYjtBQUNBLElBQU1JLFNBQVNKLFFBQVMsUUFBVCxDQUFmO0FBQ0EsSUFBTUssVUFBVUwsUUFBUyxTQUFULENBQWhCO0FBQ0EsSUFBTU0sUUFBUU4sUUFBUyxPQUFULENBQWQ7O0FBRUEsSUFBTU8sMEJBQTBCLHdCQUFoQzs7QUFFQUwsT0FBUSxPQUFSLEVBQWlCLE9BQWpCO0FBQ0FBLE9BQVEsV0FBUixFQUFxQixXQUFyQjtBQUNBQSxPQUFRLFlBQVIsRUFBc0IsWUFBdEI7QUFDQUEsT0FBUSxVQUFSLEVBQW9CLFVBQXBCO0FBQ0FBLE9BQVEsVUFBUixFQUFvQixVQUFwQjs7QUFFQSxJQUFNTSxRQUFRLFNBQVNBLEtBQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCQyxTQUF2QixFQUFrQztBQUMvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7QUFDQ1QsT0FBT1EsS0FBUDtBQUNBLFFBQU9BLEtBQVAsSUFBZ0IsUUFEaEI7QUFFQSxRQUFPQSxLQUFQLElBQWdCLFFBRmhCO0FBR0EsUUFBT0EsS0FBUCxJQUFnQixTQUhoQjtBQUlBLFNBQU9BLEtBQVAsdURBQU9BLEtBQVAsTUFBZ0IsUUFKaEI7QUFLRUwsUUFBUUssS0FBUixLQUFtQixDQUFuQixJQUF3Qk4sS0FBS1EsU0FBTCxDQUFnQkYsS0FBaEIsTUFBNEIsSUFOdkQ7QUFPQztBQUNBLFNBQU8sS0FBUDtBQUNBOztBQUVELEtBQUlHLFVBQVVDLE1BQVYsS0FBcUIsQ0FBekIsRUFBNEI7QUFDM0I7QUFDQ0gsZ0JBQWNJLEtBQWQ7QUFDQUosZ0JBQWNLLFFBRGQ7QUFFQUwsZ0JBQWNNLFNBRmQ7QUFHQU4sZ0JBQWNPLFVBSGQ7QUFJQVAsZ0JBQWNRLFFBTGY7QUFNQztBQUNBLFNBQU0sSUFBSUMsS0FBSixDQUFXLG1CQUFYLENBQU47QUFDQTs7QUFFRCxNQUFJVCxhQUFhSSxLQUFqQixFQUF3QjtBQUN2QixVQUFPTSxNQUFNQyxPQUFOLENBQWVaLEtBQWYsQ0FBUDs7QUFFQSxHQUhELE1BR00sSUFBSUMsYUFBYUssUUFBakIsRUFBMkI7QUFDaEM7QUFDQ1AsVUFBT0MsS0FBUCxFQUFjSyxLQUFkO0FBQ0FOLFVBQU9DLEtBQVAsRUFBY08sU0FBZCxDQURBO0FBRUFSLFVBQU9DLEtBQVAsRUFBY1MsUUFBZCxDQUZBO0FBR0FWLFVBQU9DLEtBQVAsRUFBY1EsVUFBZCxDQUpEOzs7QUFPQSxHQVJLLE1BUUEsSUFBSVAsYUFBYU0sU0FBakIsRUFBNEI7QUFDakM7QUFDQyxZQUFPUCxLQUFQLHVEQUFPQSxLQUFQLE1BQWdCLFFBQWhCO0FBQ0E7Ozs7OztBQU1BRiw0QkFBd0JlLElBQXhCLENBQThCakIsUUFBU0ksS0FBVCxDQUE5QixDQVJEOzs7QUFXQSxHQVpLLE1BWUEsSUFBSUMsYUFBYU8sVUFBakIsRUFBNkI7QUFDbEMsT0FBSU0sTUFBTSxvQkFBYWQsS0FBYixDQUFWOztBQUVBO0FBQ0MsV0FBT0EsTUFBTUksTUFBYixJQUF1QixRQUF2QjtBQUNBVSxRQUFJVixNQUFKLEdBQWEsQ0FEYjtBQUVBVSxRQUFJQyxJQUFKLENBQVUsVUFBRUMsS0FBRixVQUFlLE9BQU9BLEtBQVAsSUFBZ0IsUUFBL0IsRUFBVixDQUhEOzs7QUFNQSxHQVRLLE1BU0EsSUFBSWYsYUFBYVEsUUFBakIsRUFBMkI7QUFDaEM7QUFDQywrQkFBaUIsVUFBakI7QUFDQSxpREFBMEIsUUFEMUI7QUFFQVosVUFBT0cseUJBQVAsQ0FIRDs7O0FBTUEsR0FQSyxNQU9EO0FBQ0osVUFBTyxLQUFQO0FBQ0E7O0FBRUQsRUF0REQsTUFzREs7QUFDSixTQUFPVixRQUFTO0FBQ2YsWUFBU1MsTUFBT0MsS0FBUCxFQUFjSyxLQUFkLENBRE07QUFFZixlQUFZTixNQUFPQyxLQUFQLEVBQWNNLFFBQWQsQ0FGRztBQUdmLGdCQUFhUCxNQUFPQyxLQUFQLEVBQWNPLFNBQWQsQ0FIRTtBQUlmLGlCQUFjUixNQUFPQyxLQUFQLEVBQWNRLFVBQWQsQ0FKQztBQUtmLGVBQVlULE1BQU9DLEtBQVAsRUFBY1MsUUFBZCxDQUxHLEVBQVQsQ0FBUDs7QUFPQTtBQUNELENBL0ZEOztBQWlHQVEsT0FBT0MsT0FBUCxHQUFpQm5CLEtBQWpCIiwiZmlsZSI6ImRvdWJ0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImRvdWJ0XCIsXG5cdFx0XHRcInBhdGhcIjogXCJkb3VidC9kb3VidC5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwiZG91YnQuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwiZG91YnRcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2RvdWJ0LmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwiZG91YnQtdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRDaGVja3MgZW50aXR5IGlmIGFycmF5LCBhcmd1bWVudHMsIGl0ZXJhYmxlIG9yIGFycmF5LWxpa2UuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImNlbWVudG9cIjogXCJjZW1lbnRvXCIsXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcblx0XHRcdFwiaGFyZGVuXCI6IFwiaGFyZGVuXCIsXG5cdFx0XHRcImpzb25cIjogXCJjaXJjdWxhci1qc29uXCIsXG5cdFx0XHRcImtob3VudFwiOiBcImtob3VudFwiLFxuXHRcdFx0XCJzdHJpbmdlXCI6IFwic3RyaW5nZVwiLFxuXHRcdFx0XCJ0cnVseVwiOiBcInRydWx5XCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgY2VtZW50byA9IHJlcXVpcmUoIFwiY2VtZW50b1wiICk7XG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xuY29uc3QgaGFyZGVuID0gcmVxdWlyZSggXCJoYXJkZW5cIiApO1xuY29uc3QganNvbiA9IHJlcXVpcmUoIFwiY2lyY3VsYXItanNvblwiICk7XG5jb25zdCBraG91bnQgPSByZXF1aXJlKCBcImtob3VudFwiICk7XG5jb25zdCBzdHJpbmdlID0gcmVxdWlyZSggXCJzdHJpbmdlXCIgKTtcbmNvbnN0IHRydWx5ID0gcmVxdWlyZSggXCJ0cnVseVwiICk7XG5cbmNvbnN0IEFSR1VNRU5UU19DTEFTU19QQVRURVJOID0gL15cXFtvYmplY3QgQXJndW1lbnRzXFxdJC87XG5cbmhhcmRlbiggXCJBUlJBWVwiLCBcImFycmF5XCIgKTtcbmhhcmRlbiggXCJBUkdVTUVOVFNcIiwgXCJhcmd1bWVudHNcIiApO1xuaGFyZGVuKCBcIkFSUkFZX0xJS0VcIiwgXCJhcnJheS1saWtlXCIgKTtcbmhhcmRlbiggXCJBU19BUlJBWVwiLCBcImFzLWFycmF5XCIgKTtcbmhhcmRlbiggXCJJVEVSQUJMRVwiLCBcIml0ZXJhYmxlXCIgKTtcblxuY29uc3QgZG91YnQgPSBmdW5jdGlvbiBkb3VidCggYXJyYXksIGNvbmRpdGlvbiApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImFycmF5OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcIlsqXVwiLFxuXHRcdFx0XHRcdFwiQXJyYXlcIixcblx0XHRcdFx0XHRcIkFyZ3VtZW50c1wiXG5cdFx0XHRcdF0sXG5cdFx0XHRcdFwiY29uZGl0aW9uXCI6IFtcblx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdEFSUkFZLFxuXHRcdFx0XHRcdEFSR1VNRU5UUyxcblx0XHRcdFx0XHRBUlJBWV9MSUtFLFxuXHRcdFx0XHRcdEFTX0FSUkFZLFxuXHRcdFx0XHRcdElURVJBQkxFXG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKFxuXHRcdGZhbHp5KCBhcnJheSApIHx8XG5cdFx0dHlwZW9mIGFycmF5ID09IFwic3RyaW5nXCIgfHxcblx0XHR0eXBlb2YgYXJyYXkgPT0gXCJudW1iZXJcIiB8fFxuXHRcdHR5cGVvZiBhcnJheSA9PSBcImJvb2xlYW5cIiB8fFxuXHRcdHR5cGVvZiBhcnJheSA9PSBcInN5bWJvbFwiIHx8XG5cdFx0KCBraG91bnQoIGFycmF5ICkgPT0gMCAmJiBqc29uLnN0cmluZ2lmeSggYXJyYXkgKSA9PT0gXCJ7fVwiIClcblx0KXtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRpZiggYXJndW1lbnRzLmxlbmd0aCA9PT0gMiApe1xuXHRcdGlmKFxuXHRcdFx0Y29uZGl0aW9uICE9PSBBUlJBWSAmJlxuXHRcdFx0Y29uZGl0aW9uICE9PSBBU19BUlJBWSAmJlxuXHRcdFx0Y29uZGl0aW9uICE9PSBBUkdVTUVOVFMgJiZcblx0XHRcdGNvbmRpdGlvbiAhPT0gQVJSQVlfTElLRSAmJlxuXHRcdFx0Y29uZGl0aW9uICE9PSBJVEVSQUJMRVxuXHRcdCl7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBjb25kaXRpb25cIiApO1xuXHRcdH1cblxuXHRcdGlmKCBjb25kaXRpb24gPT0gQVJSQVkgKXtcblx0XHRcdHJldHVybiBBcnJheS5pc0FycmF5KCBhcnJheSApO1xuXG5cdFx0fWVsc2UgaWYoIGNvbmRpdGlvbiA9PSBBU19BUlJBWSApe1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0ZG91YnQoIGFycmF5LCBBUlJBWSApIHx8XG5cdFx0XHRcdGRvdWJ0KCBhcnJheSwgQVJHVU1FTlRTICkgfHxcblx0XHRcdFx0ZG91YnQoIGFycmF5LCBJVEVSQUJMRSApIHx8XG5cdFx0XHRcdGRvdWJ0KCBhcnJheSwgQVJSQVlfTElLRSApXG5cdFx0XHQpO1xuXG5cdFx0fWVsc2UgaWYoIGNvbmRpdGlvbiA9PSBBUkdVTUVOVFMgKXtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdHR5cGVvZiBhcnJheSA9PSBcIm9iamVjdFwiICYmXG5cdFx0XHRcdC8qO1xuXHRcdFx0XHRcdEBub3RlOlxuXHRcdFx0XHRcdFx0RG8gbm90IGNoYW5nZSB0aGlzLCB0aGlzIHNob3VsZCBhbHdheXMgdXNlIHN0cmluZ2UhXG5cdFx0XHRcdFx0XHRPciBlbHNlIG90aGVyIG1vZHVsZXMgd2lsbCBicmVhay5cblx0XHRcdFx0XHRAZW5kLW5vdGVcblx0XHRcdFx0Ki9cblx0XHRcdFx0QVJHVU1FTlRTX0NMQVNTX1BBVFRFUk4udGVzdCggc3RyaW5nZSggYXJyYXkgKSApXG5cdFx0XHQpO1xuXG5cdFx0fWVsc2UgaWYoIGNvbmRpdGlvbiA9PSBBUlJBWV9MSUtFICl7XG5cdFx0XHRsZXQga2V5ID0gT2JqZWN0LmtleXMoIGFycmF5ICk7XG5cblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdHR5cGVvZiBhcnJheS5sZW5ndGggPT0gXCJudW1iZXJcIiAmJlxuXHRcdFx0XHRrZXkubGVuZ3RoID4gMCAmJlxuXHRcdFx0XHRrZXkuc29tZSggKCBpbmRleCApID0+ICggdHlwZW9mIGluZGV4ID09IFwibnVtYmVyXCIgKSApXG5cdFx0XHQpO1xuXG5cdFx0fWVsc2UgaWYoIGNvbmRpdGlvbiA9PSBJVEVSQUJMRSApe1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0dHlwZW9mIFN5bWJvbCA9PSBcImZ1bmN0aW9uXCIgJiZcblx0XHRcdFx0dHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSBcInN5bWJvbFwiICYmXG5cdFx0XHRcdHRydWx5KCBhcnJheVsgU3ltYm9sLml0ZXJhdG9yIF0gKVxuXHRcdFx0KTtcblxuXHRcdH1lbHNle1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHR9ZWxzZXtcblx0XHRyZXR1cm4gY2VtZW50bygge1xuXHRcdFx0XCJBUlJBWVwiOiBkb3VidCggYXJyYXksIEFSUkFZICksXG5cdFx0XHRcIkFTX0FSUkFZXCI6IGRvdWJ0KCBhcnJheSwgQVNfQVJSQVkgKSxcblx0XHRcdFwiQVJHVU1FTlRTXCI6IGRvdWJ0KCBhcnJheSwgQVJHVU1FTlRTICksXG5cdFx0XHRcIkFSUkFZX0xJS0VcIjogZG91YnQoIGFycmF5LCBBUlJBWV9MSUtFICksXG5cdFx0XHRcIklURVJBQkxFXCI6IGRvdWJ0KCBhcnJheSwgSVRFUkFCTEUgKVxuXHRcdH0gKTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBkb3VidDtcbiJdfQ==
//# sourceMappingURL=doubt.support.js.map
