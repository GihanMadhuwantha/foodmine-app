import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAll():Food[]{
    return [
      {
        id:1,
        name:'pizza1',
        price:200,
        favorite:false,
        stars:2,
        imageUrl:'./assets/images/foods/food1.png',
        origins:['germany','us'],
        cooktime:'10-15'
      },
      {
        id:2,
        name:'pasta',
        price:200,
        favorite:false,
        stars:3,
        imageUrl:'./assets/images/foods/food2.png',
        origins:['germany','us'],
        cooktime:'10-15'
      },
      {
        id:3,
        name:'pizza1',
        price:200,
        favorite:false,
        stars:2,
        imageUrl:'./assets/images/foods/food3.png',
        origins:['germany','us'],
        cooktime:'10-15'
      },
      {
        id:4,
        name:'pizza1',
        price:200,
        favorite:true,
        stars:2,
        imageUrl:'./assets/images/foods/food4.png',
        origins:['germany','us'],
        cooktime:'10-15'
      },
      {
        id:5,
        name:'pizza1',
        price:200,
        favorite:false,
        stars:2,
        imageUrl:'./assets/images/foods/food5.png',
        origins:['germany','us'],
        cooktime:'10-15'
      },
      {
        id:6,
        name:'pizza1',
        price:200,
        favorite:false,
        stars:2,
        imageUrl:'./assets/images/foods/food6.png',
        origins:['germany','us'],
        cooktime:'10-15'
      }

     
    ]
   
  }
}
