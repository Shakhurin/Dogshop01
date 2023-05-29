export const productsFetch = (token) => {
  return fetch("https://api.react-learning.ru/products/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};


export const fetchNewProduct = (token, values) => {
  return fetch('https://api.react-learning.ru/products',{
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': "application/json"
    },
    body: JSON.stringify(values)
  })
}