interface Category {
  label: string;
  key: string;
  short: string;
  description: string;
  image: {
    thumb: string;
  };
}

// Description is generated via github Co-pilot
export const categories: Category[] = [
  {
    label: "Technology",
    key: "technology",
    short: "Imagine, Build, Launch, Repeat",
    // short: "An abstraction of human knowledge",
    description:
      "Technology is the sum of techniques, skills, methods, and processes used in the production of goods or services or in the accomplishment of objectives, such as scientific investigation.",
    image: {
      thumb: "./category/technology-thumb.jpg",
    },
  },
  {
    label: "Travel",
    key: "travel",
    short: "Unveiling the wonders and the unknown",
    description:
      "Travel is the movement of people between distant geographical locations.",
    image: {
      thumb: "./category/travel-thumb.jpg",
    },
  },
  {
    label: "Life",
    key: "life",
    short: "Journey of moments and stories through time",
    description:
      "Life is a characteristic distinguishing physical entities having biological processes, such as signaling and self-sustaining processes, from those that do not, either because such functions have ceased, or because they never had such functions and are classified as inanimate.",
    image: {
      thumb: "./category/life-thumb.jpg",
    },
  },
  {
    label: "Lens",
    key: "lens",
    short: "Capturing perspective, one frame at a time",
    description:
      "Technology is the sum of techniques, skills, methods, and processes used in the production of goods or services or in the accomplishment of objectives, such as scientific investigation.",
    image: {
      thumb: "./category/lens-thumb.jpg",
    },
  },
];
