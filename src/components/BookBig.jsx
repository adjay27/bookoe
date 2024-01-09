import { useState, useEffect } from "react";
import { fetchBooks } from "../fetchData.js";
import { Link } from "react-router-dom";
import { Rating } from "@material-tailwind/react";

export const BookBig = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks().then((data) => {
      setBooks(data);
    });
  }, []);

  return (
    <div className="backgroud-big relative top-[64px] mx-[32px] rounded-[15px] my-0 h-full">
      <div className="grid grid-cols-2 gap-y-[92px] gap-x-[114px] justify-center">
        {books.map((book, index) => (
          <div
            className="book-wrap border-black grid grid-cols-2 w-[563px] h-[346px] "
            key={index}
          >
            <div className="img-container m-0 justify-center">
              <img
                className="object-cover w-[277px] h-[346px] rounded-lg my-8"
                src={book.image_url}
                alt={book.title}
              />
            </div>

            <div className="book-info pl-4 py-8 w-[271px] h-[346px]">
              <h1 className="font-bold text-xl line-clamp-2">{book.title}</h1>
              <p>by {book.author.name}</p>
              <div className="pt-2 flex justify-start">
                <div className="size-10 rounded-full bg-amber-400 p-2">
                  {book.rating}
                </div>
                <Rating value={3} />
              </div>

              <p className="synopsis py-4 line-clamp-5">{book.synopsis}</p>
              <div>
              <Link to={`/books/${book.id}`} >
                <button className="relative top-4 rounded-md w-full py-2 border-solid border-2 border-[#8170F2] text-[#8170F2]">
                  Read Book
                </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookBig;
