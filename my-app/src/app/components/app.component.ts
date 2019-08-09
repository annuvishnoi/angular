import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fanTastic weather here in Delhi today!!';

  posts: Array<Post> = [

  ];
  selectedPost: Post;
  selectedKey: any;
  constructor(public http: Http, public postService: PostService) {

  }

  handlePostDeletion(posts: Array<Post>) {
    console.log('In the parent, ', posts);
    this.selectedPost = { "userId": 1, "id": 0, "title": "", "body": "" };
    this.selectedKey = null;
    this.posts = posts;
  }

 

  addPost(title: string, body: string) {
    this.postService.addPost(title, body)
      .then(data => this.posts.push(data))
  }

  ngOnInit() {
    this.selectedPost = { "userId": 1, "id": 0, "title": "", "body": "" };
   
    this.postService.fetchPosts()
      .then(data => this.posts = data)
  }
 
  onSelect(key: any): void {
    if (this.selectedKey == key) {
      this.selectedKey = null;
      this.selectedPost = { "userId": 1, "id": 0, "title": "", "body": "" };

    } else {
      this.selectedKey = key;
      console.log(key);


      this.postService.fetchPostsById(key)
        .then(data => this.selectedPost = data);
      // this.selectedPost = this.posts.filter(post => post.id == key)[0];
    }
  }
  updatePost(selectedPost) {
    this.postService.updatePost(selectedPost).then(
      data => {
        console.log(data);
        this.posts.forEach(post => {
          if (post.id == selectedPost.id) {
            post.title = selectedPost.title;
            post.body = selectedPost.body;
          }
        });
      });
    this.selectedPost = { "userId": 1, "id": 0, "title": "", "body": "" };
    this.selectedKey = null;
  }

}
