import { useState } from "react";
import { HomeMenu, LoadMenu, NewGameMenu, SaveMenu } from "./";
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
      return <LoadMenu onCancel={onCancel} />;
    case MenuScreen.Save:
      return <SaveMenu onCancel={onCancel} />;
    default:
      return null;
  }
};
