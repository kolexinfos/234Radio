import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { FormBuilder,  ControlGroup, Validators, AbstractControl} from '@angular/common';
import {CustomValidators} from '../validators/CustomValidators';

import { Toast } from 'ionic-native';

import { MessageProvider } from '../../providers/message-provider/message-provider';


@Component({
    templateUrl: 'build/pages/report/report.html',
    providers: [MessageProvider]
	 
})

export class ReportPage {

    
    report: {email?: string, message?: string, phone?: string,title?: string,type?:string} = {};
    
    submit = false;
    
    constructor(private navController: NavController, private messageProvider: MessageProvider) {
       
    }
    
    onSubmit(form)
    {
        console.log("The details in the form is " + form);
        this.submit = true;
        
        this.report.type = "report";
        if(form.valid){
            
            this.messageProvider.CreateReport(this.report).subscribe(
                data => {
                    console.log(data);
                    this.report = {};
                    
                     Toast.show("Login was successful.", "short", 'bottom').subscribe(
                            toast => {
                            console.log(toast);
                          }
                    );
                },
                err => {
                    console.log(err);
                },
                () => {
                    console.log('Finally called on CreateReport');
                }
                )
        }
    }
	
   	
}