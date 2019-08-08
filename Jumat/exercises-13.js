function targetTerdekat(arr) {
    // you can only write your code here!
    var objectO = 0;
    var objectX = [];

    for(var i = 0; i < arr.length; i++){
        if (arr[i] == 'o') {
            objectO = i
        } else if (arr[i] == 'x'){
            objectX.push(i);
        }
    }
    
    if (objectX.length == 0) {
        return 0
    } else {
        if (objectX[0] > objectO) {
            return objectX[0] - objectO
        } else {
            return objectO - objectX[objectX.length-1]
        }
    }
}
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2