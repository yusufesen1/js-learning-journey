//primitive - değerlerine göre karşılaştırır

let numOne = 3
let numTwo = 3
console.log(numOne == numTwo)

let js = 'Javascript'
let py = 'Python'
console.log(js==py)

//değiştirilebilir - arrays
let nums = [1, 2, 3]
nums[0]=10
console.log(nums)

//math object
const num = Math.floor(Math.random() * 11)
console.log(num)

let numbOne = '3'
let numbTwo = 5
let addNumb = numbOne + numbTwo
console.log(addNumb)
/* artı ile birleştirmek artık eski ve çok da kullanılmayan bir yöntem */


//string methods
//length
let ilkAd = 'yusuf'
console.log(ilkAd.length)

//accessing characters
let ikinciAd = 'miraz'
let lastLetter = ikinciAd[4]
console.log(lastLetter)

//uppercase or lower case
let isim = 'javascript'
console.log(isim.toUpperCase())

//substr - (kaçıncı indexten başlayacak, kaç uzunluk alacak)
let word = 'javascript'
console.log(word.substr(4,6))

//substr "deprecated" yani kullanımı önerilmiyor. modern js'de substring veya slice tercih edilir
//substring (kaçıncı indexten başlayacak, kaçıncı indexe kadar)
let word2 = 'javascript'
console.log(word2.substring(0,6))
