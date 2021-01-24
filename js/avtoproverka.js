//3 module, 15/41
function countTotalSalary(salaries) {
    let totalSalary = 0;
  const values = Object.values(salaries);
  for (const value of values) {
     totalSalary +=value;
  }
    return totalSalary;
  }
  countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })

//3 module, 17/41
const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Пиши код ниже этой строки
for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}
// console.log(hexColors);
// console.log(rgbColors);

//3 module, 18/41
const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 9 },
  ];
  
  function getProductPrice(productName) {
    // Пиши код ниже этой строки
    let productPrice = null;
    const values = Object.values(productName);
    for (const value of values) {
        productPrice = value;
    // Пиши код выше этой строки
  }
}
  getProductPrice('Радар');
