import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { searchFetch } from "../searchFetch";
import { Rating } from "@material-tailwind/react";

export const TestSearch = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        if (query) {
          const data = await searchFetch(query);
          setBooks(data.data);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchSearchResults();
  }, [query, location]);

  return (
    <>
      <div className="relative bg-[#f1f0fe] h-[147px] mx-9 my-4 rounded-[15px] grid content-center ">
        <h1 className="text-4xl text-center font-bold">
          <strong className="text-bookoe">Search For</strong>
        </h1>
      </div>
      <div className="relative  mx-[32px] p-4 bg-[#f1f0fe] rounded-[15px] h-fit">
        <div className="grid gap-y-[92px] gap-x-[114px] justify-center">
          {books.length > 0 ? (
            books.map((book, index) => (
              <div
                className="book-wrap grid grid-cols-2 w-[564px] h-[346px]"
                key={index}
              >
                <div className="img-container  h-full w-full grid justify-center">
                  <img
                    className="object-cover w-[277px] h-[346px] rounded-lg my-8"
                    src={book.image_url}
                    alt={book.title}
                  />
                </div>

                <div className="book-info py-8">
                  <h1 className="font-bold text-xl truncate">{book.title}</h1>
                  <p>by {book.author.name}</p>
                  <div className="pt-4 flex justify-start">
                    <div className="size-10 rounded-full bg-amber-400 p-2">
                      {book.rating}
                    </div>
                    <Rating value={3} />
                  </div>

                  <p className="synopsis py-8">{book.synopsis}</p>
                  <button className="block rounded-md w-[99px] py-2 border-solid border-2 border-[#8170F2] text-[#8170F2]">
                    Read Book
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="relative bg-[#f1f0fe] w-full mx-9 rounded-[15px] ">
              <h1 className="text-4xl font-bold">
                <strong className="text-bookoe">Book Not Found</strong>
              </h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TestSearch;
