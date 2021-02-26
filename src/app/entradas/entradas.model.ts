import { convertTypeAcquisitionFromJson } from 'typescript';
import { EntradasEnumService } from './entradas-enum.service';

export interface Entradas {
  id? : number;
  domain : string;
  country : string;
  create_date:string;
  scheduling? :Date
  phone:number;
  status_info : string
  obs? : string[]
  
  




 
}
