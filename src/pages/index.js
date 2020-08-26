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
      subtitle="Full Stack Engineer"
      className={styles.headline}
    />
    <Section title="Experience">
      React ∙ Go ∙ Java ∙ TypeScript ∙ Python
    </Section>
    <Section title="Education">1st Class Honours, BEng Computing, <strong>Imperial College London</strong></Section>
    <Section title="Contact">
      <ContactIcons />
      <p style={{ lineHeight: `150%`, fontSize: `0.75em`, margin: 0 }}>
        <strong>Recruiters:</strong> Feel free to get in touch regarding
        full stack roles built on modern tech stacks (ideally using React)
      </p>
    </Section>
  </div>
);

export default HomePage;
