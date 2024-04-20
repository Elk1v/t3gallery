import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/c24903cc-26bb-4daf-af75-2a0efe571b88-1x1slq.jpeg",
  "https://utfs.io/f/a5535df3-71b1-4e41-95cd-c4ed0c857fde-1n7x8s.jpg",
  "https://utfs.io/f/ddcc359a-250d-4f43-b639-9cf57e6b8459-wd1mdz.jpg",
];

const mockImages = mockUrls.map((url) => ({
  id: crypto.randomUUID(),
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main>
      <div className="flex flex-wrap gap-3">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}

        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id + crypto.randomUUID()} className="w-48">
            <Image src={image.url} alt="image" width={1000} height={200} />
          </div>
        ))}
      </div>
    </main>
  );
}
