type ExperienceItem = {
  title: string;
  subtitle: string;
  duration: string;
  description: string[];
  logo: string;
  urls?: {
    [key: string]: string;
  };
};

export default ExperienceItem;
