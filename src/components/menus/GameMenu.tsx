import { useState } from "react";
import { HomeMenu } from "./HomeMenu";
import { NewGameMenu } from "./NewGameMenu";
import { MenuScreen } from "./types";

export const GameMenu = () => {
  const [selectedScreen, setSelectedScreen] = useState<MenuScreen>(
    MenuScreen.Home
  );

  const onCancel = () => setSelectedScreen(MenuScreen.Home);

  switch (selectedScreen) {
    case MenuScreen.Home:
      return <HomeMenu setSelectedScreen={setSelectedScreen} />;
    case MenuScreen.New:
      return <NewGameMenu onCancel={onCancel} />;
    case MenuScreen.Load:
    case MenuScreen.Save:
    default:
      return null;
  }
};
