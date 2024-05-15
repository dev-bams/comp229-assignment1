import { SolutionCardType } from "../../types/types";
import HowItWorksCard from "./ServiceCard";
import DesignIcon from "../../assets/icons/DesignIcon";
import CodeIcon from "../../assets/icons/CodeIcon";
import RocketIcon from "../../assets/icons/RocketIcon";

const solutions: SolutionCardType[] = [
  {
    problem: "Website Design",
    solution:
      "I create visually stunning and highly functional website designs that captivate visitors with compelling content and striking imagery.",
    cardIcon: DesignIcon,
  },
  {
    problem: "Website Development",
    solution:
      "I develop robust, scalable websites that provide seamless user experiences and meet all your technical requirements.",
    cardIcon: CodeIcon,
  },
  {
    problem: "Website Maintenance",
    solution:
      "I provide comprehensive website maintenance services to keep your site updated, secure, and running smoothly.",
    cardIcon: RocketIcon,
  },
];

function ServiceCardList() {
  return (
    <div className="flex gap-10 flex-wrap justify-center">
      {solutions.map(({ problem, solution, cardIcon, cardImage }, index) => {
        return (
          <HowItWorksCard
            key={index}
            problem={problem}
            solution={solution}
            cardIcon={cardIcon}
            cardImage={cardImage}
          />
        );
      })}
    </div>
  );
}

export default ServiceCardList;
