interface Project {
    name: string
    description: string
    language: string
    url: string
    image: string
  }
  
export const projectsData: Project[] = [
      {
          name: "e-Voting using Blockchain",
          description: "e-Voting system using Blockchain",
          language: "TypeScript",
          url: "https://github.com/TheGhossst/e-Voting",
          image: "https://placeholder.pics/svg/400/DEDEDE/555555/e-Voting"
      },
      {
          name: "Tune Tagger",
          description: "Personalize your audio files with your own creative flair",
          language: "TypeScript",
          url: "https://github.com/TheGhossst/Audio-Tagger",
          image: 'https://placeholder.pics/svg/400/DEDEDE/555555/TuneTagger'
      },
      {
          name: "Tab Tracker",
          description: "Helps you save and manage your important links in one place",
          language: "JavaScript",
          url: "https://github.com/TheGhossst/TabTracker",
          image: "https://placeholder.pics/svg/400/DEDEDE/555555/TabTracker"
      },
      {
          name: "MCQ Game",
          description: "A MCQ game using React JS",
          language: "TypeScript",
          url: "https://github.com/TheGhossst/MCQReact",
          image: "https://placeholder.pics/svg/400/DEDEDE/555555/MCQ"
      }
  ]