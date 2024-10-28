import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'JsonToObject'
})


export class JsonToPipe implements PipeTransform{
 transform(value:string) {
        return JSON.parse(value);

    }
}