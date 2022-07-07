export abstract class Code {
  private code: string;
  private preffix: string;
  private controldigit: string;

  constructor(code: string) {
    this.code = code;
    this.SetPreffix = code;
    this.SetControldigit = code;
  }

  get Code(): string {
    return this.code;
  }

  get Preffix(): string {
    return this.preffix;
  }

  get Controldigit(): string {
    return this.controldigit;
  }

  set SetPreffix(code: string) {
    this.preffix = code.toString().substring(0, 2);
  }

  set SetControldigit(code: string) {
    this.controldigit = code.toString().slice(-1);
  }

  abstract parseCode():  any;
  abstract isValidCode():  any;
}

export class CodeMercadona extends Code{
  private madeby: string;
  private mercacode: string;

  constructor(code: string) {
    super(code); 
    this.Madeby = code;
    this.Mercacode = code;
  }

  set Madeby(code: string) {
    this.madeby = code.toString().substring(2, 7);
  }

  set Mercacode(code: string) {
    this.mercacode = code.toString().substring(7, 12);
  }

  public parseCode(): any {
    return {
      mercacode: this.mercacode,
    };
  }

  public isValidCode() {
    return this.Code.length == 13;
  }
}

export class CodeVariableWeight extends Code{
  private mercacode: string;
  private price: string;

  constructor(code: string) {
    super(code); 
    this.Mercacode = code;
    this.Price = code;
  }

  set Mercacode(code: string) {
    this.mercacode = code.toString().substring(2, 7);
  }

  set Price(code: string) {
    this.price = code.toString().substring(7, 12);
  }

  public parseCode(): any {
    return {
      mercacode: this.mercacode,
      price: this.price,
    };
  }

  public isValidCode() {
    return this.Code.length == 13;
  }
}

export class CodeBulk extends Code {
  private clearancemark: string;
  private mercacode: string;
  private weight: string;
  private pvp: string;
  private price: string;

  constructor(code: string) {
    super(code);
    this.Clearancemark = code;
    this.Mercacode = code;
    this.Weight = code;
    this.Pvp = code;
    this.Price = code;
  }

  set Clearancemark(code: string) {
    this.clearancemark = code.toString().substring(2, 3);
  }

  set Mercacode(code: string) {
    this.mercacode = code.toString().substring(3, 8);
  }

  set Weight(code: string) {
    this.weight = code.toString().substring(8, 13);
  }

  set Pvp(code: string) {
    this.pvp = code.toString().substring(13, 18);
  }

  set Price(code: string) {
    this.price = code.toString().substring(18, 23);
  }

  public parseCode(): any {
    return {
      mercacode: this.mercacode,
      weight: this.weight,
      pvp: this.pvp,
      price: this.price,
    };
  }

  public isValidCode() {
    return this.Code.length == 24;
  }
}