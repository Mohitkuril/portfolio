import notFoundImage from "../Components/Images/404error.svg";

function NotFound() {
  return (
    <div className="bg-gray-950 text-white w-full h-screen flex flex-col gap-[5vh] items-center justify-center">
      <img
        src={notFoundImage}
        alt="404 error"
        className="md:w-1/2 w-[80%] h-1/2"
      />
    </div>
  );
}

export default NotFound;
