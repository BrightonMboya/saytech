import { FaBars } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="absolute right-2 cursor-pointer">
      <FaBars size={25} fill="#fff" />
    </div>
  );
};

export default NavBar;
