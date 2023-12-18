import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  public async getData(): Promise<any> {
    let res = await axios.get("http://127.0.0.1:8090/api/collections/tweets/records/");
    
    return res.data.items;
  }

  public async post(title: string): Promise<any> {
    let res = await axios.post("http://127.0.0.1:8090/api/collections/tweets/records/", {title: title, content: title, author: "bfywcv5dxdbql2g"});
    
    return res.data.items;
  }


  constructor() { }
}
