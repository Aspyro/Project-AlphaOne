console.info("Integrates I Like Wood Tools")

onEvent('recipes', event => {

    // Removes Vanilla Tools recipes
    var FirstMaterial = ['wooden', 'stone', 'golden', 'iron', 'diamond','netherite']
    var SecondMaterial = ['acacia', 'birch', 'crimson', 'dark_oak', 
        'jungle', 'oak', 'spruce', 'warped']
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

})