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
    })
})