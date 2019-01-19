import React from "react";
import * as PropTypes from "prop-types";

import styles from "./Section.module.scss";

const Section = props => {
  const { title, children, className } = props;
  return (
    <section className={`${className} ${styles.section}`}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>{children}</div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element)
};

export default Section;
