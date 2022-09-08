import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TweetService } from '../services/tweet.service';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {

  tweetId: any;
  tweetObject: any;
  loginData: any;
  allCommentData: any;

  constructor(private router: Router,
    private tweetService: TweetService) { 
    const data = router.getCurrentNavigation()?.extras.state?.['data'];
    const loginData = router.getCurrentNavigation()?.extras.state?.['loginData'];
    this.tweetObject = data;
    this.loginData = loginData;
    this.tweetId = data.tweetId;
  }

  ngOnInit(): void {
    //If no tweetId found in cases of page reloads, then goes back to login page
    if(this.tweetId==null){
      this.router.navigate(['login']);
    }
    //Calls /getAllComments endpoint for list of comments for the tweet
    this.tweetService.getAllComments(this.tweetId).subscribe((resp)=>{
      console.log(resp);
      this.allCommentData = resp;
    });
  }

  //Calls /postComment endpoint and sends the commentData Load for POST method
  public postComment(commentData:any){
    this.tweetService.postComment(this.tweetObject, this.tweetObject.userId ,commentData).subscribe(resp=>{
      console.log(resp);
      this.tweetService.getAllComments(this.tweetId).subscribe((resp)=>{
        console.log(resp);
        this.allCommentData = resp;
      });
    });
  }

  //Goes back to tweets page
  public backToTweet(){
    this.router.navigate(['allUserTweets'], {
      state:{
        data: this.loginData
      }
    });
  }

}
