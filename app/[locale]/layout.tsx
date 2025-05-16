import Header from "@/app/[locale]/components/Header/Header";
import Footer from "@/app/[locale]/components/Footer";
import "@/app/globals.css";
import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Add weights as needed
});

export const metadata = {
  title: "My Blog",
  description: "A blog built with Next.js App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`flex flex-col ${nunito.className}`}>
        <Header />
        <main >{children}</main>
        <Footer />
      </body>
    </html>
  );
}