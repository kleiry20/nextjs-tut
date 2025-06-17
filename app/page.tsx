import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          // src="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          src={"https://media1.tenor.com/m/_ADbhEcAzzAAAAAd/hello.gif"}
          alt="Next.js logo"
          width={180}
          height={400}
          // priority
        />
      </main>
    </div>
  );
}
