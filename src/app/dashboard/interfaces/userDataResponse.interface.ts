export interface UserDataResponse {
  message: string;
  data:    UserData;
}

export interface UserData {
  investment_terms:  boolean;
  discount_shares:   number;
  is_email_verified: boolean;
  coupons:           any[];
  is_active:         boolean;
  lead_origin:       string;
  uniquecode:        string;
  profile_complete:  boolean;
  referral_code:     string;
  _id:               string;
  first_name:        string;
  last_name:         string;
  email:             string;
  document_number:   string;
  password:          string;
  terms:             boolean;
  document_type:     string;
  phone:             string;
  originPage:        string;
  properties:        Property[];
  docuSigned:        DocuSigned[];
  createdAt:         string;
  updatedAt:         string;
  __v:               number;
  address:           string;
  document_date:     string;
}

export interface DocuSigned {
  _id:          string;
  originalUrl:  string;
  url:          string;
  project_id:   string;
  referencepay: string;
}

export interface Property {
  payment_id:      string[];
  reference_id:    string[];
  _id:             string;
  project_id:      string;
  payment_value:   number;
  payment_state:   string;
  shares_quantity: number;
}
