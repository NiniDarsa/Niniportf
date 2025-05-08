import { createContext, useRef } from "react";

type ScrollToSectionContextProviderProp = {
  children: React.ReactNode;
};

type TScrollToSectionContext = {
  sectionHome: React.RefObject<HTMLDivElement | null>;
  sectionAbout: React.RefObject<HTMLDivElement | null>;
  sectionSkills: React.RefObject<HTMLDivElement | null>;
  sectionProjects: React.RefObject<HTMLDivElement | null>;
  sectionFeedBack: React.RefObject<HTMLDivElement | null>;
  sectionContact: React.RefObject<HTMLDivElement | null>;
  scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
};

export const ScrollToSectionContext =
  createContext<TScrollToSectionContext | null>(null);

const ScrollToSectionContextProvider = ({
  children,
}: ScrollToSectionContextProviderProp) => {
  const sectionHome = useRef<HTMLDivElement | null>(null);
  const sectionAbout = useRef<HTMLDivElement | null>(null);
  const sectionSkills = useRef<HTMLDivElement | null>(null);
  const sectionProjects = useRef<HTMLDivElement | null>(null);
  const sectionFeedBack = useRef<HTMLDivElement | null>(null);
  const sectionContact = useRef<HTMLDivElement | null>(null);

  // Function to scroll to the desired section
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ScrollToSectionContext.Provider
      value={{
        sectionHome,
        sectionAbout,
        sectionSkills,
        sectionProjects,
        sectionFeedBack,
        sectionContact,
        scrollToSection,
      }}
    >
      {children}
    </ScrollToSectionContext.Provider>
  );
};

export default ScrollToSectionContextProvider;
