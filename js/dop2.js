// const decBtn = document.getElementById('decrement');
// const incBtn = document.getElementById('increment');
// const count = document.getElementById('count');

// class Counter {
//     constructor(starCount, countStep, place){
//         this.starCount = starCount;
//         this.countStep = countStep;
//         this.minCount = starCount;
//         place.textContent = this.starCount;
//     }

// toIncrement(place){
//     this.starCount += this.countStep;
//     this.toSetStarCount(place);

// }

// toDeccrement(place){
//     if (this.starCount <=this.minCount) return;
//     this.starCount -= this.countStep;
//     this.toSetStarCount(place);
    
// }

// toSetStarCount(place) {
//     place.textContent = this.starCount;
// }
// }

// const myCounter = new Counter(0, 1, count);
// console.log(myCounter);

// incBtn.addEventListener('click', ()=>{
//     myCounter.toIncrement(count);
// });
// decBtn.addEventListener('click', ()=>{
//     myCounter.toDeccrement(count);
// });
////////// CALCULATOR------------------------------------------------
// const btnPlus = document.getElementById('plus');
// const btnMinus = document.getElementById('minus');
// const btnMult = document.getElementById('mult');
// const btnShare = document.getElementById('share');
// const first = document.getElementById('first_num');
// const second = document.getElementById('second_num');
// const result = document.getElementById('result');

// class Calc {
//     toGetNumbers(tag1, tag2){
//         this.firstValue = +prompt('Введите 1е значение')
//         this.secondValue = +prompt('Введите 2е значение')
//     tag1.textContent = this.firstValue;
//     tag2.textContent = this.secondValue;
//     }

//     toSum(place, tag1 , tag2){
//         this.toGetNumbers(tag1, tag2);
//         let total =  this.firstValue + this.secondValue;
//         this.toShowResult(place, total)
//     };

//     toSub(place, tag1 , tag2){
//         this.toGetNumbers(tag1, tag2);
//         let total =  this.firstValue - this.secondValue;
//         this.toShowResult(place, total)
//     }

//     toMult(place, tag1 , tag2){
//         this.toGetNumbers(tag1, tag2);
//         let total =  this.firstValue * this.secondValue;
//         this.toShowResult(place, total)
//     }

//     toShare(place, tag1 , tag2){
//         this.toGetNumbers(tag1, tag2);
//         let total = this.firstValue / this.secondValue;
//         this.toShowResult(place, total)
//     }
//     toShowResult(place, value){
//         // alert('Результат операции: ${value}')
//         place.textContent = value;
//     }
    
// }

// const myCalc = new Calc();
// console.log(myCalc);

// btnPlus.addEventListener('click', () => {
//     myCalc.toSum(result, first, second);
// })
// btnMinus.addEventListener('click', () => {
//     myCalc.toSub(result, first, second);
// })
// btnMult.addEventListener('click', () => {
//     myCalc.toMult(result, first, second);
// })
// btnShare.addEventListener('click', () => {
//     myCalc.toShare(result, first, second);
// })

//BOooooooooooooookssss

class Library {
    constructor(){
        this.books = [];
        this.favorite = [];
    }

toBuy(book){
    if(this.books.includes(book)){
        alert("Такая книга уже есть")
    }
this.books.push(book)
}
toSell(bookName){
    this.books.forEach(({name}, idx)=>{
    if(name === bookName){
        this.books.splice(idx, 1) 
    } 
}) 
return this.books;
}
addToFavorite(bookName){
    const favoriteBook = this.books.find(({name})=>name ==bookName)
    this.favorite.push(favoriteBook)
    return this.favorite;
}


removeToFavorite(){
    this.favorite.forEach(({name}, idx)=>{
        if(name === bookName){
            this.favorite.splice(idx, 1) 
        } 
    }) 
    return this.favorite;
}
get countFavoriteBooks(){
return this.favorite.length

}

get finishedBooks(){

}

totalCost(){

}

}

class Book{
constructor({author, title, price, totalPage, currentPage} = 0){
        this.autthor = author;
        this.title = title;
        this.price = price;
        this.totalPage = totalPage;
        this.currentPage = currentPage;
    }
    toRead(amount){
return this.currentPage+=amount;
    }
    get bookProgres() {
     return this._currentPage * 100/ this.totalPages
     }
        
    set bookProgres(value) {
    this._currentPage = this.totalPages * value / 100;
    }
        
}


const myLibrary = new Library()
console.log(myLibrary);

myLibrary.toBuy({name: 'core js', year: 2020})
myLibrary.toSell('coreJs')
myLibrary.toBuy({name: 'react js', year: 2020})
myLibrary.addToFavorite('react js')
myLibrary.removeToFavorite('react js')
console.log(myLibrary.countFavoriteBooks); 
const myBook = new Book()

const book = { author: "Repeta", title: "JS", price: 2000, totalPages: 234, currentPage: 123 };
// const bookItem = new Book(book)
console.log(myBook);