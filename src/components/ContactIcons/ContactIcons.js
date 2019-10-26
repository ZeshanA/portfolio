import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faIdCard } from "@fortawesome/free-regular-svg-icons";
import {
  faDribbble,
  faGithub,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import styles from "./ContactIcons.module.scss";
import Badge from "../Badge/Badge";

const ContactIcons = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.badges}>
        {internalLinks.map(internalLink => (
          <div key={internalLink.link} className={styles.badge}>
            <Badge {...internalLink}>{internalLink.text}</Badge>
          </div>
        ))}
      </li>

      <li className={styles.icons}>
        {profiles.map(profile => (
          <div
            key={profile.link}
            className={`${profile.className} ${styles.icon}`}
          >
            <a href={profile.link} title={profile.title}>
              <FontAwesomeIcon icon={profile.icon} size="lg" />
            </a>
          </div>
        ))}
      </li>
    </ul>
  );
};

const internalLinks = [
  {
    icon: faIdCard,
    link: "http://zeshan.me/cv",
    title: "A link to my CV",
    text: "My CV"
  },
  {
    icon: faEnvelope,
    link: "mailto:zeshan@zesh.me",
    title: "Email: zeshan@zesh.me",
    text: "My Email"
  }
];

const profiles = [
  {
    className: styles.linkedIn,
    icon: faLinkedin,
    link: "http://linkedin.com/in/zeshana",
    title: "LinkedIn"
  },
  {
    className: styles.github,
    icon: faGithub,
    link: "http://github.com/zeshana",
    title: "GitHub"
  },
  {
    className: styles.dribbble,
    icon: faDribbble,
    link: "http://dribbble.com/zeshana",
    title: "Dribbble"
  },
  {
    className: styles.twitter,
    icon: faTwitter,
    link: "http://twitter.com/zshnamjd",
    title: "Twitter"
  }
];

export default ContactIcons;
