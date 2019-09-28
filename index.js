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
        $(".error").addClass("hidden");
        return responce.json();
      }
      $(".error").removeClass("hidden");
    })
    .then(responceJson => {
      $(".js-results-list").empty();
      for (let i = 0; i < responceJson.length; i++) {
        $(".js-results-list").append(`<li><h2><a target="_blank" href='${responceJson[i].html_url}'>${responceJson[i].name}</a></h2></li>`)
      }
      $('.js-results').removeClass('hidden')
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