import React from "react";
import styles from "./Badge.module.scss";
import * as PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Badge = ({ link, title, icon, children }) => {
  return (
    <a className={styles.badge} href={link} title={title}>
      <span className={styles.icon}>
        <FontAwesomeIcon icon={icon} size="sm" />
      </span>
      <span>{children}</span>
    </a>
  );
};

Badge.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

export default Badge;
