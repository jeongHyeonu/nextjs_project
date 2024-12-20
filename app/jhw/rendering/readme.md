
# CSR

Client Side Rendering

[예제 코드](https://github.com/jeongHyeonu/nextjs_project/blob/main/app/jhw/rendering/csr/page.tsx)

구현 방법 :
- "use client" 이용 
- react 훅을 이용

장점 :
 - 필요한 부분만 가져오기 때문에 렌더링 속도가 빠름
 - data 요청이 있을 때만 서버에 요청하기 때문에 초기 이후에 구동속도가 빠르고, 서버에 부담↓
 - 클라이언트 측에서 라우팅과 연산을 처리해 반응속도가 빠르고 UX 우수

단점 :
- 초기 로딩 느림, SEO 성능 ↓

# SSR

Server Side Rendering

[예제 코드](https://github.com/jeongHyeonu/nextjs_project/blob/main/app/jhw/rendering/ssr/page.tsx)

장점
- SEO 성능 ↑
- 서버 요청이므로 보안에 우수 
- 
단점 :
 - 서버 부하 ↑
- 페이지를 요청할 때마다 새로고침이되어 사용자 경험(UX)이 다소 떨어짐

# SSG

Static site Generation

[예제 코드](https://github.com/jeongHyeonu/nextjs_project/blob/main/app/jhw/rendering/ssg/page.tsx)


빌드 시점에 페이지 생성

**기본적으로 next.js는 SSG 방식으로 렌더링한다!**

장점 : 
- SEO가 굉장히 좋음
- 렌더링속도가 빠름

단점 :
- 동적인 데이터 제공 X
  
# ISR

Incremental Static Regeneration

[예제 코드](https://github.com/jeongHyeonu/nextjs_project/blob/main/app/jhw/rendering/isr/page.tsx)

빌드 시점에 페이지 생성은 SSR과 동일하지만, SSR과 다르게 일정 시간 후 페이지를 새로 생성

런타임 중에 정적 페이지를 만들거나 업데이트 수 있도록 해주는 **SSG과 SSR의 하이브리드** 솔루션

장점 :
- SSR과 달리 페이지가 즉시 제공되며(fallback page), 빠른 경험으로 사용자 경험도 좋아진다.

단점 :
- 페이지 디자인에 따라 첫번째 의미있는 페인팅을 지연시킬 수도 있다.

## 정리

 상황에 맞게 렌더링 방식을 잘 적용하면 된다.
 - 검색 엔진에 노출될 필요 없는 개인정보로 이루어진 페이지 : CSR
 - 내용을 업데이트 할 경우가 많거나 검색엔진에 노출되어야 하는 페이지 : SSR
 - 업데이트할 경우가 없는 페이지 : SSG
  
<table>
    <tr>
        <th>렌더링 방식</th>
        <th>데이터 로딩 시점</th>
        <th>주요 장점</th>
        <th>주요 단점</th>
    </tr>
    <tr>
        <td>CSR</td>
        <td>클라이언트</td>
        <td>빠른 인터렉션</td>
        <td>초기 로딩 느림</td>
    </tr>
    <tr>
        <td>SSR</td>
        <td>요청 시 서버</td>
        <td>SEO 최적화, 최신 데이터 제공</td>
        <td>요청 시마다 서버 부하 발생</td>
    </tr>
    <tr>
        <td>SSG</td>
        <td>빌드 시</td>
        <td>빠른 로딩, SEO 최적화</td>
        <td>실시간 데이터 제공 어려움</td>
    </tr>
    <tr>
        <td>ISG</td>
        <td>빌드 시 + 업데이트</td>
        <td>빠른 로딩, 최신 데이터 제공</td>
        <td>설정 복잡성 있음</td>
    </tr>
</table>