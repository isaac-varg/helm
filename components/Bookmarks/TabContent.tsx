import SideImage from "../SideImage";
import BookmarkGroup from "./BookmarkGroup";
import AddButton from "../edit/AddButton";
import type { TabData } from "@/lib/types";

interface TabContentProps {
  tab: TabData;
}

const TabContent = ({ tab }: TabContentProps) => {
  const edge = tab.sideImageEdge === "line" ? "line" : "gradient";
  return (
    <>
      <SideImage src={tab.sideImage} alt={tab.sideImageAlt} edge={edge} />
      <div className="flex-1 p-8 space-y-6 overflow-y-auto">
        <div className="space-y-6">
          {tab.sections.map((section) => (
            <BookmarkGroup key={section.id} data={section} />
          ))}
          <AddButton
            target={{ type: "section", id: null, tabId: tab.id }}
            label="Add section"
            className="w-full justify-center py-4"
          />
        </div>
      </div>
    </>
  );
};

export default TabContent;
