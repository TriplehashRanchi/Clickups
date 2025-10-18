import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = { title: "ClickUps Internal Management" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0D0B14] text-gray-100">
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
