let ModsToUnify = [
    "railcraft",
    "tconstruct"
]
let TConstructSmelteryParts = [
    "drain", "duct", "chute", "fuel_tank", "fuel_gauge", "table", "basin"
]
// MARK: Recipes
ServerEvents.recipes(archit => {
    GTCEuAPI.materialManager.getRegisteredMaterials().forEach(material => {
        archit.remove({ output: `${material}_pickaxe` });
        archit.remove({ output: `${material}_mining_hammer` });
        archit.remove({ output: `${material}_axe` });
        archit.remove({ output: `${material}_shovel` });
        archit.remove({ output: `${material}_spade` });

        ModsToUnify.forEach(mod => {
            archit.remove({ output: `${mod}:${material.name}_plate` });
            archit.remove({ output: `${mod}:${material.name}_ingot` });
            archit.remove({ output: `${mod}:${material.name}_nugget` });
            archit.remove({ output: `${mod}:${material.name}_block` });
            archit.remove({ output: `${mod}:${material.name}_gear` });
            archit.remove({ output: `${mod}:${material.name}_raw` });
            archit.remove({ output: `${mod}:${material.name}_ore` });
            archit.remove({ output: `${mod}:deepslate_${material.name}_ore` });
            //Forestry-Specified removal
            archit.remove({ output: `forestry:ingot_${material.name}` });
            archit.remove({ output: `forestry:resource_storage_${material.name}` });
            archit.remove({ output: `forestry:gear_${material.name}` });
        });
    });
    TConstructSmelteryParts.forEach(part => {
        archit.remove({ output: `tconstruct:scorched_${part}` });
        archit.remove({ output: `tconstruct:seared_${part}` });
    });
    archit.remove({ output: 'tconstruct:foundry_controller' });
    archit.remove({ output: 'tconstruct:smeltery_controller' });

    archit.shaped(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:architpack_greg_3_guide"}'), [
        'A  ',
        'AB ',
        'A  '
    ], {
        A: 'minecraft:paper',
        B: 'gtceu:iron_gear',
    });
});
// MARK: Tags
ServerEvents.tags('item', archit => {
    GTCEuAPI.materialManager.getRegisteredMaterials().forEach(material => {
        ModsToUnify.forEach(mod => {
            archit.removeAllTagsFrom(`${mod}:${material.name}_plate`);
            archit.removeAllTagsFrom(`${mod}:${material.name}_ingot`);
            archit.removeAllTagsFrom(`${mod}:${material.name}_nugget`);
            archit.removeAllTagsFrom(`${mod}:${material.name}_block`);
            archit.removeAllTagsFrom(`${mod}:${material.name}_gear`);
            archit.removeAllTagsFrom(`${mod}:${material.name}_raw`);
            archit.removeAllTagsFrom(`${mod}:${material.name}_ore`);
            archit.removeAllTagsFrom(`${mod}:deepslate_${material.name}_ore`);
            //Forestry-Specified removal
            archit.removeAllTagsFrom(`forestry:ingot_${material.name}`);
            archit.removeAllTagsFrom(`forestry:resource_storage_${material.name}`);
            archit.removeAllTagsFrom(`forestry:gear_${material.name}`);
        });
    });
});
