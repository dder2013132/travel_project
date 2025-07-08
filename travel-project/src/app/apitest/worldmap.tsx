"use client";

import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import L, { GeoJSON as LeafletGeoJSON, LeafletMouseEvent } from "leaflet";
import "leaflet/dist/leaflet.css";
import countries from "@/data/world-countries.json";

// 🛠 아이콘 경로 fix (향후 마커 쓸 때 대비)
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

const WorldMap = () => {
    const highlightStyle: L.PathOptions = {
        weight: 2,
        color: "#f53",
        fillColor: "#f53",
        fillOpacity: 0.5,
    };

    const resetStyle: L.PathOptions = {
        weight: 1,
        color: "#3388ff",
        fillColor: "#3388ff",
        fillOpacity: 0.3,
    };

    const onEachCountry = (feature: any, layer: LeafletGeoJSON) => {
        layer.on({
            mouseover: (e: LeafletMouseEvent) => {
                e.target.setStyle(highlightStyle);
            },
            mouseout: (e: LeafletMouseEvent) => {
                e.target.setStyle(resetStyle);
            },
            click: (e: LeafletMouseEvent) => {
                const map = e.target._map;
                map.fitBounds(e.target.getBounds());
            },
        });
    };

    return (
        <MapContainer
            center={[20, 0]}
            zoom={2}
            style={{ height: "80vh", width: "100%" }}
            worldCopyJump={false} // 🌟 무한 이어짐 비활성화
            maxBoundsViscosity={1.0} // 경계 바깥으로 안 나가게
            maxBounds={[
                [-90, -180], // 남서쪽 경계
                [90, 180],   // 북동쪽 경계
            ]}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            />

            {/* 🌍 국가 강조 */}
            <GeoJSON
                data={countries as any}
                style={resetStyle}
                onEachFeature={onEachCountry}
            />
        </MapContainer>
    );
};

export default WorldMap;
