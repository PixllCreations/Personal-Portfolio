import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectCard.module.css';
import { getImageUrl } from '../../utils';
export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const [clickedButton, setClickedButton] = useState(null);

  const handleMouseDown = (button) => {
    setClickedButton(button);
  };

  const handleMouseUp = () => {
    setClickedButton(null);
  };

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a
          href={demo}
          target='_blank'
          rel='noopener noreferrer'
          className={`${styles.link} ${
            clickedButton === 'demo' ? styles.clicked : ''
          }`}
          onMouseDown={() => handleMouseDown('demo')}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          Demo
        </a>
        <a
          href={source}
          target='_blank'
          rel='noopener noreferrer'
          className={`${styles.link} ${
            clickedButton === 'source' ? styles.clicked : ''
          }`}
          onMouseDown={() => handleMouseDown('source')}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          Source
        </a>
      </div>
    </div>
  );
};

// Define propTypes
ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    demo: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  }).isRequired,
};
