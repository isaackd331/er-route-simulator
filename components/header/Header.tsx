import Link from "next/link";

import ToggleDarkBtn from "./ToggleDarkBtn";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5">
      <nav className="flex items-center gap-5 text-[1.6rem]">
        <Link href="/menu1">Menu1</Link>
        <Link href="/menu2">Menu2</Link>
        <Link href="/menu3">Menu3</Link>
      </nav>
      <ToggleDarkBtn />
    </header>
  );
};

export default Header;
