import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import TextWithName from "../../components/Me/TextWithName/TextWithName";
import Topics from "../../components/Me/Topics/Topics";
import classes from "./Me.css";
import * as actions from "../../store/actions";

class Me extends Component {
  componentDidMount() {
    this.props.onFetchTopics();
  }

  //TODO: (manejar las sombras y manejar el error) en el fetch
  render() {
    const { topicIdSelected, topics, loading } = this.props;

    let topicToShow = topics.find(t => t.id === topicIdSelected);

    const topicsForSelect = topics.map(t => ({
      id: t.id,
      topic: t.topic
    }));

    return !loading && topicToShow ? (
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
          <Topics topics={topicsForSelect} />
        </div>
      </div>
    ) : (
      <div>Loading...</div>
    );
  }
}

const mapStateToProps = state => ({
  topics: state.me.topics,
  topicIdSelected: state.me.topicIdSelected
});

const mapDispatchToProps = dispatch => ({
  onFetchTopics: () => dispatch(actions.fetchTopics())
});

Me.propTypes = {
  topicIdSelected: PropTypes.number,
  topics: PropTypes.array,
  loading: PropTypes.bool,
  onFetchTopics: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Me);
