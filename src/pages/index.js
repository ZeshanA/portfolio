import React from "react";
import Headline from "../components/Headline/Headline";
import Section from "../components/Section/Section";
import styles from "./index.module.scss";
import ContactIcons from "../components/ContactIcons/ContactIcons";
import { Helmet } from "react-helmet";
import { siteMetadata } from "../../gatsby-config";

const HomePage = () => (
  <div className={styles.wrapper}>
    <Helmet>
      <title>{siteMetadata.title}</title>
    </Helmet>
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
      <ContactIcons />
      <p style={{ lineHeight: `150%`, fontSize: `0.75em`, margin: 0 }}>
        <strong>Recruiters:</strong> Feel free to get in touch regarding
        front-end roles built on modern tech stacks (ideally using React)
      </p>
    </Section>
  </div>
);

export default HomePage;
