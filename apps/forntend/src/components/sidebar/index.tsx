/* eslint-disable */

import { HiX } from "react-icons/hi";

import Links from "./components/Links";
import logo from "assets/img/dashboards/logo.png";


import routes from "routes";

const Sidebar = (props: {
  open: boolean;
  onClose: React.MouseEventHandler<HTMLSpanElement>;
}) => {
  const { open, onClose } = props;
  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute block cursor-pointer top-4 right-4 xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <div className={`mx-3 mt-[50px] flex items-center justify-center`}>
          <img className="h-12" src={logo} alt="" />
      </div>
      <div className="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30" />
      {/* Nav item */}

      <ul className="pt-1 mb-auto">
        <Links routes={routes} />
      </ul>
      {/* Nav item end */}
    </div>
  );
};

export default Sidebar;
