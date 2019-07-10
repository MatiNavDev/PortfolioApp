import * as actionTypes from "./actionTypes";

const fetchTecnologiesImgWithTextSuccess = tecnologiesImgWithText => ({
  type: actionTypes.FETCH_TECNOLOGIES_WITH_TEXT_SUCCESS,
  tecnologiesImgWithText
});

const fetchProyectsImgWithTextSuccess = proyectsImgWithText => ({
  type: actionTypes.FETCH_PROYECTS_IMG_WITH_TEXT_SUCCESS,
  proyectsImgWithText
});

const fetchTecnologiesImgWithTextStart = () => ({
  type: actionTypes.FETCH_TECNOLOGIES_WITH_TEXT_START
});

const fetchProyectsImgWithTextStart = () => ({
  type: actionTypes.FETCH_PROYECTS_IMG_WITH_TEXT_START
});

const fetchTecnologiesImgWithText = () => dispatch => {
  dispatch(fetchTecnologiesImgWithTextStart());

  setTimeout(() => {
    const tecnologiesImgWithText = [
      {
        id: 1,
        title: "title 1",
        image:
          "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        id: 2,
        title: "title 2",
        image:
          "https://i.kinja-img.com/gawker-media/image/upload/s--PnSCSSFQ--/c_scale,f_auto,fl_progressive,pg_1,q_80,w_800/z7jcryloxjedsztssw39.jpg"
      },
      {
        id: 3,
        title: "title 3",
        image:
          "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        id: 4,
        title: "title 4",
        image:
          "https://i.kinja-img.com/gawker-media/image/upload/s--PnSCSSFQ--/c_scale,f_auto,fl_progressive,pg_1,q_80,w_800/z7jcryloxjedsztssw39.jpg"
      }
    ];

    dispatch(fetchTecnologiesImgWithTextSuccess(tecnologiesImgWithText));
  }, 1000);
};

const fetchProyectsImgWithText = () => dispatch => {
  dispatch(fetchProyectsImgWithTextStart());
  setTimeout(() => {
    const proyectsImgWithText = [
      {
        id: 2,
        title: "title 2",
        image:
          "https://i.kinja-img.com/gawker-media/image/upload/s--PnSCSSFQ--/c_scale,f_auto,fl_progressive,pg_1,q_80,w_800/z7jcryloxjedsztssw39.jpg"
      },
      {
        id: 4,
        title: "title 4",
        image:
          "https://i.kinja-img.com/gawker-media/image/upload/s--PnSCSSFQ--/c_scale,f_auto,fl_progressive,pg_1,q_80,w_800/z7jcryloxjedsztssw39.jpg"
      },
      {
        id: 3,
        title: "title 3",
        image:
          "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        id: 1,
        title: "title 1",
        image:
          "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      }
    ];

    dispatch(fetchProyectsImgWithTextSuccess(proyectsImgWithText));
  }, 1000);
};

const setToggleHandler = toggleOptionChosed => ({
  type: actionTypes.SET_TOGGLE_HANDLER,
  toggleOptionChosed
});

export {
  fetchTecnologiesImgWithText,
  fetchProyectsImgWithText,
  setToggleHandler
};
