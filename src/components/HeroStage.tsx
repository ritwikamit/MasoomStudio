import React from 'react';
import { ArrowUpRight, Camera, Heart, Compass } from 'lucide-react';
import { PortfolioItem } from '../data/portfolioData';

interface HeroStageProps {
  onOpenEnquiry: () => void;
  onSelectPhoto: (item: PortfolioItem) => void;
}

// Curated authentic images from the SignatureImage folder (Zero default stock photos in hero animation)
const SIGNATURE_HERO_ITEMS: PortfolioItem[] = [
  {
    id: "sig-1",
    title: "Eternal Sacred Vows",
    scriptHighlight: "sacred fire",
    category: "weddings",
    categoryLabel: "Royal Pheras",
    couple: "Ananya & Devendra",
    location: "Patna Courtyard",
    year: "2025",
    imageUrl: "/SignatureImage/imgi_20_793902640_18625914019009933_3844893497203068358_n.jpg",
    aspect: "portrait",
    description: "When sacred havan fire bears witness to quiet forever, captured in authentic natural light by Masoom Studio.",
    emotionalExcerpt: "In that quiet breath between rounds, he looked down at her hand, and everything stood still.",
    exif: { lens: "85mm f/1.4 GM", camera: "Sony A7IV", setting: "1/400s · f/1.8 · ISO 320" }
  },
  {
    id: "sig-2",
    title: "The Golden Twilight",
    scriptHighlight: "heritage light",
    category: "candid",
    categoryLabel: "Heritage Pheras",
    couple: "Pooja & Rohan",
    location: "Ganga Ghat, Patna",
    year: "2025",
    imageUrl: "/SignatureImage/imgi_10_620266125_17907545478161915_4102420289312451089_n.jpg",
    aspect: "portrait",
    description: "Quiet laughter and unhurried steps as twilight reflects upon the sacred river.",
    emotionalExcerpt: "Not a single pose directed—only pure, unrehearsed devotion.",
    exif: { lens: "50mm f/1.2 GM", camera: "Sony A7IV", setting: "1/640s · f/1.4 · ISO 160" }
  },
  {
    id: "sig-3",
    title: "Gentle Embrace",
    scriptHighlight: "sacred vow",
    category: "pre-wedding",
    categoryLabel: "Quiet Moments",
    couple: "Simran & Aakash",
    location: "Bodh Gaya Pavilion",
    year: "2024",
    imageUrl: "/SignatureImage/imgi_21_791045423_18625532263009933_1127683184340303703_n.jpg",
    aspect: "portrait",
    description: "A timeless frame of two souls finding quiet solace amidst wedding joy.",
    emotionalExcerpt: "He leaned in to whisper what only she was meant to hear.",
    exif: { lens: "35mm f/1.4 GM", camera: "Sony A7IV", setting: "1/500s · f/1.8 · ISO 200" }
  },
  {
    id: "sig-4",
    title: "Whispers of Forever",
    scriptHighlight: "candid love",
    category: "weddings",
    categoryLabel: "Candid Love",
    couple: "Kavya & Siddharth",
    location: "Heritage Haveli",
    year: "2025",
    imageUrl: "/SignatureImage/imgi_14_793840504_17989682433160466_6763089032284955801_n.jpg",
    aspect: "portrait",
    description: "Raw emotion documented without disruption. The tender glance before the celebrations began.",
    emotionalExcerpt: "You could hear the soft clink of glass bangles and a heartbeat.",
    exif: { lens: "85mm f/1.4 GM", camera: "Sony A7IV", setting: "1/320s · f/1.6 · ISO 400" }
  },
  {
    id: "sig-5",
    title: "Unprompted Joy",
    scriptHighlight: "pure laughter",
    category: "candid",
    categoryLabel: "Ceremony Joy",
    couple: "Meera & Vikram",
    location: "Patna Heritage Club",
    year: "2025",
    imageUrl: "/SignatureImage/imgi_23_712643826_17972376771160466_3971202427154637297_n.jpg",
    aspect: "portrait",
    description: "Burst of candid laughter as garlands are exchanged with playful family rivalry.",
    emotionalExcerpt: "The purest documentation of wedding happiness.",
    exif: { lens: "35mm f/1.4 GM", camera: "Sony A7IV", setting: "1/800s · f/2.0 · ISO 250" }
  },
  {
    id: "sig-6",
    title: "Sacred Haldi Bloom",
    scriptHighlight: "marigold bliss",
    category: "weddings",
    categoryLabel: "Haldi Memories",
    couple: "Isha & Shaurya",
    location: "Patna Ancestral Villa",
    year: "2024",
    imageUrl: "/SignatureImage/imgi_24_710468089_17972373231160466_6423309497429095746_n.jpg",
    aspect: "portrait",
    description: "Golden turmeric paste, flying petals, and sisters laughing till their eyes watered.",
    emotionalExcerpt: "The warm sunlight kissed every grain of yellow marigold.",
    exif: { lens: "24-70mm f/2.8 GM", camera: "Sony A7IV", setting: "1/1000s · f/2.8 · ISO 100" }
  },
  {
    id: "sig-7",
    title: "The Unfiltered Tear",
    scriptHighlight: "vidaai blessing",
    category: "weddings",
    categoryLabel: "Vidaai Blessing",
    couple: "Rhea & Tanmay",
    location: "Royal Lawn, Patna",
    year: "2025",
    imageUrl: "/SignatureImage/imgi_15_791706668_17989657194160466_1288569572505249799_n.jpg",
    aspect: "portrait",
    description: "A father's silent blessing—tears held back until the very moment of departure.",
    emotionalExcerpt: "Some photographs take decades to fully understand; this was one.",
    exif: { lens: "85mm f/1.4 GM", camera: "Sony A7IV", setting: "1/250s · f/1.4 · ISO 800" }
  },
  {
    id: "sig-8",
    title: "The Crimson Dupatta",
    scriptHighlight: "bridal glow",
    category: "portraits",
    categoryLabel: "Bridal Portrait",
    couple: "Aditi & Nikhil",
    location: "Heritage Mandap",
    year: "2025",
    imageUrl: "/SignatureImage/imgi_32_702695987_17969751702160466_2951487923943233506_n.jpg",
    aspect: "portrait",
    description: "Detailed craftsmanship of zari, heritage jewelry, and eyes calm with anticipation.",
    emotionalExcerpt: "She breathed in deeply, ready to step into a new life.",
    exif: { lens: "90mm f/2.8 Macro", camera: "Sony A7IV", setting: "1/200s · f/2.8 · ISO 400" }
  },
  {
    id: "sig-9",
    title: "Stolen Smiles in Sindoordaan",
    scriptHighlight: "sacred red",
    category: "weddings",
    categoryLabel: "Sacred Sindoordaan",
    couple: "Shruti & Harsh",
    location: "Patna Riverside",
    year: "2024",
    imageUrl: "/SignatureImage/imgi_35_648245666_17957908989160466_1465758617195676549_n.jpg",
    aspect: "portrait",
    description: "The quiet sanctity of vermilion traced along the parting of hair.",
    emotionalExcerpt: "Hands trembled slightly, then met in an eternal knot.",
    exif: { lens: "50mm f/1.2 GM", camera: "Sony A7IV", setting: "1/500s · f/1.6 · ISO 320" }
  },
  {
    id: "sig-10",
    title: "Under Marigold Stars",
    scriptHighlight: "evening light",
    category: "weddings",
    categoryLabel: "Evening Pheras",
    couple: "Divya & Yash",
    location: "Courtyard Gardens",
    year: "2025",
    imageUrl: "/SignatureImage/imgi_40_613087823_17949293922160466_8241948158425466193_n.jpg",
    aspect: "portrait",
    description: "Night falls over the courtyard as firelight warms the faces of loved ones chanting mantras.",
    emotionalExcerpt: "Light dancing on gold embroidery, forever remembered.",
    exif: { lens: "35mm f/1.4 GM", camera: "Sony A7IV", setting: "1/200s · f/1.4 · ISO 1250" }
  },
  {
    id: "sig-11",
    title: "The Royal Procession",
    scriptHighlight: "heritage baraat",
    category: "weddings",
    categoryLabel: "Baraat Arrival",
    couple: "Neha & Varun",
    location: "Heritage Enclave",
    year: "2024",
    imageUrl: "/SignatureImage/imgi_25_641238328_18563802418046015_7626816009777784522_n.jpg",
    aspect: "portrait",
    description: "Celebration echoes across the night sky as dhol beats announce the groom's family.",
    emotionalExcerpt: "Unfiltered excitement and dancing cousins under vintage chandeliers.",
    exif: { lens: "24-70mm f/2.8 GM", camera: "Sony A7IV", setting: "1/320s · f/2.8 · ISO 800" }
  },
  {
    id: "sig-12",
    title: "A Quiet Promise",
    scriptHighlight: "quiet heritage",
    category: "candid",
    categoryLabel: "Priceless Heritage",
    couple: "Pallavi & Kunal",
    location: "Bailey Road Estate",
    year: "2025",
    imageUrl: "/SignatureImage/imgi_20_622289146_17972843666834908_8509481171627861222_n.jpg",
    aspect: "portrait",
    description: "Tender gesture captured during family portraits—unnoticed by everyone except our lens.",
    emotionalExcerpt: "The tenderest glances are always the ones never rehearsed.",
    exif: { lens: "85mm f/1.4 GM", camera: "Sony A7IV", setting: "1/400s · f/1.4 · ISO 200" }
  },
  {
    id: "sig-13",
    title: "The First Look",
    scriptHighlight: "pre-wedding",
    category: "pre-wedding",
    categoryLabel: "Pre-Wedding",
    couple: "Sanya & Arjun",
    location: "Terrace Pavilion",
    year: "2024",
    imageUrl: "/SignatureImage/imgi_9_621552755_17956505118026578_7412093389766368195_n.jpg",
    aspect: "portrait",
    description: "Breathless first meeting before guests arrived. Calm, pure, and quiet.",
    emotionalExcerpt: "He was speechless for ten seconds, then broke into the widest smile.",
    exif: { lens: "50mm f/1.2 GM", camera: "Sony A7IV", setting: "1/800s · f/1.4 · ISO 100" }
  },
  {
    id: "sig-14",
    title: "Sacred Seven Rounds",
    scriptHighlight: "royal pheras",
    category: "weddings",
    categoryLabel: "Royal Pheras",
    couple: "Tara & Kabir",
    location: "Patna Heritage Club",
    year: "2025",
    imageUrl: "/SignatureImage/imgi_13_626429047_18039453911743433_5545539555574162708_n.jpg",
    aspect: "portrait",
    description: "Seven promises made by sacred agni, binding two heritage families together.",
    emotionalExcerpt: "The knot was tied firmly, blessed by grandmother's tender prayers.",
    exif: { lens: "35mm f/1.4 GM", camera: "Sony A7IV", setting: "1/400s · f/1.8 · ISO 400" }
  },
  {
    id: "sig-15",
    title: "Blessings of the Elders",
    scriptHighlight: "family heirloom",
    category: "candid",
    categoryLabel: "Family Heirloom",
    couple: "Anjali & Rohit",
    location: "Patna Residence",
    year: "2025",
    imageUrl: "/SignatureImage/imgi_49_793901141_17989635192160466_1011388870616303356_n.jpg",
    aspect: "portrait",
    description: "Generations gathered under one roof, bestowing sacred blessings upon the newly married couple.",
    emotionalExcerpt: "Wrinkled hands holding young palms in unconditional love.",
    exif: { lens: "50mm f/1.2 GM", camera: "Sony A7IV", setting: "1/320s · f/2.0 · ISO 500" }
  },
  {
    id: "sig-16",
    title: "Golden Hour Vows",
    scriptHighlight: "destination vows",
    category: "weddings",
    categoryLabel: "Destination Vows",
    couple: "Ishita & Manav",
    location: "Rajgir Hills",
    year: "2024",
    imageUrl: "/SignatureImage/imgi_18_792764378_17989579062160466_1738659390025263240_n.jpg",
    aspect: "portrait",
    description: "Sunset spilling amber light across the hills as vows are spoken softly.",
    emotionalExcerpt: "Nature provided the cathedral; Masoom Studio provided the eye.",
    exif: { lens: "85mm f/1.4 GM", camera: "Sony A7IV", setting: "1/640s · f/1.6 · ISO 160" }
  },
  {
    id: "sig-17",
    title: "The Sacred Mirror",
    scriptHighlight: "mirror ritual",
    category: "portraits",
    categoryLabel: "Bridal Adornment",
    couple: "Natasha & Kabir",
    location: "Patna Courtyard",
    year: "2025",
    imageUrl: "/SignatureImage/imgi_12_503579484_1821987428343796_4517332579793077509_n.jpg",
    aspect: "portrait",
    description: "Looking into the heritage mirror as the final tikka is set into place.",
    emotionalExcerpt: "A breath caught in quiet wonder.",
    exif: { lens: "50mm f/1.2 GM", camera: "Sony A7IV", setting: "1/320s · f/1.8 · ISO 320" }
  },
  {
    id: "sig-18",
    title: "Scent of Jasmine",
    scriptHighlight: "gajra grace",
    category: "candid",
    categoryLabel: "Fragrant Moments",
    couple: "Trisha & Varun",
    location: "Patna Garden Pavilion",
    year: "2024",
    imageUrl: "/SignatureImage/imgi_23_629689692_18395308570199373_6463516980763330862_n.jpg",
    aspect: "portrait",
    description: "The delicate intertwining of fresh mogra in hair, smiling amidst festive bustle.",
    emotionalExcerpt: "Tradition worn with effortless modern grace.",
    exif: { lens: "85mm f/1.4 GM", camera: "Sony A7IV", setting: "1/500s · f/1.4 · ISO 200" }
  },
  {
    id: "sig-19",
    title: "The Joyful Sangeet",
    scriptHighlight: "sangeet night",
    category: "candid",
    categoryLabel: "Dance & Celebration",
    couple: "Priyanka & Aman",
    location: "Heritage Ballroom",
    year: "2025",
    imageUrl: "/SignatureImage/imgi_35_669741192_18081443231096974_4137129828872593350_n.jpg",
    aspect: "portrait",
    description: "Twirling lehngas and spirited footwork under festive marquee lights.",
    emotionalExcerpt: "Unrestrained celebration that made the entire hall join in.",
    exif: { lens: "24-70mm f/2.8 GM", camera: "Sony A7IV", setting: "1/400s · f/2.8 · ISO 1600" }
  },
  {
    id: "sig-20",
    title: "The Sacred Kalash",
    scriptHighlight: "auspicious kalash",
    category: "weddings",
    categoryLabel: "Sacred Ritual",
    couple: "Deepika & Ranveer",
    location: "Patna River Mandap",
    year: "2024",
    imageUrl: "/SignatureImage/imgi_39_615023029_17949440985160466_7521068306993776435_n.jpg",
    aspect: "portrait",
    description: "Offering water and sacred grains as ancestral blessings are invoked.",
    emotionalExcerpt: "Ancient hymns carried softly across the evening breeze.",
    exif: { lens: "35mm f/1.4 GM", camera: "Sony A7IV", setting: "1/640s · f/1.8 · ISO 250" }
  },
  {
    id: "sig-21",
    title: "Gentle Blessings",
    scriptHighlight: "elders touch",
    category: "weddings",
    categoryLabel: "Sacred Touch",
    couple: "Swati & Gautam",
    location: "Ancestral Courtyard",
    year: "2025",
    imageUrl: "/SignatureImage/imgi_41_615236824_17949183573160466_1779332980666144285_n.jpg",
    aspect: "portrait",
    description: "A gentle hand placed upon the bride's head, conveying decades of quiet love.",
    emotionalExcerpt: "Words were unnecessary; the touch said everything.",
    exif: { lens: "85mm f/1.4 GM", camera: "Sony A7IV", setting: "1/320s · f/1.4 · ISO 400" }
  },
  {
    id: "sig-22",
    title: "Tears of Gratitude",
    scriptHighlight: "vidaai memory",
    category: "candid",
    categoryLabel: "Vidaai Memory",
    couple: "Bhavna & Samarth",
    location: "Patna Estate",
    year: "2024",
    imageUrl: "/SignatureImage/imgi_48_792909935_17989635174160466_3286981417954613676_n.jpg",
    aspect: "portrait",
    description: "Holding mother close before stepping into the decorated car.",
    emotionalExcerpt: "A tear fell onto the silk pallu, preserved forever in time.",
    exif: { lens: "50mm f/1.2 GM", camera: "Sony A7IV", setting: "1/250s · f/1.4 · ISO 640" }
  },
  {
    id: "sig-23",
    title: "The Regal Sherwani",
    scriptHighlight: "royal groom",
    category: "portraits",
    categoryLabel: "Groom Portrait",
    couple: "Raghav & Sakshi",
    location: "Heritage Archway",
    year: "2025",
    imageUrl: "/SignatureImage/imgi_9_825324190_18634205986009933_6617488119082731688_n.jpg",
    aspect: "portrait",
    description: "Handcrafted chikankari embroidery and jeweled kalgi standing tall in natural afternoon light.",
    emotionalExcerpt: "Poised, regal, and ready to welcome his bride.",
    exif: { lens: "85mm f/1.4 GM", camera: "Sony A7IV", setting: "1/800s · f/1.6 · ISO 100" }
  },
  {
    id: "sig-24",
    title: "Eternal Union",
    scriptHighlight: "sacred agni",
    category: "weddings",
    categoryLabel: "Sacred Agni",
    couple: "Tanvi & Rishabh",
    location: "Patna Riverbank Mandap",
    year: "2025",
    imageUrl: "/SignatureImage/imgi_40_653406047_18099443923751734_1855867616202251122_n.jpg",
    aspect: "portrait",
    description: "Holding hands over sacred embers as the seven vows are completed.",
    emotionalExcerpt: "Two lives intertwined in holy matrimony for generations to come.",
    exif: { lens: "35mm f/1.4 GM", camera: "Sony A7IV", setting: "1/400s · f/1.8 · ISO 800" }
  }
];

export const HeroStage: React.FC<HeroStageProps> = ({ onOpenEnquiry, onSelectPhoto }) => {
  const scrollToPortfolio = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('portfolio');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Every column is filled solely with distinct photos from the SignatureImage folder (Zero duplicate images)
  const COL_C1_ITEMS = SIGNATURE_HERO_ITEMS.slice(0, 6);
  const COL_C2_ITEMS = SIGNATURE_HERO_ITEMS.slice(6, 12);
  const COL_C3_ITEMS = SIGNATURE_HERO_ITEMS.slice(12, 18);
  const COL_X1_ITEMS = SIGNATURE_HERO_ITEMS.slice(18, 24);

  // Reusable card renderer with strict border containment and alignment
  const renderCard = (itm: PortfolioItem, keySuffix: string) => {
    return (
      <div
        key={`${itm.id}-${keySuffix}`}
        onClick={() => onSelectPhoto(itm)}
        className="w-[var(--col)] h-[calc(var(--pitch)-var(--gap))] mb-[var(--gap)] rounded-[var(--r)] overflow-hidden relative group cursor-pointer shrink-0 border border-[#0f0f0e]/12 shadow-sm bg-[#eae5dc] isolate [transform:translateZ(0)] select-none hover:border-[#b3884c]/60 transition-colors"
      >
        <img
          src={itm.imageUrl}
          alt={itm.title}
          className="block w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 pointer-events-none"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/15 opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 p-2.5 sm:p-3.5 flex flex-col justify-end pointer-events-none text-left">
          <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-[#eed8b7] font-bold block mb-0.5">
            {itm.categoryLabel}
          </span>
          <span className="text-[10.5px] sm:text-[11.5px] font-bold text-white tracking-tight leading-snug line-clamp-1">
            {itm.title}
          </span>
          <p className="text-[8.5px] sm:text-[9.5px] text-white/90 leading-snug mt-1 line-clamp-2 font-normal">
            {itm.description}
          </p>
          <span className="font-['Pinyon_Script',cursive] text-[11px] sm:text-xs text-[#eed8b7] block mt-0.5 truncate">
            {itm.couple} · {itm.location}
          </span>
        </div>
      </div>
    );
  };

  const renderColumnSets = (items: PortfolioItem[], colPrefix: string) => {
    return (
      <>
        {/* Set A */}
        {items.map((item, idx) => renderCard(item, `${colPrefix}-a-${idx}`))}
        {/* Set B */}
        {items.map((item, idx) => renderCard(item, `${colPrefix}-b-${idx}`))}
        {/* Set C (guarantees continuous coverage across any screen without breaking) */}
        {items.map((item, idx) => renderCard(item, `${colPrefix}-c-${idx}`))}
      </>
    );
  };

  return (
    <section
      className="relative w-full min-h-[100svh] overflow-hidden bg-[#f6f4ee] text-[#0f0f0e] flex flex-col justify-center items-center md:items-start pt-24 sm:pt-28 md:pt-44 lg:pt-48 pb-10 sm:pb-16 px-3.5 sm:px-8 md:px-12 lg:px-16 select-none paper-texture scroll-mt-20 md:scroll-mt-36"
      id="hero-stage"
    >
      {/* LUCID GLASS AMBIENT LIGHTS (Desktop Atmosphere) */}
      <div className="hidden md:block absolute top-1/4 left-1/4 w-[24rem] h-[24rem] rounded-full bg-[#f0e4cf]/50 blur-[90px] pointer-events-none z-0" />
      <div className="hidden md:block absolute bottom-10 right-1/4 w-[28rem] h-[28rem] rounded-full bg-[#eedcc0]/40 blur-[100px] pointer-events-none z-0" />

      {/* ══════════════════════════════════════════════════════════════════
          HERO BACKGROUND MOVING PHOTOS ANIMATION
          - Continuous 3-Set Triple Cascade (100% Seamless, Zero Breaking)
          - 100% Vibrant, Clear, and Visible Across Smartphone & Desktop
          - Aligned strictly to the right side on PC / Tablet view
          ══════════════════════════════════════════════════════════════════ */}
      <div
        className="absolute inset-0 flex justify-center items-start gap-[var(--gap)] overflow-hidden pointer-events-none select-none z-10 opacity-100 md:pointer-events-auto md:inset-auto md:top-0 md:bottom-0 md:right-0 md:h-full md:w-[48%] lg:w-[50%] xl:w-[54%] md:justify-end md:pr-4 lg:pr-8 xl:pr-12"
        style={{
          maskImage: 'var(--mosaic-mask)',
          WebkitMaskImage: 'var(--mosaic-mask)',
        }}
        aria-hidden="true"
        title="Interactive Mosaic: Hover to pause, click to inspect photo"
      >
        {/* EXTRA COLUMN X1 (Wide Desktop Only) */}
        <div className="mosaic-col mosaic-x1 hidden xl:flex">
          {renderColumnSets(COL_X1_ITEMS, 'x1')}
        </div>

        {/* COLUMN C1 (Moving Downward Seamlessly) */}
        <div className="mosaic-col mosaic-c1">
          {renderColumnSets(COL_C1_ITEMS, 'c1')}
        </div>

        {/* COLUMN C2 (Moving Upward Seamlessly) */}
        <div className="mosaic-col mosaic-c2">
          {renderColumnSets(COL_C2_ITEMS, 'c2')}
        </div>

        {/* COLUMN C3 (Moving Downward Seamlessly) */}
        <div className="mosaic-col mosaic-c3">
          {renderColumnSets(COL_C3_ITEMS, 'c3')}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          HERO TYPOGRAPHY & EMOTIONAL NARRATIVE
          - Smartphone: Transparent Frosted Outline Box covering text & details
            keeping the moving photo animation fully visible all around.
          - Desktop: Open luxury layout aligned to the left side.
          ══════════════════════════════════════════════════════════════════ */}
      <div className="relative z-20 w-auto max-w-[340px] xs:max-w-[365px] sm:max-w-md mx-auto text-center flex flex-col items-center justify-center my-auto p-4 xs:p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-white/30 backdrop-blur-md border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.06)] md:text-left md:items-start md:mx-0 md:max-w-xl lg:max-w-2xl md:bg-transparent md:backdrop-blur-none md:border-none md:shadow-none md:p-0">
        {/* Decorated Line with Sharp Pointed Ends - Luxury Typography in All Views */}
        <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 mb-2.5 sm:mb-4">
          {/* Left Sharp Pointed Line */}
          <svg className="w-7 sm:w-12 h-2 shrink-0" viewBox="0 0 50 6" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <polygon points="0,3 12,1 50,2 50,4 12,5" fill="#b3884c" />
          </svg>
          <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[10px] sm:text-xs font-bold tracking-[0.22em] uppercase text-[#8a652c] whitespace-nowrap">
            Annual Retrospective · Estd. 2018
          </span>
          {/* Right Sharp Pointed Line */}
          <svg className="w-7 sm:w-12 h-2 shrink-0" viewBox="0 0 50 6" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <polygon points="0,2 38,1 50,3 38,5 0,4" fill="#b3884c" />
          </svg>
        </div>

        {/* Emotionally Written Headline */}
        <h1 className="leading-[1.04]">
          <span className="block font-['Cormorant_Garamond',serif] font-bold text-2xl sm:text-4xl md:text-5xl lg:text-[62px] xl:text-[68px] text-[#0f0f0e] uppercase tracking-[-0.02em]">
            An archive of light,
          </span>
          <span className="block font-['Pinyon_Script',cursive] text-3xl sm:text-5xl md:text-6xl lg:text-[74px] xl:text-[80px] text-[#8a652c] normal-case my-1 sm:my-2 lg:my-3 font-normal md:pl-2 lg:pl-4">
            cast in gentle stone
          </span>
          <span className="block font-['Cormorant_Garamond',serif] font-bold text-2xl sm:text-4xl md:text-5xl lg:text-[62px] xl:text-[68px] text-[#0f0f0e] uppercase tracking-[-0.02em]">
            and quiet love.
          </span>
        </h1>

        {/* Human, Emotional Narrative Prose */}
        <p className="mt-2.5 sm:mt-4 text-[12px] sm:text-base text-[#1f1d1a] leading-relaxed max-w-xs sm:max-w-md mx-auto md:mx-0 font-medium">
          Masoom Studio archives raw, candid wedding celebrations across Patna and beyond. We give you back the tender glances and unfiltered tears you never wanted to forget.
        </p>

        {/* Action CTAs */}
        <div className="mt-3.5 sm:mt-6 flex flex-wrap items-center justify-center md:justify-start gap-2.5 sm:gap-3 w-full">
          <button
            onClick={onOpenEnquiry}
            className="h-9 sm:h-12 px-5 sm:px-7 bg-[#0f0f0e] hover:bg-[#b3884c] text-white rounded-full font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-md cursor-pointer whitespace-nowrap hover:-translate-y-0.5 active:translate-y-0"
          >
            Check Date
          </button>

          <a
            href="#portfolio"
            onClick={scrollToPortfolio}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-white/90 backdrop-blur-xs border border-[#0f0f0e]/10 text-xs sm:text-sm font-semibold text-[#0f0f0e] hover:text-[#b3884c] transition-all cursor-pointer group shadow-xs hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Installations</span>
            <span className="w-5 h-5 sm:w-6.5 sm:h-6.5 rounded-full bg-[#0f0f0e] text-white inline-flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-xs">
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </span>
          </a>
        </div>

        {/* Clean minimal markers */}
        <div className="mt-3.5 sm:mt-5 inline-flex items-center justify-center md:justify-start gap-2 sm:gap-4 px-2.5 sm:px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-[#0f0f0e]/10 shadow-2xs text-[9px] sm:text-xs text-[#45423d] max-w-full">
          <div className="flex items-center gap-1">
            <Compass className="w-3.5 h-3.5 text-[#b3884c]" />
            <span>Patna, Bihar</span>
          </div>
          <div className="w-[1px] h-3 bg-[#0f0f0e]/15" />
          <div className="flex items-center gap-1">
            <Camera className="w-3.5 h-3.5 text-[#b3884c]" />
            <span>Natural Primes</span>
          </div>
          <div className="w-[1px] h-3 bg-[#0f0f0e]/15" />
          <div className="flex items-center gap-1">
            <Heart className="w-3.5 h-3.5 text-[#b3884c]" />
            <span>Estd. 2018</span>
          </div>
        </div>
      </div>
    </section>
  );
};
