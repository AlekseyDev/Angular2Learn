/**
 * Created by Алексей on 23.09.2016.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {Book} from "./Models/Book";

@Injectable()
export class AppService {
    constructor(private _http: Http) { }

    getBooksPromise(): Promise<Book[]> {
        return this._http.get('app/TestData/books.json')
            .toPromise()
            .then(response => response.json().data as Book[])
            .catch(this.handleError);
    }

    getBooksObservable() {
        return this._http.get('app/TestData/books.json')
            .map((response: Response) => <Book[]>response.json().data)
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
