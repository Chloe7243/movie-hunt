import logo from "/logos/white_logo.png";

const Logo = () => {
  return (
    <div className="flex gap-1 h-full items-center">
      <img src={logo} alt="" className="w-10 aspect-square object-contain" />
      <h1 className="text-2xl font-bold leading-5 text-white">
        hunt <br /> movie 
          </h1>
          <hr />
    </div>
  );
};

export default Logo;
