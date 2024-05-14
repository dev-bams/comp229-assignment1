import ProjectCard from "./ProjectCard";
import quizwave from "../../assets/images/quizwave.png";
import taskpulse from "../../assets/images/taskpulse.png";
// import bmibuddy from "../../assets/images/bmibuddy.png";
import nimor from "../../assets/images/nimor.png";
import nairaupdatesng from "../../assets/images/nairaupdatesng.png";
import bundleup from "../../assets/images/bundleup.png";
import rentease from "../../assets/images/rentease.png";

function ProjectList() {
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
      projectImage: nimor,
      projectTitle: "Nimor",
      overlayProjectDescription:
        "Nimor is a web design agency that offers web design and development services.",
      cardID: 6,
      link: "https://nimor.co/",
      linkName: "nimor.co",
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
        "TaskPulse is a seamless task management app designed for effortless organization and productivity. ",
      cardID: 5,
      link: "https://taskpulse.netlify.app/",
      linkName: "taskpulse.netlify.com",
      technologies: "React & Tailwind",
    },
    {
      projectImage: rentease,
      projectTitle: "Rentease",
      overlayProjectDescription:
        "Rentease Simplifies rentals by providing transparency and scam prevention for both landlords and tenants.",
      cardID: 2,
      link: "https://renteasenow.netlify.app/",
      linkName: "renteasenow.netlify.com",
      technologies: "MERN Stack",
    },
  ];
  return (
    <div className="flex gap-10 flex-wrap justify-center">
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
              key={cardID}
              projectTitle={projectTitle}
              projectImage={projectImage}
              overlayProjectDescription={overlayProjectDescription}
              link={link}
              linkName={linkName}
              technologies={technologies}
            />
          );
        }
      )}
    </div>
  );
}

export default ProjectList;
