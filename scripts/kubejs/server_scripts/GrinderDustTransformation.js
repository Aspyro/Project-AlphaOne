onEvent('recipes', event => {

  const dustReplace = (first, second) => {
    event.replaceOutput({}, first, second)
    event.replaceInput({}, first, second)
  }

  dustReplace('grinder:gold_dust', 'matex:dustgold')  // Gold Dust
  dustReplace('grinder:copper_dust', 'matex:dustcopper')  // Copper Dust
  dustReplace('grinder:tin_dust', 'matex:dusttin')    // Tin Dust
  dustReplace('grinder:lead_dust', 'matex:dustlead')  // Lead Dust
  dustReplace('grinder:aluminum_dust', 'matex:dustaluminium') // Alumin(i)um Dust
  dustReplace('grinder:silver_dust', 'matex:dustsilver')  // Silver Dust
  dustReplace('grinder:osmium_dust', 'matex:dustosmium')  // Osmium Dust
  dustReplace('grinder:zinc_dust', 'matex:dustzinc')  // Zinc Dust
  dustReplace('grinder:tungsten_dust', 'matex:dusttungsten')  // Tungsten Dust
  dustReplace('grinder:platinum_dust', 'matex:dustplatinum')  // Platinum Dust
  dustReplace('grinder:nickel_dust', 'matex:dustnickel')  // Nickel Dust
  dustReplace('grinder:uranium_dust', 'matex:dusturanium')  // Uranium Dust
  
})
