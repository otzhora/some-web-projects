class WhiteMage extends AbstractUnit
{
    constructor()
    {
        super(400, 400, 400)
        this.skillSet = WhiteMagic.concat(Summons)
    }

    calculateAttackDamage(potency)
    {
        return this.int * potency;
    }
    calculateSpellDamage(potency)
    {
        return this.int * potency
    }
    calculateSpellHealing(potency)
    {
        return this.int * potency
    }
}

class BlackMage extends AbstractUnit
{
    constructor()
    {
        super(400, 400, 400)
        this.skillSet = BlackMagic
    }

    calculateAttackDamage(potency)
    {
        return this.int * potency;
    }
    calculateSpellDamage(potency)
    {
        return this.int * potency
    }
    calculateSpellHealing(potency)
    {
        return this.int * potency
    }
}

class RedMage extends AbstractUnit
{
    constructor()
    {
        super(400, 400, 400)
        this.skillSet = RedMagic
    }

    calculateAttackDamage(potency)
    {
        return this.int * potency;
    }
    calculateSpellDamage(potency)
    {
        return this.int * potency
    }
    calculateSpellHealing(potency)
    {
        return this.int * potency
    }
}
class Monk extends AbstractUnit
{
    constructor()
    {
        super(400, 400, 400)
        this.skillSet = MeleeAttack
    }

    calculateAttackDamage(potency)
    {
        return this.str * potency;
    }
    calculateSpellDamage(potency)
    {
        return this.str * potency
    }
    calculateSpellHealing(potency)
    {
        return this.str * potency
    }
}
class Bahamut extends AbstractUnit
{
    constructor()
    {
        super(2000, 400, 400)
        this.skillSet = BahamutSet
    }

    calculateAttackDamage(potency)
    {
        return this.str * potency;
    }
    calculateSpellDamage(potency)
    {
        return this.str * potency
    }
    calculateSpellHealing(potency)
    {
        return this.str * potency
    }
}