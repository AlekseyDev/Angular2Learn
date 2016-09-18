/**
 * Created by Алексей on 18.09.2016.
 */
import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    /*template: '<h1>My First Angular 2 App</h1>'*/
    template:
`
<my-layout>Loading Layout...</my-layout>
<div style="display: inline-flex;width: 100%;">
    <my-left>Loading Left...</my-left>
    <my-main>Loading Main...</my-main>    
</div>
`

    /*
     <div style="width: 100%; height: 100px; border: 1px solid black">top layout</div>
     <div style="display: inline-flex;width: 100%;">
         <div style="width: 20%;border: 1px solid black;">left, menu</div>
         <div style="width: 80%;border: 1px solid black;">right, main window</div>
     </div>*/
})
export class AppComponent { }