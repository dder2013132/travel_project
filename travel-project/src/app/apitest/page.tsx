"use client";

import { useEffect, useState } from 'react';

export default function Page() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/apitest'); // 프록시 경유
        if (!res.ok) throw new Error('API 호출 실패');
        const json = await res.json();
        setData(json);
      } catch (err: any) {
        console.error('클라이언트 에러:', err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러 발생: {error}</p>;

  return (
    <div>
      <h1>API Test Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

// "use client";

// import dynamic from "next/dynamic";

// const WorldMap = dynamic(() => import("./worldmap"), {
//   ssr: false,
// });

// export default function Page() {
//   return (
//     <div style={{ height: "100vh", width: "100%" }}>
//       <h1 style={{ textAlign: "center" }}>🌍 공항 지도</h1>
//       <WorldMap />
//     </div>
//   );
// }
