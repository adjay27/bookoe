import { useParams } from "react-router-dom";
import { Rating } from "@material-tailwind/react";
import useGetData from "../useGetData";
import { Link } from "react-router-dom";

const ENDPOINT = "https://bookapi.cm.hmw.lol/api/books";

export const TestSearch = () => {
  const keyword = useParams().keyword;
  const { data: books, error } = useGetData(`${ENDPOINT}?search=${keyword}`);

  if (!books || !books.data) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="text-3xl font-semibold">No search results found</div>
      </div>
    );
  }

  const searchResult = books.data;

  if (searchResult.length < 1) {
    return (
      <div className="w-full min-h-[600px] flex justify-center items-center border border-accent rounded-lg">
        <div className="text-5xl text-accent font-semibold">
          Book Not Found!
        </div>
      </div>
    );
  }

  return (
    <>
    <div className="relative bg-[#f1f0fe] h-[147px] mx-9 my-4 rounded-[15px] grid content-center">
        <h1 className="text-4xl ml-[71px] font-bold">
          <strong className="text-bookoe">Search For</strong> {keyword}
        </h1>
      </div>
      <div className="backgroud-big relative w-max-fit h-max-fit top-[140px] mx-[32px] p-4 bg-[#f1f0fe] rounded-[15px] w-fit h-fit">
        <div className="grid grid-cols-4 gap-x-[64px] justify-center ">
          {searchResult.map((book, index) => (
            <div
              className="book-wrap h-[551px] w-[265px] grid grid-rows-2"
              key={index}
            >
              <div className="img-container row-span-2 grid">
                <img
                  className="object-cover w-[260px] h-[340px] rounded-lg my-8"
                  src={book.image_url}
                  alt={book.title}
                />
              </div>

              <div className="book-info grid w-[260px] ">
                <h1 className="font-bold line-clamp-2 ">{book.title}</h1>
                <p>by {book.author.name}</p>
                <div className="flex justify-start ">
                  <div className="size-10 rounded-full bg-amber-400 p-2">
                    {book.rating}
                  </div>
                  <Rating value={3} />
                </div>
                <Link to={`/books/${book.id}`}>
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

export default TestSearch;
