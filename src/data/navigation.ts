// Re-exported from content collection: src/content/siteContent/navigation.json
import navigationData from '../content/siteContent/navigation.json';

export interface NavItem {
  label: string;
  href: string;
}

export const mainNavItems: NavItem[] = navigationData.navigation.mainNavItems;
export const footerNavLinks: NavItem[] =
  navigationData.navigation.footerNavLinks;
export const footerInfoLinks: NavItem[] =
  navigationData.navigation.footerInfoLinks;
