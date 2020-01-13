export class Quote {
  public showDescription: boolean;
  public counter1: number;
  public counter2: number;
  constructor(public name: string, public information: string, public author: string,
    public postDate: Date, ) {
    this.showDescription = false;
    this.counter1 = 0;
    this.counter2 = 0;
  }
}
