// api 테스트 용 엔드포인트
// 간단 조회 API만 테스트 용으로 작성
// 실제 서비스에서는 이 API를 사용하지 않음

export const API_TEST_ENDPOINT = {
    // 내부 API 엔드포인트
    INTERNAL: {
        BASE: '/api/apitest',
    },
    // 외부 API 엔드포인트
    EXTERNAL: {
        BASE: 'http://openapi.airport.co.kr/service/rest/DflightScheduleList/getDflightScheduleList',
        SERVICE_KEY: '5Sgsrf6IzG25UuIwJFvj856ZPZUUkqvaLVM69Zx5MgdOL2XdckACj4nSQ8aqfIAC70yHVy7WK5X4HHlrNTmzig%3D%3D',
    },
} as const;
