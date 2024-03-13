import type {Link, Tooltip} from "#ui/types";


export interface BaseLink extends Link {
    label: string;
    class?: string;
    click?: Function
}

export interface SidebarLink extends BaseLink {
    icon?: string;
    iconClass?: string,
    labelClass?: string;
    tooltip?: Tooltip;
    collapsible?: boolean;
    defaultOpen?: boolean;
    children?: SidebarLink[];
}