import { Component } from '@angular/core';
import { NavController, ToastController, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { Users } from '../Class';
import { SecondPage } from '../second/second';


declare var firebase

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
FireAuthRef;
users = {} as Users ;

splash = true;
secondPage = SecondPage;




  constructor(public navCtrl: NavController,public toastCtrl:ToastController,public alertCtrl:AlertController) {
  
  }


  ionViewDidLoad(){
    setTimeout(()=>this.splash = false , 3000);
 
 }


  LogIn(user:Users){
   
firebase.auth().signInWithEmailAndPassword(user.email,user.password).then(()=>{

  const alert = this.alertCtrl.create({
    title: 'Log-In',
    subTitle: 'Succefully Logged In' + user.email,
    buttons: ['OK']
  });
  alert.present();
  console.log(user)
  
} , 

(error)=>{

 alert(error)

})


}
  
// this.navCtrl.push()
// console.log(res)
  Register(user:Users){
   firebase.auth().createUserWithEmailAndPassword(user.email,user.password).then(()=>{
    const toast = this.toastCtrl.create({
      message: 'User was added successfully',
      duration: 3000
    });
    toast.present(); 
    this.navCtrl.push(RegisterPage);
   } , 

   (error)=>{
    alert(error)

   })
     
  } 
  
  









  }