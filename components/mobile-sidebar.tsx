import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar";


export const MobileSidebar = ({
}: {
}) => {
  return (
    <Sheet>
      <SheetTrigger className="pr-4">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-secondary pt-10 w-64">
        <Sidebar/>
      </SheetContent>
    </Sheet>
  );
};