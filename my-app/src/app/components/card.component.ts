import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { LogService } from '../services/log.services';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';


@Component({
    selector: 'my-card',
    template: `
    
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{caption}}</h5>
            <p class="card-text">{{summary}}</p>
            <button type="button" class="btn btn-danger" (click)="deletePost(key)">Delete</button>
        </div>
        </div>
    `,
    providers: [ LogService ]
})
export class CardComponent implements OnInit {


    @Input('title') caption : string = ''
    @Input('summary') summary : string = ''
    @Input('key') key : number;
    @Output('postDeleted') postDeleted : EventEmitter<Array<Post>> = new EventEmitter();

    constructor(public http: Http,
        public postService: PostService,
        public logService: LogService){
       
    }

    ngOnInit() { 
        this.logService.log("Card Component initialized>>");
    }

    deletePost(key: number){
        console.log('Deleting index', key);
        let posts: Array<Post> = [

        ];
        this.postService.fetchPosts()
        .then(data => posts = data);
        
        this.postService.deletePost(key)
        .then(data => this.postDeleted.emit(posts.filter(post => post.id != key)))

    }

}