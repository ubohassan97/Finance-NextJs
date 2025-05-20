import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex md:flex-row min-h-screen w-full justify-between items-center font-inter max-sm:py-5 max-sm:gap-8 bg-[#F3F9FF] max-sm:flex-col-reverse">
        {children}
        <div>
          <Image 
            src="/icons/auth-image.svg"
            alt="Auth image"
            width={500}
            height={500}
            className="rounded-l-xl object-contain"
          />
        </div>
    </main>
  );
}