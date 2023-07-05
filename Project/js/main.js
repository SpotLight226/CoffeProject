var header = document.querySelector("header");

fetch("component/header.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    header.innerHTML = data;
  });
