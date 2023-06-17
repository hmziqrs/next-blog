interface Category {
  label: string;
  key: string;
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
    image: {
      thumb: "./category/technology-thumb.jpg",
    },
    description:
      "Technology is the sum of techniques, skills, methods, and processes used in the production of goods or services or in the accomplishment of objectives, such as scientific investigation.",
  },
  {
    label: "Travel",
    key: "travel",
    image: {
      thumb: "./category/travel-thumb.jpg",
    },
    description:
      "Travel is the movement of people between distant geographical locations.",
  },
  {
    label: "Life",
    key: "life",
    image: {
      thumb: "./category/life-thumb.jpg",
    },
    description:
      "Life is a characteristic distinguishing physical entities having biological processes, such as signaling and self-sustaining processes, from those that do not, either because such functions have ceased, or because they never had such functions and are classified as inanimate.",
  },
  {
    label: "Lens",
    key: "lens",
    image: {
      thumb: "./category/lens-thumb.jpg",
    },
    description:
      "Technology is the sum of techniques, skills, methods, and processes used in the production of goods or services or in the accomplishment of objectives, such as scientific investigation.",
  },
];
