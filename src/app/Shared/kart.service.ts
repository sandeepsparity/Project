import { Injectable } from '@angular/core';

//Interface
import {Books} from "../Interface/books.interface";

@Injectable()
export class KartService {
private kartList = [];
  bookKart(book){
    console.log(book);
    this.kartList.push(book);
    console.log(this.kartList);
  }
 getkart(){
    return this.kartList;
 }

}
