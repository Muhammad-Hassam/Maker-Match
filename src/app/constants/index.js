import {
  Proposal1a,
  Proposal1b,
  Burl,
  ProductImage,
  Sofa,
  Pendant,
  Table,
  Portfolio
} from "@/assets/images";

export const products = [
  {
    image: Burl,
    name: "Coffee Table",
    variation: "INCOMING BIDS",
    time: "3d",
    bids: true
  },
  {
    image: ProductImage,
    name: "Luxury Sofa",
    variation: "DRAFT | 4 variations",
    time: "1w",
    bids: false
  },
  {
    image: Sofa,
    name: "Wooden Chair",
    variation: "DRAFT",
    time: "5d",
    bids: false
  },
  {
    image: Pendant,
    name: "Dining Set",
    variation: "DRAFT",
    time: "2d",
    bids: false
  },
  {
    image: Sofa,
    name: "Bookshelf",
    variation: "DRAFT",
    time: "12h",
    bids: false
  }
];

export const porposal = [
  {
    itemNo: "01",
    image1: Proposal1a,
    image2: Proposal1b,
    name: "Emelie Abrahamsson",
    ammount: "$9000"
  },
  {
    itemNo: "02",
    image1: Portfolio,
    image2: Table,
    name: "Darrin Garret",
    ammount: "$8200"
  }
];
