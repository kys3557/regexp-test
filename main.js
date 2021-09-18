let str= `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60&s=frozen
The quick brown fox jumps over the lazy dog 
abbcccdddd
`

 //리터럴 형식으로 정규표현식 만들기

console.log(str.match(/(?<=@).{1,}/g))