export interface Pais {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc?: string;
  independent: boolean;
  status: Status;
  unMember: boolean;
  currencies: { [key: string]: Currency };
  idd: Idd;
  capital?: string[];
  altSpellings: string[];
  region: RegionElement;
  subregion: Subregion;
  languages: Languages;
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini?: { [key: string]: number };
  fifa: string;
  car: Car;
  timezones: string[];
  continents: RegionElement[];
  flags: CoatOfArms;
  coatOfArms: CoatOfArms;
  startOfWeek: StartOfWeek;
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs: string[];
  side: Side;
}

export enum Side {
  Left = 'left',
  Right = 'right',
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum RegionElement {
  Asia = 'Asia',
  Oceania = 'Oceania',
}

export interface Currency {
  name: string;
  symbol: string;
}

export interface Demonyms {
  eng: Eng;
  fra: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Idd {
  root: string;
  suffixes: string[];
}

export interface Languages {
  kor?: string;
  por?: string;
  zho?: string;
  kat?: string;
  mon?: string;
  dzo?: string;
  tha?: string;
  ara?: Ara;
  rus?: string;
  tgk?: string;
  mya?: string;
  kaz?: string;
  eng?: string;
  msa?: string;
  tam?: string;
  fra?: string;
  prs?: string;
  pus?: string;
  tuk?: string;
  nep?: string;
  ind?: string;
  aze?: string;
  hin?: string;
  uzb?: string;
  hye?: string;
  fil?: string;
  heb?: string;
  vie?: string;
  urd?: string;
  tet?: string;
  arc?: string;
  ckb?: string;
  tur?: string;
  khm?: string;
  sin?: string;
  div?: string;
  kir?: string;
  lao?: string;
  jpn?: string;
  fas?: string;
  ben?: string;
}

export enum Ara {
  Arabic = 'Arabic',
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common: string;
}

export interface PostalCode {
  format: string;
  regex: string;
}

export enum StartOfWeek {
  Monday = 'monday',
  Sunday = 'sunday',
  Turday = 'turday',
}

export enum Status {
  OfficiallyAssigned = 'officially-assigned',
}

export enum Subregion {
  CentralAsia = 'Central Asia',
  EasternAsia = 'Eastern Asia',
  SouthEasternAsia = 'South-Eastern Asia',
  SouthernAsia = 'Southern Asia',
  WesternAsia = 'Western Asia',
}
