Promise.all([ // Ejecuta todas las llamadas de manera paralela
    fetch('../data/cohorts/lim-2018-03-pre-core-pw/users.json'),
    fetch('../data/cohorts/lim-2018-03-pre-core-pw/progress.json'),
    fetch('../data/cohorts.json')
]).then(
    (responses) => { // Responde a todas las promesas
        return Promise.all(responses.map((response) => {
            return response.json();
        }));
    }
).then((responseJsons) => { // Arreglo de respuestas en json
    console.log(responseJsons);
    computeUsersStats(responseJsons[0], responseJsons[1], responseJsons[2]);
    //
    // Código que ocupa los jsons...
    //
}).catch(

    (error) => { // Al menos una llamada falló
        console.log(error);
    }
);

Promise.all(llamadas).then((responses) => {
    return responses.map(response => response.json());
    //En caso de que sean llamadas a api
}).then((jsonResponses) => {
    console.log(jsonResponses)
}).catch((error) => {
    //Código que maneja errores
});
// con fetch