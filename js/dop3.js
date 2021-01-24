// // insertElem - доступ, куда встраивать

// // function(count)
// // 1 - img
// // 2 - a
// // 3 - li

// // 4 - ul

// // 5 - div
 
// // 6 - h2

// // 7 - span
// // 8 - p

// // 9 - p

// // 10 - input

// // 11 - article

// const urls = ['https://cf.bstatic.com/images/hotel/max1024x768/250/250924539.jpg', 'https://img.poehalisnami.ua/static/hotels/egipet/makadi-bejj/h1919/orig/booking1919_10.jpg', 'https://i.ytimg.com/vi/VsQdoM6DQGc/hqdefault.jpg']
// // встраиваем готовый article в insertElem
// const divEl = document.querySelector('.insertElem')
// // createPost(urls, divEl)

// function createPost(array, innerPlace){

// const newItems = function createItems(arr){
//     const items=[];
//     for(let i=0; i<arr.length; i++){
//         const image = document.createElement('img');
//         image.setAttribute('src', arr[i])
//         image.setAttribute('alt', 'img')
//         image.setAttribute('width', '300')
//         console.log(image);

//         const link = document.createElement('a')
//         link.setAttribute('href', '')

//         link.appendChild(image)
//         console.log(link);

//         const item = document.createElement('li')
//         item.classList.add('list-item')

//         item.appendChild(link)
//         console.log(item);

//         items.push(item);
//     }
//     return items;
// }(array)
// // const newItems = createItems(urls);
// console.log(newItems);

// const imgList = document.createElement('ul');
// imgList.style.listStyle = 'none';
// imgList.style.display = 'flex';
// imgList.append(...newItems);

// console.log(imgList);

// const imgWrapper = document.createElement('div');
// imgWrapper.style.display = 'flex';
// imgWrapper.style.backgroundColor = 'green';
// imgWrapper.appendChild(imgList);
// console.log(imgWrapper);

// const title = document.createElement('h2');
// title.textContent = "Hello WOrld";

// const firstParagraf = document.createElement('p');
// firstParagraf.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, eius.';

// const data = document.createElement('span');
// data.textContent = "11.11.2020";

// const secondParagraf = document.createElement('p');
// secondParagraf.textContent = 'Roma';
// secondParagraf.appendChild(data);

// const input = document.createElement('input')
// input.setAttribute('type', 'checkbox');

// const article = document.createElement('article');
// article.append(title, firstParagraf, imgWrapper, secondParagraf, input);
// console.log(article);

// innerPlace.appendChild(article);

// }
// function createInnerPost(array, place){
//     const items = arr.map((el)=>{
//         return `<li class="list-item"><a href=''><img src='${elem}' alt='' width='300'></a></li>`})
//         const article = function innerPost(){
//           return  `<article>
//             <h2>Hello</h2>
//             <p>Lorem, ipsum dolor sit amet consectetur </p>
//             <div style='display:flex'>
//             <ul>${(items)}</ul>
//             </div>
//             <p>Romeo<span>11.11.2020</span></p>
//             <input type='checkbox'>
//             </article>`
//         }();
//         return place.insertAdjacentHTML('afterbegin', article)
// }
// createInnerPost(urls, divEl)