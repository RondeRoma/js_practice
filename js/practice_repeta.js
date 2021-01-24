// const PROMPT_DELAY = 3000;
// const MAX_PROMPT_ATTEMPTS = 3;
// let promptCounter = 0;
// let hasSubscribed = false;
// const modal = new BSN.Modal('#subscription-modal');


// modal.show();

// const intervalId = setInterval(() => {
//   if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
//     console.log('ostanavlivaem interval');
//     clearInterval(intervalId);
//     return;
//   }
//   console.log('podpishys na rassylku - ' + Date.now());
//   promptCounter++;
// }, PROMPT_DELAY);
// function checkStorage(available, ordered) {
//   let message;
//   // Пиши код ниже этой строки
//   ordered>available ? message = `На складе недостаточно товаров!` : message = `Заказ оформлен, с вами свяжется менеджер`;
 
//   // Пиши код выше этой строки
//  return message;
// };
// checkStorage(100, 50);

// const checkStorage  = (available, ordered) =>
// ordered>available ? `На складе недостаточно товаров!` : `Заказ оформлен, с вами свяжется менеджер`;
// checkStorage(100, 50);
