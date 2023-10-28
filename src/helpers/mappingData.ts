import ua from "../../public/flag-icons-near/ua.png";
import ae from "../../public/flag-icons-near/ae.png";
import au from "../../public/flag-icons-near/au.png";
import ca from "../../public/flag-icons-near/ca.png";
import de from "../../public/flag-icons-near/de.png";
import es from "../../public/flag-icons-near/es.png";
import fr from "../../public/flag-icons-near/fr.png";
import gb from "../../public/flag-icons-near/gb.png";
import it from "../../public/flag-icons-near/it.png";
import ind from "../../public/flag-icons-near/in.png";
import th from "../../public/flag-icons-near/th.png";
import usa from "../../public/flag-icons-near/us.png";
import { StaticImageData } from "next/image";

export const languageMapping: LanguageMapping = {
  1: { full: "Ukrainian", short: "UA" },
  2: { full: "Thai", short: "TH" },
  3: { full: "Spanish", short: "ES" },
  4: { full: "Russian", short: "RU" },
  5: { full: "Italian", short: "IT" },
  6: { full: "Hindi", short: "HI" },
  7: { full: "German", short: "DE" },
  8: { full: "French", short: "FR" },
  9: { full: "English", short: "EN" },
  10: { full: "Arabic", short: "AR" },
};
export const countriesMapping: CountriesMapping = {
  1: {
    countryName: "United States",
    flag: usa,
  },
  2: {
    countryName: "Ukraine",
    flag: ua,
  },
  3: {
    countryName: "Germany",
    flag: de,
  },
  4: {
    countryName: "Italy",
    flag: it,
  },
  5: {
    countryName: "United Kingdom",
    flag: gb,
  },
  6: {
    countryName: "United Arab Emirates",
    flag: ae,
  },
  7: {
    countryName: "France",
    flag: fr,
  },
  8: {
    countryName: "Canada",
    flag: ca,
  },
  9: {
    countryName: "Australia",
    flag: au,
  },
  10: {
    countryName: "Spain",
    flag: es,
  },
  11: {
    countryName: "Thailand",
    flag: th,
  },
  12: {
    countryName: "India",
    flag: ind,
  },
};
export const citiesMapping: CitiesMapping = {
  1: "New York",
  2: "Los Angeles",
  3: "Chicago",
  4: "Houston",
  5: "Phoenix",
  6: "Kyiv",
  7: "Kharkiv",
  8: "Odesa",
  9: "Dnipro",
  10: "Lviv",
  11: "Berlin",
  12: "Hamburg",
  13: "Munich",
  14: "Cologne",
  15: "Frankfurt",
  16: "Rome",
  17: "Milan",
  18: "Naples",
  19: "Turin",
  20: "Palermo",
  21: "London",
  22: "Birmingham",
  23: "Manchester",
  24: "Glasgow",
  25: "Liverpool",
  26: "Dubai",
  27: "Abu Dhabi",
  28: "Sharjah",
  29: "Al Ain",
  30: "Ajman",
  31: "Paris",
  32: "Marseille",
  33: "Lyon",
  34: "Toulouse",
  35: "Nice",
  36: "Toronto",
  37: "Montreal",
  38: "Vancouver",
  39: "Calgary",
  40: "Edmonton",
  41: "Sydney",
  42: "Melbourne",
  43: "Brisbane",
  44: "Perth",
  45: "Adelaide",
  46: "Madrid",
  47: "Barcelona",
  48: "Valencia",
  49: "Seville",
  50: "Zaragoza",
  51: "Bangkok",
  52: "Chiang Mai",
  53: "Phuket",
  54: "Pattaya",
  55: "Krabi",
  56: "New Delhi",
  57: "Mumbai",
  58: "Bangalore",
  59: "Chennai",
  60: "Kolkata",
};

export const asStatusesMapping: AsStatusesMapping = {
  1: "looking for an executor",
  2: "in progress",
  3: "completed",
  4: "expired",
  5: "canceled",
};

export type AsStatusesMapping = { [key: number]: string };

export type LanguageMapping = {
  [key: number]: {
    full: string;
    short: string;
  };
};
export type CountriesMapping = {
  [key: number]: {
    countryName: string;

    flag: StaticImageData;
  };
};
export type CitiesMapping = {
  [key: number]: string;
};
