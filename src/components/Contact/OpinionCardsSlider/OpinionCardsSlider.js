import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import OpinionCard from "./OpinionCard/OpinionCard";
import * as action from "../../../store/actions";
import classes from "./OpinionCardsSlider.css";

class OpinionCardsSlider extends Component {
  state = {
    cardSelectedPos: 1
  };

  componentDidMount() {
    this.props.onFetchOpinionCards();
  }

  onChangeCard = pos => {
    const { cardSelectedPos } = this.state;

    const { cards } = this.props;
    let newPosition;
    switch (pos) {
      case "next":
        newPosition =
          cardSelectedPos === cards.length - 1 ? 0 : cardSelectedPos + 1;
        break;
      case "back":
        newPosition =
          cardSelectedPos === 0 ? cards.length - 1 : cardSelectedPos - 1;
        break;

      default:
        throw new Error("Intervalo no soportado");
    }

    this.setState({ cardSelectedPos: newPosition });
  };

  render() {
    const { cards } = this.props;
    const { cardSelectedPos } = this.state;

    const cardElements = cards.map((card, i) => (
      <OpinionCard
        key={card.id}
        url={card.url}
        image={card.image}
        opinion={card.opinion}
        active={cardSelectedPos === i}
      />
    ));

    /**
     * Esto funciona como si tuvieras un cadrado siempre marcado, luego tenes un rectangulo con toodas las cards
     * el cual se va moviendo y genera el efecto de la slide. Luego se le agrega un poco de estilos a lo que "entra y sale"
     * al cuadrado ese y a las cards que estan afuera del cuadrado. Por ultimo le agrega un linear gradient a los costados
     * para crear el smoke.
     */

    return (
      <div>
        <div className={classes.Col}>
          <div className={[classes.CardsSlider, classes.Active].join(" ")}>
            <div
              className={classes.CardsSliderWrapper}
              style={{
                transform: `translateX(-${cardSelectedPos *
                  (100 / cards.length)}%)`
              }}
            >
              {cardElements}
            </div>
          </div>
          <span
            className={[classes.CardsNavigationElements, classes.First].join(
              " "
            )}
            onClick={() => this.onChangeCard("back")}
          />
          <span
            className={[classes.CardsNavigationElements, classes.Last].join(
              " "
            )}
            onClick={() => this.onChangeCard("next")}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.contact.cards,
  loading: state.contact.loading,
  error: state.contact.error
});

const mapDispatchToProps = dispatch => ({
  onFetchOpinionCards: () => dispatch(action.fetchOpinionCards())
});

OpinionCardsSlider.propTypes = {
  cards: PropTypes.array,
  onFetchOpinionCards: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OpinionCardsSlider);
