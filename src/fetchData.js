export async function fetchBooks() {
    try {
      const response = await fetch("https://bookapi.cm.hmw.lol/api/books/");
      const data = await response.json();
      return data.data.slice(0, 4);
      
    } catch (error) {
      console.error('Error:', error);
    }
   }
   