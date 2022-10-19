import { staffMemberInterface, staffCategoryInterface } from "../interfaces";

import alexArchettiProfilePic from "../public/photos/staff-photos/OsloWorld_stab_2022_LarsOpstad-alex.jpg";
import lauraCamachoProfilePic from "../public/photos/staff-photos/OsloWorld_stab_2022_LarsOpstad-laura.jpg";
import katjaHardoyProfilePic from "../public/photos/staff-photos/katja.jpeg";
import gunnarProfilePic from "../public/photos/staff-photos/OsloWorld_stab_2022_LarsOpstad-gunnar.jpg";
import filipProfilePic from "../public/photos/staff-photos/OsloWorld_stab_2022_LarsOpstad-filip.jpg";
import mariaProfilePic from "../public/photos/staff-photos/OsloWorld_stab_2022_LarsOpstad-maria.jpg";
import miraProfilePic from "../public/photos/staff-photos/OsloWorld_stab_2022_LarsOpstad-mira.jpg";
import samsayaProfilePic from "../public/photos/staff-photos/OsloWorld_stab_2022_LarsOpstad_035.jpg";
import joeLeNguyenProfilePic from "../public/photos/staff-photos/joeLeNguyen.jpg";

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
    position: "Festival director",
    img: alexArchettiProfilePic,
    category: "top",
  },
  {
    firstName: "Laura",
    lastName: "Camacho Salgado",
    position: "Head of international and seminar program ",
    img: lauraCamachoProfilePic,
    category: "main contacts",
  },
  {
    firstName: "Katja",
    lastName: "Hardoy",
    position: "Delegates and seminars assitant",
    img: katjaHardoyProfilePic,
    category: "main contacts",
  },
  {
    firstName: "Maria",
    lastName: "Chrysostomidis",
    position: "Production manager",
    img: mariaProfilePic,
    category: "festival team",
  },
  {
    firstName: "Mira",
    lastName: "Berggrav Refsum",
    position: "Head of press and communications ",
    img: miraProfilePic,
    category: "festival team",
  },
  {
    firstName: "Gunnar",
    lastName: "Strand",
    position: "Barnas verdensdager / Vårt Nabolag",
    img: gunnarProfilePic,
    category: "festival team",
  },
  {
    firstName: "Sergio",
    lastName: "Dreyer",
    position: "Volunteers coordinator",
    img: null,
    category: "festival team",
  },
  {
    firstName: "Samsaya",
    lastName: "Sharma",
    position: "Oslo World Ung coordinator",
    img: samsayaProfilePic,
    category: "festival team",
  },
  {
    firstName: "Joe",
    lastName: "Le Nguyen",
    position: "Producer",
    img: joeLeNguyenProfilePic,
    category: "festival team",
  },
  {
    firstName: "Filip",
    lastName: "Roshauw",
    position: "Press",
    img: filipProfilePic,
    category: "festival team",
  },
  {
    firstName: "Achy",
    lastName: "Ouafik",
    position: "PR assistent",
    img: null,
    category: "festival team",
  },
];
