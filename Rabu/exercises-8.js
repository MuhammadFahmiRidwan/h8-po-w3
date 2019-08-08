function pasanganTerbesar(num) {
    // you can only write your code here!
var numMax = 0
var str = num.toString()

for (var i = 0; i < str.length; i++) {
    // console.log(i)
    var cek = str[i] + str[i+1]
    if (str < cek) {
        numMax = cek
    }
    }
    return Number(numMax)
}

  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99