export const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.');
      Object.assign(error, { status: res.status });
      throw error;
    }

    return res.json();
  });
