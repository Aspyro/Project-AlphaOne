## Settings for recipes  
(recommended to put this in it's own server scripts file, like */kubejs/server_scripts/settings.js*) :
```Javascript
// Enable recipe logging, off by default
settings.logAddedRecipes = true 	// True = off ?
settings.logRemovedRecipes = true 	// True = off ?
// Enable skipped recipe logging, off by default
settings.logSkippedRecipes = false	// False = off ?
// Enable erroring recipe logging, on by default, recommended to be kept to true
settings.logErroringRecipes = true	// True = on ?
```

## Deleting recipes using KubeJS  
(in */kubejs/server_scripts/DeleteRecipes.js* file) :
```Javascript
onEvent('recipes', event => {
	// Change recipes here
	event.remove({}) // Deletes all recipes
	event.remove({id: 'minecraft:glowstone'}) // Removes data/minecraft/recipes/glowstone.json
	event.remove({input: '#forge:dusts/redstone'}) // Removes all recipes where input is Redstone Dust tag
	event.remove({output: '#minecraft:wool'}) // Removes all recipes where output is Wool tag
	event.remove({mod: 'quartzchests'}) // Remove all recipes from Quartz Chests mod
	event.remove({type: 'minecraft:campfire_cooking'}) // Remove all campfire cooking recipes
	event.remove({output: 'minecraft:cooked_chicken', type: 'minecraft:campfire_cooking'}) // You can combine filters, to create ANDk logic

})
```

## Hiding items from JEI using KubeJS  
(in */kubejs/client_scripts/HideItems.js file*) :
```Javascript
onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	event.hide('mod:item')
})
```
