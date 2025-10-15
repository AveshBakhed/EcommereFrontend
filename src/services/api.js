export const gettingData = async () => {
    try{

    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
        console.error("API Error :",{
            message: "Failed to fetch Product", 
            status: response.status,
            statusText: response.statusText
        })
        throw {
            message: "Failed to fetch", 
            status: response.status,
            statusText: response.statusText
        }
      }
    const data = await response.json();
    
    return data;

 }catch(error){
    console.error("Unexpected API Error:", error);
    throw{
        message : error.message || "Unexpected Error",
        statusText: error.statusText || "unkown Error",
        status: error.status || 500
    }
}
} 