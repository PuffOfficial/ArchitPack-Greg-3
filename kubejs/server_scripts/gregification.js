ServerEvents.recipes(archit_greg => {
//MARK: AE2
    archit_greg.remove({ output: `ae2:quartz_fiber` });
    archit_greg.remove({ output: `ae2:wireless_receiver` });
    archit_greg.remove({ output: `ae2:quartz_glass` });
    archit_greg.remove({ output: `ae2:meteorite_compass` });
    archit_greg.remove({ output: `ae2:charger` });

    archit_greg.remove({ id: `ae2:network/cables/glass_fluix` });

    archit_greg.recipes.gtceu.laser_engraver(`archit:quartz_fiber`)
        .itemInputs([`gtceu:nether_quartz_plate`, `2x gtceu:fine_borosilicate_glass_wire`])
        .itemOutputs([`2x ae2:quartz_fiber`])
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])
    archit_greg.recipes.gtceu.forming_press(`archit:fluix_glass_cable`)
        .itemInputs([`2x ae2:fluix_dust`, `2x gtceu:nichrome_single_wire`, `ae2:quartz_fiber`, `ae2:quartz_glass`])
        .itemOutputs([`4x ae2:fluix_glass_cable`])
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV])
    archit_greg.recipes.gtceu.alloy_smelter(`archit:quartz_glass`)
        .itemInputs([`4x #forge:glass`, `5x #forge:dusts/certus_quartz`])
        .itemOutputs([`4x ae2:quartz_glass`])
        .duration(300)
        .EUt(GTValues.VA[GTValues.LV])
    archit_greg.shaped(`ae2:wireless_receiver`, [
        ` D `,
        ` C `,
        `ABA`
    ], {
        A: `gtceu:stainless_steel_rod`,
        B: `gtceu:titanium_plate`,
        C: `gtceu:ev_emitter`,
        D: `ae2:fluix_pearl`
    });
    archit_greg.shaped(`ae2:meteorite_compass`, [
        ` A `,
        `ABA`,
        ` A `
    ], {
        A: `gtceu:stainless_steel_plate`,
        B: `gtceu:magnetic_neodymium_rod`
    });
    archit_greg.shaped(`ae2:charger`, [
        `ADA`,
        `B  `,
        `ECA`
    ], {
        A: `gtceu:stainless_steel_plate`,
        B: `gtceu:neodymium_plate`,
        C: `gtceu:hv_machine_hull`,
        D: `gtceu:nichrome_single_wire`,
        E: `ae2:fluix_glass_cable`
    });
//MARK: OpenComputers
    archit_greg.remove({ output: `oc2r:raw_silicon_wafer` });
    archit_greg.remove({ output: `oc2r:silicon_wafer` });
    archit_greg.remove({ output: `oc2r:transistor` });
    archit_greg.remove({ output: `oc2r:circuit_board` });

    archit_greg.replaceInput({ input: 'oc2r:circuit_board' },'oc2r:circuit_board','gtceu:plastic_printed_circuit_board')
    archit_greg.replaceInput({ input: 'oc2r:transistor' },'oc2r:transistor','gtceu:transistor')
//MARK: Functional Storage
    archit_greg.remove({ output: `functionalstorage:copper_upgrade` });
    archit_greg.remove({ output: `functionalstorage:gold_upgrade` });
    archit_greg.remove({ output: `functionalstorage:diamond_upgrade` });
    archit_greg.remove({ output: `functionalstorage:netherite_upgrade` });
    archit_greg.remove({ output: `functionalstorage:storage_controller` });
    archit_greg.remove({ output: `functionalstorage:compacting_drawer` });

    archit_greg.shaped(`functionalstorage:copper_upgrade`, [
        `CAC`,
        `BDB`,
        `CAC`
    ], {
        A: `gtceu:wrought_iron_plate`,
        B: `gtceu:copper_plate`,
        C: `gtceu:copper_screw`,
        D: `#functionalstorage:drawer`
    });
    archit_greg.shaped(`functionalstorage:gold_upgrade`, [
        `CAC`,
        `BDB`,
        `CAC`
    ], {
        A: `gtceu:steel_plate`,
        B: `gtceu:gold_plate`,
        C: `gtceu:gold_screw`,
        D: `functionalstorage:copper_upgrade`
    });
    archit_greg.shaped(`functionalstorage:diamond_upgrade`, [
        `CAC`,
        `BDB`,
        `CAC`
    ], {
        A: `gtceu:aluminium_plate`,
        B: `gtceu:diamond_plate`,
        C: `gtceu:diamond_screw`,
        D: `functionalstorage:gold_upgrade`
    });
    archit_greg.shaped(`functionalstorage:storage_controller`, [
        `AFA`,
        `BDC`,
        `AEA`
    ], {
        A: `gtceu:iron_plate`,
        B: `gtceu:lv_robot_arm`,
        C: `gtceu:lv_sensor`,
        D: `#functionalstorage:drawer`,
        E: `minecraft:hopper`,
        F: `#gtceu:circuits/mv`
    });
    archit_greg.shaped(`functionalstorage:compacting_drawer`, [
        `ABA`,
        `EDE`,
        `ACA`
    ], {
        A: `gtceu:iron_plate`,
        B: `gtceu:mv_robot_arm`,
        C: `gtceu:mv_electric_piston`,
        D: `#functionalstorage:drawer`,
        E: `gtceu:carbon_fibers`
    });
})