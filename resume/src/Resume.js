import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume">
      <header className="header">
        <h1>Shravani Vanapakula</h1>
        <p>
          8460 164th AVE NE | (206) 465 4544 | shravanivanapakula@cityuniversity.edu</p>
      </header>
      <section className="section">
        <h2>Education</h2>
        <div className="education">
          <h3>Master of Science in Computer Science</h3>
          <p>City University of Seattle | Jan 2025</p>

          <h3>Bachelor's of Engineering in Electrical and Electronics Engineering</h3>
          <p>Megha Institute Of Engineering And Technology For Women | Aug 2018-2021</p>
          <p>GPA: 6.9/10</p>
        </div>
      </section>
	  <section className="section">  //Technical skills section
        <h2>Technical Skills</h2>
        <div className="technical-skills">
            <p>Cloud Platforms: AWS, GCP, AZURE</p>
            <p>Container Engine and Orchestration: Docker, Kubernetes and ECS</p>
            <p>Operating Systems: AmazonLinux, Ubuntu and Windows servers</p>
            <p>IaC Tools: Terraform</p>
			<p>Database Management: MySQL, MongoDB</p>
            <p>CI/CD Tools: Jenkins, Argo CD and Gitlab</p>
        </div>
      </section>
	  <section className="section">  // work experience section 
        <h2>Work Experience</h2>
        <div className="experience">
          <h3>Process Associate 1</h3>
          <p>O9 Solutions, INC | Nov 2021 - Jan 2025</p>
          <p>Developed and maintained infrastructure for O9 Platform on multiple cloud environments.</p>
          <p>Implement and manage infrastructure as code through Terraform.</p>

          
        </div>
      </section>
      <section className="section">  //projects section
        <h2>Projects</h2>
        <div className="projects">
        <h3>Application Deployment</h3>
        <p>CI/CD project for automating software builds and deployments using Git, Terraform, Jenkins, Ansible, Docker, Kubernetes and AWS</p>
		    <p>
      Git Link:{" "}
      <a
        href="https://github.com/Vanapakula/shravani"  //added git link
        target="_blank"
        rel="noopener noreferrer"
      >
        https://github.com/Vanapakula/shravani
      </a>
    </p>

    <h3>UPSTAC Application</h3>
    <p>Deploying a microservice-architecture-based application, UPSTAC, to AWS.</p>
  </div>
</section>
</div>
  );
};
export default Resume;