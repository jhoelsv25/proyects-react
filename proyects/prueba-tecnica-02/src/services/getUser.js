const BASE_URL = "https://randomuser.me";
export const getAlluser = () => {
  const url = `${BASE_URL}/api/?results=100`;
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data.results;
    })
    .catch((err) => {
      throw new Error("Ocurred error inesperaded", err);
    });
};
