import axios from 'axios';
import { NextResponse } from 'next/server';

const ENCODING_KEY = '5Sgsrf6IzG25UuIwJFvj856ZPZUUkqvaLVM69Zx5MgdOL2XdckACj4nSQ8aqfIAC70yHVy7WK5X4HHlrNTmzig%3D%3D'; // Encoding 키 복사

export async function GET() {
  const URL = `http://openapi.airport.co.kr/service/rest/DflightScheduleList/getDflightScheduleList?schDate=20250701&schDeptCityCode=GMP?schArrvCityCode=PUS?ServiceKey=${ENCODING_KEY}&pageNo=1&_type=json`;

  try {
    const result = await axios.get(URL);
    return NextResponse.json(result.data);
  } catch (error: unknown) {
    console.error('서버 API 호출 실패:', error);
    return NextResponse.json({ error: 'API 호출 실패' }, { status: 500 });
  }
}
