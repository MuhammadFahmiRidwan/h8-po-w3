function tentukanDeretGeometri(arr) {
    // you can only write your code here!
    var dif1, dif2 = 0
    var modResult = []
    var result

    dif1 = arr[0]
    dif2 = arr[1]


    for (var i = 1; i < arr.length ; i++) {
        var res = arr[i]%dif2
        modResult.push(res)
    }
    for (var i = 0; i < modResult.length; i++) {
        if (modResult[i] === 0) {
            result = true
        }
        else {
            result = false
            break
        }
    }
    return result
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false