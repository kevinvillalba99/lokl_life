export interface OwnerSubscriptionResponse {
  message: string;
  data:    OwnerSubscriptionData;
}

export interface OwnerSubscriptionData {
  payment_source_id: string;
  _id:               string;
  owner_id:          string;
  project:           string;
  tax:               string;
  payment_method:    string;
  state:             string;
  installments:      Installment[];
  __v:               number;
}

export interface Installment {
  _id:                   string;
  installment_reference: string;
  installment_number:    string;
  installment_value:     string;
  installment_date:      string;
  installment_state:     string;
}
