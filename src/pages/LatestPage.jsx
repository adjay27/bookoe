import { useState, useEffect } from "react";
import { fetchBooks } from "../latestFetch.js";
import { Rating } from "@material-tailwind/react";
import { dateFormatter } from "../dateFormat.js";
import { Link } from "react-router-dom";

export const LatestPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks().then((data) => setBooks(data));
  }, []);

  return (
    <>
      <div className="relative bg-[#f1f0fe] h-[147px] mx-9 my-4 rounded-[15px] grid content-center">
        <h1 className="text-4xl ml-[71px] font-bold">
          Our <strong className="text-bookoe">Latest</strong> Collection
        </h1>
      </div>
      <div className="backgroud-big relative w-max-fit h-max-fit mx-[32px] p-4 rounded-[15px] ">
        <div className="grid grid-cols-4 gap-x-[64px] justify-center ">
          {books.map((book, index) => (
            <div
              className="book-wrap h-[551px] w-[265px] grid grid-rows-2"
              key={index}
            >
              <div className="img-container row-span-2 grid">
                <span className="relative top-[80px] px-4 w-fit items-center rounded-md bg-[#8170F2] py-1 text-s font-medium text-white ring-1 ring-inset ring-blue-700/10">
                  {dateFormatter(book.created_at)}
                </span>
                <img
                  className="object-cover w-[260px] h-[340px] rounded-lg my-8"
                  src={book.image_url}
                  alt={book.title}
                />
              </div>

              <div className="book-info grid w-[260px] ">
                <h1 className="font-bold top-[20px] line-clamp-1 ">{book.title}</h1>
                <p>by {book.author.name}</p>
                <div className="flex justify-start ">
                  <div className="size-10 rounded-full bg-amber-400 p-2">
                    {book.rating}
                  </div>
                  <Rating value={3} />
                </div>
                <Link to={`/books/${book.id}`} >

                <button className="block rounded-md py-2 w-full border-solid border-2 border-[#8170F2] text-[#8170F2]">
                  Read Book
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LatestPage;
