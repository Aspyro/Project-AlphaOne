onEvent('recipes', event => {

  const dustReplace = (first, second, tag) => {
    event.replaceOutput({}, first, second)
    event.replaceInput({}, tag, second)
    event.replaceInput({}, first, second)
  }

  dustReplace('grinder:gold_dust', 'matex:dustgold', '#forge:dusts/gold')  // Gold Dust
  dustReplace('grinder:copper_dust', 'matex:dustcopper', '#forge:dusts/copper')  // Copper Dust
  dustReplace('grinder:tin_dust', 'matex:dusttin', '#forge:dusts/tin')    // Tin Dust
  dustReplace('grinder:lead_dust', 'matex:dustlead', '#forge:dusts/lead')  // Lead Dust
  dustReplace('grinder:silver_dust', 'matex:dustsilver', '#forge:dusts/silver')  // Silver Dust
  dustReplace('grinder:osmium_dust', 'matex:dustosmium', '#forge:dusts/silver')  // Osmium Dust
})
