console.info('Hide all the furnaces upgrades due to the Stone to Iron Furnace Upgrade getting in conflict with FastFurnace mod')

onEvent('jei.hide.items', event => {
  var IronFurnacesVanillaTierUpgrades = [
    'ironfurnaces:upgrade_iron',        // Stone to Iron Furnace Upgrade
    'ironfurnaces:upgrade_gold',        // Iron to Gold Furnace Upgrade
    'ironfurnaces:upgrade_diamond',     // Gold to Diamond Furnace Upgrade
    'ironfurnaces:upgrade_emerald',     // Diamond to Emeral Furnace Upgrade
    'ironfurnaces:upgrade_obsidian',    // Emerald to Obsidian Furnace Upgrade
    'ironfurnaces:upgrade_crystal',     // Diamond to Crystal Furnace Upgrade
    'ironfurnaces:upgrade_obsidian2',   // Crystal to Obsidian Furnace Upgrade
    'ironfurnaces:upgrade_netherite'    // Obsidian to Netherite Furnace Upgrade
  ]
  
  var IronFurnacesModdedTierUpgrades = [
    'ironfurnaces:upgrade_copper',      // Stone to Copper Furnace Upgrade
    'ironfurnaces:upgrade_silver',      // Copper to Silver Furnace Upgrade
    'ironfurnaces:upgrade_iron2',       // Copper to Iron Furnace Upgrade
    'ironfurnaces:upgrade_gold2',       // Silver to Gold Furnace Upgrade
    'ironfurnaces:upgrade_silver2'      // Iron to Silver Furnace Upgrade
  ]
  
  var AllIronFurnacesUpgrades = [
    IronFurnacesVanillaTierUpgrades,
    IronFurnacesModdedTierUpgrades
  ]
  
  AllIronFurnacesUpgrades.forEach(detailledArray => {
    detailledArray.forEach(element => {
      event.hide(element)     // Hides every element from JEI.
    })
  })
})
