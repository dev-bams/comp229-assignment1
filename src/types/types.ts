import React from "react";
type PageLayoutProp = {
  children: React.ReactNode;
};
type NavLinkProp = {
  linkName:
    | "about"
    | "projects"
    | "skills"
    | "services"
    | "home"
    | "contact";
  link: string;
};
type CharacterProp = {
  alphabet: string;
};
type SectionTitleProps = {
  sectionTitle: string;
};
type NameProp = {
  characters: string[];
};
type SkillIconProp = {
  icon: React.FC;
};
type ProjectCardProps = {
  projectImage: string;
  projectTitle: string;
  overlayProjectDescription: string;
  link: string;
  technologies: string;
  linkName: string;
};
type HamBurgerProps = {
  onClick: () => void;
  isDarkMode: boolean;
};
type LandingPageProps = {
  toggleIsDarkMode: () => void;
  isDarkMode: boolean;
};
type NavBarProps = {
  toggleIsDarkMode: () => void;
  isDarkMode: boolean;
};
type ModeButtonProps = {
  toggleIsDarkMode: () => void;
  isDarkMode: boolean;
};
type LightModeProps = {
  toggleIsDarkMode: () => void;
};
type DarkModeProps = {
  toggleIsDarkMode: () => void;
};
type MobileNavBarProps = {
  toggleIsDarkMode: () => void;
  isDarkMode: boolean;
};
type ErrorProps = {
  toggleIsDarkMode: () => void;
  isDarkMode: boolean;
};
type CancelProps = {
  toggleIsActive: () => void;
};
type SolutionCardType = {
  problem: string;
  solution: string;
  cardIcon?: React.FC;
  cardImage?: string;
};
type SolutionCardProp = SolutionCardType;
export type {
  NavLinkProp,
  CharacterProp,
  SectionTitleProps,
  NameProp,
  SkillIconProp,
  ProjectCardProps,
  HamBurgerProps,
  LandingPageProps,
  NavBarProps,
  ModeButtonProps,
  LightModeProps,
  DarkModeProps,
  MobileNavBarProps,
  ErrorProps,
  CancelProps,
  PageLayoutProp,
  SolutionCardType,
  SolutionCardProp
};
