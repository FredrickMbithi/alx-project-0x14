import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFilm } from "@fortawesome/free-solid-svg-icons";
import Layout from "@/components/layout/Layout";
import Button from "@/components/ui/Button";

const NotFoundPage = () => {
  return (
    <Layout>
      <section className="min-h-[70vh] flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <FontAwesomeIcon
              icon={faFilm}
              className="h-24 w-24 text-gray-600 mx-auto"
            />
          </div>
          <h1 className="font-display text-6xl font-bold text-white mb-4">
            404
          </h1>
          <h2 className="font-display text-2xl font-semibold text-gray-300 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/">
              <Button variant="primary" className="gap-2">
                <FontAwesomeIcon icon={faHome} className="h-4 w-4" />
                Go Home
              </Button>
            </Link>
            <Link href="/movies">
              <Button variant="outline" className="gap-2">
                <FontAwesomeIcon icon={faFilm} className="h-4 w-4" />
                Browse Movies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFoundPage;
