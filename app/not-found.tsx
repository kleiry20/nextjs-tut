import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 min-h-screen">
      <h1 className="text-2xl">
        <strong>404</strong>
      </h1>
      <h1>Hey hooman, the page you are looking for does not really exist!</h1>
      <div className="max-h-[300px]">
        <Image
          src={
            "https://media1.tenor.com/m/Z4WPxTQAmlcAAAAd/i-dont-know-dontknow.gif"
          }
          alt="not-found-gif"
          width={0}
          height={0}
          className="w-auto h-[300px]"
        ></Image>
      </div>
    </div>
  );
}
