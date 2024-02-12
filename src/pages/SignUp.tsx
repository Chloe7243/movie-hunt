import { Link } from "react-router-dom";
import Logo from "../components/UI/Logo";
import clsx from "clsx";

const SignUp = () => {
  const deviceWidth = window.innerWidth;

  return (
    <div
      className={clsx(
        `bg-[url(/background.webp)] bg-cover bg-no-repeat  h-[100svh] flex flex-col`
      )}
    >
      <div className="absolute top-6 left-4">
        <Logo dark={deviceWidth < 768} />
      </div>
      <div className="bg-white w-full md:w-[55%] place-self-end h-full">
        {/* <div>
          <IoIosClose />
        </div> */}
        <form
          action=""
          className="flex flex-col items-center justify-center w-[70%] h-[50%] m-auto"
        >
          <h2>Create account</h2>
          <p>
            Keep track of the movies you've watched and want to watch. Create an
            account to get started.
          </p>
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            className="border-b-"
          />
          <input type="password" name="" id="" placeholder="Password" />
          <button className="bg-[#3b5249]">Create account</button>
          <Link to="">Log in</Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
