// window.onload = function() {
//   getNews();
// };

// function getNews() { // q=${searchForText}
//   const articleRequest = new XMLHttpRequest();
//   articleRequest.open('GET', '../data/cohorts.json/', true);
//   articleRequest.onload = addNews;
//   articleRequest.onerror = handleError;
//   articleRequest.send();
//   function addNews() {
//     const data = JSON.parse(this.responseText);
//     console.log(data);
//   }


//   const users = new XMLHttpRequest();
//   users.open('GET', '../data/cohorts/lim-2018-03-pre-core-pw/users.json', true);
//   users.onload = addNew;
//   users.onerror = handleError;
//   users.send();

//   function addNew() {
//     const userData = JSON.parse(users.responseText);
//     console.log(userData);
//   }
// }

// function handleError() {
//   console.log('se ha presentado un error');
// }

const llamadas = [];
llamadas.push(fetch('../data/cohorts/lim-2018-03-pre-core-pw/users.json'));
llamadas.push(fetch('../data/cohorts/lim-2018-03-pre-core-pw/progress.json'));
llamadas.push(fetch('../data/cohorts.json'));

Promise.all(llamadas).then((responses)=>{
    return responses.map(response => response.json()); 
    //En caso de que sean llamadas a api
}).then((jsonResponses)=>{
   console.log(jsonResponses)
}).catch((error)=>{
    //Código que maneja errores
});
// con fecth