import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class LogService {
    
    constructor(public http: Http) { }

    log(message) {
        console.log(message);
    }
}