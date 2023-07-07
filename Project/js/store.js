var header = document.querySelector("header");

fetch("header/header.html")
  .then((response) => {
    console.log(response);
    return response.text();
  })
  .then((data) => {
    header.innerHTML = data;
  });



var footer = document.querySelector("footer");

fetch("header/footer.html")
  .then((response) => {
    console.log(response);
    return response.text();
  })
  .then((result) => {
    footer.innerHTML = result;
  })