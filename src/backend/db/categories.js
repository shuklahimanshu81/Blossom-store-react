import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Guitars",
    image :'https://raw.githubusercontent.com/shuklahimanshu81/Blossom-store-react-app/Dev/blossom-store/src/Assets/Guitar.jpg'
  },
  {
    _id: uuid(),
    categoryName: "Drums",
    image :'https://raw.githubusercontent.com/shuklahimanshu81/Blossom-store-react-app/Dev/blossom-store/src/Assets/Drum.jpg'
  },
  {
    _id: uuid(),
    categoryName: "Trumpet",
    image :'https://raw.githubusercontent.com/shuklahimanshu81/Blossom-store-react-app/Dev/blossom-store/src/Assets/Trumpet.jpg'
  }
];
