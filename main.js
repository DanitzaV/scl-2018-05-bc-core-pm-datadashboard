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

        } else {
            btn.className = 'dropdown-item disabled';
        };
        btn.type = 'button';
        let text = document.createTextNode(id);
        // console.log(text)
        btn.appendChild(text);
        contendor.appendChild(btn);
    })
}