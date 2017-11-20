class AbstractUnit
{
    constructor(hp, str, int)
    {
        this.maxHP = hp
        this.hp = this.maxHP
        this.str = str
        this.int = int
    }

    calculateSpellDamage(potency)
    {
       return 100; 
    }
    calculateAttackDamage(potency)
    {
       return 100; 
    }
    calculateSpellHeal(potency)
    {
       return 100; 
    }
}