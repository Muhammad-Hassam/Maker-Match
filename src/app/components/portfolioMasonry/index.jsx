import Image from "next/image";

export default function MasonryGallery() {
  const columns = [
    ["image.jpg", "image-1.jpg", "image-2.jpg"],
    ["image-3.jpg", "image-4.jpg", "image-5.jpg"]
  ];

  return (
    <div className="grid grid-cols-2 gap-4 w-full md:max-w-8xl mx-auto px-2 md:px-8">
      {columns.map((col, colIdx) => (
        <div key={colIdx} className="grid gap-4">
          {col.map((img, i) => (
            <div key={i} className="w-full">
              <Image
                src={`https://flowbite.s3.amazonaws.com/docs/gallery/masonry/${img}`}
                alt={`Gallery ${colIdx}-${i}`}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
