function pasanganTerbesar(num) {
    // you can only write your code here!
    var str = num.toString()
    var numMax = 0

    for (var i = 0; i < str.length; i++) {
    // console.log(i)
        var result = str.slice(i, i+2)
        if (result.length === 2) { 
        if (result > numMax) {
            numMax = result
        }
        else if (result < numMax) {
            numMax = numMax
        }
        }
        else {
            result = str.slice(str.length, str.length - 1)
            return Number(numMax)
        }
    }
}

  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99