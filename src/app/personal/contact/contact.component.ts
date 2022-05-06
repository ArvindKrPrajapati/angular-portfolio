import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  required:boolean=false
  sending:string=""
  isDisabled:boolean=false
  constructor(private _http:HttpClient) { }

  ngOnInit(): void {
  }
  sendMail(data:any){
    this.isDisabled=true
    this.sending="is sending..."
    const {name ,email,text}=data.value; 
    if(name && email && text){
      this.required=false
      this._http.post("https://api-shorts.herokuapp.com/send-mail",{name,email,text})
      .subscribe((res:any)=>{
        this.isDisabled=false
        if(res.success){
          this.sending="was sent successfully"
          data.reset()
        }else{
          this.sending="was not sent , some error occurred."
        }
      },(err:any)=>{
        this.isDisabled=false
        this.sending="was not sent , some error occurred ."
      })
    }else{
      this.required=true
      this.sending=""
      this.isDisabled=false
    }  
  }
}
