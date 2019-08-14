function angkaPalindrome(num) {
    // you can only write your code here!
    if (num >= 1 && num <= 8) {
        return num+1
    }
    else {
      while (true){
        num++
      var dif = ""
      dif += num
        var temp = ""
        for (var i = dif.length-1; i >= 0; i--){
          temp += dif[i]
        }
        // console.log(temp)
        if (dif == temp) {
          return dif
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

//   input 9 hasilnya 10, harusnya 11