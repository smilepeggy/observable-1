import { Component, OnInit, OnDestroy } from "@angular/core";
import { UserService } from "./user.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false;
  private activatedSub: Subscription;
  constructor(private userService: UserService) {}

  ngOnInit() {
    console.log(this.userActivated);
    this.activatedSub = this.userService.activaredEmitter.subscribe(
      (didActivate) => {
        this.userActivated = didActivate;
        console.log(this.userActivated);
      }
    );
  }
  ngOnDestroy() {
    this.activatedSub.unsubscribe();
  }
}
