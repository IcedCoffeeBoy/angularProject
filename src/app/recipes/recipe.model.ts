import { Ingredient } from './../shared/Ingredient.model';

// Vanilla TypeScript Class
export class Recipe {
  public name: string;
  public description: string;
  public imgPath: string;
  public ingredients: Ingredient[];
  private imgArr: string[];

  constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = desc;
    this.imgPath = imagePath;
    this.ingredients = ingredients;
  }

  setName(name: string): void {
    this.name = name;
  }

  addImage(image: string): void {
    this.imgArr.push(image);
  }

  addImages(images: string[]): void {
    images.forEach((image) => this.imgArr.push(image));
  }

  getImages(): string[] {
    return this.imgArr;
  }


}
