'use client'
import { LuBriefcase, LuFlower2, LuHouse, LuSparkles } from "react-icons/lu"
import { Fragment } from "react/jsx-runtime"
import { Tab, TabBar } from "./TabBar"

const tabs: Tab[] = [
  { id: "home", label: "Home", icon: LuHouse },
  { id: "work", label: "Work", icon: LuBriefcase },
  { id: "entertainment", label: "Fun", icon: LuSparkles },
  { id: "zen", label: "Zen", icon: LuFlower2 },
]
const Tabs = () => {
  return (
    <Fragment>
      <TabBar tabs={tabs} />
    </Fragment>
  )
}

export default Tabs
