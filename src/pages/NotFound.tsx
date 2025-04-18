
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 heading-gradient">404</h1>
          <p className="text-xl text-foreground/70 mb-8">Oops! Page not found</p>
          <Link to="/" className="button-primary inline-flex items-center gap-2">
            <Home size={16} /> Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
