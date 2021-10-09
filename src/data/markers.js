import {
  // CAVE,
  CITY,
  DUNGEON,
  // FORT,
  PORTAL,
  // TOWN,
  // VILLAGE,
} from "../components/consts";
export const markers = [
  {
    name: "Test City",
    type: CITY,
    location: [-90, 128],
    description: "",
    link: "",
    major: true,
  },
  {
    name: "Banesa nr1",
    type: DUNGEON,
    location: [-45, 36],
    description: "72 m2",
    link: "https://intercon-ks.com",
    major: false,
  },
  {
    name: "",
    type: PORTAL,
    location: [-92, 128],
    description: "Test",
    link: "https://google.com",
    major: false,
  },
];
