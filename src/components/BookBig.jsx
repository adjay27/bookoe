import { useState, useEffect } from "react";
import { fetchBooks } from "../fetchData.js";
import { Rating } from "@material-tailwind/react";

export const BookBig = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks().then((data) => setBooks(data));
  }, []);

  return (
    <div className="relative top-[64px] mx-[32px] p-4 bg-[#f1f0fe] rounded-[15px] w-fit h-fit">
      <div className="grid grid-rows-2 grid-flow-col gap-y-[92px] gap-x-[114px] justify-center">
        {books.map((book, index) => (
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
              <h1 className="font-bold text-xl">{book.title}</h1>
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
        ))}
      </div>
    </div>
  );
};

export default BookBig;
