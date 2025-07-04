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

## 프론트엔드 (React + Next.js)
```
frontend/
├── src/
│   ├── app/                # Next.js 페이지들
│   │   ├── page.tsx           # 메인 페이지
│   │   ├── destinations/      # 여행지 페이지
│   │   ├── activities/        # 액티비티 페이지
│   │   ├── restaurants/       # 맛집 페이지
│   │   ├── festivals/         # 축제 페이지
│   │   ├── login/             # 로그인 페이지
│   │   ├── feed/              # SNS 피드
│   │   └── profile/           # 프로필 페이지
│   │
│   ├── components/         # UI 컴포넌트들
│   │   ├── ui/                # 기본 컴포넌트
│   │   ├── destinations/      # 여행지 컴포넌트
│   │   ├── restaurants/       # 맛집 컴포넌트
│   │   ├── map/               # 지도 컴포넌트
│   │   ├── social/            # SNS 컴포넌트
│   │   └── layout/            # 레이아웃 컴포넌트
│   │
│   ├── services/           # API 호출 함수들
│   │   ├── destinationApi.ts  # 여행지 API
│   │   ├── restaurantApi.ts   # 맛집 API
│   │   ├── authApi.ts         # 인증 API
│   │   └── socialApi.ts       # SNS API
│   │
│   ├── 🪝 hooks/              # 커스텀 훅들
│   │   ├── useAuth.ts         # 로그인 상태
│   │   ├── useDestinations.ts # 여행지 데이터
│   │   └── useMap.ts          # 지도 기능
│   │
│   ├── store/              # 상태 관리
│   │   ├── authStore.ts       # 사용자 상태
│   │   └── filterStore.ts     # 필터 상태
│   │
│   └── types/              # 타입 정의
│       ├── destination.ts     # 여행지 타입
│       ├── restaurant.ts      # 맛집 타입
│       └── user.ts            # 사용자 타입
│
├── package.json
├── next.config.js
├── tailwind.config.js
└── .env.local
```

## 백엔드 (Node.js + Express)
```
backend/
├── src/
│   ├── app.ts              # Express 앱 설정
│   ├── routes/             # API 라우트들
│   │   ├── auth.ts            # 인증 라우트
│   │   ├── destinations.ts    # 여행지 라우트
│   │   ├── activities.ts      # 액티비티 라우트
│   │   ├── restaurants.ts     # 맛집 라우트
│   │   ├── festivals.ts       # 축제 라우트
│   │   ├── posts.ts           # SNS 게시글 라우트
│   │   └── upload.ts          # 파일 업로드 라우트
│   │
│   ├── controllers/        # 비즈니스 로직
│   │   ├── authController.ts  # 인증 컨트롤러
│   │   ├── destinationController.ts # 여행지 컨트롤러
│   │   ├── restaurantController.ts  # 맛집 컨트롤러
│   │   └── socialController.ts      # SNS 컨트롤러
│   │
│   ├── middleware/         # 미들웨어
│   │   ├── auth.ts            # 인증 미들웨어
│   │   ├── cors.ts            # CORS 설정
│   │   └── errorHandler.ts    # 에러 처리
│   │
│   ├── models/             # 데이터베이스 모델
│   │   ├── User.ts            # 사용자 모델
│   │   ├── Destination.ts     # 여행지 모델
│   │   ├── Restaurant.ts      # 맛집 모델
│   │   └── Post.ts            # 게시글 모델
│   │
│   ├── services/           # 외부 API 연동
│   │   ├── weatherService.ts  # 날씨 API
│   │   ├── mapService.ts      # 지도 API
│   │   └── uploadService.ts   # 파일 업로드
│   │
│   └── 🛠utils/              # 유틸리티
│       ├── database.ts        # DB 연결
│       ├── jwt.ts             # JWT 토큰
│       └── validation.ts      # 유효성 검사
│
├── prisma/                 # 데이터베이스
│   └── schema.prisma          # DB 스키마
│
├── package.json
├── tsconfig.json
└── .env
```

## 기술 스택

### 프론트엔드
- **Next.js 14** - 페이지 라우팅
- **React** - UI 라이브러리
- **TypeScript** - 타입 안전성
- **Tailwind CSS** - 스타일링
- **Zustand** - 상태 관리
- **React Query** - 서버 상태 관리

### 백엔드
- **Node.js** - 런타임
- **Express** - 웹 프레임워크
- **TypeScript** - 타입 안전성
- **Prisma** - ORM
- **PostgreSQL** - 데이터베이스
- **JWT** - 인증

## 통신 방식
- **REST API** - HTTP 요청/응답
- **포트**: 프론트(3000), 백(8000)
- **CORS** 설정으로 서로 통신 가능!
