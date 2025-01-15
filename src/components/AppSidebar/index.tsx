'use client';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';

import SIDEBAR_MENUS from './menus';

export function AppSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (path: string) => pathname.includes(path);
  const isParentActive = (parentPath: string) =>
    pathname.startsWith(parentPath) && parentPath !== pathname;

  return (
    <Sidebar collapsible="icon" variant="sidebar">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2.5">
              {SIDEBAR_MENUS.map(item => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className="h-11 gap-2.5 rounded-sm px-4 hover:bg-sidebar-hover hover:text-white active:bg-transparent active:text-white data-[active=true]:shadow-md group-data-[collapsible=icon]:!size-11 group-data-[collapsible=icon]:justify-center"
                    isActive={item.submenus ? isParentActive(item.url) : isActive(item.url)}
                    asChild={!Boolean(item.submenus)}
                    onClick={() =>
                      item.submenus ? router.push(item.submenus[0].url) : router.push(item.url)
                    }
                    tooltip={item.title}
                  >
                    {item.submenus ? (
                      <>
                        <div className="size-5 max-w-7 group-data-[collapsible=icon]:size-full">
                          <item.icon />
                        </div>
                        <span className="text-base uppercase group-data-[collapsible=icon]:hidden">
                          {item.title}
                        </span>
                      </>
                    ) : (
                      <Link href={item.url}>
                        <div className="size-5 max-w-7 group-data-[collapsible=icon]:size-full">
                          <item.icon />
                        </div>
                        <span className="text-base uppercase group-data-[collapsible=icon]:hidden">
                          {item.title}
                        </span>
                      </Link>
                    )}
                  </SidebarMenuButton>
                  {item.submenus && (
                    <SidebarMenuSub className="ml-1 mr-0 border-0 py-2.5 pl-2 pr-0">
                      {item.submenus.map(submenu => (
                        <SidebarMenuSubItem key={submenu.title}>
                          <SidebarMenuSubButton
                            isActive={isActive(submenu.url)}
                            onClick={() => router.push(submenu.url)}
                            className="pointer-events-auto h-11 cursor-pointer rounded-sm bg-transparent pl-8 before:absolute before:left-3 before:w-2 before:rounded-full before:bg-white hover:bg-sidebar-hover hover:text-white active:bg-transparent active:text-white data-[active=true]:bg-sidebar-hover data-[active=true]:font-semibold data-[active=true]:text-white data-[active=true]:before:h-2"
                          >
                            <span className="text-base uppercase">{submenu.title}</span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
