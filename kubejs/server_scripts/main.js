let AnyHammer = `#gtceu:tools/crafting_hammers`
let AnyFile = `#gtceu:tools/crafting_files`
let AnySaw = `#gtceu:tools/crafting_saws`
let AnyWireCutter = `#gtceu:tools/crafting_wire_cutters`
let AnyScrewdriver = `#gtceu:tools/crafting_screwdrivers`
let AnyWrench = `#gtceu:tools/crafting_wrenches`
let AnyKnife = `#gtceu:tools/crafting_knives`
let AnyMallet = `#gtceu:tools/crafting_mallets`

let ModsToUnify = [
    `railcraft`,
    `tconstruct`
]
let TConstructSmelteryParts = [
    `drain`, `duct`, `chute`, `fuel_tank`, `fuel_gauge`, `table`, `basin`, `heater`, `ingot_gauge`, `faucet`, `channel`
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

    archit.remove({ output: `tconstruct:foundry_controller` });
    archit.remove({ output: `tconstruct:seared_melter` });
    archit.remove({ output: `tconstruct:smeltery_controller` });
    archit.remove({ output: `tconstruct:pattern` });

    archit.remove({ output: `railcraft:white_iron_tank_wall` });
    archit.remove({ output: `railcraft:white_iron_tank_valve` });
    archit.remove({ output: `railcraft:white_iron_tank_gauge` });
    archit.remove({ output: `railcraft:white_steel_tank_wall` });
    archit.remove({ output: `railcraft:white_steel_tank_valve` });
    archit.remove({ output: `railcraft:white_steel_tank_gauge` });
    archit.remove({ output: `railcraft:steam_turbine` });
    archit.remove({ output: `railcraft:turbine_rotor` });
    archit.remove({ output: `railcraft:turbine_blade` });
    archit.remove({ output: `railcraft:turbine_disk` });

    archit.remove({ id: `industrialrenewal:ingot_steel_from_smelting_sponge_iron`})

    //Guide Book Recipe
    archit.shaped(Item.of(`patchouli:guide_book`, `{'patchouli:book':'patchouli:architpack_greg_3_guide'}`), [
        `A  `,
        `AB `,
        `A  `
    ], {
        A: `minecraft:paper`,
        B: `gtceu:iron_gear`
    });

    //TConstruct Mini Smeltery Parts
    archit.shaped(`tconstruct:seared_heater`, [
        ` D `,
        `ABA`,
        `ACA`
    ], {
        A: `tconstruct:seared_brick`,
        B: `minecraft:furnace`,
        C: `tconstruct:seared_bricks`,
        D: AnyHammer
    }).damageIngredient([AnyHammer]);
    archit.shaped(`tconstruct:seared_melter`, [
        `AEA`,
        `DFD`,
        `BCB`
    ], {
        A: `tconstruct:seared_brick`,
        B: `tconstruct:seared_bricks`,
        C: `gtceu:double_copper_plate`,
        D: `gtceu:copper_screw`,
        E: AnyHammer,
        F: AnyScrewdriver
    }).damageIngredient([AnyHammer, AnyScrewdriver]);
    archit.shaped(`tconstruct:seared_faucet`, [
        `C D`,
        `A A`,
        `BAB`
    ], {
        A: `tconstruct:seared_brick`,
        B: `gtceu:copper_screw`,
        C: AnyHammer,
        D: AnyScrewdriver
    }).damageIngredient([AnyHammer, AnyScrewdriver]);
    archit.shaped(`tconstruct:seared_table`, [
        `BAB`,
        `ACA`,
        `ADA`
    ], {
        A: `tconstruct:seared_brick`,
        B: `gtceu:copper_screw`,
        C: AnyHammer,
        D: AnyScrewdriver
    }).damageIngredient([AnyHammer, AnyScrewdriver]);
    archit.shaped(`tconstruct:seared_basin`, [
        `ADA`,
        `ACA`,
        `BAB`
    ], {
        A: `tconstruct:seared_brick`,
        B: `gtceu:copper_screw`,
        C: AnyHammer,
        D: AnyScrewdriver
    }).damageIngredient([AnyHammer, AnyScrewdriver]);
    archit.shaped(`3x tconstruct:seared_channel`, [
        `C D`,
        `ABA`,
        `AAA`
    ], {
        A: `tconstruct:seared_brick`,
        B: `gtceu:copper_screw`,
        C: AnyHammer,
        D: AnyScrewdriver
    }).damageIngredient([AnyHammer, AnyScrewdriver]);
    //TConstruct Large Smeltery Parts
    archit.shaped(`tconstruct:smeltery_controller`, [
        `BCB`,
        `EDF`,
        `BAB`
    ], {
        A: `tconstruct:seared_brick`,
        B: `gtceu:cupronickel_plate`,
        C: `gtceu:glass_plate`,
        D: `tconstruct:seared_bricks`,
        E: AnyHammer,
        F: AnyWrench
    }).damageIngredient([AnyHammer, AnyWrench]);    
    archit.shaped(`tconstruct:seared_drain`, [
        `ADA`,
        `BCB`,
        `AEA`
    ], {
        A: `tconstruct:seared_brick`,
        B: `gtceu:cupronickel_plate`,
        C: `gtceu:cupronickel_spring`,
        D: AnyHammer,
        E: AnyWrench
    }).damageIngredient([AnyHammer, AnyWrench]);   
    archit.shaped(`tconstruct:seared_duct`, [
        `ADA`,
        `BCB`,
        `AEA`
    ], {
        A: `tconstruct:seared_brick`,
        B: `gtceu:gold_plate`,
        C: `gtceu:gold_spring`,
        D: AnyHammer,
        E: AnyWrench
    }).damageIngredient([AnyHammer, AnyWrench]);  
    archit.shaped(`tconstruct:seared_chute`, [
        `ADA`,
        `BCB`,
        `AEA`
    ], {
        A: `tconstruct:seared_brick`,
        B: `gtceu:copper_plate`,
        C: `gtceu:copper_spring`,
        D: AnyHammer,
        E: AnyWrench
    }).damageIngredient([AnyHammer, AnyWrench]); 
    //TConstruct Tanks
    archit.shaped(`tconstruct:seared_fuel_tank`, [
        `ABA`,
        `BCB`,
        `ABA`
    ], {
        A: `tconstruct:seared_brick`,
        B: `gtceu:glass_plate`,
        C: AnyHammer
    }).damageIngredient([AnyHammer]); 
    archit.shaped(`tconstruct:seared_fuel_gauge`, [
        `BAB`,
        `BCB`,
        `BAB`
    ], {
        A: `tconstruct:seared_brick`,
        B: `gtceu:glass_plate`,
        C: AnyHammer
    }).damageIngredient([AnyHammer]); 
    //TConstruct Patterns
    archit.shapeless(`tconstruct:pattern`, [
        `2x minecraft:stick`,
        `2x #minecraft:planks`,
        AnyKnife
    ]).damageIngredient([AnyKnife]);
    archit.shapeless(`3x tconstruct:pattern`, [
        `2x minecraft:stick`,
        `2x minecraft:paper`,
        AnyKnife
    ]).damageIngredient([AnyKnife]);
    //Railcraft Iron Tank
    archit.shaped(`railcraft:white_iron_tank_valve`, [
        `ACA`,
        `EBD`,
        `AFA`
    ], {
        A: `gtceu:iron_plate`,
        B: `gtceu:iron_round`,
        C: `gtceu:wrought_iron_plate`,
        D: `gtceu:wrought_iron_screw`,
        E: `gtceu:wrought_iron_ring`,
        F: AnyHammer
    }).damageIngredient([AnyHammer]);
    archit.shaped(`2x railcraft:white_iron_tank_wall`, [
        `AAA`,
        `ABA`,
        `AAA`
    ], {
        A: `gtceu:iron_plate`,
        B: AnyHammer
    }).damageIngredient([AnyHammer]);
    archit.shaped(`3x railcraft:white_iron_tank_gauge`, [
        `CBD`,
        `ABA`,
        `CBE`
    ], {
        A: `gtceu:iron_plate`,
        B: `#forge:glass`,
        C: `gtceu:wrought_iron_screw`,
        D: AnyHammer,
        E: AnyScrewdriver
    }).damageIngredient([AnyHammer, AnyScrewdriver]);
    //Railcraft Steel Tank
    archit.shaped(`railcraft:white_steel_tank_valve`, [
        `ACA`,
        `EBD`,
        `AFA`
    ], {
        A: `gtceu:wrought_iron_plate`,
        B: `gtceu:iron_round`,
        C: `gtceu:steel_plate`,
        D: `gtceu:steel_screw`,
        E: `gtceu:steel_ring`,
        F: AnyHammer
    }).damageIngredient([AnyHammer]);
    archit.shaped(`2x railcraft:white_steel_tank_wall`, [
        `AAA`,
        `ABA`,
        `AAA`
    ], {
        A: `gtceu:wrought_iron_plate`,
        B: AnyHammer
    }).damageIngredient([AnyHammer]);
    archit.shaped(`3x railcraft:white_steel_tank_gauge`, [
        `CBD`,
        `ABA`,
        `CBE`
    ], {
        A: `gtceu:wrought_iron_plate`,
        B: `#forge:glass`,
        C: `gtceu:steel_screw`,
        D: AnyHammer,
        E: AnyScrewdriver
    }).damageIngredient([AnyHammer, AnyScrewdriver]);
});

// MARK: Tags
ServerEvents.tags(`item`, archit => {
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
