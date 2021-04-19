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
      for (var c in message.commands){
        if (message.commands[c].commandType = "STATUS_CHECK"){
          messageResults['roverStatus'] = this.mode;
        }
      }
    }

    return messageResults;
  }
   // Write code here!
}

module.exports = Rover;