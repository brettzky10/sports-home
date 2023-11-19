import { usePathname, useRouter } from "next/navigation";
import { Home, UserPlus, BookPlus } from "lucide-react";

import { cn } from "@/lib/utils";


const Sidebar = () => {

    const pathname = usePathname();
    const router = useRouter();

    const onNavigate = (url: string) => {
        return router.push(url);
    }

    const routes = [
      {
        icon: BookPlus,
        label: 'Book a Demo',
        href: '/demo',
      },
      {
        icon: Home,
        label: 'Blog',
        href: '/blog',
      },
      {
        icon: UserPlus,
        label: 'Case Studies',
        href: '/cases',
      },
    ];
  
    return (
        <div 
      className="flex flex-col h-full"
    >
          <div className="flex flex-col gap-y-1 px-5 py-4">
            {routes.map((route) => (
              <div onClick={()=> onNavigate(route.href)} key={route.href} className={cn("text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
              pathname === route.href && "bg-primary/10 text-primary")}>
                <div className="flex flex-row gap-x-2 items-center flex-1" >
                    <route.icon className="h-5 w-5" />
                    {route.label}
                </div>
              </div>
            ))}
          </div>
    </div>
    );
}
 
export default Sidebar;