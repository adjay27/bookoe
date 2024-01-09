export const fetcher = (...args) =>
  fetch(...args, {
    headers: {
      Accept: 'application/json',
    },
  }).then((res) => res.json());
