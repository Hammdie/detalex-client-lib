# Login Service

Clientside processing of sso token handling.  
Use service http://usr.detalex.de/ to process user authorisation for you services. 


## install
```
npm i @diemtarh/detalex-client-lib
```


Use **IUser** interface to cust you payload data.
```
interface IUser {
  admin: boolean;
  firstName: string;
  lastName: string;
  eMail: string;
  id: string;
}
```

## Test it
```
npm test
```
Explore '**src/app.spec.ts**' for more understanding.  

