import { Footer, NavBar } from "@/components";
import "./globals.css";
// const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Car Hub",
  description: "Discover world's best cars for rent",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
      <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
