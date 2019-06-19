import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as actions from "../../../store/actions";

class DetailedCard extends Component {
  componentDidMount() {
    /**
     * Recibe un id, en base a ese id hace el fetch con el servidor, obtiene la data y muestra.
     */
    const { id } = this.props.match;
    this.props.onFetchDetailedCard(id);
  }

  onShowExperienceCardDetail = id => {
    this.props.history.replace(`${id}`);
  };

  render() {
    const detailedCardFetched = this.props.detailedCardFetched;
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

const mapStateToProps = state => ({
  detailedCardFetched: state.experience.detailedCardFetched,
  loading: state.experience.loading,
  errorFromFetch: state.experience.errorFromFetch
});

const mapDispatchToProps = dispatch => ({
  onFetchDetailedCard: id => dispatch(actions.fetchDetailedCard(id))
});

DetailedCard.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
  detailedCardFetched: PropTypes.object,
  onGoToDetailedCard: PropTypes.func,
  onFetchDetailedCard: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailedCard);
