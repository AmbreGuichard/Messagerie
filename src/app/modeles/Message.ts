import {Personne} from "./Personne";

export class Message {
  private _date : Date;
  private _contenu : String;
  private _personne : Personne;


  constructor(date: Date, contenu: String, personne: Personne) {
    this._date = date;
    this._contenu = contenu;
    this._personne = personne;
  }

  get date(): Date {
    return this._date;
  }

  get contenu(): String {
    return this._contenu;
  }

  get personne(): Personne {
    return this._personne;
  }

  set date(value: Date) {
    this._date = value;
  }

  set contenu(value: String) {
    this._contenu = value;
  }

  set personne(value: Personne) {
    this._personne = value;
  }
}
