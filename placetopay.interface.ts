
/* Creacion de la sesion de pago PlaceToPay */

export interface CreateSession {
  locale:      string;
  auth:        Auth;
  payer:       Payer;
  payment:     Payment;
  fields:      Field[];
  expiration:  Date;
  returnUrl:   string;
  cancelUrl:   string;
  ipAddress:   string;
  userAgent:   string;
  skipResult:  boolean;
  noBuyerFill: boolean;
}

export interface Auth {
  login:   string;
  tranKey: string;
  nonce:   string;
  seed:    Date;
}

export interface Field {
  keyword:   string;
  value:     string;
  displayOn: string;
}

export interface Payer {
  document:     string;
  documentType: string;
  name:         string;
  surname:      string;
  company:      string;
  email:        string;
  mobile:       string;
}

export interface Payment {
  reference:   string;
  description: string;
  amount:      Amount;
  subscribe:   boolean;
}

export interface Amount {
  currency: string;
  total:    number;
}

/* Respuesta de la sesion de pago PlaceToPay */
export interface ResponseSession {
  status:     Status;
  requestId:  number;
  processUrl: string;
}

export interface Status {
  status:  string;
  reason:  string;
  message: string;
  date:    Date;
}
