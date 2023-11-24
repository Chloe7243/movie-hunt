import white_logo from "/logos/white_logo.png";
import dark_logo from "/logos/black_logo.png";

const Logo = ({ dark }: { dark?: boolean }) => {
  const textColor = dark ? "text-black" : "text-white";
  const logo = dark ? dark_logo : white_logo;
  return (
    <div className="flex gap-1 h-full items-center">
      <img src={logo} alt="" className="w-10 aspect-square object-contain" />
      <h1 className={`text-2xl font-bold leading-5 ${textColor}`}>
        hunt <br /> movie
      </h1>
      <hr />
    </div>
  );
};

export default Logo;
