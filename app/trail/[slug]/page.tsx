import Map from "../../../components/Map"
import trails from "../../../data/trails"

export default function Home({ params: { slug } }: { params: { slug: string } }) {
    const trail = trails.filter(t => t.slug == slug)[0]

    return (
        <main className="space-y-2">
            <h2 className='text-3xl font-bold text-gray-600'>
                {trail.name}
            </h2>
            <div className="text-lg text-gray-700">
                {trail.description}
            </div>
            <div className="h-[400px] border-2">
                <Map json={trail.json} />
            </div>
        </main>
    )
}
