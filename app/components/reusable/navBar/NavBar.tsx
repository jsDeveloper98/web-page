import { Menu } from "antd";
import { ItemType } from "antd/es/menu/hooks/useItems";

interface IProps {
  items: ItemType[];
  activeKey: string;
}

export const NavBar = ({ activeKey, items }: IProps) => {
  return (
    <div className="NavBar overflow-hidden">
      <Menu items={items} mode="horizontal" activeKey={activeKey} />
    </div>
  );
};
