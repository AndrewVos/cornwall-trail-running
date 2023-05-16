import { PrismaClient } from "@prisma/client";
import { auth } from '@clerk/nextjs';

export default async function Page() {
  const prisma = new PrismaClient();
  const { userId } = auth();
  if (!userId) {
    throw new Error("not signed in")
  }

  const trails = await prisma.trail.findMany({
    where: {
      userId
    },
  })

  return (
    <div className="space-y-3">
      <div>
        {trails.map(trail => (
          <div key={trail.id}>
            {trail.title}
          </div>
        ))}
      </div>
    </div >
  )
}
