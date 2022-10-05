import { defineStore } from "pinia";
import CSI from "@/assets/csi.webp";
import GDSC from "@/assets/gdsc.webp";
import FOMES from "@/assets/fomes.webp";
import ECELL from "@/assets/ecell.webp";
import IETE from "@/assets/iete.webp";
import NSS from "@/assets/nss.webp";
import SOCHE from "@/assets/soche.webp";
import GITS from "@/assets/gits.webp";
import ACES from "@/assets/aces.webp";

export default defineStore({
  id: "committees",
  state: () => ({
    committees: [
      {
        tag: "CSI",
        name: "Computer Society of India",
        src: CSI,
        link: "/committees/csi",
      },
      {
        tag: "GDSC",
        name: "Google Developer Student Club",
        src: GDSC,
        link: "/committees/gdsc",
      },
      {
        tag: "FOMES",
        name: "Faculty of Management and Entrepreneurship Studies",
        src: FOMES,
        link: "/committees/fomes",
      },
      {
        tag: "ECELL",
        name: "Entrepreneurship Cell",
        src: ECELL,
        link: "/committees/ecell",
      },
      {
        tag: "IETE",
        name: "Institute of Electronics and Telecommunication Engineers",
        src: IETE,
        link: "/committees/iete",
      },
      {
        tag: "NSS",
        name: "National Service Scheme",
        src: NSS,
        link: "/committees/nss",
      },
      {
        tag: "SOCHE",
        name: "Society for Cultural Heritage and Environment",
        src: SOCHE,
        link: "/committees/soche",
      },
      {
        tag: "GITS",
        name: "Gandhi Institute of Technology and Science",
        src: GITS,
        link: "/committees/gits",
      },
      {
        tag: "ACES",
        name: "Association of Computer Engineering Students",
        src: ACES,
        link: "/committees/aces",
      },
    ],
  }),
  actions: {},
});
