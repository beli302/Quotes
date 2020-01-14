export class Quote {
  public showDescription: boolean;
  public like: number;
  public like2: number;
  constructor(public name: string, public information: string, public author: string,
    public postDate: Date, ) {
    this.showDescription = false;
    this.like = 0;
    this.like2 = 0;
  }
}
