import { faker } from "@faker-js/faker";
import { Pointable } from "./CustomMap";

export class Company implements Pointable{
    name: string;
    catchPhrase: string;
    location:{
        lat: number;
        lng: number;
    }
    constructor(){
        this.name= faker.company.name()
        this.catchPhrase = faker.company.catchPhrase()
        this.location = {
            lat:parseFloat(faker.address.latitude()),
            lng: Number(faker.address.longitude())
        }
    }
    contentSummary(): string {
        return `
        <div>
        <h5>Company Name : ${this.name}</h5>
        <h5>Catch Phrase : ${this.catchPhrase}</h5>
        </div>
        `
    }
}