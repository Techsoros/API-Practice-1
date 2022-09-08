const loadApi = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => display(data));
};

const display = (countries) => {
  let c = 0;
  let box = document.getElementById("c-box");
  for (let country of countries) {
    let col = document.createElement("col");
    col.innerHTML = `
    <div class="card h-100 shadow">
      <div class="card-body">
        <h5 class="card-title mb-4"> ${++c}. ${country.name.common}</h5>
        <p> Capital : 
        ${country.capital ? country.capital[0] : "No Capital"}
        </p>
        <p> Currency : 
        ${
          country.currencies
            ? Object.keys(country.currencies)[0]
            : "No Currency"
        }
        </p>
        <button type="button" class="btn btn-primary" onclick='loadDetails("${
          country.cca2
        }")'>View Details</button>

      </div>
    </div>

    `;
    box.append(col);
  }
};
const loadDetails = (cc) => {
  fetch(`https://restcountries.com/v2/alpha/${cc}`)
    .then((res) => res.json())
    .then((data) => displayDetail(data));
};

const displayDetail = (data) => {
  const detailBox = document.getElementById("see-detail");
  detailBox.innerHTML = "";
  let detail = document.createElement("div");
  detail.innerHTML = `

    <div class="card text-center mb-5">
    <div class="card-header">
        <h5>${data.name}</h5>
    </div>
    <div class="card-body">
        <img src="${data.flags.png}" alt="">
        <h5 class="card-title">${
          data.independent ? "Intependent Country" : "Not independent"
        }</h5>
        
    </div>

    </div>

  `;
  detailBox.append(detail);
};
loadApi();
