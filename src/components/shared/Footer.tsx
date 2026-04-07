export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12 px-6">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Course Marketplace. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">{/* Social Links */}</div>
      </div>
    </footer>
  );
}
