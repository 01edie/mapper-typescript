import { faker } from "@faker-js/faker";
import { Pointable } from "./CustomMap";

export class User implements Pointable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor(){
    this.name = faker.name.firstName()
    this.location = {
        lat: parseFloat(faker.address.latitude()),
        lng: +faker.address.longitude()
    }
  }
  contentSummary(): string {
    return `<h5>User : ${this.name}</h5>`
  }
}
