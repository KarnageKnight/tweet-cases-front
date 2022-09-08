import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TweetService } from '../services/tweet.service';

@Component({
  selector: 'app-all-user-tweets',
  templateUrl: './all-user-tweets.component.html',
  styleUrls: ['./all-user-tweets.component.css'],
  providers:[TweetService]
})
export class AllUserTweetsComponent implements OnInit {
  loginData:{userId:number, userName:string};

  constructor(private tweetService:TweetService,
    private router: Router) { 
      const data = router.getCurrentNavigation()?.extras.state?.['data'];
      this.loginData = data;
    }

  allTweetData: any;

  ngOnInit(): void {
    //If no loginData found in cases of page reloads, then goes back to login page
    if(this.loginData==null){
        this.router.navigate(['login']);
    }

    //Calls /getAllUserTweets endpoint for list of tweets for the user
    this.tweetService.getAllUserTweets(this.loginData.userId).subscribe((resp)=>{
      console.log(resp);
      this.allTweetData = resp;
    });
  }

  //Navigates to comments page and sends the loginData an tweet Object to the page for further processing
  public getComments(tweetObject: any){
    console.log(tweetObject);
    this.router.navigate(['allComments'], {
      state:{
        data: tweetObject,
        loginData: this.loginData
      }
    });
  }

  public postTweet(tweetData:any){
    this.tweetService.postTweet(tweetData, this.loginData.userId).subscribe(resp=>{
      console.log(resp);
      this.tweetService.getAllUserTweets(this.loginData.userId).subscribe((resp)=>{
        console.log(resp);
        this.allTweetData = resp;
      });
    });
  }

  //Logout button to go back to login page
  public backToLogin(){
    this.router.navigate(['login']);
  }

}
