export class Manufacturer {
  constructor(public motorcycles: Motorcycle[]) {}
}

export class Motorcycle {
  constructor(
    public year: number,
    public model: string,
    public category: string,
    public cc: number,
    public hp: number,
    public imagePath: string
  ) {}
}

export const manufacturers = {
  BMW: [],
  Honda: new Manufacturer([
    new Motorcycle(
      2017,
      "CB 1100",
      "Naked",
      1140,
      89,
      "motorcycle_2_thumb.jpg"
    ),
    new Motorcycle(
      2019,
      "Africa Twin",
      "Dual-Sport",
      1140,
      89,
      "motorcycle_3_thumb.jpg"
    ),
  ]),
  Indian: new Manufacturer([
    new Motorcycle(
      2019,
      "FTR 1200 S",
      "Naked",
      1203,
      120,
      "motorcycle_1_thumb.jpg"
    ),
  ]),
  Triumph: new Manufacturer([
    new Motorcycle(
      2019,
      "Thruxton",
      "Naked",
      1200,
      97,
      "motorcycle_4_thumb.jpg"
    ),
  ]),
  Victory: new Manufacturer([
    new Motorcycle(
      2014,
      "Judge",
      "Cruiser",
      1731,
      85,
      "motorcycle_5_thumb.jpg"
    ),
  ]),
};
