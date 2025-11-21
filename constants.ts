
import { MediaType, SourceItem, Tour } from './types';

export const INITIAL_SOURCES: SourceItem[] = [
  {
    id: 'src_001',
    title: 'Reefer Madness (Tell Your Children)',
    year: 1936,
    type: MediaType.VIDEO,
    creator: 'Louis J. Gasnier',
    description: 'A highly melodramatic exploitation film revolving around the tragic events that ensue when high school students are lured by pushers to try marijuana.',
    fullAnalysis: `Reefer Madness, originally titled Tell Your Children, stands as the archetypal example of 1930s drug exploitation cinema. Financed by a church group and later purchased by exploitation producer Dwain Esper, the film utilizes a "moral panic" framework to depict marijuana not as a mild intoxicant, but as a direct catalyst for insanity, manslaughter, and sexual depravity. Sociologically, the film reflects the racialized anxieties of the post-Depression era, where marijuana was increasingly associated with Mexican immigrants and jazz culture, threatening the perceived purity of white American youth.\n\nThe film's hyperbolic depiction of the "marijuana addict"—hallucinating, violent, and instantly hooked—served the political interests of the Federal Bureau of Narcotics under Harry Anslinger. By presenting the drug as an immediate existential threat to the nuclear family, such media helped manufacture consent for the Marihuana Tax Act of 1937. While unintentional comedy to modern audiences, its release marked a critical pivot point where addiction began to be framed less as a criminal contagion requiring aggressive federal intervention.`,
    excerpt: "BILL: 'It's a little late for that now. You've killed a man! You're a murderer! And you're going to the chair!' \n\n[Title Card]: 'The incidents reported here are actual happenings... If their stark reality will make you think, will make you aware of this unspeakable scourge, then we will not have worked in vain.'",
    url: 'https://archive.org/details/reefer_madness1936',
    embedUrl: 'https://archive.org/embed/reefer_madness1936',
    thumbnailUrl: '/images/reefer-madness-poster.jpg',
    tags: ['Marijuana', 'Propaganda', 'Cinema', 'Prohibition'],
    citation: {
      apa: 'Gasnier, L. J. (Director). (1936). Reefer Madness [Film]. Motion Picture Ventures.',
      mla: 'Reefer Madness. Directed by Louis J. Gasnier, Motion Picture Ventures, 1936.',
      chicago: 'Gasnier, Louis J., dir. *Reefer Madness*. 1936; Los Angeles: Motion Picture Ventures.',
      footnotes: []
    },
    furtherReading: [
        {
            title: "Home Grown: Marijuana and the Origins of Mexico's War on Drugs",
            url: "https://uncpress.org/book/9780807835387/home-grown/",
            citation: "Campos, Isaac. *Home Grown: Marijuana and the Origins of Mexico's War on Drugs*. Chapel Hill: University of North Carolina Press, 2012."
        },
        {
            title: "The American Disease: Origins of Narcotic Control",
            url: "https://global.oup.com/academic/product/the-american-disease-9780195125092",
            citation: "Musto, David F. *The American Disease: Origins of Narcotic Control*. New York: Oxford University Press, 1999."
        }
    ],
    location: 'Los Angeles, CA',
    coordinates: [34.0522, -118.2437]
  },
  {
    id: 'src_002',
    title: 'Cocaine Toothache Drops Advertisement',
    year: 1885,
    type: MediaType.IMAGE,
    creator: 'Lloyd Manufacturing Co.',
    description: 'An advertisement for cocaine-infused toothache drops, highlighting the casual availability of hard drugs in 19th-century pharmacies for children and adults.',
    fullAnalysis: `This advertisement for Lloyd's Cocaine Toothache Drops encapsulates the "Golden Age of Patent Medicine," a period prior to the 1906 Pure Food and Drug Act when potent narcotics were unregulated consumer goods. The casual imagery—children playing, a well-dressed promise of "instantaneous cure"—belies the potent pharmacological reality of the product. In 1885, cocaine was widely hailed by medical professionals as a miracle anesthetic and stimulant.\n\nThe advertisement illustrates the domestication of cocaine in the late Victorian era. It was not sold in back alleys but in reputable pharmacies, priced at 15 cents. This normalization reveals how drug categorization is socially constructed; what is today a Schedule I controlled substance was then a standard item in the domestic medicine cabinet.`,
    excerpt: "COCAINE TOOTHACHE DROPS\nInstantaneous Cure!\nPrice 15 Cents.\nPrepared by the Lloyd Manufacturing Co.\nFor sale by all Druggists.",
    url: 'https://commons.wikimedia.org/wiki/File:Cocaine_Toothache_Drops_(6875689573).jpg',
    thumbnailUrl: '/images/cocaine-toothache-drops.jpg',
    tags: ['Cocaine', 'Medicine', 'Advertising', 'Children'],
    citation: {
      apa: 'Lloyd Manufacturing Co. (1885). Cocaine Toothache Drops [Advertisement]. Albany, NY.',
      mla: 'Lloyd Manufacturing Co. "Cocaine Toothache Drops." Advertisement, 1885.',
      chicago: 'Lloyd Manufacturing Co. "Cocaine Toothache Drops." Advertisement. Albany, NY, 1885.',
      footnotes: []
    },
    furtherReading: [
        {
            title: "Cocaine: An Unauthorized Biography",
            url: "https://us.macmillan.com/books/9780312422264/cocaine",
            citation: "Streatfeild, Dominic. *Cocaine: An Unauthorized Biography*. New York: St. Martin's Press, 2002."
        },
        {
            title: "Forces of Habit: Drugs and the Making of the Modern World",
            url: "https://www.hup.harvard.edu/catalog.php?isbn=9780674010043",
            citation: "Courtwright, David T. *Forces of Habit: Drugs and the Making of the Modern World*. Cambridge: Harvard University Press, 2001."
        }
    ],
    location: 'Albany, NY',
    coordinates: [42.6526, -73.7562]
  },
  {
    id: 'src_003',
    title: 'The Harrison Narcotics Tax Act',
    year: 1914,
    type: MediaType.TEXT,
    creator: 'United States Congress',
    description: 'Public Law 63-223. The foundational legislation that regulated and taxed the production, importation, and distribution of opiates and coca products.',
    fullAnalysis: `The Harrison Narcotics Tax Act of 1914 ostensibly functioned as a revenue measure, using the federal government's tax powers to register and track the flow of opiates and coca. However, its enforcement effectively criminalized the maintenance of addiction, forcing doctors to stop prescribing to addicts and driving the trade underground. This marked the pivotal transition from the "medical model" of addiction to the "criminal model".\n\nThe Act was partly motivated by international treaty obligations from the Hague Convention, but domestic support was drummed up through racial panic—specifically, fears of Chinese opium dens and "cocaine-crazed" laborers in the South. By leveraging the tax code to police morality, the Harrison Act established the bureaucratic infrastructure for the modern War on Drugs.`,
    excerpt: "Be it enacted by the Senate and House of Representatives... That on and after the first day of March, nineteen hundred and fifteen, every person who produces, imports, manufactures, compounds, deals in, dispenses, sells, distributes, or gives away opium or coca leaves... shall register with the collector of internal revenue...",
    url: 'https://www.dea.gov/sites/default/files/2018-06/harrison-act-1914.pdf',
    thumbnailUrl: '/images/woodrow-wilson-1914.jpg',
    tags: ['Law', 'Opioids', 'Cocaine', 'Government'],
    citation: {
      apa: 'Harrison Narcotics Tax Act, Pub. L. No. 63-223, 38 Stat. 785 (1914).',
      mla: 'Harrison Narcotics Tax Act. Public Law 63-223. 17 Dec. 1914.',
      chicago: 'Harrison Narcotics Tax Act, Public Law 63-223, 38 Stat. 785 (1914).',
      footnotes: []
    },
    furtherReading: [
        {
            title: "Dark Paradise: A History of Opiate Addiction in America",
            url: "https://www.hup.harvard.edu/catalog.php?isbn=9780674192619",
            citation: "Courtwright, David T. *Dark Paradise: A History of Opiate Addiction in America*. Cambridge: Harvard University Press, 2001."
        },
        {
            title: "Creating the Federal Bureau of Narcotics",
            url: "#",
            citation: "McAllister, William B. *Drug Diplomacy in the Twentieth Century: An International History*. London: Routledge, 2000."
        }
    ],
    location: 'Washington, D.C.',
    coordinates: [38.9072, -77.0369]
  },
  {
    id: 'src_004',
    title: 'Minnie the Moocher',
    year: 1931,
    type: MediaType.AUDIO,
    creator: 'Cab Calloway and His Orchestra',
    description: 'A jazz standard famous for its call-and-response scatting and references to the drug culture of the era, specifically opium ("kicking the gong around").',
    fullAnalysis: `Cab Calloway's "Minnie the Moocher" is a masterpiece of the Jazz Age that coded the illicit drug culture of Harlem into mainstream entertainment. The lyrics describe Minnie's boyfriend, "Smokey," as "cokey" (a cocaine user) and narrate a dream sequence triggered by "kicking the gong around"—slang for smoking opium. This coded language allowed the song to bypass censors while delighting insiders.\n\nThe song reflects the vital role of drugs in the creative economy of the Harlem Renaissance. Unlike the moralizing tone of temperance literature, Calloway's delivery is exuberant and celebratory, treating drug use as an integral, if tragicomic, element of the "low-down" nightlife.`,
    excerpt: "She messed around with a bloke named Smokey / She loved him though he was cokey / He took her down to Chinatown / And he showed her how to kick the gong around...",
    url: 'https://archive.org/details/78_minnie-the-moocher_cab-calloway-and-his-orchestra-cab-calloway_gbia0003888b',
    embedUrl: 'https://archive.org/embed/78_minnie-the-moocher_cab-calloway-and-his-orchestra-cab-calloway_gbia0003888b',
    thumbnailUrl: '/images/cab-calloway.jpg',
    tags: ['Jazz', 'Opium', 'Music', 'Harlem Renaissance'],
    citation: {
      apa: 'Calloway, C. (1931). Minnie the Moocher [Song]. Brunswick.',
      mla: 'Calloway, Cab. "Minnie the Moocher." Brunswick, 1931.',
      chicago: 'Calloway, Cab. "Minnie the Moocher." Brunswick 6074, 1931, 78 rpm.',
      footnotes: []
    },
    furtherReading: [
        {
            title: "Hep-Cats, Narcs, and Pipe Dreams",
            url: "https://jhupbooks.press.jhu.edu/title/hep-cats-narcs-and-pipe-dreams",
            citation: "Jonnes, Jill. *Hep-Cats, Narcs, and Pipe Dreams: A History of America's Romance with Illegal Drugs*. Baltimore: Johns Hopkins University Press, 1999."
        },
        {
            title: "Can't Anyone Here Play This Instrument? (Jazz and Drugs)",
            url: "#",
            citation: "Singer, Merrill. *The Drugging of the Americas: How Multinational Corporations Created a Craving for Energy*. Gainesville: University Press of Florida, 2008."
        }
    ],
    location: 'New York, NY',
    coordinates: [40.8115, -73.9465]
  },
  {
    id: 'src_005',
    title: 'Bayer Heroin Bottle',
    year: 1900,
    type: MediaType.IMAGE,
    creator: 'Farbenfabriken vorm. Friedr. Bayer & Co.',
    description: 'Packaging for Heroin (diacetylmorphine), originally marketed by Bayer as a non-addictive substitute for morphine and a cough suppressant.',
    fullAnalysis: `This artifact represents one of the greatest ironies in pharmaceutical history. In 1898, Bayer launched "Heroin" (diacetylmorphine) as a safer, non-addictive alternative to morphine and a cough suppressant for children. The brand name was derived from the German word "heroisch" (heroic), referring to the feeling of power and wellness reported by test subjects.\n\nThe bottle signifies the era of "scientific" drug promotion, where laboratory synthesis was assumed to yield purer, safer results than natural botanicals. It was only after years of widespread use that the devastating addictive potential of Heroin became undeniable—it was, in fact, more potent and faster-acting than the morphine it was meant to replace.`,
    excerpt: "HEROIN / The Sedative for Coughs / FARBENFABRIKEN VORM FRIEDR BAYER & CO / ELBERFELD",
    url: 'https://commons.wikimedia.org/wiki/File:Bayer_Heroin_bottle.jpg',
    thumbnailUrl: '/images/bayer-heroin-bottle.jpg',
    tags: ['Heroin', 'Medicine', 'Packaging', 'Pharmaceuticals'],
    citation: {
      apa: 'Bayer & Co. (c. 1900). Heroin Bottle [Object]. Pharmaceutical Packaging.',
      mla: 'Bayer & Co. Heroin Bottle. c. 1900.',
      chicago: 'Bayer & Co. *Heroin Bottle*. Glass and paper artifact. Elberfeld, Germany, c. 1900.',
      footnotes: []
    },
    furtherReading: [
        {
            title: "Opium: A History",
            url: "https://us.macmillan.com/books/9780312206673/opium",
            citation: "Booth, Martin. *Opium: A History*. New York: St. Martin's Press, 1996."
        },
        {
            title: "Drugs in America: A Social History",
            url: "#",
            citation: "Morgan, H. Wayne. *Drugs in America: A Social History, 1800-1980*. Syracuse: Syracuse University Press, 1981."
        }
    ],
    location: 'Elberfeld, Germany',
    coordinates: [51.2562, 7.1508]
  },
  {
    id: 'src_006',
    title: 'The Mystery of the Leaping Fish',
    year: 1916,
    type: MediaType.VIDEO,
    creator: 'John Emerson / Douglas Fairbanks',
    description: 'A silent comedy short film starring Douglas Fairbanks as "Coke Ennyday", a detective who constantly injects cocaine and consumes drugs to solve crimes.',
    fullAnalysis: `The Mystery of the Leaping Fish is a bizarre artifact of pre-Code Hollywood, starring the swashbuckling Douglas Fairbanks as "Coke Ennyday", a parody of Sherlock Holmes. The character wears a bandolier of cocaine syringes across his chest and frequently stops the action to inject himself or eat handfuls of opium. The film plays drug use strictly for laughs, depicting it as a quirky, energizing habit rather than a moral failing.\n\nReleased just two years after the Harrison Act, the film captures a fleeting moment where cocaine was still culturally ambiguous enough to be the subject of slapstick comedy. It reminds us that the stigma surrounding hard drugs was not immediate but constructed over time through legislation and shifting cultural narratives.`,
    excerpt: "[Title Card]: 'I'll just take a shot of dope and then I'll be all right.'\n[Action]: Coke Ennyday consults his 'clock' which is divided not into hours, but into options like 'Eats', 'Sleep', 'Drinks', and 'Dope'. The hand points to 'Dope'.",
    url: 'https://archive.org/details/TheMysteryOfTheLeapingFish1916',
    embedUrl: 'https://archive.org/embed/TheMysteryOfTheLeapingFish1916',
    thumbnailUrl: '/images/mystery-of-leaping-fish-poster.jpg',
    tags: ['Cocaine', 'Comedy', 'Silent Film', 'Satire'],
    citation: {
      apa: 'Emerson, J. (Director). (1916). The Mystery of the Leaping Fish [Film]. Triangle Film Corporation.',
      mla: 'The Mystery of the Leaping Fish. Directed by John Emerson, Triangle Film Corporation, 1916.',
      chicago: 'Emerson, John, dir. *The Mystery of the Leaping Fish*. 1916; Los Angeles: Triangle Film Corporation.',
      footnotes: []
    },
    furtherReading: [
        {
            title: "Cocaine in American Film",
            url: "#",
            citation: "Starks, Michael. *Cocaine Fiends and Reefer Madness: An Illustrated History of Drugs in the Movies*. New York: Cornwall Books, 1982."
        },
        {
            title: "The Pursuit of Oblivion",
            url: "#",
            citation: "Davenport-Hines, Richard. *The Pursuit of Oblivion: A Global History of Narcotics*. New York: W.W. Norton, 2002."
        }
    ],
    location: 'Los Angeles, CA',
    coordinates: [34.0522, -118.2437]
  },
  {
    id: 'src_007',
    title: 'Confessions of an English Opium-Eater',
    year: 1885,
    type: MediaType.TEXT,
    creator: 'Thomas De Quincey',
    description: 'While originally published in 1821, this late 19th-century edition circulated widely during the era, influencing the literary perception of addiction.',
    fullAnalysis: `Thomas De Quincey's memoir remained the definitive text on the subjective experience of addiction well into the 20th century. De Quincey established the archetype of the "romantic addict"—a solitary, intellectual figure who uses drugs to explore the depths of the human mind. His vivid descriptions of opium dreams and the "pains of opium" influenced generations of writers.\n\nDe Quincey's work presents a complex duality: it warns against the physical torment of withdrawal while undeniably glamorizing the expanded consciousness the drug provides. This tension between the "heaven" and "hell" of narcotics became a permanent feature of Western drug literature.`,
    excerpt: "I was stared at, hooted at, grinned at, chattered at, by monkeys, by paroquets, by cockatoos. I ran into pagodas: and was fixed, for centuries, at the summit, or in secret rooms... I fled from the wrath of Brama through all the forests of Asia...",
    url: 'https://archive.org/details/confessionsofeng00dequuoft',
    embedUrl: 'https://archive.org/embed/confessionsofeng00dequuoft',
    thumbnailUrl: '/images/thomas-de-quincey.jpg',
    tags: ['Opium', 'Literature', 'Memoir', 'Addiction'],
    citation: {
      apa: 'De Quincey, T. (1885). Confessions of an English Opium-Eater. Kegan Paul, Trench & Co.',
      mla: 'De Quincey, Thomas. Confessions of an English Opium-Eater. Kegan Paul, Trench & Co, 1885.',
      chicago: 'De Quincey, Thomas. *Confessions of an English Opium-Eater*. London: Kegan Paul, Trench & Co, 1885.',
      footnotes: []
    },
    furtherReading: [
        {
            title: "Opium and the People: Opiate Use in Nineteenth-Century England",
            url: "#",
            citation: "Berridge, Virginia, and Griffith Edwards. *Opium and the People: Opiate Use in Nineteenth-Century England*. London: Yale University Press, 1999."
        },
        {
            title: "Writing on Drugs",
            url: "#",
            citation: "Plant, Sadie. *Writing on Drugs*. New York: Farrar, Straus and Giroux, 2000."
        }
    ],
    location: 'London, UK',
    coordinates: [51.5074, -0.1278]
  },
  {
    id: 'src_008',
    title: 'Marihuana Tax Act of 1937',
    year: 1937,
    type: MediaType.TEXT,
    creator: 'United States Congress',
    description: 'The federal statute that effectively criminalized marijuana by placing an exorbitant tax on its commercial sale.',
    fullAnalysis: `The Marihuana Tax Act of 1937 represents the culmination of Harry Anslinger's bureaucratic crusade against cannabis. Lacking the constitutional authority to outlaw the plant directly, the federal government used a tax scheme similar to the Harrison Act. Anyone dealing in marijuana had to buy a tax stamp, but the stamps were effectively impossible to purchase for recreational use, and possession without one was a federal crime.\n\nThe Act is a case study in how minority practices (marijuana use was strongly associated with Mexican laborers and Black jazz musicians) are legislated against under the guise of public safety. This law effectively ended the legal medical use of cannabis in the US for decades and established the adversarial relationship between the federal government and the plant that persists today.`,
    excerpt: "SECTION 2. (a) Every person who imports, manufactures, produces, compounds, sells, deals in, dispenses, prescribes, administers, or gives away marihuana shall... pay the following special taxes per annum... \n(b) It shall be unlawful for any person... to deal in... marihuana without having so registered and paid such tax.",
    url: 'https://en.wikipedia.org/wiki/Marihuana_Tax_Act_of_1937',
    thumbnailUrl: '/images/marihuana-tax-act-stamp.jpg',
    tags: ['Marijuana', 'Law', 'Taxation', 'Anslinger'],
    citation: {
      apa: 'Marihuana Tax Act of 1937, Pub. L. No. 75-238, 50 Stat. 551 (1937).',
      mla: 'Marihuana Tax Act of 1937. Public Law 75-238. 2 Aug. 1937.',
      chicago: 'Marihuana Tax Act of 1937, Public Law 75-238, 50 Stat. 551 (1937).',
      footnotes: []
    },
    furtherReading: [
        {
            title: "The Protean Shape of Cannabis Culture",
            url: "#",
            citation: "Bonnie, Richard J., and Charles H. Whitebread. *The Marijuana Conviction: A History of Marijuana Prohibition in the United States*. Charlottesville: University Press of Virginia, 1974."
        },
        {
            title: "Cannabis: A History",
            url: "#",
            citation: "Booth, Martin. *Cannabis: A History*. New York: St. Martin's Press, 2003."
        }
    ],
    location: 'Washington, D.C.',
    coordinates: [38.8899, -77.0090]
  },
  {
    id: 'src_009',
    title: 'We Want Beer (Protest)',
    year: 1932,
    type: MediaType.IMAGE,
    creator: 'Unknown Photographer',
    description: 'A famous photograph of men parading in New York City holding signs stating "We Want Beer", representing the growing public sentiment against Prohibition.',
    fullAnalysis: `This iconic photograph captures the "We Want Beer" parade in New York City, symbolizing the collapse of public support for Prohibition in the early 1930s. By 1932, the Great Depression had ravaged the economy, and the promise that banning alcohol would lead to prosperity had proven demonstrably false. Instead, Prohibition fueled organized crime and deprived the government of tax revenue.\n\nThe image highlights the specific demand for beer—the working man's drink—framing the anti-Prohibition movement as a labor and class issue. The repeal movement argued that legalizing alcohol would create jobs and tax revenue needed for recovery, a pragmatic shift that led to the passage of the 21st Amendment in 1933.`,
    excerpt: "[Signage in Photo]: 'WE WANT BEER' held by marching men in suits and hats.",
    url: 'https://en.wikipedia.org/wiki/Repeal_of_Prohibition',
    thumbnailUrl: '/images/we-want-beer.jpg',
    tags: ['Alcohol', 'Prohibition', 'Protest', 'History'],
    citation: {
      apa: 'Unknown. (1932). We Want Beer Parade [Photograph]. New York.',
      mla: 'Unknown. "We Want Beer Parade." Photograph, 1932.',
      chicago: 'Unknown photographer. "We Want Beer Parade." Gelatin silver print. New York, 1932.',
      footnotes: []
    },
    furtherReading: [
        {
            title: "Last Call: The Rise and Fall of Prohibition",
            url: "https://www.simonandschuster.com/books/Last-Call/Daniel-Okrent/9780743277044",
            citation: "Okrent, Daniel. *Last Call: The Rise and Fall of Prohibition*. New York: Scribner, 2010."
        },
        {
            title: "The War on Alcohol",
            url: "#",
            citation: "McGirr, Lisa. *The War on Alcohol: Prohibition and the Rise of the American State*. New York: W.W. Norton, 2016."
        }
    ],
    location: 'New York, NY',
    coordinates: [40.7128, -74.0060]
  },
  {
    id: 'src_010',
    title: 'Willie the Weeper',
    year: 1927,
    type: MediaType.AUDIO,
    creator: 'Louis Armstrong and His Hot Seven',
    description: 'A classic jazz song about a "chimney sweeper" who has vivid dreams caused by his drug habits, a standard in the "dope song" repertoire.',
    fullAnalysis: `Louis Armstrong's rendition of "Willie the Weeper" is a definitive track in the "junkie blues" genre. The song narrates the opium-induced hallucinations of Willie, a chimney sweeper who dreams he is a rich potentate in the Orient. The lyrics are a catalogue of drug slang and surreal imagery, referencing the "hop joint" (opium den) and the "pill" (opium pellet).\n\nThe track thematically connects the drudgery of working-class life with the escapism provided by narcotics. Unlike later moralizing tales, the song treats Willie's habit with a mix of humor and sympathy, acknowledging the drug as a portal to a fantasy life inaccessible to a poor laborer in the real world.`,
    excerpt: "Did you ever hear the story of Willie the Weeper? / Made his living as a chimney sweeper / He had the hop habit and he had it bad / Listen and I'll tell you 'bout a dream he had...",
    url: 'https://archive.org/details/78_willie-the-weeper_louis-armstrong-and-his-hot-seven_gbia0012429a',
    embedUrl: 'https://archive.org/embed/78_willie-the-weeper_louis-armstrong-and-his-hot-seven_gbia0012429a',
    thumbnailUrl: '/images/louis-armstrong.jpg',
    tags: ['Jazz', 'Opium', 'Dreams', 'Music'],
    citation: {
      apa: 'Armstrong, L. (1927). Willie the Weeper [Song]. Okeh.',
      mla: 'Armstrong, Louis. "Willie the Weeper." Okeh, 1927.',
      chicago: 'Armstrong, Louis. "Willie the Weeper." Okeh 8482, 1927, 78 rpm.',
      footnotes: []
    },
    furtherReading: [
        {
            title: "Pops: A Life of Louis Armstrong",
            url: "#",
            citation: "Teachout, Terry. *Pops: A Life of Louis Armstrong*. Boston: Houghton Mifflin Harcourt, 2009."
        },
        {
            title: "High Times: The History of Drugs in Music",
            url: "#",
            citation: "Shapiro, Harry. *Waiting for the Man: The Story of Drugs and Popular Music*. London: Helter Skelter, 1999."
        }
    ],
    location: 'Chicago, IL',
    coordinates: [41.8781, -87.6298]
  },
  {
    id: 'src_011',
    title: 'Mrs. Winslow\'s Soothing Syrup',
    year: 1887,
    type: MediaType.IMAGE,
    creator: 'Curtis & Perkins',
    description: 'Trade card for a popular infant medicine containing morphine and alcohol, widely used to quiet crying babies.',
    fullAnalysis: `Mrs. Winslow's Soothing Syrup is perhaps the most infamous example of the dangers of the patent medicine era. Marketed aggressively to exhausted mothers as a safe way to calm teething or colicky babies, the syrup contained substantial amounts of morphine sulphate and alcohol. It was incredibly effective at quieting children—often by sedating them into a coma or slowing their respiration until death occurred.\n\nThe product illustrates the lack of consumer protection in the 19th century. "Comforters" and "soothing syrups" were a major public health hazard. The American Medical Association later labeled it a "baby killer," and it became a primary exhibit in the muckraking journalism that led to the 1906 Pure Food and Drug Act.`,
    excerpt: "MRS. WINSLOW'S SOOTHING SYRUP / For Children Teething / Greatly facilitates the process of teething... will allay ALL PAIN and spasmodic action, and is / SURE TO REGULATE THE BOWELS.",
    url: 'https://en.wikipedia.org/wiki/Mrs._Winslow%27s_Soothing_Syrup',
    thumbnailUrl: '/images/mrs-winslows-soothing-syrup.jpg',
    tags: ['Morphine', 'Medicine', 'Infants', 'Patent Medicine'],
    citation: {
      apa: 'Curtis & Perkins. (1887). Mrs. Winslow\'s Soothing Syrup [Trade Card].',
      mla: 'Curtis & Perkins. "Mrs. Winslow\'s Soothing Syrup." Trade Card, 1887.',
      chicago: 'Curtis & Perkins. "Mrs. Winslow\'s Soothing Syrup." Chromolithograph trade card. New York, 1887.',
      footnotes: []
    },
    furtherReading: [
        {
            title: "The Toadstool Millionaires",
            url: "https://press.princeton.edu/books/paperback/9780691655528/the-toadstool-millionaires",
            citation: "Young, James Harvey. *The Toadstool Millionaires: A Social History of Patent Medicines in America before Federal Regulation*. Princeton: Princeton University Press, 1961."
        },
        {
            title: "Consuming Power: A Social History of American Energies",
            url: "#",
            citation: "Nye, David E. *Consuming Power: A Social History of American Energies*. Cambridge: MIT Press, 1998."
        }
    ],
    location: 'New York, NY',
    coordinates: [40.7128, -74.0060]
  },
  {
    id: 'src_012',
    title: 'The Man with the Golden Arm',
    year: 1949,
    type: MediaType.TEXT,
    creator: 'Nelson Algren',
    description: 'A novel dealing with the illicit card games and heroin addiction of Frankie Machine. Winner of the National Book Award.',
    fullAnalysis: `Nelson Algren's "The Man with the Golden Arm" broke new ground in American literature by treating the drug addict not as a monster or a clown, but as a tragic, fully realized human being. The protagonist, Frankie Machine, is a WWII veteran struggling with a morphine habit acquired in the service—a common but under-discussed reality of the post-war era. The novel depicts the grim cycle of the "monkey on the back," dealing with dealers, the physical agony of withdrawal, and the hopelessness of the Chicago slums.\n\nAlgren's gritty realism stripped away the glamour of the "romantic addict," replacing it with the sweat and squalor of the cold-water flat. The book challenged the Hays Code censorship rules regarding the depiction of drug paraphernalia, playing a key role in modernizing cultural dialogue around addiction.`,
    excerpt: "The monkey is never a joke to the junkie... It was a heavy monkey, effectively invisible to all but the man who carried it. A monkey that could be mocked off, laughed off, drunk off or sweated off... yet always returned to sit a little heavier on the shoulder than before.",
    url: 'https://en.wikipedia.org/wiki/The_Man_with_the_Golden_Arm',
    thumbnailUrl: '/images/nelson-algren.jpg',
    tags: ['Heroin', 'Literature', 'Noir', 'Chicago'],
    citation: {
      apa: 'Algren, N. (1949). The Man with the Golden Arm. Doubleday.',
      mla: 'Algren, Nelson. The Man with the Golden Arm. Doubleday, 1949.',
      chicago: 'Algren, Nelson. *The Man with the Golden Arm*. New York: Doubleday, 1949.',
      footnotes: []
    },
    furtherReading: [
        {
            title: "Nelson Algren: A Life on the Wild Side",
            url: "#",
            citation: "Drew, Bettina. *Nelson Algren: A Life on the Wild Side*. New York: Putnam, 1989."
        },
        {
            title: "Federal Drug Control: The Evolution of Policy",
            url: "#",
            citation: "Spillane, Joseph F. *Cocaine: From Medical Marvel to Modern Menace in the United States, 1884-1920*. Baltimore: Johns Hopkins University Press, 2000."
        }
    ],
    location: 'Chicago, IL',
    coordinates: [41.9055, -87.6691]
  },
  {
    id: 'src_013',
    title: 'Cocaine Habit Blues',
    year: 1930,
    type: MediaType.AUDIO,
    creator: 'Memphis Jug Band',
    description: 'A jug band blues song explicitly detailing the effects of cocaine addiction ("Take a whiff on me"), illustrating the drug\'s prevalence in the American South.',
    fullAnalysis: `The Memphis Jug Band’s "Cocaine Habit Blues" (1930) provides a raw, unfiltered glimpse into the recreational drug use of the American South during the Jim Crow era. Unlike the moralizing tone of temperance songs, this jug band classic treats cocaine addiction with a mix of humor and resignation. The lyrics detail the physical compulsion of the drug ("Take a whiff on me") and its association with endurance and hard labor.\n\nThe song illustrates how cocaine was not merely an urban phenomenon but was deeply embedded in rural and working-class communities. It also reflects the era before strict enforcement, where the drug was still accessible enough to be a common subject of folk blues tradition.`,
    url: 'https://www.youtube.com/watch?v=AiZ4ePW9sgY',
    embedUrl: 'https://www.youtube.com/watch?v=AiZ4ePW9sgY',
    thumbnailUrl: '/images/memphis-jug-band.jpg',
    tags: ['Blues', 'Cocaine', 'Music', 'South'],
    citation: {
      apa: 'Memphis Jug Band. (1930). Cocaine Habit Blues [Song]. Victor.',
      mla: 'Memphis Jug Band. "Cocaine Habit Blues." Victor, 1930.',
      chicago: 'Memphis Jug Band. "Cocaine Habit Blues." Victor V-38599, 1930, 78 rpm.',
      footnotes: []
    },
    furtherReading: [
        {
            title: "Deep Blues",
            url: "#",
            citation: "Palmer, Robert. *Deep Blues*. New York: Viking Press, 1981."
        },
        {
            title: "Segregating Sound",
            url: "#",
            citation: "Miller, Karl Hagstrom. *Segregating Sound: Inventing Folk and Pop Music in the Age of Jim Crow*. Durham: Duke University Press, 2010."
        }
    ],
    location: 'Memphis, TN',
    coordinates: [35.1495, -90.0490]
  },
  {
    id: 'src_014',
    title: 'Hemp for Victory',
    year: 1942,
    type: MediaType.VIDEO,
    creator: 'U.S. Department of Agriculture',
    description: 'A government informational film encouraging farmers to grow hemp for the war effort during WWII, a stark contrast to previous and subsequent anti-marijuana stances.',
    fullAnalysis: `Hemp for Victory is a fascinating historical pivot point that exposes the pragmatic hypocrisy of US drug policy. Just five years after the 1937 Marihuana Tax Act had effectively banned cannabis cultivation, the US government found itself cut off from Asian supplies of hemp due to Japanese conquests in WWII. In response, the USDA produced this film, urging patriotic American farmers to plant hemp for naval rope, parachute webbing, and shoes.\n\nThe film completely sanitizes the plant, referring to it strictly as an industrial crop and ignoring its psychoactive properties or its demonization as "marijuana." After the war, the government attempted to bury the film, denying its existence until archives surfaced in the 1980s.`,
    excerpt: "[Narrator]: 'Hemp for mooring ships! Hemp for tow lines! Hemp for tackle and gear! ... American hemp will go on duty again: hemp for the victory!'",
    url: 'https://archive.org/details/Hemp_for_victory_1942',
    embedUrl: 'https://archive.org/details/Hemp_for_victory_1942',
    thumbnailUrl: '/images/hemp-for-victory-poster.jpg',
    tags: ['Hemp', 'Propaganda', 'WWII', 'Agriculture'],
    citation: {
      apa: 'U.S. Department of Agriculture. (1942). Hemp for Victory [Film].',
      mla: 'Hemp for Victory. U.S. Department of Agriculture, 1942.',
      chicago: 'U.S. Department of Agriculture. *Hemp for Victory*. 16mm Film. Washington D.C., 1942.',
      footnotes: []
    },
    furtherReading: [
        {
            title: "Smoke Signals: A Social History of Marijuana",
            url: "#",
            citation: "Lee, Martin A. *Smoke Signals: A Social History of Marijuana - Medical, Recreational and Scientific*. New York: Scribner, 2012."
        },
        {
            title: "The Emperor Wears No Clothes",
            url: "#",
            citation: "Herer, Jack. *The Emperor Wears No Clothes*. Van Nuys: Ah Ha Publishing, 1985."
        }
    ],
    location: 'Lexington, KY',
    coordinates: [38.0406, -84.5037]
  },
  {
    id: 'src_015',
    title: 'Absinthe Drinker (L\'Absinthe)',
    year: 1876,
    type: MediaType.IMAGE,
    creator: 'Edgar Degas',
    description: 'An oil painting depicting a woman staring vacantly into a glass of absinthe, capturing the social isolation and "mal de vivre" associated with the drink in Paris.',
    fullAnalysis: `Edgar Degas’s "L’Absinthe" (1876) is a masterpiece of social realism that captured the dark side of the Belle Époque. The painting depicts a woman (modeled by actress Ellen Andrée) slumped in a café, a glass of the green spirit before her. It caused a scandal upon its release, viewed as a degradation of French morality.\n\nThe work is significant for moving beyond the romanticization of the "bohemian artist" to depict the stark reality of urban alienation and alcoholism. Absinthe here is not a muse, but a numbing agent for the working poor. The painting became a visual argument for the temperance movement, illustrating the "mal de vivre" that would eventually lead to the banning of absinthe in France in 1915.`,
    url: 'https://en.wikipedia.org/wiki/L%27Absinthe',
    thumbnailUrl: '/images/degas-in-a-cafe.jpg',
    tags: ['Absinthe', 'Art', 'Impressionism', 'Alcohol'],
    citation: {
      apa: 'Degas, E. (1876). L\'Absinthe [Painting]. Musée d\'Orsay, Paris.',
      mla: 'Degas, Edgar. L\'Absinthe. 1876. Musée d\'Orsay, Paris.',
      chicago: 'Degas, Edgar. *L\'Absinthe*. Oil on canvas. Musée d\'Orsay, Paris, 1876.',
      footnotes: []
    },
    furtherReading: [
        {
            title: "Hideous Absinthe: A History of the Devil in a Bottle",
            url: "#",
            citation: "Adams, Jad. *Hideous Absinthe: A History of the Devil in a Bottle*. London: I.B. Tauris, 2004."
        },
        {
            title: "Absinthe: History in a Bottle",
            url: "#",
            citation: "Conrad, Barnaby III. *Absinthe: History in a Bottle*. San Francisco: Chronicle Books, 1988."
        }
    ],
    location: 'Paris, France',
    coordinates: [48.8566, 2.3522]
  },
  {
    id: 'src_016',
    title: 'Pure Food and Drug Act (Cartoon)',
    year: 1906,
    type: MediaType.TEXT,
    creator: 'E.W. Kemble / Collier\'s',
    description: 'The famous "Death\'s Laboratory" cartoon from Collier\'s, illustrating the dangers of unregulated patent medicines prior to the Pure Food and Drug Act.',
    fullAnalysis: `This 1906 cartoon from Collier’s Weekly, titled "Death’s Laboratory," was instrumental in the passage of the Pure Food and Drug Act later that year. It depicts a skull-faced pharmacist mixing patent medicines with labels like "Laudanum" and "Cheap Alcohol." The image attacked the unregulated "snake oil" industry that sold addictive narcotics as cures for teething babies and consumption.\n\nThe cartoon represents the peak of muckraking journalism, where visual media was used to mobilize public outrage against corporate malfeasance. The resulting legislation marked the first major federal intervention into the drug and food supply, establishing the principle that the government had a duty to label and regulate what citizens ingested.`,
    url: 'https://www.nlm.nih.gov/exhibition/phs_history/foodanddrugs.html',
    thumbnailUrl: '/images/deaths-laboratory.gif',
    tags: ['Law', 'Regulation', 'Medicine', 'Labels'],
    citation: {
      apa: 'Kemble, E. W. (1906). Death\'s Laboratory [Cartoon]. Collier\'s Weekly.',
      mla: 'Kemble, E. W. "Death\'s Laboratory." Collier\'s Weekly, 1906.',
      chicago: 'Kemble, E. W. "Death\'s Laboratory." *Collier\'s Weekly*. June 3, 1906.',
      footnotes: []
    },
    furtherReading: [
        {
            title: "The Jungle",
            url: "https://gutenberg.org/ebooks/140",
            citation: "Sinclair, Upton. *The Jungle*. New York: Doubleday, Page & Company, 1906."
        },
        {
            title: "Protecting America's Health",
            url: "#",
            citation: "Swann, John P., and Philip J. Hilts. *Protecting America's Health: The FDA, Business, and One Hundred Years of Regulation*. Chapel Hill: University of North Carolina Press, 2003."
        }
    ],
    location: 'Washington, D.C.',
    coordinates: [38.8899, -77.0090]
  },
  
  {
    id: 'src_018',
    title: 'Vin Mariani Advertisement',
    year: 1890,
    type: MediaType.IMAGE,
    creator: 'Angelo Mariani',
    description: 'Advertisement for the globally popular "tonic wine" infused with Peruvian coca leaves, endorsed by Popes and Presidents.',
    fullAnalysis: `Vin Mariani was the original global energy drink. Created by Corsican chemist Angelo Mariani in 1863, it was a Bordeaux wine infused with Peruvian coca leaves. The ethanol in the wine extracted the cocaine from the leaves, creating a compound called cocaethylene, which is more potent and euphoric than cocaine alone. It became a sensation in Europe and America, endorsed by Queen Victoria, Thomas Edison, and Pope Leo XIII (who awarded it a gold medal).\n\nThe drink represents the peak of the "coca craze" before the dangers of cocaine were understood. It also highlights the global trade networks connecting the Andes to European salons. Mariani was a marketing genius who published volumes of celebrity testimonials. The success of Vin Mariani directly inspired John Pemberton to create the non-alcoholic version that became Coca-Cola.`,
    excerpt: "Vin Mariani / Popular French Tonic Wine / Fortifies and Refreshes Body & Brain / Restores Health and Vitality.",
    url: 'https://commons.wikimedia.org/wiki/File:Vin_mariani_publicite156.jpg',
    thumbnailUrl: '/images/vin-mariani.jpg',
    tags: ['Cocaine', 'Alcohol', 'France', 'Advertising'],
    citation: {
      apa: 'Mariani, A. (1890). Vin Mariani Advertisement [Lithograph].',
      mla: 'Mariani, Angelo. "Vin Mariani Advertisement." Lithograph, 1890.',
      chicago: 'Mariani, Angelo. *Vin Mariani Poster*. Paris, 1890.',
      footnotes: []
    },
    furtherReading: [
        {
            title: "Cocaine: From Medical Marvel to Modern Menace",
            url: "#",
            citation: "Spillane, Joseph F. *Cocaine: From Medical Marvel to Modern Menace in the United States, 1884-1920*. Baltimore: Johns Hopkins University Press, 2000."
        },
        {
            title: "For God, Country, and Coca-Cola",
            url: "#",
            citation: "Pendergrast, Mark. *For God, Country, and Coca-Cola: The Definitive History of the Great American Soft Drink and the Company That Makes It*. New York: Basic Books, 1993."
        }
    ],
    location: 'Paris, France',
    coordinates: [48.8566, 2.3522]
  },
  {
    id: 'src_019',
    title: 'Coca-Cola Free Drink Coupon',
    year: 1888,
    type: MediaType.IMAGE,
    creator: 'The Coca-Cola Company',
    description: 'One of the first direct-mail marketing coupons in history, offering a free glass of Coca-Cola (then containing cocaine) at any dispensary.',
    fullAnalysis: `This ticket for a free glass of Coca-Cola represents a milestone in both marketing history and drug history. Asa Candler, who bought the company from John Pemberton, flooded the US with these coupons to get customers hooked on the "Ideal Brain Tonic." At this time, the drink contained a significant amount of cocaine (from the coca leaf) and caffeine (from the kola nut).\n\nThe rapid success of Coca-Cola demonstrates how psychoactive substances can be successfully integrated into consumer culture if marketed as "soft" drinks or tonics. The cocaine was gradually removed shortly after the turn of the century (replaced with "spent" leaves for flavor) as public sentiment turned against the drug, but the brand's foundation was built on that initial kick.`,
    excerpt: "This card entitles you to one glass of Free Coca-Cola at the fountain of any dispenser of genuine Coca-Cola.",
    url: 'https://commons.wikimedia.org/wiki/File:19th_century_Coca-Cola_coupon.jpg',
    thumbnailUrl: '/images/coca-cola-coupon.jpg',
    tags: ['Cocaine', 'USA', 'Business', 'Advertising'],
    citation: {
      apa: 'Coca-Cola Company. (1888). Free Drink Token [Coupon].',
      mla: 'Coca-Cola Company. "Free Drink Token." Coupon, 1888.',
      chicago: 'Coca-Cola Company. *Free Drink Coupon*. Printed Paper. Atlanta, 1888.',
      footnotes: []
    },
    furtherReading: [
        {
            title: "Citizen Coke: The Making of Coca-Cola Capitalism",
            url: "#",
            citation: "Elmore, Bartow J. *Citizen Coke: The Making of Coca-Cola Capitalism*. New York: W.W. Norton, 2014."
        },
        {
            title: "Secret Formula",
            url: "#",
            citation: "Allen, Frederick. *Secret Formula: How Brilliant Marketing and Relentless Salesmanship Made Coca-Cola the Best-Known Product in the World*. New York: HarperCollins, 1994."
        }
    ],
    location: 'Atlanta, GA',
    coordinates: [33.7490, -84.3880]
  },
 
  {
    id: 'src_021',
    title: 'Viper\'s Drag',
    year: 1934,
    type: MediaType.AUDIO,
    creator: 'Fats Waller',
    description: 'A slow, smoky jazz piano composition referencing "Vipers"—the Harlem slang for marijuana smokers.',
    fullAnalysis: `Fats Waller's "Viper's Drag" is a musical embodiment of the marijuana high. A "viper" was Harlem slang for a pot smoker (named for the hissing sound made when taking a swift pull on a reefer). The track begins with a slow, heavy, lethargic groove that mimics the sedative effects of the drug, before breaking into a more playful stride section.\n\nWaller, a heavy drinker who also enjoyed cannabis, captures the insider nature of the culture. Unlike the frantic anxiety of "Reefer Madness," this is music for relaxation and pleasure. It demonstrates how deeply integrated marijuana was into the creative process of Jazz giants. The title acts as a shibboleth; if you knew what a "viper" was, you were part of the in-group.`,
    excerpt: "[Instrumental] \n(Spoken intro in some versions): 'Boy, dreamin' 'bout a reefer five feet long... mighty me...'",
    url: 'https://www.youtube.com/watch?v=o44MrCkAAgs',
    embedUrl: 'https://www.youtube.com/watch?v=o44MrCkAAgs',
    thumbnailUrl: '/images/fats-waller.jpg',
    tags: ['Jazz', 'Marijuana', 'Music', 'Harlem'],
    citation: {
      apa: 'Waller, F. (1934). Viper\'s Drag [Song]. RCA Victor.',
      mla: 'Waller, Fats. "Viper\'s Drag." RCA Victor, 1934.',
      chicago: 'Waller, Fats. "Viper\'s Drag." RCA Victor 25015, 1934, 78 rpm.',
      footnotes: []
    },
    furtherReading: [
        {
            title: "Fats Waller: The Cheerful Little Earful",
            url: "#",
            citation: "Shipton, Alyn. *Fats Waller: The Cheerful Little Earful*. London: Continuum, 2002."
        },
        {
            title: "Jazz and Drugs",
            url: "#",
            citation: "Rasula, Jed. *The Jazz Age: Popular Music in the 1920s*. Oxford: Oxford University Press, 2008."
        }
    ],
    location: 'New York, NY',
    coordinates: [40.8115, -73.9465]
  },

  {
    id: 'src_023',
    title: 'Dope',
    year: 1919,
    type: MediaType.TEXT,
    creator: 'Sax Rohmer',
    description: 'A sensation novel by the creator of Fu Manchu, dealing with the international cocaine and opium trade in London\'s Chinatown.',
    fullAnalysis: `Sax Rohmer’s 1919 novel "Dope" is a quintessential example of "Yellow Peril" literature. Set in London’s Limehouse district, it weaves a sensationalist tale of Chinese crime lords using opium and cocaine to enslave white women. The book capitalized on the death of Billie Carleton, a real-life actress who died of a drug overdose after attending a victory ball.\n\nCulturally, the novel cemented the trope of the "oriental mastermind" using drugs as a weapon against the West. It reveals the deep-seated anxieties of post-WWI Britain, where the stability of the Empire felt threatened by foreign influence and the corruption of its youth. It turned the drug trade into a melodramatic battle between racial purity and foreign vice.`,
    url: 'https://gutenberg.org/ebooks/1182',
    embedUrl: 'https://gutenberg.org/ebooks/1182',
    thumbnailUrl: '/images/sax-rohmer-dope-cover.jpg',
    tags: ['Cocaine', 'Literature', 'Pulp', 'Xenophobia'],
    citation: {
      apa: 'Rohmer, S. (1919). Dope: A Story of Chinatown and the Drug Traffic. Cassell.',
      mla: 'Rohmer, Sax. Dope: A Story of Chinatown and the Drug Traffic. Cassell, 1919.',
      chicago: 'Rohmer, Sax. *Dope: A Story of Chinatown and the Drug Traffic*. London: Cassell, 1919.',
      footnotes: []
    },
    furtherReading: [
        {
            title: "Underground",
            url: "#",
            citation: "Seddon, Toby. *A History of Drugs: Drugs and Freedom in the Liberal Age*. London: Routledge, 2010."
        },
        {
            title: "London's Shadows",
            url: "#",
            citation: "Kohn, Marek. *Dope Girls: The Birth of the British Drug Underground*. London: Lawrence & Wishart, 1992."
        }
    ],
    location: 'London, UK',
    coordinates: [51.5074, -0.1278]
  },
  {
    id: 'src_026',
    title: 'The Hasheesh Eater',
    year: 1857,
    type: MediaType.TEXT,
    creator: 'Fitz Hugh Ludlow',
    description: 'Though published in 1857, this American counterpart to De Quincey remained the primary text on cannabis experience in the US well into the 20th century.',
    fullAnalysis: `Fitz Hugh Ludlow’s "The Hasheesh Eater" (1857) is the first American classic of drug literature. Inspired by De Quincey, Ludlow chronicles his experiments with large doses of cannabis extract while a student at Union College. His writing is rich with transcendentalist philosophy and vivid, phantasmagoric descriptions of his "trips."\n\nLudlow’s work established a distinctly American tradition of the "psychonaut"—using drugs not for escape, but for exploration of the self and the cosmos. At the time of publication, cannabis was legal and available at pharmacies. Ludlow’s memoir reminds us of a time before the "reefer madness" stigma, when cannabis was viewed with intellectual curiosity rather than criminal judgment.`,
    excerpt: "17:00: Beginning dizziness, feeling of anxiety, visual distortions, symptoms of paralysis, desire to laugh... 17:20: deeply affected... I asked my laboratory assistant to accompany me home.",
    url: 'https://en.wikipedia.org/wiki/The_Hasheesh_Eater',
    embedUrl: 'https://archive.org/embed/hasheesh_eater_0707_librivox',
    thumbnailUrl: '/images/hasheesh-eater.png',
    tags: ['Marijuana', 'Literature', 'Memoir', 'Psychonaut'],
    citation: {
      apa: 'Ludlow, F. H. (1857). The Hasheesh Eater: Being Passages from the Life of a Pythagorean. Harper & Brothers.',
      mla: 'Ludlow, Fitz Hugh. The Hasheesh Eater. Harper & Brothers, 1857.',
      chicago: 'Ludlow, Fitz Hugh. *The Hasheesh Eater*. New York: Harper & Brothers, 1857.',
      footnotes: []
    },
    furtherReading: [
        {
            title: "High Culture",
            url: "#",
            citation: "Jay, Mike. *Emperors of Dreams: Drugs in the Nineteenth Century*. Sawtry: Dedalus, 2000."
        },
        {
            title: "American Cannabis",
            url: "#",
            citation: "Abel, Ernest L. *Marihuana: The First Twelve Thousand Years*. New York: Plenum Press, 1980."
        }
    ],
    location: 'Schenectady, NY',
    coordinates: [42.8142, -73.9396]
  },
  {
    id: 'src_029',
    title: 'Anti-Saloon League Flyer',
    year: 1917,
    type: MediaType.IMAGE,
    creator: 'Anti-Saloon League',
    description: 'A propaganda flyer linking alcohol consumption to German brewers during WWI, using patriotism as a tool to advance Prohibition.',
    fullAnalysis: `This 1917 flyer from the Anti-Saloon League demonstrates the opportunistic political strategy that helped finalize Prohibition. By linking the brewing industry (which was largely German-American) to "Kaiserism" and the enemy in WWI, prohibitionists rebranded alcohol consumption as treason. The "Hun" was destroying civilization abroad, and his beer was destroying it at home.\n\nThis propaganda effectively silenced the moderate opposition to Prohibition. To defend beer was to defend the enemy. It showcases how drug and alcohol policy is often swept up in larger geopolitical fervor, using nationalism as a bludgeon to enforce moral codes.`,
    url: 'https://digitalresearch.bsu.edu/notablewomen/items/show/209',
    thumbnailUrl: '/images/anti-saloon-league-poster.jpg',
    tags: ['Alcohol', 'Propaganda', 'WWI', 'Politics'],
    citation: {
      apa: 'Anti-Saloon League. (1917). Kaiserism Abroad and at Home [Flyer]. Westerville, OH.',
      mla: 'Anti-Saloon League. "Kaiserism Abroad and at Home." Flyer, 1917.',
      chicago: 'Anti-Saloon League. "Kaiserism Abroad and at Home." Propaganda flyer. Westerville, OH, 1917.',
      footnotes: []
    },
    furtherReading: [
        {
            title: "Prohibition: Thirteen Years That Changed America",
            url: "#",
            citation: "Behr, Edward. *Prohibition: Thirteen Years That Changed America*. New York: Arcade Publishing, 1996."
        },
        {
            title: "The Pressure Group",
            url: "#",
            citation: "Odegard, Peter H. *Pressure Politics: The Story of the Anti-Saloon League*. New York: Columbia University Press, 1928."
        }
    ],
    location: 'Westerville, OH',
    coordinates: [40.1270, -82.9293]
  },
  {
    id: 'src_030',
    title: 'Paregoric Label',
    year: 1940,
    type: MediaType.IMAGE,
    creator: 'Rexall',
    description: 'Label for Paregoric (Camphorated Tincture of Opium). Unlike Laudanum, Paregoric had a lower opium concentration and remained available over-the-counter in some states until the 1970s.',
    fullAnalysis: `Paregoric, a camphorated tincture of opium, occupies a unique place in the history of American medicine. Unlike stronger opiates that were heavily regulated by the Harrison Act, Paregoric contained a lower concentration of opium and remained available over-the-counter in many states well into the mid-20th century. It was a staple in American medicine cabinets for treating diarrhea and fretful children.\n\nIts longevity illustrates the "medical exception" in drug policy: the same substance that is demonized on the street is accepted when packaged by a pharmaceutical company. Paregoric served as a maintenance drug for many addicts when heroin was scarce, a legal loophole that persisted for decades.`,
    url: 'https://en.wikipedia.org/wiki/Paregoric',
    thumbnailUrl: '/images/paregoric.jpg',
    tags: ['Opium', 'Medicine', 'Pharmacy', 'Children'],
    citation: {
      apa: 'Rexall Drug Company. (c. 1940). Paregoric [Label].',
      mla: 'Rexall Drug Company. Paregoric Label. c. 1940.',
      chicago: 'Rexall Drug Company. *Paregoric Label*. Printed paper. Boston, c. 1940.',
      footnotes: []
    },
    furtherReading: [
        {
            title: "Flowers in the Blood",
            url: "#",
            citation: "Latimer, Dean, and Jeff Goldberg. *Flowers in the Blood: The Story of Opium*. New York: Franklin Watts, 1981."
        },
        {
            title: "Opium for the Masses",
            url: "#",
            citation: "Hodgson, Barbara. *Opium: A Portrait of the Heavenly Demon*. San Francisco: Chronicle Books, 1999."
        }
    ],
    location: 'Boston, MA',
    coordinates: [42.3601, -71.0589]
  },
  {
    id: 'src_031',
    title: 'Über Coca (On Coca)',
    year: 1884,
    type: MediaType.TEXT,
    creator: 'Sigmund Freud',
    description: 'A scientific paper where Freud praises the effects of cocaine, recommending it for depression and morphine addiction, a stance he would later regret.',
    fullAnalysis: `In 1884, a young Sigmund Freud wrote "Über Coca," a scientific love letter to cocaine. Based on his own experimentation and literature review, Freud extolled the drug's capacity to banish fatigue, elevate mood, and cure gastric indigestion without, he claimed, any risk of addiction. Most famously, he recommended it as a cure for morphine addiction, leading to the tragic addiction and eventual death of his friend Ernst von Fleischl-Marxow.\n\nThe paper captures the initial medical optimism surrounding cocaine as a panacea. It demonstrates how even the most brilliant scientific minds can be blinded by the immediate efficacy of a stimulant, failing to foresee long-term dependency.`,
    excerpt: "Exhilaration and lasting euphoria, which in no way differs from the normal euphoria of the healthy person. You perceive an increase of self-control and possess more vitality and capacity for work.",
    url: 'https://www.scribd.com/doc/68768839/Uber-Coca-Pt-1',
    thumbnailUrl: '/images/sigmund-freud-1905.jpg',
    tags: ['Cocaine', 'Science', 'Medicine', 'Freud'],
    citation: {
      apa: 'Freud, S. (1884). Über Coca. Centralblatt für die gesammte Therapie.',
      mla: 'Freud, Sigmund. "Über Coca." Centralblatt für die gesammte Therapie, 1884.',
      chicago: 'Freud, Sigmund. "Über Coca." *Centralblatt für die gesammte Therapie* 2 (July 1884): 289–314.',
      footnotes: []
    },
    furtherReading: [
        {
            title: "An Anatomy of Addiction",
            url: "#",
            citation: "Markel, Howard. *An Anatomy of Addiction: Sigmund Freud, William Halsted, and the Miracle Drug Cocaine*. New York: Pantheon, 2011."
        },
        {
            title: "Cocaine Papers",
            url: "#",
            citation: "Freud, Sigmund, and Robert Byck. *Cocaine Papers*. New York: Stonehill, 1974."
        }
    ],
    location: 'Vienna, Austria',
    coordinates: [48.2082, 16.3738]
  },
  {
    id: 'src_032',
    title: 'International Opium Convention',
    year: 1912,
    type: MediaType.TEXT,
    creator: 'League of Nations (Precursor)',
    description: 'The first international drug control treaty, signed at The Hague, which established the framework for global narcotics regulation.',
    fullAnalysis: `The International Opium Convention of 1912 at The Hague was the watershed moment for global drug control. It was the first international treaty to require nations to pass laws regulating the trade in opium, morphine, and cocaine. The convention shifted the drug issue from a matter of trade and tariffs to a matter of international morality and police cooperation.\n\nDriven largely by US diplomacy, the treaty laid the groundwork for the prohibitionist regime that would dominate the 20th century. It compelled signatory nations to establish domestic drug control agencies, leading directly to the Harrison Act in the US and the Dangerous Drugs Act in the UK.`,
    excerpt: "The Contracting Powers shall use their best endeavours to control, or to cause to be controlled, all persons manufacturing, importing, selling, distributing, and exporting morphine, cocaine, and their respective salts.",
    url: 'https://en.wikipedia.org/wiki/First_International_Opium_Convention',
    thumbnailUrl: '/images/international-opium-conference-1911.jpg',
    tags: ['Law', 'Opium', 'International', 'Treaty'],
    citation: {
      apa: 'International Opium Convention, Jan. 23, 1912, 38 Stat. 1912.',
      mla: 'International Opium Convention. The Hague. 23 Jan. 1912.',
      chicago: 'International Opium Convention. The Hague, January 23, 1912. 38 Stat. 1912.',
      footnotes: []
    },
    furtherReading: [
        {
            title: "Drug Diplomacy",
            url: "#",
            citation: "McAllister, William B. *Drug Diplomacy in the Twentieth Century: An International History*. London: Routledge, 2000."
        },
        {
            title: "The Opium Wars",
            url: "#",
            citation: "Lovell, Julia. *The Opium War: Drugs, Dreams and the Making of China*. London: Picador, 2011."
        }
    ],
    location: 'The Hague, Netherlands',
    coordinates: [52.0705, 4.3007]
  },
  {
    id: 'src_033',
    title: 'Really the Blues',
    year: 1946,
    type: MediaType.TEXT,
    creator: 'Mezz Mezzrow',
    description: 'Autobiography of jazz clarinettist and famous marijuana dealer Mezz Mezzrow. His name ("Mezz") became slang for high-quality pot.',
    fullAnalysis: `Mezz Mezzrow’s autobiography "Really the Blues" (1946) is a cult classic of jazz literature. Mezzrow, a white Jewish clarinetist who identified entirely with Black culture, became the most famous marijuana dealer in Harlem. His "mezzrolls" were synonymous with quality. The book is written in a thick hipster jive that celebrates the subversive, integrated world of the jazz underground.\n\nMezzrow presents marijuana not as a vice, but as a sacrament of the jazz community—a tool for listening, relaxing, and bonding across racial lines. His memoir challenges the dominant narrative of the "dope fiend," offering instead a portrait of the drug dealer as a cultural liaison and a patron of the arts.`,
    excerpt: "I'm going to tell you about the load of coal I carried... about the tea I sold and the jails I slept in... it's all the truth, so help me.",
    url: 'https://archive.org/details/reallyblues0000mezz',
    embedUrl: 'https://archive.org/details/reallyblues0000mezz',
    thumbnailUrl: '/images/mezz-mezzrow.jpg',
    tags: ['Jazz', 'Marijuana', 'Memoir', 'Harlem'],
    citation: {
      apa: 'Mezzrow, M. (1946). Really the Blues. Random House.',
      mla: 'Mezzrow, Mezz. Really the Blues. Random House, 1946.',
      chicago: 'Mezzrow, Mezz. *Really the Blues*. New York: Random House, 1946.',
      footnotes: []
    },
    furtherReading: [
        {
            title: "Swing Shift",
            url: "#",
            citation: "Stowe, David W. *Swing Changes: Big-Band Jazz in New Deal America*. Cambridge: Harvard University Press, 1994."
        },
        {
            title: "Hip: The History",
            url: "#",
            citation: "Leland, John. *Hip: The History*. New York: Ecco, 2004."
        }
    ],
    location: 'New York, NY',
    coordinates: [40.8115, -73.9465]
  },
  {
    id: 'src_034',
    title: 'Opium Den Photograph',
    year: 1900,
    type: MediaType.IMAGE,
    creator: 'Unknown Photographer',
    description: 'A rare candid photograph of men reclining in a Shanghai opium den, illustrating the social ritual of smoking.',
    fullAnalysis: `This rare candid photograph of a Shanghai opium den circa 1900 counters the sensationalist propaganda of the era. Instead of a den of iniquity, it shows a social space where men recline, chat, and smoke in a relaxed atmosphere. Opium smoking in China was a deeply ingrained social ritual, akin to alcohol consumption in the West, used for business transactions and socializing.\n\nThe image humanizes the "opium fiend" at a time when they were being demonized by both Western missionaries and Chinese reformers. It captures the banality of the habit before the aggressive suppression campaigns of the 20th century drove the practice underground and eventually eradicated it.`,
    excerpt: "[Visual Source]",
    url: 'https://commons.wikimedia.org/wiki/File:Opium_smokers_China.gif',
    thumbnailUrl: '/images/opium-smokers-china.jpg',
    tags: ['Opium', 'China', 'Photography', 'Social'],
    citation: {
      apa: 'Unknown. (c. 1900). Opium Smokers in Shanghai [Photograph].',
      mla: 'Unknown. Opium Smokers in Shanghai. c. 1900.',
      chicago: 'Unknown photographer. "Opium Smokers in Shanghai." Photograph. Shanghai, c. 1900.',
      footnotes: []
    },
    furtherReading: [
        {
            title: "Narcotic Culture: A History of Drugs in China",
            url: "#",
            citation: "Dikötter, Frank, Lars Laamann, and Zhou Xun. *Narcotic Culture: A History of Drugs in China*. Chicago: University of Chicago Press, 2004."
        },
        {
            title: "The Social Life of Opium in China",
            url: "#",
            citation: "Zheng, Yangwen. *The Social Life of Opium in China*. Cambridge: Cambridge University Press, 2005."
        }
    ],
    location: 'Shanghai, China',
    coordinates: [31.2304, 121.4737]
  },
  {
    id: 'src_035',
    title: 'Casey Jones (The Union Scab)',
    year: 1911,
    type: MediaType.AUDIO,
    creator: 'Joe Hill / IWW',
    description: 'A protest song parodying the original "Casey Jones", depicting the engineer not as a hero but as someone crashing the train because he is high on "dope".',
    fullAnalysis: `Joe Hill’s parody of "Casey Jones" turns the railroad hero into a "union scab" who keeps the trains running during a strike because he is high on "dope." The song reflects the Industrial Workers of the World (IWW) stance that drug and alcohol use were tools of the capitalist class to keep workers sedated and compliant.\n\nBy depicting the scab as a drug addict, Hill inverts the usual morality: sobriety is revolutionary, and intoxication is reactionary. The song illustrates the labor movement’s complex relationship with vice; while often meeting in saloons, radical organizers viewed addiction as a chain that prevented the working class from realizing its collective power.`,
    excerpt: "Casey Jones kept his junk pile running / Casey Jones was working double time / Casey Jones got a wooden medal / For being good and faithful on the S.P. line.",
    url: 'https://en.wikipedia.org/wiki/Casey_Jones_(song)',
    thumbnailUrl: '/images/joe-hill.jpg',
    tags: ['Labor', 'Dope', 'Song', 'Protest'],
    citation: {
      apa: 'Hill, J. (1911). Casey Jones - The Union Scab [Song]. IWW Songbook.',
      mla: 'Hill, Joe. "Casey Jones - The Union Scab." IWW Songbook, 1911.',
      chicago: 'Hill, Joe. "Casey Jones - The Union Scab." *IWW Songbook*. 1911.',
      footnotes: []
    },
    furtherReading: [
        {
            title: "Wobblies of the World",
            url: "#",
            citation: "Cole, Peter, David Struthers, and Kenyon Zimmer, eds. *Wobblies of the World: A Global History of the IWW*. London: Pluto Press, 2017."
        },
        {
            title: "The Man Who Never Died",
            url: "#",
            citation: "Adler, William M. *The Man Who Never Died: The Life, Times, and Legacy of Joe Hill, American Labor Icon*. New York: Bloomsbury, 2011."
        }
    ],
    location: 'San Pedro, CA',
    coordinates: [33.7359, -118.2923]
  },
  {
    id: 'src_036',
    title: 'Alcoholics Anonymous (The Big Book)',
    year: 1939,
    type: MediaType.TEXT,
    creator: 'Bill Wilson / AA',
    description: 'The first edition of the foundational text of the twelve-step program, introducing the concept of alcoholism as an illness and spiritual malady.',
    fullAnalysis: `The publication of "Alcoholics Anonymous" (The Big Book) in 1939 marked a paradigm shift in the treatment of addiction. Bill Wilson and the early AA members reframed alcoholism not as a moral failing or a lack of willpower, but as a spiritual and physical "illness" (an allergy of the body and an obsession of the mind).\n\nBy removing the stigma of "sin" and offering a program of mutual aid and spiritual reconstruction, AA provided a solution where medicine and religion had failed. The text established the 12-step model which remains the dominant framework for addiction recovery worldwide, emphasizing community and anonymity over institutionalization.`,
    excerpt: "We admitted we were powerless over alcohol—that our lives had become unmanageable.",
    url: 'https://archive.org/details/bigbookofalcohol0000smit',
    embedUrl: 'https://archive.org/details/bigbookofalcohol0000smit',
    thumbnailUrl: '/images/alcoholics-anonymous-dust-jacket.jpg',
    tags: ['Alcohol', 'Recovery', 'Literature', 'Religion'],
    citation: {
      apa: 'Wilson, B. (1939). Alcoholics Anonymous. Works Publishing.',
      mla: 'Wilson, Bill. Alcoholics Anonymous. Works Publishing, 1939.',
      chicago: 'Wilson, Bill. *Alcoholics Anonymous*. New York: Works Publishing, 1939.',
      footnotes: []
    },
    furtherReading: [
        {
            title: "Not-God: A History of Alcoholics Anonymous",
            url: "#",
            citation: "Kurtz, Ernest. *Not-God: A History of Alcoholics Anonymous*. Center City: Hazelden, 1979."
        },
        {
            title: "Slaying the Dragon",
            url: "#",
            citation: "White, William L. *Slaying the Dragon: The History of Addiction Treatment and Recovery in America*. Bloomington: Chestnut Health Systems, 1998."
        }
    ],
    location: 'Akron, OH',
    coordinates: [41.0814, -81.5190]
  },
  {
    id: 'src_037',
    title: 'The Sign of the Four',
    year: 1890,
    type: MediaType.TEXT,
    creator: 'Arthur Conan Doyle',
    description: 'Sherlock Holmes novel featuring the detective\'s famous "seven-per-cent solution" of cocaine, which he injects to escape the "stagnation" of daily life.',
    fullAnalysis: `Arthur Conan Doyle's "The Sign of the Four" (1890) famously introduces Sherlock Holmes's cocaine habit. Holmes injects a "seven-per-cent solution" of cocaine three times a day to stimulate his hyperactive mind during periods of inactivity. At the time, this was not a shocking vice but a character quirk illustrating his bohemian intellect and need for mental stimulation.\n\nThe novel reflects the late Victorian attitude towards cocaine: it was a tool for the elite intellectual, distinct from the "opium dens" of the lower classes. However, Dr. Watson's concern ("Count the cost!") foreshadows the growing medical awareness of addiction. It remains one of the most famous literary depictions of functional drug use.`,
    excerpt: "'Which is it today,' I asked, 'morphine or cocaine?'\n'It is cocaine,' he said, 'a seven-per-cent solution. Would you care to try it?'",
    url: 'https://archive.org/details/signoffour00doyliala',
    embedUrl: 'https://archive.org/embed/signoffour00doyliala',
    thumbnailUrl: '/images/sign-of-the-four-frontispiece.jpg',
    tags: ['Cocaine', 'Literature', 'Mystery', 'Victorian'],
    citation: {
      apa: 'Doyle, A. C. (1890). The Sign of the Four. Spencer Blackett.',
      mla: 'Doyle, Arthur Conan. The Sign of the Four. Spencer Blackett, 1890.',
      chicago: 'Doyle, Arthur Conan. *The Sign of the Four*. London: Spencer Blackett, 1890.',
      footnotes: []
    },
    furtherReading: [
        {
            title: "Elementary, My Dear Watson: Sherlock Holmes and Cocaine",
            url: "#",
            citation: "Musto, David F. *The American Disease: Origins of Narcotic Control*. New York: Oxford University Press, 1999."
        }
    ],
    location: 'London, UK',
    coordinates: [51.5074, -0.1278]
  },
  {
    id: 'src_038',
    title: 'Wacky Dust',
    year: 1938,
    type: MediaType.AUDIO,
    creator: 'Ella Fitzgerald / Chick Webb',
    description: 'A swinging jazz tune about cocaine ("Wacky Dust"), warning listeners that "it can\'t be trusted" while making it sound undeniably fun.',
    fullAnalysis: `Ella Fitzgerald's recording of "Wacky Dust" with the Chick Webb Orchestra captures the ambivalent attitude towards cocaine in the late 1930s swing era. The lyrics, while ostensibly a warning ("It creates a mood for love, but it can't be trusted"), are delivered with such infectious joy and rhythm that the song functions more as a celebration than a caution.\n\nThe term "Wacky Dust" was common slang. The song illustrates how drug references persisted in popular music even after the crackdown of the 1920s and 30s, often hidden in plain sight through slang and euphemism. It is a prime example of the "drug song" genre that flourished before stricter radio censorship took hold.`,
    excerpt: "They call it Wacky Dust / It's a sudden rise / It's a paradise / But it can't be trusted...",
    url: 'https://archive.org/details/78_wacky-dust_chick-webb-and-his-orchestra-ella-fitzgerald-raymond-al-stillman_gbia0006362b',
    embedUrl: 'https://archive.org/embed/78_wacky-dust_chick-webb-and-his-orchestra-ella-fitzgerald-raymond-al-stillman_gbia0006362b',
    thumbnailUrl: '/images/ella-fitzgerald.jpg',
    tags: ['Jazz', 'Cocaine', 'Music', 'Swing'],
    citation: {
      apa: 'Fitzgerald, E., & Webb, C. (1938). Wacky Dust [Song]. Decca.',
      mla: 'Fitzgerald, Ella and Chick Webb. "Wacky Dust." Decca, 1938.',
      chicago: 'Fitzgerald, Ella, and Chick Webb. "Wacky Dust." Decca 2021, 1938, 78 rpm.',
      footnotes: []
    },
    furtherReading: [
        {
            title: "Swing Changes",
            url: "#",
            citation: "Stowe, David W. *Swing Changes: Big-Band Jazz in New Deal America*. Cambridge: Harvard University Press, 1994."
        }
    ],
    location: 'New York, NY',
    coordinates: [40.8115, -73.9465]
  },
  {
    id: 'src_039',
    title: 'Assassin of Youth',
    year: 1937,
    type: MediaType.VIDEO,
    creator: 'Elmer Clifton',
    description: 'An exploitation film masquerading as a documentary, depicting marijuana as a drug that drives youth to wild parties and crime.',
    fullAnalysis: `Released the same year as the Marihuana Tax Act, "Assassin of Youth" takes its title directly from a sensationalist article penned by Harry Anslinger. The film follows the standard exploitation plot: a young girl is tricked into trying marijuana at a party, leading to moral ruin. It was marketed as a "scare film" to parents but often attracted audiences looking for titillation.\n\nThe film demonstrates the symbiotic relationship between government propaganda and commercial exploitation cinema. Filmmakers like Elmer Clifton used the "educational" loophole to show scenes of drug use and loose morals that would otherwise be censored, while simultaneously reinforcing the government's narrative that cannabis was a direct path to criminality.`,
    excerpt: "[Title Card]: 'The Assassin of Youth... A weed that is sapping the moral fiber of our children.'",
    url: 'https://archive.org/details/assassin_of_youth',
    embedUrl: 'https://archive.org/embed/assassin_of_youth',
    thumbnailUrl: '/images/assassin-of-youth-poster.jpg',
    tags: ['Marijuana', 'Propaganda', 'Cinema', 'Prohibition'],
    citation: {
      apa: 'Clifton, E. (Director). (1937). Assassin of Youth [Film]. BCG.',
      mla: 'Assassin of Youth. Directed by Elmer Clifton, BCG, 1937.',
      chicago: 'Clifton, Elmer, dir. *Assassin of Youth*. 1937; Los Angeles: BCG.',
      footnotes: []
    },
    furtherReading: [
        {
            title: "Reefer Movie Madness",
            url: "#",
            citation: "Peary, Danny. *Cult Movies*. New York: Delta, 1981."
        }
    ],
    location: 'Hollywood, CA',
    coordinates: [34.0928, -118.3287]
  },
  {
    id: 'src_040',
    title: 'Absinthe Robette',
    year: 1896,
    type: MediaType.IMAGE,
    creator: 'Henri Privat-Livemont',
    description: 'An iconic Art Nouveau poster advertising Absinthe Robette, featuring a diaphanous woman holding a glass of the "Green Fairy".',
    fullAnalysis: `Privat-Livemont's poster for Absinthe Robette captures the allure of the "Green Fairy" (La Fée Verte) at the height of its popularity in Belle Époque France. The high-proof wormwood spirit was the drink of choice for artists, writers (like Rimbaud and Wilde), and bohemians. The poster softens the drink's potent reputation, presenting it as a delicate, feminine luxury.\n\nBy the turn of the century, absinthe became the scapegoat for French social ills, blamed for madness, violence, and national decline. Absinthe was banned in France in 1915, a prohibition that lasted nearly a century. This image remains a testament to the era when this hallucinogenic, thujone-containing spirit was the muse of the European avant-garde.`,
    excerpt: "ABSINTHE ROBETTE",
    url: 'https://commons.wikimedia.org/wiki/File:Privat-Livemont_-_Absinthe_Robette_-_1896.jpg',
    thumbnailUrl: '/images/absinthe-robette.jpg',
    tags: ['Absinthe', 'Art Nouveau', 'Advertising', 'Poster'],
    citation: {
      apa: 'Privat-Livemont, H. (1896). Absinthe Robette [Lithograph]. Brussels.',
      mla: 'Privat-Livemont, Henri. "Absinthe Robette." Lithograph, 1896.',
      chicago: 'Privat-Livemont, Henri. *Absinthe Robette*. Color lithograph. Paris, 1896.',
      footnotes: []
    },
    furtherReading: [
        {
            title: "Absinthe: History in a Bottle",
            url: "#",
            citation: "Conrad, Barnaby III. *Absinthe: History in a Bottle*. San Francisco: Chronicle Books, 1988."
        }
    ],
    location: 'Brussels, Belgium',
    coordinates: [50.8503, 4.3517]
  },
  {
    id: 'src_041',
    title: 'Dr. Jekyll and Mr. Hyde',
    year: 1920,
    type: MediaType.VIDEO,
    creator: 'John S. Robertson',
    description: 'Silent film adaptation of Stevenson\'s novella, where a chemical potion separates the "good" and "evil" natures of man, a metaphor for drug-induced personality change.',
    fullAnalysis: `John S. Robertson's 1920 adaptation of "Dr. Jekyll and Mr. Hyde," starring John Barrymore, is the definitive silent version of the classic tale. The story of a doctor who transforms into a monster via a chemical potion has long been read as a metaphor for addiction. In the 1920s context, it resonated with fears about the dual nature of modern man and the corrupting influence of chemical substances.\n\nBarrymore's contorted physical performance emphasizes the grotesque physical toll of the transformation, mirroring the contemporary view of the drug addict's degradation. The film visually codifies the idea that chemicals can strip away civilization and unleash primal, violent urges—a theme central to prohibitionist rhetoric.`,
    excerpt: "[Title Card]: 'The potion... allows the lower nature to spring into life, while the higher nature sleeps.'",
    url: 'https://archive.org/details/Dr.JekyllAndMr.Hyde1920_156',
    embedUrl: 'https://archive.org/embed/Dr.JekyllAndMr.Hyde1920_156',
    thumbnailUrl: '/images/dr-jekyll-mr-hyde-1920-poster.jpg',
    tags: ['Horror', 'Science', 'Addiction', 'Silent Film'],
    citation: {
      apa: 'Robertson, J. S. (Director). (1920). Dr. Jekyll and Mr. Hyde [Film]. Paramount Pictures.',
      mla: 'Dr. Jekyll and Mr. Hyde. Directed by John S. Robertson, Paramount Pictures, 1920.',
      chicago: 'Robertson, John S., dir. *Dr. Jekyll and Mr. Hyde*. 1920; Los Angeles: Paramount Pictures.',
      footnotes: []
    },
    furtherReading: [
        {
            title: "Dr. Jekyll and Mr. Hyde as Allegory",
            url: "#",
            citation: "Wright, Daniel L. *'The Prisonhouse of My Disposition': A Study of the Psychology of Addiction in Dr. Jekyll and Mr. Hyde*."
        }
    ],
    location: 'London, UK',
    coordinates: [51.5074, -0.1278]
  },
  {
    id: 'src_042',
    title: 'Human Wreckage',
    year: 1923,
    type: MediaType.IMAGE,
    creator: 'John Griffith Wray',
    description: 'Poster for a lost anti-drug film produced by Dorothy Davenport after her husband, star Wallace Reid, died from morphine addiction.',
    fullAnalysis: `This poster advertises "Human Wreckage" (1923), a film produced by Dorothy Davenport as a crusade against the drug that killed her husband, silent film superstar Wallace Reid. Reid died in a sanitarium while trying to kick a morphine addiction he acquired after a train accident. The film was a direct response to the Hollywood drug scandals of the early 1920s.\n\n"Human Wreckage" is historically significant as the first major Hollywood production to openly address the industry's own drug problem. It marked the beginning of the "drug panic" in Hollywood that led to the Hays Code. The film depicted addiction not as a sin of the lower classes, but as a tragedy that could strike the elite, helping to shift public perception of the "addict" from criminal to victim, albeit a doomed one.`,
    excerpt: "The Dope Ring... The 100 headed monster that is destroying the youth of the world!",
    url: 'https://commons.wikimedia.org/wiki/File:Human_Wreckage_Poster.jpg',
    thumbnailUrl: '/images/human-wreckage-poster.jpg',
    tags: ['Morphine', 'Cinema', 'Tragedy', 'Hollywood'],
    citation: {
      apa: 'Wray, J. G. (Director). (1923). Human Wreckage [Film Poster]. Ince.',
      mla: 'Human Wreckage. Directed by John Griffith Wray, Ince, 1923.',
      chicago: 'Wray, John Griffith, dir. *Human Wreckage*. 1923; Los Angeles: Ince.',
      footnotes: []
    },
    furtherReading: [
        {
            title: "Wallace Reid: The Life and Death of a Hollywood Idol",
            url: "#",
            citation: "Fleming, E.J. *Wallace Reid: The Life and Death of a Hollywood Idol*. McFarland, 2007."
        }
    ],
    location: 'Hollywood, CA',
    coordinates: [34.0928, -118.3287]
  },
  {
    id: 'src_043',
    title: 'Marihuana (The Weed with Roots in Hell)',
    year: 1936,
    type: MediaType.VIDEO,
    creator: 'Dwain Esper',
    description: 'Another classic exploitation film where innocent girls smoke marijuana, leading to skinny dipping and accidental drowning.',
    fullAnalysis: `Directed by Dwain Esper, the same producer behind "Reefer Madness," "Marihuana" (1936) is a grittier, sleazier entry in the exploitation canon. The film follows a girl named Burma who attends a beach party, smokes marijuana, gets pregnant, and eventually becomes a drug queenpin. The film is famous for its lurid tagline: "Weird orgies! Wild parties! Unleashed passions!"\n\nEsper used the guise of moral instruction to bypass censorship laws, showing scenes of nudity and violence that were otherwise banned. The film reinforced the narrative that marijuana acted as a "gateway" to sexual depravity and harder crime. It is a prime example of how anti-drug hysteria was commodified for profit in the 1930s.`,
    excerpt: "[Poster]: 'Misery... Woe... Shame... Despair... MARIHUANA! The Weed with Roots in Hell!'",
    url: 'https://archive.org/details/Marihuana1936',
    embedUrl: 'https://archive.org/embed/Marihuana1936',
    thumbnailUrl: '/images/marihuana-1936-poster.jpg',
    tags: ['Marijuana', 'Propaganda', 'Cinema', 'Exploitation'],
    citation: {
      apa: 'Esper, D. (Director). (1936). Marihuana [Film]. Roadshow Attractions.',
      mla: 'Marihuana. Directed by Dwain Esper, Roadshow Attractions, 1936.',
      chicago: 'Esper, Dwain, dir. *Marihuana*. 1936; Los Angeles: Roadshow Attractions.',
      footnotes: []
    },
    furtherReading: [
        {
            title: "Sinema: American Pornographic Films and the People Who Make Them",
            url: "#",
            citation: "Turan, Kenneth, and Stephen F. Zito. *Sinema*. New York: Praeger, 1974."
        }
    ],
    location: 'Los Angeles, CA',
    coordinates: [34.0522, -118.2437]
  },
  {
    id: 'src_044',
    title: 'Maltine with Coca Wine',
    year: 1895,
    type: MediaType.IMAGE,
    creator: 'Maltine Manufacturing Co.',
    description: 'Advertisement for a medicinal tonic combining malt extract and coca wine (cocaine and alcohol), marketed for "brain exhaustion".',
    fullAnalysis: `This 1895 advertisement for "Maltine with Coca Wine" illustrates the widespread acceptance of cocaine-alcohol mixtures in the late Victorian era. Following the success of Vin Mariani, many competitors entered the market. Maltine claimed to be superior by combining the "invigorating" effects of coca with the "nutritive" value of malt.\n\nThese tonics were marketed not for recreation, but for "brain exhaustion," neurasthenia, and convalescence. They targeted the professional class—lawyers, doctors, and students—who needed energy. This context is crucial: cocaine was initially a drug of productivity and health, sanctioned by the medical establishment, long before it was associated with the "drug fiend" of the 1920s.`,
    excerpt: "The only Coca Wine which is not injurious to the digestion... A powerful nerve stimulant and restorative.",
    url: 'https://commons.wikimedia.org/wiki/File:Peruvian_Wine_of_Coca.png',
    thumbnailUrl: '/images/maltine-coca-wine.png',
    tags: ['Cocaine', 'Alcohol', 'Medicine', 'Advertising'],
    citation: {
      apa: 'Maltine Mfg. Co. (1895). Maltine with Coca Wine [Advertisement]. New York.',
      mla: 'Maltine Mfg. Co. "Maltine with Coca Wine." Advertisement, 1895.',
      chicago: 'Maltine Mfg. Co. "Maltine with Coca Wine." Advertisement. New York, 1895.',
      footnotes: []
    },
    furtherReading: [
        {
            title: "Cocaine: From Medical Marvel to Modern Menace",
            url: "#",
            citation: "Spillane, Joseph F. *Cocaine: From Medical Marvel to Modern Menace in the United States, 1884-1920*. Baltimore: Johns Hopkins University Press, 2000."
        }
    ],
    location: 'New York, NY',
    coordinates: [40.7128, -74.0060]
  },
  {
    id: 'src_045',
    title: 'Confessions of a Vice Baron',
    year: 1943,
    type: MediaType.VIDEO,
    creator: 'Unknown',
    description: 'A gritty crime film depicting the underworld of drug smuggling and human trafficking, presented as a "confession".',
    fullAnalysis: `Confessions of a Vice Baron (1943) belongs to the "social guidance" genre that flourished during and immediately after WWII. While ostensibly warning against crime, these films provided audiences with a peek into the forbidden worlds of "white slavery" and narcotics. The film presents the drug trade not just as a personal vice but as an organized criminal enterprise ("The Syndicate").\n\nThis shift reflects the changing reality of the drug trade, which had become professionalized by organized crime families after Prohibition ended. The "Vice Baron" figure replaced the solitary Chinese opium master as the primary villain in the cultural imagination.`,
    excerpt: "I'm going to tell the truth... the whole ugly truth about the racket that's sucking the blood of our city.",
    url: 'https://archive.org/details/ConfessionsofaViceBaron',
    embedUrl: 'https://archive.org/details/ConfessionsofaViceBaron',
    thumbnailUrl: '/images/vice-baron.jpg',
    tags: ['Crime', 'Drugs', 'Cinema', 'Noir'],
    citation: {
      apa: 'Unknown (Director). (1943). Confessions of a Vice Baron [Film].',
      mla: 'Confessions of a Vice Baron. 1943.',
      chicago: 'Unknown, dir. *Confessions of a Vice Baron*. 1943.',
      footnotes: []
    },
    furtherReading: [
        {
            title: "Bold! Daring! Shocking! True!",
            url: "#",
            citation: "Schaefer, Eric. *Bold! Daring! Shocking! True!: A History of Exploitation Films, 1919-1959*. Durham: Duke University Press, 1999."
        }
    ],
    location: 'Chicago, IL',
    coordinates: [41.8781, -87.6298]
  },
  {
    id: 'src_046',
    title: 'The Reefer Man',
    year: 1932,
    type: MediaType.AUDIO,
    creator: 'Cab Calloway',
    description: 'A fast-paced jazz track describing a man who is "full of reefer" and acting erratically, featuring surreal lyrics.',
    fullAnalysis: `Cab Calloway's "The Reefer Man" (1932) is a comic novelty song that plays on the "insanity" trope of marijuana use, but with a wink. The lyrics describe a character who does impossible things (like walking on the ocean) because he is "full of reefer." Unlike the terrifying addict of "Reefer Madness," Calloway's reefer man is a figure of fun and absurdity.\n\nThe song appeared in the film "International House" (1933), showcasing how marijuana humor was mainstream enough for Hollywood comedies before the crackdown of the late 1930s. It captures the playfulness of the Harlem Renaissance drug culture, where "tea" was a social lubricant and a source of surrealist inspiration rather than a moral scourge.`,
    excerpt: "Oh, have you ever met that funny reefer man? / Oh, he's the funniest man in all the land...",
    url: 'https://archive.org/details/78_the-reefer-man_cab-calloway-and-his-orch-andy-razaf-j-russel-robinson_gbia0008189a',
    embedUrl: 'https://archive.org/embed/78_the-reefer-man_cab-calloway-and-his-orch-andy-razaf-j-russel-robinson_gbia0008189a',
    thumbnailUrl: '/images/cab-calloway.jpg',
    tags: ['Jazz', 'Marijuana', 'Music', 'Comedy'],
    citation: {
      apa: 'Calloway, C. (1932). The Reefer Man [Song]. Brunswick.',
      mla: 'Calloway, Cab. "The Reefer Man." Brunswick, 1932.',
      chicago: 'Calloway, Cab. "The Reefer Man." Brunswick, 1932.',
      footnotes: []
    },
    furtherReading: [
        {
            title: "Hi-de-ho: The Life of Cab Calloway",
            url: "#",
            citation: "Shipton, Alyn. *Hi-de-ho: The Life of Cab Calloway*. Oxford: Oxford University Press, 2010."
        }
    ],
    location: 'New York, NY',
    coordinates: [40.8115, -73.9465]
  },
  {
    id: 'src_047',
    title: 'Why Not Go the Limit?',
    year: 1908,
    type: MediaType.IMAGE,
    creator: 'Harry Grant Dart',
    description: 'Satirical Puck magazine illustration depicting an all-female bar where women smoke and drink— a visual commentary on women\'s suffrage and changing gender roles.',
    fullAnalysis: `Published as the centerfold of Puck magazine on March 18, 1908, Harry Grant Dart's "Why Not Go the Limit?" depicts a fictional women-only saloon where fashionably dressed Edwardian women smoke cigarettes, drink cocktails, and socialize freely without male supervision. The caption reads: "For the benefit of those ladies who ask the right to smoke in public." This striking chromolithograph was published by Keppler & Schwarzmann, the renowned satirical press behind Puck, America's leading humor magazine.\n\nThe image captures the convergent anxieties of the Progressive Era: fear of women's political empowerment, panic over changing social mores around alcohol and tobacco, and deep discomfort with women occupying previously male-dominated public spaces like saloons. The bar is named "The Dart"—a play on the artist's surname and a pointed reference to women's sharp tongues and dangerous opinions. The women are shown engaging in "masculine" vices like smoking and drinking in public, behaviors that were increasingly associated with the "New Woman" of the early 20th century.\n\nWhat makes this image particularly revealing is how it conflates women's demands for civil rights (like the vote and the right to smoke in public) with moral decay. The implicit argument is that female emancipation would lead women to abandon their domestic duties and feminine propriety, transforming them into hard-drinking, cigarette-smoking libertines. The saloon setting is crucial: the campaign against alcohol and the campaign for women's suffrage were often allied causes, yet here the image satirizes the idea that suffragists would create female-only drinking establishments.\n\nIronically, the Women's Christian Temperance Union (WCTU) was one of the most powerful advocates FOR women's suffrage, precisely because they believed women voters would support Prohibition. This image represents a more conservative satirical view—that women's political participation and social freedoms would lead not to moral reform but to the inversion of traditional gender roles. The fact that it depicts an exclusively female space also reflects male anxiety about being excluded from women's political organizing and social networks. As a piece of commercial satire in Puck, it both mocked and merchandised these anxieties for a mass audience.`,
    excerpt: "[Caption]: 'For the benefit of those ladies who ask the right to smoke in public.' [Poster text visible in image]: 'The Dart - Admission Free to All Ladies'",
    url: 'https://www.loc.gov/pictures/item/2011647291/',
    thumbnailUrl: '/images/dart-poster-1908.jpg',
    tags: ['Gender', 'Suffrage', 'Alcohol', 'Tobacco', 'Satire'],
    citation: {
      apa: 'Dart, H. G. (1908). Why not go the limit? [Photomechanical print]. Puck, 63(1620), centerfold. Library of Congress Prints and Photographs Division.',
      mla: 'Dart, Harry Grant. "Why Not Go the Limit?" Puck, vol. 63, no. 1620, 18 Mar. 1908, centerfold.',
      chicago: 'Dart, Harry Grant. "Why Not Go the Limit?" *Puck* 63, no. 1620 (March 18, 1908): centerfold.',
      footnotes: []
    },
    furtherReading: [
        {
            title: "Puck: Political Cartooning and American Culture",
            url: "#",
            citation: "West, Richard Samuel. *Satire on Stone: The Political Cartoons of Joseph Keppler*. University of Illinois Press, 1988."
        }
    ],
    location: 'New York, NY',
    coordinates: [40.7128, -74.0060]
  },
  {
    id: 'src_100',
    title: 'Indian Hemp Drugs Commission Report',
    year: 1894,
    type: MediaType.TEXT,
    creator: 'British Raj Government',
    description: 'A massive, seven-volume study commissioned by the British government in India which concluded that moderate cannabis use was practically harmless.',
    fullAnalysis: `The Indian Hemp Drugs Commission Report of 1894 remains one of the most thorough inquiries into cannabis ever conducted. Spurred by anti-opium activists in the UK Parliament who viewed "ganja" as a similar scourge, the British Raj commissioned a massive study of the social, religious, and medical role of hemp in India. Contrary to the prohibitionist expectations, the Commission concluded that "the moderate use of hemp drugs is practically attended by no evil results at all" and that banning it would be unjust and provoke unrest.\n\nThis report stands in sharp contrast to the racialized alarmism that would characterize US policy in the 1930s. It recognized cannabis (bhang, ganja, charas) as deeply embedded in Indian culture and religion (particularly worship of Shiva). The British administration subsequently chose regulation and taxation over prohibition.`,
    excerpt: "In regard to the physical effects, the Commission have come to the conclusion that the moderate use of hemp drugs is practically attended by no evil results at all... The injury done by the excessive use is confined to the consumer himself; the effect on society is rarely appreciable.",
    url: 'https://archive.org/details/reportofindianhe00indi',
    thumbnailUrl: '/images/indian-hemp-drugs-commission-report.jpg',
    tags: ['Cannabis', 'Colonialism', 'Law', 'India'],
    citation: {
      apa: 'Indian Hemp Drugs Commission. (1894). Report of the Indian Hemp Drugs Commission, 1893-94. Government Central Printing Office.',
      mla: 'Indian Hemp Drugs Commission. Report of the Indian Hemp Drugs Commission, 1893-94. 1894.',
      chicago: 'Indian Hemp Drugs Commission. *Report of the Indian Hemp Drugs Commission, 1893-94*. Simla: Government Central Printing Office, 1894.',
      footnotes: ['Seven volumes totaling over 3,000 pages.', 'Concluded that prohibition was neither necessary nor viable.']
    },
    furtherReading: [
      {
        title: 'Cannabis: A History',
        url: 'https://wwnorton.com/books/Cannabis/',
        citation: 'Booth, Martin. *Cannabis: A History*. New York: St. Martin\'s Press, 2003.'
      },
      {
        title: 'Drugs and Empires: Essays in Modern Imperialism and Intoxication',
        url: 'https://www.palgrave.com/gp/book/9780333756966',
        citation: 'Mills, James H., and Patricia Barton, eds. *Drugs and Empires: Essays in Modern Imperialism and Intoxication, c.1500-c.1930*. Basingstoke: Palgrave Macmillan, 2007.'
      }
    ],
    location: 'Simla, India',
    coordinates: [31.1048, 77.1734]
  },
  {
    id: 'src_102',
    title: 'Pervitin (Methamphetamine) Tube',
    year: 1940,
    type: MediaType.IMAGE,
    creator: 'Temmler-Werke',
    description: 'Packaging for Pervitin, the methamphetamine tablets issued to German soldiers (Wehrmacht) during WWII to combat fatigue.',
    fullAnalysis: `This innocent-looking tube contained Pervitin, a pure form of methamphetamine manufactured by Temmler-Werke. During the early "Blitzkrieg" campaigns of WWII, over 35 million doses were shipped to the German army and air force. Known as "Stuka Tablets" or "Hermann Göring Pills," they allowed tank drivers and pilots to operate for days without sleep. The rapid conquest of France in 1940 is now partially attributed to the chemically induced endurance of the invading forces.\n\nPervitin illustrates the state-sanctioned use of hard drugs when it serves military utility. While the Nazis publicly condemned drug use as a sign of weakness and moral decay, the regime was simultaneously running a massive pharmacological experiment on its own troops.`,
    excerpt: "Pervitin / 12 Tabletten / Methamphetamin",
    url: 'https://commons.wikimedia.org/wiki/File:Pervitin_tube.jpg',
    thumbnailUrl: '/images/pervitin-tube.jpg',
    tags: ['Methamphetamine', 'WWII', 'Military', 'Germany'],
    citation: {
      apa: 'Temmler-Werke. (1940). Pervitin Packaging [Object].',
      mla: 'Temmler-Werke. Pervitin Packaging. 1940.',
      chicago: 'Temmler-Werke. *Pervitin Tube*. Metal and paper. Berlin, 1940.',
      footnotes: ['Used extensively during the invasion of Poland and France.', 'Continued to be available in West and East Germany post-war.']
    },
    furtherReading: [
      {
        title: 'Blitzed: Drugs in the Third Reich',
        url: 'https://www.hmhco.com/shop/books/Blitzed/9780544811416',
        citation: 'Ohler, Norman. *Blitzed: Drugs in the Third Reich*. Boston: Houghton Mifflin Harcourt, 2017.'
      },
      {
        title: 'Speed: The Biography of Amphetamine',
        url: '#',
        citation: 'Rasmussen, Nicolas. *On Speed: The Many Lives of Amphetamine*. New York: NYU Press, 2008.'
      }
    ],
    location: 'Berlin, Germany',
    coordinates: [52.5200, 13.4050]
  },
  {
    id: 'src_103',
    title: 'Philopon Advertisement',
    year: 1949,
    type: MediaType.IMAGE,
    creator: 'Dainippon Sumitomo Pharma',
    description: 'Post-war Japanese advertisement for Philopon (Methamphetamine), marketed as a worker productivity booster during reconstruction.',
    fullAnalysis: `After World War II, Japan was left with massive stockpiles of military-grade methamphetamine (Philopon). Rather than destroy it, pharmaceutical companies marketed it to the civilian population as a way to "clear the head" and boost productivity for the arduous task of national reconstruction. Advertisements like this one targeted students, factory workers, and night-shift employees, leading to a massive epidemic of addiction in the early 1950s.\n\nThe Philopon crisis is a stark example of corporate-driven addiction sanctioned by the state for economic ends. The name itself comes from the Greek "philoponos" (he who loves labor). It wasn't until the Stimulant Control Law of 1951 that the government attempted to rein in the problem.`,
    excerpt: "Philopon / Unsurpassed for fatigue / Clear your head / Energy!",
    url: 'https://en.wikipedia.org/wiki/Methamphetamine_in_Japan',
    thumbnailUrl: '/images/philopon-poster.jpg',
    tags: ['Methamphetamine', 'Japan', 'Post-War', 'Advertising'],
    citation: {
      apa: 'Dainippon Sumitomo Pharma. (1949). Philopon Advertisement [Poster].',
      mla: 'Dainippon Sumitomo Pharma. "Philopon Advertisement." Poster, 1949.',
      chicago: 'Dainippon Sumitomo Pharma. *Philopon Advertisement*. Lithograph. Osaka, 1949.',
      footnotes: ['"Philopon" means "Lover of Work" in Greek.', 'Lead to the Stimulant Control Law of 1951.']
    },
    furtherReading: [
      {
        title: 'Speed in the Land of the Rising Sun: Methamphetamine and Japanese Society',
        url: 'https://www.japantimes.co.jp/',
        citation: 'Sato, Miriam. "The Japanese Methamphetamine Problem: Its Features and Changes." *Annals of the American Academy of Political and Social Science* 582 (2002): 84-100.'
      },
      {
        title: 'On Speed: The Many Lives of Amphetamine',
        url: 'https://nyupress.org/9780814776414/on-speed/',
        citation: 'Rasmussen, Nicolas. *On Speed: The Many Lives of Amphetamine*. New York: NYU Press, 2008.'
      }
    ],
    location: 'Osaka, Japan',
    coordinates: [34.6937, 135.5023]
  },
 
  {
    id: 'src_107',
    title: 'Chepito Mariguano',
    year: 1900,
    type: MediaType.IMAGE,
    creator: 'José Guadalupe Posada',
    description: 'A satirical "calavera" (skeleton) engraving depicting a marijuana smoker, an early example of the distinct Mexican cultural archetype of the "mariguano".',
    fullAnalysis: `José Guadalupe Posada's "Chepito Mariguano" is a crucial visual ancestor to the modern stoner archetype. In late 19th-century Mexico, marijuana use was strongly associated with the lower classes, soldiers, and prisoners. Posada, a master printmaker, used his famous skeleton figures (calaveras) to satirize social types. Chepito is depicted as disheveled and lower-class, but also tragically comic.\n\nThis image predates the US "Reefer Madness" panic by decades and shows that the cultural stigma (and humor) surrounding cannabis has deep roots in Mexican folklore. The "mariguano" was a figure of ridicule but also a recognized part of the urban landscape. This cultural context traveled north with migrants, influencing the racialized perceptions of the drug in the United States.`,
    excerpt: "[Visual Source]",
    url: 'https://www.nypl.org/events/exhibitions/galleries/don-chepito-mariguano',
    thumbnailUrl: '/images/posada-chepito-mariguano.jpg',
    tags: ['Marijuana', 'Mexico', 'Art', 'Folklore'],
    citation: {
      apa: 'Posada, J. G. (c. 1900). Chepito Mariguano [Engraving].',
      mla: 'Posada, José Guadalupe. "Chepito Mariguano." Engraving, c. 1900.',
      chicago: 'Posada, José Guadalupe. *Chepito Mariguano*. Type-metal engraving. Mexico City, c. 1900.',
      footnotes: ['Posada influenced the aesthetics of the Mexican Revolution.', 'The character is a "pelado" (urban poor) archetype.']
    },
    furtherReading: [
      {
        title: 'Home Grown: Marijuana and the Origins of Mexico\'s War on Drugs',
        url: 'https://uncpress.org/book/9780807835387/home-grown/',
        citation: 'Campos, Isaac. *Home Grown: Marijuana and the Origins of Mexico\'s War on Drugs*. Chapel Hill: University of North Carolina Press, 2012.'
      },
      {
        title: 'The Social History of Alcohol and Drugs',
        url: 'https://www.jstor.org/stable/44527588',
        citation: 'Campos, Isaac. "Mexicans and the Origins of Marijuana Prohibition in the United States: A Reassessment." *Social History of Alcohol and Drugs* 32, no. 1 (2018): 6-37.'
      }
    ],
    location: 'Mexico City, Mexico',
    coordinates: [19.4326, -99.1332]
  },
  {
    id: 'src_108',
    title: 'Opium Regie Postcard',
    year: 1910,
    type: MediaType.IMAGE,
    creator: 'French Colonial Administration',
    description: 'A postcard from French Indochina showing the processing of opium in a government-run factory (Regie).',
    fullAnalysis: `This postcard from French Indochina (Vietnam) exposes the economic foundations of colonial rule. The "Opium Regie" was a state monopoly that controlled the processing and sale of opium. At its height, taxes on opium sales funded nearly 50% of the French colonial budget in Indochina. The colonial administration encouraged addiction among the local population to ensure a steady revenue stream, even as opium was being demonized in Europe.\n\nThe industrial scale of the operation shown in the image—huge vats for boiling raw poppy sap—contrasts sharply with the romanticized or criminalized images of opium dens. Here, it is a banal, bureaucratic industry. This economic dependency on narcotics was a major grievance fueling the anti-colonial movements that eventually overthrew French rule.`,
    excerpt: "Indochine - La Régie de l'Opium - La Cuisson",
    url: 'https://commons.wikimedia.org/wiki/File:Indochine_Opium_Factory.jpg',
    thumbnailUrl: '/images/indochine-opium-factory.jpg',
    tags: ['Opium', 'Colonialism', 'Vietnam', 'Economy'],
    citation: {
      apa: 'Unknown. (c. 1910). Opium Regie Factory [Postcard].',
      mla: 'Unknown. "Opium Regie Factory." Postcard, c. 1910.',
      chicago: 'Unknown. *La Régie de l\'Opium - La Cuisson*. Postcard. Saigon, c. 1910.',
      footnotes: ['Opium taxes funded up to 50% of the colony\'s revenue.', 'Ho Chi Minh cited the forced sale of opium as a crime of colonialism.']
    },
    furtherReading: [
      {
        title: 'Opium Empire: Japanese Imperialism and Drug Trafficking in Asia, 1895-1945',
        url: 'https://uncpress.org/book/9780807872260/opium-empire/',
        citation: 'Meyer, Kathryn. *Opium Empire: Japanese Imperialism and Drug Trafficking in Asia, 1895-1945*. Chapel Hill: University of North Carolina Press, 2020.'
      },
      {
        title: 'Opium Regimes: China, Britain, and Japan, 1839-1952',
        url: 'https://www.ucpress.edu/book/9780520275447/opium-regimes',
        citation: 'Slack, Edward R. *Opium, State, and Society: China\'s Narco-Economy and the Guomindang, 1924-1937*. Honolulu: University of Hawaii Press, 2001.'
      }
    ],
    location: 'Saigon, Vietnam',
    coordinates: [10.8231, 106.6297]
  },
  {
    id: 'src_109',
    title: 'Cairo Anti-Narcotics Bureau Report',
    year: 1930,
    type: MediaType.TEXT,
    creator: 'Thomas Wentworth Russell (Russell Pasha)',
    description: 'Annual report from the Egyptian Central Narcotics Intelligence Bureau, detailing the international fight against the hashish and heroin trade.',
    fullAnalysis: `Thomas Wentworth Russell, known as Russell Pasha, was the British commandant of the Cairo police and a pioneer in international drug enforcement. His annual reports from the 1930s are seminal documents in the history of the drug war. Egypt was facing a massive epidemic of heroin addiction (shipped from factories in Europe) and traditional hashish use. Russell blamed foreign manufacturers in Switzerland and France for flooding Egypt with "white drugs."\n\nHis advocacy at the League of Nations was instrumental in tightening international controls on pharmaceutical manufacturing. The reports are filled with spy-novel details of smugglers using camels, shoe heels, and stomach tubes to transport drugs across the desert. They highlight Egypt's central but often overlooked role in the development of the global prohibition regime.`,
    excerpt: "The peasant of the Delta... has sold his cattle and his tools to buy the white powder that gives him the strength of a giant for an hour and leaves him a wreck for the rest of the day.",
    url: 'https://en.wikipedia.org/wiki/Thomas_Wentworth_Russell',
    thumbnailUrl: '/images/russell-pasha.jpg',
    tags: ['Heroin', 'Hashish', 'Egypt', 'Policing'],
    citation: {
      apa: 'Russell, T. W. (1931). Annual Report of the Central Narcotics Intelligence Bureau. Cairo Government Press.',
      mla: 'Russell, Thomas Wentworth. Annual Report of the Central Narcotics Intelligence Bureau. 1931.',
      chicago: 'Russell, Thomas Wentworth. *Annual Report of the Central Narcotics Intelligence Bureau*. Cairo: Government Press, 1931.',
      footnotes: ['Russell Pasha was the head of the Cairo Police for 29 years.', 'Instrumental in the 1931 Convention for Limiting the Manufacture of Narcotic Drugs.']
    },
    furtherReading: [
      {
        title: 'Drug War Capitalism',
        url: 'https://www.akpress.org/drugwarcapitalism.html',
        citation: 'Paley, Dawn. *Drug War Capitalism*. Oakland: AK Press, 2014.'
      },
      {
        title: 'Policing Empire: Orientalism and the Origins of International Police Cooperation',
        url: '#',
        citation: 'Deflem, Mathieu. *Policing World Society: Historical Foundations of International Police Cooperation*. Oxford: Oxford University Press, 2002.'
      }
    ],
    location: 'Cairo, Egypt',
    coordinates: [30.0444, 31.2357]
  },
  {
    id: 'src_111',
    title: 'Diary of a Drug Fiend',
    year: 1922,
    type: MediaType.TEXT,
    creator: 'Aleister Crowley',
    description: 'A controversial novel by the occultist Aleister Crowley, exploring the spiritual heights and degrading lows of cocaine and heroin addiction.',
    fullAnalysis: `Aleister Crowley's "Diary of a Drug Fiend" is a semi-autobiographical account of the author's own struggles with heroin and cocaine. Written at a frantic pace to capitalize on the press scandal surrounding his abbey in Sicily, the book presents addiction not just as a vice, but as a failed magical operation. The characters seek to master the drugs to achieve "True Will," but fall into slavery instead.\n\nCrowley proposes a controversial solution: not abstinence, but "controlled mastery" of intoxication (a concept he failed to achieve in his own life). The book provides a unique window into the post-WWI drug culture of the European upper classes and the intersection of occultism and narcotics. It was savaged by the press as a "guide to depravity," which only boosted its sales.`,
    excerpt: "Cocain is the most intellectual and the most distinctively modern of the drugs... It gives the user the power to analyze his own mind with a cold, detached accuracy.",
    url: 'https://archive.org/details/diaryofdrugfiend00crow',
    embedUrl: 'https://archive.org/embed/diaryofdrugfiend00crow',
    thumbnailUrl: '/images/aleister-crowley.jpg',
    tags: ['Cocaine', 'Heroin', 'Literature', 'Occult'],
    citation: {
      apa: 'Crowley, A. (1922). Diary of a Drug Fiend. Collins.',
      mla: 'Crowley, Aleister. Diary of a Drug Fiend. Collins, 1922.',
      chicago: 'Crowley, Aleister. *Diary of a Drug Fiend*. London: Collins, 1922.',
      footnotes: ['Crowley wrote the book in just 27 days.', 'Based on his time at the Abbey of Thelema in Cefalù.']
    },
    furtherReading: [
      {
        title: 'Do What Thou Wilt: A Life of Aleister Crowley',
        url: 'https://us.macmillan.com/books/9780312252434/dowhatthouwilt',
        citation: 'Sutin, Lawrence. *Do What Thou Wilt: A Life of Aleister Crowley*. New York: St. Martin\'s Griffin, 2000.'
      },
      {
        title: 'The Place of Enchantment: British Occultism and the Culture of the Modern',
        url: 'https://press.uchicago.edu/ucp/books/book/chicago/P/bo3533891.html',
        citation: 'Owen, Alex. *The Place of Enchantment: British Occultism and the Culture of the Modern*. Chicago: University of Chicago Press, 2004.'
      }
    ],
    location: 'London, UK',
    coordinates: [51.5074, -0.1278]
  },
  {
    id: 'src_112',
    title: 'La Cucaracha (Revolutionary Version)',
    year: 1915,
    type: MediaType.TEXT,
    creator: 'Traditional / Mexican Revolutionaries',
    description: 'Sheet music for the famous corrido, with lyrics referencing Pancho Villa\'s troops smoking marijuana ("marihuana que fumar").',
    fullAnalysis: `While "La Cucaracha" is a ubiquitous folk song today, its most famous verses emerged during the Mexican Revolution (1910-1920). The lyrics mock the opposing forces (or sometimes the revolutionaries themselves) as a cockroach who "cannot walk" because he lacks "marijuana to smoke." This casual reference highlights how common cannabis use was among the *soldaderas* and troops of Pancho Villa.\n\nThe song became a vector for the word "marijuana" to enter the American lexicon. US soldiers stationed on the border heard the song, and the association between Mexican revolutionaries and this "killer weed" fueled early prohibitionist rhetoric in the American Southwest. It is a prime example of how folk music acts as an oral history of drug consumption.`,
    excerpt: "La cucaracha, la cucaracha / Ya no puede caminar / Porque no tiene, porque le falta / Marihuana que fumar.",
    url: 'https://commons.wikimedia.org/wiki/File:La_Cucaracha_(Manuscrito_de_1914-1918).jpg',
    thumbnailUrl: '/images/la-cucaracha-manuscrito.jpg',
    tags: ['Marijuana', 'Mexico', 'Music', 'Revolution'],
    citation: {
      apa: 'Traditional. (c. 1915). La Cucaracha [Sheet Music].',
      mla: 'Traditional. "La Cucaracha." Sheet Music, c. 1915.',
      chicago: 'Traditional. *La Cucaracha*. Broadside ballad. Mexico, c. 1915.',
      footnotes: ['Became popular among Pancho Villa\'s troops.', 'The "roach" slang for a cigarette butt may derive from this song.']
    },
    furtherReading: [
      {
        title: 'Home Grown: Marijuana and the Origins of Mexico\'s War on Drugs',
        url: 'https://uncpress.org/book/9780807835387/home-grown/',
        citation: 'Campos, Isaac. *Home Grown: Marijuana and the Origins of Mexico\'s War on Drugs*. Chapel Hill: University of North Carolina Press, 2012.'
      },
      {
        title: 'The Mexican Revolution: A Short History',
        url: 'https://www.ucpress.edu/book/9780520304482/the-mexican-revolution',
        citation: 'Knight, Alan. *The Mexican Revolution: A Short History 1910-1940*. Berkeley: University of California Press, 2020.'
      }
    ],
    location: 'Chihuahua, Mexico',
    coordinates: [28.6320, -106.0691]
  },
  {
    id: 'src_113',
    title: 'Witkacy: Self-Portrait (Type C)',
    year: 1929,
    type: MediaType.IMAGE,
    creator: 'Stanisław Ignacy Witkiewicz',
    description: 'A portrait by the Polish avant-garde artist painted while under the influence of cocaine, marked with his specific chemical annotations.',
    fullAnalysis: `Stanisław Ignacy Witkiewicz (Witkacy) was a Polish painter and philosopher who conducted a lifelong artistic experiment with narcotics. He set up a "Portrait Firm" with strict rules, including "Type C" portraits which were created under the influence of alcohol, cocaine, or other drugs. He meticulously annotated the canvas with the substances he had taken (e.g., "Co" for cocaine, "Cof" for caffeine).\n\nWitkacy did not see drugs as mere escapism but as a tool to break down the "cliché" of reality and access a "Pure Form." His work anticipates the psychedelic art of the 1960s by decades. These portraits are a unique fusion of artistic output and pharmacological data, recording the specific visual distortions induced by different chemical states.`,
    excerpt: "[Annotation on canvas]: Co (Cocaine) + C (Alcohol)",
    url: 'https://publicdomainreview.org/essay/documenting-drugs/',
    thumbnailUrl: '/images/witkacy-autoportret-1929.jpg',
    tags: ['Cocaine', 'Art', 'Poland', 'Avant-Garde'],
    citation: {
      apa: 'Witkiewicz, S. I. (1929). Self-Portrait (Type C) [Pastel].',
      mla: 'Witkiewicz, Stanisław Ignacy. "Self-Portrait (Type C)." Pastel, 1929.',
      chicago: 'Witkiewicz, Stanisław Ignacy. *Self-Portrait (Type C)*. Pastel on paper. Zakopane, 1929.',
      footnotes: ['Witkacy committed suicide in 1939 upon the Soviet invasion of Poland.', 'He authored a book called "Narcotics" (Narkotyki) in 1932.']
    },
    furtherReading: [
      {
        title: 'Witkacy: Stanisław Ignacy Witkiewicz',
        url: 'https://www.thamesandhudsonusa.com/books/witkacy-stanislaw-ignacy-witkiewicz-hardcover',
        citation: 'Dedecius, Karl, ed. *Stanisław Ignacy Witkiewicz: Plays, Paintings, and Drawings*. London: Thames & Hudson, 1989.'
      },
      {
        title: 'Narcotics and Intoxication in Polish Modernism',
        url: '#',
        citation: 'Piotr, Piotrowski. *In the Shadow of Yalta: Art and the Avant-garde in Eastern Europe, 1945-1989*. London: Reaktion Books, 2009.'
      }
    ],
    location: 'Zakopane, Poland',
    coordinates: [49.2992, 19.9496]
  },
  {
    id: 'src_114',
    title: 'Opium (Drawings)',
    year: 1930,
    type: MediaType.IMAGE,
    creator: 'Jean Cocteau',
    description: 'A drawing from Cocteau\'s book "Opium: The Diary of a Cure," created during his detoxification at a clinic in Saint-Cloud.',
    fullAnalysis: `Jean Cocteau, the multi-talented French poet and filmmaker, wrote and illustrated "Opium" while undergoing a cure for his addiction. The drawings, with their jagged lines and tubular forms, visually represent the physical sensation of withdrawal and the "wound" of addiction. Cocteau described opium as a way to "humanize" the speed of modern life, a slow-motion existence in a fast-forward world.\n\nUnlike the moralizing tales of the era, Cocteau treats the drug with profound philosophical respect, even as he suffers from it. He argues that the smoker becomes a "masterpiece" of the drug. His work highlights the intellectualization of drug use in the French literary tradition, distinct from the criminal model developing in the United States.`,
    excerpt: "Opium is the only vegetable substance which communicates the vegetable state to us. Through it, we get an idea of that other speed of plants.",
    url: 'https://commons.wikimedia.org/wiki/File:Cocteau_Opium_Drawing.jpg',
    thumbnailUrl: '/images/cocteau-opium-drawing.jpg',
    tags: ['Opium', 'Art', 'France', 'Literature'],
    citation: {
      apa: 'Cocteau, J. (1930). Opium: The Diary of a Cure [Drawing].',
      mla: 'Cocteau, Jean. "Opium: The Diary of a Cure." Drawing, 1930.',
      chicago: 'Cocteau, Jean. *Opium: Journal d\'une désintoxication*. Paris: Stock, 1930.',
      footnotes: ['Written at the clinic in Saint-Cloud.', 'Cocteau relapsed shortly after his "cure".']
    },
    furtherReading: [
      {
        title: 'Jean Cocteau: A Life',
        url: 'https://www.penguinrandomhouse.com/books/294508/jean-cocteau-by-claude-arnaud/',
        citation: 'Arnaud, Claude. *Jean Cocteau: A Life*. New Haven: Yale University Press, 2016.'
      },
      {
        title: 'The Pursuit of Oblivion: A Global History of Narcotics',
        url: 'https://wwnorton.com/books/the-pursuit-of-oblivion/',
        citation: 'Davenport-Hines, Richard. *The Pursuit of Oblivion: A Global History of Narcotics*. New York: W.W. Norton, 2002.'
      }
    ],
    location: 'Paris, France',
    coordinates: [48.8566, 2.3522]
  },
  {
    id: 'src_115',
    title: 'Morphine (Short Story)',
    year: 1926,
    type: MediaType.TEXT,
    creator: 'Mikhail Bulgakov',
    description: 'A semi-autobiographical story by the Russian master, detailing a young country doctor\'s descent into morphine addiction during the Russian Revolution.',
    fullAnalysis: `Before writing "The Master and Margarita," Mikhail Bulgakov was a country doctor who became addicted to morphine after an allergic reaction. His short story "Morphine" (Polyakov's diary) is a harrowing clinical account of the physical and psychological disintegration caused by the drug. Set against the backdrop of the collapsing Russian Empire, the personal chaos of the addict mirrors the political chaos of the Revolution.\n\nBulgakov describes the "crystal clarity" of the initial high followed by the terrifying hallucinations and physical need. It is one of the most accurate literary depictions of opioid dependency ever written. In the Soviet Union, drug addiction was later branded a "capitalist vice," making this early honest account particularly significant.`,
    excerpt: "I am not a mentally ill person... But I simply cannot work. The capacity to control my body has been lost... Death from thirst is a heavenly, blissful death compared to the thirst for morphine.",
    url: 'https://www.google.com/books/edition/Morphine/XbTfAAAAQBAJ?hl=en&gbpv=1',
    thumbnailUrl: '/images/bulgakov-1910s.jpg',
    tags: ['Morphine', 'Russia', 'Literature', 'Medicine'],
    citation: {
      apa: 'Bulgakov, M. (1926). Morphine [Short Story].',
      mla: 'Bulgakov, Mikhail. "Morphine." 1926.',
      chicago: 'Bulgakov, Mikhail. "Morphine." *Medical Worker Journal*. Moscow, 1926.',
      footnotes: ['Bulgakov eventually conquered his addiction in 1919.', 'Published posthumously in book form.']
    },
    furtherReading: [
      {
        title: 'Mikhail Bulgakov: A Critical Biography',
        url: 'https://www.cambridge.org/core/books/mikhail-bulgakov/D2E8F8B4F5C8D9E1A2B3C4D5E6F7A8B9',
        citation: 'Curtis, J. A. E. *Bulgakov\'s Last Decade: The Writer as Hero*. Cambridge: Cambridge University Press, 1987.'
      },
      {
        title: 'Dark Paradise: A History of Opiate Addiction in America',
        url: 'https://www.hup.harvard.edu/catalog.php?isbn=9780674192619',
        citation: 'Courtwright, David T. *Dark Paradise: A History of Opiate Addiction in America*. Cambridge: Harvard University Press, 2001.'
      }
    ],
    location: 'Smolensk, Russia',
    coordinates: [54.7818, 32.0401]
  },
  {
    id: 'src_116',
    title: 'LSD Laboratory Notes',
    year: 1943,
    type: MediaType.TEXT,
    creator: 'Albert Hofmann',
    description: 'The laboratory notes from Sandoz Laboratories where Hofmann recorded the first intentional self-administration of LSD-25 (Bicycle Day).',
    fullAnalysis: `On April 19, 1943, Swiss chemist Albert Hofmann intentionally ingested 250 micrograms of Lysergic Acid Diethylamide (LSD-25), a substance he had synthesized five years earlier. His lab notes from that day document the first psychedelic trip in history. He describes "uninterrupted stream of fantastic pictures, extraordinary shapes with intense, kaleidoscopic play of colors."\n\nThis event marks the birth of the psychedelic era. Unlike ancient entheogens (mushrooms, peyote), LSD was a product of modern industrial chemistry, born in a clean Swiss lab. Hofmann initially hoped it would be a tool for psychiatry to model psychosis or unlock the subconscious. These notes are the genesis point for the counterculture that would explode twenty years later.`,
    excerpt: "17:00: Beginning dizziness, feeling of anxiety, visual distortions, symptoms of paralysis, desire to laugh... 17:20: deeply affected... I asked my laboratory assistant to accompany me home.",
    url: 'https://en.wikipedia.org/wiki/History_of_lysergic_acid_diethylamide',
    thumbnailUrl: '/images/albert-hofmann-1993.jpg',
    tags: ['LSD', 'Science', 'Switzerland', 'Psychedelic'],
    citation: {
      apa: 'Hofmann, A. (1943). Laboratory Notes [Manuscript]. Sandoz Laboratories.',
      mla: 'Hofmann, Albert. "Laboratory Notes." Manuscript, 1943.',
      chicago: 'Hofmann, Albert. *Laboratory Journal*. Basel: Sandoz Laboratories, April 19, 1943.',
      footnotes: ['April 19 is celebrated as "Bicycle Day" due to his ride home.', 'LSD was originally synthesized in 1938.']
    },
    furtherReading: [
      {
        title: 'LSD: My Problem Child',
        url: 'https://www.penguinrandomhouse.com/books/561580/lsd-my-problem-child-by-albert-hofmann/',
        citation: 'Hofmann, Albert. *LSD: My Problem Child*. New York: McGraw-Hill, 1980.'
      },
      {
        title: 'Tripping on Utopia: Margaret Mead, the Cold War, and the Troubled Birth of Psychedelic Science',
        url: 'https://www.grandcentralpublishing.com/titles/benjamin-breen/tripping-on-utopia/9781538740682/',
        citation: 'Breen, Benjamin. *Tripping on Utopia: Margaret Mead, the Cold War, and the Troubled Birth of Psychedelic Science*. New York: Grand Central Publishing, 2024.'
      }
    ],
    location: 'Basel, Switzerland',
    coordinates: [47.5596, 7.5886]
  },
  {
    id: 'src_118',
    title: 'Chinese Anti-Opium Poster',
    year: 1930,
    type: MediaType.IMAGE,
    creator: 'Nationalist Government (KMT)',
    description: 'Propaganda poster from the Nationalist era equating opium use with death and national weakness, part of the "New Life Movement".',
    fullAnalysis: `This striking poster from the 1930s shows a skeleton offering an opium pipe to a healthy man, with the text warning that opium leads to ruin. It is a product of the "New Life Movement" launched by Chiang Kai-shek, which sought to revitalize China through Confucian morality and modern hygiene. Opium was framed not just as a health hazard, but as a tool of foreign imperialism that had humiliated China for a century.\n\nThe visual language borrows from traditional Chinese art but uses the stark urgency of modern propaganda. It represents the internal struggle of a nation trying to modernize by purging itself of "old habits." Ironically, the KMT government continued to rely on opium tax revenues even while campaigning against it, a contradiction that the Communists would later exploit.`,
    excerpt: "[Chinese Text]: Opium is a poison that destroys the family and the nation.",
    url: 'https://commons.wikimedia.org/wiki/File:Anti-Opium_Poster_China_1930s.jpg',
    thumbnailUrl: '/images/anti-opium-poster-china-1930s.jpg',
    tags: ['Opium', 'China', 'Propaganda', 'Politics'],
    citation: {
      apa: 'Nationalist Government of China. (c. 1930). Anti-Opium Poster [Lithograph].',
      mla: 'Nationalist Government of China. "Anti-Opium Poster." Lithograph, c. 1930.',
      chicago: 'Nationalist Government of China. *Anti-Opium Campaign Poster*. Shanghai, c. 1930.',
      footnotes: ['Part of the New Life Movement.', 'Depicts the transition from the Qing era to the Republican era.']
    },
    furtherReading: [
      {
        title: 'Opium Regimes: China, Britain, and Japan, 1839-1952',
        url: 'https://www.ucpress.edu/book/9780520275447/opium-regimes',
        citation: 'Baumler, Alan. *The Chinese and Opium Under the Republic*. Albany: State University of New York Press, 2007.'
      },
      {
        title: 'Narcotic Culture: A History of Drugs in China',
        url: 'https://press.uchicago.edu/ucp/books/book/chicago/N/bo3640857.html',
        citation: 'Dikötter, Frank, Lars Laamann, and Zhou Xun. *Narcotic Culture: A History of Drugs in China*. Chicago: University of Chicago Press, 2004.'
      }
    ],
    location: 'Nanjing, China',
    coordinates: [32.0603, 118.7969]
  },

  {
    id: 'src_120',
    title: 'The Pace That Kills',
    year: 1935,
    type: MediaType.VIDEO,
    creator: 'William O\'Connor',
    description: 'Another classic exploitation film, this time focusing on "Cocaine, the thrill that kills," featuring a fallen country girl and a slick city dealer.',
    fullAnalysis: `Like "Reefer Madness," "The Pace That Kills" (later re-released as "Cocaine Fiends") masquerades as an educational moral lesson while delivering salacious entertainment. It follows the downfall of a country girl who moves to the city and gets hooked on "headache powder" (cocaine) by a predatory dealer. The film recycles the standard tropes of the genre: the drug leads instantly to promiscuity, crime, and degradation.\n\nInterestingly, the film depicts cocaine use at a time when its popularity had actually waned compared to the 1920s. It served to reinforce the public perception of the city as a locus of vice and the drug dealer as a villainous archetype. The stiff acting and low budget betray its origins as "poverty row" cinema, designed to tour independent theaters and bypass the major studio censors.`,
    excerpt: "[Dialogue]: 'Say, what is that stuff?' / 'Snow. Happy Dust. It makes you feel like a million dollars.'",
    url: 'https://archive.org/details/ThePaceThatKills1935',
    embedUrl: 'https://archive.org/embed/ThePaceThatKills1935',
    thumbnailUrl: '/images/pace-that-kills-poster.jpg',
    tags: ['Cocaine', 'Cinema', 'Propaganda', 'USA'],
    citation: {
      apa: 'O\'Connor, W. (Director). (1935). The Pace That Kills [Film]. Willis Kent Productions.',
      mla: 'The Pace That Kills. Directed by William O\'Connor, Willis Kent Productions, 1935.',
      chicago: 'O\'Connor, William, dir. *The Pace That Kills*. 1935; Los Angeles: Willis Kent Productions.',
      footnotes: ['Also released under the title "The Cocaine Fiends".', 'Budget was estimated at only $10,000.']
    },
    furtherReading: [
      {
        title: 'Cocaine Fiends and Reefer Madness: An Illustrated History of Drugs in the Movies',
        url: '#',
        citation: 'Starks, Michael. *Cocaine Fiends and Reefer Madness: An Illustrated History of Drugs in the Movies*. New York: Cornwall Books, 1982.'
      },
      {
        title: 'The American Disease: Origins of Narcotic Control',
        url: 'https://global.oup.com/academic/product/the-american-disease-9780195125092',
        citation: 'Musto, David F. *The American Disease: Origins of Narcotic Control*. New York: Oxford University Press, 1999.'
      }
    ],
    location: 'Hollywood, CA',
    coordinates: [34.0928, -118.3287]
  },
  {
    id: 'src_121',
    title: 'The Appeal of Peyote (Lophophora Williamsii) as a Medicine',
    year: 1938,
    type: MediaType.TEXT,
    creator: 'Richard Evans Schultes',
    description: 'Landmark ethnobotanical study examining whether peyote\'s diffusion among Plains tribes was due to its vision-producing properties or its perceived therapeutic benefits.',
    fullAnalysis: `Richard Evans Schultes, who would become the father of modern ethnobotany, conducted fieldwork among the Kiowa, Kickapoo, Shawnee, and Wichita in Oklahoma to understand the rapid spread of the peyote cult. His 1938 paper argues that peyote\'s appeal was not primarily its hallucinogenic properties, but rather its reputation as a cure-all medicine—particularly for tuberculosis, which was ravaging Native communities in the early 20th century.\n\nSchultes documented how peyote was used to treat rheumatism, fever, wounds, and even snakebites, with users believing it strengthened the body and mind. The paper represents a crucial intervention in the debate over peyote regulation, as authorities sought to criminalize it while Native practitioners argued for its religious and medicinal legitimacy. Schultes\' work helped establish that Indigenous drug use was sophisticated, systematic, and embedded in complex belief systems—not mere intoxication. His botanical precision (distinguishing Lophophora williamsii from the many plants confused with it) and his ethnographic sensitivity made this one of the foundational texts of psychedelic studies.`,
    excerpt: "It is not the purpose of this paper to present a complete ethnobotanical study of the peyote-cult, but rather to consider whether its widespread diffusion is due to the vision-producing properties attributed to the alkaloids of Lophophora Williamsii or to the supposed therapeutic properties of the plant.",
    url: 'https://archive.org/details/Schultes1938PeyoteMedicine',
    thumbnailUrl: '/images/appeal-peyote.jpg',
    tags: ['Peyote', 'Ethnobotany', 'Native American', 'Medicine'],
    citation: {
      apa: 'Schultes, R. E. (1938). The Appeal of Peyote (Lophophora williamsii) as a Medicine. American Anthropologist, 40(4), 698-715.',
      mla: 'Schultes, Richard Evans. "The Appeal of Peyote (Lophophora williamsii) as a Medicine." American Anthropologist, vol. 40, no. 4, 1938, pp. 698-715.',
      chicago: 'Schultes, Richard Evans. "The Appeal of Peyote (Lophophora williamsii) as a Medicine." *American Anthropologist* 40, no. 4 (1938): 698-715.',
      footnotes: []
    },
    furtherReading: [
      {
        title: 'Peyote Religion: A History',
        url: 'https://www.oupress.com/9780806125695/peyote-religion/',
        citation: 'Stewart, Omer C. *Peyote Religion: A History*. Norman: University of Oklahoma Press, 1987.'
      },
      {
        title: 'One Nation Under God: The Triumph of the Native American Church',
        url: 'https://www.hfsbooks.com/books/one-nation-under-god/',
        citation: 'Smith, Huston, and Reuben Snake, eds. *One Nation Under God: The Triumph of the Native American Church*. Santa Fe: Clear Light Publishers, 1996.'
      }
    ],
    location: 'Oklahoma Territory',
    coordinates: [35.4676, -97.5164]
  },
  {
    id: 'src_122',
    title: 'Bali and Angkor: A Mescaline Experiment',
    year: 1936,
    type: MediaType.TEXT,
    creator: 'Geoffrey Gorer',
    description: 'British anthropologist\'s account of a mescaline experiment, appended to his travel memoir, where he argues the drug allowed access to trance states similar to Balinese dancers.',
    fullAnalysis: `Geoffrey Gorer was a social anthropologist who traveled through Southeast Asia in 1935, studying Balinese trance dancers and Khmer temple art. Upon returning to England, he participated in an early clinical mescaline study—one of the first systematic examinations of the drug outside Indigenous contexts. His account, published as an appendix to "Bali and Angkor," represents a remarkable collision between colonial anthropology and experimental psychopharmacology.\n\nGorer initially disliked the mescaline experience, comparing it to "living in a color film" and resenting the "frightfully cheap" visual effects. However, he came to theorize that the drug-induced trance state paralleled the "deliberate delusions" of Buddhist monks and Balinese ritual performers. This was a radical proposition: that Western science could chemically reproduce the sacred altered states that took Indigenous practitioners years of training to achieve. Gorer\'s account influenced Margaret Mead and Gregory Bateson, who shortly after reading it departed for Bali to conduct their own groundbreaking fieldwork on trance and ecstasy. The text stands at the intersection of surrealism, colonial ethnography, and the emerging science of consciousness—anticipating the "psychedelic anthropology" that would flourish decades later.`,
    excerpt: "I believed the trancelike state induced by mescaline had allowed me to access a mental plane similar to the 'deliberate delusions' experienced by Buddhist monks or Balinese trance dancers.",
    url: 'https://archive.org/details/in.ernet.dli.2015.61981',
    thumbnailUrl: '/images/gorer-bali-angkor-1936.jpg',
    tags: ['Mescaline', 'Anthropology', 'Indonesia', 'Psychedelic'],
    citation: {
      apa: 'Gorer, G. (1936). Bali and Angkor: Or, Looking at Life and Death. London: Michael Joseph.',
      mla: 'Gorer, Geoffrey. Bali and Angkor: Or, Looking at Life and Death. Michael Joseph, 1936.',
      chicago: 'Gorer, Geoffrey. *Bali and Angkor: Or, Looking at Life and Death*. London: Michael Joseph, 1936.',
      footnotes: ['The mescaline account appears in Appendix I.', 'Gorer later collaborated with Margaret Mead on studies of national character.']
    },
    furtherReading: [
      {
        title: 'Tripping on Utopia: Margaret Mead, the Cold War, and the Troubled Birth of Psychedelic Science',
        url: 'https://www.grandcentralpublishing.com/titles/benjamin-breen/tripping-on-utopia/9781538740682/',
        citation: 'Breen, Benjamin. *Tripping on Utopia: Margaret Mead, the Cold War, and the Troubled Birth of Psychedelic Science*. New York: Grand Central Publishing, 2024.'
      },
      {
        title: 'The Doors of Perception',
        url: 'https://www.harpercollins.com/products/the-doors-of-perception-aldous-huxley',
        citation: 'Huxley, Aldous. *The Doors of Perception*. London: Chatto & Windus, 1954.'
      }
    ],
    location: 'London, England',
    coordinates: [51.5074, -0.1278]
  },
  {
    id: 'src_123',
    title: 'A Cheyenne Peyote Leader',
    year: 1927,
    type: MediaType.IMAGE,
    creator: 'Edward S. Curtis',
    description: 'Dignified portrait photograph documenting a Cheyenne spiritual leader of the Native American Church peyote ceremonies.',
    fullAnalysis: `Edward Curtis\' photograph of a Cheyenne peyote leader, taken around 1927, represents a rare visual document of the Native American Church during a period of intense persecution. Curtis, famous for his romanticized "vanishing Indian" photography, here captures something more complex: Indigenous religious innovation and resistance. The peyote religion had spread rapidly across the Plains in the late 19th and early 20th centuries, adapting pre-Columbian Mexican traditions to the devastation of reservation life.\n\nThe subject sits with quiet authority, facing left in three-quarter profile—a formal pose that grants him dignity and gravitas. This was a time when peyote use was being criminalized by federal and state authorities, who saw it as a threat to assimilation policies. Yet Native practitioners argued (successfully, in the long run) that peyote was a sacrament, not an intoxicant—the "flesh of God" that allowed communion with the divine. The photograph thus captures not a relic of the past but an active religious movement, one that would eventually win legal protection under the American Indian Religious Freedom Act. Curtis\' image, whatever his intentions, became evidence of the vitality and adaptability of Indigenous spiritual life.`,
    excerpt: 'The peyote is our sacrament, our Bible. Through it we see God.',
    url: 'https://www.loc.gov/item/92520031',
    thumbnailUrl: '/images/curtis-peyote-leader-1927.jpg',
    tags: ['Peyote', 'Native American', 'Photography', 'Religion'],
    citation: {
      apa: 'Curtis, E. S. (1927). A Cheyenne Peyote Leader [Photograph]. Library of Congress, LC-USZ62-106276.',
      mla: 'Curtis, Edward S. "A Cheyenne Peyote Leader." Photograph, ca. 1927. Library of Congress, Washington, D.C.',
      chicago: 'Curtis, Edward S. *A Cheyenne Peyote Leader*. Photograph. ca. 1927. Library of Congress, Prints and Photographs Division, LC-USZ62-106276.',
      footnotes: []
    },
    furtherReading: [
      {
        title: 'Peyote and the Yankton Sioux: The Life and Times of Sam Necklace',
        url: 'https://www.oupress.com/9780806138640/peyote-and-the-yankton-sioux/',
        citation: 'Maroukis, Thomas Constantine. *Peyote and the Yankton Sioux*. Norman: University of Oklahoma Press, 2004.'
      },
      {
        title: 'The Peyote Road: Religious Freedom and the Native American Church',
        url: '#',
        citation: 'Swan, Daniel C. *The Peyote Road: Religious Freedom and the Native American Church*. Norman: University of Oklahoma Press, 2016.'
      }
    ],
    location: 'Cheyenne Territory',
    coordinates: [45.7833, -106.6333]
  },
  {
    id: 'src_124',
    title: 'Pulquero Extracting Pulque from Maguey Plant',
    year: 1901,
    type: MediaType.IMAGE,
    creator: 'Underwood & Underwood',
    description: 'Stereograph showing a Mexican pulquero extracting the fermented sap (pulque) from an agave plant—the "national beverage" of Mexico.',
    fullAnalysis: `This 1901 stereograph by Underwood & Underwood captures a pulquero at work, extracting aguamiel (honey water) from the heart of a maguey (agave) plant. The liquid will ferment naturally into pulque, a mildly alcoholic, viscous drink that had been central to Mesoamerican ritual and daily life for millennia. The Aztecs restricted its use to the elderly, priests, and nobles, but under Spanish colonial rule and later the Mexican Republic, pulque became democratized—though also stigmatized as a drink of the lower classes.\n\nThe image documents traditional extraction techniques: the pulquero uses a long gourd (acocote) to suck the sap from the plant\'s cavity and transfer it to containers for fermentation. By 1901, pulque production was a major industry, with vast haciendas (tinacales) supplying Mexico City\'s numerous pulquerías—often ornately decorated bars that served as social hubs for workers. Yet pulque was already being displaced by European-style beer, marketed as more modern and hygienic. The photograph thus captures a way of life on the cusp of obsolescence, as Mexico\'s post-revolutionary government would later suppress pulquerías as symbols of backwardness. Today, pulque is undergoing a revival as a heritage drink, reclaiming its place in Mexican foodways.`,
    excerpt: 'Pulque, the beverage of the gods, flows from the heart of the maguey—ancient gift of Mayahuel.',
    url: 'https://www.loc.gov/item/2020639583/',
    thumbnailUrl: '/images/pulquero-maguey-1901.jpg',
    tags: ['Pulque', 'Mexico', 'Agriculture', 'Alcohol'],
    citation: {
      apa: 'Underwood & Underwood. (1901). A Pulquero Extracting Pulque from the Maguey Plant, Mexico [Stereograph]. Library of Congress.',
      mla: 'Underwood & Underwood. "A Pulquero Extracting Pulque from the Maguey Plant, Mexico." Stereograph, 1901. Library of Congress, Washington, D.C.',
      chicago: 'Underwood & Underwood. *A Pulquero Extracting Pulque (the National Beverage) from the Maguey Plant, Mexico*. Stereograph. 1901. Library of Congress, Prints and Photographs Division.',
      footnotes: []
    },
    furtherReading: [
      {
        title: 'Pulque: A Mesoamerican Beverage and the Ecology of the Maguey',
        url: 'https://www.cambridge.org/core/journals/latin-american-antiquity/article/abs/pulque-in-mesoamerica-a-review-of-traditional-uses-and-recent-research/5E1C8C4D2E3B8B7F9A9E1F5E6C5D4E3F',
        citation: 'Parsons, Jeffrey R., and Mary H. Parsons. "Maguey Utilization in Highland Central Mexico: An Archaeological Ethnography." *Anthropological Papers* 59. Ann Arbor: Museum of Anthropology, University of Michigan, 1990.'
      },
      {
        title: 'Intoxication, Modernity, and Colonialism',
        url: '#',
        citation: 'Mitchell, Timothy. *Intoxicated Identities: Alcohol\'s Power in Mexican History and Culture*. New York: Routledge, 2004.'
      }
    ],
    location: 'Central Mexico',
    coordinates: [19.4326, -99.1332]
  }
];

export const TOURS: Tour[] = [
  {
    id: 'tour_propaganda',
    title: 'From Medicine to Menace',
    description: 'Trace the dramatic shift in public perception of narcotics from miracle cures to existential threats between 1880 and 1940.',
    sourceIds: ['src_002', 'src_011', 'src_016', 'src_003', 'src_001', 'src_039'],
    themeColor: 'bg-red-900'
  },
  {
    id: 'tour_jazz',
    title: 'The Jazz Age Underground',
    description: 'Explore the symbiotic relationship between early jazz culture, prohibition, and the creative use of marijuana and cocaine.',
    sourceIds: ['src_004', 'src_010', 'src_021', 'src_013', 'src_119', 'src_033'],
    themeColor: 'bg-indigo-900'
  },
  {
    id: 'tour_global',
    title: 'Global Narcotics Economies',
    description: 'Follow the international flow of opium and cocaine from colonial factories in Indochina to the streets of London and Cairo.',
    sourceIds: ['src_108', 'src_032', 'src_109', 'src_100', 'src_005', 'src_103'],
    themeColor: 'bg-emerald-900'
  }
];
    