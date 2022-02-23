import RemoveArea from "../RemoveArea";
import { SideBarItemsWrap, SideBarWrap } from "./SideBar.style";

interface ISideBarProps {
  droppableItemsId: string[];
}

const SideBar: React.FC<ISideBarProps> = ({ droppableItemsId }) => {
  return (
    <SideBarWrap>
      <SideBarItemsWrap>
        <RemoveArea droppableId={droppableItemsId[0]}></RemoveArea>
      </SideBarItemsWrap>
    </SideBarWrap>
  );
};

export default SideBar;
