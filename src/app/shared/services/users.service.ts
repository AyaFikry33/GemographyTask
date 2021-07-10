import { IUser } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _users!: Array<IUser>;
  
  get users(){return this._users}
  
  set users(users: IUser[]){this._users = users}

  constructor(private httpService: HttpClient) { }

  getUsers(){
    return this.httpService.get('https://api.github.com/search/repositories?q=created:%3E2017-10-22&sort=stars&order=desc')
  }
}
