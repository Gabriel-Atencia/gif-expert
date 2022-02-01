export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=teiFNLBoYA5zj3uRDaQ1Pp4rRF9FUJNw&q=${encodeURI(
    category
  )}&limit=10`;
  console.log("Category ", category);
  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized.url,
    };
  });

  return gifs;
};
