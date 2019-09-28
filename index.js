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
      $("p.error").removeClass("hidden");
    })
    .then(responceJson => {
      console.log(responceJson)
      for (let i = 0; i < responceJson.length; i++) {
        $(".results").append(`<h2><a target="_blank" href='${responceJson[i].html_url}'>${responceJson[i].name}</a></h2>`)
      }
      $('.results').removeClass('hidden')
    })
}

function waitForSubmit() {
  $("form").submit(event => {
    event.preventDefault();
    const input = $(".search-input").val();
    handleSubmit(input);
  })
}

$(waitForSubmit);