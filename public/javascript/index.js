// charactersAPI.getFullList().then((resp) => console.log(resp));

// axios.get("http://localhost:8000/characters").then((resp) => console.log(resp));
const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  charactersAPI.getFullList().then((resp) => console.log(resp));
});

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      charactersAPI
        .getFullList()
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          return error;
        });
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      charactersAPI
        .getOneRegister(characterId)
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          return error;
        });
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      charactersAPI
        .deleteOneRegister(characterId)
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          return error;
        });
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      charactersAPI
        .updateOneRegister(characterId, characterInfo)
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          return error;
        });
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      charactersAPI
        .createOneRegister(characterInfo)
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          return error;
        });
    });
});

document.getElementById("get-country-btn").addEventListener("click", () => {
  const userInput = document.getElementById("country-name-input").value;
  getCountryInfo(userInput);
});
