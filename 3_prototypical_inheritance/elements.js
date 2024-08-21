// function extend(Child, Parrent) {
//   Child.prototype = Object.create(new Parrent());
//   Child.prototype.constructor = Child;
// }

function HtmlElement() {
  this.click = function () {
    console.log("clicked");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("focused");
};
const e = new HtmlElement();
console.log(e);

function HtmlSelectElement(...items) {
  this.items = items || [];
  this.addItem = function (item) {
    this.items.push(item);
  };
  this.deteleItem = function (val) {
    this.items = this.items.filter((item) => item !== val);
  };
}

// extend(HtmlSelectElement, HtmlElement);
HtmlSelectElement.prototype = new HtmlElement();

const s = new HtmlSelectElement(1, 2);
console.log(s);
