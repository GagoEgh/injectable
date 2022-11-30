import { Component, OnInit } from "@angular/core";
import { IUser } from "../model/user.interface";
import { CitiesService } from "../services/cities.service";
import { MainService } from "../services/main.service";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    providers: [CitiesService],
})
export class FooterComponent implements OnInit {
    public user!: IUser;
    public cities!: string[];
    constructor(
        private mainUser: MainService,
        private citifesService: CitiesService) { }

    ngOnInit(): void {
        this.user = this.mainUser.user;
        this.user.age = 4444;
        this.cities = this.citifesService.citeies
    }

}