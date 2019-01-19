import React from "react";
import Headline from "../components/Headline/Headline";
import styles from "./index.module.scss";

const HomePage = () => (
  <Headline
    title="Zeshan Amjad"
    subtitle="Front-end Developer"
    className={styles.headline}
  />
);

export default HomePage;
