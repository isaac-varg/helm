import { create } from 'zustand'

interface TabBarState {
  activeTabId: string
}

interface TabBarActions {
  actions: {
    setActiveTab: (tabId: string) => void;
  }
}

export const useTabBar = create<TabBarState & TabBarActions>((set) => ({
  activeTabId: 'home',

  actions: {
    setActiveTab: (tabId: string) => set(() => ({ activeTabId: tabId })),

  }
}))

export const useTabBarActions = () => useTabBar((state) => state.actions)


