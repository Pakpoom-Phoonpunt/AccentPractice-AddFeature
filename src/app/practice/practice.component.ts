import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router";
import { DataService } from '../services/data.service'

@Component({
    selector: 'ns-practice',
    templateUrl: './practice.component.html',
    styleUrls: ["./practice.component.css"]
  })
export class Practicecomponent implements OnInit {
    
    
    constructor(private DataService: DataService , private router: Router) {
        
    }
    words : Array<any>
    ngOnInit(): void {
        this.words = this.DataService.getAllWord()
        console.log(this.words)
    }
    
    goDetail(word : string){
        this.router.navigate(["/practice", word]);
    }
    back() {
        this.router.navigate(["/homepage"]);
    }

    onTextChanged(searchValue){
        // console.log(searchValue);
        // console.log(Boolean(searchValue)); //ถ้าว่างจะให้ค่าเป็น false
        
        if(searchValue){
            var tempWords = []
            for (var word of this.DataService.getAllWord() ){
                
                if ((word.word.toLowerCase()).includes(searchValue.toLowerCase())){ // if ('b' in "ball")
                    tempWords[tempWords.length] = word
                }
            }
            this.words = tempWords
        }else{
            this.words = this.DataService.getAllWord()
        }
        // console.log("BALL".includes("BA"))
    }
}