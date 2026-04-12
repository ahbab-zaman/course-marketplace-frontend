"use client"
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Home, GraduationCap, Tag, Info, Mail } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

type IconComponentType = React.ElementType<{ className?: string }>;
export interface InteractiveMenuItem {
  label: string;
  icon: IconComponentType;
  href?: string;
}

export interface InteractiveMenuProps {
  items?: InteractiveMenuItem[];
  accentColor?: string;
}

const defaultItems: InteractiveMenuItem[] = [
    { label: 'home', icon: Home, href: '/' },
    { label: 'courses', icon: GraduationCap, href: '/courses' },
    { label: 'pricing', icon: Tag, href: '/pricing' },
    { label: 'about', icon: Info, href: '/about' },
    { label: 'contact', icon: Mail, href: '/contact' },
];

const defaultAccentColor = 'var(--component-active-color-default)';

const InteractiveMenu: React.FC<InteractiveMenuProps> = ({ items, accentColor }) => {
  const router = useRouter();
  const pathname = usePathname();

  const finalItems = useMemo(() => {
     const isValid = items && Array.isArray(items) && items.length >= 2 && items.length <= 5;
     if (!isValid) {
        return defaultItems;
     }
     return items;
  }, [items]);

  // Find active index based on current route
  const currentRouteIndex = finalItems.findIndex(item => item.href === pathname || (item.href !== '/' && pathname?.startsWith(item.href || '')));
  const initialIndex = currentRouteIndex >= 0 ? currentRouteIndex : 0;
  
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  // Sync activeIndex if pathname changes externally
  useEffect(() => {
    const routeIndex = finalItems.findIndex(item => item.href === pathname || (item.href !== '/' && pathname?.startsWith(item.href || '')));
    if (routeIndex >= 0) {
      setActiveIndex(routeIndex);
    }
  }, [pathname, finalItems]);

  const textRefs = useRef<(HTMLElement | null)[]>([]);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const setLineWidth = () => {
      const activeItemElement = itemRefs.current[activeIndex];
      const activeTextElement = textRefs.current[activeIndex];

      if (activeItemElement && activeTextElement) {
        const textWidth = activeTextElement.offsetWidth;
        activeItemElement.style.setProperty('--lineWidth', `${textWidth}px`);
      }
    };

    setLineWidth();

    window.addEventListener('resize', setLineWidth);
    return () => {
      window.removeEventListener('resize', setLineWidth);
    };
  }, [activeIndex, finalItems]);

  const handleItemClick = (index: number, href?: string) => {
    setActiveIndex(index);
    if (href) {
      router.push(href);
    }
  };

  const navStyle = useMemo(() => {
      const activeColor = accentColor || defaultAccentColor;
      return { '--component-active-color': activeColor } as React.CSSProperties;
  }, [accentColor]); 

  return (
    <nav
      className="menu md:hidden fixed bottom-4 left-4 right-4 z-50 rounded-2xl bg-background/90 backdrop-blur-lg border border-border/40 shadow-xl"
      role="navigation"
      style={navStyle}
    >
      <div className="flex justify-around items-center p-2">
        {finalItems.map((item, index) => {
          const isActive = index === activeIndex;
          const isTextActive = isActive;

          const IconComponent = item.icon;

          return (
            <button
              key={item.label}
              className={`menu__item flex flex-col items-center justify-center flex-1 py-2 px-1 transition-all rounded-xl ${isActive ? 'active text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              onClick={() => handleItemClick(index, item.href)}
              ref={(el) => { itemRefs.current[index] = el; }}
              style={{ '--lineWidth': '0px' } as React.CSSProperties} 
            >
              <div className={`menu__icon transition-transform duration-300 ${isActive ? '-translate-y-1' : ''}`}>
                <IconComponent className="icon w-5 h-5" />
              </div>
              <strong
                className={`menu__text text-[10px] font-medium tracking-wide capitalize transition-all duration-300 overflow-hidden ${isTextActive ? 'active max-h-4 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}
                ref={(el) => { textRefs.current[index] = el; }}
              >
                {item.label}
              </strong>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export {InteractiveMenu}
