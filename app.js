//---> JSda ma'lumotlarni tekshirish <---//
// Bu mavzuda siz ma'lumotni Stringga, Numberga va Booleanga tekshirishni o'rganib olasiz.

//Global variables
//\/\/\/\/\/\/\/\/
let str = "alisher";
let num = 17;
let bool = true;

//1) String verification
console.log(  typeof str === 'string',  ); //way---1  return: true
console.log(  str.includes(''),  );        //way---2  return: true
console.log(  typeof str,  );              //way---3  return: string

//2) Number verification
console.log(  typeof num === 'number'  ); //way---1  return: true
console.log(  Number.isInteger(num)  );   //way---2  return: true
console.log(  typeof num  );              //way---3  return: number

//3) Boolean verification
console.log(  typeof bool === 'boolean'  );//way---1  return: true
console.log(  typeof bool  );              //way---2  return: boolean
console.log(  bool === true || bool === false  );//way---3  return: true

//Conclusion <==translate==> Xulosa

//Bu ikkiala funksiyani barcha ma'lumot turlari uchun ishlatsa bo'ladi.
// \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/
//`<1.>(typeof var === 'data type')
//<2.>(typeof var)