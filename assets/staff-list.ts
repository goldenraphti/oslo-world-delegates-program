import { staffMemberInterface, staffCategoryInterface } from "../interfaces";

import alexArchettiProfilePic from "../public/photos/staff-photos/OsloWorld_stab_2022_LarsOpstad-alex.jpg";
import lauraCamachoProfilePic from "../public/photos/staff-photos/OsloWorld_stab_2022_LarsOpstad-laura.jpg";
import gunnarProfilePic from "../public/photos/staff-photos/OsloWorld_stab_2022_LarsOpstad-gunnar.jpg";
import filipProfilePic from "../public/photos/staff-photos/OsloWorld_stab_2022_LarsOpstad-filip.jpg";
import mariaProfilePic from "../public/photos/staff-photos/OsloWorld_stab_2022_LarsOpstad-maria.jpg";
import miraProfilePic from "../public/photos/staff-photos/OsloWorld_stab_2022_LarsOpstad-mira.jpg";
import samsayaProfilePic from "../public/photos/staff-photos/OsloWorld_stab_2022_LarsOpstad_035.jpg";
import joeLeNguyenProfilePic from "../public/photos/staff-photos/joeLeNguyen.jpg";
import achyProfilePic from "../public/photos/staff-photos/Achy.png";
import sergioProfilePic from "../public/photos/staff-photos/sergio.jpg";
import miriamNabunyaProfilePic from "../public/photos/staff-photos/miriam-nabunya.jpg";
import henrietteVoldProfilePic from "../public/photos/staff-photos/henriette-vold.jpg";
import arnaudLeBretonProfilePic from "../public/photos/staff-photos/arnaud-le-breton.jpg";
import mubarakMuseProfilePic from "../public/photos/staff-photos/mubarak-muse.jpg";
import lydiaTeferaProfilePic from "../public/photos/staff-photos/lydia-tefera.jpg";

// import ProfilePic from '../public/photos/staff-photos/

export const staffCategories: staffCategoryInterface[] = [
  {
    id: "top",
    order: 1,
    title: null,
  },
  {
    id: "main contacts",
    order: 2,
    title: "Your main contacts during the festival",
  },
  {
    id: "festival team",
    order: 3,
    title: "Meet the festival team",
  },
];

export const staff: staffMemberInterface[] = [
  {
    firstName: "Alexandra",
    lastName: "Archetti  Stølen",
    position: "CEO / Festival director",
    img: alexArchettiProfilePic,
    category: "top",
    hidden: false,
  },
  {
    firstName: "Laura",
    lastName: "Camacho Salgado",
    position: "Head of international, seminar and delegate program",
    img: lauraCamachoProfilePic,
    category: "main contacts",
    hidden: false,
    phoneNumber: "+47 98199502",
  },
  {
    firstName: "Miriam",
    lastName: "Nabunya",
    position: "International seminar and delegate coordinator",
    img: miriamNabunyaProfilePic,
    category: "main contacts",
    hidden: false,
    phoneNumber: "+47 93086968",
  },
  {
    firstName: "Maria",
    lastName: "Chrysostomidis",
    position: "Head of production",
    img: mariaProfilePic,
    category: "festival team",
    hidden: false,
  },
  {
    firstName: "Mira",
    lastName: "Berggrav Refsum",
    position: "Head of press and communications ",
    img: miraProfilePic,
    category: "festival team",
    hidden: true,
  },
  {
    firstName: "Gunnar",
    lastName: "Strand",
    position: "Barnas verdensdager / Vårt Nabolag",
    img: gunnarProfilePic,
    category: "festival team",
    hidden: true,
  },
  {
    firstName: "Sergio",
    lastName: "Dreyer",
    position: "Volunteers coordinator",
    img: sergioProfilePic,
    category: "festival team",
    hidden: true,
  },
  {
    firstName: "Henriette",
    lastName: "Vold",
    position: "Head of Oslo World UNG and volunteer team",
    img: henrietteVoldProfilePic,
    category: "festival team",
    hidden: false,
  },
  {
    firstName: "Filip",
    lastName: "Roshauw",
    position: "Press and communications",
    img: filipProfilePic,
    category: "festival team",
    hidden: false,
  },
  {
    firstName: "Achy",
    lastName: "Ouafik",
    position: "Press and communications",
    img: achyProfilePic,
    category: "festival team",
    hidden: false,
  },
  {
    firstName: "Arnaud",
    lastName: "Le Breton",
    position: "Artist liaison",
    img: arnaudLeBretonProfilePic,
    category: "festival team",
    hidden: false,
  },
  {
    firstName: "Joe",
    lastName: "Le Nguyen",
    position: "Festival Producer",
    img: joeLeNguyenProfilePic,
    category: "festival team",
    hidden: false,
  },
  {
    firstName: "Samsaya",
    lastName: "Sharma",
    position: "Oslo World UNG coordinator",
    img: samsayaProfilePic,
    category: "festival team",
    hidden: true,
  },
  {
    firstName: "Mubarak",
    lastName: "Muse",
    position: "Producer Oslo World UNG",
    img: mubarakMuseProfilePic,
    category: "festival team",
    hidden: false,
  },
  {
    firstName: "Lydia",
    lastName: "Tefera",
    position: "Producer Oslo World UNG",
    img: lydiaTeferaProfilePic,
    category: "festival team",
    hidden: false,
  },
];
