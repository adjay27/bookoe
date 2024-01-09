import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { heroFetch } from "../heroFetch.js";
import { Rating } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    heroFetch().then((data) => {
      setBooks(data);
    });
  }, []);

  return (
    <>
      {books.map((book, index) => (
        <div
          key={index}
          className="relative top-[33px] mx-[32px] h-[522px] bg-[#f1f0fe] rounded-[15px]"
        >
          <div className="absolute w-[408px] h-[390px] left-[800px]">
            <div className="my-10 mx-0">
              <img
                className="absolute rounded-2xl object-cover h-[390px] "
                alt="photo"
                src={book.image_url}
              />
            </div>
          </div>
          <div className="absolute w-[525px] h-[390px] top-[66px] left-[71px]">
            <div className="absolute top-0 left-[3px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#8170f2] text-[20px] tracking-[0] leading-[normal]">
              MUST READ
            </div>
            <div className="absolute mx-0 line-clamp-2 tracking-tight text-[48px] top-[38px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#1d1d1d] leading-tight">
              {book.title}
            </div>
            <p className="absolute w-[446px] top-[252px] left-[3px] [font-family:'Poppins-Regular',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
              {book.synopsis}
            </p>
            <div className="absolute top-[198px] left-[3px] [font-family:'Poppins-Medium',Helvetica] font-bold text-black text-[16px] tracking-[0] leading-[normal]">
              {book.author.name}
            </div>

            <Rating
              className="absolute top-[192px] left-[198px]"
              value={4}
              ratedColor="amber"
              color="amber"
            />
            <div className="absolute h-[25px] ">
              <button className="absolute  top-[340px] border-solid rounded-lg px-10 w-max py-3 inline-block border-2 text-custom-white bg-[#8170F2]">
                <Link to={`/books/${books[0].id}`}>
                  <span>Read Book</span>
                  <ArrowRightIcon className="h-5 float-right" />
                </Link>
              </button>

              <button className="absolute left-[240px] !top-[340px] border-solid rounded-lg w-max px-2 py-3 inline-block border-2 border-[#8170F2] text-[#8170F2]">
                See All Recommendation
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HeroSection;
