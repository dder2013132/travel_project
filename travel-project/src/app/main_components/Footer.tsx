export default function Footer() {
  return (
    <footer className="flex items-center justify-center p-4 bg-gradient-to-r from-green-400 to-blue-500 text-white">
      <p className="text-sm">
        © {new Date().getFullYear()} Travel Project. All rights reserved.
      </p>
      <div className="ml-4">
        <a href="/privacy" className="text-sm hover:underline">Privacy Policy</a>
      </div>
    </footer>
  );
}