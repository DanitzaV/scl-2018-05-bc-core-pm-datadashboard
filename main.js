window.onload = () => {
    getNews();
}

function getNews() {// q=${searchForText}
    const articleRequest = new XMLHttpRequest();
    articleRequest.open('GET', '../data/cohorts.json/', true);
    articleRequest.onload = addNews;
    articleRequest.onerror = handleError;
    articleRequest.send();
}

function addNews() {
    // const data = 
    console.log(JSON.parse(this.responseText));
    // console.log(data)
    // data.forEach(element => {
    //     const id = element.id
    //     console.log(id);
    // });
    // }


function handleError() {
    console.log('se ha presentado un error');
}
