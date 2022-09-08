const loadByFetch = () => {
  let url = "https://randomuser.me/api/?gender=female";
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data.results[0]))
    .catch((error) => console.log(error));
};

const loadByAssync = async () => {
  let url = "https://randomuser.me/api/?gender=female";
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results[0]);
  } catch (error) {
    console.log(error);
  }
};
