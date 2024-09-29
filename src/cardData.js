export const cardDetails = {
  sea: {
    title: 'Sea',
    description: 'The sea is a vast body of saltwater that covers approximately 71% of Earth\'s surface.',
    image: 'sea-lama.avif',
  },
  desert: {
    title: 'Desert',
    description: 'A desert is a barren area of landscape where little precipitation occurs and, consequently, living conditions are hostile for plant and animal life.',
    image: 'desert-lama.avif',
  },
  mountain: {
    title: 'Mountain',
    description: 'A mountain is an elevated portion of the Earth\'s crust, generally with steep sides that show significant exposed bedrock.',
    image: 'mountain-lama.avif',
  },
  forest: {
    title: 'Forest',
    description: 'A forest is an area of land dominated by trees. Forests cover approximately 30% of Earth\'s land surface.',
    image: 'forest-lama.avif',
  },
  city: {
    title: 'City',
    description: 'A city is a large human settlement. It can be defined as a permanent and densely settled place with administratively defined boundaries.',
    image: 'city-lama.avif',
  },
};

export const cards = Object.entries(cardDetails).map(([id, { title, description, image }]) => ({
  id,
  title,
  description,
  image,
}));