
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { 
  Award, 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  Home, 
  LogOut, 
  MapPin, 
  Package, 
  Settings, 
  Truck, 
  Users 
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface AdminSidebarProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ collapsed, setCollapsed }) => {
  const location = useLocation();
  const isMobile = useIsMobile();
  
  const navItems = [
    { path: '/admin', label: 'Dashboard', icon: <Home className="h-5 w-5" /> },
    { path: '/admin/pickups', label: 'Pickups', icon: <Truck className="h-5 w-5" /> },
    { path: '/admin/inventory', label: 'Inventory', icon: <Package className="h-5 w-5" /> },
    { path: '/admin/users', label: 'Users', icon: <Users className="h-5 w-5" /> },
    { path: '/admin/locations', label: 'Locations', icon: <MapPin className="h-5 w-5" /> },
    { path: '/admin/rewards', label: 'Rewards', icon: <Award className="h-5 w-5" /> },
    { path: '/admin/schedule', label: 'Schedule', icon: <Calendar className="h-5 w-5" /> },
    { path: '/admin/settings', label: 'Settings', icon: <Settings className="h-5 w-5" /> },
  ];

  return (
    <div 
      className={cn(
        "h-screen bg-sidebar text-sidebar-foreground flex flex-col border-r transition-all duration-300 ease-in-out",
        collapsed ? "w-[70px]" : "w-[250px]"
      )}
    >
      {/* Logo and toggle */}
      <div className="p-4 border-b flex items-center justify-between">
        {!collapsed && (
          <div className="flex items-center">
            <div className="text-ewaste-green-500 h-6 w-6 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21,15a1,1,0,0,0-1-1h-.764l-.9-2.708A1,1,0,0,0,17.439,11H16a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1h2V3a1,1,0,0,0-1-1H7A1,1,0,0,0,6,3V15h.589L5.5,12.392A1,1,0,0,0,4.561,12H3a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1h.92l-1.313,2.633A1,1,0,0,0,3.5,20H5a1,1,0,0,0,.8-.4L8,16.333,10.2,19.6a1,1,0,0,0,.8.4h1.5a1,1,0,0,0,.77-.37l2.73-3.413L18.2,19.6a1,1,0,0,0,.8.4h1.5a1,1,0,0,0,.894-1.447L20.081,16H20A1,1,0,0,0,21,15ZM4,14V13H4.94l.333,1Zm14,0-.333-1H18v1ZM14,7h1a1,1,0,0,1,0,2H14a1,1,0,0,1,0-2ZM8,5h8V9H14V8a3,3,0,0,0-3-3H8Zm1,12.667L7.2,16H4.5l1-2H9ZM16,11V10h1.439L18,12.333V13H16Zm3.5,7H19l-1-2h2Z" />
              </svg>
            </div>
            <span className="font-semibold text-lg">Admin</span>
          </div>
        )}
        {collapsed && (
          <div className="mx-auto text-ewaste-green-500 h-6 w-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21,15a1,1,0,0,0-1-1h-.764l-.9-2.708A1,1,0,0,0,17.439,11H16a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1h2V3a1,1,0,0,0-1-1H7A1,1,0,0,0,6,3V15h.589L5.5,12.392A1,1,0,0,0,4.561,12H3a1,1,0,0,0-1,1v2a1,1,0,0,0,1,1h.92l-1.313,2.633A1,1,0,0,0,3.5,20H5a1,1,0,0,0,.8-.4L8,16.333,10.2,19.6a1,1,0,0,0,.8.4h1.5a1,1,0,0,0,.77-.37l2.73-3.413L18.2,19.6a1,1,0,0,0,.8.4h1.5a1,1,0,0,0,.894-1.447L20.081,16H20A1,1,0,0,0,21,15ZM4,14V13H4.94l.333,1Zm14,0-.333-1H18v1ZM14,7h1a1,1,0,0,1,0,2H14a1,1,0,0,1,0-2ZM8,5h8V9H14V8a3,3,0,0,0-3-3H8Zm1,12.667L7.2,16H4.5l1-2H9ZM16,11V10h1.439L18,12.333V13H16Zm3.5,7H19l-1-2h2Z" />
            </svg>
          </div>
        )}
        {!isMobile && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            className="h-8 w-8"
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-grow py-4 overflow-y-auto">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link to={item.path}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start",
                      isActive 
                        ? "bg-sidebar-accent text-sidebar-accent-foreground"
                        : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    )}
                  >
                    <span className="mr-2">{item.icon}</span>
                    {!collapsed && <span>{item.label}</span>}
                  </Button>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User account */}
      <div className="p-4 border-t">
        <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-700 hover:bg-red-100">
          <LogOut className="h-5 w-5 mr-2" />
          {!collapsed && <span>Logout</span>}
        </Button>
      </div>
    </div>
  );
};

export default AdminSidebar;
