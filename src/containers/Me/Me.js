import React, { Component } from "react";

import TextWithName from "../../components/Me/TextWithName/TextWithName";
import Topics from "../../components/Me/Topics/Topics";
import classes from "./Me.css";

class Me extends Component {
  state = {
    actualTopicId: 0,
    topicsWithText: []
  };

  componentDidMount() {
    //TODO: ACA se tienen que traer los topics desde el server, cada uno con su respectivo texto
    //TODO: manejar un estado de cargando, y mientras tanto mostrar la sombra y no el loading, por eso el componente se debe renderizar
    // una vez para las sombras, otra para la data, y una por cada vez que se vaya cambiando el topic elegido

    const topicsWithText = [
      {
        id: 1,
        topic: "Topic 1",
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        image:
          "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        id: 2,
        topic: "Topic 2",
        text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
        image:
          "https://i.kinja-img.com/gawker-media/image/upload/s--PnSCSSFQ--/c_scale,f_auto,fl_progressive,pg_1,q_80,w_800/z7jcryloxjedsztssw39.jpg"
      },
      {
        id: 3,
        topic: "Topic 3",
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        image:
          "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        id: 4,
        topic: "Topic 4",
        text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
        image:
          "https://i.kinja-img.com/gawker-media/image/upload/s--PnSCSSFQ--/c_scale,f_auto,fl_progressive,pg_1,q_80,w_800/z7jcryloxjedsztssw39.jpg"
      }
    ];
    const actualTopicId = 1;
    this.setState({ actualTopicId, topicsWithText });
  }

  handleTopicSelected = topicId => this.setState({ actualTopicId: topicId });

  render() {
    const { actualTopicId, topicsWithText } = this.state;

    let topicToShow = topicsWithText.find(t => t.id === actualTopicId);

    const topicsForSelect = topicsWithText.map(t => ({
      id: t.id,
      topic: t.topic
    }));
    return topicToShow ? (
      <div className={classes.Me}>
        <TextWithName topicToShow={topicToShow} />
        <div className={classes.middlePart}>
          <div
            style={{
              backgroundImage: `url('${topicToShow.image}')`,
              width: "65%",
              height: "365px",
              display: "block",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center"
            }}
          />
          <Topics
            topics={topicsForSelect}
            clicked={this.handleTopicSelected.bind(this)}
          />
        </div>
      </div>
    ) : (
      <div>Loading...</div>
    );
  }
}

export default Me;
