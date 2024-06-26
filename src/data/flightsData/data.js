import Georgian from "../../assets/images/georgianAirlines.png";
import Turkish from "../../assets/images/turkish.png";
import Qatar from "../../assets/images/qatar.png";

export const flightsData = [
  {
    img: Turkish,
    airlinesName: "Turkish Airlines",
    takeOff: "17:30",
    landing: "00:30",
    hours: "7 Hours",
    price: "690$",
    stops: 2,
  },
  {
    img: Qatar,
    airlinesName: "Qatar Airways",
    takeOff: "08:15",
    landing: "15:15",
    hours: "7 Hours",
    price: "720$",
    stops: 1,
  },
  {
    img: Georgian,
    airlinesName: "Georgian Airlines",
    takeOff: "11:45",
    landing: "18:45",
    hours: "7 Hours",
    price: "670$",
    stops: 0,
  },
  {
    img: Turkish,
    airlinesName: "Turkish Airlines",
    takeOff: "13:00",
    landing: "20:00",
    hours: "7 Hours",
    price: "730$",
    stops: 2,
  },
  {
    img: Qatar,
    airlinesName: "Qatar Airways",
    takeOff: "06:45",
    landing: "13:45",
    hours: "7 Hours",
    price: "690$",
    stops: 2,
  },
  {
    img: Georgian,
    airlinesName: "Georgian Airlines",
    takeOff: "10:30",
    landing: "17:30",
    hours: "7 Hours",
    price: "700$",
    stops: 1,
  },
  {
    img: Turkish,
    airlinesName: "Turkish Airlines",
    takeOff: "15:15",
    landing: "22:15",
    hours: "7 Hours",
    price: "750$",
    stops: 0,
  },
  {
    img: Qatar,
    airlinesName: "Qatar Airways",
    takeOff: "09:00",
    landing: "16:00",
    hours: "7 Hours",
    price: "710$",
    stops: 2,
  },
  {
    img: Georgian,
    airlinesName: "Georgian Airlines",
    takeOff: "12:45",
    landing: "19:45",
    hours: "7 Hours",
    price: "690$",
    stops: 2,
  },
  {
    img: Turkish,
    airlinesName: "Turkish Airlines",
    takeOff: "16:30",
    landing: "23:30",
    hours: "7 Hours",
    price: "730$",
    stops: 1,
  },
  {
    img: Qatar,
    airlinesName: "Qatar Airways",
    takeOff: "07:15",
    landing: "14:15",
    hours: "7 Hours",
    price: "720$",
    stops: 0,
  },
  {
    img: Georgian,
    airlinesName: "Georgian Airlines",
    takeOff: "11:00",
    landing: "18:00",
    hours: "7 Hours",
    price: "670$",
    stops: 2,
  },
  {
    img: Turkish,
    airlinesName: "Turkish Airlines",
    takeOff: "14:45",
    landing: "21:45",
    hours: "7 Hours",
    price: "750$",
    stops: 1,
  },
  {
    img: Qatar,
    airlinesName: "Qatar Airways",
    takeOff: "08:30",
    landing: "15:30",
    hours: "7 Hours",
    price: "710$",
    stops: 0,
  },
  {
    img: Georgian,
    airlinesName: "Georgian Airlines",
    takeOff: "10:15",
    landing: "17:15",
    hours: "7 Hours",
    price: "690$",
    stops: 2,
  },
];

export const CubeStops = ({ stops, size, color }) => {
  const cubes = [];
  for (let i = 0; i < 3; i++) {
    if (i < stops) {
      cubes.push(
        <span
          key={i}
          style={{
            display: "inline-block",
            width: "15px",
            height: "15px",
            backgroundColor: "#DBDBDB",
            outline: "1px solid #424244",
            marginRight: "20px",
            marginBottom: "30px",
            marginLeft: "40px",
          }}
        ></span>
      );
    } else {
      cubes.push(
        <span
          key={i}
          style={{
            display: "inline-block",
            width: "15px",
            height: "15px",
            background: "transparent",
            marginRight: "20px",
            marginBottom: "30px",
            marginLeft: "40px",
          }}
        ></span>
      );
    }
  }
  return <div>{cubes}</div>;
};
