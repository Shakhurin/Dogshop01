export const signInFetch = (values) => {
  return fetch("https://api.react-learning.ru/signin", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(values),
  });
};
