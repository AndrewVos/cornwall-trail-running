"use client"
import { Map as PigeonMap, Marker, ZoomControl, GeoJson } from "pigeon-maps"

export default function Map({ json }: { json: any }) {
    const start = json.features[0].geometry.coordinates[0]
    const center: [number, number] = [start[1], start[0]]

    return (
        <PigeonMap defaultCenter={center} defaultZoom={14}>
            <ZoomControl />
            <GeoJson
                data={json}
                styleCallback={(feature: any, hover: any) => {
                    if (feature.geometry.type === "LineString") {
                        return { strokeWidth: "5", stroke: "black" };
                    }
                    return {
                        fill: "#d4e6ec99",
                        strokeWidth: "1",
                        stroke: "white",
                        r: "20",
                    };
                }}
            />
            <Marker width={50} anchor={center} />

        </PigeonMap>
    )
}