export async function heroFetch() {
    try {
      const response = await fetch("https://bookapi.cm.hmw.lol/api/books/");
      const data = await response.json();
      return data.data.slice(12, 13)
      
      
    } catch (error) {
      console.error('Error:', error);
    }
   }