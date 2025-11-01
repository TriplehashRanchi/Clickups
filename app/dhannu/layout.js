import { Geist, Geist_Mono } from "next/font/google";
import { SpaceProvide } from "./context/SpaceContext";
import { TeamProvider } from "./context/TeamContext";
import Navbar from "./components/ui/Navbar";
import Sidebar from "./components/ui/Sidebar";
import { ProjectProvider } from "./context/ProjectContext";

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
      className={`${geistSans.variable} ${geistMono.variable} h-screen flex flex-col overflow-y-auto`}
    >
      <SpaceProvide>
        <TeamProvider>
          <ProjectProvider>
            <Navbar />
            <div className="flex w-full flex-1">
              <div className="overflow-hidden">
                <Sidebar />
              </div>
              <div className="w-[1300px] mt-1 border-t border-gray-700 rounded-md overflow-y-auto">
                {children}
              </div>
            </div>
          </ProjectProvider>
        </TeamProvider>
      </SpaceProvide>
    </div>
  );
}
