/**
 * =============
 * Word Triangle
 * =============
 * 
 * Instruction
 * -----------
 * Tulislah kode untuk menampilkan kata dan membentuk segitiga seperti berikut:
 * 
 * Example
 * -------
 * @input = 'yusuf'
 * @output =
 * y
 * yu
 * yus
 * yusu
 * yusuf
 */

var input = 'adiel'
// Write your code here
let temp = ''
let count = 0
for (let i = 0; i <= input.length; i++) {
    for (let j = 0; j < input.length; j++) {
        // console.log (input[i] + ' ' + input[j])
        if (i > j) {
            temp += input[j]
        }
        else {
            temp += ' '
        }
    }
    temp += '\n'
}
console.log(temp)