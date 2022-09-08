const loadApi = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => display(data));
};

const display = (obj) => {
  console.log(obj);
  let qoute = document.getElementById("quote");
  qoute.innerText = obj.quote;
};
loadApi();

document.getElementById("get-btn").addEventListener("click", function () {
  loadApi();
});
