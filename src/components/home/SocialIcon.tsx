import React from "react";

interface IntroDescription {
  link: string;
  icon: string;
  label: string;
}

function SocialIcon({ link, icon, label }: IntroDescription) {
  console.log(link);
  console.log(icon);
  console.log(label);
  return (
    <a target="_blank" aria-label={label} rel="noopener noreferrer" href={link}>
      <i className={icon} aria-hidden="true" />
    </a>
  );
}

export default SocialIcon;
