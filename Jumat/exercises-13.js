function targetTerdekat(arr) {
    // you can only write your code here!

    var indexO = 0
    var indexX = []

    for (var i = 0; i < arr.length; i ++) {
        if (arr[i] === 'o') {
            indexO = i
        } else if (arr[i] === 'x') {
            indexX.push(i)
        }
    }

    if (indexX.length == 0){
        return 0
    }
    else if (indexX[0] > indexO) {
        return indexX[0] - indexO
    }
    else {
        return indexO - indexX[indexX.length-1]
    }
}
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

//   pake tes [' ', 'x', 'o', ' ', ' ', 'x', ' ', 'x'] hasilnya -5