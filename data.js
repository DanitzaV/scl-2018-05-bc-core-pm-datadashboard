Promise.all([ // Ejecuta todas las llamadas de manera paralela
  fetch('../data/cohorts/lim-2018-03-pre-core-pw/users.json'),
  fetch('../data/cohorts/lim-2018-03-pre-core-pw/progress.json'),
  fetch('../data/cohorts.json')
]).then(
  (responses)=>{ // Responde a todas las promesas
    return Promise.all(responses.map((response)=>{
      return response.json();
    }));
  }
).then((responseJsons)=>{ // Arreglo de respuestas en json
  console.log(responseJsons);
  computeUsersStats(responseJsons[0], responseJsons[1], responseJsons[2]);
  //
  // Código que ocupa los jsons...
  //
}).catch(
  (error)=>{ // Al menos una llamada falló
    console.log(error);
  }
);

function computeUsersStats(users, progress, courses) {
  // console.log(users);
  // console.log(progress);
  // console.log(courses);
  const usu = users.map(usua => {
    console.log(usua.signupCohort === 'lim-2018-03-pre-core-pw');
  });
  console.log(usu);
  const usuarios = users.find(item => item.signupCohort === 'lim-2018-03-pre-core-pw');
  const cohort = courses.find(item => item.id === 'lim-2018-03-pre-core-pw');
  const coursesLim = Object.keys(cohort.coursesIndex);
  console.log(cohort);
  console.log(usuarios);
}

function sortUsers(users, orderBy, orderDirection) {

}

function filterUsers(users, search) {
}

function processCohortData(options) {

}