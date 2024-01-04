export const Check = () => {
  async function fetchData() {
    try {
      const data = await fetch("https://bookapi.cm.hmw.lol/api/books/");
      const result = await data.json();
      const book = result.data.slice(0, 4);
      console.log(book);
    } catch (error) {
      console.log(error);
    }
  }
  fetchData();

  return (
    <div>
     
    </div>
  );
};

export default Check;

