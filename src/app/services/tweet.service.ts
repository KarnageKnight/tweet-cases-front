import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl='http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor(private http: HttpClient) { }

  getAllTweets(){
    return this.http.get(baseUrl+'/getAllTweets');
  }

  getAllUserTweets(userId: any){
    return this.http.get(baseUrl+'/getAllUserTweets?userId='+userId);
  }

  getAllComments(tweetId: any){
    return this.http.get(baseUrl+'/getCommentsByTweet?tweetId='+tweetId);
  }

  postTweet(tweetData: any, userId:any){
    let data:{tweetData: string, userId: number } = {"tweetData":tweetData,"userId":userId};
    return this.http.post(baseUrl+'/postTweet', data);
  }

  postComment(tweetObject: any, userId:any, commentData:any){
    let data:{tweet: Object, userId: number, commentData:string } = {"tweet":tweetObject,"userId":userId, "commentData":commentData};
    return this.http.post(baseUrl+'/postComment', data);
  }

  loginUser(userName: string){
    return this.http.get(baseUrl+'/checkUserName?userName='+userName);
  }
}
