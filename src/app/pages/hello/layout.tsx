export default function DashboardLayout({
  children, // Will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="md:container md:mx-auto">
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>caca</nav>

      {children}
    </section>
  );
}
