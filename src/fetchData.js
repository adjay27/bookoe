const ENDPOINT = "https://bookapi.cm.hmw.lol/api/books";
const totalPage = 100;

export async function fetchBooks() {
  const page = Math.ceil(Math.random() * totalPage);
  try {
    const response = await fetch(`${ENDPOINT}?page=${page}`);
    const data = await response.json();
    return data.data.slice(0, 4);
  } catch (error) {
    console.error("Error:", error);
  }
}
