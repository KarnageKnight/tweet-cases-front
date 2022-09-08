import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TweetService } from '../services/tweet.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private tweetService: TweetService,
    private router: Router) {}

  ngOnInit(): void {
    
  }

  //clicking on submit calls /checkUserName endpoint
  public onClickSubmit(userName: any){
    console.log(userName);
    this.tweetService.loginUser(userName).subscribe(resp=>{
      let userData:{userId:number, userName:string} = {"userId":Number(resp),"userName":userName};
      this.router.navigate(['allUserTweets'], {
        state:{
          data: userData
        }
      });
    });
  }

}
