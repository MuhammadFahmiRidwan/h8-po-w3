// Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.

function targetTerdekat(arr) {
    // you can only write your code here!
    let indexX = []
    let indexO = []
    let temp = []
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 'o') {
        indexO.push(i)
      }
      else if (arr[i] === 'x') {
        indexX.push(i)
      }
    }
    
    for (let i = 0; i < indexX.length; i++) {
      temp.push(Math.abs(indexX[i] - indexO[0]))
    }
    let result = temp[0]
    // console.log(temp)
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] < result) {
          result = temp[i]
        }
    }
    
    if (!indexX.length) {
      return 0
    }

    return result
}
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  console.log(targetTerdekat([' ', 'x', 'o', ' ', ' ', 'x', ' ', 'x'])); // 1
  