export const signUpFetch = (values) => {
  return fetch("https://api.react-learning.ru/signup", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(values),
  });
};
