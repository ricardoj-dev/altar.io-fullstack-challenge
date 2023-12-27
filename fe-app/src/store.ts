import { create } from "zustand";

type FullstackChallengeState = {
  characters: string[][];
  bias: string;
  code: string;
  updateCharacters: (newCharacters: string[][]) => void;
  updateBias: (newBias: string) => void;
  updateCode: (newCode: string) => void;
};

export const useFullStackChallengeStore = create<FullstackChallengeState>(
  (set) => ({
    characters: [],
    bias: "",
    code: "00",
    updateCharacters: (newCharacters) =>
      set(() => ({ characters: newCharacters })),
    updateBias: (newBias) => set(() => ({ bias: newBias })),
    updateCode: (newCode) => set(() => ({ code: newCode })),
  })
);
