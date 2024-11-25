// 15 버전은 GetStaticProps 메서드 더이상 지원 안함

// import { GetStaticProps } from "next";

// type Post = {
//   id: number;
//   title: string;
// };

// type Props = {
//   posts: Post[];
// };

// export default function SSG({ posts }: Props) {
//   return (
//     <div>
//       <h1>SSG Page</h1>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// // 빌드 시 데이터 가져오기
// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
//   const posts: Post[] = await res.json();

//   return {
//     props: { posts },
//   };
// };

type Post = {
  id: number;
  title: string;
};

export default async function SSG() {
    // 정적 데이터를 가져옴 (캐싱 처리로 SSG 지원)
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", {
      //next: { revalidate: 60 }, // 60초마다 다시 정적 생성
    });
    const posts: Post[] = await res.json();
  
    return (
      <div>
        <h1>SSG Page</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }