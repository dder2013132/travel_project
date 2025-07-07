export default function Footer() {
  return (
    <footer className="flex items-center justify-center p-4 text-black">
      <p className="text-sm">
        © {new Date().getFullYear()} Travel Project. All rights reserved.
      </p>
      <div className="ml-4">
        <a href="/privacy" className="text-sm hover:underline">Privacy Policy</a>
      </div>
    </footer>
  );
}