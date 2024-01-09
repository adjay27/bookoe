import { useParams } from "react-router-dom";
import { dateFormatter } from "../dateFormat";
import useGetData from "../useGetData";
import { Rating } from "@material-tailwind/react";

const ENDPOINT = "https://bookapi.cm.hmw.lol/api/books";
const DetailBook = () => {
  const bookId = useParams().bookId;
  const { data: book, error, isLoading } = useGetData(`${ENDPOINT}/${bookId}`);

  if (isLoading) {
    return (
      <div className="w-full  min-h-screen flex justify-center items-center">
        <div className="text-3xl font-semibold">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="text-3xl font-semibold">{error.message}</div>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="text-3xl font-semibold">Book not found</div>
      </div>
    );
  }

  return (
    <section className=" mx-[32px] mt-[32px] flex justify-between gap-[76px]">
      <img
        src={book.image_url}
        alt={book.title}
        className="w-[408px] h-[587px] rounded-lg"
      />
      <div className="flex flex-col justify-between">
        <h1 className="text-[62px] font-semibold">{book.title}</h1>
        <p className="text-[36px] font-light">by {book.author?.name}</p>
        <div className="my-4 flex gap-4">
          <div className="w-[55px] h-[55px] rounded-full text-white bg-rating flex justify-center items-center">
            {book.rating?.toFixed(1)}
          </div>
          <Rating rating={book.rating} />
        </div>
        <p className="text-xl">{book.synopsis}</p>
        <p className="mt-8 text-dark-gray font-light">
          First published{" "}
          {dateFormatter(book.created_at, "en-US", { dateStyle: "long" })}
        </p>
      </div>
    </section>
  );
};

export default DetailBook;
