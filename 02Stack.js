class Stack {
    constructor() {
        this.count = 0
        this.items = {}
    }
    push(element) {
        this.items[this.count] = element
        this.count++
    }
    pop() {
        if(this.isEmpty()) {
            return undefined
        }
        this.count--
        const result = this.items[this.count]
        delete this.items[this.count]
        return result
    }
    isEmpty() {
        return this.count === 0
    }
    size() {
        return this.count
    }
    peek() {
        if(this.isEmpty()) {
            return undefined
        }
        return this.items[this.count-1] 
    }
    clear() {
        this.items = {}
        this.count = 0
    }
    toString() {
        if(this.isEmpty()) {
            return ''
        }
        let objStr = ''
        for(let i = 0; i < this.count; i++) {
            objStr += ` ${this.items[i]}`
        }
        return objStr
    }
}
const stack = new Stack()
console.log(stack.isEmpty());
stack.push(5)
stack.push(8)
console.log(stack.size());
console.log(stack.peek());
stack.push(11)
console.log(stack.isEmpty());
stack.pop()
console.log(stack.toString());

//进制转换
let decimalToBinary = decNumber => {
    const remStack = new Stack()
    let num = decNumber
    let rem
    let str = ''
    while(num > 0) {
        rem = Math.floor(num%2) 
        remStack.push(rem)
        num = Math.floor(num/2)
    }
    while(!remStack.isEmpty()) {
        str += remStack.pop().toString()
    }
    return str
}
console.log(decimalToBinary(233));
console.log(decimalToBinary(10));