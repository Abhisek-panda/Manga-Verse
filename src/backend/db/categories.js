import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "action",
    image: "https://wallpapercave.com/wp/wp8047415.jpg",
  },
  {
    _id: uuid(),
    categoryName: "sports",
    image: "https://wallpapercave.com/wp/wp8609766.jpg",
  },
  {
    _id: uuid(),
    categoryName: "horror",
    image: "https://pbs.twimg.com/media/E2-kE26X0AEQYgo.jpg:large",
  },
  {
    _id: uuid(),
    categoryName: "fiction",
    image: "https://wallpapercave.com/wp/wp9805017.jpg",
  },
];
