import * as actionTypes from "./actionTypes";

const setShowSideDrawer = (showSideDrawer) => {
    return {
        type: actionTypes.SET_SHOW_SIDEDRAWER,
        showSideDrawer
    }
}

export {setShowSideDrawer};
