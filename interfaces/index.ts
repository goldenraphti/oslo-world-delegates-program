import { ImageProps, StaticImageData } from "next/image";
import { UrlWithStringQuery } from "url";

export interface dayInterface {
  day: string;
  dayStringForDate: string;
  events: eventInterface[];
}

export interface eventInterface {
  startTime: string;
  endTime?: string;
  title: string;
  venue?: string;
  language?:
    | "English"
    | "Norwegian"
    | "English / Arabic / Norwegian"
    | "Arabic";
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
  email?: string;
  organization: string;
  jobPositionTitle: string | null;
  country: string;
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
  website: string;
}
