const _stackValues = new WeakMap();
const _count = new WeakMap();
class Stack {
  constructor() {
    _stackValues.set(this, [1]);
  }
  get count() {
    return _stackValues.get(this).length;
  }
  push(value) {
    const stack = _stackValues.get(this);
    stack.push(value);
    _stackValues.set(this, stack);
  }
  pop() {
    const stack = _stackValues.get(this);
    if (stack.length === 0) throw new Error("empty stack");
    stack.pop();
    _stackValues.set(this, stack);
  }
  peek() {
    const stack = _stackValues.get(this);
    if (stack.length === 0) throw new Error("empty stack");
    return stack[stack.length - 1];
  }
}

const s = new Stack();
