import MainDropDown from "./MainDropDown";
export default function Header() {
  return (
    <header className="fixed bg-gray-200 rounded-xl top-0 left-0 right-0 mx-60 p-2 z-50 border-black/[.1] flex items-start justify-start text-black">
      <h1 className="text-xl font-bold mr-4">Travel Project</h1>
      <nav className="ml-auto">
        <ul className="flex items-end justify-end space-x-4">
          <li>
            <MainDropDown />
          </li>
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}