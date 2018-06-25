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
    filterUsers(responseJsons[0])
    let cohorts = responseJsons[2];
    const cohort = cohorts.find(item => item.id === 'lim-2018-03-pre-core-pw');
    const courses = Object.keys(cohort.coursesIndex);

    computeUsersStats(responseJsons[0], responseJsons[1], courses);
    //
    // Código que ocupa los jsons...
    //
}).catch(

    (error) => { // Al menos una llamada falló
        console.log(error);
    }
);


function computeUsersStats(users, progress, courses) {
    // console.log(courses)
    let newUser = [];

    for (let i = 0; i < users.length; i++) {
        let idUser = users[i].id; // guardo el id del usuario

        // console.log(progress[idUser]);
        let progreso = progress[idUser];
        // para evitar error con los progresos vacíos
        if (JSON.stringify(progreso) === '{}') {
            continue;
        }

        let readsTotal = 0;
        let readsCompleted = 0;
        let quizTotal = 0;
        let quizCompleted = 0;
        let practiceTotal = 0;
        let practiceCompleted = 0;
        let scoreSumQuiz = 0;


        courses.forEach(element => {
            let percent = progreso[element].percent;
            const unidades = Object.values(progreso[element].units);


            unidades.forEach(element2 => {
                // console.log(element2.parts);
                Object.values(element2.parts).forEach(element3 => {
                    switch (element3.type) {
                        case 'read':
                            readsTotal++;
                            if (element3.completed == 1) {
                                readsCompleted++;
                            }

                        case 'quiz':
                            quizTotal++;
                            if (element3.completed == 1) {
                                quizCompleted++;
                                scoreSumQuiz += element3.score;
                            }


                        case 'practice':
                            practiceTotal++;
                            if (element3.completed == 1) {
                                practiceCompleted++;
                            }
                    };
                });
            }); // cierre de forEach (unidades)

            users[i].stats = {
                percent: percent,
                exercises: {
                    total: practiceTotal,
                    completed: practiceCompleted,
                    percent: Math.round((practiceCompleted / practiceTotal) * 100),
                },
                reads: {
                    total: readsTotal,
                    completed: readsCompleted,
                    percent: Math.round((readsCompleted / readsTotal) * 100),
                },
                quizzes: {
                    total: quizTotal,
                    completed: quizCompleted,
                    percent: Math.round((quizCompleted / quizTotal) * 100),
                    scoreSum: scoreSumQuiz,
                    scoreAvg: Math.round(scoreSumQuiz / quizCompleted),
                }

            };
            newUser.push(users[i]);
        });
    }
    // console.log(newUser);
    cohort(newUser);


};

function filterUsers(users, search) {

}


function sortUsers(users, orderBy, orderDirection) {

}


// con fetch

// var dasd = Object.values(progress);
// console.log(dasd);

// var nuevo = dasd.map(element => {
//     return Object.values(element.intro);
// });
// console.log(nuevo);
// var porcentajes = [];
// nuevo.forEach(element => {
//     // console.log(element.percent)
//     porcentajes.push(element.percent);
// });
// console.log(porcentajes)
// console.log(progress);
// let user = users.map(element => {
//     return {
//         id: element.id,
//         name: element.name,
//         stats: {
//             percent: 0,
//             exercises: {
//                 total: 0,
//                 completed: 0,
//                 percent: 0
//             },
//             reads: {
//                 total: 0,
//                 completed: 0,
//                 percent: 0
//             },
//             quizzes: {
//                 total: 0,
//                 completed: 0,
//                 percent: 0,
//                 scoreSum: 0,
//                 scoreAvg: 0,
//             },
//         }
//     };
// });
// console.log(user);
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