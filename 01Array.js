let numbers = [2,4,6,8,10]

//1.添加元素
numbers.push(12)
numbers.pop()
numbers.unshift(0)
numbers.shift()
numbers.splice(1,2,'haha~')
console.log(numbers);

//2.二维数组
let row = 4
let clo = 5
let arr = []
for(let i = 0 ; i< row; i++) {
    for(let j = 0; j<clo; j++) {
       arr.push({
        x:i,
        y:j
       })
    }
}
console.log(arr);

//3.数组合并
numbers.concat(arr)
console.log(numbers);

//4.迭代器函数
/* function isEven(num) {
    console.log(num);
    return (num % 2 === 0) ? true :false
} */

const isEven = num=> num % 2 === 0
let arr2 = [1,2,3,4,5,6,7,8,9]
console.log(arr2.every(isEven));
console.log(arr2.some(isEven));
console.log(arr2.forEach(num => console.log(num)));
const newMap = arr2.map(isEven)
console.log(newMap);
const everyNum = arr2.filter(isEven)
console.log(everyNum);

//5.es6
for (const value of arr2) {
    console.log(value % 2 === 0 ? true : false);
}
let iter = arr2[Symbol.iterator]()
console.log(iter.next().value);
for (const n of iter) {
    console.log(n);
}
let aEntries = arr2.entries()
console.log(aEntries.next().value);
let akeys = arr2.keys()
console.log(akeys.next());

//6.
let arr3 = Array.of(1,2,3,4)
console.log(arr3);
let arr4 = Array.from("guoxin")
console.log(arr4);
let arr5 = Array(5).fill(1)
console.log(arr5);
let arr6 = arr5.fill(2,0,3)
console.log(arr6);

//7.排序
let arr7 = [5,16,94,41,2,4,56]
function compare(a,b) {
    if(a<b) {
        return -1
    }
    if(a>b) {
        return 1
    }
    return 0
}
let r7 = arr7.sort(compare) //a在前是从小到大排 b在前是从大到小排序
console.log(r7);

//8.搜索
console.log(r7.indexOf(16));

//8.输出数组为字符串
let r8 = r7.toString()
let r9 = r7.join('-')
console.log(r9);