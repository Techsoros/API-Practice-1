const loadUser = () => {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => display(data.results[0]));
};

const display = (obj) => {
  const userBox = document.getElementById("user-box");
  let col = document.createElement("col");
  col.innerHTML = `
    <div class="card">
    <img src="${obj.picture.large}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    </div>

  `;
  userBox.append(col);
};

loadUser();
