// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

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

onEvent('jei.hide.items', event => {
  // Hide items in JEI here
  // event.hide('minecraft:cobblestone')

  ArrayOfAllArrays.forEach(detailledArray => {
		detailledArray.forEach(element => {
			event.hide(element);
		})
	});

  /*
  // Deleting ironfurnaces furnace upgrades
  event.hide('ironfurnaces:upgrade_iron')
  event.hide('ironfurnaces:upgrade_gold')
  event.hide('ironfurnaces:upgrade_iron2')
  event.hide('ironfurnaces:upgrade_gold2')
  event.hide('ironfurnaces:upgrade_diamond')
  event.hide('ironfurnaces:upgrade_emerald')
  event.hide('ironfurnaces:upgrade_obsidian')
  event.hide('ironfurnaces:upgrade_obsidian2')
  event.hide('ironfurnaces:upgrade_crystal')
  event.hide('ironfurnaces:upgrade_netherite')
  event.hide('ironfurnaces:upgrade_copper')
  event.hide('ironfurnaces:upgrade_silver')
  event.hide('ironfurnaces:upgrade_silver2')

  // Deleting ironfurnaces furnaces
  event.hide('ironfurnaces:copper_furnace')
  event.hide('ironfurnaces:silver_furnace')

  // Deleting ironfurnaces rainbow furnace related items
  event.hide('ironfurnaces:million_furnace')
  event.hide('ironfurnaces:rainbow_core')
  event.hide('ironfurnaces:rainbow_plating')
  event.hide('ironfurnaces:rainbow_coal')

  // Deleting ironchest chest upgrades
  event.hide('ironchest:wood_to_copper_chest_upgrade')
  event.hide('ironchest:copper_to_silver_chest_upgrade')
  event.hide('ironchest:copper_to_iron_chest_upgrade')
  event.hide('ironchest:silver_to_gold_chest_upgrade')

  // Deleting ironchest chests
  event.hide('ironchest:copper_chest')
  event.hide('ironchest:silver_chest')

  // Deleting ironshulkerboxes Shulker Box upgrades
  event.hide('ironshulkerbox:vanilla_to_copper_shulker_box_upgrade')
  event.hide('ironshulkerbox:copper_to_iron_shulker_box_upgrade')
  event.hide('ironshulkerbox:copper_to_silver_shulker_box_upgrade')
  event.hide('ironshulkerbox:silver_to_gold_shulker_box_upgrade')

  // Deleting ironshulkerboxes shulker boxes
  event.hide('ironshulkerbox:copper_shulker_box_white')
  event.hide('ironshulkerbox:copper_shulker_box_orange')
  event.hide('ironshulkerbox:copper_shulker_box_magenta')
  event.hide('ironshulkerbox:copper_shulker_box_light_blue')
  event.hide('ironshulkerbox:copper_shulker_box_yellow')
  event.hide('ironshulkerbox:copper_shulker_box_lime')
  event.hide('ironshulkerbox:copper_shulker_box_pink')
  event.hide('ironshulkerbox:copper_shulker_box_gray')
  event.hide('ironshulkerbox:copper_shulker_box_light_gray')
  event.hide('ironshulkerbox:copper_shulker_box_cyan')
  event.hide('ironshulkerbox:copper_shulker_box_purple')
  event.hide('ironshulkerbox:copper_shulker_box_blue')
  event.hide('ironshulkerbox:copper_shulker_box_brown')
  event.hide('ironshulkerbox:copper_shulker_box_green')
  event.hide('ironshulkerbox:copper_shulker_box_red')
  event.hide('ironshulkerbox:copper_shulker_box_black')
  event.hide('ironshulkerbox:silver_shulker_box_white')
  event.hide('ironshulkerbox:silver_shulker_box_orange')
  event.hide('ironshulkerbox:silver_shulker_box_magenta')
  event.hide('ironshulkerbox:silver_shulker_box_light_blue')
  event.hide('ironshulkerbox:silver_shulker_box_yellow')
  event.hide('ironshulkerbox:silver_shulker_box_lime')
  event.hide('ironshulkerbox:silver_shulker_box_pink')
  event.hide('ironshulkerbox:silver_shulker_box_gray')
  event.hide('ironshulkerbox:silver_shulker_box_light_gray')
  event.hide('ironshulkerbox:silver_shulker_box_cyan')
  event.hide('ironshulkerbox:silver_shulker_box_purple')
  event.hide('ironshulkerbox:silver_shulker_box_blue')
  event.hide('ironshulkerbox:silver_shulker_box_brown')
  event.hide('ironshulkerbox:silver_shulker_box_green')
  event.hide('ironshulkerbox:silver_shulker_box_red')
  event.hide('ironshulkerbox:silver_shulker_box_black')

  // Deleting metalbarrels barrel upgrades
  event.hide('metalbarrels:wood_to_copper')
  event.hide('metalbarrels:copper_to_iron')
  event.hide('metalbarrels:copper_to_silver')
  event.hide('metalbarrels:copper_to_gold')
  event.hide('metalbarrels:copper_to_diamond')
  event.hide('metalbarrels:copper_to_obsidian')
  event.hide('metalbarrels:copper_to_crystal')
  event.hide('metalbarrels:wood_to_silver')
  event.hide('metalbarrels:iron_to_silver')
  event.hide('metalbarrels:silver_to_gold')
  event.hide('metalbarrels:silver_to_diamond')
  event.hide('metalbarrels:silver_to_obsidian')
  event.hide('metalbarrels:silver_to_crystal')

  // Deleting metalbarrels barrels
  event.hide('metalbarrels:copper_barrel')
  event.hide('metalbarrels:silver_barrel')

  //Deleting fluidtank tanks
  event.hide('fluidtank:tank_copper')
  event.hide('fluidtank:tank_silver')
  event.hide('fluidtank:tank_tin')
  event.hide('fluidtank:tank_bronze')
  event.hide('fluidtank:tank_lead')
  event.hide('fluidtank:invisible_tank_copper')
  event.hide('fluidtank:invisible_tank_silver')
  event.hide('fluidtank:invisible_tank_tin')
  event.hide('fluidtank:invisible_tank_bronze')
  event.hide('fluidtank:invisible_tank_lead')
  event.hide('fluidtank:creative')
  */

})