import { BusinessPartner } from "./businessPartner";

export interface WHDocument {
  _id:number;
  dateOfRecording:string;
  dateOfCreation:string;
  transactionType:string;
  status:string;
  year:number;
  businessPartner:BusinessPartner;
}



