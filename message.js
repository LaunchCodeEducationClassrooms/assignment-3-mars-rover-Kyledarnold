class Message {
  constructor(name, commands){
      this.name = name;
      this.commands = commands
     if (!name) {
       throw Error("Message name required.");
     }
     
   }
 
 }
 
  
   // Write code here!


module.exports = Message;