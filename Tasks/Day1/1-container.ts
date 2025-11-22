class Integer {
  #number: number
  constructor(number: number) {
    if(Number.isInteger(number)) {
      this.#number = number
    } else {
      throw new Error("argument is not integer")
    }
  }

  add(value: Integer) {
    this.#number += value.get()
    return new Integer(this.#number)
  }

  div(value: Integer) {
    this.#number /= value.get()
    return new Integer(Math.trunc(this.#number))
  }

  get() {
    return this.#number
  }

  gt(value: Integer) {
    return this.#number > value.get()
  }
}

// Usage

const a = new Integer(7);
const b = new Integer(3);

const c = a.add(b);
const d = a.div(b);
if (a.gt(b)) {
  console.log('a > b');
}

console.log(`c = ${c.get()}`);
console.log(`d = ${d.get()}`);
