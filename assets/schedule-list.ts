import { dayInterface } from "../interfaces";

export const schedule = [
  {
    day: "Monday 30th of October",
    dayStringForDate: "2023-10-30",
    events: [
      {
        startTime: "16.30",
        title: "Pick-up",
        venue: "Hotel lobby",
        language: "English",
        description: `Pick-up at the hotel Lobby and Walk together to the Opening Reception.`,
        isNightProgram: false,
        eventPageURL: null,
      },
      {
        startTime: "17.00",
        title: "Opening Reception",
        venue: "Rådhuset",
        language: "English",
        description: `Opening Reception at Oslo City Hall for the 30 years of the festivals. Delegates will be able to connect with other delegates and our local partners.`,
        isNightProgram: false,
        eventPageURL: null,
      },
      {
        startTime: "19.30",
        title: "Opening Concert",
        venue: "Oslo Konserthus",
        language: "English",
        description: `Featuring Mari Boine, Bugge Wesseltoft, Oktan Gussiin Ella Marie Hætta Isaksen, and Oassi "Vástádus Eana"`,
        isNightProgram: false,
        eventPageURL: null,
      },
    ],
  },
  {
    day: "Tuesday 31st of October",
    dayStringForDate: "2023-10-31",
    events: [
      {
        startTime: "09.30",
        endTime: "11.30",
        title: "Annual Meeting Forum Worldwide Music Festivals",
        venue: "Melahuset",
        language: "English",
        description: `This event is only for the Forum of Worldwide Music Festivals members.`,
        isNightProgram: false,
        eventPageURL: null,
      },
      {
        startTime: "11.30",
        endTime: "13.00",
        title: "Mangsfoldnettverket møte",
        venue: "Melahuset",
        language: "Norwegian",
        description: `This event is only for the Diversity Network members.`,
        isNightProgram: false,
        eventPageURL: null,
      },
      {
        startTime: "14.00",
        endTime: "16.00",
        title: "Workshop: Music and climate justice",
        venue: "Melahuset",
        language: "English",
        obligatoryTarget: "all",
        description: `An interactive workshop discussing sustainable music industry practices and climate action within the cultural sector, and specially the festival context.`,
        isNightProgram: false,
        eventPageURL: null,
      },
      {
        startTime: "16.30",
        endTime: "17.30",
        title: "The Rise of indigenous Pop music",
        venue: "Melahuset",
        language: "English",
        obligatoryTarget: "all",
        description: `A global wave of indigenous influence in popular culture is upon us – from Black Panther and How to Blow Up a Pipeline to the Norwegian Let the River Flow and numerous young Sámi artists on the rise. How to reach bigger audiences and highlight uniqueness, without stereotyping or appropriating.`,
        speakers:
          "Ella Marie Haætta Isaksen, Stephen Budd, Tone Østerdal, Sofie Søndervik Sæther.",
        isNightProgram: false,
        eventPageURL: null,
      },
      {
        startTime: "18.00",
        title: "Les Mamans du congo",
        venue: "Cosmopolite",
        isNightProgram: true,
        eventPageURL:
          "https://www.osloworld.no/en/festival/event/les-mamans-du-congo-rrobin",
      },
      {
        startTime: "18.30",
        endTime: "19.30",
        title: "Musings on fusion",
        venue: "Internasjonalen",
        language: "Norwegian",
        description: `This event is in Norwegian.  På sitt beste kan kulturmøter i musikk skape fantastiske resultater. På sitt verste, kan de bli nokså klamme. Hvordan får man det til å funke? Hva er fallgruvene? Hvordan sørger du for at artister fra forskjellige tradisjoner møtes på like fot?`,
        speakers:
          "Mira Thiruchelvam, Marianna S. A. Røe, Thomas Kongshavn, Knut Reiersrud, Filip Roshauw.",
        isNightProgram: false,
        eventPageURL: null,
      },
      {
        startTime: "21.00",
        title: "Nawar",
        venue: "Kafé Hærverk",
        isNightProgram: true,
        eventPageURL:
          "https://www.osloworld.no/en/festival/event/nawar-alnaddaf",
      },
      {
        startTime: "21.00",
        title: "Hermanos Gutiérrez",
        venue: "Cosmopolite",
        isNightProgram: true,
        eventPageURL:
          "https://www.osloworld.no/en/festival/event/hermanos-gutierrez",
      },
      {
        startTime: "22.30",
        title: "Closed after-party for delegates, artists",
        venue: "Internasjonalen",
        description: "For delagates, artists and staff only",
        isNightProgram: true,
        eventPageURL: null,
      },
      {
        startTime: "13.00",
        endTime: "14.00",
        title: "Networking lunch",
        venue: "Melahuset",
        language: "English",
        obligatoryTarget: "all",
        description: `Hosted by the Diversity Network. Connect with the members of the Diversity Network and enjoy the showcase concert of  the brainchild of the Mexican percussionist, singer, composer and DJ Paulina Sotomayor. With four EPs under her belt, she has become recognized as a Mexican pioneer of alternative electronic folk music,  with deep roots in the tradition and a keen ear for the current trends in global Latin rhythms.`,
        isNightProgram: false,
        eventPageURL: null,
      },
    ],
  },
  {
    day: "Wednesday 1st of November",
    dayStringForDate: "2023-11-01",
    events: [
      {
        startTime: "09.30",
        endTime: "10.50",
        title: "Annual Meeting Forum Worldwide Music Festivals",
        venue: "Melahuset",
        language: "English",
        description: `This event is only for the Forum of Worldwide Music Festivals members.`,
        isNightProgram: false,
        eventPageURL: null,
      },
      {
        startTime: "11.00",
        endTime: "12.30",
        title: "Short talks at high temperatures",
        venue: "Oslo Badstuforening - Sukkerbiten",
        language: "English",
        description: `Sauna is a great equalizer. It represents the non-hierarchical nature of Nordic society. The saunas at Sukkerbiten will rise above 80 degrees to host professionals from the cultural sector and music enthusiasts to discuss ideas. . Away from the real world, muscles relaxing, core temperature rising, we will share strategies to work together against systemic discrimination, gender inequality and racism.

        This event is connected with the three editions of the Utopian Manifesto that gather more and more voices with signatories from all around the globe.

        Swimsuits are required. Bring your own towel.`,
        isNightProgram: false,
        eventPageURL: null,
      },
      {
        startTime: "13.00",
        endTime: "15.00",
        title: "Networking lunch SWANA region",
        venue: "Tukthuset",
        language: "English",
        obligatoryTarget: "all",
        description: `An engaging lunch session that celebrates a decade of SWANA and Nordic cross-regional collaborations. This event welcomes Norwegian and international delegates to network and engage in informal conversations. Short presentations will highlight the impactful collaborations between Oslo World and partners from the SWANA region, including Amman Music Talk, Beirut & Beyond, and Visa for Music.`,
        speakers:
          "Tom Knappskog, (Director, Section for Culture and Creative Businesses, MFA), Alexandra Archetti Stølen (Oslo World),  Stephen Budd (Stephen Budd Music Ltd, the OneFest Festival UK), Amani Semaan (Director, Beirut and Beyond International Music Festival), Rita Furuseth Sandberg (Former Minister Counsellor, Royal Norwegian Embassy in Amman, MFA), Lama Hazboun (Director Amman Jazz Festival, Jordan), Marwane Fachane (Executive Director of Hiba Foundation/ Visa For Music)Laia Canals (Director TEMPI, Danmark)",
        isNightProgram: false,
        eventPageURL: null,
      },
      {
        startTime: "15.00",
        endTime: "19.30",
        title: "Keychange take-over",
        venue: "Byens Tak",
        language: "English",
        obligatoryTarget: "all",
        description: `Step into the future of music equality at the Keychange Pledge and Action Plan Launch Event in Norway. This momentous occasion is a resounding call for global gender balance in the music industry. Guided by the esteemed Christina Hazboun, the Keychange Pledge and Action Plan, informed by over 200 international signatories, offers a visionary roadmap for authentic and lasting change in all music sectors.

        Connect with the Safemuse Female Network, dedicated to supporting at-risk creators, and be inspired by thought-provoking discussions led by industry luminaries, including Silje Larsen Borgan, Erik Egenes, Gina Périer, and Claudia Pereira among others.

        Don't miss captivating performances by artists from Norway, France, and Italy, and savor the rich flavors of Taiwanese cuisine, including the exquisite "guabao" from PÁ-Smaken av Taiwan.`,
        speakers:
          "Silje Riise Næss (Talent Norge), Linda Eng Strand (Norsk Tipping), Christina Hazboun (Keychange), Erik Egenes (by:Larm, Norway), Gina Périer (Lapee, France), Claudia Pereira of CHILEAN WEY and Somos Fuego (Chile),  Silje Larsen Borgan (Little Big Sister, Norway, Keychange Inspiration Award Winner 2022), Solveig Riiser of (Miniøya, Norway), Altyn Kapalova (Museum of Feminist and Queer Art, Kyrgyzstan). CONCERT: Kamara (Norway), Brö (France) IRuna (Italy)",
        isNightProgram: false,
        eventPageURL: null,
      },
      {
        startTime: "18.00",
        endTime: "20.30",
        title: "Silent film concert: The thief of Bagdad",
        venue: "Cinemateket",
        description: `Cinemateket invites you to a unique silent film concert. "The Thief from Baghdad" (1924) is a captivating Hollywood adventure, inspired by "One Thousand and One Nights," Kjetil Schjander Luhr, a renowned silent film musician, sought to provide a fresh cultural perspective for the film. Partnering with Saleh Mahfoud, a Syrian multi-instrumentalist and composer, they crafted a new musical ensemble that blends Hollywood clichés with authentic Arabic music. This concert promises to entertain and enlighten a contemporary audience, 99 years after the film's debut.`,
        isNightProgram: false,
        eventPageURL: null,
      },
      {
        startTime: "19.30",
        title:
          "Mira Thiruchelvam & Vestnorsk Jazzensemble - Pantone 448c with Cumin",
        venue: "Victoria Nasjonal Jazzscene",
        isNightProgram: true,
        eventPageURL:
          "https://www.osloworld.no/en/festival/event/mira-thiruchelvam",
      },
      {
        startTime: "20.00",
        title: "Bixiga 70",
        venue: "Parkteatret",
        isNightProgram: true,
        eventPageURL: "https://www.osloworld.no/en/festival/event/bixiga-70",
      },
      {
        startTime: "20.30",
        title: "Jazz Ain't Nothing but Soul - Tabanka Dance Ensemble",
        venue: "Riksscenen",
        isNightProgram: true,
        eventPageURL:
          "https://www.osloworld.no/en/festival/event/jazz-aint-nothing-but-soul",
      },
      {
        startTime: "19.30",
        title: "Maya Angelou: Black Woman Rising",
        venue: "Nordic Black Theatre",
        isNightProgram: true,
        eventPageURL:
          "https://www.osloworld.no/en/festival/event/maya-angelou-black-woman-rising-2",
      },
      {
        startTime: "21.00",
        title: "Gaye Su Akyol",
        venue: "Cosmopolite",
        isNightProgram: true,
        eventPageURL:
          "https://www.osloworld.no/en/festival/event/gaye-su-akyol",
      },
      {
        startTime: "22.00",
        title: "Nefertiti, Gela & Dara Woo",
        venue: "Jæger",
        isNightProgram: true,
        eventPageURL:
          "https://www.osloworld.no/en/festival/event/nefertiti-gela-dara-woo",
      },
      {
        startTime: "09.30",
        endTime: "10.45",
        title:
          "Group Coaching session for Keychange participants: Mastering Music Conferences, Markets, and Festivals with Kea Ostovany",
        venue: "Den Norske Opera & Ballett",
        language: "English",
        obligatoryTarget: "keychange",
        description: `A captivating Group Coaching session tailored for Keychange participants. Are you a music industry enthusiast eager to unlock the full potential of music conferences, markets, and festivals? Delve into the secrets of navigating these dynamic arenas with Kea Ostovany, an accomplished executive coach, consultant, speaker, and lecturer, boasting over 18 years of experience. Norge, specializing in nurturing top talents and leaders across various domains, including CEOs, major artists, champion athletes, and TED Talk speakers. Her international work spans diverse sectors, from multinational corporations to media, creative industries, and educational institutions.`,
        speakers: "Kea Ostovany",
        isNightProgram: false,
        eventPageURL: null,
      },
    ],
  },
  {
    day: "Thursday 2nd of November",
    dayStringForDate: "2023-11-02",
    events: [
      {
        startTime: "12.00",
        endTime: "13.00",
        title: "We don't talk about oil",
        venue: "Melahuset",
        language: "English",
        obligatoryTarget: "all",
        description: `This panel explores Norway's relationship with oil, its cultural implications, and the challenges of discussing this sensitive topic while receiving public funding.`,
        speakers:
          "Julie Forchhammer (Co-founder / partner Klimakultur SA),  Khalid Albaih (Sudanese political cartoonist and civil rights activist), Calum Macintyre (Stopp Oljeletinga)  Silje Ask Lundberg (Oil Change international)",
        isNightProgram: false,
        eventPageURL: null,
      },
      {
        startTime: "16.00",
        endTime: "17.00",
        title:
          "Seen and heard echoes of Vietnam: Who defines how we are represented?",
        venue: "Internasjonalen",
        language: "English",
        obligatoryTarget: "all",
        description: `Step into a world where echoes of Vietnam resound, where stories are shaped and redefined, and where the power of representation takes center stage.`,
        speakers: "Susanne Xin, Zach Sch, Jung Buffalo, Chi Ton",
        isNightProgram: false,
        eventPageURL: null,
      },
      {
        startTime: "18.00",
        endTime: "18.45",
        title: "Disappearing Soundscapes",
        venue: "Fotogalleriet",
        language: "English",
        obligatoryTarget: "all",
        description: `In a world increasingly endangered by climate injustice and people's forced exile, how can we collect sounds and, therefore, stories otherwise threatened to disappear?How can art bear witness to multifaceted and complex realities while preserving disappearing communities and other spaces? What's the role sound plays in it?`,
        speakers:
          "Andrea Laumont (Sound Earth Legacy), Christina Hazboun (Keychange/ The Sonic Agent), Bente Geving (Artist), Antonio Cataldo (Fotogalleriet)",
        isNightProgram: false,
        eventPageURL: null,
      },
      {
        startTime: "18.00",
        endTime: "19.00",
        title: "Vernissage: Relentless Flow of Time",
        venue: "Brugata 15",
        language: "English",
        description: `In RELENTLESS FLOW OF TIME the artist is interested in the phenomenon of information deformation in the post-truth era, when information flow is characterized by the layering, distortion and devaluation of meanings.An art exhibition curated by Safemuse at Brugata 15 during the Oslo World festival week.`,
        speakers:
          "Zhanna Gladko, a brilliant contemporary artist hailing from Belarus. Presently situated in Oslo as an integral part of the Safemuse Artistic Residency's Oslo Safe Artistic Haven program.",
        isNightProgram: false,
        eventPageURL: null,
      },
      {
        startTime: "19.00",
        endTime: "20.00",
        title: "Music and Spaces: A love-hate story in Beirut",
        venue: "Byens Tak",
        language: "English",
        obligatoryTarget: "all",
        description: `The conversation looks at how culture can persevere through adversity, using their unique circumstances to shape their soundscapes. What is the evolving role of architecture in shaping the sonic experiences of audiences and artists alike?`,
        speakers:
          "Mayssa Jallad, Anthony Tawil, Synne Bergby, Amani Semaan, Yara Mrad",
        isNightProgram: false,
        eventPageURL: null,
      },
      {
        startTime: "20.00",
        title: "ONIPA",
        venue: "Victoria Nasjonal Jazzscene",
        isNightProgram: true,
        eventPageURL: "https://www.osloworld.no/en/festival/event/onipa",
      },
      {
        startTime: "20.30",
        title: "Mellom fjell - Erlend Viken & Sanskriti Shrestha",
        venue: "Riksscenen",
        isNightProgram: true,
        eventPageURL:
          "https://www.osloworld.no/en/festival/event/mellom-fjell-erlend-viken-sanskriti-shrestha",
      },
      {
        startTime: "21.00",
        title: "Roberto Fonseca",
        venue: "Cosmopolite",
        isNightProgram: true,
        eventPageURL:
          "https://www.osloworld.no/en/festival/event/roberto-fonseca",
      },
      {
        startTime: "21.00",
        title: "Rắn Cạp Đuôi Collective",
        venue: "Kafé Hærverk",
        isNightProgram: true,
        eventPageURL:
          "https://www.osloworld.no/en/festival/event/ran-cap-duoi-collective",
      },
      {
        startTime: "22.00",
        title: "Mamdouh",
        venue: "Kafé Hærverk",
        isNightProgram: true,
        eventPageURL: "https://www.osloworld.no/en/festival/event/mamdouh",
      },
      {
        startTime: "22.00",
        title: "Nur Jaber, Soju Princess, Normann & Ole HK",
        venue: "Jæger",
        isNightProgram: true,
        eventPageURL:
          "https://www.osloworld.no/en/festival/event/nur-jaber-soju-princess-normann-ole-hk",
      },
      {
        startTime: "19.00",
        title: "Duquende",
        venue: "Parkteatret",
        isNightProgram: true,
        eventPageURL:
          "https://www.osloworld.no/en/festival/event/os-mutantes-2-2",
      },
      {
        startTime: "20.00",
        title: "Beirut & Beyond: Walid Ben Selim",
        venue: "Byens Tak",
        isNightProgram: true,
        eventPageURL:
          "https://www.osloworld.no/en/festival/event/walid-ben-selim-ammar-808-mayssa-jalad",
      },
      {
        startTime: "21.00",
        title: "Beirut & Beyond: Mayssa Jallad",
        venue: "Byens Tak",
        isNightProgram: true,
        eventPageURL:
          "https://www.osloworld.no/en/festival/event/walid-ben-selim-ammar-808-mayssa-jalad",
      },
      {
        startTime: "22.00",
        title: "Beirut & Beyond: Ammar 808",
        venue: "Byens Tak",
        isNightProgram: true,
        eventPageURL:
          "https://www.osloworld.no/en/festival/event/walid-ben-selim-ammar-808-mayssa-jalad",
      },
      {
        startTime: "17.00",
        endTime: "18.00",
        title: "Vernissage Khartoon Deconstructed",
        venue: "Baba Bar",
        language: "English",
        description: `Khartoon Deconstructed is an exhibition where political cartoonist Khalid Albaih extracts isolated components from his cartoons, presenting them as standalone, larger-than-life prints. This intentional detachment invites audiences to engage with these fragments devoid of their original contexts. Even though each piece looks complete, they are not. This creative endeavour draws a compelling parallel to the contemporary landscape shaped by the "filter bubble" and "fast news" world. A reevaluation of the puzzle pieces where in most cases the viewer wouldn't know there is a puzzle to begin with.`,
        speakers: "Khalid Albaih",
        isNightProgram: false,
        eventPageURL: null,
      },
      {
        startTime: "10.00",
        endTime: "12.00",
        title: "Creative Labs Keychange",
        venue: "Melahuset",
        language: "English",
        description: `A guided workshop with Sam Rise tailored for Keychange participants only.`,
        speakers: "Sam Rise",
        obligatoryTarget: "keychange",
        isNightProgram: false,
        eventPageURL: null,
      },
    ],
  },
  {
    day: "Friday 3rd of November",
    dayStringForDate: "2023-11-03",
    events: [
      {
        startTime: "13.00",
        endTime: "15.00",
        title: "Masterclass with Huun-Huur-Tu",
        venue: "Norges musikkhøgskole",
        language: "English",
        description: `Experience the mesmerizing traditional laryngeal singing of Huun-Huur-Tu in a two-hour masterclass.`,
        isNightProgram: false,
        eventPageURL: null,
      },
      {
        startTime: "16.30",
        endTime: "17.30",
        title: "The Power of Music",
        venue: "Internasjonalen",
        language: "English",
        obligatoryTarget: "all",
        description: `An exclusive artist talk with the legendary Greek artist, George Dalaras!`,
        speakers: "Theodoros Rakopoulos, George Dalaras",
        isNightProgram: false,
        eventPageURL: null,
      },
      {
        startTime: "17.30",
        endTime: "18.30",
        title: "Moroccan Soundscapes Shifting Norwegian Paradigms",
        venue: "Baba Bar",
        language: "English",
        obligatoryTarget: "all",
        description: `An exploration of the evolving Moroccan music panorama and its dynamic convergence with the Norwegian soundscape.`,
        speakers: "Manal, Royane, Nassima Dzair",
        isNightProgram: false,
        eventPageURL: null,
      },
      {
        startTime: "19.00",
        title: "Huun-Huur-Tu",
        venue: "Cosmopolite",
        isNightProgram: true,
        eventPageURL: "https://www.osloworld.no/en/festival/event/huun-huur-tu",
      },
      {
        startTime: "19.00",
        title: "Via Injabulo - dansekompaniet Via Katlehong",
        venue: "Dansens Hus",
        isNightProgram: true,
        eventPageURL:
          "https://www.osloworld.no/en/festival/event/via-katlehong",
      },
      {
        startTime: "19.30",
        title:
          "“Lullaby of the sea” - Solveig Slettahjell, Mahsa Vahdat, Tord Gustavsen og Sjur Miljeteig",
        venue: "Kulturkirken Jakob",
        isNightProgram: true,
        eventPageURL:
          "https://www.osloworld.no/en/festival/event/lullaby-of-the-sea-solveig-slettahjell-mahsa-vahdat-tord-gustavsen-og-sjur-miljeteig",
      },
      {
        startTime: "21.00",
        title: "Exile and women rights in Iran",
        venue: "Kulturkirken Jakob",
        isNightProgram: true,
        eventPageURL:
          "https://www.osloworld.no/en/festival/event/lullaby-of-the-sea-exile-and-womens-rights-in-iran",
      },
      {
        startTime: "19.30",
        title: "Oslo World UNG: Hillari",
        venue: "Deichman Bjørvika",
        isNightProgram: true,
        eventPageURL:
          "https://www.osloworld.no/en/festival/event/hillari-rambow",
      },
      {
        startTime: "20.30",
        title: "Oslo World UNG: Rambow",
        venue: "Deichman Bjørvika",
        isNightProgram: true,
        eventPageURL:
          "https://www.osloworld.no/en/festival/event/hillari-rambow",
      },
      {
        startTime: "20.00",
        title: "Almir & Daniel with A. Cissoko, M. Mortensson & S. Camara",
        venue: "Victoria Nasjonal Jazzscene",
        isNightProgram: true,
        eventPageURL: "https://www.osloworld.no/en/festival/event/almir-daniel",
      },
      {
        startTime: "20.30",
        title: "Royane",
        venue: "Parkteatret",
        isNightProgram: true,
        eventPageURL:
          "https://www.osloworld.no/en/festival/event/manal-supp-royane",
      },
      {
        startTime: "21.00",
        title: "Manal",
        venue: "Parkteatret",
        isNightProgram: true,
        eventPageURL:
          "https://www.osloworld.no/en/festival/event/manal-supp-royane",
      },
      {
        startTime: "22.00",
        title: "Bad Gyal",
        venue: "Rockefeller Music Hall",
        isNightProgram: true,
        eventPageURL: "https://www.osloworld.no/en/festival/event/bad-gyal",
      },
      {
        startTime: "21.00",
        title: "Gabriela Garrubo",
        venue: "Kafé Hærverk",
        isNightProgram: true,
        eventPageURL:
          "https://www.osloworld.no/en/festival/event/gabriela-garrubo",
      },
      {
        startTime: "21.30",
        title: "Sara Parkman",
        venue: "Cosmopolite",
        isNightProgram: true,
        eventPageURL: "https://www.osloworld.no/en/festival/event/sara-parkman",
      },
      {
        startTime: "20.30",
        title: "“Herifrå” - Erlend Apneseth",
        venue: "Riksscenen",
        isNightProgram: true,
        eventPageURL:
          "https://www.osloworld.no/en/festival/event/erlend-apneseth",
      },
      {
        startTime: "22.00",
        title: "Fulu Miziki",
        venue: "Blå",
        isNightProgram: true,
        eventPageURL: "https://www.osloworld.no/en/festival/event/fulu-miziki",
      },
      {
        startTime: "23.30",
        title: "Faizal Mostrixx",
        venue: "Blå",
        isNightProgram: true,
        eventPageURL: "https://www.osloworld.no/en/festival/event/fulu-miziki",
      },
      {
        startTime: "22.00",
        title: "Gabriel Patås",
        venue: "Kafé Hærverk",
        isNightProgram: true,
        eventPageURL:
          "https://www.osloworld.no/en/festival/event/gabriel-patas",
      },
      {
        startTime: "22.00",
        title: "Olga Korol, Per Hammar, Thomas Skjaerstad, G-HA & OLANSKII",
        venue: "Jæger",
        isNightProgram: true,
        eventPageURL:
          "https://www.osloworld.no/en/festival/event/olga-korol-per-hammar-thomas-skjaerstad-g-ha-olanskii",
      },
      {
        startTime: "23.00",
        title: "Baba afterparty: Tunisianlvr + Leila Ajamay",
        venue: "Baba Bar",
        isNightProgram: true,
        eventPageURL:
          "https://www.osloworld.no/en/festival/event/baba-nach-tunisianlvr-leila-ajamay",
      },
    ],
  },
  {
    day: "Saturday 4. november",
    dayStringForDate: "2023-11-04",
    events: [
      {
        startTime: "11.30",
        endTime: "12.15",
        title: "Afro-centred future:  Faizal Mostrixx and Ghetto Kumbé",
        venue: "Melahuset",
        language: "English",
        obligatoryTarget: "all",
        description: `Embark on a captivating journey into Afrofuturism, where African identities are reinvented through groundbreaking music. How does Afrofuturism bridge the gap between traditional sounds and the possibilities of new technologies? How does music empower individuals and communities to reclaim their identities?  How can art and music shed light on environmental challenges?`,
        speakers:
          "Edgardo Garcés (Ghetto Kumbé), Faizal Mostrixx, Angelica Balanta (Miss Balanta)",
        isNightProgram: false,
        eventPageURL: null,
      },
      {
        startTime: "12.30",
        endTime: "14.30",
        title: "Unlocking Creativity: An artivist Workshop with Samantha Rise",
        venue: "Melahuset",
        language: "English",
        description: `Unleash your artistic potential to advocate, subvert, facilitate, and heal, redefining activism with art. Join us for a two-hour session to learn innovative activism methods and create joyful, imaginative interventions for today's global challenges. All, whether artists, organizers, or curious minds, are welcome. Engage in dynamic movement, discussion, and artistry, accommodating diverse learning styles for an inclusive, enriching experience.`,
        speakers: "Sam Rise",
        isNightProgram: false,
        eventPageURL: null,
      },
      {
        startTime: "15.00",
        endTime: "17.00",
        title: "Cartoon Chronicles with Khalid Albaih",
        venue: "Baba Bar",
        language: "English",
        description: `Explore satire, censorship, and misinformation in this interactive cartoon workshop. Led by acclaimed satirical cartoonist Khalid Albaih, discover the power of visual storytelling as a means of communication and expression. Enhance your cartooning skills and address pressing issues through your art, regardless of your prior experience. Unleash your creativity and open your mind to this transformative workshop.`,
        speakers: "Khalid Albaih",
        isNightProgram: false,
        eventPageURL: null,
      },
      {
        startTime: "15.45",
        endTime: "16.30",
        title: "Music, Social Agency and Stage Arts",
        venue: "Dansens Hus",
        language: "English",
        obligatoryTarget: "all",
        description: `This talk will explore the power of dance and performativity as a medium for social expression, the blending of diverse dance styles and cultural influences, and the role of music in inspiring movement. The panelists will share their creative processes and how dance can be a transformative force for both performers and audiences.`,
        speakers:
          "Desire Marea, Thomas Talawa Prestø, Buru Isaac Mohlabane, Jessica Lauren Elizabeth Taylor.",
        isNightProgram: false,
        eventPageURL: null,
      },
      {
        startTime: "17.00",
        endTime: "18.00",
        title: "Musikkreisen Live",
        venue: "Internasjonalen",
        language: "English / Norwegian",
        obligatoryTarget: "all",
        description: `Meet Oslo World's artists in an intimate setting at Internasjonalen, when NRK P2's Musikkreisen - formerly known as Jungetelegrafen - invites you to a live broadcast with the audience.`,
        isNightProgram: false,
        eventPageURL: null,
      },
      {
        startTime: "18.00",
        title: "Synnøve Brøndbo Plassen",
        venue: "Riksscenen",
        isNightProgram: true,
        eventPageURL:
          "https://www.osloworld.no/en/festival/event/synnove-brondbo-plassen",
      },
      {
        startTime: "18.30",
        endTime: "19.30",
        title:
          "BAD HABITS: Nightlife entrepreneurs the most underrated stars of the show",
        venue: "Baba Bar",
        language: "English",
        description: `The DJs need you to shine, the artist needs you for clout, the city needs you to fill up the space. In this talk Perosh QaderA.K.A. Queer Baba founder of Bad Habits Oslo, invites a curated list of his guests to join him in a conversation about curating nightlife culture and the challenges that are met with it.`,
        isNightProgram: false,
        eventPageURL: null,
      },
      {
        startTime: "20.00",
        title: "Yendry",
        venue: "Parkteatret",
        isNightProgram: true,
        eventPageURL: "https://www.osloworld.no/en/festival/event/yendry",
      },
      {
        startTime: "20.00",
        title: "Unganisha",
        venue: "Dunk",
        isNightProgram: true,
        eventPageURL: "https://www.osloworld.no/en/festival/event/ungadisha",
      },
      {
        startTime: "20.00",
        title: "Embla and the Karidotters",
        venue: "Riksscenen",
        isNightProgram: true,
        eventPageURL:
          "https://www.osloworld.no/en/festival/event/embla-and-the-karidotters",
      },
      {
        startTime: "21.00",
        title: "George Dalaras",
        venue: "Sentrum Scene",
        isNightProgram: true,
        eventPageURL:
          "https://www.osloworld.no/en/festival/event/george-dalaras",
      },
      {
        startTime: "21.00",
        title: "DAGADANA",
        venue: "Cosmopolite",
        isNightProgram: true,
        eventPageURL: "https://www.osloworld.no/en/festival/event/dagdana",
      },
      {
        startTime: "21.00",
        title: "Kader Tarhanine",
        venue: "Kafé Hærverk",
        isNightProgram: true,
        eventPageURL:
          "https://www.osloworld.no/en/festival/event/festival-in-exile",
      },
      {
        startTime: "21.30",
        title: "Desire Marea",
        venue: "The National Museum",
        isNightProgram: true,
        eventPageURL: "https://www.osloworld.no/en/festival/event/desire-marea",
      },
      {
        startTime: "21.00",
        title: "Nasha + Dollx + Lena K. O.",
        venue: "Baba Bar",
        isNightProgram: true,
        eventPageURL:
          "https://www.osloworld.no/en/festival/event/nasha-dollx-lena-k-o",
      },
      {
        startTime: "22.00",
        title: "Pahua",
        venue: "Blå",
        isNightProgram: true,
        eventPageURL:
          "https://www.osloworld.no/en/festival/event/ghetto-kumbe-pahua",
      },
      {
        startTime: "23.00",
        title: "Ghetto Kumbé",
        venue: "Blå",
        isNightProgram: true,
        eventPageURL:
          "https://www.osloworld.no/en/festival/event/ghetto-kumbe-pahua",
      },
      {
        startTime: "22.00",
        title: "DJ Mitmitta & DJ Ramy",
        venue: "Kafé Hærverk",
        isNightProgram: true,
        eventPageURL:
          "https://www.osloworld.no/en/festival/event/dj-mitmitta-dj-ramy",
      },
      {
        startTime: "22.00",
        title: "Suchi, Nightflight X Det Gode Selskab, MC Kaman & Kash",
        venue: "Jæger",
        isNightProgram: true,
        eventPageURL:
          "https://www.osloworld.no/en/festival/event/suchi-nightflight-x-det-gode-selskab-mc-kaman-kash",
      },
      {
        startTime: "23.00",
        title:
          "Tuvas Blodklubb: Rubinsztein/Karlsson + Kenneth Lien & Center of the Universe + Cheb Runner",
        venue: "Riksscenen",
        isNightProgram: true,
        eventPageURL:
          "https://www.osloworld.no/en/festival/event/tuvas-blodklubb",
      },
    ],
  },
  {
    day: "Sunday 5. november",
    dayStringForDate: "2023-11-05",
    events: [
      {
        startTime: "15.00",
        endTime: "16.00",
        title: "Afro dance class with CAK",
        venue: "Melahuset",
        language: "English",
        description: `The African Cultural Institute, CAK, is a miniature Africa in Oslo, and for 45 years it has been a key feature of the Norwegian cultural landscape. During Oslo World, CAK has curated a unique Afro dance class. We work with different movements and techniques, and we learn traditional dances that are accompanied by live drumming. Come as you are and experience the joy of African dance, get rid of tension and achieve high cardio and psychomotor gains with live drum rhythms!`,
        speakers:
          "Teacher: Koffi Anselme Konan, Ivory Coast.  He will be accompanied by two master drummers, Bacary Sagna from Senegal and Egole Oulai, from the Ivory Coast.",
        isNightProgram: false,
        eventPageURL: null,
      },
      {
        startTime: "20.00",
        title: "Closing concert: Mariza",
        venue: "Sentrum Scene",
        isNightProgram: true,
        eventPageURL: "https://www.osloworld.no/en/festival/event/mariza",
      },
      {
        startTime: "21.30",
        title: "Closing party + Photo booth med Dina Al Makhrami",
        venue: "Baba Bar",
        isNightProgram: true,
        eventPageURL:
          "https://www.osloworld.no/en/festival/event/avslutningsfest-photo-booth-med-dina-al-makhrami",
      },
    ],
  },
] as const satisfies readonly dayInterface[];
