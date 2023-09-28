import Character from './character.js';

class Bowman extends Character {
  constructor(name, type) {
    super(name, type);
    this.setValue();
    
  }
}

export default Bowman;