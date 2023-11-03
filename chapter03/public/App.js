"use strict";

var continents = ['Africa', 'America', 'Asia', 'Europe', 'Australia'];
var helloContinents = Array.from(continents, function (c) {
  return "Hello ".concat(c, "!");
});
var message = helloContinents.join(' ');
var element = /*#__PURE__*/React.createElement("div", {
  id: "Outer div"
}, /*#__PURE__*/React.createElement("h1", null, message));
ReactDOM.render(element, document.getElementById('contents'));