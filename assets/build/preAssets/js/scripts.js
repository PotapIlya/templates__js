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
    this.shadowArray = [this.shadowX, this.shadowY, this.shadowF];
    this.init();
  }

  _createClass(Transform, [{
    key: "init",
    value: function init() {
      this.changeWidth();
      this.changeHeight();
      this.rotateFunct();
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
      }

      if (value.height) {
        this.heightSize.innerText = value.height;
      }
    }
  }, {
    key: "rotateFunct",
    value: function rotateFunct() {
      var _this3 = this;

      this.rotate.addEventListener('mousemove', function (e) {
        _this3.figure.style.transform = 'rotate(' + rotateVal + 'deg )';
      });
    }
  }]);

  return Transform;
}();

document.addEventListener('DOMContentLoaded', function () {
  new Transform();
});