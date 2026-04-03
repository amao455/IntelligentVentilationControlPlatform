import { create } from 'zustand';

interface AppState {
  selectedMine: string;
  rightPanelVisible: boolean;
  lastRefreshTime: string;
  setSelectedMine: (mine: string) => void;
  toggleRightPanel: () => void;
  touchRefresh: () => void;
}

function nowLabel() {
  return new Date().toLocaleString('zh-CN', {
    hour12: false,
  });
}

export const useAppStore = create<AppState>((set) => ({
  selectedMine: 'east-mine',
  rightPanelVisible: false,
  lastRefreshTime: nowLabel(),
  setSelectedMine: (mine) => set({ selectedMine: mine }),
  toggleRightPanel: () => set((state) => ({ rightPanelVisible: !state.rightPanelVisible })),
  touchRefresh: () => set({ lastRefreshTime: nowLabel() }),
}));
