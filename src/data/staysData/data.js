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
