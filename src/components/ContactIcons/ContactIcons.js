import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faDribbble,
  faGithub,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import styles from "./ContactIcons.module.scss";

const ContactIcons = () => {
  return (
    <ul className={styles.list}>
      {profiles.map(profile => (
        <li key={profile.link} className={profile.name}>
          <a href={profile.link}>
            <FontAwesomeIcon icon={profile.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
};

const profiles = [
  {
    name: styles.mail,
    icon: faEnvelope,
    link: "mailto:zeshan@zesh.me"
  },
  {
    name: styles.linkedIn,
    icon: faLinkedin,
    link: "http://linkedin.com/in/zeshana"
  },
  {
    name: styles.github,
    icon: faGithub,
    link: "http://github.com/zeshana"
  },
  {
    name: styles.dribbble,
    icon: faDribbble,
    link: "http://dribbble.com/zeshana"
  },
  {
    name: styles.twitter,
    icon: faTwitter,
    link: "http://twitter.com/zshnamjd"
  }
];

export default ContactIcons;