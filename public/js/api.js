async function api() {
  const token = "Edm1fbxVnvSA6OmU8SEZ3dgWvyLRI1XFMILg1F3d";
  const limit = 1;
  fetch(
    `https://quizapi.io/api/v1/questions?apiKey=${token}&category=linux&difficulty=easy&limit=${limit}`,
  )
    .then((result) => result.json())
    .then((resJson) => {
      // console.log(resJson);
      return resJson;
    })
    .catch((error) => {
      console.log("DEU RUIM!", error);
    });
}
