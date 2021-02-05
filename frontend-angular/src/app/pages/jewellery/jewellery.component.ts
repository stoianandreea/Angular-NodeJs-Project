import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-jewellery',
  templateUrl: './jewellery.component.html',
  styleUrls: ['./jewellery.component.css'],
})

export class JewelleryComponent implements OnInit {
  jewelleries: any = [];

  constructor(private mainService: MainService, private router: Router) {}

  ngOnInit() {
    this.getAllJewellery();
  }

  getAllJewellery() {
    this.mainService.getAllJewellery().subscribe((res: any) => {
      this.jewelleries = res.allJewellery;
    });
  }

  getJewelleryImage(j){
    return ("../../../assets/images/" + j.image);
  }

  goToDetails(id) {
    this.router.navigate(["/jewellerydetails/"+ id]);
  }

}
