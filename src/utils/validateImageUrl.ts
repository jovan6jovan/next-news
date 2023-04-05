export const validateImageUrl = (urlToImage: string) => {
  const placeholderImage = "https://bulma.io/images/placeholders/1280x960.png";

  return urlToImage?.startsWith("http://") || urlToImage?.startsWith("https://")
    ? urlToImage
    : placeholderImage;
};
