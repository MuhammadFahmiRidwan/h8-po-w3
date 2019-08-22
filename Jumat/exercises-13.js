function targetTerdekat(arr) {
    // you can only write your code here!

    var indexO = []
    var indexX = []

    for (var i = 0; i < arr.length; i ++) {
        if (arr[i] === 'o') {
            indexO.push(i)
        } else if (arr[i] === 'x') {
            indexX.push(i)
        }
    }

    var tampung = []
    for (var i = 0; i < indexX.length; i++) {
        tampung.push(Math.abs(indexX[i] - indexO[0]))
    }

    var sorted = tampung[0]
    for (var i = 0; i < tampung.length; i++) {
        if (tampung[i] < sorted) sorted = tampung[i]
    }
    
    if (!indexX.length) 
    return 0
    return sorted
}
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  console.log(targetTerdekat([' ', 'x', 'o', ' ', ' ', 'x', ' ', 'x'])); // 1
//   pake tes [' ', 'x', 'o', ' ', ' ', 'x', ' ', 'x'] hasilnya -5