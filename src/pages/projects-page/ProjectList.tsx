/*
Student’s Name: Khaleed Opeloyeru
StudentID: 301286462
Date: May 14, 2024
*/

import ProjectCard from "./ProjectCard"; // Import the ProjectCard component
import quizwave from "../../assets/images/quizwave.png"; // Import the Quizwave image
import taskpulse from "../../assets/images/taskpulse.png"; // Import the Taskpulse image
import nairaupdatesng from "../../assets/images/nairaupdatesng.png"; // Import the Nairaupdatesng image
import bundleup from "../../assets/images/bundleup.png"; // Import the Bundleup image

function ProjectList() {
  // Array of project data with details for each project
  const projectData = [
    {
      projectImage: bundleup,
      projectTitle: "Bundleup",
      overlayProjectDescription:
        "Bundleup is a platform for showcasing all your links with just one click.",
      cardID: 1,
      link: "https://bundleup.us",
      linkName: "bundleup.us",
      technologies: "React & Tailwind",
    },
    {
      projectImage: quizwave,
      projectTitle: "Quizwave",
      overlayProjectDescription:
        "Quizwave is a sleek and user-friendly quiz app perfect for studying or testing your knowledge.",
      cardID: 3,
      link: "https://quizwave.co/",
      linkName: "quizwave.co",
      technologies: "React & Tailwind",
    },
    {
      projectImage: nairaupdatesng,
      projectTitle: "₦airaupdatesng",
      overlayProjectDescription:
        "₦airaupdatesng is an X bot that delivers instant updates on the Nigerian Naira to your timeline.",
      cardID: 4,
      link: "https://nairaupdatesng.co",
      linkName: "nairaupdatesng.co",
      technologies: "Python, React & Tailwind",
    },
    {
      projectImage: taskpulse,
      projectTitle: "Taskpulse",
      overlayProjectDescription:
        "TaskPulse is a seamless task management app designed for effortless organization and productivity.",
      cardID: 5,
      link: "https://taskpulse.netlify.app/",
      linkName: "taskpulse.netlify.com",
      technologies: "React & Tailwind",
    },
  ];

  return (
    // Container div for the project cards with Tailwind CSS classes for styling
    <div className="flex gap-10 flex-wrap justify-center">
      {/* Map through the project data array and render a ProjectCard for each project */}
      {projectData.map(
        ({
          projectImage,
          projectTitle,
          overlayProjectDescription,
          cardID,
          link,
          linkName,
          technologies,
        }) => {
          return (
            <ProjectCard
              key={cardID} // Unique key for each card based on the cardID
              projectTitle={projectTitle} // Project title for the card
              projectImage={projectImage} // Project image for the card
              overlayProjectDescription={overlayProjectDescription} // Description for the card
              link={link} // Link to the project
              linkName={linkName} // Display name for the link
              technologies={technologies} // Technologies used in the project
            />
          );
        }
      )}
    </div>
  );
}

export default ProjectList; // Export the ProjectList component as the default export
