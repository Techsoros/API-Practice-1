const loadAPI = (str) => {
  let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${str}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => display(data.meals));
};

const display = (foods) => {
  const foodBox = document.getElementById("food-container");
  foodBox.innerHTML = "";
  for (let food of foods) {
    let col = document.createElement("div");
    col.classList.add("col");
    col.innerHTML = `
        <div class="card h-100" onclick= loadDetails(${food.idMeal}) 
    }'>

        <img src="${food.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${food.strMeal}</h5>
            <p class="card-text">${food.strInstructions.slice(0, 200)}...</p>
            
        </div>
        </div>

    `;
    foodBox.append(col);

    console.log(food);
  }
};

const loadValue = () => {
  let value = document.getElementById("search-value").value;
  loadAPI(value);
};
const loadDetails = (id) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaySingle(data.meals[0]));
};

const displaySingle = (food) => {
  const foodBoxSingle = document.getElementById("single-food-box");
  foodBoxSingle.innerHTML = "";
  const div = document.createElement("div");
  div.innerHTML = ` 
    <div class="card mb-3 w-50 mx-auto">
    <img src="${food.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body p-5">
        <h5 class="card-title">${food.strMeal}</h5>
        <p class="card-text">${food.strInstructions}</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
    </div>


  `;
  foodBoxSingle.append(div);
};

loadAPI("a");
