const axios = require("axios");
const fs = require("fs/promises");
const path = require("path");

const ENCODING_KEY = '5Sgsrf6IzG25UuIwJFvj856ZPZUUkqvaLVM69Zx5MgdOL2XdckACj4nSQ8aqfIAC70yHVy7WK5X4HHlrNTmzig%3D%3D';
const API_URL = "http://openapi.airport.co.kr/service/rest/AirportCodeList/getAirportCodeList";
const OUTPUT_FILE = path.join(process.cwd(), "data", "airport_codes.json");
const DELAY_MS = 500; // API 호출 제한 대비

async function fetchAirportCodes() {
  const allAirports = [];
  let page = 1;
  let totalPages = 1;

  try {
    do {
      console.log(`📦 페이지 ${page} 요청 중...`);

      const response = await axios.get(`${API_URL}?serviceKey=${ENCODING_KEY}&pageNo=${page}&numOfRows=100&_type=json`);

      const body = response.data.response.body;
      const items = body.items?.item || [];
      totalPages = Math.ceil(body.totalCount / body.numOfRows);

      allAirports.push(...items);
      console.log(`✅ 페이지 ${page}/${totalPages} 완료`);

      page++;
      await new Promise((res) => setTimeout(res, DELAY_MS));
    } while (page <= totalPages);

    // 📂 JSON 파일로 저장
    await fs.mkdir(path.dirname(OUTPUT_FILE), { recursive: true });
    await fs.writeFile(OUTPUT_FILE, JSON.stringify(allAirports, null, 2), "utf-8");

    console.log(`🎉 공항코드 ${allAirports.length}개 저장 완료: ${OUTPUT_FILE}`);
  } catch (err) {
    console.error("🔥 에러 발생:", err.message);
  }
}

fetchAirportCodes();
