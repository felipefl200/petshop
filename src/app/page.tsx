import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#5dc9a8] min-h-screen">
      <Image src='/petsoft-preview.png' width={519} height={472} alt="PetShop" />
      <div>Home Page</div>
    </main>
  );
}
