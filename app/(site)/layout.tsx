import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LayoutShell from "@/components/Layout";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutShell>
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutShell>
  );
}
