import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shah Chess Academy",
  description: "Enhance your skills with top-notch chess coaching and training in Ahmedabad. Our expert coaches offer personalized lessons for all levels. Join our program today and master the game of chess!",
  keywords:['Chess coaching','Best online chess coaching','Chess training',' Online chess coaching for kids','Chess coaching for kids'],
  openGraph: {
    images: ['http://shahchessacademy.com/icon.png'],
    description:'Enhance your skills with top-notch chess coaching and training in Ahmedabad. Our expert coaches offer personalized lessons for all levels. Join our program today and master the game of chess!',
    title:'Shah Chess Academy'
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
       
        {children}
      </body>
    </html>
  );
}
