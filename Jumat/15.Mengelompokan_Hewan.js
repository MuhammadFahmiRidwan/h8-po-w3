// Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array yang berisi string. Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array yang dikumpulkan sesuai dengan abjad depannya. Abjad harus berurut dari a-z (jika ada). Untuk kasus ini, anggap saja semua text lowercase.
// 
// Contoh jika animalsadalah ["ayam", "kucing", "bebek", "bangau", "zebra"]
// 
// maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]
// 
// Urutan hewan dalam array setiap pengelompokan huruf tidak penting.

function groupAnimals(animals) {
    // you can only write your code here!
    let temp = ''
    let arr = []
    
    for (let i = 0; i < animals.length; i++) {
      for (let j = 0; j < animals.length; j++) {
        if (animals[j+1] && animals[j+1][0] && animals[j][0] > animals[j+1][0]) {
          temp = animals[j]
          animals[j] = animals[j+1]
          animals[j+1] = temp
        }
      }
    }

    for (let i = 0; i < animals.length; i++) {
      let found = false
      for (let j = 0; j < arr.length; j++) {
        // console.log(arr[j][0][0])
        if (arr[j][0][0] === animals[i][0]) {
          arr[j].push(animals[i])
          found = true
          break;
        }
      }
      if (!found) {
        arr.push([animals[i]])
      }
    }
    return arr
}

  // TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]