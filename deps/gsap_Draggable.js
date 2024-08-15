import {
  Matrix2D,
  getGlobalMatrix
} from "./chunk-I3XYRQQ4.js";
import "./chunk-5WRI5ZAA.js";

// node_modules/gsap/Draggable.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
var gsap;
var _win;
var _doc;
var _docElement;
var _body;
var _tempDiv;
var _placeholderDiv;
var _coreInitted;
var _checkPrefix;
var _toArray;
var _supportsPassive;
var _isTouchDevice;
var _touchEventLookup;
var _isMultiTouching;
var _isAndroid;
var InertiaPlugin;
var _defaultCursor;
var _supportsPointer;
var _context;
var _getStyleSaver;
var _dragCount = 0;
var _windowExists = function _windowExists2() {
  return typeof window !== "undefined";
};
var _getGSAP = function _getGSAP2() {
  return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
};
var _isFunction = function _isFunction2(value) {
  return typeof value === "function";
};
var _isObject = function _isObject2(value) {
  return typeof value === "object";
};
var _isUndefined = function _isUndefined2(value) {
  return typeof value === "undefined";
};
var _emptyFunc = function _emptyFunc2() {
  return false;
};
var _transformProp = "transform";
var _transformOriginProp = "transformOrigin";
var _round = function _round2(value) {
  return Math.round(value * 1e4) / 1e4;
};
var _isArray = Array.isArray;
var _createElement = function _createElement2(type, ns) {
  var e = _doc.createElementNS ? _doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc.createElement(type);
  return e.style ? e : _doc.createElement(type);
};
var _RAD2DEG = 180 / Math.PI;
var _bigNum = 1e20;
var _identityMatrix = new Matrix2D();
var _getTime = Date.now || function() {
  return (/* @__PURE__ */ new Date()).getTime();
};
var _renderQueue = [];
var _lookup = {};
var _lookupCount = 0;
var _clickableTagExp = /^(?:a|input|textarea|button|select)$/i;
var _lastDragTime = 0;
var _temp1 = {};
var _windowProxy = {};
var _copy = function _copy2(obj, factor) {
  var copy = {}, p;
  for (p in obj) {
    copy[p] = factor ? obj[p] * factor : obj[p];
  }
  return copy;
};
var _extend = function _extend2(obj, defaults) {
  for (var p in defaults) {
    if (!(p in obj)) {
      obj[p] = defaults[p];
    }
  }
  return obj;
};
var _setTouchActionForAllDescendants = function _setTouchActionForAllDescendants2(elements, value) {
  var i = elements.length, children;
  while (i--) {
    value ? elements[i].style.touchAction = value : elements[i].style.removeProperty("touch-action");
    children = elements[i].children;
    children && children.length && _setTouchActionForAllDescendants2(children, value);
  }
};
var _renderQueueTick = function _renderQueueTick2() {
  return _renderQueue.forEach(function(func) {
    return func();
  });
};
var _addToRenderQueue = function _addToRenderQueue2(func) {
  _renderQueue.push(func);
  if (_renderQueue.length === 1) {
    gsap.ticker.add(_renderQueueTick);
  }
};
var _renderQueueTimeout = function _renderQueueTimeout2() {
  return !_renderQueue.length && gsap.ticker.remove(_renderQueueTick);
};
var _removeFromRenderQueue = function _removeFromRenderQueue2(func) {
  var i = _renderQueue.length;
  while (i--) {
    if (_renderQueue[i] === func) {
      _renderQueue.splice(i, 1);
    }
  }
  gsap.to(_renderQueueTimeout, {
    overwrite: true,
    delay: 15,
    duration: 0,
    onComplete: _renderQueueTimeout,
    data: "_draggable"
  });
};
var _setDefaults = function _setDefaults2(obj, defaults) {
  for (var p in defaults) {
    if (!(p in obj)) {
      obj[p] = defaults[p];
    }
  }
  return obj;
};
var _addListener = function _addListener2(element, type, func, capture) {
  if (element.addEventListener) {
    var touchType = _touchEventLookup[type];
    capture = capture || (_supportsPassive ? {
      passive: false
    } : null);
    element.addEventListener(touchType || type, func, capture);
    touchType && type !== touchType && element.addEventListener(type, func, capture);
  }
};
var _removeListener = function _removeListener2(element, type, func, capture) {
  if (element.removeEventListener) {
    var touchType = _touchEventLookup[type];
    element.removeEventListener(touchType || type, func, capture);
    touchType && type !== touchType && element.removeEventListener(type, func, capture);
  }
};
var _preventDefault = function _preventDefault2(event) {
  event.preventDefault && event.preventDefault();
  event.preventManipulation && event.preventManipulation();
};
var _hasTouchID = function _hasTouchID2(list, ID) {
  var i = list.length;
  while (i--) {
    if (list[i].identifier === ID) {
      return true;
    }
  }
};
var _onMultiTouchDocumentEnd = function _onMultiTouchDocumentEnd2(event) {
  _isMultiTouching = event.touches && _dragCount < event.touches.length;
  _removeListener(event.target, "touchend", _onMultiTouchDocumentEnd2);
};
var _onMultiTouchDocument = function _onMultiTouchDocument2(event) {
  _isMultiTouching = event.touches && _dragCount < event.touches.length;
  _addListener(event.target, "touchend", _onMultiTouchDocumentEnd);
};
var _getDocScrollTop = function _getDocScrollTop2(doc) {
  return _win.pageYOffset || doc.scrollTop || doc.documentElement.scrollTop || doc.body.scrollTop || 0;
};
var _getDocScrollLeft = function _getDocScrollLeft2(doc) {
  return _win.pageXOffset || doc.scrollLeft || doc.documentElement.scrollLeft || doc.body.scrollLeft || 0;
};
var _addScrollListener = function _addScrollListener2(e, callback) {
  _addListener(e, "scroll", callback);
  if (!_isRoot(e.parentNode)) {
    _addScrollListener2(e.parentNode, callback);
  }
};
var _removeScrollListener = function _removeScrollListener2(e, callback) {
  _removeListener(e, "scroll", callback);
  if (!_isRoot(e.parentNode)) {
    _removeScrollListener2(e.parentNode, callback);
  }
};
var _isRoot = function _isRoot2(e) {
  return !!(!e || e === _docElement || e.nodeType === 9 || e === _doc.body || e === _win || !e.nodeType || !e.parentNode);
};
var _getMaxScroll = function _getMaxScroll2(element, axis) {
  var dim = axis === "x" ? "Width" : "Height", scroll = "scroll" + dim, client = "client" + dim;
  return Math.max(0, _isRoot(element) ? Math.max(_docElement[scroll], _body[scroll]) - (_win["inner" + dim] || _docElement[client] || _body[client]) : element[scroll] - element[client]);
};
var _recordMaxScrolls = function _recordMaxScrolls2(e, skipCurrent) {
  var x = _getMaxScroll(e, "x"), y = _getMaxScroll(e, "y");
  if (_isRoot(e)) {
    e = _windowProxy;
  } else {
    _recordMaxScrolls2(e.parentNode, skipCurrent);
  }
  e._gsMaxScrollX = x;
  e._gsMaxScrollY = y;
  if (!skipCurrent) {
    e._gsScrollX = e.scrollLeft || 0;
    e._gsScrollY = e.scrollTop || 0;
  }
};
var _setStyle = function _setStyle2(element, property, value) {
  var style = element.style;
  if (!style) {
    return;
  }
  if (_isUndefined(style[property])) {
    property = _checkPrefix(property, element) || property;
  }
  if (value == null) {
    style.removeProperty && style.removeProperty(property.replace(/([A-Z])/g, "-$1").toLowerCase());
  } else {
    style[property] = value;
  }
};
var _getComputedStyle = function _getComputedStyle2(element) {
  return _win.getComputedStyle(element instanceof Element ? element : element.host || (element.parentNode || {}).host || element);
};
var _tempRect = {};
var _parseRect = function _parseRect2(e) {
  if (e === _win) {
    _tempRect.left = _tempRect.top = 0;
    _tempRect.width = _tempRect.right = _docElement.clientWidth || e.innerWidth || _body.clientWidth || 0;
    _tempRect.height = _tempRect.bottom = (e.innerHeight || 0) - 20 < _docElement.clientHeight ? _docElement.clientHeight : e.innerHeight || _body.clientHeight || 0;
    return _tempRect;
  }
  var doc = e.ownerDocument || _doc, r = !_isUndefined(e.pageX) ? {
    left: e.pageX - _getDocScrollLeft(doc),
    top: e.pageY - _getDocScrollTop(doc),
    right: e.pageX - _getDocScrollLeft(doc) + 1,
    bottom: e.pageY - _getDocScrollTop(doc) + 1
  } : !e.nodeType && !_isUndefined(e.left) && !_isUndefined(e.top) ? e : _toArray(e)[0].getBoundingClientRect();
  if (_isUndefined(r.right) && !_isUndefined(r.width)) {
    r.right = r.left + r.width;
    r.bottom = r.top + r.height;
  } else if (_isUndefined(r.width)) {
    r = {
      width: r.right - r.left,
      height: r.bottom - r.top,
      right: r.right,
      left: r.left,
      bottom: r.bottom,
      top: r.top
    };
  }
  return r;
};
var _dispatchEvent = function _dispatchEvent2(target, type, callbackName) {
  var vars = target.vars, callback = vars[callbackName], listeners = target._listeners[type], result;
  if (_isFunction(callback)) {
    result = callback.apply(vars.callbackScope || target, vars[callbackName + "Params"] || [target.pointerEvent]);
  }
  if (listeners && target.dispatchEvent(type) === false) {
    result = false;
  }
  return result;
};
var _getBounds = function _getBounds2(target, context) {
  var e = _toArray(target)[0], top, left, offset;
  if (!e.nodeType && e !== _win) {
    if (!_isUndefined(target.left)) {
      offset = {
        x: 0,
        y: 0
      };
      return {
        left: target.left - offset.x,
        top: target.top - offset.y,
        width: target.width,
        height: target.height
      };
    }
    left = target.min || target.minX || target.minRotation || 0;
    top = target.min || target.minY || 0;
    return {
      left,
      top,
      width: (target.max || target.maxX || target.maxRotation || 0) - left,
      height: (target.max || target.maxY || 0) - top
    };
  }
  return _getElementBounds(e, context);
};
var _point1 = {};
var _getElementBounds = function _getElementBounds2(element, context) {
  context = _toArray(context)[0];
  var isSVG = element.getBBox && element.ownerSVGElement, doc = element.ownerDocument || _doc, left, right, top, bottom, matrix, p1, p2, p3, p4, bbox, width, height, cs;
  if (element === _win) {
    top = _getDocScrollTop(doc);
    left = _getDocScrollLeft(doc);
    right = left + (doc.documentElement.clientWidth || element.innerWidth || doc.body.clientWidth || 0);
    bottom = top + ((element.innerHeight || 0) - 20 < doc.documentElement.clientHeight ? doc.documentElement.clientHeight : element.innerHeight || doc.body.clientHeight || 0);
  } else if (context === _win || _isUndefined(context)) {
    return element.getBoundingClientRect();
  } else {
    left = top = 0;
    if (isSVG) {
      bbox = element.getBBox();
      width = bbox.width;
      height = bbox.height;
    } else {
      if (element.viewBox && (bbox = element.viewBox.baseVal)) {
        left = bbox.x || 0;
        top = bbox.y || 0;
        width = bbox.width;
        height = bbox.height;
      }
      if (!width) {
        cs = _getComputedStyle(element);
        bbox = cs.boxSizing === "border-box";
        width = (parseFloat(cs.width) || element.clientWidth || 0) + (bbox ? 0 : parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth));
        height = (parseFloat(cs.height) || element.clientHeight || 0) + (bbox ? 0 : parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth));
      }
    }
    right = width;
    bottom = height;
  }
  if (element === context) {
    return {
      left,
      top,
      width: right - left,
      height: bottom - top
    };
  }
  matrix = getGlobalMatrix(context, true).multiply(getGlobalMatrix(element));
  p1 = matrix.apply({
    x: left,
    y: top
  });
  p2 = matrix.apply({
    x: right,
    y: top
  });
  p3 = matrix.apply({
    x: right,
    y: bottom
  });
  p4 = matrix.apply({
    x: left,
    y: bottom
  });
  left = Math.min(p1.x, p2.x, p3.x, p4.x);
  top = Math.min(p1.y, p2.y, p3.y, p4.y);
  return {
    left,
    top,
    width: Math.max(p1.x, p2.x, p3.x, p4.x) - left,
    height: Math.max(p1.y, p2.y, p3.y, p4.y) - top
  };
};
var _parseInertia = function _parseInertia2(draggable, snap, max, min, factor, forceZeroVelocity) {
  var vars = {}, a, i, l;
  if (snap) {
    if (factor !== 1 && snap instanceof Array) {
      vars.end = a = [];
      l = snap.length;
      if (_isObject(snap[0])) {
        for (i = 0; i < l; i++) {
          a[i] = _copy(snap[i], factor);
        }
      } else {
        for (i = 0; i < l; i++) {
          a[i] = snap[i] * factor;
        }
      }
      max += 1.1;
      min -= 1.1;
    } else if (_isFunction(snap)) {
      vars.end = function(value) {
        var result = snap.call(draggable, value), copy, p;
        if (factor !== 1) {
          if (_isObject(result)) {
            copy = {};
            for (p in result) {
              copy[p] = result[p] * factor;
            }
            result = copy;
          } else {
            result *= factor;
          }
        }
        return result;
      };
    } else {
      vars.end = snap;
    }
  }
  if (max || max === 0) {
    vars.max = max;
  }
  if (min || min === 0) {
    vars.min = min;
  }
  if (forceZeroVelocity) {
    vars.velocity = 0;
  }
  return vars;
};
var _isClickable = function _isClickable2(element) {
  var data;
  return !element || !element.getAttribute || element === _body ? false : (data = element.getAttribute("data-clickable")) === "true" || data !== "false" && (_clickableTagExp.test(element.nodeName + "") || element.getAttribute("contentEditable") === "true") ? true : _isClickable2(element.parentNode);
};
var _setSelectable = function _setSelectable2(elements, selectable) {
  var i = elements.length, e;
  while (i--) {
    e = elements[i];
    e.ondragstart = e.onselectstart = selectable ? null : _emptyFunc;
    gsap.set(e, {
      lazy: true,
      userSelect: selectable ? "text" : "none"
    });
  }
};
var _isFixed = function _isFixed2(element) {
  if (_getComputedStyle(element).position === "fixed") {
    return true;
  }
  element = element.parentNode;
  if (element && element.nodeType === 1) {
    return _isFixed2(element);
  }
};
var _supports3D;
var _addPaddingBR;
var ScrollProxy = function ScrollProxy2(element, vars) {
  element = gsap.utils.toArray(element)[0];
  vars = vars || {};
  var content = document.createElement("div"), style = content.style, node = element.firstChild, offsetTop = 0, offsetLeft = 0, prevTop = element.scrollTop, prevLeft = element.scrollLeft, scrollWidth = element.scrollWidth, scrollHeight = element.scrollHeight, extraPadRight = 0, maxLeft = 0, maxTop = 0, elementWidth, elementHeight, contentHeight, nextNode, transformStart, transformEnd;
  if (_supports3D && vars.force3D !== false) {
    transformStart = "translate3d(";
    transformEnd = "px,0px)";
  } else if (_transformProp) {
    transformStart = "translate(";
    transformEnd = "px)";
  }
  this.scrollTop = function(value, force) {
    if (!arguments.length) {
      return -this.top();
    }
    this.top(-value, force);
  };
  this.scrollLeft = function(value, force) {
    if (!arguments.length) {
      return -this.left();
    }
    this.left(-value, force);
  };
  this.left = function(value, force) {
    if (!arguments.length) {
      return -(element.scrollLeft + offsetLeft);
    }
    var dif = element.scrollLeft - prevLeft, oldOffset = offsetLeft;
    if ((dif > 2 || dif < -2) && !force) {
      prevLeft = element.scrollLeft;
      gsap.killTweensOf(this, {
        left: 1,
        scrollLeft: 1
      });
      this.left(-prevLeft);
      if (vars.onKill) {
        vars.onKill();
      }
      return;
    }
    value = -value;
    if (value < 0) {
      offsetLeft = value - 0.5 | 0;
      value = 0;
    } else if (value > maxLeft) {
      offsetLeft = value - maxLeft | 0;
      value = maxLeft;
    } else {
      offsetLeft = 0;
    }
    if (offsetLeft || oldOffset) {
      if (!this._skip) {
        style[_transformProp] = transformStart + -offsetLeft + "px," + -offsetTop + transformEnd;
      }
      if (offsetLeft + extraPadRight >= 0) {
        style.paddingRight = offsetLeft + extraPadRight + "px";
      }
    }
    element.scrollLeft = value | 0;
    prevLeft = element.scrollLeft;
  };
  this.top = function(value, force) {
    if (!arguments.length) {
      return -(element.scrollTop + offsetTop);
    }
    var dif = element.scrollTop - prevTop, oldOffset = offsetTop;
    if ((dif > 2 || dif < -2) && !force) {
      prevTop = element.scrollTop;
      gsap.killTweensOf(this, {
        top: 1,
        scrollTop: 1
      });
      this.top(-prevTop);
      if (vars.onKill) {
        vars.onKill();
      }
      return;
    }
    value = -value;
    if (value < 0) {
      offsetTop = value - 0.5 | 0;
      value = 0;
    } else if (value > maxTop) {
      offsetTop = value - maxTop | 0;
      value = maxTop;
    } else {
      offsetTop = 0;
    }
    if (offsetTop || oldOffset) {
      if (!this._skip) {
        style[_transformProp] = transformStart + -offsetLeft + "px," + -offsetTop + transformEnd;
      }
    }
    element.scrollTop = value | 0;
    prevTop = element.scrollTop;
  };
  this.maxScrollTop = function() {
    return maxTop;
  };
  this.maxScrollLeft = function() {
    return maxLeft;
  };
  this.disable = function() {
    node = content.firstChild;
    while (node) {
      nextNode = node.nextSibling;
      element.appendChild(node);
      node = nextNode;
    }
    if (element === content.parentNode) {
      element.removeChild(content);
    }
  };
  this.enable = function() {
    node = element.firstChild;
    if (node === content) {
      return;
    }
    while (node) {
      nextNode = node.nextSibling;
      content.appendChild(node);
      node = nextNode;
    }
    element.appendChild(content);
    this.calibrate();
  };
  this.calibrate = function(force) {
    var widthMatches = element.clientWidth === elementWidth, cs, x, y;
    prevTop = element.scrollTop;
    prevLeft = element.scrollLeft;
    if (widthMatches && element.clientHeight === elementHeight && content.offsetHeight === contentHeight && scrollWidth === element.scrollWidth && scrollHeight === element.scrollHeight && !force) {
      return;
    }
    if (offsetTop || offsetLeft) {
      x = this.left();
      y = this.top();
      this.left(-element.scrollLeft);
      this.top(-element.scrollTop);
    }
    cs = _getComputedStyle(element);
    if (!widthMatches || force) {
      style.display = "block";
      style.width = "auto";
      style.paddingRight = "0px";
      extraPadRight = Math.max(0, element.scrollWidth - element.clientWidth);
      if (extraPadRight) {
        extraPadRight += parseFloat(cs.paddingLeft) + (_addPaddingBR ? parseFloat(cs.paddingRight) : 0);
      }
    }
    style.display = "inline-block";
    style.position = "relative";
    style.overflow = "visible";
    style.verticalAlign = "top";
    style.boxSizing = "content-box";
    style.width = "100%";
    style.paddingRight = extraPadRight + "px";
    if (_addPaddingBR) {
      style.paddingBottom = cs.paddingBottom;
    }
    elementWidth = element.clientWidth;
    elementHeight = element.clientHeight;
    scrollWidth = element.scrollWidth;
    scrollHeight = element.scrollHeight;
    maxLeft = element.scrollWidth - elementWidth;
    maxTop = element.scrollHeight - elementHeight;
    contentHeight = content.offsetHeight;
    style.display = "block";
    if (x || y) {
      this.left(x);
      this.top(y);
    }
  };
  this.content = content;
  this.element = element;
  this._skip = false;
  this.enable();
};
var _initCore = function _initCore2(required) {
  if (_windowExists() && document.body) {
    var nav = window && window.navigator;
    _win = window;
    _doc = document;
    _docElement = _doc.documentElement;
    _body = _doc.body;
    _tempDiv = _createElement("div");
    _supportsPointer = !!window.PointerEvent;
    _placeholderDiv = _createElement("div");
    _placeholderDiv.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab";
    _defaultCursor = _placeholderDiv.style.cursor === "grab" ? "grab" : "move";
    _isAndroid = nav && nav.userAgent.toLowerCase().indexOf("android") !== -1;
    _isTouchDevice = "ontouchstart" in _docElement && "orientation" in _win || nav && (nav.MaxTouchPoints > 0 || nav.msMaxTouchPoints > 0);
    _addPaddingBR = function() {
      var div = _createElement("div"), child = _createElement("div"), childStyle = child.style, parent = _body, val;
      childStyle.display = "inline-block";
      childStyle.position = "relative";
      div.style.cssText = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden";
      div.appendChild(child);
      parent.appendChild(div);
      val = child.offsetHeight + 18 > div.scrollHeight;
      parent.removeChild(div);
      return val;
    }();
    _touchEventLookup = function(types) {
      var standard = types.split(","), converted = ("onpointerdown" in _tempDiv ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown" in _tempDiv ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : types).split(","), obj = {}, i = 4;
      while (--i > -1) {
        obj[standard[i]] = converted[i];
        obj[converted[i]] = standard[i];
      }
      try {
        _docElement.addEventListener("test", null, Object.defineProperty({}, "passive", {
          get: function get() {
            _supportsPassive = 1;
          }
        }));
      } catch (e) {
      }
      return obj;
    }("touchstart,touchmove,touchend,touchcancel");
    _addListener(_doc, "touchcancel", _emptyFunc);
    _addListener(_win, "touchmove", _emptyFunc);
    _body && _body.addEventListener("touchstart", _emptyFunc);
    _addListener(_doc, "contextmenu", function() {
      for (var p in _lookup) {
        if (_lookup[p].isPressed) {
          _lookup[p].endDrag();
        }
      }
    });
    gsap = _coreInitted = _getGSAP();
  }
  if (gsap) {
    InertiaPlugin = gsap.plugins.inertia;
    _context = gsap.core.context || function() {
    };
    _checkPrefix = gsap.utils.checkPrefix;
    _transformProp = _checkPrefix(_transformProp);
    _transformOriginProp = _checkPrefix(_transformOriginProp);
    _toArray = gsap.utils.toArray;
    _getStyleSaver = gsap.core.getStyleSaver;
    _supports3D = !!_checkPrefix("perspective");
  } else if (required) {
    console.warn("Please gsap.registerPlugin(Draggable)");
  }
};
var EventDispatcher = function() {
  function EventDispatcher2(target) {
    this._listeners = {};
    this.target = target || this;
  }
  var _proto = EventDispatcher2.prototype;
  _proto.addEventListener = function addEventListener(type, callback) {
    var list = this._listeners[type] || (this._listeners[type] = []);
    if (!~list.indexOf(callback)) {
      list.push(callback);
    }
  };
  _proto.removeEventListener = function removeEventListener(type, callback) {
    var list = this._listeners[type], i = list && list.indexOf(callback);
    i >= 0 && list.splice(i, 1);
  };
  _proto.dispatchEvent = function dispatchEvent(type) {
    var _this = this;
    var result;
    (this._listeners[type] || []).forEach(function(callback) {
      return callback.call(_this, {
        type,
        target: _this.target
      }) === false && (result = false);
    });
    return result;
  };
  return EventDispatcher2;
}();
var Draggable = function(_EventDispatcher) {
  _inheritsLoose(Draggable2, _EventDispatcher);
  function Draggable2(target, vars) {
    var _this2;
    _this2 = _EventDispatcher.call(this) || this;
    _coreInitted || _initCore(1);
    target = _toArray(target)[0];
    _this2.styles = _getStyleSaver && _getStyleSaver(target, "transform,left,top");
    if (!InertiaPlugin) {
      InertiaPlugin = gsap.plugins.inertia;
    }
    _this2.vars = vars = _copy(vars || {});
    _this2.target = target;
    _this2.x = _this2.y = _this2.rotation = 0;
    _this2.dragResistance = parseFloat(vars.dragResistance) || 0;
    _this2.edgeResistance = isNaN(vars.edgeResistance) ? 1 : parseFloat(vars.edgeResistance) || 0;
    _this2.lockAxis = vars.lockAxis;
    _this2.autoScroll = vars.autoScroll || 0;
    _this2.lockedAxis = null;
    _this2.allowEventDefault = !!vars.allowEventDefault;
    gsap.getProperty(target, "x");
    var type = (vars.type || "x,y").toLowerCase(), xyMode = ~type.indexOf("x") || ~type.indexOf("y"), rotationMode = type.indexOf("rotation") !== -1, xProp = rotationMode ? "rotation" : xyMode ? "x" : "left", yProp = xyMode ? "y" : "top", allowX = !!(~type.indexOf("x") || ~type.indexOf("left") || type === "scroll"), allowY = !!(~type.indexOf("y") || ~type.indexOf("top") || type === "scroll"), minimumMovement = vars.minimumMovement || 2, self = _assertThisInitialized(_this2), triggers = _toArray(vars.trigger || vars.handle || target), killProps = {}, dragEndTime = 0, checkAutoScrollBounds = false, autoScrollMarginTop = vars.autoScrollMarginTop || 40, autoScrollMarginRight = vars.autoScrollMarginRight || 40, autoScrollMarginBottom = vars.autoScrollMarginBottom || 40, autoScrollMarginLeft = vars.autoScrollMarginLeft || 40, isClickable = vars.clickableTest || _isClickable, clickTime = 0, gsCache = target._gsap || gsap.core.getCache(target), isFixed = _isFixed(target), getPropAsNum = function getPropAsNum2(property, unit) {
      return parseFloat(gsCache.get(target, property, unit));
    }, ownerDoc = target.ownerDocument || _doc, enabled, scrollProxy, startPointerX, startPointerY, startElementX, startElementY, hasBounds, hasDragCallback, hasMoveCallback, maxX, minX, maxY, minY, touch, touchID, rotationOrigin, dirty, old, snapX, snapY, snapXY, isClicking, touchEventTarget, matrix, interrupted, allowNativeTouchScrolling, touchDragAxis, isDispatching, clickDispatch, trustedClickDispatch, isPreventingDefault, innerMatrix, dragged, onContextMenu = function onContextMenu2(e) {
      _preventDefault(e);
      e.stopImmediatePropagation && e.stopImmediatePropagation();
      return false;
    }, render = function render2(suppressEvents) {
      if (self.autoScroll && self.isDragging && (checkAutoScrollBounds || dirty)) {
        var e = target, autoScrollFactor = self.autoScroll * 15, parent, isRoot, rect, pointerX, pointerY, changeX, changeY, gap;
        checkAutoScrollBounds = false;
        _windowProxy.scrollTop = _win.pageYOffset != null ? _win.pageYOffset : ownerDoc.documentElement.scrollTop != null ? ownerDoc.documentElement.scrollTop : ownerDoc.body.scrollTop;
        _windowProxy.scrollLeft = _win.pageXOffset != null ? _win.pageXOffset : ownerDoc.documentElement.scrollLeft != null ? ownerDoc.documentElement.scrollLeft : ownerDoc.body.scrollLeft;
        pointerX = self.pointerX - _windowProxy.scrollLeft;
        pointerY = self.pointerY - _windowProxy.scrollTop;
        while (e && !isRoot) {
          isRoot = _isRoot(e.parentNode);
          parent = isRoot ? _windowProxy : e.parentNode;
          rect = isRoot ? {
            bottom: Math.max(_docElement.clientHeight, _win.innerHeight || 0),
            right: Math.max(_docElement.clientWidth, _win.innerWidth || 0),
            left: 0,
            top: 0
          } : parent.getBoundingClientRect();
          changeX = changeY = 0;
          if (allowY) {
            gap = parent._gsMaxScrollY - parent.scrollTop;
            if (gap < 0) {
              changeY = gap;
            } else if (pointerY > rect.bottom - autoScrollMarginBottom && gap) {
              checkAutoScrollBounds = true;
              changeY = Math.min(gap, autoScrollFactor * (1 - Math.max(0, rect.bottom - pointerY) / autoScrollMarginBottom) | 0);
            } else if (pointerY < rect.top + autoScrollMarginTop && parent.scrollTop) {
              checkAutoScrollBounds = true;
              changeY = -Math.min(parent.scrollTop, autoScrollFactor * (1 - Math.max(0, pointerY - rect.top) / autoScrollMarginTop) | 0);
            }
            if (changeY) {
              parent.scrollTop += changeY;
            }
          }
          if (allowX) {
            gap = parent._gsMaxScrollX - parent.scrollLeft;
            if (gap < 0) {
              changeX = gap;
            } else if (pointerX > rect.right - autoScrollMarginRight && gap) {
              checkAutoScrollBounds = true;
              changeX = Math.min(gap, autoScrollFactor * (1 - Math.max(0, rect.right - pointerX) / autoScrollMarginRight) | 0);
            } else if (pointerX < rect.left + autoScrollMarginLeft && parent.scrollLeft) {
              checkAutoScrollBounds = true;
              changeX = -Math.min(parent.scrollLeft, autoScrollFactor * (1 - Math.max(0, pointerX - rect.left) / autoScrollMarginLeft) | 0);
            }
            if (changeX) {
              parent.scrollLeft += changeX;
            }
          }
          if (isRoot && (changeX || changeY)) {
            _win.scrollTo(parent.scrollLeft, parent.scrollTop);
            setPointerPosition(self.pointerX + changeX, self.pointerY + changeY);
          }
          e = parent;
        }
      }
      if (dirty) {
        var x = self.x, y = self.y;
        if (rotationMode) {
          self.deltaX = x - parseFloat(gsCache.rotation);
          self.rotation = x;
          gsCache.rotation = x + "deg";
          gsCache.renderTransform(1, gsCache);
        } else {
          if (scrollProxy) {
            if (allowY) {
              self.deltaY = y - scrollProxy.top();
              scrollProxy.top(y);
            }
            if (allowX) {
              self.deltaX = x - scrollProxy.left();
              scrollProxy.left(x);
            }
          } else if (xyMode) {
            if (allowY) {
              self.deltaY = y - parseFloat(gsCache.y);
              gsCache.y = y + "px";
            }
            if (allowX) {
              self.deltaX = x - parseFloat(gsCache.x);
              gsCache.x = x + "px";
            }
            gsCache.renderTransform(1, gsCache);
          } else {
            if (allowY) {
              self.deltaY = y - parseFloat(target.style.top || 0);
              target.style.top = y + "px";
            }
            if (allowX) {
              self.deltaX = x - parseFloat(target.style.left || 0);
              target.style.left = x + "px";
            }
          }
        }
        if (hasDragCallback && !suppressEvents && !isDispatching) {
          isDispatching = true;
          if (_dispatchEvent(self, "drag", "onDrag") === false) {
            if (allowX) {
              self.x -= self.deltaX;
            }
            if (allowY) {
              self.y -= self.deltaY;
            }
            render2(true);
          }
          isDispatching = false;
        }
      }
      dirty = false;
    }, syncXY = function syncXY2(skipOnUpdate, skipSnap) {
      var x = self.x, y = self.y, snappedValue, cs;
      if (!target._gsap) {
        gsCache = gsap.core.getCache(target);
      }
      gsCache.uncache && gsap.getProperty(target, "x");
      if (xyMode) {
        self.x = parseFloat(gsCache.x);
        self.y = parseFloat(gsCache.y);
      } else if (rotationMode) {
        self.x = self.rotation = parseFloat(gsCache.rotation);
      } else if (scrollProxy) {
        self.y = scrollProxy.top();
        self.x = scrollProxy.left();
      } else {
        self.y = parseFloat(target.style.top || (cs = _getComputedStyle(target)) && cs.top) || 0;
        self.x = parseFloat(target.style.left || (cs || {}).left) || 0;
      }
      if ((snapX || snapY || snapXY) && !skipSnap && (self.isDragging || self.isThrowing)) {
        if (snapXY) {
          _temp1.x = self.x;
          _temp1.y = self.y;
          snappedValue = snapXY(_temp1);
          if (snappedValue.x !== self.x) {
            self.x = snappedValue.x;
            dirty = true;
          }
          if (snappedValue.y !== self.y) {
            self.y = snappedValue.y;
            dirty = true;
          }
        }
        if (snapX) {
          snappedValue = snapX(self.x);
          if (snappedValue !== self.x) {
            self.x = snappedValue;
            if (rotationMode) {
              self.rotation = snappedValue;
            }
            dirty = true;
          }
        }
        if (snapY) {
          snappedValue = snapY(self.y);
          if (snappedValue !== self.y) {
            self.y = snappedValue;
          }
          dirty = true;
        }
      }
      dirty && render(true);
      if (!skipOnUpdate) {
        self.deltaX = self.x - x;
        self.deltaY = self.y - y;
        _dispatchEvent(self, "throwupdate", "onThrowUpdate");
      }
    }, buildSnapFunc = function buildSnapFunc2(snap, min, max, factor) {
      if (min == null) {
        min = -_bigNum;
      }
      if (max == null) {
        max = _bigNum;
      }
      if (_isFunction(snap)) {
        return function(n) {
          var edgeTolerance = !self.isPressed ? 1 : 1 - self.edgeResistance;
          return snap.call(self, (n > max ? max + (n - max) * edgeTolerance : n < min ? min + (n - min) * edgeTolerance : n) * factor) * factor;
        };
      }
      if (_isArray(snap)) {
        return function(n) {
          var i = snap.length, closest = 0, absDif = _bigNum, val, dif;
          while (--i > -1) {
            val = snap[i];
            dif = val - n;
            if (dif < 0) {
              dif = -dif;
            }
            if (dif < absDif && val >= min && val <= max) {
              closest = i;
              absDif = dif;
            }
          }
          return snap[closest];
        };
      }
      return isNaN(snap) ? function(n) {
        return n;
      } : function() {
        return snap * factor;
      };
    }, buildPointSnapFunc = function buildPointSnapFunc2(snap, minX2, maxX2, minY2, maxY2, radius, factor) {
      radius = radius && radius < _bigNum ? radius * radius : _bigNum;
      if (_isFunction(snap)) {
        return function(point) {
          var edgeTolerance = !self.isPressed ? 1 : 1 - self.edgeResistance, x = point.x, y = point.y, result, dx, dy;
          point.x = x = x > maxX2 ? maxX2 + (x - maxX2) * edgeTolerance : x < minX2 ? minX2 + (x - minX2) * edgeTolerance : x;
          point.y = y = y > maxY2 ? maxY2 + (y - maxY2) * edgeTolerance : y < minY2 ? minY2 + (y - minY2) * edgeTolerance : y;
          result = snap.call(self, point);
          if (result !== point) {
            point.x = result.x;
            point.y = result.y;
          }
          if (factor !== 1) {
            point.x *= factor;
            point.y *= factor;
          }
          if (radius < _bigNum) {
            dx = point.x - x;
            dy = point.y - y;
            if (dx * dx + dy * dy > radius) {
              point.x = x;
              point.y = y;
            }
          }
          return point;
        };
      }
      if (_isArray(snap)) {
        return function(p) {
          var i = snap.length, closest = 0, minDist = _bigNum, x, y, point, dist;
          while (--i > -1) {
            point = snap[i];
            x = point.x - p.x;
            y = point.y - p.y;
            dist = x * x + y * y;
            if (dist < minDist) {
              closest = i;
              minDist = dist;
            }
          }
          return minDist <= radius ? snap[closest] : p;
        };
      }
      return function(n) {
        return n;
      };
    }, calculateBounds = function calculateBounds2() {
      var bounds, targetBounds, snap, snapIsRaw;
      hasBounds = false;
      if (scrollProxy) {
        scrollProxy.calibrate();
        self.minX = minX = -scrollProxy.maxScrollLeft();
        self.minY = minY = -scrollProxy.maxScrollTop();
        self.maxX = maxX = self.maxY = maxY = 0;
        hasBounds = true;
      } else if (!!vars.bounds) {
        bounds = _getBounds(vars.bounds, target.parentNode);
        if (rotationMode) {
          self.minX = minX = bounds.left;
          self.maxX = maxX = bounds.left + bounds.width;
          self.minY = minY = self.maxY = maxY = 0;
        } else if (!_isUndefined(vars.bounds.maxX) || !_isUndefined(vars.bounds.maxY)) {
          bounds = vars.bounds;
          self.minX = minX = bounds.minX;
          self.minY = minY = bounds.minY;
          self.maxX = maxX = bounds.maxX;
          self.maxY = maxY = bounds.maxY;
        } else {
          targetBounds = _getBounds(target, target.parentNode);
          self.minX = minX = Math.round(getPropAsNum(xProp, "px") + bounds.left - targetBounds.left);
          self.minY = minY = Math.round(getPropAsNum(yProp, "px") + bounds.top - targetBounds.top);
          self.maxX = maxX = Math.round(minX + (bounds.width - targetBounds.width));
          self.maxY = maxY = Math.round(minY + (bounds.height - targetBounds.height));
        }
        if (minX > maxX) {
          self.minX = maxX;
          self.maxX = maxX = minX;
          minX = self.minX;
        }
        if (minY > maxY) {
          self.minY = maxY;
          self.maxY = maxY = minY;
          minY = self.minY;
        }
        if (rotationMode) {
          self.minRotation = minX;
          self.maxRotation = maxX;
        }
        hasBounds = true;
      }
      if (vars.liveSnap) {
        snap = vars.liveSnap === true ? vars.snap || {} : vars.liveSnap;
        snapIsRaw = _isArray(snap) || _isFunction(snap);
        if (rotationMode) {
          snapX = buildSnapFunc(snapIsRaw ? snap : snap.rotation, minX, maxX, 1);
          snapY = null;
        } else {
          if (snap.points) {
            snapXY = buildPointSnapFunc(snapIsRaw ? snap : snap.points, minX, maxX, minY, maxY, snap.radius, scrollProxy ? -1 : 1);
          } else {
            if (allowX) {
              snapX = buildSnapFunc(snapIsRaw ? snap : snap.x || snap.left || snap.scrollLeft, minX, maxX, scrollProxy ? -1 : 1);
            }
            if (allowY) {
              snapY = buildSnapFunc(snapIsRaw ? snap : snap.y || snap.top || snap.scrollTop, minY, maxY, scrollProxy ? -1 : 1);
            }
          }
        }
      }
    }, onThrowComplete = function onThrowComplete2() {
      self.isThrowing = false;
      _dispatchEvent(self, "throwcomplete", "onThrowComplete");
    }, onThrowInterrupt = function onThrowInterrupt2() {
      self.isThrowing = false;
    }, animate = function animate2(inertia, forceZeroVelocity) {
      var snap, snapIsRaw, tween, overshootTolerance;
      if (inertia && InertiaPlugin) {
        if (inertia === true) {
          snap = vars.snap || vars.liveSnap || {};
          snapIsRaw = _isArray(snap) || _isFunction(snap);
          inertia = {
            resistance: (vars.throwResistance || vars.resistance || 1e3) / (rotationMode ? 10 : 1)
          };
          if (rotationMode) {
            inertia.rotation = _parseInertia(self, snapIsRaw ? snap : snap.rotation, maxX, minX, 1, forceZeroVelocity);
          } else {
            if (allowX) {
              inertia[xProp] = _parseInertia(self, snapIsRaw ? snap : snap.points || snap.x || snap.left, maxX, minX, scrollProxy ? -1 : 1, forceZeroVelocity || self.lockedAxis === "x");
            }
            if (allowY) {
              inertia[yProp] = _parseInertia(self, snapIsRaw ? snap : snap.points || snap.y || snap.top, maxY, minY, scrollProxy ? -1 : 1, forceZeroVelocity || self.lockedAxis === "y");
            }
            if (snap.points || _isArray(snap) && _isObject(snap[0])) {
              inertia.linkedProps = xProp + "," + yProp;
              inertia.radius = snap.radius;
            }
          }
        }
        self.isThrowing = true;
        overshootTolerance = !isNaN(vars.overshootTolerance) ? vars.overshootTolerance : vars.edgeResistance === 1 ? 0 : 1 - self.edgeResistance + 0.2;
        if (!inertia.duration) {
          inertia.duration = {
            max: Math.max(vars.minDuration || 0, "maxDuration" in vars ? vars.maxDuration : 2),
            min: !isNaN(vars.minDuration) ? vars.minDuration : overshootTolerance === 0 || _isObject(inertia) && inertia.resistance > 1e3 ? 0 : 0.5,
            overshoot: overshootTolerance
          };
        }
        self.tween = tween = gsap.to(scrollProxy || target, {
          inertia,
          data: "_draggable",
          inherit: false,
          onComplete: onThrowComplete,
          onInterrupt: onThrowInterrupt,
          onUpdate: vars.fastMode ? _dispatchEvent : syncXY,
          onUpdateParams: vars.fastMode ? [self, "onthrowupdate", "onThrowUpdate"] : snap && snap.radius ? [false, true] : []
        });
        if (!vars.fastMode) {
          if (scrollProxy) {
            scrollProxy._skip = true;
          }
          tween.render(1e9, true, true);
          syncXY(true, true);
          self.endX = self.x;
          self.endY = self.y;
          if (rotationMode) {
            self.endRotation = self.x;
          }
          tween.play(0);
          syncXY(true, true);
          if (scrollProxy) {
            scrollProxy._skip = false;
          }
        }
      } else if (hasBounds) {
        self.applyBounds();
      }
    }, updateMatrix = function updateMatrix2(shiftStart) {
      var start = matrix, p;
      matrix = getGlobalMatrix(target.parentNode, true);
      if (shiftStart && self.isPressed && !matrix.equals(start || new Matrix2D())) {
        p = start.inverse().apply({
          x: startPointerX,
          y: startPointerY
        });
        matrix.apply(p, p);
        startPointerX = p.x;
        startPointerY = p.y;
      }
      if (matrix.equals(_identityMatrix)) {
        matrix = null;
      }
    }, recordStartPositions = function recordStartPositions2() {
      var edgeTolerance = 1 - self.edgeResistance, offsetX = isFixed ? _getDocScrollLeft(ownerDoc) : 0, offsetY = isFixed ? _getDocScrollTop(ownerDoc) : 0, parsedOrigin, x, y;
      if (xyMode) {
        gsCache.x = getPropAsNum(xProp, "px") + "px";
        gsCache.y = getPropAsNum(yProp, "px") + "px";
        gsCache.renderTransform();
      }
      updateMatrix(false);
      _point1.x = self.pointerX - offsetX;
      _point1.y = self.pointerY - offsetY;
      matrix && matrix.apply(_point1, _point1);
      startPointerX = _point1.x;
      startPointerY = _point1.y;
      if (dirty) {
        setPointerPosition(self.pointerX, self.pointerY);
        render(true);
      }
      innerMatrix = getGlobalMatrix(target);
      if (scrollProxy) {
        calculateBounds();
        startElementY = scrollProxy.top();
        startElementX = scrollProxy.left();
      } else {
        if (isTweening()) {
          syncXY(true, true);
          calculateBounds();
        } else {
          self.applyBounds();
        }
        if (rotationMode) {
          parsedOrigin = target.ownerSVGElement ? [gsCache.xOrigin - target.getBBox().x, gsCache.yOrigin - target.getBBox().y] : (_getComputedStyle(target)[_transformOriginProp] || "0 0").split(" ");
          rotationOrigin = self.rotationOrigin = getGlobalMatrix(target).apply({
            x: parseFloat(parsedOrigin[0]) || 0,
            y: parseFloat(parsedOrigin[1]) || 0
          });
          syncXY(true, true);
          x = self.pointerX - rotationOrigin.x - offsetX;
          y = rotationOrigin.y - self.pointerY + offsetY;
          startElementX = self.x;
          startElementY = self.y = Math.atan2(y, x) * _RAD2DEG;
        } else {
          startElementY = getPropAsNum(yProp, "px");
          startElementX = getPropAsNum(xProp, "px");
        }
      }
      if (hasBounds && edgeTolerance) {
        if (startElementX > maxX) {
          startElementX = maxX + (startElementX - maxX) / edgeTolerance;
        } else if (startElementX < minX) {
          startElementX = minX - (minX - startElementX) / edgeTolerance;
        }
        if (!rotationMode) {
          if (startElementY > maxY) {
            startElementY = maxY + (startElementY - maxY) / edgeTolerance;
          } else if (startElementY < minY) {
            startElementY = minY - (minY - startElementY) / edgeTolerance;
          }
        }
      }
      self.startX = startElementX = _round(startElementX);
      self.startY = startElementY = _round(startElementY);
    }, isTweening = function isTweening2() {
      return self.tween && self.tween.isActive();
    }, removePlaceholder = function removePlaceholder2() {
      if (_placeholderDiv.parentNode && !isTweening() && !self.isDragging) {
        _placeholderDiv.parentNode.removeChild(_placeholderDiv);
      }
    }, onPress = function onPress2(e, force) {
      var i;
      if (!enabled || self.isPressed || !e || (e.type === "mousedown" || e.type === "pointerdown") && !force && _getTime() - clickTime < 30 && _touchEventLookup[self.pointerEvent.type]) {
        isPreventingDefault && e && enabled && _preventDefault(e);
        return;
      }
      interrupted = isTweening();
      dragged = false;
      self.pointerEvent = e;
      if (_touchEventLookup[e.type]) {
        touchEventTarget = ~e.type.indexOf("touch") ? e.currentTarget || e.target : ownerDoc;
        _addListener(touchEventTarget, "touchend", onRelease);
        _addListener(touchEventTarget, "touchmove", onMove);
        _addListener(touchEventTarget, "touchcancel", onRelease);
        _addListener(ownerDoc, "touchstart", _onMultiTouchDocument);
      } else {
        touchEventTarget = null;
        _addListener(ownerDoc, "mousemove", onMove);
      }
      touchDragAxis = null;
      if (!_supportsPointer || !touchEventTarget) {
        _addListener(ownerDoc, "mouseup", onRelease);
        e && e.target && _addListener(e.target, "mouseup", onRelease);
      }
      isClicking = isClickable.call(self, e.target) && vars.dragClickables === false && !force;
      if (isClicking) {
        _addListener(e.target, "change", onRelease);
        _dispatchEvent(self, "pressInit", "onPressInit");
        _dispatchEvent(self, "press", "onPress");
        _setSelectable(triggers, true);
        isPreventingDefault = false;
        return;
      }
      allowNativeTouchScrolling = !touchEventTarget || allowX === allowY || self.vars.allowNativeTouchScrolling === false || self.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2) ? false : allowX ? "y" : "x";
      isPreventingDefault = !allowNativeTouchScrolling && !self.allowEventDefault;
      if (isPreventingDefault) {
        _preventDefault(e);
        _addListener(_win, "touchforcechange", _preventDefault);
      }
      if (e.changedTouches) {
        e = touch = e.changedTouches[0];
        touchID = e.identifier;
      } else if (e.pointerId) {
        touchID = e.pointerId;
      } else {
        touch = touchID = null;
      }
      _dragCount++;
      _addToRenderQueue(render);
      startPointerY = self.pointerY = e.pageY;
      startPointerX = self.pointerX = e.pageX;
      _dispatchEvent(self, "pressInit", "onPressInit");
      if (allowNativeTouchScrolling || self.autoScroll) {
        _recordMaxScrolls(target.parentNode);
      }
      if (target.parentNode && self.autoScroll && !scrollProxy && !rotationMode && target.parentNode._gsMaxScrollX && !_placeholderDiv.parentNode && !target.getBBox) {
        _placeholderDiv.style.width = target.parentNode.scrollWidth + "px";
        target.parentNode.appendChild(_placeholderDiv);
      }
      recordStartPositions();
      self.tween && self.tween.kill();
      self.isThrowing = false;
      gsap.killTweensOf(scrollProxy || target, killProps, true);
      scrollProxy && gsap.killTweensOf(target, {
        scrollTo: 1
      }, true);
      self.tween = self.lockedAxis = null;
      if (vars.zIndexBoost || !rotationMode && !scrollProxy && vars.zIndexBoost !== false) {
        target.style.zIndex = Draggable2.zIndex++;
      }
      self.isPressed = true;
      hasDragCallback = !!(vars.onDrag || self._listeners.drag);
      hasMoveCallback = !!(vars.onMove || self._listeners.move);
      if (vars.cursor !== false || vars.activeCursor) {
        i = triggers.length;
        while (--i > -1) {
          gsap.set(triggers[i], {
            cursor: vars.activeCursor || vars.cursor || (_defaultCursor === "grab" ? "grabbing" : _defaultCursor)
          });
        }
      }
      _dispatchEvent(self, "press", "onPress");
    }, onMove = function onMove2(e) {
      var originalEvent = e, touches, pointerX, pointerY, i, dx, dy;
      if (!enabled || _isMultiTouching || !self.isPressed || !e) {
        isPreventingDefault && e && enabled && _preventDefault(e);
        return;
      }
      self.pointerEvent = e;
      touches = e.changedTouches;
      if (touches) {
        e = touches[0];
        if (e !== touch && e.identifier !== touchID) {
          i = touches.length;
          while (--i > -1 && (e = touches[i]).identifier !== touchID && e.target !== target) {
          }
          if (i < 0) {
            return;
          }
        }
      } else if (e.pointerId && touchID && e.pointerId !== touchID) {
        return;
      }
      if (touchEventTarget && allowNativeTouchScrolling && !touchDragAxis) {
        _point1.x = e.pageX - (isFixed ? _getDocScrollLeft(ownerDoc) : 0);
        _point1.y = e.pageY - (isFixed ? _getDocScrollTop(ownerDoc) : 0);
        matrix && matrix.apply(_point1, _point1);
        pointerX = _point1.x;
        pointerY = _point1.y;
        dx = Math.abs(pointerX - startPointerX);
        dy = Math.abs(pointerY - startPointerY);
        if (dx !== dy && (dx > minimumMovement || dy > minimumMovement) || _isAndroid && allowNativeTouchScrolling === touchDragAxis) {
          touchDragAxis = dx > dy && allowX ? "x" : "y";
          if (allowNativeTouchScrolling && touchDragAxis !== allowNativeTouchScrolling) {
            _addListener(_win, "touchforcechange", _preventDefault);
          }
          if (self.vars.lockAxisOnTouchScroll !== false && allowX && allowY) {
            self.lockedAxis = touchDragAxis === "x" ? "y" : "x";
            _isFunction(self.vars.onLockAxis) && self.vars.onLockAxis.call(self, originalEvent);
          }
          if (_isAndroid && allowNativeTouchScrolling === touchDragAxis) {
            onRelease(originalEvent);
            return;
          }
        }
      }
      if (!self.allowEventDefault && (!allowNativeTouchScrolling || touchDragAxis && allowNativeTouchScrolling !== touchDragAxis) && originalEvent.cancelable !== false) {
        _preventDefault(originalEvent);
        isPreventingDefault = true;
      } else if (isPreventingDefault) {
        isPreventingDefault = false;
      }
      if (self.autoScroll) {
        checkAutoScrollBounds = true;
      }
      setPointerPosition(e.pageX, e.pageY, hasMoveCallback);
    }, setPointerPosition = function setPointerPosition2(pointerX, pointerY, invokeOnMove) {
      var dragTolerance = 1 - self.dragResistance, edgeTolerance = 1 - self.edgeResistance, prevPointerX = self.pointerX, prevPointerY = self.pointerY, prevStartElementY = startElementY, prevX = self.x, prevY = self.y, prevEndX = self.endX, prevEndY = self.endY, prevEndRotation = self.endRotation, prevDirty = dirty, xChange, yChange, x, y, dif, temp;
      self.pointerX = pointerX;
      self.pointerY = pointerY;
      if (isFixed) {
        pointerX -= _getDocScrollLeft(ownerDoc);
        pointerY -= _getDocScrollTop(ownerDoc);
      }
      if (rotationMode) {
        y = Math.atan2(rotationOrigin.y - pointerY, pointerX - rotationOrigin.x) * _RAD2DEG;
        dif = self.y - y;
        if (dif > 180) {
          startElementY -= 360;
          self.y = y;
        } else if (dif < -180) {
          startElementY += 360;
          self.y = y;
        }
        if (self.x !== startElementX || Math.abs(startElementY - y) > minimumMovement) {
          self.y = y;
          x = startElementX + (startElementY - y) * dragTolerance;
        } else {
          x = startElementX;
        }
      } else {
        if (matrix) {
          temp = pointerX * matrix.a + pointerY * matrix.c + matrix.e;
          pointerY = pointerX * matrix.b + pointerY * matrix.d + matrix.f;
          pointerX = temp;
        }
        yChange = pointerY - startPointerY;
        xChange = pointerX - startPointerX;
        if (yChange < minimumMovement && yChange > -minimumMovement) {
          yChange = 0;
        }
        if (xChange < minimumMovement && xChange > -minimumMovement) {
          xChange = 0;
        }
        if ((self.lockAxis || self.lockedAxis) && (xChange || yChange)) {
          temp = self.lockedAxis;
          if (!temp) {
            self.lockedAxis = temp = allowX && Math.abs(xChange) > Math.abs(yChange) ? "y" : allowY ? "x" : null;
            if (temp && _isFunction(self.vars.onLockAxis)) {
              self.vars.onLockAxis.call(self, self.pointerEvent);
            }
          }
          if (temp === "y") {
            yChange = 0;
          } else if (temp === "x") {
            xChange = 0;
          }
        }
        x = _round(startElementX + xChange * dragTolerance);
        y = _round(startElementY + yChange * dragTolerance);
      }
      if ((snapX || snapY || snapXY) && (self.x !== x || self.y !== y && !rotationMode)) {
        if (snapXY) {
          _temp1.x = x;
          _temp1.y = y;
          temp = snapXY(_temp1);
          x = _round(temp.x);
          y = _round(temp.y);
        }
        if (snapX) {
          x = _round(snapX(x));
        }
        if (snapY) {
          y = _round(snapY(y));
        }
      }
      if (hasBounds) {
        if (x > maxX) {
          x = maxX + Math.round((x - maxX) * edgeTolerance);
        } else if (x < minX) {
          x = minX + Math.round((x - minX) * edgeTolerance);
        }
        if (!rotationMode) {
          if (y > maxY) {
            y = Math.round(maxY + (y - maxY) * edgeTolerance);
          } else if (y < minY) {
            y = Math.round(minY + (y - minY) * edgeTolerance);
          }
        }
      }
      if (self.x !== x || self.y !== y && !rotationMode) {
        if (rotationMode) {
          self.endRotation = self.x = self.endX = x;
          dirty = true;
        } else {
          if (allowY) {
            self.y = self.endY = y;
            dirty = true;
          }
          if (allowX) {
            self.x = self.endX = x;
            dirty = true;
          }
        }
        if (!invokeOnMove || _dispatchEvent(self, "move", "onMove") !== false) {
          if (!self.isDragging && self.isPressed) {
            self.isDragging = dragged = true;
            _dispatchEvent(self, "dragstart", "onDragStart");
          }
        } else {
          self.pointerX = prevPointerX;
          self.pointerY = prevPointerY;
          startElementY = prevStartElementY;
          self.x = prevX;
          self.y = prevY;
          self.endX = prevEndX;
          self.endY = prevEndY;
          self.endRotation = prevEndRotation;
          dirty = prevDirty;
        }
      }
    }, onRelease = function onRelease2(e, force) {
      if (!enabled || !self.isPressed || e && touchID != null && !force && (e.pointerId && e.pointerId !== touchID && e.target !== target || e.changedTouches && !_hasTouchID(e.changedTouches, touchID))) {
        isPreventingDefault && e && enabled && _preventDefault(e);
        return;
      }
      self.isPressed = false;
      var originalEvent = e, wasDragging = self.isDragging, isContextMenuRelease = self.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2), placeholderDelayedCall = gsap.delayedCall(1e-3, removePlaceholder), touches, i, syntheticEvent, eventTarget, syntheticClick;
      if (touchEventTarget) {
        _removeListener(touchEventTarget, "touchend", onRelease2);
        _removeListener(touchEventTarget, "touchmove", onMove);
        _removeListener(touchEventTarget, "touchcancel", onRelease2);
        _removeListener(ownerDoc, "touchstart", _onMultiTouchDocument);
      } else {
        _removeListener(ownerDoc, "mousemove", onMove);
      }
      _removeListener(_win, "touchforcechange", _preventDefault);
      if (!_supportsPointer || !touchEventTarget) {
        _removeListener(ownerDoc, "mouseup", onRelease2);
        e && e.target && _removeListener(e.target, "mouseup", onRelease2);
      }
      dirty = false;
      if (wasDragging) {
        dragEndTime = _lastDragTime = _getTime();
        self.isDragging = false;
      }
      _removeFromRenderQueue(render);
      if (isClicking && !isContextMenuRelease) {
        if (e) {
          _removeListener(e.target, "change", onRelease2);
          self.pointerEvent = originalEvent;
        }
        _setSelectable(triggers, false);
        _dispatchEvent(self, "release", "onRelease");
        _dispatchEvent(self, "click", "onClick");
        isClicking = false;
        return;
      }
      i = triggers.length;
      while (--i > -1) {
        _setStyle(triggers[i], "cursor", vars.cursor || (vars.cursor !== false ? _defaultCursor : null));
      }
      _dragCount--;
      if (e) {
        touches = e.changedTouches;
        if (touches) {
          e = touches[0];
          if (e !== touch && e.identifier !== touchID) {
            i = touches.length;
            while (--i > -1 && (e = touches[i]).identifier !== touchID && e.target !== target) {
            }
            if (i < 0 && !force) {
              return;
            }
          }
        }
        self.pointerEvent = originalEvent;
        self.pointerX = e.pageX;
        self.pointerY = e.pageY;
      }
      if (isContextMenuRelease && originalEvent) {
        _preventDefault(originalEvent);
        isPreventingDefault = true;
        _dispatchEvent(self, "release", "onRelease");
      } else if (originalEvent && !wasDragging) {
        isPreventingDefault = false;
        if (interrupted && (vars.snap || vars.bounds)) {
          animate(vars.inertia || vars.throwProps);
        }
        _dispatchEvent(self, "release", "onRelease");
        if ((!_isAndroid || originalEvent.type !== "touchmove") && originalEvent.type.indexOf("cancel") === -1) {
          _dispatchEvent(self, "click", "onClick");
          if (_getTime() - clickTime < 300) {
            _dispatchEvent(self, "doubleclick", "onDoubleClick");
          }
          eventTarget = originalEvent.target || target;
          clickTime = _getTime();
          syntheticClick = function syntheticClick2() {
            if (clickTime !== clickDispatch && self.enabled() && !self.isPressed && !originalEvent.defaultPrevented) {
              if (eventTarget.click) {
                eventTarget.click();
              } else if (ownerDoc.createEvent) {
                syntheticEvent = ownerDoc.createEvent("MouseEvents");
                syntheticEvent.initMouseEvent("click", true, true, _win, 1, self.pointerEvent.screenX, self.pointerEvent.screenY, self.pointerX, self.pointerY, false, false, false, false, 0, null);
                eventTarget.dispatchEvent(syntheticEvent);
              }
            }
          };
          if (!_isAndroid && !originalEvent.defaultPrevented) {
            gsap.delayedCall(0.05, syntheticClick);
          }
        }
      } else {
        animate(vars.inertia || vars.throwProps);
        if (!self.allowEventDefault && originalEvent && (vars.dragClickables !== false || !isClickable.call(self, originalEvent.target)) && wasDragging && (!allowNativeTouchScrolling || touchDragAxis && allowNativeTouchScrolling === touchDragAxis) && originalEvent.cancelable !== false) {
          isPreventingDefault = true;
          _preventDefault(originalEvent);
        } else {
          isPreventingDefault = false;
        }
        _dispatchEvent(self, "release", "onRelease");
      }
      isTweening() && placeholderDelayedCall.duration(self.tween.duration());
      wasDragging && _dispatchEvent(self, "dragend", "onDragEnd");
      return true;
    }, updateScroll = function updateScroll2(e) {
      if (e && self.isDragging && !scrollProxy) {
        var parent = e.target || target.parentNode, deltaX = parent.scrollLeft - parent._gsScrollX, deltaY = parent.scrollTop - parent._gsScrollY;
        if (deltaX || deltaY) {
          if (matrix) {
            startPointerX -= deltaX * matrix.a + deltaY * matrix.c;
            startPointerY -= deltaY * matrix.d + deltaX * matrix.b;
          } else {
            startPointerX -= deltaX;
            startPointerY -= deltaY;
          }
          parent._gsScrollX += deltaX;
          parent._gsScrollY += deltaY;
          setPointerPosition(self.pointerX, self.pointerY);
        }
      }
    }, onClick = function onClick2(e) {
      var time = _getTime(), recentlyClicked = time - clickTime < 100, recentlyDragged = time - dragEndTime < 50, alreadyDispatched = recentlyClicked && clickDispatch === clickTime, defaultPrevented = self.pointerEvent && self.pointerEvent.defaultPrevented, alreadyDispatchedTrusted = recentlyClicked && trustedClickDispatch === clickTime, trusted = e.isTrusted || e.isTrusted == null && recentlyClicked && alreadyDispatched;
      if ((alreadyDispatched || recentlyDragged && self.vars.suppressClickOnDrag !== false) && e.stopImmediatePropagation) {
        e.stopImmediatePropagation();
      }
      if (recentlyClicked && !(self.pointerEvent && self.pointerEvent.defaultPrevented) && (!alreadyDispatched || trusted && !alreadyDispatchedTrusted)) {
        if (trusted && alreadyDispatched) {
          trustedClickDispatch = clickTime;
        }
        clickDispatch = clickTime;
        return;
      }
      if (self.isPressed || recentlyDragged || recentlyClicked) {
        if (!trusted || !e.detail || !recentlyClicked || defaultPrevented) {
          _preventDefault(e);
        }
      }
      if (!recentlyClicked && !recentlyDragged && !dragged) {
        e && e.target && (self.pointerEvent = e);
        _dispatchEvent(self, "click", "onClick");
      }
    }, localizePoint = function localizePoint2(p) {
      return matrix ? {
        x: p.x * matrix.a + p.y * matrix.c + matrix.e,
        y: p.x * matrix.b + p.y * matrix.d + matrix.f
      } : {
        x: p.x,
        y: p.y
      };
    };
    old = Draggable2.get(target);
    old && old.kill();
    _this2.startDrag = function(event, align) {
      var r1, r2, p1, p2;
      onPress(event || self.pointerEvent, true);
      if (align && !self.hitTest(event || self.pointerEvent)) {
        r1 = _parseRect(event || self.pointerEvent);
        r2 = _parseRect(target);
        p1 = localizePoint({
          x: r1.left + r1.width / 2,
          y: r1.top + r1.height / 2
        });
        p2 = localizePoint({
          x: r2.left + r2.width / 2,
          y: r2.top + r2.height / 2
        });
        startPointerX -= p1.x - p2.x;
        startPointerY -= p1.y - p2.y;
      }
      if (!self.isDragging) {
        self.isDragging = dragged = true;
        _dispatchEvent(self, "dragstart", "onDragStart");
      }
    };
    _this2.drag = onMove;
    _this2.endDrag = function(e) {
      return onRelease(e || self.pointerEvent, true);
    };
    _this2.timeSinceDrag = function() {
      return self.isDragging ? 0 : (_getTime() - dragEndTime) / 1e3;
    };
    _this2.timeSinceClick = function() {
      return (_getTime() - clickTime) / 1e3;
    };
    _this2.hitTest = function(target2, threshold) {
      return Draggable2.hitTest(self.target, target2, threshold);
    };
    _this2.getDirection = function(from, diagonalThreshold) {
      var mode = from === "velocity" && InertiaPlugin ? from : _isObject(from) && !rotationMode ? "element" : "start", xChange, yChange, ratio, direction, r1, r2;
      if (mode === "element") {
        r1 = _parseRect(self.target);
        r2 = _parseRect(from);
      }
      xChange = mode === "start" ? self.x - startElementX : mode === "velocity" ? InertiaPlugin.getVelocity(target, xProp) : r1.left + r1.width / 2 - (r2.left + r2.width / 2);
      if (rotationMode) {
        return xChange < 0 ? "counter-clockwise" : "clockwise";
      } else {
        diagonalThreshold = diagonalThreshold || 2;
        yChange = mode === "start" ? self.y - startElementY : mode === "velocity" ? InertiaPlugin.getVelocity(target, yProp) : r1.top + r1.height / 2 - (r2.top + r2.height / 2);
        ratio = Math.abs(xChange / yChange);
        direction = ratio < 1 / diagonalThreshold ? "" : xChange < 0 ? "left" : "right";
        if (ratio < diagonalThreshold) {
          if (direction !== "") {
            direction += "-";
          }
          direction += yChange < 0 ? "up" : "down";
        }
      }
      return direction;
    };
    _this2.applyBounds = function(newBounds, sticky) {
      var x, y, forceZeroVelocity, e, parent, isRoot;
      if (newBounds && vars.bounds !== newBounds) {
        vars.bounds = newBounds;
        return self.update(true, sticky);
      }
      syncXY(true);
      calculateBounds();
      if (hasBounds && !isTweening()) {
        x = self.x;
        y = self.y;
        if (x > maxX) {
          x = maxX;
        } else if (x < minX) {
          x = minX;
        }
        if (y > maxY) {
          y = maxY;
        } else if (y < minY) {
          y = minY;
        }
        if (self.x !== x || self.y !== y) {
          forceZeroVelocity = true;
          self.x = self.endX = x;
          if (rotationMode) {
            self.endRotation = x;
          } else {
            self.y = self.endY = y;
          }
          dirty = true;
          render(true);
          if (self.autoScroll && !self.isDragging) {
            _recordMaxScrolls(target.parentNode);
            e = target;
            _windowProxy.scrollTop = _win.pageYOffset != null ? _win.pageYOffset : ownerDoc.documentElement.scrollTop != null ? ownerDoc.documentElement.scrollTop : ownerDoc.body.scrollTop;
            _windowProxy.scrollLeft = _win.pageXOffset != null ? _win.pageXOffset : ownerDoc.documentElement.scrollLeft != null ? ownerDoc.documentElement.scrollLeft : ownerDoc.body.scrollLeft;
            while (e && !isRoot) {
              isRoot = _isRoot(e.parentNode);
              parent = isRoot ? _windowProxy : e.parentNode;
              if (allowY && parent.scrollTop > parent._gsMaxScrollY) {
                parent.scrollTop = parent._gsMaxScrollY;
              }
              if (allowX && parent.scrollLeft > parent._gsMaxScrollX) {
                parent.scrollLeft = parent._gsMaxScrollX;
              }
              e = parent;
            }
          }
        }
        if (self.isThrowing && (forceZeroVelocity || self.endX > maxX || self.endX < minX || self.endY > maxY || self.endY < minY)) {
          animate(vars.inertia || vars.throwProps, forceZeroVelocity);
        }
      }
      return self;
    };
    _this2.update = function(applyBounds, sticky, ignoreExternalChanges) {
      if (sticky && self.isPressed) {
        var m = getGlobalMatrix(target), p = innerMatrix.apply({
          x: self.x - startElementX,
          y: self.y - startElementY
        }), m2 = getGlobalMatrix(target.parentNode, true);
        m2.apply({
          x: m.e - p.x,
          y: m.f - p.y
        }, p);
        self.x -= p.x - m2.e;
        self.y -= p.y - m2.f;
        render(true);
        recordStartPositions();
      }
      var x = self.x, y = self.y;
      updateMatrix(!sticky);
      if (applyBounds) {
        self.applyBounds();
      } else {
        dirty && ignoreExternalChanges && render(true);
        syncXY(true);
      }
      if (sticky) {
        setPointerPosition(self.pointerX, self.pointerY);
        dirty && render(true);
      }
      if (self.isPressed && !sticky && (allowX && Math.abs(x - self.x) > 0.01 || allowY && Math.abs(y - self.y) > 0.01 && !rotationMode)) {
        recordStartPositions();
      }
      if (self.autoScroll) {
        _recordMaxScrolls(target.parentNode, self.isDragging);
        checkAutoScrollBounds = self.isDragging;
        render(true);
        _removeScrollListener(target, updateScroll);
        _addScrollListener(target, updateScroll);
      }
      return self;
    };
    _this2.enable = function(type2) {
      var setVars = {
        lazy: true
      }, id, i, trigger;
      if (vars.cursor !== false) {
        setVars.cursor = vars.cursor || _defaultCursor;
      }
      if (gsap.utils.checkPrefix("touchCallout")) {
        setVars.touchCallout = "none";
      }
      if (type2 !== "soft") {
        _setTouchActionForAllDescendants(triggers, allowX === allowY ? "none" : vars.allowNativeTouchScrolling && target.scrollHeight === target.clientHeight === (target.scrollWidth === target.clientHeight) || vars.allowEventDefault ? "manipulation" : allowX ? "pan-y" : "pan-x");
        i = triggers.length;
        while (--i > -1) {
          trigger = triggers[i];
          _supportsPointer || _addListener(trigger, "mousedown", onPress);
          _addListener(trigger, "touchstart", onPress);
          _addListener(trigger, "click", onClick, true);
          gsap.set(trigger, setVars);
          if (trigger.getBBox && trigger.ownerSVGElement && allowX !== allowY) {
            gsap.set(trigger.ownerSVGElement, {
              touchAction: vars.allowNativeTouchScrolling || vars.allowEventDefault ? "manipulation" : allowX ? "pan-y" : "pan-x"
            });
          }
          vars.allowContextMenu || _addListener(trigger, "contextmenu", onContextMenu);
        }
        _setSelectable(triggers, false);
      }
      _addScrollListener(target, updateScroll);
      enabled = true;
      if (InertiaPlugin && type2 !== "soft") {
        InertiaPlugin.track(scrollProxy || target, xyMode ? "x,y" : rotationMode ? "rotation" : "top,left");
      }
      target._gsDragID = id = "d" + _lookupCount++;
      _lookup[id] = self;
      if (scrollProxy) {
        scrollProxy.enable();
        scrollProxy.element._gsDragID = id;
      }
      (vars.bounds || rotationMode) && recordStartPositions();
      vars.bounds && self.applyBounds();
      return self;
    };
    _this2.disable = function(type2) {
      var dragging = self.isDragging, i = triggers.length, trigger;
      while (--i > -1) {
        _setStyle(triggers[i], "cursor", null);
      }
      if (type2 !== "soft") {
        _setTouchActionForAllDescendants(triggers, null);
        i = triggers.length;
        while (--i > -1) {
          trigger = triggers[i];
          _setStyle(trigger, "touchCallout", null);
          _removeListener(trigger, "mousedown", onPress);
          _removeListener(trigger, "touchstart", onPress);
          _removeListener(trigger, "click", onClick, true);
          _removeListener(trigger, "contextmenu", onContextMenu);
        }
        _setSelectable(triggers, true);
        if (touchEventTarget) {
          _removeListener(touchEventTarget, "touchcancel", onRelease);
          _removeListener(touchEventTarget, "touchend", onRelease);
          _removeListener(touchEventTarget, "touchmove", onMove);
        }
        _removeListener(ownerDoc, "mouseup", onRelease);
        _removeListener(ownerDoc, "mousemove", onMove);
      }
      _removeScrollListener(target, updateScroll);
      enabled = false;
      if (InertiaPlugin && type2 !== "soft") {
        InertiaPlugin.untrack(scrollProxy || target, xyMode ? "x,y" : rotationMode ? "rotation" : "top,left");
        self.tween && self.tween.kill();
      }
      scrollProxy && scrollProxy.disable();
      _removeFromRenderQueue(render);
      self.isDragging = self.isPressed = isClicking = false;
      dragging && _dispatchEvent(self, "dragend", "onDragEnd");
      return self;
    };
    _this2.enabled = function(value, type2) {
      return arguments.length ? value ? self.enable(type2) : self.disable(type2) : enabled;
    };
    _this2.kill = function() {
      self.isThrowing = false;
      self.tween && self.tween.kill();
      self.disable();
      gsap.set(triggers, {
        clearProps: "userSelect"
      });
      delete _lookup[target._gsDragID];
      return self;
    };
    _this2.revert = function() {
      this.kill();
      this.styles && this.styles.revert();
    };
    if (~type.indexOf("scroll")) {
      scrollProxy = _this2.scrollProxy = new ScrollProxy(target, _extend({
        onKill: function onKill() {
          self.isPressed && onRelease(null);
        }
      }, vars));
      target.style.overflowY = allowY && !_isTouchDevice ? "auto" : "hidden";
      target.style.overflowX = allowX && !_isTouchDevice ? "auto" : "hidden";
      target = scrollProxy.content;
    }
    if (rotationMode) {
      killProps.rotation = 1;
    } else {
      if (allowX) {
        killProps[xProp] = 1;
      }
      if (allowY) {
        killProps[yProp] = 1;
      }
    }
    gsCache.force3D = "force3D" in vars ? vars.force3D : true;
    _context(_assertThisInitialized(_this2));
    _this2.enable();
    return _this2;
  }
  Draggable2.register = function register(core) {
    gsap = core;
    _initCore();
  };
  Draggable2.create = function create(targets, vars) {
    _coreInitted || _initCore(true);
    return _toArray(targets).map(function(target) {
      return new Draggable2(target, vars);
    });
  };
  Draggable2.get = function get(target) {
    return _lookup[(_toArray(target)[0] || {})._gsDragID];
  };
  Draggable2.timeSinceDrag = function timeSinceDrag() {
    return (_getTime() - _lastDragTime) / 1e3;
  };
  Draggable2.hitTest = function hitTest(obj1, obj2, threshold) {
    if (obj1 === obj2) {
      return false;
    }
    var r1 = _parseRect(obj1), r2 = _parseRect(obj2), top = r1.top, left = r1.left, right = r1.right, bottom = r1.bottom, width = r1.width, height = r1.height, isOutside = r2.left > right || r2.right < left || r2.top > bottom || r2.bottom < top, overlap, area, isRatio;
    if (isOutside || !threshold) {
      return !isOutside;
    }
    isRatio = (threshold + "").indexOf("%") !== -1;
    threshold = parseFloat(threshold) || 0;
    overlap = {
      left: Math.max(left, r2.left),
      top: Math.max(top, r2.top)
    };
    overlap.width = Math.min(right, r2.right) - overlap.left;
    overlap.height = Math.min(bottom, r2.bottom) - overlap.top;
    if (overlap.width < 0 || overlap.height < 0) {
      return false;
    }
    if (isRatio) {
      threshold *= 0.01;
      area = overlap.width * overlap.height;
      return area >= width * height * threshold || area >= r2.width * r2.height * threshold;
    }
    return overlap.width > threshold && overlap.height > threshold;
  };
  return Draggable2;
}(EventDispatcher);
_setDefaults(Draggable.prototype, {
  pointerX: 0,
  pointerY: 0,
  startX: 0,
  startY: 0,
  deltaX: 0,
  deltaY: 0,
  isDragging: false,
  isPressed: false
});
Draggable.zIndex = 1e3;
Draggable.version = "3.12.5";
_getGSAP() && gsap.registerPlugin(Draggable);
export {
  Draggable,
  Draggable as default
};
/*! Bundled license information:

gsap/Draggable.js:
  (*!
   * Draggable 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
   *)
*/
//# sourceMappingURL=gsap_Draggable.js.map
