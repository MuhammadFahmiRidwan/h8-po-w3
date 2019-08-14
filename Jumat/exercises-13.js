function targetTerdekat(arr) {
    // you can only write your code here!

    var indexO = 0
    var indexX = 0

    for (var i = 0; i < arr.length; i ++) {
        if (arr[i] === 'o') {
            indexO = i
        } else if (arr[i] === 'x') {
            indexX = i
            break
        }
    }
    return indexX - indexO
}
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

//   pake tes [' ', 'x', 'o', ' ', ' ', 'x', ' ', 'x'] hasilnya -5