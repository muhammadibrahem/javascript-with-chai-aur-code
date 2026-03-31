const arr1 = [0, 1, 2, 3, 4, 5];
console.log(arr1[2]);
// arr1.push(5);
// arr1.push(8);
// arr1.pop(); // pop se last value remove ho jati
// // arr1.unshift(1); // shift se 1st pr value add ho jati
// arr1.shift(); // shift se firdt wali value remove ho jati
// console.log(arr1.includes(10));
// const newarr = arr1.join();
// console.log(arr1);
// console.log(newarr);
// console.log(typeof newarr);
// slice , splice
console.log("A", arr1);
const myn1 = arr1.slice(1, 3);
console.log(myn1);
console.log("B", arr1);
const myn2 = arr1.splice(1, 3);
console.log("c", arr1);
console.log(myn2);
