/**
 * Created by Алексей on 18.09.2016.
 */
import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Book } from "./Models/Book";

@Component({
    selector: 'my-main',
    template: `
            <div style="width: 80%;border: 1px solid black;">
                right, main window
                 <ul>
                      <li *ngFor="let i of books">
                        {{ i.Title }}
                      </li>
                  </ul>
            </div>`,
    providers: [AppService]
})
export class MainComponent {
    errorMessage: string;
    books: Book[];

    constructor(private _appService: AppService) { }

    ngOnInit() { this.getDataBooks(); }

    getDataBooks() {
        this._appService.getBooks()
            .subscribe(
                data => this.books = data,
                error => this.errorMessage = <any>error
            );
    }
}