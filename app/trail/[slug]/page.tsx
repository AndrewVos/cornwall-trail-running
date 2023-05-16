import Map from "../../../components/Map"
import { PrismaClient } from "@prisma/client";

export default async function Page({ params: { slug } }: { params: { slug: string } }) {
    const prisma = new PrismaClient();
    const trail = await prisma.trail.findUnique({
        where: {
            id: slug,
        },
    })

    return (
        <main className="space-y-2">
            <h2 className='text-3xl font-bold text-gray-600'>
                {trail.name}
            </h2>
            <div className="text-lg text-gray-700">
                <span className="font-bold">Distance:</span> {(trail.distance / 1000).toFixed(1)} km
            </div>
            <div className="text-lg text-gray-700 mb-3">
                <span className="font-bold">Elevation:</span> {(trail.elevation).toFixed(1)} m
            </div>
            <div className="text-lg text-gray-700">
                {trail.description}
            </div>
            <div className="h-[400px] border-2">
                <Map json={JSON.parse(trail.geo)} />
            </div>
        </main>
    )
}
