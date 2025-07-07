import Image from "next/image";
import Header from "./main_components/Header";
import Footer from "./main_components/Footer";
import ImageBox from "./main_components/ImageBox";
import "./globals.css";
import PriceBox from "./main_components/PriceBox";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 헤더 */}
      <div className="p-7 sm:p-7">
        <Header />
      </div>
      
      {/* 메인 콘텐츠 영역 */}
      <main className="flex-1 flex flex-col items-center px-20 sm:px-20">
        {/* TopBox */}
        <div className="flex flex-row px-40 mb-16 gap-8 items-start w-full">
          <div className="w-full lg:flex-[8]">
          <ImageBox />
          </div>
          <div className="w-full lg:flex-2">
          <PriceBox />
          </div>
        </div>
        
        {/* 기존 Next.js 컨텐츠 */}
        <div className="flex flex-col gap-8 items-center sm:items-start mb-16">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          
          <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2 tracking-[-.01em]">
              Get started by editing{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
                src/app/page.tsx
              </code>
              .
            </li>
            <li className="tracking-[-.01em]">
              Save and see your changes instantly.
            </li>
          </ol>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our docs
            </a>
          </div>
        </div>
      </main>
      
      {/* 푸터 */}
      <Footer />
    </div>
  );
}