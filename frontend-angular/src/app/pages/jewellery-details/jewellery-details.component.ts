import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-jewellery-details',
  templateUrl: './jewellery-details.component.html',
  styleUrls: ['./jewellery-details.component.css']
})
export class JewelleryDetailsComponent implements OnInit {
  // currentJewellery: any = [];

  // constructor(private mainService: MainService) {}

  // ngOnInit() {
  //   this.getJewelleryDetails();
  // }

  // getJewelleryDetails() {
  //   console.log("aici");
  //   this.mainService.getJewelleryDetails("600aa51327eda43308bbf49a").subscribe((res: any) => {
  //     console.log(res.currentJewellery);
  //     this.currentJewellery = res.currentJewellery;
  //     console.log(this.currentJewellery);
  //   });
  // }

  currentJewellery: any = [];
  id: any;

  constructor(private activatedRoute: ActivatedRoute, private mainService: MainService) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((param) => {
      this.id = param.id;
    });

    this.getJewelleryDetails();
  }

  getJewelleryDetails() {
    this.mainService
      .getJewelleryById(this.id)
      .subscribe((response: any) => {
        this.currentJewellery = response.currentJewellery;
      });
  }

  getJewelleryImage(j){
    return ("../../../assets/images/" + j.image);
  }

}
