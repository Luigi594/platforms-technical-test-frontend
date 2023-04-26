import { Link } from "react-router-dom";

function NavBar() {
  const flexBetween = "flex items-center justify-between";

  return (
    <nav>
      <div
        className={`${flexBetween} fixed top-0 z-50 w-full py-6 bg-slate-300 text-blue-800`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <Link
              to={"/"}
              className="flex flex-col items-center justify-center">
              <span className="text-lg text-center w-40">Platform Manager</span>
            </Link>

            <div className={`${flexBetween} w-full hidden md:flex`}>
              <div className={`${flexBetween} space-x-10 text-base ml-auto`}>
                <p>By Luis Martinez</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
