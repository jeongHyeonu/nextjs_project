// 15버전은 더이상 GetStaticProps 지원 안함
// import { GetStaticProps } from "next";

// type Post = {
//   id: number;
//   title: string;
// };

// type Props = {
//   posts: Post[];
// };

// export default function ISGPage({ posts }: Props) {
//   return (
//     <div>
//       <h1>ISG Page</h1>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// // 빌드 시 데이터 가져오고 지정된 시간 간격으로 다시 빌드
// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
//   const posts: Post[] = await res.json();

//   return {
//     props: { posts },
//     revalidate: 10, // 10초마다 다시 생성
//   };
// };


import React from "react";

type Post = {
  id: number;
  title: string;
};

export default async function ISRPage() {
  // 정적 데이터를 가져오되, 일정 시간 후에 재생성
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", {
    next: { revalidate: 30 }, // 30초마다 다시 정적 생성
  });
  const posts: Post[] = await res.json();

  return (
    <div>
      <h1>ISR Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}