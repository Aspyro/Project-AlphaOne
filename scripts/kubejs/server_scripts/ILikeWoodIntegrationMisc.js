console.info('Integrates I Like Wood')

onEvent('recipes', event => {

    var woodsList = ['oak', 'birch', 'spruce', 'jungle', 'dark_oak', 'acacia', 'crimson', 'warped']
    var colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray',
                  'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black']
    
    woodsList.forEach( element => {

        // Remove Vanilla Fences recipes
        event.remove({output: 'minecraft:' + element + '_fence'})

        // Add 2 new Vanilla Fences recipes
        event.shaped(Item.of('minecraft:' + element + '_fence', 3), [
            'PSP',
            'PSP'
        ], {
            P: 'minecraft:' + element + '_planks',
            S: 'ilikewood:' + element + '_stick'
        })
        event.shaped(Item.of('minecraft:' + element + '_fence', 3), [
            'PSP',
            'PSP'
        ], {
            P: 'ilikewood:' + element + '_panels',
            S: 'ilikewood:' + element + '_stick'
        })

        // Remove Vanilla Fence Gates recipes
        event.remove({output: 'minecraft:' + element + '_fence_gate'})

        // Add 2 new Vanilla Fence Gates recipes
        event.shaped(Item.of('minecraft:' + element + '_fence_gate', 1), [
            'SPS',
            'SPS'
        ], {
            P: 'minecraft:' + element + '_planks',
            S: 'ilikewood:' + element + '_stick'
        })
        event.shaped(Item.of('minecraft:' + element + '_fence_gate', 1), [
            'SPS',
            'SPS'
        ], {
            P: 'ilikewood:' + element + '_panels',
            S: 'ilikewood:' + element + '_stick'
        })

        // Remove Vanilla Signs recipes
        event.remove({output: 'minecraft:' + element + '_sign'})

        // Add 2 new Vanilla Sign recipes
        event.shaped(Item.of('minecraft:' + element + '_sign', 3), [
            'PPP',
            'PPP',
            ' S '
        ], {
            P: 'minecraft:' + element + '_planks',
            S: 'ilikewood:' + element + '_stick'
        })
        event.shaped(Item.of('minecraft:' + element + '_sign', 3), [
            'PPP',
            'PPP',
            ' S '
        ], {
            P: 'ilikewood:' + element + '_panels',
            S: 'ilikewood:' + element + '_stick'
        })
        
        // Sticks Recipes
        event.shaped(Item.of('ilikewood:' + element + '_stick', 4), [
            'P',
            'P',
        ], {
            P: 'minecraft:' + element + '_planks'
        })
        
    })
    
    // Vanilla Miscellaneous removed
    event.remove({output: 'minecraft:ladder'})
    event.remove({output: 'minecraft:item_frame'})
    event.remove({output: 'minecraft:bow'})
    event.remove({output: 'minecraft:crossbow'})
    event.remove({output: 'minecraft:stick'})
    
    // Absent By Design fences balanced
    event.remove({output: 'absentbydesign:fence_log_acacia'})
    event.shaped(Item.of('absentbydesign:fence_log_acacia', 6),[
        'LSL',
        'LSL'
    ], {
        L: 'minecraft:acacia_log',
        S: 'ilikewood:acacia_stick'
    })
    
    event.remove({output: 'absentbydesign:fence_log_birch'})
    event.shaped(Item.of('absentbydesign:fence_log_birch', 6),[
        'LSL',
        'LSL'
    ], {
        L: 'minecraft:birch_log',
        S: 'ilikewood:birch_stick'
    })
    
    event.remove({output: 'absentbydesign:fence_log_darkoak'})
    event.shaped(Item.of('absentbydesign:fence_log_darkoak', 6),[
        'LSL',
        'LSL'
    ], {
        L: 'minecraft:dark_oak_log',
        S: 'ilikewood:dark_oak_stick'
    })
    
    event.remove({output: 'absentbydesign:fence_crimson'})
    event.shaped(Item.of('absentbydesign:fence_crimson', 6),[
        'LSL',
        'LSL'
    ], {
        L: 'minecraft:crimson_stem',
        S: 'ilikewood:crimson_stick'
    })
    
    event.remove({output: 'absentbydesign:fence_log_jungle'})
    event.shaped(Item.of('absentbydesign:fence_log_jungle', 6),[
        'LSL',
        'LSL'
    ], {
        L: 'minecraft:jungle_log',
        S: 'ilikewood:jungle_stick'
    })
    
    event.remove({output: 'absentbydesign:fence_log_oak'})
    event.shaped(Item.of('absentbydesign:fence_log_oak', 6),[
        'LSL',
        'LSL'
    ], {
        L: 'minecraft:oak_log',
        S: 'ilikewood:oak_stick'
    })
    
    event.remove({output: 'absentbydesign:fence_log_spruce'})
    event.shaped(Item.of('absentbydesign:fence_log_spruce', 6),[
        'LSL',
        'LSL'
    ], {
        L: 'minecraft:spruce_log',
        S: 'ilikewood:spruce_stick'
    })
    
    event.remove({output: 'absentbydesign:fence_warped'})
    event.shaped(Item.of('absentbydesign:fence_warped', 6),[
        'LSL',
        'LSL'
    ], {
        L: 'minecraft:warped_stem',
        S: 'ilikewood:warped_stick'
    })
    
    // Infernal Expansion
    event.remove({output: 'infernalexp:torch_glow'})
    event.shaped(Item.of('infernalexp:torch_glow', 4), [
        'G',
        'S',
    ], {
        G: 'infernalexp:glowcoal',
        S: '#ilikewood:sticks'
    })
                 
    event.remove({output: 'infernalexp:campfire_glow'})
    event.shaped(Item.of('infernalexp:campfire_glow', 1), [
        ' S ',
        'SGS',
        'WWW'
    ], {
        S: '#ilikewood:sticks',
        G: 'infernalexp:glowcoal',
        W: '#minecraft:logs'
    })
    
    // Wither Skeleton Tweaks
    event.remove({output: 'wstweaks:blaze_blade'})
    event.shaped(Item.of('wstweaks:blaze_blade', 1), [
        ' RN',
        'RNR',
        'SR '
    ], {
        R: 'minecraft:blaze_rod',
        N: 'minecraft:nether_star',
        S: '#ilikewood:sticks'
    })
    
    event.remove({output: 'wstweaks:lava_blade'})
    event.shaped(Item.of('wstweaks:lava_blade', 1), [
        ' LN',
        'LNL',
        'SL '
    ], {
        L: 'minecraft:lava_bucket',
        N: 'minecraft:nether_star',
        S: '#ilikewood:sticks'
    })
    
    // Beds
    
    colors.forEach(element => {
        event.remove({output: 'minecraft:' + element + '_bed'})
        woodsList.forEach( wood => {
            event.shaped(Item.of('ilikewood:' + element + '_' + wood + '_bed', 1), [
                'WWW',
                'PPP'
            ], {
                W: 'minecraft:' + element + '_wool',
                P: 'minecraft:' + wood + '_planks'
            })
            event.shaped(Item.of('ilikewood:' + element + '_' + wood + '_bed', 1), [
                'WWW',
                'PPP',
            ], {
                W: 'minecraft:' + element + '_wool',
                P: 'ilikewood:' + wood + '_panels'
            })
            event.shapeless('ilikewood:' + element + '_' + wood + '_bed', 
                            ['ilikewood:white_' + wood + '_bed', 'minecraft:' + element + '_dye'])
        })
    })
    
    // Pressure Plates & Buttons & boats
    
    woodsList.forEach( wood => {
        event.shaped(Item.of('minecraft:' + wood + '_pressure_plate', 1), [
            'PP'
        ], {
            P: 'ilikewood:' + wood + '_panels'
        })
        event.shapeless('minecraft:' + wood + '_button', ['ilikewood:' + wood + '_panels'])
        event.shaped(Item.of('minecraft:' + wood + '_boat', 1), [
            'P P',
            'PPP
        ], {
            P: 'ilikewood:' + wood + '_panels'
        })
    })
    
    // Bookshelves
    
    event.remove({output: 'minecraft:bookshelf'})
    woodsList.forEach( wood => {
        event.shaped(Item.of('ilikewood:' + wood + '_bookshelf', 1), [
            'PPP',
            'BBB',
            'PPP'
        ], {
            P: 'minecraft:' + wood + '_planks',
            B: 'minecraft:book'
        })
    })
    
    // Bowl
    event.shaped(Item.of('minecraft:bowl', 4), [
        'P P',
        ' P '
    ], {
        P: '#ilikewood:panels'
    })
    
    // Shield
    event.shaped(Item.of('minecraft:shield', 1), [
        'PIP',
        'PPP',
        ' P ',
    ], {
        P: '#ilikewood:panels',
        I: 'minecraft:iron_ingot'
    })
    
    // Crafting tables
    event.remove({output: 'minecraft:crafting_table'})
    event.remove({output: 'craftingstation:crafting_station'})
    event.shapeless('craftingstation:crafting_station'}, ['#ilikewood:crafting_tables'])
    
    // Vanilla Grindstone
    event.remove({output: 'minecraft:grindstone'})
    event.shaped(Item.of('minecraft:grindstone', 1), [
        'SsS',
        'P P'
    ], {
        S: '#ilikewood:sticks',
        s: 'minecraft:stone_slab',
        P: '#minecraft:planks'
    })
    event.shaped(Item.of('minecraft:grindstone', 1), [
        'SsS',
        'P P'
    ], {
        S: '#ilikewood:sticks',
        s: 'minecraft:stone_slab',
        P: '#ilikewood_panels'
    })
    
    // Barrels & Chests
    event.remove({output: 'minecraft:barrel'})
    event.remove({input: 'minecraft:barrel'})
    event.remove({output: 'minecraft:chest'})
    event.remove({input: 'minecraft:chest'})
    
    
    woodsList.forEach( element => {
        event.shaped(Item.of('ilikewood:' + element + '_barrel', 1), [
            'PSP'
            'P P',
            'PSP',
        ], {
            P: 'minecraft:' + element + '_planks',
            S: 'minecraft:' + element + '_slab'
        })
        
        // FLuidtank Chest as Tank
        event.shaped(Item.of('fluidtank:chest_as_tank', 1), [
            'T T',
            'TBT',
            'TTT'
        ], {
            T: 'fluidtank:tank_wood',
            B: 'ilikewood:' + element + '_barrel'
        })
        
        // Metal Barrels
        event.shaped(Item.of('metalbarrels:gold_barrel', 1), [
            'GIG',
            'IBI',
            'GIG'
        ], {
            G: 'minecraft:gold_ingot',
            I: 'minecraft:iron_ingot',
            B: 'ilikewood:' + element + '_barrel'
        })
        event.shaped(Item.of('metalbarrels:iron_barrel', 1), [
            ' I ',
            'IBI',
            ' I '
        ], {
            I: 'minecraft:iron_ingot',
            B: 'ilikewood:' + element + '_barrel'
        })
        event.shaped(Item.of('metalbarrels:copper_barrel', 1), [
            'CBC'
        ], {
            C: 'matex:ingotcopper',
            B: 'ilikewood:' + element + '_barrel'
        })
        
        // Metal Barrels upgrades
        event.shaped(Item.of('metalbarrels:wood_to_copper', 1), [
            'CPC'
        ], {
            C: 'matex:ingotcopper',
            B: 'ilikewood:' + element + '_panels'
        })
        event.shaped(Item.of('metalbarrels:wood_to_iron', 1), [
            ' I ',
            'IPI',
            ' I '
        ], {
            I: 'minecraft:iron_ingot',
            P: 'ilikewood:' + element + '_panels'
        })
        
        // Chests
        event.shaped(Item.of('ilikewood:' + element + '_chest', 1), [
            'PPP',
            'P P',
            'PPP'
        ], {
            P: 'minecraft:' + element + '_planks'
        })
        event.shaped(Item.of('fluidtank:chest_as_tank', 1), [
            'T T',
            'TCT',
            'TTT'
        ], {
            T: 'fluidtank:tank_wood',
            C: 'ilikewood:' + element + '_chest'
        })
        
        // Iron Chests
        event.shaped(Item.of('ironchest:dirt_chest', 1), [
            'DDD',
            'DCD',
            'DDD'
        ], {
            D: 'minecraft:dirt',
            C: 'ilikewood:' + element + '_chest'
        })
        
        event.shaped(Item.of('ironchest:copper_chest', 1), [
            'III',
            'ICI',
            'III'
        ], {
            I: 'matex:ingotcopper',
            C: 'ilikewood:' + element + '_chest'
        })
        event.shaped(Item.of('ironchest:iron_chest', 1), [
            'III',
            'ICI',
            'III'
        ], {
            I: 'minecraft:iron_ingot',
            C: 'ilikewood:' + element + '_chest'
        })
        
        // Iron Chest Upgrades
        event.shaped(Item.of('ironchest:wood_to_copper_chest_upgrade', 1), [
            'III',
            'IPI',
            'III'
        ], {
            I: 'matex:ingotcopper',
            P: 'ilikewood:' + element + '_panels'
        })
        event.shaped(Item.of('ironchest:wood_to_iron_chest_upgrade', 1), [
            'III',
            'IPI',
            'III'
        ], {
            I: 'minecraft:iron_ingot',
            P: 'ilikewood:' + element + '_panels'
        })
        
        // Vanilla Crafts
        event.shapeless('minecraft:trapped_chest', 
                        ['ilikewood:' + element + '_chest', 'minecraft:tripwire_hook'])
        event.shaped(Item.of('minecraft:hopper', 1), [
            'I I',
            'ICI',
            ' I '
        ], {
            I: 'minecraft:iron_ingot',
            C: 'ilikewood:' + element + '_chest'
        })
        event.shaped(Item.of('minecraft:chest_minecraft', 1), [
            'C',
            'M',
        ], {
            C: 'ilikewood:' + element + '_chest',
            M: 'minecraft:minecart'
        })
        event.shaped(Item.of('minecraft:shulker_box', 1), [
            'S',
            'C',
            'S'
        ], {
            S: 'minecraft:shulker_shell',
            C: 'ilikewood:' + element + '_chest'
        })
        
        // Upper
        event.shaped(Item.of('uppers:upper', 1), [
            ' I ',
            'ICI',
            'I I'
        ], {
            I: 'minecraft:iron_ingot',
            C: 'ilikewood:' + element + '_chest'
        })
        
        // Backpacks
        event.shaped(Item.of('simplybackpacks:commonbackpack', 1), [
            'S S',
            'WLW',
            'LCL'
        ], {
            S: 'minecraft:string',
            W: 'minecraft:white_dye',
            L: 'minecraft:leather',
            C: 'ilikewood:' + element + '_chest'
        })
        event.shaped(Item.of('simplybackpacks:uncommonbackpack', 1), [
            'G G',
            'DPD',
            'CBC'
        ], {
            G: 'minecraft:gold_ingot',
            Y: 'minecraft:yellow_dye',
            P: 'simplybackpacks:commonbackpack',
            B: 'minecraft:gold_block',
            C: 'ilikewood:' + element + '_chest'
        })
        event.shaped(Item.of('simplybackpacks:rarebackpack', 1), [
            'D D',
            'bPb',
            'CBC'
        ], {
            D: 'minecraft:diamond',
            b: 'minecraft:blue_dye',
            P: 'simplybackpacks:uncommonbackpack',
            C: 'ilikewood:' + element + '_chest',
            B: 'minecraft:diamond_block'
        })
        event.shaped(Item.of('simplybackpacks:epicbackpack', 1), [
            'M M',
            'IBI',
            'CNC'
        ], {
            M: 'minecraft:magenta_dye',
            I: 'minecraft:iron_bars',
            B: 'simplybackpacks:rarebackpacks',
            N: 'minecraft:nether_star',
            C: 'ilikewood:' + element + '_chest'
        })
        
        // Aquaculture
        event.shaped(Item.of('aquaculture:tackle_box', 1), [
            'GIG',
            'ICI',
            'IBI'
        ], {
            G: '#aquaculture:tackle_box_green',
            I: 'minecraft:iron_bars',
            B: 'minecraft:iron_block',
            C: 'ilikewood:' + element + '_chest'
        })
        
        // EnderStorage
        event.shaped(Item.of('enderstorage:ender_chest', 1), [
            'BWB',
            'OCO',
            'BPB'
        ], {
            B: 'minecraft:blaze_rod',
            W: '#forge:wool',
            O: 'minecraft:obsidian',
            C: 'ilikewood:' + element + '_chest',
            P: 'minecraft:ender_pearl'
        })
    })
    
    event.remove({output: 'minecraft:composter'})
    event.remove({output: 'minecraft:lectern'})
    
    woodsList.forEach( element => {
        // Trapdoors
        event.shaped(Item.of('minecraft:' + element + '_trapdoor', 1), [
            'PPP',
            'PPP'
        ], {
            P: 'ilikewood:' + element + '_panels'
        })
        
        // Doors
        event.shaped(Item.of('minecraft:' + element + '_door', 3), [
            'PP',
            'PP',
            'PP'
        ], {
            P: 'ilikewood:' + element + '_panels'
        })
        
        //Aquaculture Worm Farm
        event.shaped(Item.of('aquaculture:worm_farm', 1), [
            'F F',
            'FDF',
            'PPP',
        ], {
            F: '#minecraft:wooden_fences',
            D: 'minecraft:dirt',
            P: 'ilikewood:' + element + '_panels'
        })
        
        // Composters
        event.remove({output: 'ilikewood:' + element + '_composter'})
        event.shaped(Item.of('ilikewood:' + element + 'composter', 1), [
            'S S',
            'S S',
            'SSS'
        ], {
            S: 'minecraft:' + element + '_slab'
        })
        event.shaped(Item.of('ilikewood:' + element + 'composter', 1), [
            'S S',
            'S S',
            'SSS'
        ], {
            S: 'ilikewood:' + element + '_panels_slab'
        })
        
        // Lecterns
        event.shaped(Item.of('ilikewood:' + element + 'composter', 1), [
            'SSS',
            ' B ',
            ' S '
        ], {
            S: 'minecraft:' + element + '_slab',
            B: 'ilikewood:' + element + '_bookshelf'
        })
    })
    
})
