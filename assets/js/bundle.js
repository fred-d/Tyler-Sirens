/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _maps = __webpack_require__(1);

	var _maps2 = _interopRequireDefault(_maps);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _ComponentsMapJsx = __webpack_require__(3);

	var _ComponentsMapJsx2 = _interopRequireDefault(_ComponentsMapJsx);

	var _AppAppJs = __webpack_require__(6);

	var appContainer = document.getElementById('app');

	_AppAppJs.app.start(_AppAppJs.initialState, function (state) {
	    _reactDom2['default'].render(React.createElement(_ComponentsMapJsx2['default'], null), appContainer);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = google.maps;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _maps = __webpack_require__(1);

	var _maps2 = _interopRequireDefault(_maps);

	var _d3 = __webpack_require__(5);

	var _d32 = _interopRequireDefault(_d3);

	var Map = (function (_React$Component) {
	    _inherits(Map, _React$Component);

	    function Map() {
	        _classCallCheck(this, Map);

	        _get(Object.getPrototypeOf(Map.prototype), 'constructor', this).apply(this, arguments);
	    }

	    _createClass(Map, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this = this;

	            this.map = new _maps2['default'].Map(this.refs.map, {
	                center: {
	                    lat: 32.35,
	                    lng: -95.3
	                },
	                zoom: 13
	            });

	            fetch('https://tyler-sirens-api.tylerwebdev.io/all').then(function (data) {
	                return data.json();
	            }).then(function (data) {
	                var points = data.features.map(function (feature) {
	                    return new _maps2['default'].LatLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0]);
	                });

	                _this.heatmap = new _maps2['default'].visualization.HeatmapLayer({
	                    data: points,
	                    map: _this.map,
	                    radius: 20,
	                    maxIntensity: 10
	                });
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2['default'].createElement('div', { className: 'map', ref: 'map' });
	        }
	    }]);

	    return Map;
	})(_react2['default'].Component);

	exports['default'] = Map;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = d3;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

	var _friar = __webpack_require__(7);

	var framework = _interopRequireWildcard(_friar);

	var initialState = {
	    hello: "world"
	};

	exports.initialState = initialState;
	var app = framework.makeApp();
	exports.app = app;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	var Rx = __webpack_require__(8);

	function dispatch(source) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	    }

	    source.onNext(args);
	}

	function makeDispatcher(source) {
	    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	    }

	    return function () {
	        dispatch.apply(undefined, [source].concat(args));
	    };
	}

	/**
	 * Provides a function that partially applies the given function
	 * that accepts n arguments, by calling it with an array of arguments [2, 3, ... n] arguments, 
	 * and then returning a function closed over that accepts the 1st argument and evaluates.
	 * Since the source has to dispatch its arguments via an array, the simplest way to accept
	 * the arguments to curry is an array.
	 *
	 * The function called from `makeSink` is called internally, so this less-than-pretty API
	 * of passing arguments via array is never truly exposed to the end user.
	 * 
	 * @param  {Function} fn Function to 'curry'
	 * @return {Function}    Function that will be dispatched
	 */
	function makeSink(fn) {
	    return function (args) {
	        if (args.length !== fn.length - 1) // Because we expect 1 argument - state
	            throw 'Given function expected ' + (fn.length - 1) + ' arguments, but you provided ' + args.length;

	        return function (state) {
	            return fn.apply(undefined, [state].concat(_toConsumableArray(args)));
	        };
	    };
	}

	function makeApp() {
	    var sinks = [];
	    var updateState = function updateState(state, fn) {
	        return fn(state);
	    };

	    return {
	        source: function source() {
	            return new Rx.Subject();
	        },
	        sink: function sink(observable) {
	            sinks.push(observable);

	            return this;
	        },
	        directlySink: function directlySink(fn) {
	            var source = this.source();
	            this.sink(source.map(makeSink(fn)));

	            return source;
	        },
	        start: function start(initialState, fn) {
	            var state = Rx.Observable.merge(sinks).scan(updateState, initialState).startWith(initialState);

	            return state.subscribe(fn);
	        }
	    };
	}

	module.exports = {
	    dispatch: dispatch,
	    makeDispatcher: makeDispatcher,
	    makeSink: makeSink,
	    makeApp: makeApp
	};



/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = Rx;

/***/ }
/******/ ]);