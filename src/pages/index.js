import React from "react";
import Headline from "../components/Headline/Headline";
import Section from "../components/Section/Section";
import styles from "./index.module.scss";

const HomePage = () => (
  <div className={styles.wrapper}>
    <Headline
      title="Zeshan Amjad"
      subtitle="Front-end Developer"
      className={styles.headline}
    />
    <Section title="Experience">
      React ∙ Redux ∙ TypeScript ∙ Angular ∙ SCSS ∙ Java ∙ Python ∙ Swift
    </Section>
    <Section title="Education">BEng Computing, Imperial College London</Section>
    <Section title="Contact">
      Email LinkedIn GitHub Dribbble Twitter
      <p style={{ lineHeight: `150%`, fontSize: `0.75em` }}>
        <strong>Recruiters:</strong> Feel free to get in touch regarding
        front-end roles built on modern tech stacks (ideally using React), with
        salaries circa £65k+
      </p>
    </Section>
  </div>
);

export default HomePage;
