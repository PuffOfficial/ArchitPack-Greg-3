let Tools = [`pickaxe`, `axe`, `shovel`, `hoe`, `sword`]
ItemEvents.modification(mod_greg => {
    Tools.forEach(tool => {
        mod_greg.modify(`minecraft:wooden_${tool}`, item => {
            item.maxDamage = 1
        });
        mod_greg.modify(`minecraft:stone_${tool}`, item => {
            item.maxDamage = 1
        });
        mod_greg.modify(`minecraft:golden_${tool}`, item => {
            item.maxDamage = 1
        });
        mod_greg.modify(`minecraft:iron_${tool}`, item => {
            item.maxDamage = 1
        });
        mod_greg.modify(`minecraft:diamond_${tool}`, item => {
            item.maxDamage = 1
        });
        mod_greg.modify(`minecraft:netherite_${tool}`, item => {
            item.maxDamage = 1
        });
    });
});
