import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from './ui/collapsible';

// Menu items.
const items = [
    {
        title: 'Home',
        url: '/',
        icon: Home,
    },
    {
        title: 'Users',
        url: '/users',
        icon: Inbox,
    },
    {
        title: 'Calendar',
        url: '#',
        icon: Calendar,
    },
    {
        title: 'Search',
        url: '#',
        icon: Search,
    },
    {
        title: 'Settings',
        url: '#',
        icon: Settings,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader />
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map(item => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}

                            <Collapsible
                                defaultOpen
                                className="group/collapsible"
                            >
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton>
                                            {' '}
                                            <Home /> Dropdown
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuSubButton>
                                                    Item 1
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubButton>
                                                Item 2
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    );
}
