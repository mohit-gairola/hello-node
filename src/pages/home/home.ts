import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';


import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController,private faio: FingerprintAIO ,private secureStorage: SecureStorage) {

  }

ngOnInit(){
  
 
}

fingerprint(){
  this.faio.show({
    clientId: 'Fingerprint-Demo',
    clientSecret: 'password', //Only necessary for Android
    disableBackup:true,  //Only for Android(optional)
    localizedFallbackTitle: 'Use Pin', //Only for iOS
    localizedReason: 'Please authenticate' //Only for iOS
})
.then((result: any) => console.log(result))
.catch((error: any) => console.log(error));
}

isFingerprintAvailable(){
  this.faio.isAvailable().then(
    data=> alert(data),
    error=>alert(error)

  );
}

getCredentialsFromKeyStore(){
  this.secureStorage.create('ionic_app2_store_name')
  .then((storage: SecureStorageObject) => {

    //  storage.get('key')
    //    .then(
    //      data => console.log(data),
    //      error => console.log(error)
    //  );

    //  storage.set('key', 'value')
    //    .then(
    //     data => console.log(data),

    //      error => console.log(error)
    //  );

    //  storage.remove('key')
    //  .then(
    //      data => console.log(data),
    //      error => console.log(error)
    //  );
    

     storage.get("testKey").then(data => alert(data),error =>console.log(error));

  });
}

setCredentialsInKeyStore(){
  this.secureStorage.create('ionic_app2_store_name')
  .then((storage: SecureStorageObject) => {

    //  storage.get('key')
    //    .then(
    //      data => console.log(data),
    //      error => console.log(error)
    //  );

    //  storage.set('key', 'value')
    //    .then(
    //     data => console.log(data),

    //      error => console.log(error)
    //  );

    //  storage.remove('key')
    //  .then(
    //      data => console.log(data),
    //      error => console.log(error)
    //  );
     storage.set("testKey","testValue4").then(
           data => {alert(data),
           alert("sucessfully set");},
           error => console.log(error)
       );

     

  });
}

  deleteCredentialsFromKeyStore(){
    this.secureStorage.create('ionic_app2_store_name')
    .then((storage: SecureStorageObject) => {
  
      //  storage.get('key')
      //    .then(
      //      data => console.log(data),
      //      error => console.log(error)
      //  );
  
      //  storage.set('key', 'value')
      //    .then(
      //     data => console.log(data),
          
      //      error => console.log(error)
      //  );
  
      //  storage.remove('key')
      //  .then(
      //      data => console.log(data),
      //      error => console.log(error)
      //  );
       
      storage.set("testKey",null).then(
        data => {alert(data),
        alert("sucessfully set null");},
        error => console.log(error)
    );
      
       storage.remove("testKey").then(
         data=> alert('remove' + data),
         error=>console.log(error)
    )
       
  
    });
  
}
}
