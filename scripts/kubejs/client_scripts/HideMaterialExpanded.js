console.info('Hide all the unused content from Material Expanded')

onEvent('jei.hide.items', event => {

  var WoodRelated = [
    'matex:gearwood'
  ]

  // Vanilla Ores
  
  var IronRelated = [
    /*'matex:dustiron',*/   // Iron Dust - Not Disabled
    'matex:plateiron',      // Iron Plate
    'matex:rodiron',        // Iron Rod
    'matex:geariron'        // Iron Gear
  ]
  
  var GoldRelated = [
    /*'matex:dustgold',*/     // Gold Dust - Not Disabled
    'matex:plategold',        // Gold Plate
    'matex:rodgold',          // Gold Rod
    'matex:geargold'          // Gold Gear
  ]
  
  var DiamondRelated = [
    /*'matex:dustdiamond',*/      // Diamond Dust - Not Disabled
    'matex:platediamond',         // Diamond Plate
    'matex:roddiamond',           // Diamond Rod
    'matex:geardiamond'           // Diamond Gear
  ]
  
  var EmeraldRelated = [
    /*'matex:dustemerald',*/      // Emerald Dust - Not Disabled
    'matex:plateemerald',         // Emerald Plate
    'matex:rodemerald',           // Emerald Rod
    'matex:gearemerald'           // Emerald Gear
  ]
  
  var NetheriteRelated = [
    /*'matex:dustnetherite',*/      // Netherite Dust - Not Disabled
    'matex:platenetherite',         // Netherite Plate
    'matex:rodnetherite',           // Netherite Rod
    'matex:gearnetherite'           // Netherite Gear
  ]

  // Material Expanded Ores
  var SaltpeterRelated = [
    'matex:oresaltpeter',   // Saltpeter Ore
    'matex:dustsaltpeter'   // Saltpeter (Dust)
  ]
  
  var SulfurRelated = [
    'matex:oresulfur',      // Sulfur Ore
    'matex:dustsulfur'      // Sulfur (Dust)
  ]
  
  var CopperRelated = [
//    'matex:orecopper',        // Copper Ore
//    'matex:dustcopper',       // Copper Dust
//    'matex:ingotcopper',      // Copper Ingot
//    'matex:blockcopper',      // Copper Block
//    'matex:nuggetcopper',     // Copper Nugget
    'matex:platecopper',      // Copper Plate
    'matex:rodcopper',        // Copper Rod
    'matex:gearcopper',       // Copper Gear
//    'matex:swordcopper',      // Copper Sword
//    'matex:shovelcopper',     // Copper Shovel
//    'matex:pickaxecopper',    // Copper Pickaxe
//    'matex:axecopper',        // Copper Axe
//    'matex:hoecopper',        // Copper Hoe
//    'matex:helmetcopper',     // Copper Helmet
//    'matex:chestplatecopper', // Copper Chestplate
//    'matex:leggingscopper',   // Copper Leggings
//    'matex:bootscopper'       // Copper Boots
  ]
  
  var TinRelated = [
 //   'matex:oretin',         // Tin Ore
 //   'matex:dusttin',        // Tin Dust
 //   'matex:ingottin',       // Tin Ingot
 //   'matex:blocktin',       // Tin Block
 //   'matex:nuggettin',      // Tin Nugget
    'matex:platetin',       // Tin Plate
    'matex:rodtin',         // Tin Rod
    'matex:geartin',        // Tin Gear
 //   'matex:swordtin',       // Tin Sword
 //   'matex:shoveltin',      // Tin Shovel
 //   'matex:pickaxetin',     // Tin Pickaxe
 //   'matex:axetin',         // Tin Axe
 //   'matex:hoetin',         // Tin Hoe
 //   'matex:helmettin',      // Tin Helmet
 //   'matex:chestplatetin',  // Tin Chestplate
 //   'matex:leggingstin',    // Tin Leggings
 //   'matex:bootstin'        // Tin Boots
  ]
  
  var LeadRelated = [
 //   'matex:orelead',        // Lead Ore
 //   'matex:dustlead',       // Lead Dust
 //   'matex:ingotlead',      // Lead Ingot
 //   'matex:blocklead',      // Lead Block
 //   'matex:nuggetlead',     // Lead Nugget
    'matex:platelead',      // Lead Plate
    'matex:rodlead',        // Lead Rod
    'matex:gearlead',       // Lead Gear
 //   'matex:swordlead',      // Lead Sword
 //   'matex:shovellead',     // Lead Shovel
 //   'matex:pickaxelead',    // Lead Pickaxe
 //   'matex:axelead',        // Lead Axe
 //   'matex:hoelead',        // Lead Hoe
 //   'matex:helmetlead',     // Lead Helmet
 //   'matex:chestplatelead', // Lead Chestplate
 //   'matex:leggingslead',   // Lead Leggings
 //   'matex:bootslead'       // Lead Boots
  ]
  
  var AluminiumRelated = [
    'matex:orealuminium',         // Aluminium Ore
    'matex:dustaluminium',        // Aluminium Dust
    'matex:ingotaluminium',       // Aluminium Ingot
    'matex:blockaluminium',       // Aluminium Block
    'matex:nuggetaluminium',      // Aluminium Nugget
    'matex:platealuminium',       // Aluminium Plate
    'matex:rodaluminium',         // Aluminium Rod
    'matex:gearaluminium',        // Aluminium Gear
    'matex:swordaluminium',       // Aluminium Sword
    'matex:shovelaluminium',      // Aluminium Shovel
    'matex:pickaxealuminium',     // Aluminium Pickaxe
    'matex:axealuminium',         // Aluminium Axe
    'matex:hoealuminium',         // Aluminium Hoe
    'matex:helmetaluminium',      // Aluminium Helmet
    'matex:chestplatealuminium',  // Aluminium Chestplate
    'matex:leggingsaluminium',    // Aluminium Leggings
    'matex:bootsaluminium'        // Aluminium Boots
  ]
  
  var ZincRelated = [
    'matex:orezinc',         // Zinc Ore
    'matex:dustzinc',        // Zinc Dust
    'matex:ingotzinc',       // Zinc Ingot
    'matex:blockzinc',       // Zinc Block
    'matex:nuggetzinc',      // Zinc Nugget
    'matex:platezinc',       // Zinc Plate
    'matex:rodzinc',         // Zinc Rod
    'matex:gearzinc',        // Zinc Gear
    'matex:swordzinc',       // Zinc Sword
    'matex:shovelzinc',      // Zinc Shovel
    'matex:pickaxezinc',     // Zinc Pickaxe
    'matex:axezinc',         // Zinc Axe
    'matex:hoezinc',         // Zinc Hoe
    'matex:helmetzinc',      // Zinc Helmet
    'matex:chestplatezinc',  // Zinc Chestplate
    'matex:leggingszinc',    // Zinc Leggings
    'matex:bootszinc'        // Zinc Boots
  ]
  
  var OsmiumRelated = [
//    'matex:oreosmium',         // Osmium Ore
//    'matex:dustosmium',        // Osmium Dust
//    'matex:ingotosmium',       // Osmium Ingot
//    'matex:blockosmium',       // Osmium Block
//    'matex:nuggetosmium',      // Osmium Nugget
    'matex:plateosmium',       // Osmium Plate
    'matex:rodosmium',         // Osmium Rod
    'matex:gearosmium',        // Osmium Gear
//    'matex:swordosmium',       // Osmium Sword
//    'matex:shovelosmium',      // Osmium Shovel
//    'matex:pickaxeosmium',     // Osmium Pickaxe
//    'matex:axeosmium',         // Osmium Axe
//    'matex:hoeosmium',         // Osmium Hoe
//    'matex:helmetosmium',      // Osmium Helmet
//    'matex:chestplateosmium',  // Osmium Chestplate
//    'matex:leggingsosmium',    // Osmium Leggings
//    'matex:bootsosmium'        // Osmium Boots
  ]
  
  var SilverRelated = [
//    'matex:oresilver',         // Silver Ore
//    'matex:dustsilver',        // Silver Dust
//    'matex:ingotsilver',       // Silver Ingot
//    'matex:blocksilver',       // Silver Block
//    'matex:nuggetsilver',      // Silver Nugget
    'matex:platesilver',       // Silver Plate
    'matex:rodsilver',         // Silver Rod
    'matex:gearsilver',        // Silver Gear
//    'matex:swordsilver',       // Silver Sword
//    'matex:shovelsilver',      // Silver Shovel
//    'matex:pickaxesilver',     // Silver Pickaxe
//    'matex:axesilver',         // Silver Axe
//    'matex:hoesilver',         // Silver Hoe
//    'matex:helmetsilver',      // Silver Helmet
//    'matex:chestplatesilver',  // Silver Chestplate
//    'matex:leggingssilver',    // Silver Leggings
//    'matex:bootssilver'        // Silver Boots
  ]
  
  var TungstenRelated = [
    'matex:oretungsten',         // Tungsten Ore
    'matex:dusttungsten',        // Tungsten Dust
    'matex:ingottungsten',       // Tungsten Ingot
    'matex:blocktungsten',       // Tungsten Block
    'matex:nuggettungsten',      // Tungsten Nugget
    'matex:platetungsten',       // Tungsten Plate
    'matex:rodtungsten',         // Tungsten Rod
    'matex:geartungsten',        // Tungsten Gear
    'matex:swordtungsten',       // Tungsten Sword
    'matex:shoveltungsten',      // Tungsten Shovel
    'matex:pickaxetungsten',     // Tungsten Pickaxe
    'matex:axetungsten',         // Tungsten Axe
    'matex:hoetungsten',         // Tungsten Hoe
    'matex:helmettungsten',      // Tungsten Helmet
    'matex:chestplatetungsten',  // Tungsten Chestplate
    'matex:leggingstungsten',    // Tungsten Leggings
    'matex:bootstungsten'        // Tungsten Boots
  ]
  
  var PlatinumRelated = [
    'matex:oreplatinum',         // Platinum Ore
    'matex:dustplatinum',        // Platinum Dust
    'matex:ingotplatinum',       // Platinum Ingot
    'matex:blockplatinum',       // Platinum Block
    'matex:nuggetplatinum',      // Platinum Nugget
    'matex:plateplatinum',       // Platinum Plate
    'matex:rodplatinum',         // Platinum Rod
    'matex:gearplatinum',        // Platinum Gear
    'matex:swordplatinum',       // Platinum Sword
    'matex:shovelplatinum',      // Platinum Shovel
    'matex:pickaxeplatinum',     // Platinum Pickaxe
    'matex:axeplatinum',         // Platinum Axe
    'matex:hoeplatinum',         // Platinum Hoe
    'matex:helmetplatinum',      // Platinum Helmet
    'matex:chestplateplatinum',  // Platinum Chestplate
    'matex:leggingsplatinum',    // Platinum Leggings
    'matex:bootsplatinum'        // Platinum Boots
  ]
  
  var NickelRelated = [
    'matex:orenickel',         // Nickel Ore
    'matex:dustnickel',        // Nickel Dust
    'matex:ingotnickel',       // Nickel Ingot
    'matex:blocknickel',       // Nickel Block
    'matex:nuggetnickel',      // Nickel Nugget
    'matex:platenickel',       // Nickel Plate
    'matex:rodnickel',         // Nickel Rod
    'matex:gearnickel',        // Nickel Gear
    'matex:swordnickel',       // Nickel Sword
    'matex:shovelnickel',      // Nickel Shovel
    'matex:pickaxenickel',     // Nickel Pickaxe
    'matex:axenickel',         // Nickel Axe
    'matex:hoenickel',         // Nickel Hoe
    'matex:helmetnickel',      // Nickel Helmet
    'matex:chestplatenickel',  // Nickel Chestplate
    'matex:leggingsnickel',    // Nickel Leggings
    'matex:bootsnickel'        // Nickel Boots
  ]
  
  var TitaniumRelated = [
    'matex:oretitanium',         // Titanium Ore
    'matex:dusttitanium',        // Titanium Dust
    'matex:ingottitanium',       // Titanium Ingot
    'matex:blocktitanium',       // Titanium Block
    'matex:nuggettitanium',      // Titanium Nugget
    'matex:platetitanium',       // Titanium Plate
    'matex:rodtitanium',         // Titanium Rod
    'matex:geartitanium',        // Titanium Gear
    'matex:swordtitanium',       // Titanium Sword
    'matex:shoveltitanium',      // Titanium Shovel
    'matex:pickaxetitanium',     // Titanium Pickaxe
    'matex:axetitanium',         // Titanium Axe
    'matex:hoetitanium',         // Titanium Hoe
    'matex:helmettitanium',      // Titanium Helmet
    'matex:chestplatetitanium',  // Titanium Chestplate
    'matex:leggingstitanium',    // Titanium Leggings
    'matex:bootstitanium'        // Titanium Boots
  ]
  
  var UraniumRelated = [
    'matex:oreuranium',         // Uranium Ore
    'matex:dusturanium',        // Uranium Dust
    'matex:ingoturanium',       // Uranium Ingot
    'matex:blockuranium',       // Uranium Block
    'matex:nuggeturanium',      // Uranium Nugget
    'matex:plateuranium',       // Uranium Plate
    'matex:roduranium',         // Uranium Rod
    'matex:gearuranium',        // Uranium Gear
    'matex:sworduranium',       // Uranium Sword
    'matex:shoveluranium',      // Uranium Shovel
    'matex:pickaxeuranium',     // Uranium Pickaxe
    'matex:axeuranium',         // Uranium Axe
    'matex:hoeuranium',         // Uranium Hoe
    'matex:helmeturanium',      // Uranium Helmet
    'matex:chestplateuranium',  // Uranium Chestplate
    'matex:leggingsuranium',    // Uranium Leggings
    'matex:bootsuranium'        // Uranium Boots
  ]
  
  var ThoriumRelated = [
    'matex:orethorium',         // Thorium Ore
    'matex:dustthorium',        // Thorium Dust
    'matex:ingotthorium',       // Thorium Ingot
    'matex:blockthorium',       // Thorium Block
    'matex:nuggetthorium',      // Thorium Nugget
    'matex:platethorium',       // Thorium Plate
    'matex:rodthorium',         // Thorium Rod
    'matex:gearthorium',        // Thorium Gear
    'matex:swordthorium',       // Thorium Sword
    'matex:shovelthorium',      // Thorium Shovel
    'matex:pickaxethorium',     // Thorium Pickaxe
    'matex:axethorium',         // Thorium Axe
    'matex:hoethorium',         // Thorium Hoe
    'matex:helmetthorium',      // Thorium Helmet
    'matex:chestplatethorium',  // Thorium Chestplate
    'matex:leggingsthorium',    // Thorium Leggings
    'matex:bootsthorium'        // Thorium Boots
  ]
  
  // Material Expanded Alloys
  
  var SteelRelated = [
    'matex:duststeel',        // Steel Dust
    'matex:ingotsteel',       // Steel Ingot
    'matex:blocksteel',       // Steel Block
    'matex:nuggetsteel',      // Steel Nugget
    'matex:platesteel',       // Steel Plate
    'matex:rodsteel',         // Steel Rod
    'matex:gearsteel',        // Steel Gear
    'matex:swordsteel',       // Steel Sword
    'matex:shovelsteel',      // Steel Shovel
    'matex:pickaxesteel',     // Steel Pickaxe
    'matex:axesteel',         // Steel Axe
    'matex:hoesteel',         // Steel Hoe
    'matex:helmetsteel',      // Steel Helmet
    'matex:chestplatesteel',  // Steel Chestplate
    'matex:leggingssteel',    // Steel Leggings
    'matex:bootssteel'        // Steel Boots
  ]
  
  var BronzeRelated = [
    'matex:dustbronze',        // Bronze Dust
    'matex:ingotbronze',       // Bronze Ingot
    'matex:blockbronze',       // Bronze Block
    'matex:nuggetbronze',      // Bronze Nugget
    'matex:platebronze',       // Bronze Plate
    'matex:rodbronze',         // Bronze Rod
    'matex:gearbronze',        // Bronze Gear
    'matex:swordbronze',       // Bronze Sword
    'matex:shovelbronze',      // Bronze Shovel
    'matex:pickaxebronze',     // Bronze Pickaxe
    'matex:axebronze',         // Bronze Axe
    'matex:hoebronze',         // Bronze Hoe
    'matex:helmetbronze',      // Bronze Helmet
    'matex:chestplatebronze',  // Bronze Chestplate
    'matex:leggingsbronze',    // Bronze Leggings
    'matex:bootsbronze'        // Bronze Boots
  ]
  
  var ElectrumRelated = [
    'matex:dustelectrum',        // Electrum Dust
    'matex:ingotelectrum',       // Electrum Ingot
    'matex:blockelectrum',       // Electrum Block
    'matex:nuggetelectrum',      // Electrum Nugget
    'matex:plateelectrum',       // Electrum Plate
    'matex:rodelectrum',         // Electrum Rod
    'matex:gearelectrum',        // Electrum Gear
    'matex:swordelectrum',       // Electrum Sword
    'matex:shovelelectrum',      // Electrum Shovel
    'matex:pickaxeelectrum',     // Electrum Pickaxe
    'matex:axeelectrum',         // Electrum Axe
    'matex:hoeelectrum',         // Electrum Hoe
    'matex:helmetelectrum',      // Electrum Helmet
    'matex:chestplateelectrum',  // Electrum Chestplate
    'matex:leggingselectrum',    // Electrum Leggings
    'matex:bootselectrum'        // Electrum Boots
  ]
  
  var CupronickelRelated = [
    'matex:dustcupronickel',        // Cupronickel Dust
    'matex:ingotcupronickel',       // Cupronickel Ingot
    'matex:blockcupronickel',       // Cupronickel Block
    'matex:nuggetcupronickel',      // Cupronickel Nugget
    'matex:platecupronickel',       // Cupronickel Plate
    'matex:rodcupronickel',         // Cupronickel Rod
    'matex:gearcupronickel',        // Cupronickel Gear
    'matex:swordcupronickel',       // Cupronickel Sword
    'matex:shovelcupronickel',      // Cupronickel Shovel
    'matex:pickaxecupronickel',     // Cupronickel Pickaxe
    'matex:axecupronickel',         // Cupronickel Axe
    'matex:hoecupronickel',         // Cupronickel Hoe
    'matex:helmetcupronickel',      // Cupronickel Helmet
    'matex:chestplatecupronickel',  // Cupronickel Chestplate
    'matex:leggingscupronickel',    // Cupronickel Leggings
    'matex:bootscupronickel'        // Cupronickel Boots
  ]
  
  var BrassRelated = [
    'matex:dustbrass',        // Brass Dust
    'matex:ingotbrass',       // Brass Ingot
    'matex:blockbrass',       // Brass Block
    'matex:nuggetbrass',      // Brass Nugget
    'matex:platebrass',       // Brass Plate
    'matex:rodbrass',         // Brass Rod
    'matex:gearbrass',        // Brass Gear
    'matex:swordbrass',       // Brass Sword
    'matex:shovelbrass',      // Brass Shovel
    'matex:pickaxebrass',     // Brass Pickaxe
    'matex:axebrass',         // Brass Axe
    'matex:hoebrass',         // Brass Hoe
    'matex:helmetbrass',      // Brass Helmet
    'matex:chestplatebrass',  // Brass Chestplate
    'matex:leggingsbrass',    // Brass Leggings
    'matex:bootsbrass'        // Brass Boots
  ]
  
  var AluminiumBrassRelated = [
    'matex:dustaluminiumbrass',        // Aluminium Brass Dust
    'matex:ingotaluminiumbrass',       // Aluminium Brass Ingot
    'matex:blockaluminiumbrass',       // Aluminium Brass Block
    'matex:nuggetaluminiumbrass',      // Aluminium Brass Nugget
    'matex:platealuminiumbrass',       // Aluminium Brass Plate
    'matex:rodaluminiumbrass',         // Aluminium Brass Rod
    'matex:gearaluminiumbrass',        // Aluminium Brass Gear
    'matex:swordaluminiumbrass',       // Aluminium Brass Sword
    'matex:shovelaluminiumbrass',      // Aluminium Brass Shovel
    'matex:pickaxealuminiumbrass',     // Aluminium Brass Pickaxe
    'matex:axealuminiumbrass',         // Aluminium Brass Axe
    'matex:hoealuminiumbrass',         // Aluminium Brass Hoe
    'matex:helmetaluminiumbrass',      // Aluminium Brass Helmet
    'matex:chestplatealuminiumbrass',  // Aluminium Brass Chestplate
    'matex:leggingsaluminiumbrass',    // Aluminium Brass Leggings
    'matex:bootsaluminiumbrass'        // Aluminium Brass Boots
  ]
  
  // All Lists to be removed
  
  var AllListsRemoved = [
    WoodRelated,
    IronRelated,
    GoldRelated,
    DiamondRelated,
    EmeraldRelated,
    NetheriteRelated,
    SaltpeterRelated,
    SulfurRelated,
    CopperRelated,
    TinRelated,
    LeadRelated,
    OsmiumRelated,
    SilverRelated,
    AluminiumRelated,
    ZincRelated,
    TungstenRelated,
    PlatinumRelated,
    NickelRelated,
    TitaniumRelated,
    UraniumRelated,
    ThoriumRelated,
    SteelRelated,
    BronzeRelated,
    ElectrumRelated,
    CupronickelRelated,
    BrassRelated,
    AluminiumBrassRelated
  ]
  
  // Remove function
  
  AllListsRemoved.forEach(detailledArray => {
    detailledArray.forEach(element => {
      event.hide(element)       // Hides every element from JEI.
    })
  })
})
