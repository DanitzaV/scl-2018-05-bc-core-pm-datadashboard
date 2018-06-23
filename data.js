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
    // console.log(responseJsons);
    //   let progress = Object.entries(responseJsons[1]);

    //   progress.forEach(element => {
    //     console.log(Object.entries(element[1]));
    //   });
    dropdown1(responseJsons[2]);
    computeUsersStats(responseJsons[0], responseJsons[1], responseJsons[2]);
    //
    // Código que ocupa los jsons...
    //
}).catch(

    (error) => { // Al menos una llamada falló
        console.log(error);
    }
);

function computeUsersStats(users, progress, courses) {
    for (let i = 0; i < users.length; i++) {
        let id = users[i].id; // guardo el id del usuario
        let progresoUser = progress[id]; // relacionar el progreso con el id de cada usuario
        console.log(progresoUser);
    }
    courses.forEach(cursos => { // recorro los cursos e-e 
        console.log(cursos);
    });
    var dasd = Object.values(progress);
    // console.log(dasd);

    var nuevo = dasd.map(element => {
        return Object.values(element.intro);
    });
    console.log(nuevo);
    var porcentajes = [];
    nuevo.forEach(element => {
        // console.log(element.percent)
        porcentajes.push(element.percent);
    });
    // console.log(porcentajes)
    // console.log(progress);
    let user = users.map(element => {
        return {
            id: element.id,
            name: element.name,
            stats: {
                percent: 0,
                exercises: {
                    total: 0,
                    completed: 0,
                    percent: 0
                },
                reads: {
                    total: 0,
                    completed: 0,
                    percent: 0
                },
                quizzes: {
                    total: 0,
                    completed: 0,
                    percent: 0,
                    scoreSum: 0,
                    scoreAvg: 0,
                },
            }
        };
    });
    // console.log(user);
}

function promedio() {

}


function percent() {

}


function sortUsers(users, orderBy, orderDirection) {


}

function filterUsers(users, search) {
    // acá hay que llamar al click del botón de filtrado!!!! 

}


// con fetch


// console.log(users);
// let container = document.getElementById('contenedor');
// console.log(progress);

// const cursos = courses.map(ele => {
//   return ele.id;
// });

// console.log(cursos);
// const usu = users.map(user => {
//  return progress[user.id].length === 1;

//   // return {
//   //   id: usua.id,
//   //   name: usua.name,
//   //   signupCohort: usua.signupCohort,
//   // };
// });
// console.log(usu);
// const objetoComoTexto = JSON.stringify(usu);
// // container.innerHTML = objetoComoTexto;
// const progreso = Object.entries(progress);
// progreso.forEach(element => {
//   console.log(element[1].intro.percent);
// });
// // let hi = progreso.map(element => {
// //   // console.log(element[1].intro.percent);
// //   return Object.keys(element)
// // });
// // console.log(hi);

// console.log(progressUser);
// console.log(progreso);


// const usuarios = users.find(item => item.signupCohort === 'lim-2018-03-pre-core-pw');
// const cohort = courses.find(item => item.id === 'lim-2018-03-pre-core-pw');
// const coursesLim = Object.keys(cohort.coursesIndex);
// // console.log(cohort);
// // console.log(usuarios);