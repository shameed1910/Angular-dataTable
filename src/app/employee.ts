import { commodity } from "./commodity-list/commodity";
import { weightdesc } from "./weightdesc";

export class Employee {

    id: number;
    name: string;
    email: string;
    commodity: commodity;
    weight: number;
    weightdesc: weightdesc;
    rupees: number;
    mobile: number;
    purchase_date:string;
  
    constructor(id: number, name: string,  email: string, commodity:commodity, 
      weight: number, weightdesc:weightdesc, rupees: number , mobile: number, purchase_date: string)
      {
      this.id = id;
      this.name = name;
      this.email = email;
      this.commodity=commodity;
      this.weight=weight;
      this.weightdesc=weightdesc;
      this.rupees=rupees;
      this.mobile=mobile;
      this.purchase_date=purchase_date;
    }
  
  }