import "./globals.css";
import { ReactQueryClientProvider } from "@/providers/ReactQueryClientProvider";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog Explorer",
  description: "Explore JSONPlaceholder posts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-gray-50 text-gray-900 ${inter.className}`}>
        <ReactQueryClientProvider>

          <ErrorBoundary>{children}</ErrorBoundary>
          </ReactQueryClientProvider>
      </body>
    </html>
  );
}