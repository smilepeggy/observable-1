import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn:"root"})
export class UserService{
// activaredEmitter= new EventEmitter<boolean>();
activaredEmitter= new Subject<boolean>();
}
