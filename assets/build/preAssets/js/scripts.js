"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Transform = /*#__PURE__*/function () {
  function Transform() {
    _classCallCheck(this, Transform);

    this.rounding = document.querySelector('#rounding');
    this.number = document.querySelector('.number');
    this.figure = document.querySelector('#figure');
    this.colorBox = document.querySelectorAll('.colorBox');
    this.rotate = document.querySelector('#rotate');
    this.width = document.querySelector('#width');
    this.height = document.querySelector('#height');
    this.widthSize = document.querySelector('.width');
    this.heightSize = document.querySelector('.height');
    this.shadowX = document.querySelector('#shadowX');
    this.shadowY = document.querySelector('#shadowY');
    this.shadowF = document.querySelector('#shadowF');
    this.shadowColor = document.querySelectorAll('.shadow-color>div');
    this.skewX = document.querySelector('#skew');
    this.getCode = document.querySelector('#getCode');
    this.getCodeForm = document.querySelector('#getCodeForm');
    this.resCode = {};
    this.shadowArray = {
      x: 0,
      y: 0,
      f: 0,
      color: '#fff'
    };
    this.init();
  }

  _createClass(Transform, [{
    key: "init",
    value: function init() {
      this.changeWidth();
      this.changeHeight();
      this.rotateFunct();
      this.colorFigure();
      this.borderRadius();
      this.getCodeFunct();
      this.skew();
      this.boxShadow();
    }
  }, {
    key: "changeWidth",
    value: function changeWidth() {
      var _this = this;

      this.width.addEventListener('mousemove', function () {
        var value = _this.width.value + 'px';
        _this.figure.style.width = value;

        _this.changeNumberSize({
          width: value
        });
      });
    }
  }, {
    key: "changeHeight",
    value: function changeHeight() {
      var _this2 = this;

      this.height.addEventListener('mousemove', function () {
        var value = _this2.height.value + 'px';
        _this2.figure.style.height = value;

        _this2.changeNumberSize({
          height: value
        });
      });
    }
  }, {
    key: "changeNumberSize",
    value: function changeNumberSize(value) {
      if (value.width) {
        this.widthSize.innerText = value.width;
        this.resCode.width = value.width;
      }

      if (value.height) {
        this.heightSize.innerText = value.height;
        this.resCode.height = value.height;
      }
    }
  }, {
    key: "rotateFunct",
    value: function rotateFunct() {
      var _this3 = this;

      this.rotate.addEventListener('mousemove', function (e) {
        var value = e.target.value;
        _this3.figure.style.transform = 'rotate(' + value + 'deg )';

        _this3.changeCenterText(value + 'deg');

        _this3.resCode.rotate = value;
        _this3.resCode.skewX = 0;
      });
    }
  }, {
    key: "colorFigure",
    value: function colorFigure() {
      var _this4 = this;

      this.colorBox.forEach(function (item) {
        item.addEventListener('click', function () {
          _this4.figure.style.background = item.dataset.value;

          _this4.changeCenterText(item.dataset.color);

          _this4.resCode.background = item.dataset.value;
        });
      });
    }
  }, {
    key: "changeCenterText",
    value: function changeCenterText(data) {
      this.number.textContent = data;
    }
  }, {
    key: "borderRadius",
    value: function borderRadius() {
      var _this5 = this;

      this.rounding.addEventListener('mousemove', function (e) {
        var value = e.target.value + 'px';
        _this5.figure.style.borderRadius = value;
        _this5.resCode.borderRadius = value;

        _this5.changeCenterText(value);
      });
    }
  }, {
    key: "skew",
    value: function skew() {
      var _this6 = this;

      this.skewX.addEventListener('mousemove', function (e) {
        var value = e.target.value;
        _this6.figure.style.transform = "skewX(".concat(value, "deg)");

        _this6.changeCenterText(value);

        _this6.resCode.skewX = value;
        _this6.resCode.rotate = 0;
      });
    }
  }, {
    key: "getCodeFunct",
    value: function getCodeFunct() {
      var _this7 = this;

      this.getCode.addEventListener('click', function () {
        _this7.getCodeForm.innerText = Object.entries(_this7.resCode).reduce(function (prev, item) {
          return "".concat((prev + item).split(',').join(':'), ";\n");
        }, '');
      });
    }
  }, {
    key: "boxShadow",
    value: function boxShadow() {
      var _this8 = this;

      this.shadowX.addEventListener('mousemove', function (e) {
        _this8.shadowArray.x = e.target.value;

        _this8.changeBoxShadow();

        _this8.changeCenterText(e.target.value);
      });
      this.shadowY.addEventListener('mousemove', function (e) {
        _this8.shadowArray.y = e.target.value;

        _this8.changeBoxShadow();

        _this8.changeCenterText(e.target.value);
      });
      this.shadowF.addEventListener('mousemove', function (e) {
        _this8.shadowArray.f = e.target.value;

        _this8.changeBoxShadow();

        _this8.changeCenterText(e.target.value);
      });
      this.shadowColor.forEach(function (item) {
        item.addEventListener('click', function (e) {
          _this8.shadowArray.color = e.target.dataset.value;

          _this8.changeBoxShadow();

          _this8.changeCenterText(e.target.dataset.color);
        });
      });
    }
  }, {
    key: "changeBoxShadow",
    value: function changeBoxShadow() {
      this.figure.style.boxShadow = "".concat(this.shadowArray.x, "px ").concat(this.shadowArray.y, "px ").concat(this.shadowArray.f, "px ").concat(this.shadowArray.color);
    }
  }]);

  return Transform;
}();

document.addEventListener('DOMContentLoaded', function () {
  new Transform();
});