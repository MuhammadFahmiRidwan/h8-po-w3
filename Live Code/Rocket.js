/**
 * ============
 * Diagon Alley
 * ============
 * 
 * Instruction
 * -----------
 * Buatlah sebuah function yang dapat menampilkan input secara diagonal seperti berikut:
 * 
 * Example
 * -------
 * @input = 'Hacktiv8'
 * @output =
 * H
 *  a
 *   c
 *    k
 *     t
 *      i
 *       v
 *        8
 */

function diagonAlley(str) {
  // Write your code here
  let temp = ''
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      // console.log(i + ' ' + j)
      if (i == j) {
        temp += str[j]
      }
      else {
        temp += ' '
      }
    }
    temp += '\n'
  }
    return temp
  }

console.log(diagonAlley('yusuf')) // 5
/*
y
 u
  s
   u
    f
*/
console.log(diagonAlley('adiel'))
/*
a
 d
  i
   e
    l
*/
console.log(diagonAlley('tony'))
/*
t
 o
  n
   y
*/