   export const params = {
    Bowman: {
      attack: 25,
      defense: 25,
    },
    Swordsman: {
      attack: 40,
      defense: 10,
    },
    Magician: {
      attack: 10,
      defense: 40,
    },
    Undead: {
      attack: 25,
      defense: 25,
    },
    Zombie: {
      attack: 40,
      defense: 10,
    },
    Daemon: {
      attack: 10,
      defense: 40,
    },
  };
  
  export default class Character {
    constructor(name, type) {
      this.name = this.nameIdentity(name);
      this.type = this.typeIdentity(type);
    }
  
    setValue() {
      this.health = 100;
      this.level = 1;
      this.attack = params[this.type].attack;
      this.defence = params[this.type].defense;
    }
  
    nameIdentity(name) {
      this.level = 1;
  
      if (typeof name !== 'string') {
        throw new Error('the name must be of the string type!');
      }
  
      if (name.length < 2) {
        throw new Error('the name must not be shorter than 2 characters!');
      }
  
      if (name.length > 10) {
        throw new Error('the name must not be longer than 10 characters!');
      }
  
      return name;
    }
  
    typeIdentity(type) {
      this.level = 1;
  
      if (type in params) {
        return type;
      }
  
      throw new Error('the type must be from Bowman, Swordsman, Wizard, Daemon, Undead, Zombie');
    }
  }