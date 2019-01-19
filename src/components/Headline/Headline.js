import React from "react";
import * as PropTypes from "prop-types";

import styles from "./Headline.module.scss";

const Headline = props => (
  <header>
    <h1 className={styles.title}>{props.title}</h1>
    <p className={styles.subtitle}>{props.subtitle}</p>
  </header>
);

Headline.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default Headline;
