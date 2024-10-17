import "../App.css";

export const Hero = () => {
  return (
    <>
      <div className="hero-section w-[1125px] h-[613] mx-auto flex pt-[80px] gap-[60px]">
        <div className="left-side w-[595px] h-[613px] flex flex-col gap-[36px]">
          <h1 className="h-[306px] w-[595px] text-[108px] leading-[102px] font-poppins font-bold ">
            YOUR FEET DESERVE THE BEST
          </h1>
          <p className="w-[404px] h-[91px] font-poppins font-medium">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="btn flex w-[331px] h-[41px]  items-center gap-[40px]">
            <div className="bg-btn-red text-white h-[41px] w-[150px] flex items-center rounded pl-[34px] cursor-pointer">
              Shop Now
            </div>
            <div className="bg-transparent w-[141px] text-black border-2 border-solid h-full flex items-center rounded pl-[30px] cursor-pointer">
              Category
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[131px] h-[67px]">
            <p>Also available on</p>
            <div className="available flex gap-[16px]">
              <img src="/flipkart.png" alt="flipkart-logo"></img>
              <img src="/amazon.png" alt="amazon-logo"></img>
            </div>
          </div>
        </div>
        <div className="right-side">
          <img
            className="w-[530px] h-[487px] pt-[64px]"
            src="../public/shoe_image.png"
            alt="shoe image"
          />
        </div>
      </div>
    </>
  );
};
