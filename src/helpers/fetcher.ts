export const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.');
      Object.assign(error, { status: res.status });
      throw error;
    }

    return res.json();
  });

export const complexFetcher = (url: string | null, body: string, method: string) => {
  if (!url) return null;

  return fetch(url, {
    method,
    body,
  }).then((res) => {
    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.');
      Object.assign(error, { status: res.status });
      throw error;
    }

    return res.json();
  });
};
