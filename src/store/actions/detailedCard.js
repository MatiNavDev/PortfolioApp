import * as actionTypes from "./actionTypes";

const fetchDetailedCardSuccess = detailedCardFetched => ({
  type: actionTypes.FETCH_DETAILED_CARD_SUCCESS,
  detailedCardFetched
});

const fetchDetailedCardStart = () => ({
  type: actionTypes.FETCH_DETAILED_CARD_START
});

const fetchDetailedCard = id => dispatch => {
  dispatch(fetchDetailedCardStart());
  console.log(id);
  setTimeout(() => {
    const detailedCardFetched = {
      title: "El pasaje estándar Lorem Ipsum, usado desde el año 1500.",
      text:
        "Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera, ya sea porque se le agregó humor, o palabras aleatorias que no parecen ni un poco creíbles. Si vas a utilizar un pasaje de Lorem Ipsum, necesitás estar seguro de que no hay nada avergonzante escondido en el medio del texto. Todos los generadores de Lorem Ipsum que se encuentran en Internet tienden a repetir trozos predefinidos cuando sea necesario, haciendo a este el único generador verdadero (válido) en la Internet. Usa un diccionario de mas de 200 palabras provenientes del latín, combinadas con estructuras muy útiles de sentencias, para generar texto de Lorem Ipsum que parezca razonable. Este Lorem Ipsum generado siempre estará libre de repeticiones, humor agregado o palabras no características del lenguaje, etc.",
      images: [
        "https://i.kinja-img.com/gawker-media/image/upload/s--PnSCSSFQ--/c_scale,f_auto,fl_progressive,pg_1,q_80,w_800/z7jcryloxjedsztssw39.jpg",
        "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://i.kinja-img.com/gawker-media/image/upload/s--PnSCSSFQ--/c_scale,f_auto,fl_progressive,pg_1,q_80,w_800/z7jcryloxjedsztssw39.jpg"
      ],
      type: "Projectos",
      related: [
        {
          id: 1,
          title: "React",
          color: "blue",
          img:
            "https://portfolio-app-react.s3.us-east-2.amazonaws.com/ReactJs.png"
        },
        {
          id: 2,
          title: "Node Js",
          color: "lightgreen",
          img:
            "https://portfolio-app-react.s3.us-east-2.amazonaws.com/Node+Js.png"
        },
        {
          id: 3,
          title: "Angular",
          color: "lightgreen",
          img:
            "https://portfolio-app-react.s3.us-east-2.amazonaws.com/Angular.png"
        },
        {
          id: 4,
          title: "MongoDB",
          color: "lightgreen",
          img:
            "https://portfolio-app-react.s3.us-east-2.amazonaws.com/Mongo.jpg"
        }
      ]
    };

    dispatch(fetchDetailedCardSuccess(detailedCardFetched));
  }, 100);
};

export { fetchDetailedCard };
