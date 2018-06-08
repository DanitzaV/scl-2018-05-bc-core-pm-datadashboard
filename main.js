window.onload = function() {
  getNews();
};

function getNews() { // q=${searchForText}
  const articleRequest = new XMLHttpRequest();
  articleRequest.open('GET', '../data/cohorts.json/', true);
  articleRequest.onload = addNews;
  articleRequest.onerror = handleError;
  articleRequest.send();
  function addNew() {
    const userData = JSON.parse(users.responseText);
    console.log(userData);
    console.log(Object.entries(userData));
  }
  const users = new XMLHttpRequest();
  users.open('GET', '../data/cohorts/lim-2018-03-pre-core-pw/users.json', true);
  users.onload = addNew;
  users.onerror = handleError;
  users.send();
}
function addNews() {
  const data = JSON.parse(this.responseText);
  console.log(data);
}
function handleError() {
  console.log('se ha presentado un error');
}
