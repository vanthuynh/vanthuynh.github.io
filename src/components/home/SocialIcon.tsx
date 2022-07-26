import React from "react";

interface IntroDescription {
  link: string;
  icon: string;
  label: string;
}

function SocialIcon(props: IntroDescription) {
  const { link, icon, label } = props;
  return (
    <a target="_blank" aria-label={label} rel="noopener noreferrer" href={link}>
      <i className={icon} aria-hidden="true" />
    </a>
  );
}

export default SocialIcon;
