import { Link } from "react-router-dom";
import error from "../../assets/images/error.png";
function ErrorDetails() {
  return (
    <div className="flex items-center justify-center flex-col gap-6 grow">
      <p className="dark:text-first-text-color text-second-text-color transition-colors duration-300 text-lg font-bold ">
        hmmmmm looks like you are lost
      </p>
      <div className="max-w-md">
        <img src={error} className="w-full h-full" />
      </div>
      <p className="dark:text-first-text-color text-second-text-color transition-colors duration-300 text-2xl font-bold">
        let's get you back{" "}
        <Link
          to="/"
          className="cursor-cell dark:text-second-accent text-second-accent dark:hover:text-first-accent hover:text-first-accent transition duration-300"
        >
          Home
        </Link>
      </p>
    </div>
  );
}

export default ErrorDetails;
