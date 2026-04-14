import { TabBar } from "./TabBar";
import type { TabData } from "@/lib/types";

const Tabs = ({ tabs }: { tabs: TabData[] }) => <TabBar tabs={tabs} />;

export default Tabs;
