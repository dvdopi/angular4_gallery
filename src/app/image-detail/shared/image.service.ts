import { Injectable } from '@angular/core'

@Injectable()

export class ImageService{
    visibleImages =[];

getImages(){
    return this.visibleImages = IMAGES.slice(0);
}

getImage(id:number){
    return IMAGES.slice(0).find(image =>image.id == id)
}


}

const IMAGES =[
    {"id":1, "category":"apples", "caption":"Red Apples", "url":"assets/image/apples.jpg"},
    {"id":2, "category":"bananas", "caption":"Manu bananas", "url":"assets/image/bananas.jpg"},
    {"id":3, "category":"oranges", "caption":"GMOs Oranges", "url":"assets/image/oranges.jpg"},
    {"id":4, "category":"mangos", "caption":"Kenyan Mangos", "url":"assets/image/mangos.jpg"},
    {"id":5, "category":"lemons", "caption":"Bitter Lemmons", "url":"assets/image/lemons.jpg"}
]