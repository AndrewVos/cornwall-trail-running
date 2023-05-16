import Link from "next/link"
import trails from "../../data/trails"

export default function Page() {
  return (
    <div className="space-y-3">
      <h2 className="text-3xl font-bold text-gray-700">
        Trails
      </h2>
      {trails.map(trail => (
        <Link key={trail.name} className="block border rounded p-3 hover:bg-gray-50" href={`/trail/${trail.slug}`}>
          <h3 className="text-lg font-bold text-pink-700 mb-3">
            {trail.name}
          </h3>
          <div className="text-lg text-gray-700">
            <span className="font-bold">Distance:</span> {trail.distance} km
          </div>
          <div className="text-lg text-gray-700 mb-3">
            <span className="font-bold">Elevation:</span> {trail.elevation}m
          </div>
          <div className="text-lg text-gray-700">
            {trail.description}
          </div>
        </Link>
      ))
      }
    </div >
  )
}
