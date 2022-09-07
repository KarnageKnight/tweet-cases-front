import { Component, OnInit } from '@angular/core';
import { TweetService } from '../services/tweet.service';

@Component({
  selector: 'app-all-tweets',
  templateUrl: './all-tweets.component.html',
  styleUrls: ['./all-tweets.component.css']
})
export class AllTweetsComponent implements OnInit {

  allTweetData: any;
  constructor(private tweetService: TweetService) { }

  ngOnInit(): void {
    this.tweetService.getAllTweets().subscribe(resp=>{
      this.allTweetData = resp;
    });
  }

  // public postComment(commentData:any){
  //   this.tweetService.postComment(this.tweetObject, 1 ,commentData).subscribe(resp=>{
  //     console.log(resp);
  //     this.tweetService.getAllComments(this.tweetId).subscribe((resp)=>{
  //       console.log(resp);
  //       this.allCommentData = resp;
  //     });
  //   });
  // }

}
