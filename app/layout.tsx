import "./globals.css";
import { ReactQueryClientProvider } from "@/providers/ReactQueryClientProvider";

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
      <body className="bg-gray-50 text-gray-900">
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
      </body>
    </html>
  );
}