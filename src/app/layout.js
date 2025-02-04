import { Geist, Geist_Mono ,Roboto} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/server/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const roboto=Roboto({
  weight:["400","700"], 
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
// lot of meta data for seo optimization 
export const metadata = {
  title: {
    default:"Next Hero",
    template:"%s | Next Hero"
  },
  description: "A Superpower I got from Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={roboto.className}
      >
      <AuthProvider>

        <Navbar />
        <div className="my-10">
          {children}
        </div>
        <footer className="bg-blue-200 text-gray-800 text-center p-12">
          This is footer
        </footer>
      </AuthProvider>
      </body>
    </html>
  )
}


