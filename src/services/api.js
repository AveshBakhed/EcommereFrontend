export const gettingData = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("ERROR", err);
  } finally {
    console.log("Success");
  }
};