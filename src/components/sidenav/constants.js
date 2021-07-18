export const navItems = [
    {
      title: "About Me",
      route: "/about"
    },
    {
        title: "Work Experience",
        route: "/work"
    },
    {
        title: "Course Experience",
        route: "/course"
    },
    {
        title: "Keyboard Content",
        route: "/keyboard"
    },
    {
        title: "Contact Me",
        route: "/contact"
    }
];
  
  const DarkBlue = "#000066";
  const White = "#ffffff";
  const Black = "#000";
  const Red = "#ff0000";
  
  export const theme = {
    navBackground: White,
    theme: {
      homeLinkColor: Black,
      listItemHeadingColor: DarkBlue,
      listItemHeadingArrowColor: DarkBlue,
      subListItemTextColor: Black,
      subListItemHeadingColor: Black,
      subListItemHeadingArrowColor: Red,
      hover: {
        subListItemBackgroundOnHover: DarkBlue,
        subListItemColorOnHover: White
      }
    }
  };
  