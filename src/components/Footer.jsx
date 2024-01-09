import Facebook from '../assets/facebook.svg';
import Twitter from '../assets/Twitter.svg';
import Instagram from '../assets/Instagram.svg';
import LinkedIn from '../assets/LinkedIn.svg';
import Youtube from '../assets/YouTube.svg';


const Footer = () => {
  return (
    <div className='relative mx-[32px] top-[160px]'>
      <div className="grid grid-cols-2 grid-rows-2 py-[33px]">
      <div className="col-span-2 flex justify-between items-center">
        <img src='src\assets\logo.png' />
        <div className="w-[526px]">
          <p className="text-[18px] leading-[30px] text-neutral-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
      </div>
      <div className="flex justify-start items-end">
        Copyright © 2023 Codemasters.id | All Rights Reserved
      </div>
      <div className="flex pr-[32px] justify-center items-center gap-x-[22px] place-self-end">
        <img
          src={Facebook}
          alt=""
          className="cursor-pointer hover:-translate-y-2 duration-300 transition"
        />
        <img
          src={Twitter}
          alt=""
          className="cursor-pointer hover:-translate-y-2 duration-300 transition"
        />
        <img
          src={Instagram}
          alt=""
          className="cursor-pointer hover:-translate-y-2 duration-300 transition"
        />
        <img
          src={LinkedIn}
          alt=""
          className="cursor-pointer hover:-translate-y-2 duration-300 transition"
        />
        <img
          src={Youtube}
          alt=""
          className="cursor-pointer hover:-translate-y-2 duration-300 transition"
        />
      </div>
    </div>
    </div>
  );
};

export default Footer;
