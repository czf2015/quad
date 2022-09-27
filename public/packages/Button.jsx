'use strict';

var React = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const packages = {
    react: React__default["default"],
};
const getParsedModule = (code) => {
    let module = {
        exports: {},
    };
    const require = (name) => {
        return packages[name];
    };
    Function('require, exports, module', code)(require, module.exports, module);
    return module;
};
const fetchComponent = async (name) => {
    const text = await fetch(name).then((a) => {
        if (!a.ok) {
            throw new Error('Network response was not ok');
        }
        return a.text();
    });
    const module = getParsedModule(text);
    return { default: module.exports };
};
const DynamicComponent = ({ name, children, ...props }) => {
    const Component = React.useMemo(() => {
        return React__default["default"].lazy(async () => fetchComponent(name));
    }, [name]);
    return (jsxRuntime.jsx(React.Suspense, { fallback: jsxRuntime.jsx("div", { style: { alignItems: 'center', justifyContent: 'center', flex: 1 }, children: jsxRuntime.jsx("span", { style: { fontSize: 50 }, children: "Loading..." }) }), children: jsxRuntime.jsx(Component, { ...props, children: children }) }));
};
React__default["default"].memo(DynamicComponent);

const sayHello = () => {
    console.log('hello111');
};

var Button = (({
  children
}) => {
  return /*#__PURE__*/React__default["default"].createElement("button", {
    style: {
      color: 'blue'
    },
    onClick: sayHello
  }, children);
});

module.exports = Button;
