import { StaticImageData } from "next/legacy/image";
import { venueList } from "../assets/venue-list";

type VenuesName =
  | (typeof venueList)[number]["name"]
  | "Hotel lobby"
  | "Rådhuset";

export interface dayInterface {
  day: string;
  dayStringForDate: string;
  events: eventInterface[];
}

export interface eventInterface {
  startTime: string;
  endTime?: string;
  title: string;
  venue: VenuesName;
  language?:
    | "English"
    | "Norwegian"
    | "English / Arabic / Norwegian"
    | "Arabic"
    | "English / Norwegian";
  description?: string;
  speakers?: string;
  moderators?: string;
  facilitators?: string;
  obligatoryTarget?: null | "all" | "keychange";
  isNightProgram?: boolean;
}

export interface delegateInterface {
  category: "norwegian" | "international";
  firstName: string;
  lastName: string;
  organization: string;
  jobPositionTitle: string | null;
  country: string;
  displayed: boolean;
  description: string | null;
  imgPath: StaticImageData | null;
}

export interface delegatesListInterface {
  norway: delegateInterface[];
  international: delegateInterface[];
}

type staffCategoryType = "top" | "main contacts" | "festival team";

export interface staffMemberInterface {
  firstName: string;
  lastName: string;
  position: string;
  img: StaticImageData | null;
  category: staffCategoryType;
  hidden?: boolean;
  phoneNumber?: string;
}

export interface staffCategoryInterface {
  id: staffCategoryType;
  order: number;
  title: null | string;
}

export interface venueInterface {
  name: string;
  address: string;
  googleMapsURL: string;
  website: string | null;
  hidden: boolean;
}
