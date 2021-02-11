export const getGifts = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&api_key=XLNbATuEB7f9bSxIFj9a75HcTVetKwuN&limit=10`;
  const resp = await fetch(url);
  console.log(resp);
  //console.log("Abajo lo de json");

  const { data } = await resp.json();
  //console.log(data);

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
