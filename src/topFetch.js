const ENDPOINT = "https://bookapi.cm.hmw.lol/api/books?is_top_pick=true&sort=rating&direction=desc&page=1";

export async function fetchBooks() {

  try {
    const response = await fetch(`${ENDPOINT}`);
    const data = await response.json();
    return data.data.slice(0, 12);
  } catch (error) {
    console.error("Error:", error);
  }
}
