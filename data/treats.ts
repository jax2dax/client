import strawberryChoco from "../lib/items/strawberryChoco.png"
import browngold from "../lib/items/browngold.png"
import whitechcoco from "../lib/items/whitechcoco.png"
import pinkcake from "../lib/items/pinkcake.png"
import oreocookies from "../lib/items/oreocookies.png"

export const treats = [
  {
    id: "1",
    name: "Chocolate Strawberry Box",
    image: strawberryChoco,
    date: "Available Daily",
    ingredients: "Fresh strawberries, dark chocolate",
    price: 25,
    salePrice: 20,
    popular: true,
  },
  {
    id: "2",
    name: "Brown Gold cake",
    image: browngold,
    date: "Weekends",
    ingredients: "brown sugar, chocolate chips, vanilla",
    price: 49.99,
    salePrice: null,
    popular: false,
  },
  {
    id: "4",
    name: "White choco cake",
    image: whitechcoco,
    date: "thur-sat",
    ingredients: "White coco, vanilla,  cheese",
    price: 79.99,
    salePrice: 65,
    popular: true,
  },
  {
    id: "5 ",
    name: "Oreo cookies",
    image: oreocookies,
    date: "thur-sat",
    ingredients: "White coco, vanilla, Milk, cheese",
    price: 30,
    salePrice: 26.99,
    popular: true,
  },
   {
    id: "6",
    name: "Love Cake (Pink)",
    image: pinkcake,
    date: "thur-sat",
    ingredients: "Milk, cheese",
    price: 40,
    salePrice: null,
    popular: false,
  },
]
