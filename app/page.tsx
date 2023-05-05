import Link from "next/link"

export default function Home() {
  return (
    <div className="space-y-3">
      <div className="prose lg:prose-xl">
        <p>
          Cornwall Trail Running is a website dedicated to providing trail
          runners with a comprehensive list of the best routes
          in Cornwall.
        </p>
        <p>
          Whether you are a seasoned trail runner or just starting out, our website is designed to help you find the perfect trail for your ability and interests.
        </p>
        <p>
          With Cornwall&apos;s stunning landscapes, from the rugged coastline to the rolling countryside, we believe that there is no better way to experience the beauty of Cornwall than through trail running.
        </p>
        <p>
          So come explore Cornwall with us and discover the best running experiences the county has to offer.
        </p>
      </div>
      <div>
        <Link href="/trails" className="text-lg font-bold text-blue-500 underline">
          <h2 >
            View All Trails
          </h2>
        </Link>
      </div>
    </div >
  )
}
