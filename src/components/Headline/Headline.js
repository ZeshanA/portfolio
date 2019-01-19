import React from "react";
import * as PropTypes from "prop-types";

import styles from "./Headline.module.scss";

const Headline = props => {
  const { className, title, subtitle } = props;
  return (
    <header className={className}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
    </header>
  );
};

Headline.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string
};

export default Headline;
