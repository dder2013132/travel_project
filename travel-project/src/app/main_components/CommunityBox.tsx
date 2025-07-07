export default function CommunityBox() {
  return (
    <div className="flex flex-col w-full h-full rounded-lg p-4 px-12 gap-8 bg-gray-100 items-start sm:items-start mb-8">
      <h1 className="text-2xl font-bold italic mt-2">여행 게시판 목록</h1>
      {/* 제목, 내용, 작성자, 작성일 까지가 한 칸 */}
      <div className="w-full h-full p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold border-b border-gray-400 italic mb-2">게시글 제목 1</h1>
        <p className="text-gray-700 border-b border-gray-400 pb-4 mb-4">게시글 내용은 이곳에 표시될 것입니다.</p>
        <span className="text-sm text-gray-500">작성자: 사용자 이름</span>
        <span className="text-sm text-gray-500">작성일: 2023-10-01</span>
      </div>
      <div className="w-full h-full p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold border-b border-gray-400 italic mb-2">게시글 제목 2</h1>
        <p className="text-gray-700 border-b border-gray-400 pb-4 mb-4">게시글 내용은 이곳에 표시될 것입니다.</p>
        <span className="text-sm text-gray-500">작성자: 사용자 이름</span>
        <span className="text-sm text-gray-500">작성일: 2023-10-02</span>
      </div>
      <div className="w-full h-full p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold border-b border-gray-400 italic mb-2">게시글 제목 3</h1>
        <p className="text-gray-700 border-b border-gray-400 pb-4 mb-4">게시글 내용은 이곳에 표시될 것입니다.</p>
        <span className="text-sm text-gray-500">작성자: 사용자 이름</span>
        <span className="text-sm text-gray-500">작성일: 2023-10-03</span>
      </div>
    </div>
  );
}

// 추후 추가 방향성 -> 해당 방식으로 게시글 목록을 동적으로 가져와서 렌더링할 수 있습니다.
{/* <div>
    {posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <span>{post.author}</span>
        <span>{post.date}</span>
      </div>
    ))}
  </div> */}