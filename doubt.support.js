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
              			"khount": "khount",
              			"protype": "protype"
              		}
              	@end-include
              */var _iterator = require("babel-runtime/core-js/symbol/iterator");var _iterator2 = _interopRequireDefault(_iterator);var _symbol = require("babel-runtime/core-js/symbol");var _symbol2 = _interopRequireDefault(_symbol);var _keys = require("babel-runtime/core-js/object/keys");var _keys2 = _interopRequireDefault(_keys);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var cemento = require("cemento");
var falzy = require("falzy");
var harden = require("harden");
var json = require("circular-json");
var khount = require("khount");
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

	if (falzy(array) ||
	protype(array, STRING, NUMBER, BOOLEAN, SYMBOL) ||
	khount(array) == 0 &&
	json.stringify(array) === "{}")
	{
		return false;
	}

	if (arguments.length === 2 &&
	condition !== ARRAY &&
	condition !== AS_ARRAY &&
	condition !== ARGUMENTS &&
	condition !== ARRAY_LIKE &&
	condition !== ITERABLE)
	{
		throw new Error("invalid condition");
	}

	if (arguments.length === 2) {
		if (condition == ARRAY) {
			return Array.isArray(array);

		} else if (condition == AS_ARRAY) {
			return doubt(array, ARRAY) ||
			doubt(array, ARGUMENTS) ||
			doubt(array, ARRAY_LIKE) ||
			doubt(array, ITERABLE);

		} else if (condition == ARGUMENTS) {
			return protype(array, OBJECT) &&
			ARGUMENTS_CLASS_PATTERN.test(array.toString());

		} else if (condition == ARRAY_LIKE) {
			var key = (0, _keys2.default)(array);

			return protype(array.length, NUMBER) && key.length > 0 &&
			key.some(function (index) {return protype(index, NUMBER);});

		} else if (condition == ITERABLE) {
			return protype(_symbol2.default, FUNCTION) &&
			protype(_iterator2.default, SYMBOL) &&
			!!array[_iterator2.default];

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

//# sourceMappingURL=doubt.support.js.map