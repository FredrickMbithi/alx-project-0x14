import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import type { LayoutProps } from "@/interfaces";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
