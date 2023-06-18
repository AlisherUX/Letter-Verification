//---> JSda harflarni tekshirish <---//
// Bu mavzuda siz harflarni katta yoki kichikligini tekshirishni o'rganib olasiz.

//Global variables
//\/\/\/\/\/\/\/\/
let big = "A";
let small ="a";
let mixed = "Aa";

//1) Big letter verification
console.log(  /[A-Z]/.test(big)  ); //way---1  return: true
console.log(  /[A-Z]/.test(small)  );//        return: false
console.log(  /[A-Z]/.test(mixed)  );//        return: true
//Description
// Bu funksiya katta harflarni qidiradi agar faqat 1ta katta harf topsa ham true qaytaradi,
// masalan: big o'zgaruvchisi o'rniga mixed o'zgaruvchisi qo'yilsa ham funksiya true qaytaradi. 



console.log(  /[A-Z]+$/.test(big)  ); //way---2  return: true
console.log(  /[A-Z]+$/.test(small)  );//          return: false
console.log(  /[A-Z]+$/.test(mixed)  );//          return: false
//Description
// Bu funksiya true qaytarishi uchun barcha harflar katta bo'lishi kerak,
// Agar big o'zgaruvchisi o'rniga mixed o'zgaruvchisi qo'yilsa funksiya false qaytaradi. 



console.log(  Boolean(big.match(/[A-Z]/))  ); //way---3  return: true
console.log(  Boolean(small.match(/[A-Z]/))  );//          return: false
console.log(  Boolean(mixed.match(/[A-Z]/))  );//          return: true
//Description
// Bu funksiya birinchi funksiya bilan bir xil ishlaydi.






//2) Small letter verification
console.log(  /[a-z]/.test(small)  ); //way---1  return: true
console.log(  /[a-z]/.test(big)  );//        return: false
console.log(  /[a-z]/.test(mixed)  );//        return: true
//Description
// Bu funksiya kichik harflarni qidiradi agar faqat 1ta kichik harf topsa ham true qaytaradi,
// masalan: small o'zgaruvchisi o'rniga mixed o'zgaruvchisi qo'yilsa ham funksiya true qaytaradi. 



console.log(  /[a-z]+$/.test(small)  ); //way---2  return: true
console.log(  /[a-z]+$/.test(big)  );//          return: false
console.log(  /[a-z]+$/.test(mixed)  );//          return: false
//Description
// Bu funksiya true qaytarishi uchun barcha harflar kichik bo'lishi kerak,
// Agar small o'zgaruvchisi o'rniga mixed o'zgaruvchisi qo'yilsa funksiya false qaytaradi. 



console.log(  Boolean(small.match(/[a-z]/))  ); //way---3  return: true
console.log(  Boolean(big.match(/[a-z]/))  );//          return: false
console.log(  Boolean(mixed.match(/[a-z]/))  );//          return: true
//Description
// Bu funksiya to'rtinchi funksiya bilan bir xil ishlaydi.