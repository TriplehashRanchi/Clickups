import Side from "@/components/Side";
import Nav from "@/components/Nav";

export default function DashboardLayout({ children }) {
  return (
    <div className="h-screen flex flex-col">
      <Nav />
      <div className="flex w-full flex-1">
        <div className="overflow-hidden">
          <Side />
        </div>
        <div className="w-[1300px] mt-1 border-t border-gray-700 rounded-md overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
