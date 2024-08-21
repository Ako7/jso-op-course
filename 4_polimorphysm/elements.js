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
  this.render = function () {
    const options = this.items
      .map((item) => `<option>${item}</option>`)
      .join("");
    return `<select>${options}</select>`;
  };
}

// extend(HtmlSelectElement, HtmlElement);
HtmlSelectElement.prototype = new HtmlElement();

const s = new HtmlSelectElement(1, 2);
console.log(s);

function HtmlImageElement(src) {
  this.src = src || undefined;
  this.render = function () {
    return `<img src="` + this.src + `"/>`;
  };
}

HtmlImageElement.prototype = new HtmlElement();

const i = new HtmlImageElement();
console.log(i);

const elements = [
  new HtmlSelectElement(1, 2, 3),
  new HtmlImageElement("http://siema.nko"),
];

for (let el of elements) console.log(el.render());
