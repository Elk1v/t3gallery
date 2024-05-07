import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <main>
      <div className="flex flex-wrap gap-3">
        {images.map((image) => (
          <div key={image.id + crypto.randomUUID()} className="w-48">
            <span>{image.name}</span>
            <Image src={image.url} alt="image" width={1000} height={200} />
          </div>
        ))}
      </div>
    </main>
  );
}
