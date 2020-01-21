/* Your code goes here */
function Fighter(parameters) {
    let name = parameters.name;
    let damage = parameters.damage;
    let hp = parameters.hp;
    let strength = parameters.strength;
    let agility = parameters.agility;
    let startHP = parameters.hp;
    let win = 0;
    let loss = 0;

    this.getName = function() {
        return name
    }

    this.getDamage = function() {
        return damage
    }

    this.getHealth = function() {
        return hp
    }

    this.getStrength = function() {
        return strength
    }

    this.getAgility = function() {
        return agility
    }

    this.attack = function(defenderFighter) {
        const maxChance = 100;
        let random = Math.floor(Math.random() * maxChance);
        let successProb = maxChance - defenderFighter.getAgility();

        if (random < successProb) {
            defenderFighter.dealDamage(this.getDamage());
            console.log(`${this.getName()} make 20 damage to ${defenderFighter.getName()}`)
        } else {
            console.log(`${this.getName()} attack missed`)
        }
    }

    this.logCombatHistory = function() {
        return `Name: ${name}, Wins: ${win}, Losses: ${loss}`
    }

    this.heal = function(health) {
        if (hp + health > startHP) {
            hp = startHP
        } else {
            hp += health
        }
    }

    this.dealDamage = function(makeDamage) {
        if (hp - makeDamage >= 0) {
            hp = hp - makeDamage
        } else {
            hp = 0
        }
    }

    this.addWin = function() {
        win += 1;
    }

    this.addLoss = function() {
        loss += 1;
    }

}

function battle(fighter1, fighter2) {
    if (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
        for (;;) {
            fighter1.attack(fighter2);
            if (fighter2.getHealth() <= 0) {
                fighter2.addLoss();
                fighter1.addWin();
                console.log(`${fighter1.getName()} has won!`);
                return;
            }
            fighter1.attack(fighter2);
            if (fighter1.getHealth() <= 0) {
                fighter1.addLoss();
                fighter2.addWin();
                console.log(`${fighter2.getName()} has won!`);
                return;
            }
        }
    } else if (fighter1.getHealth() <= 0) {
        console.log(`${fighter1.getName()} is dead and can’t fight.`)
    } else if (fighter2.getHealth() <= 0) {
        console.log(`${fighter2.getName()} is dead and can’t fight.`)
    }
}