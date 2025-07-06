export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 mx-60 z-50 border-black/[.1] flex items-center justify-between p-2 bg-gradient-to-r from-green-400 to-blue-500 text-white">
      <h1 className="text-xl font-bold mr-4">Travel Project</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}