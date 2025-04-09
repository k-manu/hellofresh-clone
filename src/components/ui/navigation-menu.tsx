import React from "react";
import Link from "next/link";

interface NavigationMenuProps {
  children: React.ReactNode;
  className?: string;
}

export const NavigationMenu = ({ children, className = "" }: NavigationMenuProps) => {
  return <nav className={`relative ${className}`}>{children}</nav>;
};

export const NavigationMenuList = ({ children, className = "" }: NavigationMenuProps) => {
  return <ul className={`flex list-none space-x-2 ${className}`}>{children}</ul>;
};

export const NavigationMenuItem = ({ children, className = "" }: NavigationMenuProps) => {
  return <li className={`relative ${className}`}>{children}</li>;
};

interface NavigationMenuTriggerProps extends NavigationMenuProps {
  onClick?: () => void;
}

export const NavigationMenuTrigger = ({ 
  children, 
  className = "", 
  onClick 
}: NavigationMenuTriggerProps) => {
  return (
    <button 
      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium hover:text-orange-600 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const NavigationMenuContent = ({ children, className = "" }: NavigationMenuProps) => {
  return (
    <div className={`absolute left-0 top-full z-10 mt-2 min-w-[200px] rounded-md border border-gray-200 bg-white p-2 shadow-md ${className}`}>
      {children}
    </div>
  );
};

interface NavigationMenuLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export const NavigationMenuLink = ({ 
  children, 
  href, 
  className = "" 
}: NavigationMenuLinkProps) => {
  return (
    <Link 
      href={href} 
      className={`block px-4 py-2 text-sm hover:bg-gray-100 hover:text-orange-600 ${className}`}
    >
      {children}
    </Link>
  );
}; 