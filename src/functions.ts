import { SayHelloProps } from "./types"

export function sayHello({firstName, lastName, age}:
    SayHelloProps
){
   console.log("hello")
   console.log(`your name is ${firstName}`)

   if(lastName){
       console.log(`your last name is ${lastName}`)
   }
   if(age){
       console.log(`your age is ${age}`)
   }
}