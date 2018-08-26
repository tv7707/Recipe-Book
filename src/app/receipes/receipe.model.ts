/*This typescript class describes how receipe should look like. It is the structure.*/

export class Receipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(name: string, desc: string, imgPath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imgPath;
  }
}
