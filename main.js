// Evento dom para dropdown de cohort


function dropdown1(courses) {
  courses.forEach(element => {
    let contendor = document.getElementById('menuDesplegable');
    let hi = document.getElementById('enabled');
    let id = element.id;
    // let template = `<button class="dropdown-item" type="button">${id}</button>`;
    let btn = document.createElement('button');
    if (id === 'lim-2018-03-pre-core-pw') {
      btn.className = 'dropdown-item';
      btn.setAttribute('onclick', 'cohort();');
    } else {
      btn.className = 'dropdown-item disabled';
    };
    btn.type = 'button';
    let text = document.createTextNode(id);
    // console.log(text)
    btn.appendChild(text);
    contendor.appendChild(btn);
  });
}

function cohort(user) {
  console.log('hola');
  // document.getElementById('table').style.display = 'block';
  let contenedor = document.getElementById('contenedorUsuarios');
  user.forEach(element => {
    let tr = document.createElement('tr');
    let tdnum = document.createElement('td');
    let tdName = document.createElement('td');
    let tdLectura = document.createElement('td');
    let tdquizz = document.createElement('td');
    let tdejecicios = document.createElement('td');
    let tdTotal = document.createElement('td');
    let textnum = document.createTextNode('#');
    let textName = document.createTextNode(element.name);
    let textLectura = document.createTextNode(element.stats.reads.percent + ' %');
    let textquizz = document.createTextNode(element.stats.quizzes.percent + ' %');
    let textejercicios = document.createTextNode(element.stats.exercises.percent + ' %');
    let textTotal = document.createTextNode(element.stats.percent + ' %');
    tdnum.appendChild(textnum);
    tdName.appendChild(textName);
    tdLectura.appendChild(textLectura);
    tdquizz.appendChild(textquizz);
    tdejecicios.appendChild(textejercicios);
    tdTotal.appendChild(textTotal);
    tr.appendChild(tdnum);
    tr.appendChild(tdName);
    tr.appendChild(tdLectura);
    tr.appendChild(tdquizz);
    tr.appendChild(tdejecicios);
    tr.appendChild(tdTotal);
    tr.className = 'lista';
    // tr.style.display = 'table-row';
    // console.log(tr);
    contenedor.appendChild(tr);
  });
}

// function template(user) {
//   console.log(user);
 
// }
function myFunction() {
  var input, filter, table, tr, td, i;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  table = document.getElementById('myTable');
  tr = table.getElementsByTagName('tr');
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName('td')[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = '';
      } else {
        tr[i].style.display = 'none';
      }
    }       
  }
}
  