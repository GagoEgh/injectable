import { Component, OnInit } from "@angular/core";
import { CitiesService } from "../../services/cities.service";

@Component({
    selector: 'app-sub',
    templateUrl: './subHeader.component.html',
    styleUrls: ['./subHeader.component.css']
})
export class SubHeaderComponent implements OnInit {
    public cities!: string[];
    constructor(private citiesService: CitiesService) { }
    ngOnInit(): void {
        this.cities = this.citiesService.citeies
    }

    
    delete(i: number) {
        this.cities.splice(i, 1)
    }

}