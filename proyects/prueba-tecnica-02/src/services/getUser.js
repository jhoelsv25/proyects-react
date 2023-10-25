const BASE_URL = "https://randomuser.me";
export const getAlluser = ({ currentPage }) => {
  const url = `${BASE_URL}/api/?results=10&seed=jhoel%page=${currentPage}`;
  return fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data.results;
    })
    .catch((err) => {
      throw new Error("Ocurred error inesperaded", err);
    });
};
