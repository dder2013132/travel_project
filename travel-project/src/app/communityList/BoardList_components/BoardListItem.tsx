// BoardListItem.tsx
import Image from "next/image";

export default function BoardListItem({ post }: { post: any }) {
  return (
    <div className="flex justify-between p-4 border-b hover:bg-gray-50">
      {/* 왼쪽 텍스트 */}
      <div className="flex-1 pr-4">
        <div className="mb-1 text-xs">
          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
            post.tag === "공지" ? "bg-yellow-100 text-yellow-600" : "bg-green-100 text-green-600"
          }`}>
            {post.tag}
          </span>
        </div>
        <h2 className="font-semibold text-gray-800">{post.title}</h2>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{post.description}</p>
        <div className="flex items-center text-xs text-gray-500 mt-2 gap-1">
          <Image
            src={post.profileImage}
            alt="profile"
            width={16}
            height={16}
            className="rounded-full"
          />
          <span className="ml-1">{post.nickname}</span>
          <span>· {post.ageGender}</span>
        </div>
        <div className="text-xs text-gray-400 mt-1">{post.date}</div>
      </div>

      {/* 오른쪽 썸네일 */}
      <div className="w-24 shrink-0 text-xs text-green-600 text-center">
        <Image
          src={post.image}
          alt="thumbnail"
          width={96}
          height={72}
          className="rounded-md object-cover"
        />
        <div className="mt-1">{post.location}</div>
      </div>
    </div>
    
  );
}
