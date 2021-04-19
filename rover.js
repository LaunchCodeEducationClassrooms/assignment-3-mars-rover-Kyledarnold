class Rover {
  constructor(position, generatorWatts=110){
    this.position = position;
    this.mode = 'NORMAL';
    this.generatorWatts = generatorWatts;
    
  }

  receiveMessage(message){
    let messageResults = {'name': message.name}
    if (message.commands){
      messageResults["results"] = message.commands;
    }
    return messageResults;
  }
   // Write code here!
}

module.exports = Rover;