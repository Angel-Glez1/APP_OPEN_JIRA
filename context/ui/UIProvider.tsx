import { ReactElement, FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';

interface Props {
    children?: ReactElement | ReactElement[]
}

export interface UIState {
    sidemenuOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false,
    isAddingEntry: false,
    isDragging: false,

}


export const UIProvider: FC<Props> = ({ children }) => {


    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

    const onOpenSideMenu = () => dispatch({ type: 'UI - Open SideBar' });
    const onCloseSideMenu = () => dispatch({ type: 'UI - Close SideBar' });
    const onStartDragging = () => dispatch({ type: 'UI - Start Dragging' });
    const onEndDragging = () => dispatch({ type: 'UI - End Dragging' });
    const onAddingEntry = (flag: boolean) => dispatch({ type: 'UI - Adding Entry', payload: flag });


    return (
        <UIContext.Provider value={{
            ...state,

            // Methods
            onOpenSideMenu,
            onCloseSideMenu,
            onAddingEntry,
            onStartDragging,
            onEndDragging,
        }}>
            {children}
        </UIContext.Provider>
    )
}

