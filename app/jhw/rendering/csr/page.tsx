// CSR은 데이터와 페이지 렌더링을 클라이언트(브라우저)에서 처리하는 방식
// 서버는 단순히 HTML을 반환
// 클라이언트는 JavaScript를 통해 데이터를 가져와 화면을 구성

"use client"

import { useState, useEffect } from "react";

type Post = {
  id: number;
  title: string;
};

export default function CSR() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 클라이언트 측에서 데이터 가져오기
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>CSR Page</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}