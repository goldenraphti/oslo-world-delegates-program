import { StaticImageData } from "next/image";

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
