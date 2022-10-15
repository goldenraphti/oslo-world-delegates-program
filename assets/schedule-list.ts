import { dayInterface } from "../interfaces";

export const schedule: dayInterface[] = [
  {
    day: "Monday 31st of October",
    events: [
      {
        startTime: "13.30",
        endTime: "17.00",
        title: "Konferanse: Kunst & media",
        venue: "Nobel Peace Center",
        language: "Norwegian",
      },
      {
        startTime: "17.00",
        endTime: "19.00",
        title: "Keynote Speech & Fashion performance",
        venue: "Nobel Peace Center",
        language: "English",
        description: `
          17.30: Dr. Anna Marazuela Kim - Culture as a human right

          Culture and the arts have long been viewed as the privilege of the elite: the province of those who inhabit the top tier of our societies, and therefore secondary to the fundamental human needs at the basis of our survival. What if we were to challenge this hierarchy: flip the paradigm, while also preserving this high valuation? How might culture be championed as the very ground of existence - as well as the element that enables us to soar, transcend and transform it?

          17.50: Miss Balanta Fashion Perfomance
          A unique fashion performance that will discuss the reasons behind the Miss Balanta project, her journey to reach her African roots, what it means to be Afro Latina and the vital importance of connecting the African diaspora in Norway.
        `,
      },
    ],
  },
];
