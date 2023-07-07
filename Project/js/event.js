var header = document.querySelector("header");

fetch("/header/header.html")
  .then((response) => {
    console.log(response);
    return response.text();
  })
  .then((data) => {
    header.innerHTML = data;
  });
