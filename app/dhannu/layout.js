import { Geist, Geist_Mono } from "next/font/google";
import { SpaceProvide } from "./context/SpaceContext";
import { TeamProvider } from "./context/TeamContext";
import Navbar from "./components/ui/Navbar";
import Sidebar from "./components/ui/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} h-screen flex flex-col`}
    >
      <SpaceProvide>
        <TeamProvider>
          <Navbar />
          <div className="flex w-full flex-1">
            <div className="overflow-hidden">
              <Sidebar />
            </div>
            <div className="w-[1300px] mt-1 border-t border-gray-700 rounded-md overflow-y-auto">
              {children}
            </div>
          </div>
        </TeamProvider>
      </SpaceProvide>
    </div>
  );
}
