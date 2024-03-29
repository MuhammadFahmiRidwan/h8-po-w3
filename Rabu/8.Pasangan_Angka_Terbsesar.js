// Diberikan sebuah function pasanganTerbesar(angka) yang menerima 1 parameter berupa angka. Functiona akan menentukan pasangan dua digit angka mana yang paling besar dan me-return angka tersebut. Contoh, jika angka adalah 183928, maka function akan me-return 92, pasangan dua digit angka yang paling besar diantara yang lainnya.

function pasanganTerbesar(num) {
    // you can only write your code here!
    let result = 0

    let str = num.toString()
    for (let i = 0; i < str.length; i++) {
      let slice = str.slice(i,i+2)
      // console.log(slice.length)
      if (slice.length === 2) {
        if (slice > result) {
          result = slice
        }
        else if (slice < result) {
          result = result
        }
      }
    }
    return Number(result)
}

  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99