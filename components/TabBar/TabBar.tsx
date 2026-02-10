'use client'
import { useTabBar, useTabBarActions } from "@/store/tabBarSlice";
import { motion } from "motion/react";
import type { IconType } from "react-icons";

export interface Tab {
  id: string;
  label: string;
  icon: IconType;
}

interface TabBarProps {
  tabs: Tab[];
}

export const TabBar = ({ tabs }: TabBarProps) => {

  const { activeTabId } = useTabBar()
  const { setActiveTab } = useTabBarActions()

  const onTabChange = (tabId: string) => {

    setActiveTab(tabId)
  }

  return (
    <div className="fixed left-1/2 bottom-8 -translate-x-1/2 z-20">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="backdrop-blur-xl bg-white/10 rounded-full border border-white/20 shadow-2xl px-2 py-2"
      >
        <div className="flex items-center gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTabId === tab.id;

            return (
              <motion.button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`relative px-6 py-3 rounded-full transition-colors duration-300 ${isActive ? "text-white" : "text-white/50 hover:text-white/80"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabBg"
                    className="absolute inset-0 bg-linear-to-r from-pink-500/30 to-purple-500/30 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <div className="relative flex items-center gap-2">
                  <Icon className="w-5 h-5" />
                  {isActive && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      className="text-sm font-medium overflow-hidden whitespace-nowrap"
                    >
                      {tab.label}
                    </motion.span>
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

