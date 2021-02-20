console.info('Integrates I Like Wood')

onEvent('recipes', event => {

    var woodsList = ['oak', 'birch', 'spruce', 'jungle', 'dark_oak', 'acacia', 'crimson', 'warped']
    
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
    
})
