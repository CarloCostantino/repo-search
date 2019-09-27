'use strict';

const baseURL = "https://api.github.com/users/"

function renderResults(baseURL, username) {
  const final = `${baseURL}${username}/repos`
  return final
}

function handleSubmit(username) {
  fetch(renderResults(baseURL,username))
    .then(responce => {
      if (responce.ok) {
        return responce.json();
      }
    }
}

function waitForSubmit() {
  $("form").submit(event => {
    event.preventDefault();
    const input = $(".search-input").val();
    handleSubmit(input);
  })
}

$(waitForSubmit);