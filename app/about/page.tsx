import { Metadata } from "next";
import ButtonComponent from "./button";

// Server Component (by default)
// can use async await to directly fetch APIs - without useEffect

export const metadata: Metadata = {
  title: "About Us",
  description: "A lot of keywords here",
  keywords: "about, company, saas, ai, startups",
};

export default async function About() {
  console.log("Is this a server component or client component?");

  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const data = await res.json();
  console.log(data);

  return (
    <div>
      <h3>About Page</h3>
      <ButtonComponent />
    </div>
  );
}
