import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import type { FooterProps } from "@/interfaces";

const Footer = ({ className = "" }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`border-t border-gray-800/50 bg-background-card py-12 ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <FontAwesomeIcon icon={faFilm} className="h-4 w-4 text-black" />
              </div>
              <span className="font-display text-lg font-bold text-white">
                Cine<span className="text-primary">Seek</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 max-w-xs">
              Discover your next favorite movie. Browse thousands of films,
              filter by genre and year, and find hidden gems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/movies"
                  className="text-sm text-gray-400 hover:text-primary transition-colors"
                >
                  Browse Movies
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4">
              Connect
            </h3>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-background-secondary text-gray-400 hover:bg-primary hover:text-black transition-all"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-background-secondary text-gray-400 hover:bg-primary hover:text-black transition-all"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} CineSeek. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            Made with{" "}
            <FontAwesomeIcon icon={faHeart} className="h-3 w-3 text-red-500" />{" "}
            for ALX
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
