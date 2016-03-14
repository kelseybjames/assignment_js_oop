var model = {
  asteroidCollection: [],
  boardX: 800,
  boardY: 600,
  ship: new Ship(400, 300, 0, 0),

  generateAsteroids: function(n) {
    for(i=0; i < n; i++) {
      var x = Math.floor(Math.random() * this.boardX);
      var y = Math.floor(Math.random() * this.boardY);
      var newAsteroid = new Asteroid(x, y, 1, 1, 8);
      this.asteroidCollection.push(newAsteroid);
    };
  },

  tic: function() {
    this.asteroidCollection.forEach(function(asteroid){
      asteroid.tic();
    });
    model.ship.tic();
  },

  accelerate: function() {
    this.ship.accelerate();
  },

  turnRight: function() {
    this.ship.turnRight();
  },

  turnLeft: function() {
    this.ship.turnLeft();
  }

};
