import { useCallback, useState } from "react";
import { IPickominoGame } from "../types";

type Save = {
  id: number;
  date: Date;
  game: IPickominoGame;
};

const localStorageSavesKey = "PICKOMINO";

export function useSaves() {
  const [saves, setSaves] = useState<Save[]>(() => {
    const res = localStorage.getItem(localStorageSavesKey);
    if (!res) return [];
    const saves: Save[] = JSON.parse(res);
    return saves;
  });

  const saveGame = useCallback((game: IPickominoGame, id?: number) => {
    setSaves((saves) => {
      const previousSaveIndex = saves.findIndex((s) => s.id === (id ?? 0));
      const newSaves: Save[] =
        previousSaveIndex < 0
          ? [
              ...saves,
              {
                id: saves.reduce((p, c) => (p < c.id ? c.id : p), 0) + 1,
                date: new Date(),
                game,
              },
            ]
          : [
              ...saves.slice(0, previousSaveIndex),
              { id: saves[previousSaveIndex].id, date: new Date(), game },
              ...saves.slice(previousSaveIndex + 1),
            ];
      localStorage.setItem(localStorageSavesKey, JSON.stringify(newSaves));
      return newSaves;
    });
  }, []);

  return { saves, saveGame };
}
