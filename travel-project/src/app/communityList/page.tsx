import Header from "../main_components/Header";
import Footer from "../main_components/Footer";
import BoardList from "./BoardList_components/BoardList";

export default function communityList() {
  return (
    <div className="h-auto flex flex-col">
      <div className="p-7 sm:p-7">
        <Header />
      </div>
      <main className="flex-1 flex flex-col items-center px-20 sm:px-20">
      <BoardList />
      </main>
      {/* 푸터 */}
        <Footer />
    </div>
  );
}