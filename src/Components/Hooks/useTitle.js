import { useEffect } from "react";

export const useTitle = (openItem) => {
  useEffect(() => {
    document.title = openItem ? openItem.name : `MrDonald's`;
    //console.log("openItem: ", openItem);
  }, [openItem]);
};
