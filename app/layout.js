import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";

export const metadata = {
  title: "IMS",
  description: "Internal Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
