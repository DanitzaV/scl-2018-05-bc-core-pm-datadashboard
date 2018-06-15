fetch('../data/cohorts/lim-2018-03-pre-core-pw/users.json').then((usersResponse) =>{
  return usersResponse.json();
}).then(users => {
  console.log(JSON.stringify(users[0].name));
});
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