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
    
})
