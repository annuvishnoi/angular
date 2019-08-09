import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Post } from '../models/post';

@Injectable()
export class PostService {
    
    constructor(public http: Http) { }

    baseUrl: string = 'http://jsonplaceholder.typicode.com/posts/'

    addPost(title: string, body: string): Promise<any>{
        return this.http.post( this.baseUrl, {
          title: title,
          body: body,
          userId: 1
        })
        .toPromise()
        .then(res=>res.json())   
      }
      updatePost(selectedPost: Post): Promise<any>{
        return this.http.put( this.baseUrl + selectedPost.id, {
          id : selectedPost.id,  
          title: selectedPost.title,
          body: selectedPost.body,
          userId: 1
        })
        .toPromise()
        .then(res=>res.json())   
      }

    fetchPosts(): Promise<any>{
       return this.http.get(this.baseUrl)
        .toPromise()
        .then(res=>res.json())
        
    }
    fetchPostsById(key: number): Promise<any>{
        return this.http.get(this.baseUrl + key)
         .toPromise()
         .then(res=>res.json())
         
     }
    deletePost(key: number): Promise<any>{

        return this.http.delete(this.baseUrl + key)
        .toPromise()
        .then(res=>res.json())
        
    }

}