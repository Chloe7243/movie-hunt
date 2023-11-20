import { BounceLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="h-full w-full items-center justify-center flex flex-col">
      <BounceLoader color="#fff" />
    </div>
  );
};

export default Loader;
