import { Article } from "./article";

export interface Articles {
  name: string;
  code: string;
  count:number;
  results: Article[];
}
