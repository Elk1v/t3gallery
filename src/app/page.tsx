import Image from "next/image";

const mockUrls = [
  "https://utfs.io/f/c24903cc-26bb-4daf-af75-2a0efe571b88-1x1slq.jpeg",
  "https://utfs.io/f/a5535df3-71b1-4e41-95cd-c4ed0c857fde-1n7x8s.jpg",
  "https://utfs.io/f/ddcc359a-250d-4f43-b639-9cf57e6b8459-wd1mdz.jpg",
];

const mockImages = mockUrls.map((url) => ({
  id: crypto.randomUUID(),
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-3">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <Image src={image.url} alt="image" width={1000} height={200} />
          </div>
        ))}
      </div>
    </main>
  );
}
