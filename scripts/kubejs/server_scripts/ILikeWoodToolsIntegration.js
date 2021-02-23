console.info("Integrates I Like Wood Tools")

onEvent('recipes', event => {

    // Removes Vanilla Tools recipes
    var FirstMaterial = ['wooden', 'stone', 'golden', 'iron', 'diamond','netherite']
    var SecondMaterial = ['acacia', 'birch', 'crimson', 'dark_oak', 
        'jungle', 'oak', 'spruce', 'warped']
    var MatexMaterial = ['copper', 'tin', 'lead', 'silver', 'osmium']
    var ToolType = ['sword', 'shovel', 'pickaxe', 'hoe', 'axe']

    FirstMaterial.forEach(material => {
        ToolType.forEach(tool => {
            event.remove({output: 'minecraft:' + material + '_' + tool})
        })
    })

    // Add recipes for ILikeWood Wooden Tools
    SecondMaterial.forEach(material => {
        event.shaped(Item.of('ilikewood:' + material + '_sword', 1), [
            'P',
            'P',
            'S'
        ], {
            P: "minecraft:" + material + '_planks',
            S: "ilikewood:" + material + '_stick'
        })

        event.shaped(Item.of('ilikewood:' + material + '_shovel', 1), [
            'P',
            'S',
            'S',
        ], {
            P: "minecraft:" + material + '_planks',
            S: "ilikewood:" + material + '_stick'
        })
        event.shaped(Item.of('ilikewood:' + material + '_pickaxe', 1), [
            'PPP',
            ' S ',
            ' S ',
        ], {
            P: "minecraft:" + material + '_planks',
            S: "ilikewood:" + material + '_stick'
        })
        event.shaped(Item.of('ilikewood:' + material + '_hoe', 1), [
            'PP ',
            ' S ',
            ' S ',
        ], {
            P: "minecraft:" + material + '_planks',
            S: "ilikewood:" + material + '_stick'
        })
        event.shaped(Item.of('ilikewood:' + material + '_axe', 1), [
            'PP ',
            'PS ',
            ' S ',
        ], {
            P: "minecraft:" + material + '_planks',
            S: "ilikewood:" + material + '_stick'
        })
        
    })
    
// Other Tools
    
    MatexMaterial.forEach(material => {
        ToolType.forEach(tool => {
            event.remove({output: 'matex:' + tool + material})
        })
        
        event.shaped(Item.of('matex:sword' + material, 1), [
            'M',
            'M',
            'S'
        ], {
            M: 'matex:ingot' + material,
            S: '#ilikewood:sticks'
        })
        
        event.shaped(Item.of('matex:shovel' + material, 1), [
            'M',
            'S',
            'S'
        ], {
            M: 'matex:ingot' + material,
            S: '#ilikewood:sticks'
        })
        
        event.shaped(Item.of('matex:pickaxe' + material, 1), [
            'MMM',
            ' S ',
            ' S '
        ], {
            M: 'matex:ingot' + material,
            S: '#ilikewood:sticks'
        })
        
        event.shaped(Item.of('matex:axe' + material, 1), [
            'MM ',
            'MS ',
            ' S '
        ], {
            M: 'matex:ingot' + material,
            S: '#ilikewood:sticks'
        })
        
        event.shaped(Item.of('matex:hoe' + material, 1), [
            'MM',
            ' S',
            ' S'
        ], {
            M: 'matex:ingot' + material,
            S: '#ilikewood:sticks'
        })
    })
    
    // Pirate and Looters Pirate Spader
    
    event.remove({output: 'piratesandlootersreborn:pirate_spader'})
    event.shaped(Item.of('piratesandlootersreborn:pirate_spader', 1), [
        '  I',
        ' I ',
        'S  '
    ], {
        I: 'piratesandlootersreborn:illager_silver_bar',
        S: '#ilikewood:sticks'
    })
    
    // Aquaculture tools
    event.remove({output: 'aquaculture:iron_fishing_rod'})
    event.shaped(Item.of('aquaculture:iron_fishing_rod', 1), [
        '  I',
        ' IS',
        'W S'
    ], {
        I: 'minecraft:iron_ingot',
        W: '#ilikewood:sticks',
        S: 'minecraft:string'
    })
    
    event.remove({output: 'aquaculture:gold_fishing_rod'})
    event.shaped(Item.of('aquaculture:gold_fishing_rod', 1), [
        '  I',
        ' IS',
        'W S'
    ], {
        I: 'minecraft:gold_ingot',
        W: '#ilikewood:sticks',
        S: 'minecraft:string'
    })
    
    event.remove({output: 'aquaculture:diamond_fishing_rod'})
    event.shaped(Item.of('aquaculture:diamond_fishing_rod', 1), [
        '  I',
        ' IS',
        'W S'
    ], {
        I: 'minecraft:diamond',
        W: '#ilikewood:sticks',
        S: 'minecraft:string'
    })
    
    event.remove({output: 'aquaculture:neptunium_fishing_rod'})
    event.shaped(Item.of('aquaculture:neptunium_fishing_rod', 1), [
        '  I',
        ' IS',
        'W S'
    ], {
        I: 'aquaculture:neptunium_ingot',
        W: '#ilikewood:sticks',
        S: 'minecraft:string'
    })
    
    event.remove({output: 'aquaculture:wooden_fillet_knife'})
    event.shaped(Item.of('aquaculture:iron_fishing_rod', 1), [
        '  P',
        ' P ',
        'S  '
    ], {
        P: '#minecraft:planks',
        S: '#ilikewood:sticks'
    })
    event.shaped(Item.of('aquaculture:iron_fishing_rod', 1), [
        '  P',
        ' P ',
        'S  '
    ], {
        P: '#ilikewood:panels',
        S: '#ilikewood:sticks'
    })
    
    event.remove({output: 'aquaculture:stone_fillet_knife'})
    event.shaped(Item.of('aquaculture:stone_fillet_knife', 1), [
        '  C',
        ' C ',
        'S  '
    ], {
        C: '#forge:cobblestone',
        S: '#ilikewood:sticks'
    })
    
    event.remove({output: 'aquaculture:iron_fillet_knife'})
    event.shaped(Item.of('aquaculture:iron_fillet_knife', 1), [
        '  I',
        ' I ',
        'S  '
    ], {
        I: 'minecraft:iron_ingot',
        S: '#ilikewood:sticks'
    })
    
    event.remove({output: 'aquaculture:gold_fillet_knife'})
    event.shaped(Item.of('aquaculture:gold_fillet_knife', 1), [
        '  G',
        ' G ',
        'S  '
    ], {
        G: 'minecraft:gold_ingot',
        S: '#ilikewood:sticks'
    })
    
    event.remove({output: 'aquaculture:diamond_fillet_knife'})
    event.shaped(Item.of('aquaculture:diamond_fillet_knife', 1), [
        '  D',
        ' D ',
        'S  '
    ], {
        D: 'minecraft:diamond',
        S: '#ilikewood:sticks'
    })
    
    event.remove({output: 'aquaculture:neptunium_fillet_knife'})
    event.shaped(Item.of('aquaculture:neptunium_fillet_knife', 1), [
        '  N',
        ' N ',
        'S  '
    ], {
        N: 'aquaculture:neptunium_ingot',
        S: '#ilikewood:sticks'
    })
    
    event.remove({output: 'aquaculture:neptunium_pickaxe'})
    event.shaped(Item.of('aquaculture:neptunium_pickaxe', 1), [
        'NNN',
        ' S ',
        ' S '
    ], {
        N: 'aquaculture:neptunium_ingot',
        S: '#ilikewood:sticks'
    })
    
    event.remove({output: 'aquaculture:neptunium_shovel'})
    event.shaped(Item.of('aquaculture:neptunium_shovel', 1), [
        'N',
        'S',
        'S'
    ], {
        N: 'aquaculture:neptunium_ingot',
        S: '#ilikewood:sticks'
    })
    
    event.remove({output: 'aquaculture:neptunium_axe'})
    event.shaped(Item.of('aquaculture:neptunium_axe', 1), [
        'NN',
        'NS',
        ' S'
    ], {
        N: 'aquaculture:neptunium_ingot',
        S: '#ilikewood:sticks'
    })
    
    event.remove({output: 'aquaculture:neptunium_hoe'})
    event.shaped(Item.of('aquaculture:neptunium_hoe', 1), [
        'NN',
        ' S',
        ' S'
    ], {
        N: 'aquaculture:neptunium_ingot',
        S: '#ilikewood:sticks'
    })
    
    event.remove({output: 'aquaculture:neptunium_sword'})
    event.shaped(Item.of('aquaculture:neptunium_sword', 1), [
        'N',
        'N',
        'S'
    ], {
        N: 'aquaculture:neptunium_ingot',
        S: '#ilikewood:sticks'
    })
    

})
