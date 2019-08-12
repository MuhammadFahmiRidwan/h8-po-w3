/* 
===============
Number Triangle
===============
​
Instruction:
Buatlah sebuah proses untuk membuat deret angka yang membentuk segitiga seperti contoh berikut.
​
Contoh 1 (height = 5):
Output:
12345
2345
345
45
5
​
Contoh 2 (height = 3):
Output:
123
23
3
​
Contoh 3 (height = 1):
Output:
1
 */
// var height = 5

// function NumberTriangle(num) {
//     temp = ""
//     for ( var i = 1; i < height; i++) {
//     for ( var j = i; j < height; j++) {
//         temp += num
//     }
//     }
//     return temp
// }

// console.log(NumberTriangle(5))
// console.log(NumberTriangle(3))
// console.log(NumberTriangle(1))

// Write code here

function numberTriangle(height) {
    var temp = '';
    
    for(var i = 0; i < height; i++){
        for(var j = 1; j <= height-i; j++){
            temp += i+j;
        }
        // console.log(temp)
        // temp = '';
        temp += "\n"
    }
    return temp
}


console.log(numberTriangle(7))
console.log(numberTriangle(5))
// console.log(numberTriangle(3))