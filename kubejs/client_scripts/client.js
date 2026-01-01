let ModsToUnify = [
    "railcraft",
    "tconstruct"
]
JEIEvents.hideItems(archit => {
    GTCEuAPI.materialManager.getRegisteredMaterials().forEach(material => {
        ModsToUnify.forEach(mod => {
            archit.hide(`${mod}:${material.name}_plate`);
            archit.hide(`${mod}:${material.name}_ingot`);
            archit.hide(`${mod}:${material.name}_nugget`);
            archit.hide(`${mod}:${material.name}_block`);
            archit.hide(`${mod}:${material.name}_gear`);

            archit.hide(`${mod}:${material.name}_raw`);
            archit.hide(`${mod}:${material.name}_ore`);
            archit.hide(`${mod}:deepslate_${material.name}_ore`);
            //Forestry-Specified removal
            archit.hide(`forestry:ingot_${material.name}`);
            archit.hide(`forestry:resource_storage_${material.name}`);
            archit.hide(`forestry:gear_${material.name}`);
        });
    });
});