export class TimeOfDay {
  private readonly _representation: string;

  public static Unknown: TimeOfDay = new TimeOfDay("Unknown");
  public static Morning: TimeOfDay = new TimeOfDay("Morning");
  public static Afternoon: TimeOfDay = new TimeOfDay("Afternoon");
  public static Evening: TimeOfDay = new TimeOfDay("Evening");
  public static Night: TimeOfDay = new TimeOfDay("Night");

  private constructor(representation: string) {
      this._representation = representation;
  }

  public toString(){
      return this._representation;
  }
}