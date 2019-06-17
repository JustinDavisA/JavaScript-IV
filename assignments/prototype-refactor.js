// function GameObject(objAtt) {
//     this.createdAt = objAtt.createdAt;
//     this.dimension = objAtt.dimension;
//   }
  
// GameObject.prototype.destroy = function() {
// return (`${this.name} was removed from the game.`);
// }

class GameObject {
    constructor(objAtts) {
      this.createdAt = objAtts.createdAt;
      this.dimensions = objAtts.dimensions;
    }
    destroy() {
        return (`${this.name} was removed from the game.`);
    }
  }

// function CharacterStats(charAtt) {
//     GameObject.call(this, charAtt);
//     this.healthPoints = charAtt.healthPoints;
//     this.name = charAtt.name;
// }

// CharacterStats.prototype = Object.create(GameObject.prototype);

// CharacterStats.prototype.takeDamage = function() {
//      return (`${this.name} took damage`);
// }

class CharacterStats extends GameObject {
    constructor(charAtts) {
        super(charAtts);
        this.createdAt = charAtts.createdAt;
        this.dimensions = charAtts.dimensions;
    }
    takeDamage() {
        return (`${this.name} took damage`);
    }
  }

// function Humanoid(humanoidAtt) {
//     CharacterStats.call(this, humanoidAtt);
//     this.team = humanoidAtt.team;
//     this.weapons = humanoidAtt.weapons;
//     this.language = humanoidAtt.language;
// }

// Humanoid.prototype = Object.create(CharacterStats.prototype);

// Humanoid.prototype.greet = function() {
//     return (`${this.name} offers a greeting in ${this.language}`);
// }

class Humanoid extends CharacterStats {
    constructor(humanoidAtts) {
        super(humanoidAtts);
        this.team = humanoidAtts.team;
        this.weapons = humanoidAtts.weapons;
        this.language = humanoidAtts.language;
    }
    greet() {
        return (`${this.name} offers a greeting in ${this.language}`);
    }
  }

 
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  