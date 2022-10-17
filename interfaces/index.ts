import { StaticImageData } from "next/image";

export interface dayInterface {
  day: string;
  events: eventInterface[];
}

export interface eventInterface {
  startTime: string;
  endTime?: string;
  title: string;
  venue?: string;
  language?: string;
  description?: string;
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
