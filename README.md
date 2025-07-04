# travel_project   
### 포트폴리오에 올릴만한 여행 사이트 프로젝트

----------
1. 기본적인 CRUD 구현
   - CRUD 구현을 통한 UI/UX 디자인 공부
   - 자신의 추가적인 장점을 보완
2. MES/그룹웨어를 제외한 추가적인 포트폴리오 작성 가능
   - MES/그룹웨어로는 취업 시장 힘들 가능성 높음
   - 추가적인 포트폴리오 작성을 통한 취업 성공률 상승
# 참고용

```
src/
├── components/
│   ├── Header.js (네비게이션 바)
│   ├── SearchBar.js (검색창)
│   ├── TravelCard.js (여행지 카드)
│   └── ActivityList.js (액티비티 리스트)
├── pages/
│   ├── index.js (메인 페이지)
│   ├── destination/[id].js (여행지 상세)
│   └── planning/index.js (여행 계획)
└── styles/ (CSS 파일들)
```


## 기술 스택

**프론트엔드**
* **Next.js 15.3.5** - 페이지 라우팅
* **React 19** - UI 라이브러리
* **TypeScript 5** - 타입 안전성
* **Tailwind CSS 4** - 스타일링
* **Zustand 5** - 전역 상태 관리
* **React Hook Form + Zod** - 폼 관리 & 검증
* **Axios** - HTTP 클라이언트
* **Lucide React** - 아이콘 라이브러리
* **Swiper** - 이미지 슬라이더
* **Next Cloudinary** - 이미지 최적화

**백엔드**
* **Node.js** - 런타임
* **Express** - 웹 프레임워크
* **TypeScript** - 타입 안전성
* **Prisma** - ORM
* **PostgreSQL** - 데이터베이스
* **JWT** - 인증

**통신 방식**
* **REST API** - HTTP 요청/응답
* **포트**: 프론트(3000), 백(8000)
* **CORS** 설정으로 서로 통신 가능
