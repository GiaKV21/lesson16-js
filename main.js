// 1. შექმენით 5 ელმენტიანი მასივი, რომლის თითოეული ელემენტი არის რიცხვი. კონსოლში გამოიტანეთ ამ რიცხვების ჯამი და საშუალო არითმეტიკული
let numbers = [10, 20, 30, 40, 50];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

let mean = sum / numbers.length;

console.log("Sum:", sum);
console.log("Mean:", mean);

//2. შექმენით ობიექტი რომელიმე წიგნის  შესახებ შემდეგი propertyებით: title, author, და yearPublished. ამ მნიშვნელობების დახმარებით კონსოლში გამოიტანეთ შემდეგი ტექსტი: "(აქ title ცვლადი) by (აქ author ცვლადი)  was published in (აქ yearPublished ცვლადი) ."

let book = {
  title: "Naruto",
  author: "Masashi Kishimoto",
  yearPublished: 2002,
};

console.log(
  book.title +
    " by " +
    book.author +
    " was published in " +
    book.yearPublished +
    "."
);

//3. მე-2 დავალებაში შექმნილ ობეიქტში შეცვალეთ yearPublished მნიშვნელობა და კონსოლში გამოიტანეთ დარედაქტირებული ობიექტი.
book.yearPublished = 2007;
console.log(book);

//4. შექმენით 3 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის ობიექტი შემდეგი property-ებით: productName, price, და isAailable. კონსოლში გამოიტანეთ შექმნილი მასივი

let products = [
  { productName: "Manga", price: 220, isAvailable: true },
  { productName: "PS5", price: 1500, isAvailable: false },
  { productName: "CD", price: 100, isAvailable: false },
];
console.log(products);
