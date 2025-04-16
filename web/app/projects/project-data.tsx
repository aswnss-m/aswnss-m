export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Dialgen AI",
    year: 2025,
    description: "Ai Calling agents, customise for your business",
    url: "https://dialgen.ai",
  },
  {
    title: "D2D Drops",
    year: 2024,
    description: "Quick commerce store",
    url: "https://d2ddrops.co.uk/",
  },
  {
    title:"Travel Point",
    year:2024,
    description:"Find properties within your timeframe",
    url:"https://softservedweb.com/projects/travel-point"
  }
];
