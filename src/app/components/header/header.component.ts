import { Component, OnInit } from "@angular/core";
import { CitiesService, MainService } from "..";
import { IUser } from "../model/user.interface";


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    providers: [CitiesService]
})
export class HeaderComponent implements OnInit {

    public user!: IUser;
   
    constructor(
        private mainUser: MainService
        ) { }

    ngOnInit(): void {
        this.user = this.mainUser.user;
        this.user.age = 2222;
       
    }



}