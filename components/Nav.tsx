import router from "next/router";
import { endPoints } from "../lib/helper";
const Nav = () => {
  return (
    <nav className="relative my-5">
      <div className="flex whitespace-nowrap px-10 text-xl sm:px-20 sm:text-2xl space-x-5 sm:space-x-10 overflow-x-scroll scrollbar-hide">
        {endPoints.map((p, i) => (
          <h2
            key={i}
            className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-110 hover:text-white active:text-red-500"
            onClick={() => {
              router.push(`/?genre=${p.title}`);
            }}
          >
            {p.title}
          </h2>
        ))}
      </div>
      <div className="bg-gradient-to-l from-[#06202a]  w-1/12 h-10 absolute top-0 right-0" />
    </nav>
  );
};

export default Nav;
