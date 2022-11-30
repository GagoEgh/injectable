import { Injectable } from "@angular/core";
import { IUser } from "../model/user.interface";


@Injectable({
    providedIn:'root'
})
export class MainService {

    user:IUser = {
        firstName: 'Jone',
        lastName: 'English',
        age: 23
    }

}