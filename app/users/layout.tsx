export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* common for all children within "users" */}
      <h1 className="text-amber-600">This is the User Layout</h1>
      {children}
    </>
  );
}
