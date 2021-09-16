import {Message} from "./Message";

export class Personne {
  private _prenom : String;
  private _id : number;


  constructor(prenom: String, id: number) {
    this._prenom = prenom;
    this._id = id;
  }


  set prenom(value: String) {
    this._prenom = value;
  }

  set id(value: number) {
    this._id = value;
  }

  get prenom(): String {
    return this._prenom;
  }

  get id(): number {
    return this._id;
  }
}
