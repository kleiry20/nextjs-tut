async function makeFriend() {
  const res = await fetch(`${process.env.NEXT_URL}/api/hello`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "Anushka" }),
  });

  const data = await res.json();
  return { data };
}

export default async function Friends() {
  const { data } = await makeFriend();

  return (
    <>
      <h2>Hi {data.message}, this is the Friends component!</h2>
    </>
  );
}
