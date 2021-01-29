// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

var IronFurnacesTierUpgrades = [
	'ironfurnaces:upgrade_iron',
	'ironfurnaces:upgrade_gold',
	'ironfurnaces:upgrade_iron2',
	'ironfurnaces:upgrade_gold2', 
	'ironfurnaces:upgrade_diamond',
	'ironfurnaces:upgrade_emerald',
	'ironfurnaces:upgrade_obsidian',
	'ironfurnaces:upgrade_obsidian2',
	'ironfurnaces:upgrade_crystal',
	'ironfurnaces:upgrade_netherite',
	'ironfurnaces:upgrade_copper',
	'ironfurnaces:upgrade_silver',
	'ironfurnaces:upgrade_silver2'
]

var IronFurnacesUpgradedFurnaces = [
	'ironfurnaces:copper_furnace',
	'ironfurnaces:silver_furnace'
]

var IronFurnacesRainbowRelatedItems = [
	'ironfurnaces:million_furnace',
	'ironfurnaces:rainbow_core',
	'ironfurnaces:rainbow_plating',
	'ironfurnaces:rainbow_coal'
]

var IronChestsChestUpgrades = [
	'ironchest:wood_to_copper_chest_upgrade',
	'ironchest:copper_to_silver_chest_upgrade',
	'ironchest:copper_to_iron_chest_upgrade',
	'ironchest:silver_to_gold_chest_upgrade',
]

var IronChestsChests = [
	'ironchest:copper_chest',
	'ironchest:silver_chest'
]

var IronShulkerBoxesShulkerUpgrades = [
	'ironshulkerbox:vanilla_to_copper_shulker_box_upgrade',
	'ironshulkerbox:copper_to_iron_shulker_box_upgrade',
	'ironshulkerbox:copper_to_silver_shulker_box_upgrade',
	'ironshulkerbox:silver_to_gold_shulker_box_upgrade'
]

var IronShulkerBoxesShulkers = [
	'ironshulkerbox:copper_shulker_box_white',
	'ironshulkerbox:copper_shulker_box_orange',
	'ironshulkerbox:copper_shulker_box_magenta',
	'ironshulkerbox:copper_shulker_box_light_blue',
	'ironshulkerbox:copper_shulker_box_yellow',
	'ironshulkerbox:copper_shulker_box_lime',
	'ironshulkerbox:copper_shulker_box_pink',
	'ironshulkerbox:copper_shulker_box_gray',
	'ironshulkerbox:copper_shulker_box_light_gray',
	'ironshulkerbox:copper_shulker_box_cyan',
	'ironshulkerbox:copper_shulker_box_purple',
	'ironshulkerbox:copper_shulker_box_blue',
	'ironshulkerbox:copper_shulker_box_brown',
	'ironshulkerbox:copper_shulker_box_green',
	'ironshulkerbox:copper_shulker_box_red',
	'ironshulkerbox:copper_shulker_box_black',
	'ironshulkerbox:silver_shulker_box_white',
	'ironshulkerbox:silver_shulker_box_orange',
	'ironshulkerbox:silver_shulker_box_magenta',
	'ironshulkerbox:silver_shulker_box_light_blue',
	'ironshulkerbox:silver_shulker_box_yellow',
	'ironshulkerbox:silver_shulker_box_lime',
	'ironshulkerbox:silver_shulker_box_pink',
	'ironshulkerbox:silver_shulker_box_gray',
	'ironshulkerbox:silver_shulker_box_light_gray',
	'ironshulkerbox:silver_shulker_box_cyan',
	'ironshulkerbox:silver_shulker_box_purple',
	'ironshulkerbox:silver_shulker_box_blue',
	'ironshulkerbox:silver_shulker_box_brown',
	'ironshulkerbox:silver_shulker_box_green',
	'ironshulkerbox:silver_shulker_box_red',
	'ironshulkerbox:silver_shulker_box_black'
]

var MetalBarrelsBarrelUpgrades = [
	'metalbarrels:wood_to_copper',
	'metalbarrels:copper_to_iron',
	'metalbarrels:copper_to_silver',
	'metalbarrels:copper_to_gold',
	'metalbarrels:copper_to_diamond',
	'metalbarrels:copper_to_obsidian',
	'metalbarrels:copper_to_crystal',
	'metalbarrels:wood_to_silver',
	'metalbarrels:iron_to_silver',
	'metalbarrels:silver_to_gold',
	'metalbarrels:silver_to_diamond',
	'metalbarrels:silver_to_obsidian',
	'metalbarrels:silver_to_crystal'
]

var MetalBarrelsBarrels = [
	'metalbarrels:copper_barrel',
	'metalbarrels:silver_barrel'
]

var FluidTankTanks = [
	'fluidtank:tank_copper',
	'fluidtank:tank_silver',
	'fluidtank:tank_tin',
	'fluidtank:tank_bronze',
	'fluidtank:tank_lead',
	'fluidtank:invisible_tank_copper',
	'fluidtank:invisible_tank_silver',
	'fluidtank:invisible_tank_tin',
	'fluidtank:invisible_tank_bronze',
	'fluidtank:invisible_tank_lead',
	'fluidtank:creative'
]

var ArrayOfAllArrays = [
	IronFurnacesTierUpgrades,
	IronFurnacesUpgradedFurnaces,
	IronFurnacesRainbowRelatedItems,
	IronChestsChestUpgrades,
	IronChestsChests,
	IronShulkerBoxesShulkerUpgrades,
	IronShulkerBoxesShulkers,
	MetalBarrelsBarrelUpgrades,
	MetalBarrelsBarrels,
	FluidTankTanks
]

onEvent('recipes', event => {
  // Change recipes here

	ArrayOfAllArrays.forEach(detailledArray => {
		detailledArray.forEach(element => {
			event.remove({id: element})
			event.remove({input: element})
			event.remove({output: element})
		})
	});

  /*
  // Deleting ironfurnaces furnace upgrades
  event.remove({id: 'ironfurnaces:upgrade_iron'})
  event.remove({id: 'ironfurnaces:upgrade_gold'})
  event.remove({id: 'ironfurnaces:upgrade_iron2'})
  event.remove({id: 'ironfurnaces:upgrade_gold2'})
  event.remove({id: 'ironfurnaces:upgrade_diamond'})
  event.remove({id: 'ironfurnaces:upgrade_emerald'})
  event.remove({id: 'ironfurnaces:upgrade_obsidian'})
  event.remove({id: 'ironfurnaces:upgrade_obsidian2'})
  event.remove({id: 'ironfurnaces:upgrade_crystal'})
  event.remove({id: 'ironfurnaces:upgrade_netherite'})
  event.remove({id: 'ironfurnaces:upgrade_copper'})
  event.remove({id: 'ironfurnaces:upgrade_silver'})
  event.remove({id: 'ironfurnaces:upgrade_silver2'})

  // Deleting ironfurnaces furnaces
  event.remove({id: 'ironfurnaces:copper_furnace'})
  event.remove({id: 'ironfurnaces:silver_furnace'})
  event.remove({input: 'ironfurnaces:copper_furnace'})
  event.remove({input: 'ironfurnaces:silver_furnace'})

  // Deleting ironfurnaces rainbow furnace related items
  event.remove({id: 'ironfurnaces:million_furnace'})
  event.remove({id: 'ironfurnaces:rainbow_core'})
  event.remove({id: 'ironfurnaces:rainbow_plating'})
  event.remove({id: 'ironfurnaces:rainbow_coal'})

  // Deleting ironchest chest upgrades
  event.remove({id: 'ironchest:wood_to_copper_chest_upgrade'})
  event.remove({id: 'ironchest:copper_to_silver_chest_upgrade'})
  event.remove({id: 'ironchest:copper_to_iron_chest_upgrade'})
  event.remove({id: 'ironchest:silver_to_gold_chest_upgrade'})

  // Deleting ironchest chests
  event.remove({id: 'ironchest:copper_chest'})
  event.remove({id: 'ironchest:silver_chest'})
  event.remove({input: 'ironchest:copper_chest'})
  event.remove({input: 'ironchest:silver_chest'})

  // Deleting ironshulkerboxes Shulker Box upgrades
  event.remove({id: 'ironshulkerbox:vanilla_to_copper_shulker_box_upgrade'})
  event.remove({id: 'ironshulkerbox:copper_to_iron_shulker_box_upgrade'})
  event.remove({id: 'ironshulkerbox:copper_to_silver_shulker_box_upgrade'})
  event.remove({id: 'ironshulkerbox:silver_to_gold_shulker_box_upgrade'})

  // Deleting ironshulkerboxes shulker boxes
  event.remove({id: 'ironshulkerbox:copper_shulker_box_white'})
  event.remove({id: 'ironshulkerbox:copper_shulker_box_orange'})
  event.remove({id: 'ironshulkerbox:copper_shulker_box_magenta'})
  event.remove({id: 'ironshulkerbox:copper_shulker_box_light_blue'})
  event.remove({id: 'ironshulkerbox:copper_shulker_box_yellow'})
  event.remove({id: 'ironshulkerbox:copper_shulker_box_lime'})
  event.remove({id: 'ironshulkerbox:copper_shulker_box_pink'})
  event.remove({id: 'ironshulkerbox:copper_shulker_box_gray'})
  event.remove({id: 'ironshulkerbox:copper_shulker_box_light_gray'})
  event.remove({id: 'ironshulkerbox:copper_shulker_box_cyan'})
  event.remove({id: 'ironshulkerbox:copper_shulker_box_purple'})
  event.remove({id: 'ironshulkerbox:copper_shulker_box_blue'})
  event.remove({id: 'ironshulkerbox:copper_shulker_box_brown'})
  event.remove({id: 'ironshulkerbox:copper_shulker_box_green'})
  event.remove({id: 'ironshulkerbox:copper_shulker_box_red'})
  event.remove({id: 'ironshulkerbox:copper_shulker_box_black'})
  event.remove({id: 'ironshulkerbox:silver_shulker_box_white'})
  event.remove({id: 'ironshulkerbox:silver_shulker_box_orange'})
  event.remove({id: 'ironshulkerbox:silver_shulker_box_magenta'})
  event.remove({id: 'ironshulkerbox:silver_shulker_box_light_blue'})
  event.remove({id: 'ironshulkerbox:silver_shulker_box_yellow'})
  event.remove({id: 'ironshulkerbox:silver_shulker_box_lime'})
  event.remove({id: 'ironshulkerbox:silver_shulker_box_pink'})
  event.remove({id: 'ironshulkerbox:silver_shulker_box_gray'})
  event.remove({id: 'ironshulkerbox:silver_shulker_box_light_gray'})
  event.remove({id: 'ironshulkerbox:silver_shulker_box_cyan'})
  event.remove({id: 'ironshulkerbox:silver_shulker_box_purple'})
  event.remove({id: 'ironshulkerbox:silver_shulker_box_blue'})
  event.remove({id: 'ironshulkerbox:silver_shulker_box_brown'})
  event.remove({id: 'ironshulkerbox:silver_shulker_box_green'})
  event.remove({id: 'ironshulkerbox:silver_shulker_box_red'})
  event.remove({id: 'ironshulkerbox:silver_shulker_box_black'})
  event.remove({input: 'ironshulkerbox:copper_shulker_box_white'})
  event.remove({input: 'ironshulkerbox:copper_shulker_box_orange'})
  event.remove({input: 'ironshulkerbox:copper_shulker_box_magenta'})
  event.remove({input: 'ironshulkerbox:copper_shulker_box_light_blue'})
  event.remove({input: 'ironshulkerbox:copper_shulker_box_yellow'})
  event.remove({input: 'ironshulkerbox:copper_shulker_box_lime'})
  event.remove({input: 'ironshulkerbox:copper_shulker_box_pink'})
  event.remove({input: 'ironshulkerbox:copper_shulker_box_gray'})
  event.remove({input: 'ironshulkerbox:copper_shulker_box_light_gray'})
  event.remove({input: 'ironshulkerbox:copper_shulker_box_cyan'})
  event.remove({input: 'ironshulkerbox:copper_shulker_box_purple'})
  event.remove({input: 'ironshulkerbox:copper_shulker_box_blue'})
  event.remove({input: 'ironshulkerbox:copper_shulker_box_brown'})
  event.remove({input: 'ironshulkerbox:copper_shulker_box_green'})
  event.remove({input: 'ironshulkerbox:copper_shulker_box_red'})
  event.remove({input: 'ironshulkerbox:copper_shulker_box_black'})
  event.remove({input: 'ironshulkerbox:silver_shulker_box_white'})
  event.remove({input: 'ironshulkerbox:silver_shulker_box_orange'})
  event.remove({input: 'ironshulkerbox:silver_shulker_box_magenta'})
  event.remove({input: 'ironshulkerbox:silver_shulker_box_light_blue'})
  event.remove({input: 'ironshulkerbox:silver_shulker_box_yellow'})
  event.remove({input: 'ironshulkerbox:silver_shulker_box_lime'})
  event.remove({input: 'ironshulkerbox:silver_shulker_box_pink'})
  event.remove({input: 'ironshulkerbox:silver_shulker_box_gray'})
  event.remove({input: 'ironshulkerbox:silver_shulker_box_light_gray'})
  event.remove({input: 'ironshulkerbox:silver_shulker_box_cyan'})
  event.remove({input: 'ironshulkerbox:silver_shulker_box_purple'})
  event.remove({input: 'ironshulkerbox:silver_shulker_box_blue'})
  event.remove({input: 'ironshulkerbox:silver_shulker_box_brown'})
  event.remove({input: 'ironshulkerbox:silver_shulker_box_green'})
  event.remove({input: 'ironshulkerbox:silver_shulker_box_red'})
  event.remove({input: 'ironshulkerbox:silver_shulker_box_black'})

  // Deleting metalbarrels barrel upgrades
  event.remove({id: 'metalbarrels:wood_to_copper'})
  event.remove({id: 'metalbarrels:copper_to_iron'})
  event.remove({id: 'metalbarrels:copper_to_silver'})
  event.remove({id: 'metalbarrels:copper_to_gold'})
  event.remove({id: 'metalbarrels:copper_to_diamond'})
  event.remove({id: 'metalbarrels:copper_to_obsidian'})
  event.remove({id: 'metalbarrels:copper_to_crystal'})
  event.remove({id: 'metalbarrels:wood_to_silver'})
  event.remove({id: 'metalbarrels:iron_to_silver'})
  event.remove({id: 'metalbarrels:silver_to_gold'})
  event.remove({id: 'metalbarrels:silver_to_diamond'})
  event.remove({id: 'metalbarrels:silver_to_obsidian'})
  event.remove({id: 'metalbarrels:silver_to_crystal'})

  // Deleting metalbarrels barrels
  event.remove({id: 'metalbarrels:copper_barrel'})
  event.remove({id: 'metalbarrels:silver_barrel'})
  event.remove({input: 'metalbarrels:copper_barrel'})
  event.remove({input: 'metalbarrels:silver_barrel'})

  //Deleting fluidtank tanks
  event.remove({id: 'fluidtank:tank_copper'})
  event.remove({id: 'fluidtank:tank_silver'})
  event.remove({id: 'fluidtank:tank_tin'})
  event.remove({id: 'fluidtank:tank_bronze'})
  event.remove({id: 'fluidtank:tank_lead'})
  event.remove({input: 'fluidtank:invisible_tank_copper'})
  event.remove({input: 'fluidtank:invisible_tank_silver'})
  event.remove({input: 'fluidtank:invisible_tank_tin'})
  event.remove({input: 'fluidtank:invisible_tank_bronze'})
  event.remove({input: 'fluidtank:invisible_tank_lead'})
  event.remove({id: 'fluidtank:creative'}) 
  */
})

onEvent('item.tags', event => {
  // Get the #forge:cobblestone tag collection and add Diamond Ore to it
  // event.get('forge:cobblestone').add('minecraft:diamond_ore')
  
  // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
  // event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})