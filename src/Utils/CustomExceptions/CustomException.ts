import { HttpException, HttpStatus } from "@nestjs/common";

export class CodeSpecificationException extends HttpException {
  constructor() {
    super('code: does not match on valid code specification', HttpStatus.BAD_REQUEST);
  }
}

export class ValidResponse extends HttpException {
  constructor(msg: any) {
    super(msg, HttpStatus.OK);
  }
}