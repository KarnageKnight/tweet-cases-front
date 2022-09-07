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
    this.tweetService.getAllComments(this.tweetId).subscribe((resp)=>{
      console.log(resp);
      this.allCommentData = resp;
    });
  }

  public postComment(commentData:any){
    this.tweetService.postComment(this.tweetObject, this.tweetObject.userId ,commentData).subscribe(resp=>{
      console.log(resp);
      this.tweetService.getAllComments(this.tweetId).subscribe((resp)=>{
        console.log(resp);
        this.allCommentData = resp;
      });
    });
  }

  public backToTweet(){
    this.router.navigate(['allUserTweets'], {
      state:{
        data: this.loginData
      }
    });
  }

}
