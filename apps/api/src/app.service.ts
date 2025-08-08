import { Injectable } from "@nestjs/common";
import { add } from "@autospace/sample-lib";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World!" + add(1, 2); // Example usage of the imported function
  }
}
