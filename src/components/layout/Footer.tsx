import { Film, Github, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import type { FooterProps } from "@/interfaces";
import { cn } from "@/lib/utils";

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn("border-t border-border/50 bg-card/50", className)}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Film className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="font-display text-lg font-bold text-foreground">
                Cine<span className="text-primary">Seek</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Discover your next favorite film. Explore thousands of movies, 
              filter by genre and year, and find hidden cinematic gems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold text-foreground">
              Explore
            </h4>
            <ul className="space-y-2">
              {["Home", "Movies", "Top Rated", "New Releases"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : "/movies"}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 font-display text-sm font-semibold text-foreground">
              Connect
            </h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/50 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/50 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CineSeek. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Powered by MoviesDatabase API
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
