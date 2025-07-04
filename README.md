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
travel-platform/
├── 📁 app/                    # 페이지들
│   ├── 🏠 (main)/            # 메인 서비스 페이지들
│   │   ├── destinations/     # 여행지 페이지
│   │   ├── activities/       # 액티비티 페이지  
│   │   ├── restaurants/      # 맛집 페이지
│   │   └── festivals/        # 축제 페이지
│   ├── 🔐 (auth)/            # 로그인/회원가입
│   ├── 📱 (social)/          # SNS 피드/게시글
│   └── 🔗 api/               # 백엔드 API들
│
├── 🎨 components/            # UI 컴포넌트들
│   ├── ui/                   # 기본 컴포넌트 (버튼, 카드 등)
│   ├── destinations/         # 여행지 관련 컴포넌트
│   ├── restaurants/          # 맛집 관련 컴포넌트
│   ├── map/                  # 지도 컴포넌트
│   └── social/               # SNS 관련 컴포넌트
│
├── 🔧 lib/                   # 유틸리티 & 설정
│   ├── auth.ts               # 로그인 관련
│   ├── prisma.ts             # 데이터베이스 연결
│   └── api/                  # API 함수들
│
├── 🪝 hooks/                 # 커스텀 훅들
│   ├── useAuth.ts            # 로그인 상태
│   ├── useDestinations.ts    # 여행지 데이터
│   └── useMap.ts             # 지도 기능
│
├── 🏪 store/                 # 상태 관리
│   ├── authStore.ts          # 사용자 상태
│   └── filterStore.ts        # 필터 상태
│
├── 📋 types/                 # 타입 정의
│   ├── destination.ts        # 여행지 타입
│   ├── restaurant.ts         # 맛집 타입
│   └── user.ts               # 사용자 타입
│
└── 💾 prisma/                # 데이터베이스
    └── schema.prisma         # DB 스키마
```

## 💡 핵심 정리

- **app/** = 웹사이트 페이지들
- **components/** = 재사용 가능한 UI 조각들  
- **lib/** = 공통 기능들 (DB, API 등)
- **hooks/** = 데이터 가져오는 함수들
- **store/** = 전역 상태 관리
- **types/** = 타입스크립트 타입들
- **prisma/** = 데이터베이스 설정
