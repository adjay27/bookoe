export async function searchFetch(query) {
  const ENDPOINT = "https://bookapi.cm.hmw.lol/api/books";
    try {
      const response = await fetch(`${ENDPOINT}?search=${query}`);
      console.log(query);
      const data = await response.json();
      console.log(data);
      return data.data
      
      
    } catch (error) {
      console.error('Error:', error);
    }
   }