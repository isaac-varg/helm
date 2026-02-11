import type { ReactNode } from "react";
import SideImage from "../SideImage";
import type { SideImageProps } from "../SideImage";

interface TabContentProps {
  image: SideImageProps;
  children: ReactNode;
}

const TabContent = ({ image, children }: TabContentProps) => {
  return (
    <>
      <SideImage {...image} />
      <div className="flex-1 p-8 space-y-6 overflow-y-auto">
        {children}
      </div>
    </>
  );
};

export default TabContent;
