import React, { Component } from "react";
import PropTypes from "prop-types";

class DetailedCard extends Component {
  state = {
    detailedCardFetched: null
  };

  componentDidMount() {
    /**
     * Recibe un id, en base a ese id hace el fetch con el servidor, obtiene la data y muestra.
     */
    const { id } = this.props.match;

    const detailedCardFetched = {
      title: "Titulo",
      text: "TEXTO",
      image:
        "https://i.kinja-img.com/gawker-media/image/upload/s--PnSCSSFQ--/c_scale,f_auto,fl_progressive,pg_1,q_80,w_800/z7jcryloxjedsztssw39.jpg",
      type: "Projectos",
      related: [
        {
          id: 1,
          title: "React",
          color: "blue"
        },
        {
          id: 2,
          title: "Node Js",
          color: "lightgreen"
        }
      ]
    };

    this.setState({ detailedCardFetched });
  }

  onShowExperienceCardDetail = id => {
    this.props.history.replace(`${id}`);
  };

  render() {
    const detailedCardFetched = this.state.detailedCardFetched;
    let componentToShow;

    if (detailedCardFetched) {
      const listOfRelateds = detailedCardFetched.related.map(r => (
        <span
          onClick={() => this.onShowExperienceCardDetail(r.id)}
          key={r.id}
          style={{ backgroundColor: r.color }}
        >
          {r.title}
        </span>
      ));

      componentToShow = (
        <div>
          <h3>{detailedCardFetched.title}</h3>
          <text> {detailedCardFetched.text} </text>
          <div
            style={{
              backgroundImage: `url('${detailedCardFetched.image}')`
            }}
          />
          <div>{listOfRelateds}</div>
        </div>
      );
    } else {
      componentToShow = <div>Loading...</div>;
    }

    return componentToShow;
  }
}

DetailedCard.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
  onGoToDetailedCard: PropTypes.func
};

export default DetailedCard;
