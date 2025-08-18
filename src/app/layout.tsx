
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import LanguageToggle from "@/components/LanguageToggle";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Real Estate App",
  description: "Find your dream property",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            <header className="bg-white dark:bg-gray-900 shadow-md py-4 px-8 flex justify-between items-center">
              <div className="flex items-center space-x-8">
                <h1 className="text-2xl font-bold dark:text-white">Real Estate</h1>
                <nav>
                  <ul className="flex space-x-4">
                    <li><a href="/" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">Home</a></li>
                    <li><a href="/properties" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">Properties</a></li>
                  </ul>
                </nav>
              </div>
              <div className="flex items-center space-x-4">
                <LanguageToggle />
                <ThemeToggle />
              </div>
            </header>
            {children}
            <footer className="bg-gray-800 text-white py-8 mt-12">
              <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                  <p>Email: devanshinfravizag@gmail.com</p>
                  <p>Phone: +1 (123) 456-7890</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Office Details</h3>
                  <p>123 Real Estate Ave,</p>
                  <p>City, State, 12345</p>
                  <p>Country</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                  <ul>
                    <li><a href="/" className="hover:underline">Home</a></li>
                    <li><a href="/properties" className="hover:underline">Properties</a></li>
                  </ul>
                </div>
              </div>
              <div className="text-center mt-8 text-gray-500">
                &copy; {new Date().getFullYear()} Real Estate App. All rights reserved.
              </div>
            </footer>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
