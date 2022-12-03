const input = document.querySelector("input");
const user = document.querySelector(".user");
const userName = document.querySelector("h1");
const followers = document.querySelector(".followers");
const following = document.querySelector(".following");
const getCatBtn = document.querySelector("button");
const cat = document.querySelector(".cat");

function displayUI(data) {
  user.src = data.avatar_url;
  userName.innerText = data.login;
  followers.innerText = data.followers;
  following.innerText = data.following;
}

function handleChange(event) {
  if (event.keyCode === 13) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.github.com/users/${event.target.value}`);
    xhr.onload = function () {
      let userData = JSON.parse(xhr.response);
      displayUI(userData);
    };
    xhr.onerror = function () {
      console.log("Something went wrong...");
    };
    xhr.send();
  }
}

function getCat() {
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://api.thecatapi.com/v1/images/search?limit=1&size=full"
  );
  xhr.onload = function () {
    let catData = JSON.parse(xhr.response);
    cat.src = catData[0].url;
  };
  xhr.onerror = function () {
    console.log("Something went wrong...");
  };
  xhr.send();
}

input.addEventListener("keyup", handleChange);
getCatBtn.addEventListener("click", getCat);
