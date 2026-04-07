export function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
      <ol className="flex items-center gap-2">
        <li>Home</li>
        <li>/</li>
        <li className="text-foreground">Courses</li>
      </ol>
    </nav>
  );
}
