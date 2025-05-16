import Header from "@/app/[locale]/components/Header/Header";
import Footer from "@/app/[locale]/components/Footer";
import "@/app/globals.css";
import { Nunito_Sans } from "next/font/google";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "../../src/i18n/routing";
import  getRequestConfig  from "@/src/i18n/request";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Add weights as needed
});

export const metadata = {
  title: "My Blog",
  description: "A blog built with Next.js App Router",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const { messages } = await getRequestConfig({ requestLocale: Promise.resolve(locale) });

  return (
    <html lang={locale}>
      <body className={`flex flex-col ${nunito.className}`}>
        <Header translations={messages?.Header ?? { services: "", blog: "", contact: "", contactId:"contact" }} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}