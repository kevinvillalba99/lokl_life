export interface PropertiesResponse {
  message: string;
  data:    PropertyData[];
}

export interface PropertyData {
  property:   Property;
  buys:       number;
  payment:    number;
  shares:     number;
  docuSigned: DocuSigned[];
}

export interface DocuSigned {
  _id:          string;
  originalUrl:  string;
  url:          string;
  project_id:   string;
  referencepay: string;
}

export interface Property {
  social:                      Social;
  terms:                       string[];
  owners:                      any[];
  living_in:                   any[];
  is_completed:                boolean;
  is_active:                   boolean;
  simulator:                   any[];
  _id:                         string;
  lokl_id:                     string;
  name:                        string;
  rate:                        number;
  start_operation_date:        string;
  first_dividend_payment_date: string;
  short_description:           string;
  description:                 string;
  description_highlight:       string;
  externs_living_in:           number;
  max_rooms:                   number;
  risk:                        string;
  city:                        string;
  city_description:            string;
  neighborhood:                string;
  neighborhood_description:    string;
  country:                     string;
  map_uri:                     string;
  min_shares:                  number;
  max_shares:                  number;
  initial_value:               number;
  share_value:                 number;
  min_return:                  number;
  max_return:                  number;
  available_shares:            number;
  invested:                    number;
  sold_shares:                 number;
  min_invested:                number;
  phase:                       Phase;
  videos:                      VideoElement[];
  logo:                        string;
  render_image:                string;
  fees:                        any[];
  rooms:                       Room[];
  photos:                      VideoElement[];
  benefits:                    BenefitElement[];
  topics:                      Topic[];
  services:                    Service[];
  createdAt?:                  string;
  updatedAt?:                  string;
  __v?:                        number;
}

export interface BenefitElement {
  _id:         string;
  benefit:     PurpleBenefit;
  description: string;
}

export interface PurpleBenefit {
  is_active:          boolean;
  _id:                string;
  name:               string;
  benefit_icon_path?: string;
  createdAt:          string;
  updatedAt:          string;
  __v:                number;
  service_icon_path?: string;
}

export interface Phase {
  name:        string;
  description: string;
}

export interface VideoElement {
  tags: Tag[];
  _id:  string;
  path: string;
}

export enum Tag {
  Comunidad = "Comunidad",
  Espacios = "Espacios",
  Experiencias = "Experiencias",
}

export interface Room {
  spaces:      string[];
  _id:         string;
  description: string;
  room_type:   string;
  area:        number;
  rent:        number;
  render:      string;
  blueprint:   string;
  photos:      RoomPhoto[];
}

export interface RoomPhoto {
  _id:  string;
  name: string;
  path: string;
}

export interface Service {
  _id:                string;
  service:            PurpleBenefit;
  service_image_path: string;
}

export interface Social {
  instagram: string;
  webpage:   string;
  facebook:  string;
}

export interface Topic {
  _id:              string;
  topic:            PurpleBenefit;
  description:      string;
  topic_image_path: string;
}
