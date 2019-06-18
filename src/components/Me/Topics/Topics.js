import React, { Component } from "react";
import Proptypes from "prop-types";
import { connect } from "react-redux";

import Topic from "./Topic/Topic";
import classes from "./Topics.css";
import * as actions from "../../../store/actions";

class Topics extends Component {
  render() {
    return (
      <div className={classes.Topics}>
        {this.props.topics.map((t, i) => (
          <Topic
            key={i}
            name={t.topic}
            clicked={() => {
              this.props.onSelectTopic(t.id);
            }}
          />
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSelectTopic: topicId => dispatch(actions.setSelectedTopic(topicId))
});

Topics.propTypes = {
  topics: Proptypes.array,
  onSelectTopic: Proptypes.func
};

export default connect(
  null,
  mapDispatchToProps
)(Topics);
