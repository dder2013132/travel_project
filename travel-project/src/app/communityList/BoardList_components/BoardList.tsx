// BoardList.tsx
import BoardListItem from "./BoardListItem";

const posts = [
  {
    tag: "동행",
    title: "7.9 ~ 7.11 급 강릉 여행 동행 구해요!",
    description: "급하게 2박 3일 강릉여행 갑니다! 숙소 있음~",
    nickname: "irkasumi852",
    ageGender: "30대 · 남자",
    date: "25.07.09 ~ 25.07.11 (2일)",
    image: "/images/monkey.jpg",
    profileImage: "/images/user1.jpg",
    location: "강원도",
  },
  // 다른 게시글들 ...
];

export default function BoardList() {
  return (
    <div className="w-full max-w-3xl bg-white rounded shadow">
      {posts.map((post, index) => (
        <BoardListItem key={index} post={post} />
      ))}
    </div>
  );
}
