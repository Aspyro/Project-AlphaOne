onEvent('recipes', event => {
    event.remove({output: 'minecraft:paper'})
    event.shapeless(Item.of('minecraft:paper', 3), ['minecraft:sugar_cane', 'minecraft:sugar_cane', 'minecraft:sugar_cane'])
  })
