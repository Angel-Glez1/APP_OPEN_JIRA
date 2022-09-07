import { createContext } from 'react';


interface ContextProsp {
    sidemenuOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;

    onOpenSideMenu: () => void;
    onCloseSideMenu: () => void;
    onStartDragging: () => void;
    onEndDragging: () => void;
    onAddingEntry: (flag: boolean) => void;
}


export const UIContext = createContext({} as ContextProsp);
