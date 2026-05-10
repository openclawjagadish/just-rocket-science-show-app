export type Episode = {
  id: string;
  title: string;
  duration: string;
  url: string;
  views: number;
};

// Order matches the YouTube playlist (newest → oldest as provided).
export const episodes: Episode[] = [
  {
    id: "mZGKMP9THCM",
    title:
      "From Robinhood To Space | Baiju Bhatt's Journey of Building an Energy Grid in Orbit",
    duration: "19:41",
    url: "https://www.youtube.com/watch?v=mZGKMP9THCM",
    views: 215,
  },
  {
    id: "3XjdvT1HTcw",
    title:
      "Varda's Plan to Build the Next Great Supply Chain in Space | Will Bruey",
    duration: "20:39",
    url: "https://www.youtube.com/watch?v=3XjdvT1HTcw",
    views: 400,
  },
  {
    id: "egE7qxleGkI",
    title:
      "The Rocket Startup That Sam Altman is Trying To Buy | Stoke Space",
    duration: "20:23",
    url: "https://www.youtube.com/watch?v=egE7qxleGkI",
    views: 1000,
  },
  {
    id: "wvirB-_xGek",
    title: "Why AstroForge is Betting BIG on Mining Asteroids",
    duration: "41:28",
    url: "https://www.youtube.com/watch?v=wvirB-_xGek",
    views: 490,
  },
  {
    id: "hdlo7ZSy8kA",
    title: "Why LEDs are the key to Testing Space Solar Cells",
    duration: "55:58",
    url: "https://www.youtube.com/watch?v=hdlo7ZSy8kA",
    views: 193,
  },
  {
    id: "UFY9XrI6Z-c",
    title: "The Growing Lunar Lander Problem (and Instinct's Solution)",
    duration: "30:57",
    url: "https://www.youtube.com/watch?v=UFY9XrI6Z-c",
    views: 211,
  },
  {
    id: "ZntXg9dD7Zo",
    title:
      "The Startup Launching AI Data Centers to Space | Philip Johnston, CEO of Starcloud",
    duration: "24:15",
    url: "https://www.youtube.com/watch?v=ZntXg9dD7Zo",
    views: 883,
  },
  {
    id: "QEFRaIogPic",
    title: "How to Build and Sell Space Technology",
    duration: "34:16",
    url: "https://www.youtube.com/watch?v=QEFRaIogPic",
    views: 404,
  },
  {
    id: "U1nIsZFQXdU",
    title: "What Investors look for in Space Startups",
    duration: "34:23",
    url: "https://www.youtube.com/watch?v=U1nIsZFQXdU",
    views: 438,
  },
  {
    id: "CNROXyQBo7U",
    title:
      "How Kuva Space is Building Tunable Hyperspectral Satellite Constellations",
    duration: "35:23",
    url: "https://www.youtube.com/watch?v=CNROXyQBo7U",
    views: 387,
  },
  {
    id: "LfRWe4ZpHUY",
    title: "How Novi is Building Edge Computing Hardware for Satellites",
    duration: "37:46",
    url: "https://www.youtube.com/watch?v=LfRWe4ZpHUY",
    views: 382,
  },
  {
    id: "SCGOg0Uejpk",
    title: "Wyvern's Game Changing Hyperspectral Satellite Tech",
    duration: "53:11",
    url: "https://www.youtube.com/watch?v=SCGOg0Uejpk",
    views: 280,
  },
  {
    id: "qiPLuRbpSOQ",
    title:
      "How SpaceX is Changing the Space Industry | Guest Hosted with Akash Bhat",
    duration: "1:09:02",
    url: "https://www.youtube.com/watch?v=qiPLuRbpSOQ",
    views: 186,
  },
  {
    id: "bRBtpHkuk90",
    title:
      "Building the World's Highest Resolution Hyperspectral Satellites with Awais Ahmed | Pixxel",
    duration: "1:02:39",
    url: "https://www.youtube.com/watch?v=bRBtpHkuk90",
    views: 792,
  },
  {
    id: "Zitz59eIh70",
    title:
      "The Future of the Earth Observation Industry with Aravind Ravichandran",
    duration: "41:52",
    url: "https://www.youtube.com/watch?v=Zitz59eIh70",
    views: 247,
  },
  {
    id: "hfaTSTR1Xxc",
    title:
      "In-Space Satellite Servicing with Dave Barnhart and Rahul Rughani | Arkisys",
    duration: "48:51",
    url: "https://www.youtube.com/watch?v=hfaTSTR1Xxc",
    views: 397,
  },
  {
    id: "qm1V6bqS_0k",
    title:
      "First Resonance is Building the Modern Manufacturing Execution System",
    duration: "1:01:47",
    url: "https://www.youtube.com/watch?v=qm1V6bqS_0k",
    views: 1500,
  },
  {
    id: "_gLKdBYXJsk",
    title: "Productizing Satellites with Ian Cinnamon | Apex Space",
    duration: "43:13",
    url: "https://www.youtube.com/watch?v=_gLKdBYXJsk",
    views: 1100,
  },
  {
    id: "nX3USRAgeZ4",
    title: "You Can Order a Satellite Image from Your Phone",
    duration: "52:18",
    url: "https://www.youtube.com/watch?v=nX3USRAgeZ4",
    views: 172,
  },
  {
    id: "nr011UceVgU",
    title: "How Umbra is Changing the Unit Economics of Satellite Imagery",
    duration: "52:22",
    url: "https://www.youtube.com/watch?v=nr011UceVgU",
    views: 590,
  },
  {
    id: "-zzmNSfmS_U",
    title: "Robots for Space Stations | Icarus Robotics",
    duration: "48:04",
    url: "https://www.youtube.com/watch?v=-zzmNSfmS_U",
    views: 133,
  },
];

export const PLAYLIST_URL =
  "https://www.youtube.com/playlist?list=PLCLc3X79kE7mB6aXVgb_T4Gg12ayg62wX";

export function thumbnailFor(id: string): string {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

export function formatViews(n: number): string {
  if (n >= 1000) {
    const k = n / 1000;
    return `${k % 1 === 0 ? k.toFixed(0) : k.toFixed(1)}K views`;
  }
  return `${n} views`;
}
