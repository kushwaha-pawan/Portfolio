import React from 'react';
import styles from './ProjectsStyles.module.css';
import website from '../../assets/website.png';
import websitR from '../../assets/websitR.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={website}
          link="https://responsive-website-mu-two.vercel.app/"
          h3="website"
          p="E-Commerce"
        />
        <ProjectCard
          src={websitR}
          link="https://page-nest-website.vercel.app/"
          h3="multipale page "
          p="E-Commerce"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
