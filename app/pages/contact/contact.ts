import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { Toast } from 'ionic-native';

import { MessageProvider } from '../../providers/message-provider/message-provider';

/*
  Generated class for the ContactPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/contact/contact.html',
  providers: [MessageProvider]
})
export class ContactPage {

  report: {email?: string, message?: string, phone?: string,title?: string,type?:string} = {};
    
    submit = false;
    
    constructor(private navController: NavController, 
    private messageProvider: MessageProvider,
    private loadingCtrl: LoadingController)
    {
       
    }
    
    onSubmit(form)
    {
        console.log("The details in the form is " + form);
        this.submit = true;
        
        this.report.type = "message";
        if(form.valid){
            
            let loadingPopup = this.loadingCtrl.create({
                  content: 'Loading data...'
            });
            
            loadingPopup.present();
            
            this.messageProvider.CreateReport(this.report).subscribe(
                data => {
                    console.log(data);
                    this.report = {};
                    
                    loadingPopup.dismiss();
                     Toast.show("You report was submitted successfully.", "short", 'bottom').subscribe(
                            toast => {
                            console.log(toast);
                          }
                    );
                },
                err => {
                    loadingPopup.dismiss();
                    
                    console.log(err);
                    
                     Toast.show("An Error occurred please try again later", "short", 'bottom').subscribe(
                            toast => {
                            console.log(toast);
                          }
                    );
                },
                () => {
                    console.log('Finally called on CreateReport');
                    loadingPopup.dismiss();
                }
                )
        }
    }

}
