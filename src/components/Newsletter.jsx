/* eslint-disable no-unused-vars */
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const Newsletter = () => {
  return (
    <>
      <div className="bg-[#8170f2] relative top-[180px] mx-9 h-[303px] rounded-[15px] grid ">
        <div className="border-gray-500 grid grid-cols-1 content-center">
          <p className="text-custom-white text-4xl text-center font-bold ">
            Sign up for our newsletter to get our latest
            <br />
            recommendation!
          </p>
          <div className="grid grid-flow-col pt-8">
            <div className="flex flex-row mx-auto gap-8 ">
              <div className="relative">
                <input
                  type="email"
                  className="pl-8 h-[50px] m-0 block w-[345px] rounded-lg border-solid bg-white border-neutral-600 px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[0] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none motion-reduce:transition-none"
                  placeholder="Enter Your Email"
                  aria-label="Search"
                />
              </div>
              <button className="block rounded-md w-[99px] px-3 py-2 border-solid bg-custom-white">
                <p className="text-[#8170f2] font-medium">Submit</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
