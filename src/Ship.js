function Ship(currentPort){
    this.currentPort = currentPort;
};

Ship.prototype.setSail = function() {
    this.currentPort = ''
};

Ship.prototype.dock = function(port) {
  this.currentPort = port;
};



module.exports = Ship;
