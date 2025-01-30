import LogoIcon from "@/assets/logo.svg";
import MyMenuIcon from "@/assets/icon-menu.svg";

export const Header = () => {
  return (
    <header className="py-4 border-b border-white/15">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <div className="border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
              <LogoIcon className="h-8 w-8" />
            </div>
          </div>
          <div>
          <nav>

          <a href="#">Features</a>
          <a href="#">Developers</a>
          <a href="#">Pricing</a>
          <a href="#">ChnageLog</a>
          </nav>

          </div>
          <div className="flex gap-4 items-center">
            <button className="relative  py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
              <div className="absolute inset-0 ">
                <div className=" rounded-lgborder border-white/15 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                <div className=" rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
              </div>
              <span>join waitlist</span>
            </button>
            <MyMenuIcon />
          </div>
        </div>
      </div>
    </header>
  );
};
