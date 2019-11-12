// Buatlah sebuah fungsi dengan nama balikString. Fungsi ini akan menerima argumen sebuah string dan mengembalikan kebalikannya.
function balikString(str) {
    let result = ''
    for (let i = str.length-1; i >= 0; i--) {
        result += str[i]
    }
    return result
}

console.log(balikString("hello world!"))//"!dlrow olleh"