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
    title: "Seven Steps into Eternity",
    scriptHighlight: "sacred fire",
    category: "weddings",
    categoryLabel: "Royal Pheras",
    couple: "Aanya & Kabir",
    location: "Patna Courtyard",
    year: "2025",
    imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85",
    aspect: "portrait",
    description: "The crackle of the sacred havan, the scent of crushed camphor and marigold, and two souls quietly committing their lives to one another while families watch in tearful joy.",
    emotionalExcerpt: "In that quiet breath between the fourth and fifth round, he looked down at her hand, and everything stood still.",
    exif: {
      lens: "50mm f/1.2 Cinema Prime",
      camera: "Full Frame Sensor",
      setting: "Natural Firelight & Amber Hue"
    }
  },
  {
    id: "p2",
    title: "The Mirror and Her Mother's Eyes",
    scriptHighlight: "gentle grace",
    category: "portraits",
    categoryLabel: "Bridal Heirloom",
    couple: "Devika Mathur",
    location: "Heritage Palace, Bihar",
    year: "2025",
    imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85",
    aspect: "portrait",
    description: "Before the music and the procession, there is this sacred hush. A daughter breathing in the morning sunlight, feeling the weight of generations in her grandmother's heirloom gold.",
    emotionalExcerpt: "Her mother was adjusting the veil behind her, neither of them speaking, because words would have made them both weep.",
    exif: {
      lens: "85mm f/1.4 Portrait Prime",
      camera: "Medium Format Tones",
      setting: "Soft Morning Jharokha Glow"
    }
  },
  {
    id: "p3",
    title: "Quiet Laughter in the Sandstone Courtyard",
    scriptHighlight: "unspoken promises",
    category: "pre-wedding",
    categoryLabel: "Pre-Wedding Solitude",
    couple: "Suhani & Rohan",
    location: "Rajgir Foothills",
    year: "2025",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
    aspect: "landscape",
    description: "No orchestrated poses or awkward instructions. Just two people walking through ancient stone corridors as evening settles over the hills, whispering secrets only they understand.",
    emotionalExcerpt: "They forgot the camera was there within ten minutes, and that is where the magic lives.",
    exif: {
      lens: "35mm f/1.4 Documentary",
      camera: "Cinema Range",
      setting: "Golden Hour Breeze"
    }
  },
  {
    id: "p4",
    title: "A Father's Trembling Blessing",
    scriptHighlight: "endless love",
    category: "candid",
    categoryLabel: "The Unscripted Moment",
    couple: "Pooja & Her Father",
    location: "Bailey Road, Patna",
    year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85",
    aspect: "square",
    description: "A man who spent thirty years being the unshakeable rock of his household, hiding his face in his daughter's veil so she wouldn't see him break down.",
    emotionalExcerpt: "These are the frames your children will touch with gentle fingertips forty years from today.",
    exif: {
      lens: "70-200mm f/2.8 Telephoto",
      camera: "Silent Shutter",
      setting: "Raw Emotional Light"
    }
  },
  {
    id: "p5",
    title: "The Joyful Chaos of the Sangeet",
    scriptHighlight: "wild celebration",
    category: "weddings",
    categoryLabel: "Midnight Sangeet",
    couple: "Zoya & Farhan",
    location: "Patna",
    year: "2025",
    imageUrl: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1200&q=85",
    aspect: "landscape",
    description: "Dhol beats reverberating against the chest, dupattas flying, cousins cheering, and two families melting into one joyous tidal wave of celebration.",
    emotionalExcerpt: "Happiness so loud and sincere you can still hear the rhythm through the still photograph.",
    exif: {
      lens: "24mm f/1.4 Wide Angle",
      camera: "High Dynamic Range",
      setting: "Festive Sparkler Trails"
    }
  },
  {
    id: "p6",
    title: "Henna, Petals and Sisterhood",
    scriptHighlight: "shared warmth",
    category: "candid",
    categoryLabel: "Mehendi Afternoon",
    couple: "Meera & Her Sisters",
    location: "Danapur Courtyard",
    year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=85",
    aspect: "portrait",
    description: "The earthy perfume of fresh henna paste, old folk songs sung off-key by aunties, and childhood friends feeding the bride sweets while her hands dry.",
    emotionalExcerpt: "The quiet intimacies that turn a wedding into a sanctuary of warmth.",
    exif: {
      lens: "90mm Macro Prime",
      camera: "High Resolution",
      setting: "Warm Dappled Shade"
    }
  },
  {
    id: "p7",
    title: "Dawn on the Sacred River",
    scriptHighlight: "timeless dawn",
    category: "pre-wedding",
    categoryLabel: "Riverfront Poem",
    couple: "Ananya & Vikrant",
    location: "Ganga Ghats, Patna",
    year: "2025",
    imageUrl: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=85",
    aspect: "landscape",
    description: "The world is asleep, the river is like liquid silver, and a wooden boat glides quietly as the first sunbeam strikes their faces.",
    emotionalExcerpt: "A love story framed by the same waters that have blessed this soil for thousands of years.",
    exif: {
      lens: "35mm f/1.4 Prime",
      camera: "Cinema Grain",
      setting: "Soft River Mist"
    }
  },
  {
    id: "p8",
    title: "The Holy Parting of Red",
    scriptHighlight: "sacred vow",
    category: "portraits",
    categoryLabel: "Sindoor Khela",
    couple: "Riddhima & Aditya",
    location: "Gaya Heritage Haveli",
    year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=85",
    aspect: "portrait",
    description: "The crimson powder tracing the sacred parting of her hair. A gesture centuries old, felt anew in every beating heart.",
    emotionalExcerpt: "No performance. Just pure devotion and the quiet gasp of everyone in the room.",
    exif: {
      lens: "85mm f/1.4 Prime",
      camera: "Fine Art Calibration",
      setting: "Candlelight & Incense"
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
