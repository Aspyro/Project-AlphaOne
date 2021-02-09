onEvent('jei.hide.items', event => {

  var Grindstones = [
//    'grinder:grindstone_stone',
//    'grinder:grindstone_granite',
//    'grinder:grindstone_diorite',
//    'grinder:grindstone_andesite',
//    'grinder:grindstone_iron',
//    'grinder:grindstone_gold',
//    'grinder:grindstone_diamond',
//    'grinder:grindstone_emerald',
//    'grinder:grindstone_obsidian',
    'grinder:grindstone_aluminum',
//    'grinder:grindstone_tin',
//    'grinder:grindstone_copper',
    'grinder:grindstone_nickel',
//    'grinder:grindstone_lead',
//    'grinder:grindstone_silver',
    'grinder:grindstone_platinum',
    'grinder:grindstone_mercury',
    'grinder:grindstone_zinc',
    'grinder:grindstone_bismuth',
    'grinder:grindstone_neptunium',
    'grinder:grindstone_uranium',
//    'grinder:grindstone_osmium',
    'grinder:grindstone_ardite',
    'grinder:grindstone_cobalt',
    'grinder:grindstone_zitrite',
    'grinder:grindstone_rainbow',
    'grinder:grindstone_starmetal',
    'grinder:grindstone_tungsten',
    'grinder:grindstone_iesnium'
  ]
  
  Grindstones.forEach(element => {
    event.remove({id: element})       // Removes all the recipes for this element
    event.remove({input: element})    // Removes all the recipes where this element is used
    event.remove({output: element})   // Removes all the recipes where this element is a possible output
  })

})
