import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const STATIC_FILES = ['/sitemap.xml', '/robots.txt', '/favicon.ico'];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // If it's a static file, force a real browser navigation (bypasses React Router)
    if (STATIC_FILES.some(f => location.pathname === f)) {
      window.location.href = location.pathname;
      return;
    }
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  // Don't render 404 UI for static files
  if (STATIC_FILES.some(f => location.pathname === f)) {
    return null;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
