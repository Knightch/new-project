
export class Expert {
  public name: string;
  public description: string;
  public imagePath: string;
  public timeTable: string;
  public about: string;

  constructor(name: string, desc: string, imagePath: string, timeTable: string, _about: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.timeTable = timeTable;
    this.about = _about;
  }
}
