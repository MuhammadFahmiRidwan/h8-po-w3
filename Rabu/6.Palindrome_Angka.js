// Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.

function angkaPalindrome(num) {
    // you can only write your code here!
    if (num >= 1 && num <= 8) {
      return num + 1
    }
    
    else {
      while(true) {
        num++
        let str = num.toString()
        let result = ''
        for (let i = str.length-1; i >= 0; i--) {
          result += str[i]
        }
        if (str === result) {
          return Number(result)
        }
      }
    }
}
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001

