import { IUser } from './../../shared/models/user';
import { UsersService } from './../../shared/services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users!: IUser[]
  constructor(private userService: UsersService) { }
  page= 1;
  pageSize = 3;
  
  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: any) => {
      if (data){
        this.users = data.items;
      }
    })
  }

  calculateDiff(sentOn: any){
    
    let todayDate = new Date();
    let sentOnDate = new Date(sentOn);
    sentOnDate.setDate(sentOnDate.getDate());
    let differenceInTime = todayDate.getTime() - sentOnDate.getTime();
    // To calculate the no. of days between two dates
    let differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24)); 
    return differenceInDays;
  }

}
