'use strict'

var React = require('react')

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : {default: e}
}

var React__default = /*#__PURE__*/ _interopDefaultLegacy(React)

var Button = function (_ref) {
  var children = _ref.children
  return /*#__PURE__*/ React__default['default'].createElement(
    'button',
    {
      style: {
        color: 'blue',
      },
      onClick: console.log
    },
    children
  )
}

module.exports = Button

// 作者：Aaaaaaaaaaayou
// 链接：https://juejin.cn/post/7040435885749305381
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。