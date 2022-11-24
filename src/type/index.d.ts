export interface MenuItem {
  id: string;
  title: string;
  children?: MenuItem[];
  icon?: any;
  path: string;
}
