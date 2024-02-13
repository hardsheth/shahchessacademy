import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shah Chess Academy",
  description: "Online/Offline Chess Coaching Class",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="siteheader d-flex justify-content-between">
            <div className="d-flex">
            <img src="/asset/chess logo.jpg" alt="" className="img" style={{height:"87px"}} />
            <div className="ms-4 d-flex justify-content-between gap-3 mt-5 w-100">
        
            <h4 className="">Home</h4>
            <h4 className="">About</h4>
            <h4 className="">Programmes</h4>
            <h4 className="">Online Chess Classes</h4>
            <h4 className="">Courses</h4>
            <h4 className="">Contact</h4>
            <h4 className="">FAQ</h4>
            {/* <div className="position-absolute" style={{right:"-10px"}}> */}
            {/* </div> */}
            <button className="btn btn-primary rounded ">Book Trial</button>
            </div>
            </div>
        </div>
        {children}
      </body>
    </html>
  );
}
