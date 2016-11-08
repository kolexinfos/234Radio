import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { FormBuilder,  ControlGroup, Validators, AbstractControl} from '@angular/common';
import {CustomValidators} from '../validators/CustomValidators';


@Component({
    templateUrl: 'build/pages/report/report.html',
	 
})

export class ReportPage {

   
    
    report: {email?: string, message?: string, phone?: string,title?: string} = {};

    constructor(private navController: NavController, private fb: FormBuilder) {
       
    }
	
   	
}