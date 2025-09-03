export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <br />
      &copy; nextjs
    </div>
  );
}
