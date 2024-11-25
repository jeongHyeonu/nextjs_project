// SSR은 페이지 요청 시 서버에서 데이터를 가져와 HTML을 생성한 후 클라이언트로 전달
// 초기 로딩 속도가 빠르고 SEO에 유리

// next.js version15 는 getServerSideProps와 같은 기존의 데이터 패칭 메서드가 지원 안됨

// import { GetServerSideProps } from "next";
// type Post = {
//   id: number;
//   title: string;
// };
// type Props = {
//   posts: Post[];
// };
// // 서버에서 데이터 가져오기
// export const getServerSideProps: GetServerSideProps<Props> = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
//   const posts: Post[] = await res.json();
//   return {
//     props: { posts },
//   };
// };
// export default function SSR({ posts }: Props) {
//     return (
//       <div>
//         <h1>SSR Page</h1>
//         <ul>
//           {posts.map((post) => (
//             <li key={post.id}>{post.title}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }


import React from "react";

type Post = {
  id: number;
  title: string;
};

export default async function SSR() {
  // 서버 측에서 데이터를 가져옴
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", {
    cache: "no-store", // SSR 방식으로 요청을 강제 처리
  });
  const posts: Post[] = await res.json();

  return (
    <div>
      <h1>SSR Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}