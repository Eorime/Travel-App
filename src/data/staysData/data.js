import Zealand from "../../assets/images/zealand.png";

export const staysData = [
  {
    img: Zealand,
    title: "New Zealand Resort",
    subTitle: "New Zealand, Auckland",
    locationText: "1 km away from center",
    description:
      "Near beach, with private beach area and private pool. Property has terrace, kitchen, 2 bathrooms",
    rating: 5,
    price: "400$",
    id: 2,
  },
  {
    img: Zealand,
    title: "New Zealand Resort",
    subTitle: "New Zealand, Auckland",
    locationText: "1 km away from center",
    description:
      "Near beach, with private beach area and private pool. Property has terrace, kitchen, 2 bathrooms",
    rating: 3,
    price: "400$",
    id: 3,
  },
  {
    img: Zealand,
    title: "New Zealand Resort",
    subTitle: "New Zealand, Auckland",
    locationText: "1 km away from center",
    description:
      "Near beach, with private beach area and private pool. Property has terrace, kitchen, 2 bathrooms",
    rating: 4,
    price: "400$",
    id: 4,
  },
  {
    img: Zealand,
    title: "New Zealand Resort",
    subTitle: "New Zealand, Auckland",
    locationText: "1 km away from center",
    description:
      "Near beach, with private beach area and private pool. Property has terrace, kitchen, 2 bathrooms",
    rating: 2,
    price: "400$",
    id: 5,
  },
  {
    img: Zealand,
    title: "New Zealand Resort",
    subTitle: "New Zealand, Auckland",
    locationText: "1 km away from center",
    description:
      "Near beach, with private beach area and private pool. Property has terrace, kitchen, 2 bathrooms",
    rating: 5,
    price: "400$",
    id: 6,
  },
  {
    img: Zealand,
    title: "New Zealand Resort",
    subTitle: "New Zealand, Auckland",
    locationText: "1 km away from center",
    description:
      "Near beach, with private beach area and private pool. Property has terrace, kitchen, 2 bathrooms",
    rating: 4,
    price: "400$",
    id: 7,
  },
  {
    img: Zealand,
    title: "New Zealand Resort",
    subTitle: "New Zealand, Auckland",
    locationText: "1 km away from center",
    description:
      "Near beach, with private beach area and private pool. Property has terrace, kitchen, 2 bathrooms",
    rating: 1,
    price: "400$",
    id: 8,
  },
  {
    img: Zealand,
    title: "New Zealand Resort",
    subTitle: "New Zealand, Auckland",
    locationText: "1 km away from center",
    description:
      "Near beach, with private beach area and private pool. Property has terrace, kitchen, 2 bathrooms",
    rating: 5,
    price: "400$",
    id: 9,
  },
  {
    img: Zealand,
    title: "New Zealand Resort",
    subTitle: "New Zealand, Auckland",
    locationText: "1 km away from center",
    description:
      "Near beach, with private beach area and private pool. Property has terrace, kitchen, 2 bathrooms",
    rating: 2,
    price: "400$",
    id: 10,
  },
  {
    img: Zealand,
    title: "New Zealand Resort",
    subTitle: "New Zealand, Auckland",
    locationText: "1 km away from center",
    description:
      "Near beach, with private beach area and private pool. Property has terrace, kitchen, 2 bathrooms",
    rating: 3,
    price: "400$",
    id: 11,
  },
  {
    img: Zealand,
    title: "New Zealand Resort",
    subTitle: "New Zealand, Auckland",
    locationText: "1 km away from center",
    description:
      "Near beach, with private beach area and private pool. Property has terrace, kitchen, 2 bathrooms",
    rating: 4,
    price: "400$",
    id: 12,
  },
  {
    img: Zealand,
    title: "New Zealand Resort",
    subTitle: "New Zealand, Auckland",
    locationText: "1 km away from center",
    description:
      "Near beach, with private beach area and private pool. Property has terrace, kitchen, 2 bathrooms",
    rating: 2,
    price: "400$",
    id: 13,
  },
  {
    img: Zealand,
    title: "New Zealand Resort",
    subTitle: "New Zealand, Auckland",
    locationText: "1 km away from center",
    description:
      "Near beach, with private beach area and private pool. Property has terrace, kitchen, 2 bathrooms",
    rating: 5,
    price: "400$",
    id: 14,
  },
  {
    img: Zealand,
    title: "New Zealand Resort",
    subTitle: "New Zealand, Auckland",
    locationText: "1 km away from center",
    description:
      "Near beach, with private beach area and private pool. Property has terrace, kitchen, 2 bathrooms",
    rating: 3,
    price: "400$",
    id: 15,
  },
];

export const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(
        <span key={i} style={{ fontSize: "40px", color: "#FF6700" }}>
          &#9733;
        </span>
      );
    } else {
      stars.push(
        <span key={i} style={{ fontSize: "40px", color: "#FF670060" }}>
          &#9734;
        </span>
      );
    }
  }
  return <div>{stars}</div>;
};
