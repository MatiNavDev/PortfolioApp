import * as actionTypes from "./actionTypes";

const fetchOpinionCardsStart = () => ({
  type: actionTypes.FETCH_OPINION_CARDS_START
});

const fetchOpinionCardsSuccess = cards => ({
  type: actionTypes.FETCH_OPINION_CARDS_SUCCESS,
  cards
});

const fetchOpinionCards = () => dispatch => {
  dispatch(fetchOpinionCardsStart());

  setTimeout(() => {
    const opinionCards = [
      {
        id: 1,
        opinion:
          "Sos Groso mal chabon. La verdad que el negro de WPP siente verguenza al lado tuyo",
        image:
          "https://i.kinja-img.com/gawker-media/image/upload/s--PnSCSSFQ--/c_scale,f_auto,fl_progressive,pg_1,q_80,w_800/z7jcryloxjedsztssw39.jpg",
        url: "https://www.linkedin.com/in/matias-navarro/"
      },
      {
        id: 2,
        opinion:
          "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        image:
          "https://i.kinja-img.com/gawker-media/image/upload/s--PnSCSSFQ--/c_scale,f_auto,fl_progressive,pg_1,q_80,w_800/z7jcryloxjedsztssw39.jpg",
        url: "https://www.linkedin.com/in/matias-navarro/"
      },
      {
        id: 3,
        opinion:
          "Sos Groso mal chabon. La verdad que el negro de WPP siente verguenza al lado tuyo 2222222222222222222222222222222222222222222222",
        image:
          "https://i.kinja-img.com/gawker-media/image/upload/s--PnSCSSFQ--/c_scale,f_auto,fl_progressive,pg_1,q_80,w_800/z7jcryloxjedsztssw39.jpg",
        url: "https://www.linkedin.com/in/matias-navarro/"
      },
      {
        id: 4,
        opinion:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        image:
          "https://i.kinja-img.com/gawker-media/image/upload/s--PnSCSSFQ--/c_scale,f_auto,fl_progressive,pg_1,q_80,w_800/z7jcryloxjedsztssw39.jpg",
        url: "https://www.linkedin.com/in/matias-navarro/"
      }
    ];

    dispatch(fetchOpinionCardsSuccess(opinionCards));
  }, 100);
};

export { fetchOpinionCards };
