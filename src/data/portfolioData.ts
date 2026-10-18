export interface PortfolioItem {
  id: string;
  title: string;
  scriptHighlight: string;
  category: 'weddings' | 'pre-wedding' | 'candid' | 'films' | 'portraits';
  categoryLabel: string;
  couple: string;
  location: string;
  year: string;
  imageUrl: string;
  aspect: 'portrait' | 'landscape' | 'square';
  description: string;
  emotionalExcerpt: string;
  exif: {
    lens: string;
    camera: string;
    setting: string;
  };
}

export interface FilmItem {
  id: string;
  title: string;
  scriptHighlight: string;
  couple: string;
  location: string;
  duration: string;
  thumbnailUrl: string;
  synopsis: string;
  emotionalHook: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  scriptHighlight: string;
  tagline: string;
  description: string;
  deliverables: string[];
  humanNote: string;
}

export const STUDIO_INFO = {
  name: "Masoom Studio",
  founder: "Masoom Javed",
  est: "2018",
  tagline: "Holding your sacred moments in gentle light",
  address: "Bailey Road, near Paras Hospital, Pillar No. 42, Patna, Bihar",
  // Phone and whatsapp links for redirects
  phoneNumber: "+91 7488458213",
  phonePrimaryUrl: "tel:+917488458213",
  phoneSecondaryUrl: "tel:+917488458213",
  whatsappUrl: "https://wa.me/917488458213?text=Hello%20Masoom%20Studio%2C%20we%20are%20planning%20our%20wedding%20and%20would%20love%20to%20talk%20about%20your%20storytelling.",
  emailUrl: "mailto:contact@masoomstudio.in",
  instagram: "https://www.instagram.com/masoomstudio.in/",
  youtube: "https://www.youtube.com/@masoomstudio",
  facebook: "https://www.facebook.com/masoomstudio.in",
  mapsUrl: "https://www.google.com/maps/place/Masoom+Studio/@25.6063075,85.0820087,17z/data=!3m1!4b1!4m6!3m5!1s0x6b8ac3e466df48ab:0x438a05a2030c3f8e!8m2!3d25.6063075!4d85.0820087!16s%2Fg%2F11y372cxr3?entry=ttu"
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "p1",
    title: "Sacred Pheras Under Golden Embers",
    scriptHighlight: "seven eternal steps",
    category: "weddings",
    categoryLabel: "Royal Pheras",
    couple: "Aanya & Kabir",
    location: "Patna Courtyard",
    year: "2025",
    imageUrl: "/Gallary/LandingPage1.jpg",
    aspect: "landscape",
    description: "The crackle of the sacred havan, the scent of crushed camphor and marigold, and two souls quietly committing their lives to one another while families watch in tearful joy.",
    emotionalExcerpt: "In that quiet breath between the fourth and fifth round, he looked down at her hand, and everything stood still.",
    exif: {
      lens: "50mm f/1.2 Cinema Prime",
      camera: "Sony A7IV",
      setting: "1/500s · f/1.4 · ISO 320"
    }
  },
  {
    id: "p2",
    title: "The First Look & Unspoken Vow",
    scriptHighlight: "quiet grace",
    category: "pre-wedding",
    categoryLabel: "Pre-Wedding Solitude",
    couple: "Devika & Rohan",
    location: "Heritage Haveli, Bihar",
    year: "2025",
    imageUrl: "/Gallary/Landingpage2.jpg",
    aspect: "landscape",
    description: "Before the music and the procession, there is this sacred hush. Two hearts finding solace in ancient stone corridors, whispered promises carried softly on the breeze.",
    emotionalExcerpt: "Not a single direction was given—they stood together in natural silence, and that is where the truth lives.",
    exif: {
      lens: "85mm f/1.4 Portrait Prime",
      camera: "Sony A7IV",
      setting: "1/640s · f/1.6 · ISO 200"
    }
  },
  {
    id: "p3",
    title: "The Crimson Dupatta & Mother's Blessing",
    scriptHighlight: "gentle touch",
    category: "portraits",
    categoryLabel: "Bridal Heirlooms",
    couple: "Suhani & Her Mother",
    location: "Patna Ancestral Suite",
    year: "2025",
    imageUrl: "/Gallary/LandingPage3.png",
    aspect: "landscape",
    description: "A mother adjusting the heavy zardozi dupatta, eyes shining with quiet tears of love, handing down three generations of family devotion.",
    emotionalExcerpt: "Neither spoke a word, because words would have broken the sacred stillness into tears.",
    exif: {
      lens: "35mm f/1.4 Documentary",
      camera: "Sony A7IV",
      setting: "1/400s · f/1.8 · ISO 400"
    }
  },
  {
    id: "p4",
    title: "A Father's Silent Benediction",
    scriptHighlight: "unconditional love",
    category: "candid",
    categoryLabel: "The Unscripted Tear",
    couple: "Pooja & Her Father",
    location: "Bailey Road, Patna",
    year: "2024",
    imageUrl: "/Gallary/imgi_11_663089682_18088892522215915_6152286074647645901_n.jpg",
    aspect: "landscape",
    description: "A man who spent thirty years being the unshakeable anchor of his home, gently placing his palm upon his daughter's head in unspoken blessing.",
    emotionalExcerpt: "These are the timeless frames your children will touch with gentle reverence decades from now.",
    exif: {
      lens: "70-200mm f/2.8 Telephoto",
      camera: "Sony A7IV",
      setting: "1/320s · f/2.8 · ISO 640"
    }
  },
  {
    id: "p5",
    title: "The Radiance of Haldi",
    scriptHighlight: "golden joy",
    category: "weddings",
    categoryLabel: "Haldi Celebrations",
    couple: "Meera & Vikram",
    location: "Patna Courtyard Gardens",
    year: "2025",
    imageUrl: "/Gallary/imgi_15_655763221_18131362612557368_1871368625891049134_n.jpg",
    aspect: "portrait",
    description: "Golden turmeric paste, flying marigold petals, and sisters laughing till their eyes watered in the morning sun.",
    emotionalExcerpt: "Unfiltered family celebration where every face radiated honest happiness.",
    exif: {
      lens: "35mm f/1.4 GM",
      camera: "Sony A7IV",
      setting: "1/1000s · f/2.0 · ISO 160"
    }
  },
  {
    id: "p6",
    title: "Exchange of the Sacred Varmala",
    scriptHighlight: "triumphant smiles",
    category: "weddings",
    categoryLabel: "Royal Pheras",
    couple: "Isha & Shaurya",
    location: "Heritage Mandap, Patna",
    year: "2025",
    imageUrl: "/Gallary/imgi_27_628323685_18346461886235287_4431154153769162509_n.jpg",
    aspect: "landscape",
    description: "A flurry of rose petals showering from the night air as their eyes meet above the jasmine garlands.",
    emotionalExcerpt: "A roaring cheer erupted from the family, but between the two of them, it was completely quiet.",
    exif: {
      lens: "24-70mm f/2.8 GM",
      camera: "Sony A7IV",
      setting: "1/500s · f/2.8 · ISO 800"
    }
  },
  {
    id: "p7",
    title: "Bridal Solitude at Twilight",
    scriptHighlight: "heirloom poise",
    category: "portraits",
    categoryLabel: "Bridal Heirlooms",
    couple: "Rhea Sen",
    location: "Rajgir Pavilion",
    year: "2024",
    imageUrl: "/Gallary/imgi_31_704558536_17969950212160466_5180294263165990764_n.jpg",
    aspect: "portrait",
    description: "Draped in pure Banarasi silk, the bride pauses by the stone jharokha as dusk descends over the heritage arches.",
    emotionalExcerpt: "The calm breathing of a woman stepping into her destiny.",
    exif: {
      lens: "85mm f/1.4 GM",
      camera: "Sony A7IV",
      setting: "1/400s · f/1.4 · ISO 250"
    }
  },
  {
    id: "p8",
    title: "The Sacred Knot (Gathbandhan)",
    scriptHighlight: "two souls tied",
    category: "weddings",
    categoryLabel: "Royal Pheras",
    couple: "Kavya & Siddharth",
    location: "Patna Riverside Estate",
    year: "2025",
    imageUrl: "/Gallary/imgi_13_657521665_18125284714601336_3167577979393449239_n.jpg",
    aspect: "landscape",
    description: "Sister of the groom carefully tightening the sacred saffron knot, binding scarves and families together for lifetimes.",
    emotionalExcerpt: "Ancient Vedic rites documented with quiet reverence and natural firelight.",
    exif: {
      lens: "50mm f/1.2 GM",
      camera: "Sony A7IV",
      setting: "1/400s · f/1.8 · ISO 500"
    }
  },
  {
    id: "p9",
    title: "Unprompted Tears at the Vidaai",
    scriptHighlight: "tender farewell",
    category: "candid",
    categoryLabel: "The Unscripted Tear",
    couple: "Aditi & Her Brother",
    location: "Patna Ancestral Residence",
    year: "2024",
    imageUrl: "/Gallary/imgi_19_625845774_18098232941506507_5968467827919506986_n.jpg",
    aspect: "landscape",
    description: "A younger brother holding back tears behind a brave smile, clutching his sister's hand one last time before the doli departed.",
    emotionalExcerpt: "Childhood memories rushing by in thirty seconds of pure emotion.",
    exif: {
      lens: "85mm f/1.4 GM",
      camera: "Sony A7IV",
      setting: "1/250s · f/1.6 · ISO 800"
    }
  },
  {
    id: "p10",
    title: "Echoes of the Sangeet Night",
    scriptHighlight: "music & laughter",
    category: "candid",
    categoryLabel: "The Unscripted Tear",
    couple: "Neha & Kunal",
    location: "Club Pavilion, Patna",
    year: "2025",
    imageUrl: "/Gallary/imgi_33_622021504_18038150105746530_2459113938488280772_n.jpg",
    aspect: "landscape",
    description: "Unstaged joy as grandparents stood up to dance, filling the hall with applause and warm embraces.",
    emotionalExcerpt: "The kind of photographs that keep a family's heart alive.",
    exif: {
      lens: "24-70mm f/2.8 GM",
      camera: "Sony A7IV",
      setting: "1/320s · f/2.8 · ISO 1250"
    }
  },
  {
    id: "p11",
    title: "Whispers Before the Mandap",
    scriptHighlight: "quiet pre-wedding",
    category: "pre-wedding",
    categoryLabel: "Pre-Wedding Solitude",
    couple: "Priyanka & Arjun",
    location: "Bodh Gaya Courtyard",
    year: "2024",
    imageUrl: "/Gallary/imgi_37_624868998_18120768787562443_7707868480967000786_n.jpg",
    aspect: "landscape",
    description: "A serene stroll through ancient brick stupas, sharing quiet smiles away from the bustling reception.",
    emotionalExcerpt: "Two people deeply in love, completely oblivious to our silent camera.",
    exif: {
      lens: "35mm f/1.4 GM",
      camera: "Sony A7IV",
      setting: "1/800s · f/1.8 · ISO 100"
    }
  },
  {
    id: "p12",
    title: "The Queen in Heritage Zari",
    scriptHighlight: "regal bride",
    category: "portraits",
    categoryLabel: "Bridal Heirlooms",
    couple: "Tanvi Verma",
    location: "Heritage Suite, Patna",
    year: "2025",
    imageUrl: "/Gallary/imgi_43_655431071_18158067241437459_47542197678496787_n.jpg",
    aspect: "portrait",
    description: "Standing in the warm natural amber light of the ancestral room, adorned in heirloom polki diamonds.",
    emotionalExcerpt: "Dignity, heritage, and quiet regal grace.",
    exif: {
      lens: "85mm f/1.4 GM",
      camera: "Sony A7IV",
      setting: "1/400s · f/1.4 · ISO 200"
    }
  }
];

export const FILM_ITEMS: FilmItem[] = [
  {
    id: "f1",
    title: "When the River Meets the Sky",
    scriptHighlight: "eternal melody",
    couple: "Aanya & Kabir",
    location: "Patna & Rajgir",
    duration: "4 min 42 sec",
    thumbnailUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
    synopsis: "Not just a wedding video, but a love letter. Spoken vows recorded in intimate quiet, scored with acoustic strings and the laughter of their childhood friends.",
    emotionalHook: "Watch them relive the thunderstorm that broke out just as they completed the final phera, and the laughter that followed."
  },
  {
    id: "f2",
    title: "Letters Written Across Years",
    scriptHighlight: "gentle homecoming",
    couple: "Devika & Rohan",
    location: "Patna Heritage Estate",
    duration: "6 min 15 sec",
    thumbnailUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85",
    synopsis: "Two souls who spent seven years studying across oceans, returning home to the soil of Bihar to place garlands around each other's necks.",
    emotionalHook: "Their grandfather's voice opens the film, reciting a couplet he wrote for their wedding day."
  },
  {
    id: "f3",
    title: "The Fire and the Promise",
    scriptHighlight: "sacred heartbeat",
    couple: "Zoya & Farhan",
    location: "Bailey Road, Patna",
    duration: "3 min 50 sec",
    thumbnailUrl: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1200&q=85",
    synopsis: "From quiet morning prayers to the electrifying explosion of the baraat, woven together in seamless poetic rhythm.",
    emotionalHook: "Crafted to make your eyes well with tears and your heart swell with pure joy."
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "s1",
    number: "01",
    title: "Complete Wedding Photography",
    scriptHighlight: "timeless heirlooms",
    tagline: "Documentary observation & tender fine-art bridal portraits",
    description: "We don't tell you how to feel, and we don't ask you to pose for an audience. We walk with you through the sacred ceremonies, watching from the edges for the genuine smiles, the nervous breaths, and the unrepeatable glances.",
    deliverables: [
      "Master Photographer & Senior Documentary Team",
      "End-to-end ceremony coverage (Haldi, Mehendi, Sangeet & Pheras)",
      "Bespoke hand-calibrated high-resolution digital master collection",
      "Private cloud sanctuary for your family across the globe"
    ],
    humanNote: "For families who cherish honest human memories over artificial staging."
  },
  {
    id: "s2",
    number: "02",
    title: "Cinematic Wedding Filmmaking",
    scriptHighlight: "poetic cinema",
    tagline: "Moving picture storytelling, authentic vows & live soundscapes",
    description: "A wedding film is the only heirloom that lets you hear your father's laugh and your partner's voice as they say your name fifty years from now. We capture real audio, authentic laughter, and weave them into a cinematic short film.",
    deliverables: [
      "Theatrical Teaser Film (Heartfelt social release, 60–90 seconds)",
      "Bespoke Master Wedding Film (6–12 minutes of emotional narrative)",
      "Complete documentary edit of rituals, speeches and vows",
      "Archival 4K master delivery on handcrafted engraved keepsake"
    ],
    humanNote: "Crafted like a documentary film you will show your great-grandchildren."
  },
  {
    id: "s3",
    number: "03",
    title: "Intimate Pre-Wedding Stories",
    scriptHighlight: "quiet romance",
    tagline: "Relaxed days away from the wedding commotion",
    description: "Take a deep breath and escape the wedding planning chaos for a day. We spend an unhurried afternoon in beautiful natural light, letting you two simply be yourselves and fall in love with the camera.",
    deliverables: [
      "Unhurried half-day or full-day shoot at scenic heritage locations",
      "Creative moodboard and thoughtful wardrobe consultation",
      "35–50 fine-art portrait frames retouched by hand",
      "Cinematic romance teaser reel"
    ],
    humanNote: "A peaceful sanctuary of time before the wedding week whirlwind."
  },
  {
    id: "s4",
    number: "04",
    title: "Hand-Bound Heirloom Albums",
    scriptHighlight: "tactile memories",
    tagline: "Museum-grade cotton paper, Italian linen & archival bindings",
    description: "The most sacred moments of your life do not belong on a cold glass screen. Every album we design is printed on thick, 100% acid-free cotton paper and bound in rich linen to be held in warm hands around family dinner tables.",
    deliverables: [
      "Handcrafted 12x18 inch Master Heirloom Album",
      "Gold-leaf foil debossing with your names and wedding date",
      "Velvet-lined protective presentation chest",
      "Pocket duplicate miniature editions for both parents"
    ],
    humanNote: "A physical family heirloom designed to outlive trends and technology."
  }
];
