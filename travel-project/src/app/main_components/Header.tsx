import MainDropDown from "./MainDropDown";
export default function Header() {
  return (
    <header className="fixed w-full bg-header-color top-0 left-0 right-0 p-2 z-50 border-black/[.1] px-6 flex items-center justify-center text-black">
      <h1 className="text-xl text-white font-bold mr-4">Travel Project</h1>
      <nav className="ml-auto">
        <ul className="flex items-end justify-end space-x-4">
          <li>
            <MainDropDown />
          </li>
          <li><a href="/" className="text-white hover:underline">Home</a></li>
          <li><a href="/about" className="text-white hover:underline">About</a></li>
          <li><a href="/contact" className="text-white hover:underline">Contact</a></li>
          <li><a href="/communityList" className="text-white hover:underline">BoardList</a></li>

        </ul>
      </nav>
    </header>
  );
}