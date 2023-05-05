import Link from "next/link"
import trails from "../data/trails"

export default function Home() {
  return (
    <div className="space-y-3">
      {trails.map(trail => (
        <div key={trail.name} className="border rounded p-3">
          <Link className="text-blue-500 text-lg " href={`/trail/${trail.slug}`}>
            <h3>
              {trail.name}
            </h3>
          </Link>
          <div className="text-lg text-gray-700">
            <span className="font-bold">Distance:</span> {trail.distance} km
          </div>
          <div className="text-lg text-gray-700 mb-3">
            <span className="font-bold">Elevation:</span> {trail.elevation}m
          </div>
          <div className="text-lg text-gray-700">
            {trail.description}
          </div>
        </div>
      ))
      }
    </div >
  )
}
