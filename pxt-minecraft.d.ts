// Your assistant in Minecraft to help you get things done.
declare namespace agent {
  /**
   * Requests the agent to move in the specified direction
   * @param direction the direction in which the agent will move
   * @param blocks how far the agent should move, in blocks, eg: 1
   */
  //% help=agent/move
  //% blockId=minecraftAgentMove block=agent move %direction|by %blocks
  function move(direction: SixDirection, blocks: number): void

  /**
   * Turns the agent in the specified direction
   * @param direction the turn direction, eg: TurnDirection.Left
   */
  //% help=agent/turn
  //% blockId=minecraftAgentTurn block=agent turn %direction
  function turn(direction: TurnDirection): void

  /**
   * Returns the agent's position in world coordinates
   */
  //% help=agent/get-position
  //% blockId=minecraftAgentGetPosition block=agent position
  function getPosition(): Position

  /**
   * Returns the agent's orientation, in degrees
   */
  //% help=agent/get-orientation
  //% blockId=minecraftAgentGetOrientation block=agent orientation
  function getOrientation(): number

  /**
   * Places an item or block in the world from the agent's currently selected inventory slot
   * @param direction the direction in which to place the item
   */
  //% help=agent/place
  //% blockId=minecraftAgentPlace block=agent place %direction
  function place(direction: SixDirection): void

  /**
   * Interacts with an item
   * @param direction the direction in which to place the item
   */
  //% help=agent/interact
  //% blockId=minecraftAgentInteract block=agent interact $direction
  function interact(direction: SixDirection): void

  /**
   * Detects if there is a block next to the agent in the specified direction
   * @param kind what the agent should attempt to detect
   * @param direction the direction in which to perform the detection
   */
  //% help=agent/detect
  //% blockId=minecraftAgentDetect block=agent detect %kind|%direction
  function detect(kind: AgentDetection, direction: SixDirection): boolean

  /**
   * Commands the agent to destroy a block in the given direction
   * @param direction the direction in which the agent will destroy a block
   */
  //% help=agent/destroy
  //% blockId=minecraftAgentCommandDestroy block=agent destroy|%direction
  function destroy(direction: SixDirection): void

  /**
   * Commands the agent to till soil in the given direction
   * @param direction the direction in which to till the soil
   */
  //% help=agent/till
  //% blockId=minecraftAgentCommandTill block=agent till|%direction
  function till(direction: SixDirection): void

  /**
   * Commands the agent to attack in the given direction
   * @param direction the direction in which to attack
   */
  //% help=agent/attack
  //% blockId=minecraftAgentCommandAttack block=agent attack|%direction
  function attack(direction: SixDirection): void

  /**
   * Commands the agent to drop its entire inventory in the given direction
   * @param direction the direction in which to drop items
   */
  //% help=agent/drop-all
  //% blockId=minecraftAgentCommandDropAll block=agent drop all|%direction
  function dropAll(direction: SixDirection): void

  /**
   * Sets the agent's active inventory slot
   * @param slot the slot index between 1 and 27, eg: 1
   */
  //% help=agent/set-slot
  //% blockId=minecraftAgentSetSlot block=agent set active slot %slot
  function setSlot(slot: number): void

  /**
   * Puts the specified block or item in the agent's inventory
   * @param blockOrItem the block or item to give
   * @param count the amount to give, eg: 1
   * @param slot the slot index between 1 and 27, eg: 1
   */
  //% help=agent/set-item
  //% blockId=minecraftAgentSetItem block=agent set block or item $blockOrItem|count $count|in slot $slot
  function setItem(blockOrItem: number, count: number, slot: number): void

  /**
   * Controls which assists are enabled for the agent
   * @param assist the super power of the agent!
   * @param on whether the assist is enabled or not
   */
  //% help=agent/set-assist
  //% blockId=minecraftAgentChangeAssist block=agent %assist|%on
  function setAssist(assist: AgentAssist, on: boolean): void

  /**
   * Commands the agent to Collect a block or item of the specified type
   * @param block the type of the block or item to collect
   */
  //% help=agent/collect
  //% blockId=minecraftAgentCollect block=agent collect %block=minecraftItem
  function collect(block: number): void

  /**
   * Commands the agent to collect all nearby blocks and items
   */
  //% help=agent/collect-all
  //% blockId=minecraftAgentCollectAll block=agent collect all
  function collectAll(): void

  /**
   * Inspects a block in the specified direction and returns the block ID or data
   * @param kind the desired result type for the detection: block id or data
   * @param direction the direction in which to inspect
   */
  //% help=agent/inspect
  //% blockId=minecraftAgentInspect block=agent inspect %kind|%direction
  function inspect(kind: AgentInspection, direction: SixDirection): number

  /**
   * Transfers items from an inventory slot to another slot
   * @param quantity the quantity of items to transfer, eg: 1
   * @param sourceSlot the source slot index, from 1 to 27, eg: 1
   * @param destinationSlot the inventory slot in which to drop the items, from 1 to 27, eg:2
   */
  //% help=agent/transfer
  //% blockId=minecraftAgentTransfer block=agent transfer|amount %quantity|from slot %srcSlot|to slot %destinationSlot
  function transfer(quantity: number, sourceSlot: number, destinationSlot: number): void

  /**
   * Drops an item from the inventory
   * @param slot the slot from which the item will be dropped, from 1 to 27, eg: 1
   * @param direction the direction in which to drop the item
   * @param quantity the quantity of items to drop, eg: 1
   */
  //% help=agent/drop
  //% blockId=minecraftAgentDrop block=agent drop %direction|from slot %slot|amount %amount
  function drop(direction: SixDirection, slot: number, quantity: number): void

  /**
   * Gets the number of items in the specified slot
   * @param slot the slot index for which to count items, from 1 to 27, eg: 1
   */
  //% help=agent/get-item-count
  //% blockId=minecraftAgentGetItemCount block=agent get item count from slot %slot
  function getItemCount(slot: number): number

  /**
   * Gets the remaining space in the specified slot
   * @param slot the slot index for which to count the remaining space, from 1 to 27, eg: 1
   */
  //% help=agent/get-item-space
  //% blockId=minecraftAgentGetItemSpace block=agent get remaining space in slot %slot
  function getItemSpace(slot: number): number

  /**
   * Gets the ID of the item in the specified inventory slot of the agent
   * @param slot the slot index for which to return the item info, from 1 to 27, eg: 1
   */
  //% help=agent/get-item-detail
  //% blockId=minecraftAgentGetItemDetail block=agent get item id from slot %slot
  function getItemDetail(slot: number): number

  /**
   * Teleports the agent to the player
   */
  //% help=agent/teleport-to-player
  //% blockId=minecraftAgentTeleport block=agent teleport to player
  function teleportToPlayer(): void

  /**
   * Teleports the agent to the specified coordinates facing the specified orientation
   * @param pos the position to teleport the agent to
   * @param dir the compass direction the agent should face after teleporting
   */
  //% help=agent/teleport
  //% blockId=minecraftAgentTeleportPos block=agent teleport to $pos=minecraftCreatePosition|facing $dir
  function teleport(pos: Position, dir: CompassDirection): void

}

// Everything for adding, inspecting, and changing blocks in the world.
declare namespace blocks {
  /**
   * Places a block in the world
   * @param block the block to place
   * @param pos the position at which to place the block
   */
  //% help=blocks/place
  //% blockId=minecraftPlace block=place %block=minecraftBlock|at %pos=minecraftCreatePosition
  function place(block: number, pos: Position): void

  /**
   * Fills a volume between two positions
   * @param block the block to fill the volume with
   * @param from the first corner of the cubic region
   * @param to the opposite corner of the cubic region
   * @param operator handling for existing blocks in the specified region
   */
  //% help=blocks/fill
  //% blockId=minecraftFill block=fill with %block=minecraftBlock|from %from=minecraftCreatePosition|to %to=minecraftCreatePosition|%operator
  function fill(block: number, from: Position, to: Position, operator: FillOperation): void

  /**
   * Runs code when a certain type of block is placed
   * @param block the type of block that should trigger this code when placed
   */
  //% help=blocks/on-block-placed
  //% blockId=minecraftOnBlockPlaced block=on %block=minecraftBlock|placed
  function onBlockPlaced(block: number, handler: () => void): void

  /**
   * Runs code when a certain type of block is mined or broken
   * @param block the type of block that should trigger this code when broken
   */
  //% help=blocks/on-block-broken
  //% blockId=minecraftOnBlockBroken block=on %block=minecraftBlock|broken
  function onBlockBroken(block: number, handler: () => void): void

  /**
   * Replaces all the blocks of a certain type inside the specified region with a new block type
   * @param newblock the new block type that will replace existing blocks
   * @param oldblock the block type that will be replaced by the new block type
   * @param from the first corner of the cubic region
   * @param to the opposite corner of the cubic region
   */
  //% help=blocks/replace
  //% blockId=minecraftReplace block=replace with %newblock=minecraftBlock|when block is %oldblock=minecraftBlock|from %from=minecraftCreatePosition|to %to=minecraftCreatePosition
  function replace(newblock: number, oldblock: number, from: Position, to: Position): void

  /**
   * Clones a cubic region into a different location
   * @param begin the first corner of the cubic region
   * @param end the opposite corner of the cubic region
   * @param destination the first corner of the destination region
   * @param mask how to handle air blocks
   * @param mode how to handle the cloned region
   */
  //% help=blocks/clone
  //% blockId=minecraftClone block=clone from %begin=minecraftCreatePosition|to %end=minecraftCreatePosition|into %destination=minecraftCreatePosition|mask %mask|mode %mode
  function clone(begin: Position, end: Position, destination: Position, mask: CloneMask, mode: CloneMode): void

  /**
   * Clones a cubic region into a different location, if the blocks in the region match a certain block type
   * @param begin the first corner of the cubic region
   * @param end the opposite corner of the cubic region
   * @param destination the first corner of the destination region
   * @param block the block type to look for when cloning
   * @param mode how to handle the cloned region
   */
  //% help=blocks/clone-filtered
  //% blockId=minecraftCloneFiltered block=clone from %begin=minecraftCreatePosition|to %end=minecraftCreatePosition|into %destination=minecraftCreatePosition|filtered by %block=minecraftBlock|mode %mode
  function cloneFiltered(begin: Position, end: Position, destination: Position, block: number, mode: CloneMode): void

  /**
   * Tests whether the block at the specified coordinate is of a certain type
   * @param block the type of the block to test for
   * @param pos the coordinates where the block should be
   */
  //% help=blocks/test-for-block
  //% blockId=minecraftTestForBlock block=test for %block=minecraftBlock|at %pos=minecraftCreatePosition
  function testForBlock(block: number, pos: Position): boolean

  /**
   * Tests whether the blocks in two regions match.
   */
  function testForBlocks(begin: Position, end: Position, destination: Position, mask: TestForBlocksMask): boolean

  /**
   * Represents a block or item from the game with a data value
   * @param b the block or item
   * @param data the data value for the block or item
   */
  //% help=blocks/block-with-data
  //% blockId=minecraftBlockData block=%block=minecraftBlock|with data %data
  function blockWithData(b: number, data: number): number

  /**
   * Represents a block or item from the game by its value ID
   * @param id the ID of the block or item from the game
   */
  //% help=blocks/block-by-id
  //% blockId=minecraftBlockID block=block by ID %id
  function blockById(id: number): number

  /**
   * Represents a block or item from the game by its code name
   * @param name the name of the block, eg: "stone"
   */
  //% help=blocks/block-by-name
  //% blockId=minecraftBlockName block=block by name %name
  function blockByName(name: string): number

  /**
   * Represents a colored block from the game
   * @param type the type of block, either wool or concrete
   * @param color the color of the block
   */
  //% help=blocks/color-to-block
  //% blockId=minecraftBlocksColorToBlock block=%type|of color %color=minecraftBlocksColor
  function colorToBlock(type: ColoredBlock, color: number): number

  /**
   * Returns the color value of known block colors
   * @param color the color
   */
  //% help=blocks/color
  //% blockId=minecraftBlocksColor block=%color
  function color(color: BlockColor): number

  /**
   * Creates a repeater in a particular state
   * @param direction the direction which the repeater is facing
   * @param delay the delay for the repeater, in game ticks
   */
  //% help=blocks/repeater
  //% blockId=minecraftBlockRepeater block=repeater|facing %direction|delay %ticks
  function repeater(direction: CompassDirection, delay: number): number

  /**
   * Creates a lever in a particular state
   * @param position the position state of the lever
   */
  //% help=blocks/lever
  //% blockId=minecraftBlockLever block=lever %position
  function lever(position: LeverPosition): number

  /**
   * Creates a comparator in a particular state
   * @param direction the direction which the comparator is facing
   * @param mode the comparison mode of the comparator
   */
  //% help=blocks/comparator
  //% blockId=minecraftBlockComparator block=comparator facing %direction|mode %mode
  function comparator(direction: CompassDirection, mode: ComparatorMode): number

}

// Commands to control the game mode, weather, time, and change the rules.
declare namespace gameplay {
  /**
   * Change the game mode for the selected players
   * @param mode the desired game mode
   * @param player a selector to determine which players to change the game mode for
   */
  //% help=gameplay/set-game-mode
  //% blockId=minecraftGamemode block=change game mode to %mode|for %player=minecraftTarget
  function setGameMode(mode: GameMode, player: TargetSelector): void

  /**
   * Set the current time of day to a preset time or a custom hour, in game ticks
   * @param time the desired time of day, eg: DayTime.Day
   */
  //% help=gameplay/time-set
  //% blockId=minecraftTimeSet block=time set %time=minecraftTime
  function timeSet(time: number): void

  /**
   * Add ticks to the current time of day
   * @param amount the number of ticks to add to the current time of day, eg: 100
   */
  //% help=gameplay/time-add
  //% blockId=minecraftTimeAdd block=time add %amount
  function timeAdd(amount: number): void

  /**
   * Get the current time of day, in game ticks
   * @param query the type of time to query
   */
  //% help=gameplay/time-query
  //% blockId=minecraftTimeQuery block=time query %query
  function timeQuery(query: TimeQuery): number

  /**
   * Get the current time of day, in game ticks
   * @param query the type of time to query
   */
  //% help=gameplay/daylight-time-query
  //% blockId=minecraftDaylightTimeQuery block=is time $query
  function isDaylightTime(query: DayTime): boolean

  /**
   * Represents a preset time of the day
   * @param time a preset time, eg: DateTime.Day
   */
  //% blockId=minecraftTime block=%time
  function time(time: DayTime): number

  /**
   * Change the current weather.
   * @param weather the desired weather
   */
  //% help=gameplay/set-weather
  //% blockId=minecraftWeather block=weather %weather
  function setWeather(weather: Weather): void

  /**
   * Starts raining if it isn't, or stops raining if it is.
   */
  //% help=gameplay/toggle-downfall
  //% blockId=minecraftToggleDownfall block=toggle downfall
  function toggleDownfall(): void

  /**
   * Give experience points to the selected players
   * @param amount the number of experience points to give, eg: 10
   * @param target a selector to determine which players to give experience points to
   */
  //% help=gameplay/xp
  //% blockId=minecraftXp block=xp give %amount|to %target=minecraftTarget
  function xp(amount: number, target: TargetSelector): void

  /**
   * Enable or disable a game rule
   * @param rule the game rule to change
   * @param enabled whether the specified rule is enabled or not
   */
  //% help=gameplay/set-game-rule
  //% blockId=minecraftGameRule block=change game rule %rule|to %enabled
  function setGameRule(rule: GameRule, enabled: boolean): void

  /**
   * Change whether the world can be altered or not
   * @param enabled true if modifying the world is allowed, false if not
   */
  //% help=gameplay/immutable-world
  //% blockId=minecraftImmutableWorld block=immutable world %enabled
  function immutableWorld(enabled: boolean): void

  /**
   * Changes the game difficulty
   * @param difficulty the new difficulty
   */
  //% help=gameplay/set-difficulty
  //% blockId=setDifficulty block=set difficulty to %difficulty
  function setDifficulty(difficulty: GameDifficulty): void

  /**
   * Shows a title and subtitle to the selected targets
   * @param target the players and entities to select
   * @param title the large title to display
   * @param subTitle the subtitle to display
   */
  //% help=gameplay/title
  //% blockId=minecraftTitle block=show %target=minecraftTarget|title %title|subtitle %subTitle
  function title(target: TargetSelector, title: string, subTitle: string): void

  /**
   * Closes the chat window if it is open (EE only)
   */
  function dismissChat(): void

}

// Creates the specified text in the game world, made of the specified block, at the given location
declare namespace blocks {
  /**
   * Creates the specified text in the game world, made of the specified block, at the given location
   * @param text the text to print in the world, eg: "HELLO"
   * @param block the block type that will be used to create the text
   * @param position the coordinates where the text will be printed in the world
   * @param direction the axis along which the text will be printed
   */
  //% help=blocks/print
  //% blockId=minecraftPrintAsync block=print %text|of %block=minecraftBlock|at %position=minecraftCreatePosition|along %direction
  function print(text: string, block: number, position: Position, direction: CompassDirection): void

}

declare namespace loops {
  /**
   * Repeat the code forever in the background. On each iteration, allow other code to run.
   * @param body code to repeat forever
   */
  //% help=loops/forever
  //% blockId=device_forever block=forever
  function forever(body: () => void): void

  /**
   * Pause for the specified time in milliseconds
   * @param ms how long to pause for, eg: 100, 200, 500, 1000, 2000
   */
  //% help=loops/pause
  //% blockId=device_pause block=pause (ms) %pause
  function pause(ms: number): void

  /**
   * Run this code in parallel with the current code
   */
  //% help=loops/run-in-background
  //% blockId=fork block=run in background
  function runInBackground(handler: () => void): void

}

// Creatures that live in the Minecraft world.
declare namespace mobs {
  /**
   * Summons a creature at a given location
   * @param mob the type of creature to summon
   * @param destination the coordinates at which to summon the creature
   */
  //% help=mobs/spawn
  //% blockId=minecraftSummon block=spawn %entity=minecraftAnimal|at %destination=minecraftCreatePosition
  function spawn(mob: number, destination: Position): void

  /**
   * Runs code when a creature of a certain type is killed
   * @param mob the type of creature
   */
  //% help=mobs/on-mob-killed
  //% blockId=minecraftMobKilled block=on %mob=minecraftAnimal|killed
  function onMobKilled(mob: number, handler: () => void): void

  /**
   * Applies a status effect to the specified target
   * @param target a target selector that determines which entity will receive the effect
   * @param effect the effect to apply
   * @param duration the duration of the effect
   * @param amplifier the amplifier of the effect
   */
  //% blockId=minecraftEffect block=apply %effect to %target=minecraftTarget||duration %duration amplifier %amplifier
  function effect(effect: Effect, target: TargetSelector, duration: number, amplifier: number): void

  /**
   * Applies a status effect to the specified target
   * @param target a target selector that determines which entity will receive the effect
   * @param effect the effect to apply
   * @param duration the duration of the effect
   * @param amplifier the amplifier of the effect
   */
  //% help=mobs/apply-effect
  //% blockId=minecraftApplyEffect block=apply %effect=minecraftEffectField|to %target=minecraftTarget|duration %duration amplifier %amplifier
  function applyEffect(effect: number, target: TargetSelector, duration: number, amplifier: number): void

  /**
   * Clears all status effects from the specified target
   * @param target a target selector that determines which entity will be cleared of effects
   */
  //% help=mobs/clear-effect
  //% blockId=minecraftClearEffect block=clear all effects from %target=minecraftTarget
  function clearEffect(target: TargetSelector): void

  /**
   * Gives blocks or items from the game to the specified players
   * @param target a target selector that determines which players will receive the block or item
   * @param block the block or item to give
   * @param amount the quantity to give, eg: 1
   */
  //% help=mobs/give
  //% blockId=minecraftGive block=give %target=minecraftTarget|block or item %block=minecraftBlock|amount %amount
  function give(target: TargetSelector, block: number, amount: number): void

  /**
   * Teleports entities to another location
   * @param target a target selector that determines which entities will be teleported
   * @param destination the coordinates where the selected entities will be teleported to
   */
  //% help=mobs/teleport-to-position
  //% blockId=minecraftTeleport block=teleport %target=minecraftTarget|to %destination=minecraftCreatePosition
  function teleportToPosition(target: TargetSelector, destination: Position): void

  /**
   * Teleports entities to a player
   * @param target a target selector that determines which entities will be teleported
   * @param destination a target selector that determines which player the entities will be teleported to
   */
  //% help=mobs/teleport-to-player
  //% blockId=minecraftTeleportToPlayer block=teleport %target=minecraftTarget|to %destination=minecraftTarget
  function teleportToPlayer(target: TargetSelector, destination: TargetSelector): void

  /**
   * Applies a certain enchantment to the specified targets
   * @param target a target selector that determines which players will receive the enchantment
   * @param spell the code name of the enchantment, eg: "infinity"
   * @param level the strength level of the enchantment, eg: 1
   */
  //% help=mobs/enchant
  //% blockId=minecraftEnchant block=enchant %target=minecraftTarget|with %spell|of level %level
  function enchant(target: TargetSelector, spell: string, level: number): void

  /**
   * Kills the selected entities
   * @param target a target selector that determines which entities will be killed
   */
  //% help=mobs/kill
  //% blockId=minecraftKill block=kill %target=minecraftTarget
  function kill(target: TargetSelector): void

  /**
   * Executes a command as other targets
   * @param target a target selector that determines which entities will execute the command
   * @param position the coordinates from which to run the command
   * @param command the full command which the selected targets will execute, eg: "say Hi!"
   */
  //% help=mobs/execute
  //% blockId=minecraftExecuteAsOther block=execute as %target=minecraftTarget|at %position=minecraftCreatePosition|command %command
  function execute(target: TargetSelector, position: Position, command: string): void

  /**
   * Queries information about a given target
   * @param target a target selector that determines the entity you're querying
   */
  function _queryTargetCore(target: TargetSelector): {}

  /**
   * Executes a command if a certain block type is detected at the specified position
   * @param detectPosition the position at which to detect the block
   * @param detectBlock the block type to test for
   * @param command the full command which the selected targets will execute if the specified block is successfully detected, eg: "say Hi!"
   */
  //% help=mobs/execute-detect
  //% blockId=minecraftExecuteDetect block=detect block %block=minecraftBlock|at %detectPosition=minecraftCreatePosition|if found, run command %command
  function executeDetect(detectBlock: number, detectPosition: Position, command: string): void

  /**
   * Represents a monster from the game
   * @param name the type of the monster
   */
  //% help=mobs/monster
  //% blockId=minecraftMonster block=monster %name
  function monster(name: MonsterMob): number

}

declare type QueryTargetResult = {
  dimension: number;
  yRot: number;
  uniqueId: string;
  position: { x: number; y: number; z: number; };
}

// Give commands, communicate, and respond to events that happen in the game
declare namespace player {
  /**
   * Returns the name of the current player (you)
   */
  //% help=player/name
  //% blockId=minecraftMyName block=player name
  function name(): string

  /**
   * Teleports the current player to another position
   * @param to the destination position
   */
  //% help=player/teleport
  //% blockId=minecraftPlayerTeleport block=teleport to %to=minecraftCreatePosition
  function teleport(to: Position): void

  /**
   * Gets the last message, if any
   */
  function message(): string

  /**
   * Runs code when another player whispers you a certain message
   * @param command the chat keyword that will be associated with this command (``*`` for all messages), eg: "jump"
   */
  //% help=player/on-tell-command
  //% blockId=minecraftOnTellCommand block=on tell command %command
  function onTellCommand(command: string, handler: () => void): void

  /**
   * Executes a chat command in your code
   * @param command the chat command to run, eg: "jump"
   */
  //% help=player/run-chat-command
  //% blockId=minecraftRunChatCommand block=run chat command %command
  function runChatCommand(command: string): void

  /**
   * Executes a chat command in your code with arguments
   * @param command the chat command to run, eg: "jump"
   * @param arg a string containing all the arguments you wish to give to the chat command
   */
  //% help=player/run-chat-command-with-args
  //% blockId=minecraftRunChatCommandArgs block=run chat command %command|with %arg
  function runChatCommandWithArguments(command: string, arg: string): void

  /**
   * Runs code when the current player dies
   */
  //% help=player/on-died
  //% blockId=minecraftPlayerDied block=on player died
  function onDied(handler: () => void): void

  /**
   * Runs code when the current player travels in a certain way
   * @param method the travel method
   */
  //% help=player/on-travelled
  //% blockId=minecraftPlayerTravelled block=on player %method
  function onTravelled(method: TravelMethod, handler: () => void): void

  /**
   * Runs code when the current player gets teleported
   */
  //% help=player/on-teleported
  //% blockId=minecraftPlayerOnTeleported block=on player teleported
  function onTeleported(handler: () => void): void

  /**
   * Runs code when the current player bounces on a slime
   */
  //% help=player/on-bounced
  //% blockId=minecraftPlayerBounced block=on player bounced
  function onBounced(handler: () => void): void

  /**
   * Runs code when a picture is taken with a camera
   */
  //% help=player/on-camera-used
  //% blockId=minecraftOnCameraUsed block=on camera used
  function onCameraUsed(handler: () => void): void

  /**
   * Runs code when the current player shoots an arrow
   */
  //% help=player/on-arrow-shot
  //% blockId=minecraftOnArrowShot block=on arrow shot
  function onArrowShot(handler: () => void): void

  /**
   * Returns the world position of the current player
   */
  //% help=player/position
  //% blockId=minecraftMyPosition block=player world position
  function position(): Position

  /**
   * Executes a game command as the current player
   * @param command the slash command to execute (you do not have to put the leading ``/``), eg: "say Hi!"
   */
  //% help=player/execute
  //% blockId=minecraftExecute block=execute %command
  function execute(command: string): void

  /**
   * Runs code when a keyword is typed in the chat
   * @param command the chat keyword that will be associated with this command (``*`` for all messages), eg: "jump"
   */
  function onChatCommandCore(command: string, handler: () => void): void

  /**
   * Runs code when an item is used
   */
  //% help=player/on-item-used
  //% blockId=minecraftOnItemInteracted block=on $item|used
  function onItemInteracted(item: number, handler: () => void): void

  /**
   * Gets the specified argument from the latest player chat message
   * @param index 
   */
  function getChatArg(index: number): string

  /**
   * Gets the arguments for the specified command
   * @param command the chat command for which to get the args
   */
  function getChatArgs(command: string): {}

  /**
   * Displays a chat command help message in the game chat. * @param helpStr The formatted syntax of the command
   */
  function chatCommandSyntaxError(helpStr: string): void

  /**
   * Displays an error in the game chat * @param msg The error to display in the game chat
   */
  function errorMessage(msg: string, multiline: boolean): void

}

// World and relative position operators
declare namespace positions {
  /**
   * Creates a new position by adding the two specified positions
   * @param p1 the first position to add
   * @param p2 the second position to add
   */
  //% help=positions/add
  //% blockId=minecraftAddPosition block=%p1=minecraftCreatePosition|+ %p2=minecraftCreatePosition
  function add(p1: Position, p2: Position): Position

  /**
   * Creates a new relative position: ~East/West, ~up/down, ~South/North
   * @param x the East (+x) or West (-x) coordinate, in blocks
   * @param y the up (+y) or down (-y) coordinate, in blocks
   * @param z the South (+z) or North (-z) coordinate, in blocks
   */
  //% help=positions/create
  //% blockId=minecraftCreatePositionInternal block=~%x|~%y|~%z
  function create(x: number, y: number, z: number): Position

  /**
   * Creates a new local position: ~left/right, ~up/down, ~forwards/backwards
   * @param x the left (+x) or right (-x) coordinate, in blocks
   * @param y the up (+y) or down (-y) coordinate, in blocks
   * @param z the forwards (+z) or backwards (-z) coordinate, in blocks
   */
  //% help=positions/create-local
  function createLocal(x: number, y: number, z: number): Position

  /**
   * Creates a new world position: East/West, up/down, South/North
   * @param x the East (+x) or West (-x) coordinate, in blocks
   * @param y the up (+y) or down (-y) coordinate, in blocks
   * @param z the South (+z) or North (-z) coordinate, in blocks
   */
  //% help=positions/create-world
  //% blockId=minecraftCreateWorldInternal block=world %x|%y|%z
  function createWorld(x: number, y: number, z: number): Position

  /**
   * Creates a new position with a mix of relative and absolute coordinates, or local coordinates
   * @param x the East (+x) or West (-x) coordinate, in blocks
   * @param y the up (+y) or down (-y) coordinate, in blocks
   * @param z the South (+z) or North (-z) coordinate, in blocks
   */
  function createHybrid(xRaw: string, yRaw: string, zRaw: string): Position

  /**
   * Picks a random position within the specified cubic region
   * @param p1 the position of the first corner of the cubic region
   * @param p2 the position of the opposite corner of the cubic region
   */
  //% help=positions/random
  //% blockId=minecraftPosRandomInternal block=pick random position|from %p1=minecraftCreatePosition|to %p2=minecraftCreatePosition
  function random(p1: Position, p2: Position): Position

  /**
   * Finds the ground under the given position and returns the coordinates of the next air block just above it. If the given block is solid, the next air block underneath is found, and the scan starts from there. Liquids are considered solid.
   * @param pos the position under which to find the ground
   */
  //% help=positions/ground-position
  //% blockId=minecraftNextSolid block=ground at $pos=minecraftCreatePosition
  function groundPosition(pos: Position): Position

}

// A world coordinate that may be relative (~) or local (^) to the player position.
declare type Position = {
  /**
   * Returns a string representation of this position
   */
  //% help=positions/to-string
  //% blockId=minecraftPositionToString block=%position|to string
  toString(): string

  /**
   * Adds the offset and returns a new position
   */
  add(offset: Position): Position

  /**
   * Creates a new world position by converting this position to a world position
   */
  //% help=positions/to-world
  //% blockId=minecraftPositionToWorld block=%position|to world
  toWorld(): Position

  /**
   * Gets the value of the specified coordinate: x, y or z
   * @param direction the axis for which to return the coordinate value
   */
  //% help=positions/get-value
  //% blockId=minecraftPosGet block=%position|get value of %direction
  getValue(direction: Axis): number

  /**
   * Gets a value that indicates if the coordinate is relative to the user
   */
  isRelative(direction: Axis): boolean

  /**
   * Returns a position moved by the given blocks
   */
  move(direction: CardinalDirection, blocks: number): Position

}

// Selects a set of players or mobs
declare namespace mobs {
  /**
   * Selects a set of players or mobs
   * @param kind the type of entities that will be selected
   */
  //% help=mobs/selectors/target
  //% blockId=minecraftTarget block=%kind
  function target(kind: TargetSelectorKind): TargetSelector

  /**
   * Selects targets near a given position
   * @param target the type of entities that will be selected
   * @param pos the position near which to select targets
   * @param radius the distance (in blocks) from the specified position within which targets will be selected, eg: 5
   */
  //% help=mobs/selectors/near
  //% blockId=minecraftTargetNear block=%target=minecraftTarget|near to %pos=minecraftCreateWorldPosition|within radius %radios
  function near(target: TargetSelector, pos: Position, radius: number): TargetSelector

  /**
   * Selects all mobs (animals or monsters) of a given type
   * @param type the type of mob to select
   */
  //% help=mobs/selectors/entities-by-type
  //% blockId=minecraftTargetSelectByType block=all %type=minecraftAnimal
  function entitiesByType(type: number): TargetSelector

  /**
   * Selects the player with the given name
   * @param name the name of the player to select. eg: name
   */
  //% help=mobs/selectors/player-by-name
  //% blockId=minecraftTargetSelectName block=player named %name
  function playerByName(name: string): TargetSelector

  /**
   * Selects all players in the given game mode
   * @param mode the game mode in which all players will be selected
   */
  //% help=mobs/selectors/player-in-game-mode
  //% blockId=minecraftTargetSelectGameMode block=players in game mode %mode
  function playersInGameMode(mode: GameMode): TargetSelector

  /**
   * Parses the given string into a TargetSelector object. This function does not check to make sure arguments are given the correct type or that the names of arguments are valid.  @returns the parsed TargetSelector object or null if the string was invalid
   * @param str the target selector string to parse
   */
  function parseSelector(str: string): TargetSelector

}

// A target selector
declare type TargetSelector = {
  /**
   * Sets the base coordinates for this target selector
   * @param p the coordinates at which this selector should be set
   */
  //% help=mobs/selectors/at-coordinates
  //% blockId=minecraftSelectorAtCoordinate block=%selector| set coordinate %p=minecraftCreateWorldPosition
  atCoordinate(p: Position): void

  /**
   * Sets the maximum distance from this selector's base coordinates
   * @param radius the maximum distance (in blocks) for this target selector, eg: 5
   */
  //% help=mobs/selectors/within-radius
  //% blockId=minecraftSelectorWithinRadius block=%selector| set max radius %r
  withinRadius(radius: number): void

  /**
   * Sets the minimum distance from this selector's base coordinates
   * @param radius the minimum distance (in blocks) for this target selector, eg: 10
   */
  //% help=mobs/selectors/outside-radius
  //% blockId=minecraftSelectorOutsideRadius block=%selector| set min radius %r
  outsideRadius(radius: number): void

  /**
   * Adds a rule to this target selector
   * @param rule the rule to add, eg: "type"
   * @param value the value for the rule, eg: "chicken"
   */
  //% help=mobs/selectors/add-rule
  //% blockId=minecraftSelectorAddRule block=%selector| add rule %rule| equals %value
  addRule(rule: string, value: string): void

  /**
   * Returns a string containing the game notation for this target selector
   */
  //% help=mobs/selectors/to-string
  //% blockId=minecraftSelectorToString block=%selector|to string
  toString(): string

}

// Minecraft block types: Grass, Stone, Air, etc...
declare const enum Block {
  //% block=Grass Block
  Grass = 2,
  //% block=Air
  Air = 0,
  //% block=Stone
  Stone = 1,
  //% block=Granite
  Granite = 65537,
  //% block=Polished Granite
  PolishedGranite = 131073,
  //% block=Diorite
  Diorite = 196609,
  //% block=Polished Diorite
  PolishedDiorite = 262145,
  //% block=Andesite
  Andesite = 327681,
  //% block=Polished Andesite
  PolishedAndesite = 393217,
  //% block=Dirt
  Dirt = 3,
  //% block=Coarse Dirt
  CoarseDirt = 65539,
  //% block=Cobblestone
  Cobblestone = 4,
  //% block=Oak Wood Planks
  PlanksOak = 5,
  //% block=Spruce Wood Planks
  PlanksSpruce = 65541,
  //% block=Birch Wood Planks
  PlanksBirch = 131077,
  //% block=Jungle Wood Planks
  PlanksJungle = 196613,
  //% block=Acacia Wood Planks
  PlanksAcacia = 262149,
  //% block=Dark Oak Wood Planks
  PlanksDarkOak = 327685,
  //% block=Oak Sapling
  OakSapling = 6,
  //% block=Spruce Sapling
  SpruceSapling = 65542,
  //% block=Birch Sapling
  BirchSapling = 131078,
  //% block=Jungle Sapling
  JungleSapling = 196614,
  //% block=Acacia Sapling
  AcaciaSapling = 262150,
  //% block=Dark Oak Sapling
  DarkOakSapling = 327686,
  //% block=Bedrock
  Bedrock = 7,
  //% block=Water
  Water = 8,
  //% block=Lava
  Lava = 10,
  //% block=Sand
  Sand = 12,
  //% block=Red Sand
  RedSand = 65548,
  //% block=Gravel
  Gravel = 13,
  //% block=Gold Ore
  GoldOre = 14,
  //% block=Iron Ore
  IronOre = 15,
  //% block=Coal Ore
  CoalOre = 16,
  //% block=Oak Wood
  LogOak = 17,
  //% block=Spruce Wood
  LogSpruce = 65553,
  //% block=Birch Wood
  LogBirch = 131089,
  //% block=Jungle Wood
  LogJungle = 196625,
  //% block=Oak Leaves
  LeavesOak = 18,
  //% block=Spruce Leaves
  LeavesSpruce = 65554,
  //% block=Birch Leaves
  LeavesBirch = 131090,
  //% block=Jungle Leaves
  LeavesJungle = 196626,
  //% block=Sponge
  Sponge = 19,
  //% block=Wet Sponge
  WetSponge = 65555,
  //% block=Glass
  Glass = 20,
  //% block=Lapis Lazuli Ore
  LapisOre = 21,
  //% block=Lapis Lazuli Block
  LapisLazuliBlock = 22,
  //% block=Dispenser
  Dispenser = 196631,
  //% block=Sandstone
  Sandstone = 24,
  //% block=Chiseled Sandstone
  ChiseledSandstone = 65560,
  //% block=Smooth Sandstone
  SmoothSandstone = 131096,
  //% block=Note Block
  NoteBlock = 25,
  //% block=Bed
  Bed = 26,
  //% block=Powered Rail
  PoweredRail = 27,
  //% block=Detector Rail
  DetectorRail = 28,
  //% block=Sticky Piston
  StickyPiston = 29,
  //% block=Cobweb
  Cobweb = 30,
  //% block=Grass
  Tallgrass = 65567,
  //% block=Fern
  Fern = 131103,
  //% block=Dead Bush
  DeadBush = 32,
  //% block=Piston
  Piston = 65569,
  //% block=White Wool
  Wool = 35,
  //% block=Orange Wool
  OrangeWool = 65571,
  //% block=Magenta Wool
  MagentaWool = 131107,
  //% block=Light Blue Wool
  LightBlueWool = 196643,
  //% block=Yellow Wool
  YellowWool = 262179,
  //% block=Lime Wool
  LimeWool = 327715,
  //% block=Pink Wool
  PinkWool = 393251,
  //% block=Gray Wool
  GrayWool = 458787,
  //% block=Light Gray Wool
  LightGrayWool = 524323,
  //% block=Cyan Wool
  CyanWool = 589859,
  //% block=Purple Wool
  PurpleWool = 655395,
  //% block=Blue Wool
  BlueWool = 720931,
  //% block=Brown Wool
  BrownWool = 786467,
  //% block=Green Wool
  GreenWool = 852003,
  //% block=Red Wool
  RedWool = 917539,
  //% block=Black Wool
  BlackWool = 983075,
  //% block=Dandelion
  YellowFlower = 37,
  //% block=Poppy
  Poppy = 38,
  //% block=Blue Orchid
  BlueOrchid = 65574,
  //% block=Allium
  Allium = 131110,
  //% block=Azure Bluet
  AzureBluet = 196646,
  //% block=Red Tulip
  RedTulip = 262182,
  //% block=Orange Tulip
  OrangeTulip = 327718,
  //% block=White Tulip
  WhiteTulip = 393254,
  //% block=Pink Tulip
  PinkTulip = 458790,
  //% block=Oxeye Daisy
  OxeyeDaisy = 524326,
  //% block=Bamboo
  Bamboo = 674,
  //% block=Cornflower
  Cornflower = 589862,
  //% block=Lily of the Valley
  LilyOfTheValley = 655398,
  //% block=Mushroom
  BrownMushroom = 39,
  //% block=Mushroom
  RedMushroom = 40,
  //% block=Block of Gold
  GoldBlock = 41,
  //% block=Block of Iron
  IronBlock = 42,
  //% block=Double Stone Slab
  DoubleStoneSlab = 43,
  //% block=Stone Slab
  StoneSlab = 44,
  //% block=Sandstone Slab
  SandstoneSlab = 65580,
  //% block=Cobblestone Slab
  CobblestoneSlab = 196652,
  //% block=Bricks Slab
  BricksSlab = 262188,
  //% block=Stone Bricks Slab
  StoneBricksSlab = 327724,
  //% block=Quartz Slab
  QuartzSlab = 393260,
  //% block=Nether Brick Slab
  NetherBrickSlab = 458796,
  //% block=Brick Block
  Bricks = 45,
  //% block=TNT
  TNT = 46,
  //% block=Bookshelf
  Bookshelf = 47,
  //% block=Moss Stone
  MossStone = 48,
  //% block=Obsidian
  Obsidian = 49,
  //% block=Torch
  Torch = 50,
  //% block=Fire
  Fire = 51,
  //% block=Monster Spawner
  MonsterSpawner = 52,
  //% block=Oak Wood Stairs
  OakWoodStairs = 53,
  //% block=Chest
  Chest = 54,
  //% block=Redstone Dust
  RedstoneWire = 55,
  //% block=Diamond Ore
  DiamondOre = 56,
  //% block=Block of Diamond
  DiamondBlock = 57,
  //% block=Crafting Table
  CraftingTable = 58,
  //% block=Crops
  Crops = 59,
  //% block=Farmland
  Farmland = 60,
  //% block=Furnace
  Furnace = 61,
  //% block=Sign
  Sign = 63,
  //% block=Ladder
  Ladder = 65,
  //% block=Rail
  Rail = 66,
  //% block=Cobblestone Stairs
  CobblestoneStairs = 67,
  //% block=Lever
  Lever = 69,
  //% block=Stone Pressure Plate
  StonePressurePlate = 70,
  //% block=Oak Pressure Plate
  WoodenPressurePlate = 72,
  //% block=Redstone Ore
  RedstoneOre = 73,
  //% block=Redstone Torch
  RedstoneTorch = 76,
  //% block=Stone Button
  StoneButton = 327757,
  //% block=Top Snow
  TopSnow = 78,
  //% block=Ice
  Ice = 79,
  //% block=Snow
  Snow = 80,
  //% block=Cactus
  Cactus = 81,
  //% block=Clay Block
  Clay = 82,
  //% block=Sugar cane
  SugarCane = 83,
  //% block=Jukebox
  Jukebox = 84,
  //% block=Oak Fence
  OakFence = 85,
  //% block=Spruce Fence
  SpruceFence = 65621,
  //% block=Birch Fence
  BirchFence = 131157,
  //% block=Jungle Fence
  JungleFence = 196693,
  //% block=Acacia Fence
  AcaciaFence = 262229,
  //% block=Dark Oak Fence
  DarkOakFence = 327765,
  //% block=Pumpkin
  Pumpkin = 86,
  //% block=Netherrack
  Netherrack = 87,
  //% block=Soul Sand
  SoulSand = 88,
  //% block=Glowstone
  Glowstone = 89,
  //% block=Jack o'Lantern
  JackOLantern = 91,
  //% block=Cake
  Cake = 92,
  //% block=Unpowered Repeater
  UnpoweredRepeater = 93,
  //% block=Oak Trapdoor
  WoodenTrapdoor = 96,
  //% block=Stone Monster Egg
  StoneMonsterEgg = 97,
  //% block=Cobblestone Monster Egg
  CobblestoneMonsterEgg = 65633,
  //% block=Stone Brick Monster Egg
  StoneBrickMonsterEgg = 131169,
  //% block=Mossy Stone Brick Monster Egg
  MossyStoneBrickMonsterEgg = 196705,
  //% block=Cracked Stone Brick Monster Egg
  CrackedStoneBrickMonsterEgg = 262241,
  //% block=Chiseled Stone Brick Monster Egg
  ChiseledStoneBrickMonsterEgg = 327777,
  //% block=Stone Bricks
  StoneBricks = 98,
  //% block=Mossy Stone Bricks
  MossyStoneBricks = 65634,
  //% block=Cracked Stone Bricks
  CrackedStoneBricks = 131170,
  //% block=Chiseled Stone Bricks
  ChiseledStoneBricks = 196706,
  //% block=Mushroom
  Mushroom0 = 99,
  //% block=Mushroom
  Mushroom14 = 917603,
  //% block=Mushroom
  Mushroom15 = 983139,
  //% block=Mushroom
  RedMushroomBlock = 917604,
  //% block=Iron Bars
  IronBars = 101,
  //% block=Glass Pane
  GlassPane = 102,
  //% block=Melon
  MelonBlock = 103,
  //% block=Pumpkin Stem
  PumpkinStem = 104,
  //% block=Melon Stem
  MelonStem = 105,
  //% block=Vines
  Vines = 106,
  //% block=Oak Fence Gate
  OakFenceGate = 107,
  //% block=Brick Stairs
  BrickStairs = 108,
  //% block=Stone Brick Stairs
  StoneBrickStairs = 109,
  //% block=Mycelium
  Mycelium = 110,
  //% block=Lily Pad
  LilyPad = 111,
  //% block=Nether Brick Block
  NetherBrick = 112,
  //% block=Nether Brick Fence
  NetherBrickFence = 113,
  //% block=Nether Brick Stairs
  NetherBrickStairs = 114,
  //% block=Nether Wart
  NetherWart = 115,
  //% block=Enchantment Table
  EnchantmentTable = 116,
  //% block=Brewing Stand
  BrewingStand = 117,
  //% block=Cauldron
  Cauldron = 118,
  //% block=End Portal
  EndPortal = 120,
  //% block=End Stone
  Endstone = 121,
  //% block=Dragon Egg
  DragonEgg = 122,
  //% block=Redstone Lamp
  RedstoneLamp = 123,
  //% block=Dropper
  Dropper = 196733,
  //% block=Activator Rail
  ActivatorRail = 126,
  //% block=Cocoa
  Cocoa = 127,
  //% block=Sandstone Stairs
  SandstoneStairs = 128,
  //% block=Emerald Ore
  EmeraldOre = 129,
  //% block=Ender Chest
  EnderChest = 130,
  //% block=Tripwire Hook
  TripwireHook = 131,
  //% block=Tripwire
  Tripwire = 132,
  //% block=Block of Emerald
  EmeraldBlock = 133,
  //% block=Spruce Wood Stairs
  SpruceWoodStairs = 134,
  //% block=Birch Wood Stairs
  BirchWoodStairs = 135,
  //% block=Jungle Wood Stairs
  JungleWoodStairs = 136,
  //% block=Beacon
  Beacon = 138,
  //% block=Cobblestone Wall
  CobblestoneWall = 139,
  //% block=Mossy Cobblestone Wall
  MossyCobblestoneWall = 65675,
  //% block=Flower Pot
  FlowerPot = 140,
  //% block=Carrots
  Carrots = 141,
  //% block=Potatoes
  Potatoes = 142,
  //% block=Oak Button
  WoodenButton = 327823,
  //% block=Skeleton Skull
  SkeletonSkull = 144,
  //% block=Anvil
  Anvil = 145,
  //% block=Slightly Damaged Anvil
  SlightlyDamagedAnvil = 65681,
  //% block=Very Damaged Anvil
  VeryDamagedAnvil = 131217,
  //% block=Trapped Chest
  TrappedChest = 146,
  //% block=Weighted Pressure Plate (Light)
  WeightedPressurePlateLight = 147,
  //% block=Weighted Pressure Plate (Heavy)
  WeightedPressurePlateHeavy = 148,
  //% block=Unpowered Comparator
  UnpoweredComparator = 149,
  //% block=Daylight Sensor
  DaylightSensor = 151,
  //% block=Block of Redstone
  RedstoneBlock = 152,
  //% block=Nether Quartz Ore
  QuartzOre = 153,
  //% block=Hopper
  Hopper = 154,
  //% block=Block of Quartz
  BlockOfQuartz = 155,
  //% block=Chiseled Quartz Block
  ChiseledQuartzBlock = 65691,
  //% block=Pillar Quartz Block
  PillarQuartzBlock = 131227,
  //% block=Quartz Stairs
  QuartzStairs = 156,
  //% block=Double Wooden Slab
  DoubleWoodenSlab = 157,
  //% block=Oak Wood Slab
  OakWoodSlab = 158,
  //% block=Spruce Wood Slab
  SpruceWoodSlab = 65694,
  //% block=Birch Wood Slab
  BirchWoodSlab = 131230,
  //% block=Jungle Wood Slab
  JungleWoodSlab = 196766,
  //% block=Acacia Wood Slab
  AcaciaWoodSlab = 262302,
  //% block=Dark Oak Wood Slab
  DarkOakWoodSlab = 327838,
  //% block=White Terracotta
  WhiteTerracotta = 159,
  //% block=Orange Terracotta
  OrangeTerracotta = 65695,
  //% block=Magenta Terracotta
  MagentaTerracotta = 131231,
  //% block=Light Blue Terracotta
  LightBlueTerracotta = 196767,
  //% block=Yellow Terracotta
  YellowTerracotta = 262303,
  //% block=Lime Terracotta
  LimeTerracotta = 327839,
  //% block=Pink Terracotta
  PinkTerracotta = 393375,
  //% block=Gray Terracotta
  GrayTerracotta = 458911,
  //% block=Light Gray Terracotta
  LightGrayTerracotta = 524447,
  //% block=Cyan Terracotta
  CyanTerracotta = 589983,
  //% block=Purple Terracotta
  PurpleTerracotta = 655519,
  //% block=Blue Terracotta
  BlueTerracotta = 721055,
  //% block=Brown Terracotta
  BrownTerracotta = 786591,
  //% block=Green Terracotta
  GreenTerracotta = 852127,
  //% block=Red Terracotta
  RedTerracotta = 917663,
  //% block=Black Terracotta
  BlackTerracotta = 983199,
  //% block=White Stained Glass Pane
  WhiteStainedGlassPane = 160,
  //% block=Orange Stained Glass Pane
  OrangeStainedGlassPane = 65696,
  //% block=Magenta Stained Glass Pane
  MagentaStainedGlassPane = 131232,
  //% block=Light Blue Stained Glass Pane
  LightBlueStainedGlassPane = 196768,
  //% block=Yellow Stained Glass Pane
  YellowStainedGlassPane = 262304,
  //% block=Lime Stained Glass Pane
  LimeStainedGlassPane = 327840,
  //% block=Pink Stained Glass Pane
  PinkStainedGlassPane = 393376,
  //% block=Gray Stained Glass Pane
  GrayStainedGlassPane = 458912,
  //% block=Light Gray Stained Glass Pane
  LightGrayStainedGlassPane = 524448,
  //% block=Cyan Stained Glass Pane
  CyanStainedGlassPane = 589984,
  //% block=Purple Stained Glass Pane
  PurpleStainedGlassPane = 655520,
  //% block=Blue Stained Glass Pane
  BlueStainedGlassPane = 721056,
  //% block=Brown Stained Glass Pane
  BrownStainedGlassPane = 786592,
  //% block=Green Stained Glass Pane
  GreenStainedGlassPane = 852128,
  //% block=Red Stained Glass Pane
  RedStainedGlassPane = 917664,
  //% block=Black Stained Glass Pane
  BlackStainedGlassPane = 983200,
  //% block=Acacia Leaves
  AcaciaLeaves = 161,
  //% block=Dark Oak Leaves
  DarkOakLeaves = 65697,
  //% block=Acacia Wood
  LogAcacia = 162,
  //% block=Dark Oak Wood
  LogDarkOak = 65698,
  //% block=Acacia Wood Stairs
  AcaciaWoodStairs = 163,
  //% block=Dark Oak Wood Stairs
  DarkOakWoodStairs = 164,
  //% block=Slime Block
  SlimeBlock = 165,
  //% block=Iron Trapdoor
  IronTrapdoor = 167,
  //% block=Prismarine
  Prismarine = 168,
  //% block=Dark Prismarine
  DarkPrismarine = 65704,
  //% block=Prismarine Bricks
  PrismarineBricks = 131240,
  //% block=Sea Lantern
  SeaLantern = 169,
  //% block=Hay Bale
  HayBlock = 170,
  //% block=White Carpet
  WhiteCarpet = 171,
  //% block=Orange Carpet
  OrangeCarpet = 65707,
  //% block=Magenta Carpet
  MagentaCarpet = 131243,
  //% block=Light Blue Carpet
  LightBlueCarpet = 196779,
  //% block=Yellow Carpet
  YellowCarpet = 262315,
  //% block=Lime Carpet
  LimeCarpet = 327851,
  //% block=Pink Carpet
  PinkCarpet = 393387,
  //% block=Gray Carpet
  GrayCarpet = 458923,
  //% block=Light Gray Carpet
  LightGrayCarpet = 524459,
  //% block=Cyan Carpet
  CyanCarpet = 589995,
  //% block=Purple Carpet
  PurpleCarpet = 655531,
  //% block=Blue Carpet
  BlueCarpet = 721067,
  //% block=Brown Carpet
  BrownCarpet = 786603,
  //% block=Green Carpet
  GreenCarpet = 852139,
  //% block=Red Carpet
  RedCarpet = 917675,
  //% block=Black Carpet
  BlackCarpet = 983211,
  //% block=Terracotta
  HardenedClay = 172,
  //% block=Block of Coal
  CoalBlock = 173,
  //% block=Packed Ice
  PackedIce = 174,
  //% block=Sunflower
  Sunflower = 175,
  //% block=Lilac
  Lilac = 65711,
  //% block=Double Tallgrass
  DoubleTallgrass = 131247,
  //% block=Large Fern
  LargeFern = 196783,
  //% block=Rose Bush
  RoseBush = 262319,
  //% block=Peony
  Peony = 327855,
  //% block=Red Sandstone
  RedSandstone = 179,
  //% block=Chiseled Red Sandstone
  ChiseledRedSandstone = 65715,
  //% block=Smooth Red Sandstone
  SmoothRedSandstone = 131251,
  //% block=Red Sandstone Stairs
  RedSandstoneStairs = 180,
  //% block=Double Red Sandstone Slab
  DoubleRedSandstoneSlab = 181,
  //% block=Red Sandstone Slab
  RedSandstoneSlab = 182,
  //% block=Purpur Slab
  PurpurSlab = 65718,
  //% block=Prismarine Slab
  PrismarineSlab = 131254,
  //% block=Dark Prismarine Slab
  DarkPrismarineSlab = 196790,
  //% block=Prismarine Brick Slab
  PrismarineBrickSlab = 262326,
  //% block=Spruce Fence Gate
  SpruceFenceGate = 183,
  //% block=Birch Fence Gate
  BirchFenceGate = 184,
  //% block=Jungle Fence Gate
  JungleFenceGate = 185,
  //% block=Dark Oak Fence Gate
  DarkOakFenceGate = 186,
  //% block=Acacia Fence Gate
  AcaciaFenceGate = 187,
  //% block=Grass Path
  GrassPath = 198,
  //% block=Frame
  Frame = 199,
  //% block=Chorus Flower
  ChorusFlower = 200,
  //% block=Purpur Block
  PurpurBlock = 201,
  //% block=Purpur Pillar
  PurpurPillar = 131273,
  //% block=Purpur Stairs
  PurpurStairs = 203,
  //% block=Shulker Box
  ShulkerBox = 1048781,
  //% block=End Stone Bricks
  EndStoneBricks = 206,
  //% block=End Rod
  EndRod = 208,
  //% block=Magma Block
  MagmaBlock = 213,
  //% block=Nether Wart Block
  NetherWartBlock = 214,
  //% block=Red Nether Brick
  RedNetherBrick = 215,
  //% block=Bone Block
  BoneBlock = 216,
  //% block=White Shulker Box
  WhiteShulkerBox = 218,
  //% block=Orange Shulker Box
  OrangeShulkerBox = 65754,
  //% block=Magenta Shulker Box
  MagentaShulkerBox = 131290,
  //% block=Light Blue Shulker Box
  LightBlueShulkerBox = 196826,
  //% block=Yellow Shulker Box
  YellowShulkerBox = 262362,
  //% block=Lime Shulker Box
  LimeShulkerBox = 327898,
  //% block=Pink Shulker Box
  PinkShulkerBox = 393434,
  //% block=Gray Shulker Box
  GrayShulkerBox = 458970,
  //% block=Silver Shulker Box
  SilverShulkerBox = 524506,
  //% block=Cyan Shulker Box
  CyanShulkerBox = 590042,
  //% block=Purple Shulker Box
  PurpleShulkerBox = 655578,
  //% block=Blue Shulker Box
  BlueShulkerBox = 721114,
  //% block=Brown Shulker Box
  BrownShulkerBox = 786650,
  //% block=Green Shulker Box
  GreenShulkerBox = 852186,
  //% block=Red Shulker Box
  RedShulkerBox = 917722,
  //% block=Black Shulker Box
  BlackShulkerBox = 983258,
  //% block=Purple Glazed Terracotta
  PurpleGlazedTerracotta = 219,
  //% block=White Glazed Terracotta
  WhiteGlazedTerracotta = 220,
  //% block=Orange Glazed Terracotta
  OrangeGlazedTerracotta = 221,
  //% block=Magenta Glazed Terracotta
  MagentaGlazedTerracotta = 222,
  //% block=Light Blue Glazed Terracotta
  LightBlueGlazedTerracotta = 223,
  //% block=Yellow Glazed Terracotta
  YellowGlazedTerracotta = 224,
  //% block=Lime Glazed Terracotta
  LimeGlazedTerracotta = 225,
  //% block=Pink Glazed Terracotta
  PinkGlazedTerracotta = 226,
  //% block=Gray Glazed Terracotta
  GrayGlazedTerracotta = 227,
  //% block=Light Gray Glazed Terracotta
  LightGrayGlazedTerracotta = 228,
  //% block=Cyan Glazed Terracotta
  CyanGlazedTerracotta = 229,
  //% block=Blue Glazed Terracotta
  BlueGlazedTerracotta = 231,
  //% block=Brown Glazed Terracotta
  BrownGlazedTerracotta = 232,
  //% block=Green Glazed Terracotta
  GreenGlazedTerracotta = 233,
  //% block=Red Glazed Terracotta
  RedGlazedTerracotta = 234,
  //% block=Black Glazed Terracotta
  BlackGlazedTerracotta = 235,
  //% block=White Concrete
  WhiteConcrete = 236,
  //% block=Orange Concrete
  OrangeConcrete = 65772,
  //% block=Magenta Concrete
  MagentaConcrete = 131308,
  //% block=Light Blue Concrete
  LightBlueConcrete = 196844,
  //% block=Yellow Concrete
  YellowConcrete = 262380,
  //% block=Lime Concrete
  LimeConcrete = 327916,
  //% block=Pink Concrete
  PinkConcrete = 393452,
  //% block=Gray Concrete
  GrayConcrete = 458988,
  //% block=Light Gray Concrete
  LightGrayConcrete = 524524,
  //% block=Cyan Concrete
  CyanConcrete = 590060,
  //% block=Purple Concrete
  PurpleConcrete = 655596,
  //% block=Blue Concrete
  BlueConcrete = 721132,
  //% block=Brown Concrete
  BrownConcrete = 786668,
  //% block=Green Concrete
  GreenConcrete = 852204,
  //% block=Red Concrete
  RedConcrete = 917740,
  //% block=Black Concrete
  BlackConcrete = 983276,
  //% block=White Concrete Powder
  WhiteConcretePowder = 237,
  //% block=Orange Concrete Powder
  OrangeConcretePowder = 65773,
  //% block=Magenta Concrete Powder
  MagentaConcretePowder = 131309,
  //% block=Light Blue Concrete Powder
  LightBlueConcretePowder = 196845,
  //% block=Yellow Concrete Powder
  YellowConcretePowder = 262381,
  //% block=Lime Concrete Powder
  LimeConcretePowder = 327917,
  //% block=Pink Concrete Powder
  PinkConcretePowder = 393453,
  //% block=Gray Concrete Powder
  GrayConcretePowder = 458989,
  //% block=Light Gray Concrete Powder
  LightGrayConcretePowder = 524525,
  //% block=Cyan Concrete Powder
  CyanConcretePowder = 590061,
  //% block=Purple Concrete Powder
  PurpleConcretePowder = 655597,
  //% block=Blue Concrete Powder
  BlueConcretePowder = 721133,
  //% block=Brown Concrete Powder
  BrownConcretePowder = 786669,
  //% block=Green Concrete Powder
  GreenConcretePowder = 852205,
  //% block=Red Concrete Powder
  RedConcretePowder = 917741,
  //% block=Black Concrete Powder
  BlackConcretePowder = 983277,
  //% block=Chorus Plant
  ChorusPlant = 240,
  //% block=White Stained Glass
  WhiteStainedGlass = 241,
  //% block=Orange Stained Glass
  OrangeStainedGlass = 65777,
  //% block=Magenta Stained Glass
  MagentaStainedGlass = 131313,
  //% block=Light Blue Stained Glass
  LightBlueStainedGlass = 196849,
  //% block=Yellow Stained Glass
  YellowStainedGlass = 262385,
  //% block=Lime Stained Glass
  LimeStainedGlass = 327921,
  //% block=Pink Stained Glass
  PinkStainedGlass = 393457,
  //% block=Gray Stained Glass
  GrayStainedGlass = 458993,
  //% block=Light Gray Stained Glass
  LightGrayStainedGlass = 524529,
  //% block=Cyan Stained Glass
  CyanStainedGlass = 590065,
  //% block=Purple Stained Glass
  PurpleStainedGlass = 655601,
  //% block=Blue Stained Glass
  BlueStainedGlass = 721137,
  //% block=Brown Stained Glass
  BrownStainedGlass = 786673,
  //% block=Green Stained Glass
  GreenStainedGlass = 852209,
  //% block=Red Stained Glass
  RedStainedGlass = 917745,
  //% block=Black Stained Glass
  BlackStainedGlass = 983281,
  //% block=Podzol
  Podzol = 243,
  //% block=Beetroot
  Beetroot = 244,
  //% block=Stonecutter
  Stonecutter = 245,
  //% block=Observer
  Observer = 251,
  //% block=Structure Block
  StructureBlock = 252,
  //% block=Prismarine Stairs
  PrismarineStairs = 513,
  //% block=Dark Prismarine Stairs
  DarkPrismarineStairs = 514,
  //% block=Prismarine Brick Stairs
  PrismarineBrickStairs = 515,
  //% block=Stripped Spruce Wood
  StrippedSpruceWood = 516,
  //% block=Stripped Birch Wood
  StrippedBirchWood = 517,
  //% block=Stripped Jungle Wood
  StrippedJungleWood = 518,
  //% block=Stripped Acacia Wood
  StrippedAcaciaWood = 519,
  //% block=Stripped Dark Oak Wood
  StrippedDarkOakWood = 520,
  //% block=Stripped Oak Wood
  StrippedOakWood = 521,
  //% block=Scaffolding
  Scaffolding = 676,
  //% block=Blue Ice
  BlueIce = 522,
  //% block=Seagrass
  Seagrass = 641,
  //% block=Tube Coral
  TubeCoral = 642,
  //% block=Brain Coral
  BrainCoral = 66178,
  //% block=Bubble Coral
  BubbleCoral = 131714,
  //% block=Fire Coral
  FireCoral = 197250,
  //% block=Horn Coral
  HornCoral = 262786,
  //% block=Tube Coral Block
  TubeCoralBlock = 643,
  //% block=Brain Coral Block
  BrainCoralBlock = 66179,
  //% block=Bubble Coral Block
  BubbleCoralBlock = 131715,
  //% block=Fire Coral Block
  FireCoralBlock = 197251,
  //% block=Horn Coral Block
  HornCoralBlock = 262787,
  //% block=Dead Tube Coral Block
  DeadTubeCoralBlock = 328323,
  //% block=Dead Brain Coral Block
  DeadBrainCoralBlock = 393859,
  //% block=Dead Bubble Coral Block
  DeadBubbleCoralBlock = 459395,
  //% block=Dead Fire Coral Block
  DeadFireCoralBlock = 721539,
  //% block=Dead Horn Coral Block
  DeadHornCoralBlock = 787075,
  //% block=Tube Coral Fan
  TubeCoralFan = 644,
  //% block=Brain Coral Fan
  BrainCoralFan = 66180,
  //% block=Bubble Coral Fan
  BubbleCoralFan = 131716,
  //% block=Fire Coral Fan
  FireCoralFan = 197252,
  //% block=Horn Coral Fan
  HornCoralFan = 262788,
  //% block=Dead Tube Coral Fan
  DeadTubeCoralFan = 645,
  //% block=Dead Brain Coral Fan
  DeadBrainCoralFan = 66181,
  //% block=Dead Bubble Coral Fan
  DeadBubbleCoralFan = 131717,
  //% block=Dead Fire Coral Fan
  DeadFireCoralFan = 197253,
  //% block=Dead Horn Coral Fan
  DeadHornCoralFan = 262789,
  //% block=Kelp
  Kelp = 649,
  //% block=Dried Kelp Block
  DriedKelpBlock = 650,
  //% block=Acacia Button
  AcaciaButton = 651,
  //% block=Birch Button
  BirchButton = 652,
  //% block=Dark Oak Button
  DarkOakButton = 653,
  //% block=Jungle Button
  JungleButton = 654,
  //% block=Spruce Button
  SpruceButton = 655,
  //% block=Acacia Trapdoor
  AcaciaTrapdoor = 656,
  //% block=Birch Trapdoor
  BirchTrapdoor = 657,
  //% block=Dark Oak Trapdoor
  DarkOakTrapdoor = 658,
  //% block=Jungle Trapdoor
  JungleTrapdoor = 659,
  //% block=Spruce Trapdoor
  SpruceTrapdoor = 660,
  //% block=Acacia Pressure Plate
  AcaciaPressurePlate = 661,
  //% block=Birch Pressure Plate
  BirchPressurePlate = 662,
  //% block=Dark Oak Pressure Plate
  DarkOakPressurePlate = 663,
  //% block=Jungle Pressure Plate
  JunglePressurePlate = 664,
  //% block=Spruce Pressure Plate
  SprucePressurePlate = 665,
  //% block=Carved Pumpkin
  CarvedPumpkin = 666,
  //% block=Sea Pickle
  SeaPickle = 667,
  //% block=Cartography Table
  CartographyTable = 711,
  //% block=Fletching Table
  FletchingTable = 712,
  //% block=Blast Furnace
  BlastFurnace = 707,
  //% block=Stonecutter Block
  StonecutterBlock = 708,
  //% block=Smoker
  Smoker = 709,
  //% block=Smithing Table
  SmithingTable = 713,
  //% block=Barrel
  Barrel = 714,
  //% block=Loom
  Loom = 715,
  //% block=Bell
  Bell = 717,
  //% block=Campfire
  Campfire = 720,
  //% block=Composter
  Composter = 724,
  //% block=Bee Nest
  BeeNest = 729,
  //% block=Beehive
  Beehive = 730,
  //% block=Honey Block
  HoneyBlock = 731,
  //% block=Honeycomb Block
  HoneycombBlock = 732,
}

declare const enum Item {
  //% block=Iron Shovel
  IronShovel = 256,
  //% block=Iron Pickaxe
  IronPickaxe = 257,
  //% block=Iron Axe
  IronAxe = 258,
  //% block=Flint and Steel
  FlintAndSteel = 259,
  //% block=Apple
  Apple = 260,
  //% block=Bow
  Bow = 261,
  //% block=Arrow
  Arrow = 262,
  //% block=Coal
  Coal = 263,
  //% block=Charcoal
  Charcoal = 65799,
  //% block=Diamond
  Diamond = 264,
  //% block=Iron Ingot
  IronIngot = 265,
  //% block=Gold Ingot
  GoldIngot = 266,
  //% block=Iron Sword
  IronSword = 267,
  //% block=Wooden Sword
  WoodenSword = 268,
  //% block=Wooden Shovel
  WoodenShovel = 269,
  //% block=Wooden Pickaxe
  WoodenPickaxe = 270,
  //% block=Wooden Axe
  WoodenAxe = 271,
  //% block=Stone Sword
  StoneSword = 272,
  //% block=Stone Shovel
  StoneShovel = 273,
  //% block=Stone Pickaxe
  StonePickaxe = 274,
  //% block=Stone Axe
  StoneAxe = 275,
  //% block=Diamond Sword
  DiamondSword = 276,
  //% block=Diamond Shovel
  DiamondShovel = 277,
  //% block=Diamond Pickaxe
  DiamondPickaxe = 278,
  //% block=Diamond Axe
  DiamondAxe = 279,
  //% block=Stick
  Stick = 280,
  //% block=Bowl
  Bowl = 281,
  //% block=Mushroom Stew
  MushroomStew = 282,
  //% block=Golden Sword
  GoldenSword = 283,
  //% block=Golden Shovel
  GoldenShovel = 284,
  //% block=Golden Pickaxe
  GoldenPickaxe = 285,
  //% block=Golden Axe
  GoldenAxe = 286,
  //% block=String
  String = 287,
  //% block=Feather
  Feather = 288,
  //% block=Gunpowder
  Gunpowder = 289,
  //% block=Wooden Hoe
  WoodenHoe = 290,
  //% block=Stone Hoe
  StoneHoe = 291,
  //% block=Iron Hoe
  IronHoe = 292,
  //% block=Diamond Hoe
  DiamondHoe = 293,
  //% block=Golden Hoe
  GoldenHoe = 294,
  //% block=Seeds
  Seeds = 295,
  //% block=Wheat
  Wheat = 296,
  //% block=Bread
  Bread = 297,
  //% block=Leather Cap
  LeatherCap = 298,
  //% block=Leather Tunic
  LeatherChestplate = 299,
  //% block=Leather Pants
  LeatherPants = 300,
  //% block=Leather Boots
  LeatherBoots = 301,
  //% block=Chain Helmet
  ChainmailHelmet = 302,
  //% block=Chain Chestplate
  ChainmailChestplate = 303,
  //% block=Chain Leggings
  ChainmailLeggings = 304,
  //% block=Chain Boots
  ChainmailBoots = 305,
  //% block=Iron Helmet
  IronHelmet = 306,
  //% block=Iron Chestplate
  IronChestplate = 307,
  //% block=Iron Leggings
  IronLeggings = 308,
  //% block=Iron Boots
  IronBoots = 309,
  //% block=Diamond Helmet
  DiamondHelmet = 310,
  //% block=Diamond Chestplate
  DiamondChestplate = 311,
  //% block=Diamond Leggings
  DiamondLeggings = 312,
  //% block=Diamond Boots
  DiamondBoots = 313,
  //% block=Golden Helmet
  GoldenHelmet = 314,
  //% block=Golden Chestplate
  GoldenChestplate = 315,
  //% block=Golden Leggings
  GoldenLeggings = 316,
  //% block=Golden Boots
  GoldenBoots = 317,
  //% block=Flint
  Flint = 318,
  //% block=Raw Porkchop
  RawPorkchop = 319,
  //% block=Cooked Porkchop
  CookedPorkchop = 320,
  //% block=Painting
  Painting = 321,
  //% block=Golden Apple
  GoldenApple = 322,
  //% block=Sign
  Sign = 323,
  //% block=Oak Door
  OakDoor = 324,
  //% block=Bucket
  Bucket = 325,
  //% block=Milk
  Milk = 65861,
  //% block=Bucket of Cod
  BucketOfCod = 131397,
  //% block=Bucket of Salmon
  BucketOfSalmon = 196933,
  //% block=Bucket of Tropical Fish
  BucketOfTropicalFish = 262469,
  //% block=Water Bucket
  WaterBucket = 524613,
  //% block=Lava Bucket
  LavaBucket = 655685,
  //% block=Minecart
  Minecart = 328,
  //% block=Saddle
  Saddle = 329,
  //% block=Iron Door
  IronDoor = 330,
  //% block=Redstone
  Redstone = 331,
  //% block=Snowball
  Snowball = 332,
  //% block=Oak Boat
  Boat = 333,
  //% block=Spruce Boat
  SpruceBoat = 65869,
  //% block=Birch Boat
  BirchBoat = 131405,
  //% block=Jungle Boat
  JungleBoat = 196941,
  //% block=Acacia Boat
  AcaciaBoat = 262477,
  //% block=Dark Oak Boat
  DarkOakBoat = 328013,
  //% block=Leather
  Leather = 334,
  //% block=Kelp
  Kelp = 335,
  //% block=Brick
  Brick = 336,
  //% block=Clay
  ClayBall = 337,
  //% block=Sugar Canes
  Reeds = 338,
  //% block=Paper
  Paper = 339,
  //% block=Book
  Book = 340,
  //% block=Slimeball
  Slimeball = 341,
  //% block=Minecart with Chest
  MinecartWithChest = 342,
  //% block=Egg
  Egg = 344,
  //% block=Compass
  Compass = 345,
  //% block=Fishing Rod
  FishingRod = 346,
  //% block=Clock
  Clock = 347,
  //% block=Glowstone Dust
  GlowstoneDust = 348,
  //% block=Raw Fish
  RawFish = 349,
  //% block=Cooked Fish
  CookedFish = 350,
  //% block=Ink Sac
  InkSac = 351,
  //% block=Rose Red
  RoseRed = 65887,
  //% block=Cactus Green
  CactusGreen = 131423,
  //% block=Cocoa Beans
  CocoaBeans = 196959,
  //% block=Lapis Lazuli
  LapisLazuli = 262495,
  //% block=Purple Dye
  PurpleDye = 328031,
  //% block=Cyan Dye
  CyanDye = 393567,
  //% block=Light Gray Dye
  LightGrayDye = 459103,
  //% block=Gray Dye
  GrayDye = 524639,
  //% block=Pink Dye
  PinkDye = 590175,
  //% block=Lime Dye
  LimeDye = 655711,
  //% block=Dandelion Yellow
  DandelionYellow = 721247,
  //% block=Light Blue Dye
  LightBlueDye = 786783,
  //% block=Magenta Dye
  MagentaDye = 852319,
  //% block=Orange Dye
  OrangeDye = 917855,
  //% block=Bone Meal
  BoneMeal = 983391,
  //% block=Bone
  Bone = 352,
  //% block=Sugar
  Sugar = 353,
  //% block=Cake
  Cake = 354,
  //% block=White Bed
  Bed = 355,
  //% block=Orange Bed
  OrangeBed = 65891,
  //% block=Magenta Bed
  MagentaBed = 131427,
  //% block=Light Blue Bed
  LightBlueBed = 196963,
  //% block=Yellow Bed
  YellowBed = 262499,
  //% block=Lime Bed
  LimeBed = 328035,
  //% block=Pink Bed
  PinkBed = 393571,
  //% block=Gray Bed
  GrayBed = 459107,
  //% block=Light Gray Bed
  LightGrayBed = 524643,
  //% block=Cyan Bed
  CyanBed = 590179,
  //% block=Purple Bed
  PurpleBed = 655715,
  //% block=Blue Bed
  BlueBed = 721251,
  //% block=Brown Bed
  BrownBed = 786787,
  //% block=Green Bed
  GreenBed = 852323,
  //% block=Red Bed
  RedBed = 917859,
  //% block=Black Bed
  BlackBed = 983395,
  //% block=Redstone Repeater
  Repeater = 356,
  //% block=Cookie
  Cookie = 357,
  //% block=Map
  Map = 358,
  //% block=Shears
  Shears = 359,
  //% block=Melon
  Melon = 360,
  //% block=Pumpkin Seeds
  PumpkinSeeds = 361,
  //% block=Melon Seeds
  MelonSeeds = 362,
  //% block=Raw Beef
  RawBeef = 363,
  //% block=Cooked Beef
  CookedBeef = 364,
  //% block=Raw Chicken
  RawChicken = 365,
  //% block=Cooked Chicken
  CookedChicken = 366,
  //% block=Rotten Flesh
  RottenFlesh = 367,
  //% block=Ender Pearl
  EnderPearl = 368,
  //% block=Blaze Rod
  BlazeRod = 369,
  //% block=Ghast Tear
  GhastTear = 370,
  //% block=Gold Nugget
  GoldNugget = 371,
  //% block=Nether Wart
  NetherWart = 372,
  //% block=Glass Bottle
  GlassBottle = 374,
  //% block=Spider Eye
  SpiderEye = 375,
  //% block=Fermented Spider Eye
  FermentedSpiderEye = 376,
  //% block=Blaze Powder
  BlazePowder = 377,
  //% block=Magma Cream
  MagmaCream = 378,
  //% block=Brewing Stand
  BrewingStand = 379,
  //% block=Cauldron
  Cauldron = 380,
  //% block=Eye of Ender
  EnderEye = 381,
  //% block=Glistering Melon
  GlisteringMelon = 382,
  //% block=Spawn Chicken
  SpawnChicken = 655743,
  //% block=Spawn Cow
  SpawnCow = 721279,
  //% block=Spawn Pig
  SpawnPig = 786815,
  //% block=Spawn Sheep
  SpawnSheep = 852351,
  //% block=Spawn Wolf
  SpawnWolf = 917887,
  //% block=Spawn Villager
  SpawnVillager = 983423,
  //% block=Spawn Mooshroom
  SpawnMooshroom = 1048959,
  //% block=Spawn Squid
  SpawnSquid = 1114495,
  //% block=Spawn Rabbit
  SpawnRabbit = 1180031,
  //% block=Spawn Bat
  SpawnBat = 1245567,
  //% block=Spawn Ocelot
  SpawnOcelot = 1442175,
  //% block=Spawn Horse
  SpawnHorse = 1507711,
  //% block=Spawn Donkey
  SpawnDonkey = 1573247,
  //% block=Spawn Mule
  SpawnMule = 1638783,
  //% block=Spawn Skeleton Horse
  SpawnSkeletonHorse = 1704319,
  //% block=Spawn Zombie Horse
  SpawnZombieHorse = 1769855,
  //% block=Spawn Polar Bear
  SpawnPolarBear = 1835391,
  //% block=Spawn Llama
  SpawnLlama = 1900927,
  //% block=Spawn Parrot
  SpawnParrot = 1966463,
  //% block=Spawn Dolphin
  SpawnDolphin = 2031960,
  //% block=Spawn Ravager
  SpawnRavager = 3867007,
  //% block=Spawn Zombie
  SpawnZombie = 2097535,
  //% block=Spawn Creeper
  SpawnCreeper = 2163071,
  //% block=Spawn Skeleton
  SpawnSkeleton = 2228607,
  //% block=Spawn Spider
  SpawnSpider = 2294143,
  //% block=Spawn Zombie Pigman
  SpawnZombiePigman = 2359679,
  //% block=Spawn Slime
  SpawnSlime = 2425215,
  //% block=Spawn Enderman
  SpawnEnderman = 2490751,
  //% block=Spawn Silverfish
  SpawnSilverfish = 2556287,
  //% block=Spawn Cave Spider
  SpawnCaveSpider = 2621823,
  //% block=Spawn Ghast
  SpawnGhast = 2687359,
  //% block=Spawn Magma Cube
  SpawnMagmaCube = 2752895,
  //% block=Spawn Blaze
  SpawnBlaze = 2818431,
  //% block=Spawn Zombie Villager
  SpawnZombieVillager = 2883967,
  //% block=Spawn Witch
  SpawnWitch = 2949503,
  //% block=Spawn Stray
  SpawnStray = 3015039,
  //% block=Spawn Husk
  SpawnHusk = 3080575,
  //% block=Spawn Wither Skeleton
  SpawnWitherSkeleton = 3146111,
  //% block=Spawn Guardian
  SpawnGuardian = 3211647,
  //% block=Spawn Elder Guardian
  SpawnElderGuardian = 3277183,
  //% block=Spawn Shulker
  SpawnShulker = 3539327,
  //% block=Spawn Endermite
  SpawnEndermite = 3604863,
  //% block=Spawn Vindicator
  SpawnVindicator = 3735935,
  //% block=Spawn Phantom
  SpawnPhantom = 3801471,
  //% block=Spawn Sea Turtle
  SpawnSeaTurtle = 4850047,
  //% block=Spawn Cat
  SpawnCat = 4915583,
  //% block=Spawn Evoker
  SpawnEvoker = 6816127,
  //% block=Spawn Vex
  SpawnVex = 6881663,
  //% block=Spawn Pufferfish
  SpawnPufferfish = 7078271,
  //% block=Spawn Salmon
  SpawnSalmon = 7143768,
  //% block=Spawn Drowned
  SpawnDrowned = 7209343,
  //% block=Spawn Tropical Fish
  SpawnTropicalFish = 7274840,
  //% block=Spawn Cod
  SpawnCod = 7340376,
  //% block=Spawn Fox
  SpawnFox = 7930239,
  //% block=Spawn Panda
  SpawnPanda = 7405951,
  //% block=Spawn Pillager
  SpawnPillager = 7471487,
  //% block=Spawn Wandering Trader
  SpawnWanderingTrader = 7733631,
  //% block=Spawn Bee
  SpawnBee = 7995775,
  //% block=Bottle o' Enchanting
  ExperienceBottle = 384,
  //% block=Fire Charge
  Fireball = 385,
  //% block=Book & Quill
  BookQuill = 386,
  //% block=Emerald
  Emerald = 388,
  //% block=Item Frame
  ItemFrame = 389,
  //% block=Flower Pot
  FlowerPot = 390,
  //% block=Carrot
  Carrot = 391,
  //% block=Potato
  Potato = 392,
  //% block=Baked Potato
  BakedPotato = 393,
  //% block=Poisonous Potato
  PoisonousPotato = 394,
  //% block=Empty Map
  EmptyMap = 395,
  //% block=Empty Locator Map
  EmptyLocatorMap = 131467,
  //% block=Golden Carrot
  GoldenCarrot = 396,
  //% block=Carrot on a Stick
  CarrotOnAStick = 398,
  //% block=Nether Star
  NetherStar = 399,
  //% block=Pumpkin Pie
  PumpkinPie = 400,
  //% block=Enchanted Book
  EnchantedBook = 403,
  //% block=Redstone Comparator
  Comparator = 404,
  //% block=Nether Brick
  Netherbrick = 405,
  //% block=Nether Quartz
  Quartz = 406,
  //% block=Minecart with TNT
  MinecartWithTNT = 407,
  //% block=Minecart with Hopper
  MinecartWithHopper = 408,
  //% block=Prismarine Shard
  PrismarineShard = 409,
  //% block=Hopper
  Hopper = 410,
  //% block=Raw Rabbit
  RawRabbit = 411,
  //% block=Cooked Rabbit
  CookedRabbit = 412,
  //% block=Rabbit Stew
  RabbitStew = 413,
  //% block=Rabbit's Foot
  RabbitFoot = 414,
  //% block=Rabbit Hide
  RabbitHide = 415,
  //% block=Leather Horse Armor
  LeatherHorseArmor = 416,
  //% block=Iron Horse Armor
  IronHorseArmor = 417,
  //% block=Gold Horse Armor
  GoldHorseArmor = 418,
  //% block=Diamond Horse Armor
  DiamondHorseArmor = 419,
  //% block=Lead
  Lead = 420,
  //% block=Name Tag
  NameTag = 421,
  //% block=Prismarine Crystals
  PrismarineCrystals = 422,
  //% block=Raw Mutton
  RawMutton = 423,
  //% block=Cooked Mutton
  CookedMutton = 424,
  //% block=Armor Stand
  ArmorStand = 425,
  //% block=End Crystal
  EndCrystal = 426,
  //% block=Spruce Door
  SpruceDoor = 427,
  //% block=Birch Door
  BirchDoor = 428,
  //% block=Jungle Door
  JungleDoor = 429,
  //% block=Acacia Door
  AcaciaDoor = 430,
  //% block=Dark Oak Door
  DarkOakDoor = 431,
  //% block=Chorus Fruit
  ChorusFruit = 432,
  //% block=Popped Chorus Fruit
  ChorusFruitPopped = 433,
  //% block=Dragon's Breath
  DragonSBreath = 437,
  //% block=Elytra Wings
  Elytra = 444,
  //% block=Shulker Shell
  ShulkerShell = 445,
  //% block=Totem of Undying
  Totem = 450,
  //% block=Iron Nugget
  IronNugget = 452,
  //% block=Trident
  Trident = 455,
  //% block=Beetroot
  Beetroot = 457,
  //% block=Beetroot Seeds
  BeetrootSeeds = 458,
  //% block=Beetroot Soup
  BeetrootSoup = 459,
  //% block=Raw Salmon
  RawSalmon = 460,
  //% block=Clownfish
  Clownfish = 461,
  //% block=Pufferfish
  Pufferfish = 462,
  //% block=Cooked Salmon
  CookedSalmon = 463,
  //% block=Dried Kelp
  DriedKelp = 464,
  //% block=Enchanted Apple
  EnchantedApple = 466,
  //% block=Heart of the Sea
  HeartOfTheSea = 467,
  //% block=Sweet Berries
  SweetBerries = 477,
  //% block=Shield
  Shield = 513,
  //% block=Campfire
  Campfire = 720,
  //% block=Honeycomb
  Honeycomb = 736,
  //% block=Honey Bottle
  HoneyBottle = 737,
}

// The method of travel for player or mob
declare const enum TravelMethod {
  /**
   * Walking normally (default if on ground)
   */
  //% block=walk
  Walk = 1,
  /**
   * Swimming in water
   */
  //% block=swim water
  SwimWater = 2,
  /**
   * In the air when not flying (Falling up or down)
   */
  //% block=fall
  Fall = 3,
  /**
   * Climbing a ladder
   */
  //% block=climb
  Climb = 4,
  /**
   * Swimming in lava
   */
  //% block=swim lava
  SwimLava = 5,
  /**
   * Flying
   */
  //% block=fly
  Fly = 6,
  /**
   * Riding anything
   */
  //% block=riding
  Riding = 7,
  /**
   * Sneaking
   */
  //% block=sneak
  Sneak = 8,
  /**
   * Sprinting
   */
  //% block=sprint
  Sprint = 9,
  /**
   * Bounce
   */
  //% block=bounce
  Bounce = 10,
}

declare const enum TestForBlocksMask {
  /**
   * Every block in the source and destination regions must match exactly.
   */
  //% block=all
  All = 0,
  /**
   * Air blocks in the source region will match any block in the destination region.
   */
  //% block=masked
  Masked = 1,
}

declare const enum CloneMask {
  //% block=replace
  Replace = 0,
  //% block=masked
  Masked = 1,
}

declare const enum CloneMode {
  //% block=normal
  Normal = 0,
  //% block=move
  Move = 1,
  //% block=force
  Force = 2,
}

declare const enum TargetSelectorKind {
  //% block=nearest player (@p)
  NearestPlayer = 0,
  //% block=yourself (@s)
  LocalPlayer = 1,
  //% block=random player (@r)
  RandomPlayer = 2,
  //% block=all players (@a)
  AllPlayers = 3,
  //% block=all entities (@e)
  AllEntities = 4,
  //% block=my Agent (@c)
  MyAgent = 5,
}

declare const enum Axis {
  //% block=x (East/West)
  X = 0,
  //% block=y (Up/Down)
  Y = 1,
  //% block=z (South/North)
  Z = 2,
}

declare const enum SixDirection {
  //% block=forward
  Forward = 0,
  //% block=back
  Back = 1,
  //% block=left
  Left = 2,
  //% block=right
  Right = 3,
  //% block=up
  Up = 4,
  //% block=down
  Down = 5,
}

declare const enum FourDirection {
  //% block=forward
  Forward = 0,
  //% block=back
  Back = 1,
  //% block=left
  Left = 2,
  //% block=right
  Right = 3,
}

declare const enum TurnDirection {
  //% block=left
  Left = 0,
  //% block=right
  Right = 1,
}

declare const enum CardinalDirection {
  //% block=North (negative Z)
  North = 0,
  //% block=East (positive X)
  East = 1,
  //% block=South (positive Z)
  South = 2,
  //% block=up (positive Y)
  Up = 3,
  //% block=West (negative X)
  West = 4,
  //% block=down (negative Y)
  Down = 5,
}

declare const enum CompassDirection {
  //% block=West (negative X)
  West = 0,
  //% block=East (positive X)
  East = 1,
  //% block=North (negative Z)
  North = 2,
  //% block=South (positive Z)
  South = 3,
}

declare const enum AnimalMob {
  //% block=chicken
  Chicken = 10,
  //% block=cow
  Cow = 11,
  //% block=pig
  Pig = 12,
  //% block=sheep
  Sheep = 13,
  //% block=wolf
  Wolf = 14,
  //% block=villager
  Villager = 15,
  //% block=mooshroom
  MushroomCow = 16,
  //% block=squid
  Squid = 17,
  //% block=rabbit
  Rabbit = 18,
  //% block=bat
  Bat = 19,
  //% block=ocelot
  Ocelot = 22,
  //% block=horse
  Horse = 23,
  //% block=donkey
  Donkey = 24,
  //% block=mule
  Mule = 25,
  //% block=skeleton horse
  SkeletonHorse = 26,
  //% block=zombie horse
  ZombieHorse = 27,
  //% block=polar bear
  PolarBear = 28,
  //% block=llama
  Llama = 29,
  //% block=parrot
  Parrot = 30,
  //% block=dolphin
  Dolphin = 31,
  //% block=sea turtle
  SeaTurtle = 74,
  //% block=cat
  Cat = 75,
  //% block=pufferfish
  Pufferfish = 108,
  //% block=salmon
  Salmon = 109,
  //% block=tropical fish
  TropicalFish = 111,
  //% block=cod
  Cod = 112,
  //% block=panda
  Panda = 113,
  //% block=wandering trader
  WanderingTrader = 118,
  //% block=fox
  Fox = 121,
  //% block=bee
  Bee = 122,
}

declare const enum MonsterMob {
  //% block=zombie
  Zombie = 32,
  //% block=creeper
  Creeper = 33,
  //% block=skeleton
  Skeleton = 34,
  //% block=spider
  Spider = 35,
  //% block=zombie pigman
  PigZombie = 36,
  //% block=slime
  Slime = 37,
  //% block=enderman
  Enderman = 38,
  //% block=silverfish
  Silverfish = 39,
  //% block=cave spider
  CaveSpider = 40,
  //% block=ghast
  Ghast = 41,
  //% block=magma cube
  LavaSlime = 42,
  //% block=blaze
  Blaze = 43,
  //% block=zombie villager
  ZombieVillager = 44,
  //% block=witch
  Witch = 45,
  //% block=stray
  Stray = 46,
  //% block=husk
  Husk = 47,
  //% block=wither skeleton
  WitherSkeleton = 48,
  //% block=guardian
  Guardian = 49,
  //% block=elder guardian
  ElderGuardian = 50,
  //% block=shulker
  Shulker = 54,
  //% block=endermite
  Endermite = 55,
  //% block=vindicator
  Vindicator = 57,
  //% block=phantom
  Phantom = 58,
  //% block=ravager
  Ravager = 59,
  //% block=evoker
  Evoker = 104,
  //% block=vex
  Vex = 105,
  //% block=drowned
  Drowned = 110,
  //% block=pillager
  Pillager = 114,
}

declare const enum ProjectileMob {
  //% block=primed tnt
  PrimedTnt = 65,
  //% block=xp bottle
  XpBottle = 68,
  //% block=xp orb
  XpOrb = 69,
  //% block=fireworks rocket
  FireworksRocket = 72,
  //% block=arrow
  Arrow = 80,
  //% block=snowball
  Snowball = 81,
  //% block=egg
  Egg = 82,
  //% block=splash potion
  SplashPotion = 86,
  //% block=lightning bolt
  LightningBolt = 93,
  //% block=evocation fang
  EvocationFang = 103,
}

declare const enum Effect {
  //% block=Speed
  Speed = 1,
  //% block=Slowness
  Slowness = 2,
  //% block=Haste
  Haste = 3,
  //% block=Mining Fatigue
  MiningFatigue = 4,
  //% block=Strength
  Strength = 5,
  //% block=Jump Boost
  JumpBoost = 8,
  //% block=Nausea
  Nausea = 9,
  //% block=Regeneration
  Regeneration = 10,
  //% block=Resistance
  Resistance = 11,
  //% block=Fire Resistance
  FireResistance = 12,
  //% block=Water Breathing
  WaterBreathing = 13,
  //% block=Invisibility
  Invisibility = 14,
  //% block=Blindness
  Blindness = 15,
  //% block=Night Vision
  NightVision = 16,
  //% block=Hunger
  Hunger = 17,
  //% block=Weakness
  Weakness = 18,
  //% block=Poison
  Poison = 19,
  //% block=Wither
  Wither = 20,
  //% block=Health Boost
  HealthBoost = 21,
  //% block=Absorption
  Absorption = 22,
  //% block=Levitation
  Levitation = 24,
}

declare const enum AgentCommand {
  //% block=attack
  Attack = 0,
  //% block=destroy
  Destroy = 1,
  //% block=till
  Till = 2,
  //% block=dropall
  DropAll = 3,
}

declare const enum AgentDetection {
  //% block=block
  Block = 0,
  //% block=redstone
  Redstone = 1,
}

declare const enum AgentInspection {
  //% block=block
  Block = 0,
  //% block=data
  Data = 1,
}

declare const enum BlockColor {
  //% block=white
  White = 14540253,
  //% block=orange
  Orange = 14384446,
  //% block=magenta
  Magenta = 11751612,
  //% block=light blue
  LightBlue = 7047881,
  //% block=yellow
  Yellow = 11642407,
  //% block=lime
  Lime = 4304440,
  //% block=pink
  Pink = 13665433,
  //% block=gray
  Gray = 4210752,
  //% block=light gray
  LightGray = 10133921,
  //% block=cyan
  Cyan = 3042953,
  //% block=purple
  Purple = 8273333,
  //% block=blue
  Blue = 3029133,
  //% block=brown
  Brown = 5190175,
  //% block=green
  Green = 3491355,
  //% block=red
  Red = 9843760,
  //% block=black
  Black = 1644054,
}

declare const enum GameMode {
  //% block=survival
  Survival = 0,
  //% block=creative
  Creative = 1,
  //% block=adventure
  Adventure = 2,
}

declare const enum Weather {
  //% block=clear
  Clear = 0,
  //% block=rain
  Rain = 1,
  //% block=thunder
  Thunder = 2,
}

// The time of day
declare const enum DayTime {
  //% block=day
  Day = 0,
  //% block=dawn
  Dawn = 23000,
  //% block=midday
  Midday = 6000,
  //% block=dusk
  Dusk = 12000,
  //% block=night
  Night = 14000,
  //% block=midnight
  Midnight = 18000,
}

// Fill options for exixting blocks. Control keeping, replacing, or destroying existing blocks
declare const enum FillOperation {
  /**
   * Replaces all blocks (including air) in the fill region with the specified block, without dropping blocks or block contents as entities.
   */
  //% block=replace
  Replace = 0,
  /**
   * Replaces only blocks on the outer edge of the fill region with the specified block. Inner blocks are changed to air, dropping their contents as entities but not themselves. If the fill region has no inner blocks (because it is smaller than three blocks in at least one dimension), acts like replace.
   */
  //% block=hollow
  Hollow = 1,
  /**
   * Replaces only blocks on the outer edge of the fill region with the specified block. Inner blocks are not affected. If the fill region has no inner blocks (because it is smaller than three blocks in at least one dimension), acts like replace.
   */
  //% block=outline
  Outline = 2,
  /**
   * Replaces only air blocks in the fill region with the specified block.
   */
  //% block=keep
  Keep = 3,
  /**
   * Replaces all blocks (including air) in the fill region with the specified block, dropping the existing blocks (including those that are unchanged) and block contents as entities as if they had been mined with an unenchanted diamond shovel or pickaxe. (Blocks that can only be mined with shears, such as vines, will not drop; neither will liquids.)
   */
  //% block=destroy
  Destroy = 4,
}

// Game rule for gameplay settings
declare const enum GameRule {
  //% block=PvP
  PvP = 0,
  //% block=drowning damage
  DrowningDamage = 1,
  //% block=fall damage
  FallDamage = 2,
  //% block=fire damage
  FireDamage = 3,
  //% block=daylight cycle
  DaylightCycle = 4,
  //% block=mob loot
  MobLoot = 5,
  //% block=mob spawning
  MobSpawning = 6,
  //% block=weather cycle
  WeatherCycle = 7,
  //% block=mob griefing
  MobGriefing = 8,
  //% block=block drops
  TileDrops = 9,
  //% block=keep inventory
  KeepInventory = 10,
  //% block=tnt explodes
  TntExplodes = 11,
  //% block=natural regeneration
  NaturalRegeneration = 12,
  //% block=command block output
  CommandBlockOutput = 13,
  //% block=entity drops
  EntityDrops = 14,
  //% block=fire spreads
  DoFireTick = 15,
  //% block=show player coordinate
  ShowCoordinates = 16,
}

// Game difficulty for gameplay settings
declare const enum GameDifficulty {
  //% block=peaceful
  Peaceful = 0,
  //% block=easy
  Easy = 1,
  //% block=normal
  Normal = 2,
  //% block=hard
  Hard = 3,
}

// Agent assist action
declare const enum AgentAssist {
  //% block=place on move
  PlaceOnMove = 0,
  //% block=place from any slot
  PlaceFromAnySlot = 1,
  //% block=destroy obstacles
  DestroyObstacles = 2,
  DetroyObstacles = 3,
}

// Time value type for time queries
declare const enum TimeQuery {
  //% block=gametime
  GameTime = 0,
  //% block=daytime
  DayTime = 1,
  //% block=day
  Day = 2,
  /**
   * The real-life time of day, expressed in Minecraft game ticks
   */
  //% block=real life
  RealLife = 3,
}

// Positions for aligning a lever when on or off
declare const enum LeverPosition {
  //% block=on block bottom pointing West
  BlockBottomEastWhenOff = 0,
  //% block=on block East side
  BlockSideFacingEast = 1,
  //% block=on block West side
  BlockSideFacingWest = 2,
  //% block=on block South side
  BlockSideFacingSouth = 3,
  //% block=on block North side
  BlockSideFacingNorth = 4,
  //% block=on block top pointing South
  BlockTopPointsSouthWhenOff = 5,
  //% block=on block top pointing West
  BlockTopPointsEastWhenOff = 6,
  //% block=on block bottom pointing South
  BlockBottomPointsSouthWhenOff = 7,
}

// Comparator modes
declare const enum ComparatorMode {
  //% block=compare
  Compare = 0,
  //% block=substract
  Substract = 1,
}

// Shape fill operators
declare const enum ShapeOperation {
  /**
   * Replaces all blocks (including air) in the fill region with the specified block, without dropping blocks or block contents as entities.
   */
  //% block=replace
  Replace = 0,
  /**
   * Replaces only blocks on the outer edge of the fill region with the specified block. Inner blocks are changed to air, dropping their contents as entities but not themselves. If the fill region has no inner blocks (because it is smaller than three blocks in at least one dimension), acts like replace.
   */
  //% block=hollow
  Hollow = 1,
  /**
   * Replaces only blocks on the outer edge of the fill region with the specified block. Inner blocks are not affected. If the fill region has no inner blocks (because it is smaller than three blocks in at least one dimension), acts like replace.
   */
  //% block=outline
  Outline = 2,
}

// Arguments valid for chat commands
declare const enum ChatArgument {
  number = 0,
  number2 = 1,
  string = 2,
  string2 = 3,
  position = 4,
  position2 = 5,
  selector = 6,
  selector2 = 7,
}

// Blocks that can change color
declare const enum ColoredBlock {
  //% block=wool
  Wool = 35,
  //% block=concrete
  Concrete = 236,
}

declare const FORWARD = SixDirection.Forward
declare const BACK = SixDirection.Back
declare const LEFT = SixDirection.Left
declare const RIGHT = SixDirection.Right
declare const UP = SixDirection.Up
declare const DOWN = SixDirection.Down
declare const NEAREST_PLAYER = TargetSelectorKind.NearestPlayer
declare const LOCAL_PLAYER = TargetSelectorKind.LocalPlayer
declare const RANDOM_PLAYER = TargetSelectorKind.RandomPlayer
declare const ALL_PLAYERS = TargetSelectorKind.AllPlayers
declare const ALL_ENTITIES = TargetSelectorKind.AllEntities
declare const MY_AGENT = TargetSelectorKind.MyAgent
declare const GRASS = Block.Grass
declare const AIR = Block.Air
declare const STONE = Block.Stone
declare const GRANITE = Block.Granite
declare const POLISHED_GRANITE = Block.PolishedGranite
declare const DIORITE = Block.Diorite
declare const POLISHED_DIORITE = Block.PolishedDiorite
declare const ANDESITE = Block.Andesite
declare const POLISHED_ANDESITE = Block.PolishedAndesite
declare const DIRT = Block.Dirt
declare const COARSE_DIRT = Block.CoarseDirt
declare const COBBLESTONE = Block.Cobblestone
declare const PLANKS_OAK = Block.PlanksOak
declare const PLANKS_SPRUCE = Block.PlanksSpruce
declare const PLANKS_BIRCH = Block.PlanksBirch
declare const PLANKS_JUNGLE = Block.PlanksJungle
declare const PLANKS_ACACIA = Block.PlanksAcacia
declare const PLANKS_DARK_OAK = Block.PlanksDarkOak
declare const OAK_SAPLING = Block.OakSapling
declare const SPRUCE_SAPLING = Block.SpruceSapling
declare const BIRCH_SAPLING = Block.BirchSapling
declare const JUNGLE_SAPLING = Block.JungleSapling
declare const ACACIA_SAPLING = Block.AcaciaSapling
declare const DARK_OAK_SAPLING = Block.DarkOakSapling
declare const BEDROCK = Block.Bedrock
declare const WATER = Block.Water
declare const LAVA = Block.Lava
declare const SAND = Block.Sand
declare const RED_SAND = Block.RedSand
declare const GRAVEL = Block.Gravel
declare const GOLD_ORE = Block.GoldOre
declare const IRON_ORE = Block.IronOre
declare const COAL_ORE = Block.CoalOre
declare const LOG_OAK = Block.LogOak
declare const LOG_SPRUCE = Block.LogSpruce
declare const LOG_BIRCH = Block.LogBirch
declare const LOG_JUNGLE = Block.LogJungle
declare const LEAVES_OAK = Block.LeavesOak
declare const LEAVES_SPRUCE = Block.LeavesSpruce
declare const LEAVES_BIRCH = Block.LeavesBirch
declare const LEAVES_JUNGLE = Block.LeavesJungle
declare const SPONGE = Block.Sponge
declare const WET_SPONGE = Block.WetSponge
declare const GLASS = Block.Glass
declare const LAPIS_ORE = Block.LapisOre
declare const LAPIS_LAZULI_BLOCK = Block.LapisLazuliBlock
declare const DISPENSER = Block.Dispenser
declare const SANDSTONE = Block.Sandstone
declare const CHISELED_SANDSTONE = Block.ChiseledSandstone
declare const SMOOTH_SANDSTONE = Block.SmoothSandstone
declare const NOTE_BLOCK = Block.NoteBlock
declare const BED = Block.Bed
declare const POWERED_RAIL = Block.PoweredRail
declare const DETECTOR_RAIL = Block.DetectorRail
declare const STICKY_PISTON = Block.StickyPiston
declare const COBWEB = Block.Cobweb
declare const TALLGRASS = Block.Tallgrass
declare const FERN = Block.Fern
declare const DEAD_BUSH = Block.DeadBush
declare const PISTON = Block.Piston
declare const WOOL = Block.Wool
declare const ORANGE_WOOL = Block.OrangeWool
declare const MAGENTA_WOOL = Block.MagentaWool
declare const LIGHT_BLUE_WOOL = Block.LightBlueWool
declare const YELLOW_WOOL = Block.YellowWool
declare const LIME_WOOL = Block.LimeWool
declare const PINK_WOOL = Block.PinkWool
declare const GRAY_WOOL = Block.GrayWool
declare const LIGHT_GRAY_WOOL = Block.LightGrayWool
declare const CYAN_WOOL = Block.CyanWool
declare const PURPLE_WOOL = Block.PurpleWool
declare const BLUE_WOOL = Block.BlueWool
declare const BROWN_WOOL = Block.BrownWool
declare const GREEN_WOOL = Block.GreenWool
declare const RED_WOOL = Block.RedWool
declare const BLACK_WOOL = Block.BlackWool
declare const YELLOW_FLOWER = Block.YellowFlower
declare const POPPY = Block.Poppy
declare const BLUE_ORCHID = Block.BlueOrchid
declare const ALLIUM = Block.Allium
declare const AZURE_BLUET = Block.AzureBluet
declare const RED_TULIP = Block.RedTulip
declare const ORANGE_TULIP = Block.OrangeTulip
declare const WHITE_TULIP = Block.WhiteTulip
declare const PINK_TULIP = Block.PinkTulip
declare const OXEYE_DAISY = Block.OxeyeDaisy
declare const BAMBOO = Block.Bamboo
declare const CORNFLOWER = Block.Cornflower
declare const LILY_OF_THE_VALLEY = Block.LilyOfTheValley
declare const BROWN_MUSHROOM = Block.BrownMushroom
declare const RED_MUSHROOM = Block.RedMushroom
declare const GOLD_BLOCK = Block.GoldBlock
declare const IRON_BLOCK = Block.IronBlock
declare const DOUBLE_STONE_SLAB = Block.DoubleStoneSlab
declare const STONE_SLAB = Block.StoneSlab
declare const SANDSTONE_SLAB = Block.SandstoneSlab
declare const COBBLESTONE_SLAB = Block.CobblestoneSlab
declare const BRICKS_SLAB = Block.BricksSlab
declare const STONE_BRICKS_SLAB = Block.StoneBricksSlab
declare const QUARTZ_SLAB = Block.QuartzSlab
declare const NETHER_BRICK_SLAB = Block.NetherBrickSlab
declare const BRICKS = Block.Bricks
declare const TNT = Block.TNT
declare const BOOKSHELF = Block.Bookshelf
declare const MOSS_STONE = Block.MossStone
declare const OBSIDIAN = Block.Obsidian
declare const TORCH = Block.Torch
declare const FIRE = Block.Fire
declare const MONSTER_SPAWNER = Block.MonsterSpawner
declare const OAK_WOOD_STAIRS = Block.OakWoodStairs
declare const CHEST = Block.Chest
declare const REDSTONE_WIRE = Block.RedstoneWire
declare const DIAMOND_ORE = Block.DiamondOre
declare const DIAMOND_BLOCK = Block.DiamondBlock
declare const CRAFTING_TABLE = Block.CraftingTable
declare const CROPS = Block.Crops
declare const FARMLAND = Block.Farmland
declare const FURNACE = Block.Furnace
declare const SIGN = Block.Sign
declare const LADDER = Block.Ladder
declare const RAIL = Block.Rail
declare const COBBLESTONE_STAIRS = Block.CobblestoneStairs
declare const LEVER = Block.Lever
declare const STONE_PRESSURE_PLATE = Block.StonePressurePlate
declare const WOODEN_PRESSURE_PLATE = Block.WoodenPressurePlate
declare const REDSTONE_ORE = Block.RedstoneOre
declare const REDSTONE_TORCH = Block.RedstoneTorch
declare const STONE_BUTTON = Block.StoneButton
declare const TOP_SNOW = Block.TopSnow
declare const ICE = Block.Ice
declare const SNOW = Block.Snow
declare const CACTUS = Block.Cactus
declare const CLAY = Block.Clay
declare const SUGAR_CANE = Block.SugarCane
declare const JUKEBOX = Block.Jukebox
declare const OAK_FENCE = Block.OakFence
declare const SPRUCE_FENCE = Block.SpruceFence
declare const BIRCH_FENCE = Block.BirchFence
declare const JUNGLE_FENCE = Block.JungleFence
declare const ACACIA_FENCE = Block.AcaciaFence
declare const DARK_OAK_FENCE = Block.DarkOakFence
declare const PUMPKIN = Block.Pumpkin
declare const NETHERRACK = Block.Netherrack
declare const SOUL_SAND = Block.SoulSand
declare const GLOWSTONE = Block.Glowstone
declare const JACK_O_LANTERN = Block.JackOLantern
declare const CAKE = Block.Cake
declare const UNPOWERED_REPEATER = Block.UnpoweredRepeater
declare const WOODEN_TRAPDOOR = Block.WoodenTrapdoor
declare const STONE_MONSTER_EGG = Block.StoneMonsterEgg
declare const COBBLESTONE_MONSTER_EGG = Block.CobblestoneMonsterEgg
declare const STONE_BRICK_MONSTER_EGG = Block.StoneBrickMonsterEgg
declare const MOSSY_STONE_BRICK_MONSTER_EGG = Block.MossyStoneBrickMonsterEgg
declare const CRACKED_STONE_BRICK_MONSTER_EGG = Block.CrackedStoneBrickMonsterEgg
declare const CHISELED_STONE_BRICK_MONSTER_EGG = Block.ChiseledStoneBrickMonsterEgg
declare const STONE_BRICKS = Block.StoneBricks
declare const MOSSY_STONE_BRICKS = Block.MossyStoneBricks
declare const CRACKED_STONE_BRICKS = Block.CrackedStoneBricks
declare const CHISELED_STONE_BRICKS = Block.ChiseledStoneBricks
declare const RED_MUSHROOM_BLOCK = Block.RedMushroomBlock
declare const IRON_BARS = Block.IronBars
declare const GLASS_PANE = Block.GlassPane
declare const MELON_BLOCK = Block.MelonBlock
declare const PUMPKIN_STEM = Block.PumpkinStem
declare const MELON_STEM = Block.MelonStem
declare const VINES = Block.Vines
declare const OAK_FENCE_GATE = Block.OakFenceGate
declare const BRICK_STAIRS = Block.BrickStairs
declare const STONE_BRICK_STAIRS = Block.StoneBrickStairs
declare const MYCELIUM = Block.Mycelium
declare const LILY_PAD = Block.LilyPad
declare const NETHER_BRICK = Block.NetherBrick
declare const NETHER_BRICK_FENCE = Block.NetherBrickFence
declare const NETHER_BRICK_STAIRS = Block.NetherBrickStairs
declare const NETHER_WART = Block.NetherWart
declare const ENCHANTMENT_TABLE = Block.EnchantmentTable
declare const BREWING_STAND = Block.BrewingStand
declare const CAULDRON = Block.Cauldron
declare const END_PORTAL = Block.EndPortal
declare const ENDSTONE = Block.Endstone
declare const DRAGON_EGG = Block.DragonEgg
declare const REDSTONE_LAMP = Block.RedstoneLamp
declare const DROPPER = Block.Dropper
declare const ACTIVATOR_RAIL = Block.ActivatorRail
declare const COCOA = Block.Cocoa
declare const SANDSTONE_STAIRS = Block.SandstoneStairs
declare const EMERALD_ORE = Block.EmeraldOre
declare const ENDER_CHEST = Block.EnderChest
declare const TRIPWIRE_HOOK = Block.TripwireHook
declare const TRIPWIRE = Block.Tripwire
declare const EMERALD_BLOCK = Block.EmeraldBlock
declare const SPRUCE_WOOD_STAIRS = Block.SpruceWoodStairs
declare const BIRCH_WOOD_STAIRS = Block.BirchWoodStairs
declare const JUNGLE_WOOD_STAIRS = Block.JungleWoodStairs
declare const BEACON = Block.Beacon
declare const COBBLESTONE_WALL = Block.CobblestoneWall
declare const MOSSY_COBBLESTONE_WALL = Block.MossyCobblestoneWall
declare const FLOWER_POT = Block.FlowerPot
declare const CARROTS = Block.Carrots
declare const POTATOES = Block.Potatoes
declare const WOODEN_BUTTON = Block.WoodenButton
declare const SKELETON_SKULL = Block.SkeletonSkull
declare const ANVIL = Block.Anvil
declare const SLIGHTLY_DAMAGED_ANVIL = Block.SlightlyDamagedAnvil
declare const VERY_DAMAGED_ANVIL = Block.VeryDamagedAnvil
declare const TRAPPED_CHEST = Block.TrappedChest
declare const WEIGHTED_PRESSURE_PLATE_LIGHT = Block.WeightedPressurePlateLight
declare const WEIGHTED_PRESSURE_PLATE_HEAVY = Block.WeightedPressurePlateHeavy
declare const UNPOWERED_COMPARATOR = Block.UnpoweredComparator
declare const DAYLIGHT_SENSOR = Block.DaylightSensor
declare const REDSTONE_BLOCK = Block.RedstoneBlock
declare const QUARTZ_ORE = Block.QuartzOre
declare const HOPPER = Block.Hopper
declare const BLOCK_OF_QUARTZ = Block.BlockOfQuartz
declare const CHISELED_QUARTZ_BLOCK = Block.ChiseledQuartzBlock
declare const PILLAR_QUARTZ_BLOCK = Block.PillarQuartzBlock
declare const QUARTZ_STAIRS = Block.QuartzStairs
declare const DOUBLE_WOODEN_SLAB = Block.DoubleWoodenSlab
declare const OAK_WOOD_SLAB = Block.OakWoodSlab
declare const SPRUCE_WOOD_SLAB = Block.SpruceWoodSlab
declare const BIRCH_WOOD_SLAB = Block.BirchWoodSlab
declare const JUNGLE_WOOD_SLAB = Block.JungleWoodSlab
declare const ACACIA_WOOD_SLAB = Block.AcaciaWoodSlab
declare const DARK_OAK_WOOD_SLAB = Block.DarkOakWoodSlab
declare const WHITE_TERRACOTTA = Block.WhiteTerracotta
declare const ORANGE_TERRACOTTA = Block.OrangeTerracotta
declare const MAGENTA_TERRACOTTA = Block.MagentaTerracotta
declare const LIGHT_BLUE_TERRACOTTA = Block.LightBlueTerracotta
declare const YELLOW_TERRACOTTA = Block.YellowTerracotta
declare const LIME_TERRACOTTA = Block.LimeTerracotta
declare const PINK_TERRACOTTA = Block.PinkTerracotta
declare const GRAY_TERRACOTTA = Block.GrayTerracotta
declare const LIGHT_GRAY_TERRACOTTA = Block.LightGrayTerracotta
declare const CYAN_TERRACOTTA = Block.CyanTerracotta
declare const PURPLE_TERRACOTTA = Block.PurpleTerracotta
declare const BLUE_TERRACOTTA = Block.BlueTerracotta
declare const BROWN_TERRACOTTA = Block.BrownTerracotta
declare const GREEN_TERRACOTTA = Block.GreenTerracotta
declare const RED_TERRACOTTA = Block.RedTerracotta
declare const BLACK_TERRACOTTA = Block.BlackTerracotta
declare const WHITE_STAINED_GLASS_PANE = Block.WhiteStainedGlassPane
declare const ORANGE_STAINED_GLASS_PANE = Block.OrangeStainedGlassPane
declare const MAGENTA_STAINED_GLASS_PANE = Block.MagentaStainedGlassPane
declare const LIGHT_BLUE_STAINED_GLASS_PANE = Block.LightBlueStainedGlassPane
declare const YELLOW_STAINED_GLASS_PANE = Block.YellowStainedGlassPane
declare const LIME_STAINED_GLASS_PANE = Block.LimeStainedGlassPane
declare const PINK_STAINED_GLASS_PANE = Block.PinkStainedGlassPane
declare const GRAY_STAINED_GLASS_PANE = Block.GrayStainedGlassPane
declare const LIGHT_GRAY_STAINED_GLASS_PANE = Block.LightGrayStainedGlassPane
declare const CYAN_STAINED_GLASS_PANE = Block.CyanStainedGlassPane
declare const PURPLE_STAINED_GLASS_PANE = Block.PurpleStainedGlassPane
declare const BLUE_STAINED_GLASS_PANE = Block.BlueStainedGlassPane
declare const BROWN_STAINED_GLASS_PANE = Block.BrownStainedGlassPane
declare const GREEN_STAINED_GLASS_PANE = Block.GreenStainedGlassPane
declare const RED_STAINED_GLASS_PANE = Block.RedStainedGlassPane
declare const BLACK_STAINED_GLASS_PANE = Block.BlackStainedGlassPane
declare const ACACIA_LEAVES = Block.AcaciaLeaves
declare const DARK_OAK_LEAVES = Block.DarkOakLeaves
declare const LOG_ACACIA = Block.LogAcacia
declare const LOG_DARK_OAK = Block.LogDarkOak
declare const ACACIA_WOOD_STAIRS = Block.AcaciaWoodStairs
declare const DARK_OAK_WOOD_STAIRS = Block.DarkOakWoodStairs
declare const SLIME_BLOCK = Block.SlimeBlock
declare const IRON_TRAPDOOR = Block.IronTrapdoor
declare const PRISMARINE = Block.Prismarine
declare const DARK_PRISMARINE = Block.DarkPrismarine
declare const PRISMARINE_BRICKS = Block.PrismarineBricks
declare const SEA_LANTERN = Block.SeaLantern
declare const HAY_BLOCK = Block.HayBlock
declare const WHITE_CARPET = Block.WhiteCarpet
declare const ORANGE_CARPET = Block.OrangeCarpet
declare const MAGENTA_CARPET = Block.MagentaCarpet
declare const LIGHT_BLUE_CARPET = Block.LightBlueCarpet
declare const YELLOW_CARPET = Block.YellowCarpet
declare const LIME_CARPET = Block.LimeCarpet
declare const PINK_CARPET = Block.PinkCarpet
declare const GRAY_CARPET = Block.GrayCarpet
declare const LIGHT_GRAY_CARPET = Block.LightGrayCarpet
declare const CYAN_CARPET = Block.CyanCarpet
declare const PURPLE_CARPET = Block.PurpleCarpet
declare const BLUE_CARPET = Block.BlueCarpet
declare const BROWN_CARPET = Block.BrownCarpet
declare const GREEN_CARPET = Block.GreenCarpet
declare const RED_CARPET = Block.RedCarpet
declare const BLACK_CARPET = Block.BlackCarpet
declare const HARDENED_CLAY = Block.HardenedClay
declare const COAL_BLOCK = Block.CoalBlock
declare const PACKED_ICE = Block.PackedIce
declare const SUNFLOWER = Block.Sunflower
declare const LILAC = Block.Lilac
declare const DOUBLE_TALLGRASS = Block.DoubleTallgrass
declare const LARGE_FERN = Block.LargeFern
declare const ROSE_BUSH = Block.RoseBush
declare const PEONY = Block.Peony
declare const RED_SANDSTONE = Block.RedSandstone
declare const CHISELED_RED_SANDSTONE = Block.ChiseledRedSandstone
declare const SMOOTH_RED_SANDSTONE = Block.SmoothRedSandstone
declare const RED_SANDSTONE_STAIRS = Block.RedSandstoneStairs
declare const DOUBLE_RED_SANDSTONE_SLAB = Block.DoubleRedSandstoneSlab
declare const RED_SANDSTONE_SLAB = Block.RedSandstoneSlab
declare const PURPUR_SLAB = Block.PurpurSlab
declare const PRISMARINE_SLAB = Block.PrismarineSlab
declare const DARK_PRISMARINE_SLAB = Block.DarkPrismarineSlab
declare const PRISMARINE_BRICK_SLAB = Block.PrismarineBrickSlab
declare const SPRUCE_FENCE_GATE = Block.SpruceFenceGate
declare const BIRCH_FENCE_GATE = Block.BirchFenceGate
declare const JUNGLE_FENCE_GATE = Block.JungleFenceGate
declare const DARK_OAK_FENCE_GATE = Block.DarkOakFenceGate
declare const ACACIA_FENCE_GATE = Block.AcaciaFenceGate
declare const GRASS_PATH = Block.GrassPath
declare const FRAME = Block.Frame
declare const CHORUS_FLOWER = Block.ChorusFlower
declare const PURPUR_BLOCK = Block.PurpurBlock
declare const PURPUR_PILLAR = Block.PurpurPillar
declare const PURPUR_STAIRS = Block.PurpurStairs
declare const SHULKER_BOX = Block.ShulkerBox
declare const END_STONE_BRICKS = Block.EndStoneBricks
declare const END_ROD = Block.EndRod
declare const MAGMA_BLOCK = Block.MagmaBlock
declare const NETHER_WART_BLOCK = Block.NetherWartBlock
declare const RED_NETHER_BRICK = Block.RedNetherBrick
declare const BONE_BLOCK = Block.BoneBlock
declare const WHITE_SHULKER_BOX = Block.WhiteShulkerBox
declare const ORANGE_SHULKER_BOX = Block.OrangeShulkerBox
declare const MAGENTA_SHULKER_BOX = Block.MagentaShulkerBox
declare const LIGHT_BLUE_SHULKER_BOX = Block.LightBlueShulkerBox
declare const YELLOW_SHULKER_BOX = Block.YellowShulkerBox
declare const LIME_SHULKER_BOX = Block.LimeShulkerBox
declare const PINK_SHULKER_BOX = Block.PinkShulkerBox
declare const GRAY_SHULKER_BOX = Block.GrayShulkerBox
declare const SILVER_SHULKER_BOX = Block.SilverShulkerBox
declare const CYAN_SHULKER_BOX = Block.CyanShulkerBox
declare const PURPLE_SHULKER_BOX = Block.PurpleShulkerBox
declare const BLUE_SHULKER_BOX = Block.BlueShulkerBox
declare const BROWN_SHULKER_BOX = Block.BrownShulkerBox
declare const GREEN_SHULKER_BOX = Block.GreenShulkerBox
declare const RED_SHULKER_BOX = Block.RedShulkerBox
declare const BLACK_SHULKER_BOX = Block.BlackShulkerBox
declare const PURPLE_GLAZED_TERRACOTTA = Block.PurpleGlazedTerracotta
declare const WHITE_GLAZED_TERRACOTTA = Block.WhiteGlazedTerracotta
declare const ORANGE_GLAZED_TERRACOTTA = Block.OrangeGlazedTerracotta
declare const MAGENTA_GLAZED_TERRACOTTA = Block.MagentaGlazedTerracotta
declare const LIGHT_BLUE_GLAZED_TERRACOTTA = Block.LightBlueGlazedTerracotta
declare const YELLOW_GLAZED_TERRACOTTA = Block.YellowGlazedTerracotta
declare const LIME_GLAZED_TERRACOTTA = Block.LimeGlazedTerracotta
declare const PINK_GLAZED_TERRACOTTA = Block.PinkGlazedTerracotta
declare const GRAY_GLAZED_TERRACOTTA = Block.GrayGlazedTerracotta
declare const LIGHT_GRAY_GLAZED_TERRACOTTA = Block.LightGrayGlazedTerracotta
declare const CYAN_GLAZED_TERRACOTTA = Block.CyanGlazedTerracotta
declare const BLUE_GLAZED_TERRACOTTA = Block.BlueGlazedTerracotta
declare const BROWN_GLAZED_TERRACOTTA = Block.BrownGlazedTerracotta
declare const GREEN_GLAZED_TERRACOTTA = Block.GreenGlazedTerracotta
declare const RED_GLAZED_TERRACOTTA = Block.RedGlazedTerracotta
declare const BLACK_GLAZED_TERRACOTTA = Block.BlackGlazedTerracotta
declare const WHITE_CONCRETE = Block.WhiteConcrete
declare const ORANGE_CONCRETE = Block.OrangeConcrete
declare const MAGENTA_CONCRETE = Block.MagentaConcrete
declare const LIGHT_BLUE_CONCRETE = Block.LightBlueConcrete
declare const YELLOW_CONCRETE = Block.YellowConcrete
declare const LIME_CONCRETE = Block.LimeConcrete
declare const PINK_CONCRETE = Block.PinkConcrete
declare const GRAY_CONCRETE = Block.GrayConcrete
declare const LIGHT_GRAY_CONCRETE = Block.LightGrayConcrete
declare const CYAN_CONCRETE = Block.CyanConcrete
declare const PURPLE_CONCRETE = Block.PurpleConcrete
declare const BLUE_CONCRETE = Block.BlueConcrete
declare const BROWN_CONCRETE = Block.BrownConcrete
declare const GREEN_CONCRETE = Block.GreenConcrete
declare const RED_CONCRETE = Block.RedConcrete
declare const BLACK_CONCRETE = Block.BlackConcrete
declare const WHITE_CONCRETE_POWDER = Block.WhiteConcretePowder
declare const ORANGE_CONCRETE_POWDER = Block.OrangeConcretePowder
declare const MAGENTA_CONCRETE_POWDER = Block.MagentaConcretePowder
declare const LIGHT_BLUE_CONCRETE_POWDER = Block.LightBlueConcretePowder
declare const YELLOW_CONCRETE_POWDER = Block.YellowConcretePowder
declare const LIME_CONCRETE_POWDER = Block.LimeConcretePowder
declare const PINK_CONCRETE_POWDER = Block.PinkConcretePowder
declare const GRAY_CONCRETE_POWDER = Block.GrayConcretePowder
declare const LIGHT_GRAY_CONCRETE_POWDER = Block.LightGrayConcretePowder
declare const CYAN_CONCRETE_POWDER = Block.CyanConcretePowder
declare const PURPLE_CONCRETE_POWDER = Block.PurpleConcretePowder
declare const BLUE_CONCRETE_POWDER = Block.BlueConcretePowder
declare const BROWN_CONCRETE_POWDER = Block.BrownConcretePowder
declare const GREEN_CONCRETE_POWDER = Block.GreenConcretePowder
declare const RED_CONCRETE_POWDER = Block.RedConcretePowder
declare const BLACK_CONCRETE_POWDER = Block.BlackConcretePowder
declare const CHORUS_PLANT = Block.ChorusPlant
declare const WHITE_STAINED_GLASS = Block.WhiteStainedGlass
declare const ORANGE_STAINED_GLASS = Block.OrangeStainedGlass
declare const MAGENTA_STAINED_GLASS = Block.MagentaStainedGlass
declare const LIGHT_BLUE_STAINED_GLASS = Block.LightBlueStainedGlass
declare const YELLOW_STAINED_GLASS = Block.YellowStainedGlass
declare const LIME_STAINED_GLASS = Block.LimeStainedGlass
declare const PINK_STAINED_GLASS = Block.PinkStainedGlass
declare const GRAY_STAINED_GLASS = Block.GrayStainedGlass
declare const LIGHT_GRAY_STAINED_GLASS = Block.LightGrayStainedGlass
declare const CYAN_STAINED_GLASS = Block.CyanStainedGlass
declare const PURPLE_STAINED_GLASS = Block.PurpleStainedGlass
declare const BLUE_STAINED_GLASS = Block.BlueStainedGlass
declare const BROWN_STAINED_GLASS = Block.BrownStainedGlass
declare const GREEN_STAINED_GLASS = Block.GreenStainedGlass
declare const RED_STAINED_GLASS = Block.RedStainedGlass
declare const BLACK_STAINED_GLASS = Block.BlackStainedGlass
declare const PODZOL = Block.Podzol
declare const BEETROOT = Block.Beetroot
declare const STONECUTTER = Block.Stonecutter
declare const OBSERVER = Block.Observer
declare const STRUCTURE_BLOCK = Block.StructureBlock
declare const PRISMARINE_STAIRS = Block.PrismarineStairs
declare const DARK_PRISMARINE_STAIRS = Block.DarkPrismarineStairs
declare const PRISMARINE_BRICK_STAIRS = Block.PrismarineBrickStairs
declare const STRIPPED_SPRUCE_WOOD = Block.StrippedSpruceWood
declare const STRIPPED_BIRCH_WOOD = Block.StrippedBirchWood
declare const STRIPPED_JUNGLE_WOOD = Block.StrippedJungleWood
declare const STRIPPED_ACACIA_WOOD = Block.StrippedAcaciaWood
declare const STRIPPED_DARK_OAK_WOOD = Block.StrippedDarkOakWood
declare const STRIPPED_OAK_WOOD = Block.StrippedOakWood
declare const SCAFFOLDING = Block.Scaffolding
declare const BLUE_ICE = Block.BlueIce
declare const SEAGRASS = Block.Seagrass
declare const TUBE_CORAL = Block.TubeCoral
declare const BRAIN_CORAL = Block.BrainCoral
declare const BUBBLE_CORAL = Block.BubbleCoral
declare const FIRE_CORAL = Block.FireCoral
declare const HORN_CORAL = Block.HornCoral
declare const TUBE_CORAL_BLOCK = Block.TubeCoralBlock
declare const BRAIN_CORAL_BLOCK = Block.BrainCoralBlock
declare const BUBBLE_CORAL_BLOCK = Block.BubbleCoralBlock
declare const FIRE_CORAL_BLOCK = Block.FireCoralBlock
declare const HORN_CORAL_BLOCK = Block.HornCoralBlock
declare const DEAD_TUBE_CORAL_BLOCK = Block.DeadTubeCoralBlock
declare const DEAD_BRAIN_CORAL_BLOCK = Block.DeadBrainCoralBlock
declare const DEAD_BUBBLE_CORAL_BLOCK = Block.DeadBubbleCoralBlock
declare const DEAD_FIRE_CORAL_BLOCK = Block.DeadFireCoralBlock
declare const DEAD_HORN_CORAL_BLOCK = Block.DeadHornCoralBlock
declare const TUBE_CORAL_FAN = Block.TubeCoralFan
declare const BRAIN_CORAL_FAN = Block.BrainCoralFan
declare const BUBBLE_CORAL_FAN = Block.BubbleCoralFan
declare const FIRE_CORAL_FAN = Block.FireCoralFan
declare const HORN_CORAL_FAN = Block.HornCoralFan
declare const DEAD_TUBE_CORAL_FAN = Block.DeadTubeCoralFan
declare const DEAD_BRAIN_CORAL_FAN = Block.DeadBrainCoralFan
declare const DEAD_BUBBLE_CORAL_FAN = Block.DeadBubbleCoralFan
declare const DEAD_FIRE_CORAL_FAN = Block.DeadFireCoralFan
declare const DEAD_HORN_CORAL_FAN = Block.DeadHornCoralFan
declare const KELP = Block.Kelp
declare const DRIED_KELP_BLOCK = Block.DriedKelpBlock
declare const ACACIA_BUTTON = Block.AcaciaButton
declare const BIRCH_BUTTON = Block.BirchButton
declare const DARK_OAK_BUTTON = Block.DarkOakButton
declare const JUNGLE_BUTTON = Block.JungleButton
declare const SPRUCE_BUTTON = Block.SpruceButton
declare const ACACIA_TRAPDOOR = Block.AcaciaTrapdoor
declare const BIRCH_TRAPDOOR = Block.BirchTrapdoor
declare const DARK_OAK_TRAPDOOR = Block.DarkOakTrapdoor
declare const JUNGLE_TRAPDOOR = Block.JungleTrapdoor
declare const SPRUCE_TRAPDOOR = Block.SpruceTrapdoor
declare const ACACIA_PRESSURE_PLATE = Block.AcaciaPressurePlate
declare const BIRCH_PRESSURE_PLATE = Block.BirchPressurePlate
declare const DARK_OAK_PRESSURE_PLATE = Block.DarkOakPressurePlate
declare const JUNGLE_PRESSURE_PLATE = Block.JunglePressurePlate
declare const SPRUCE_PRESSURE_PLATE = Block.SprucePressurePlate
declare const CARVED_PUMPKIN = Block.CarvedPumpkin
declare const SEA_PICKLE = Block.SeaPickle
declare const CARTOGRAPHY_TABLE = Block.CartographyTable
declare const FLETCHING_TABLE = Block.FletchingTable
declare const BLAST_FURNACE = Block.BlastFurnace
declare const STONECUTTER_BLOCK = Block.StonecutterBlock
declare const SMOKER = Block.Smoker
declare const SMITHING_TABLE = Block.SmithingTable
declare const BARREL = Block.Barrel
declare const LOOM = Block.Loom
declare const BELL = Block.Bell
declare const CAMPFIRE = Block.Campfire
declare const COMPOSTER = Block.Composter
declare const BEE_NEST = Block.BeeNest
declare const BEEHIVE = Block.Beehive
declare const HONEY_BLOCK = Block.HoneyBlock
declare const HONEYCOMB_BLOCK = Block.HoneycombBlock
declare const CHICKEN = AnimalMob.Chicken
declare const COW = AnimalMob.Cow
declare const PIG = AnimalMob.Pig
declare const SHEEP = AnimalMob.Sheep
declare const WOLF = AnimalMob.Wolf
declare const VILLAGER = AnimalMob.Villager
declare const MUSHROOM_COW = AnimalMob.MushroomCow
declare const SQUID = AnimalMob.Squid
declare const RABBIT = AnimalMob.Rabbit
declare const BAT = AnimalMob.Bat
declare const OCELOT = AnimalMob.Ocelot
declare const HORSE = AnimalMob.Horse
declare const DONKEY = AnimalMob.Donkey
declare const MULE = AnimalMob.Mule
declare const SKELETON_HORSE = AnimalMob.SkeletonHorse
declare const ZOMBIE_HORSE = AnimalMob.ZombieHorse
declare const POLAR_BEAR = AnimalMob.PolarBear
declare const LLAMA = AnimalMob.Llama
declare const PARROT = AnimalMob.Parrot
declare const DOLPHIN = AnimalMob.Dolphin
declare const SEA_TURTLE = AnimalMob.SeaTurtle
declare const CAT = AnimalMob.Cat
declare const PUFFERFISH = AnimalMob.Pufferfish
declare const SALMON = AnimalMob.Salmon
declare const TROPICAL_FISH = AnimalMob.TropicalFish
declare const COD = AnimalMob.Cod
declare const PANDA = AnimalMob.Panda
declare const WANDERING_TRADER = AnimalMob.WanderingTrader
declare const FOX = AnimalMob.Fox
declare const BEE = AnimalMob.Bee
declare const WALK = TravelMethod.Walk
declare const SWIM_WATER = TravelMethod.SwimWater
declare const FALL = TravelMethod.Fall
declare const CLIMB = TravelMethod.Climb
declare const SWIM_LAVA = TravelMethod.SwimLava
declare const FLY = TravelMethod.Fly
declare const RIDING = TravelMethod.Riding
declare const SNEAK = TravelMethod.Sneak
declare const SPRINT = TravelMethod.Sprint
declare const BOUNCE = TravelMethod.Bounce
declare const IRON_SHOVEL = Item.IronShovel
declare const IRON_PICKAXE = Item.IronPickaxe
declare const IRON_AXE = Item.IronAxe
declare const FLINT_AND_STEEL = Item.FlintAndSteel
declare const APPLE = Item.Apple
declare const BOW = Item.Bow
declare const ARROW = Item.Arrow
declare const COAL = Item.Coal
declare const CHARCOAL = Item.Charcoal
declare const DIAMOND = Item.Diamond
declare const IRON_INGOT = Item.IronIngot
declare const GOLD_INGOT = Item.GoldIngot
declare const IRON_SWORD = Item.IronSword
declare const WOODEN_SWORD = Item.WoodenSword
declare const WOODEN_SHOVEL = Item.WoodenShovel
declare const WOODEN_PICKAXE = Item.WoodenPickaxe
declare const WOODEN_AXE = Item.WoodenAxe
declare const STONE_SWORD = Item.StoneSword
declare const STONE_SHOVEL = Item.StoneShovel
declare const STONE_PICKAXE = Item.StonePickaxe
declare const STONE_AXE = Item.StoneAxe
declare const DIAMOND_SWORD = Item.DiamondSword
declare const DIAMOND_SHOVEL = Item.DiamondShovel
declare const DIAMOND_PICKAXE = Item.DiamondPickaxe
declare const DIAMOND_AXE = Item.DiamondAxe
declare const STICK = Item.Stick
declare const BOWL = Item.Bowl
declare const MUSHROOM_STEW = Item.MushroomStew
declare const GOLDEN_SWORD = Item.GoldenSword
declare const GOLDEN_SHOVEL = Item.GoldenShovel
declare const GOLDEN_PICKAXE = Item.GoldenPickaxe
declare const GOLDEN_AXE = Item.GoldenAxe
declare const STRING = Item.String
declare const FEATHER = Item.Feather
declare const GUNPOWDER = Item.Gunpowder
declare const WOODEN_HOE = Item.WoodenHoe
declare const STONE_HOE = Item.StoneHoe
declare const IRON_HOE = Item.IronHoe
declare const DIAMOND_HOE = Item.DiamondHoe
declare const GOLDEN_HOE = Item.GoldenHoe
declare const SEEDS = Item.Seeds
declare const WHEAT = Item.Wheat
declare const BREAD = Item.Bread
declare const LEATHER_CAP = Item.LeatherCap
declare const LEATHER_CHESTPLATE = Item.LeatherChestplate
declare const LEATHER_PANTS = Item.LeatherPants
declare const LEATHER_BOOTS = Item.LeatherBoots
declare const CHAINMAIL_HELMET = Item.ChainmailHelmet
declare const CHAINMAIL_CHESTPLATE = Item.ChainmailChestplate
declare const CHAINMAIL_LEGGINGS = Item.ChainmailLeggings
declare const CHAINMAIL_BOOTS = Item.ChainmailBoots
declare const IRON_HELMET = Item.IronHelmet
declare const IRON_CHESTPLATE = Item.IronChestplate
declare const IRON_LEGGINGS = Item.IronLeggings
declare const IRON_BOOTS = Item.IronBoots
declare const DIAMOND_HELMET = Item.DiamondHelmet
declare const DIAMOND_CHESTPLATE = Item.DiamondChestplate
declare const DIAMOND_LEGGINGS = Item.DiamondLeggings
declare const DIAMOND_BOOTS = Item.DiamondBoots
declare const GOLDEN_HELMET = Item.GoldenHelmet
declare const GOLDEN_CHESTPLATE = Item.GoldenChestplate
declare const GOLDEN_LEGGINGS = Item.GoldenLeggings
declare const GOLDEN_BOOTS = Item.GoldenBoots
declare const FLINT = Item.Flint
declare const RAW_PORKCHOP = Item.RawPorkchop
declare const COOKED_PORKCHOP = Item.CookedPorkchop
declare const PAINTING = Item.Painting
declare const GOLDEN_APPLE = Item.GoldenApple
declare const SIGN_ITEM = Item.Sign
declare const OAK_DOOR = Item.OakDoor
declare const BUCKET = Item.Bucket
declare const MILK = Item.Milk
declare const BUCKET_OF_COD = Item.BucketOfCod
declare const BUCKET_OF_SALMON = Item.BucketOfSalmon
declare const BUCKET_OF_TROPICAL_FISH = Item.BucketOfTropicalFish
declare const WATER_BUCKET = Item.WaterBucket
declare const LAVA_BUCKET = Item.LavaBucket
declare const MINECART = Item.Minecart
declare const SADDLE = Item.Saddle
declare const IRON_DOOR = Item.IronDoor
declare const REDSTONE = Item.Redstone
declare const SNOWBALL = Item.Snowball
declare const BOAT = Item.Boat
declare const SPRUCE_BOAT = Item.SpruceBoat
declare const BIRCH_BOAT = Item.BirchBoat
declare const JUNGLE_BOAT = Item.JungleBoat
declare const ACACIA_BOAT = Item.AcaciaBoat
declare const DARK_OAK_BOAT = Item.DarkOakBoat
declare const LEATHER = Item.Leather
declare const KELP_ITEM = Item.Kelp
declare const BRICK = Item.Brick
declare const CLAY_BALL = Item.ClayBall
declare const REEDS = Item.Reeds
declare const PAPER = Item.Paper
declare const BOOK = Item.Book
declare const SLIMEBALL = Item.Slimeball
declare const MINECART_WITH_CHEST = Item.MinecartWithChest
declare const EGG = Item.Egg
declare const COMPASS = Item.Compass
declare const FISHING_ROD = Item.FishingRod
declare const CLOCK = Item.Clock
declare const GLOWSTONE_DUST = Item.GlowstoneDust
declare const RAW_FISH = Item.RawFish
declare const COOKED_FISH = Item.CookedFish
declare const INK_SAC = Item.InkSac
declare const ROSE_RED = Item.RoseRed
declare const CACTUS_GREEN = Item.CactusGreen
declare const COCOA_BEANS = Item.CocoaBeans
declare const LAPIS_LAZULI = Item.LapisLazuli
declare const PURPLE_DYE = Item.PurpleDye
declare const CYAN_DYE = Item.CyanDye
declare const LIGHT_GRAY_DYE = Item.LightGrayDye
declare const GRAY_DYE = Item.GrayDye
declare const PINK_DYE = Item.PinkDye
declare const LIME_DYE = Item.LimeDye
declare const DANDELION_YELLOW = Item.DandelionYellow
declare const LIGHT_BLUE_DYE = Item.LightBlueDye
declare const MAGENTA_DYE = Item.MagentaDye
declare const ORANGE_DYE = Item.OrangeDye
declare const BONE_MEAL = Item.BoneMeal
declare const BONE = Item.Bone
declare const SUGAR = Item.Sugar
declare const CAKE_ITEM = Item.Cake
declare const BED_ITEM = Item.Bed
declare const ORANGE_BED = Item.OrangeBed
declare const MAGENTA_BED = Item.MagentaBed
declare const LIGHT_BLUE_BED = Item.LightBlueBed
declare const YELLOW_BED = Item.YellowBed
declare const LIME_BED = Item.LimeBed
declare const PINK_BED = Item.PinkBed
declare const GRAY_BED = Item.GrayBed
declare const LIGHT_GRAY_BED = Item.LightGrayBed
declare const CYAN_BED = Item.CyanBed
declare const PURPLE_BED = Item.PurpleBed
declare const BLUE_BED = Item.BlueBed
declare const BROWN_BED = Item.BrownBed
declare const GREEN_BED = Item.GreenBed
declare const RED_BED = Item.RedBed
declare const BLACK_BED = Item.BlackBed
declare const REPEATER = Item.Repeater
declare const COOKIE = Item.Cookie
declare const MAP = Item.Map
declare const SHEARS = Item.Shears
declare const MELON = Item.Melon
declare const PUMPKIN_SEEDS = Item.PumpkinSeeds
declare const MELON_SEEDS = Item.MelonSeeds
declare const RAW_BEEF = Item.RawBeef
declare const COOKED_BEEF = Item.CookedBeef
declare const RAW_CHICKEN = Item.RawChicken
declare const COOKED_CHICKEN = Item.CookedChicken
declare const ROTTEN_FLESH = Item.RottenFlesh
declare const ENDER_PEARL = Item.EnderPearl
declare const BLAZE_ROD = Item.BlazeRod
declare const GHAST_TEAR = Item.GhastTear
declare const GOLD_NUGGET = Item.GoldNugget
declare const NETHER_WART_ITEM = Item.NetherWart
declare const GLASS_BOTTLE = Item.GlassBottle
declare const SPIDER_EYE = Item.SpiderEye
declare const FERMENTED_SPIDER_EYE = Item.FermentedSpiderEye
declare const BLAZE_POWDER = Item.BlazePowder
declare const MAGMA_CREAM = Item.MagmaCream
declare const BREWING_STAND_ITEM = Item.BrewingStand
declare const CAULDRON_ITEM = Item.Cauldron
declare const ENDER_EYE = Item.EnderEye
declare const GLISTERING_MELON = Item.GlisteringMelon
declare const SPAWN_CHICKEN = Item.SpawnChicken
declare const SPAWN_COW = Item.SpawnCow
declare const SPAWN_PIG = Item.SpawnPig
declare const SPAWN_SHEEP = Item.SpawnSheep
declare const SPAWN_WOLF = Item.SpawnWolf
declare const SPAWN_VILLAGER = Item.SpawnVillager
declare const SPAWN_MOOSHROOM = Item.SpawnMooshroom
declare const SPAWN_SQUID = Item.SpawnSquid
declare const SPAWN_RABBIT = Item.SpawnRabbit
declare const SPAWN_BAT = Item.SpawnBat
declare const SPAWN_OCELOT = Item.SpawnOcelot
declare const SPAWN_HORSE = Item.SpawnHorse
declare const SPAWN_DONKEY = Item.SpawnDonkey
declare const SPAWN_MULE = Item.SpawnMule
declare const SPAWN_SKELETON_HORSE = Item.SpawnSkeletonHorse
declare const SPAWN_ZOMBIE_HORSE = Item.SpawnZombieHorse
declare const SPAWN_POLAR_BEAR = Item.SpawnPolarBear
declare const SPAWN_LLAMA = Item.SpawnLlama
declare const SPAWN_PARROT = Item.SpawnParrot
declare const SPAWN_DOLPHIN = Item.SpawnDolphin
declare const SPAWN_RAVAGER = Item.SpawnRavager
declare const SPAWN_ZOMBIE = Item.SpawnZombie
declare const SPAWN_CREEPER = Item.SpawnCreeper
declare const SPAWN_SKELETON = Item.SpawnSkeleton
declare const SPAWN_SPIDER = Item.SpawnSpider
declare const SPAWN_ZOMBIE_PIGMAN = Item.SpawnZombiePigman
declare const SPAWN_SLIME = Item.SpawnSlime
declare const SPAWN_ENDERMAN = Item.SpawnEnderman
declare const SPAWN_SILVERFISH = Item.SpawnSilverfish
declare const SPAWN_CAVE_SPIDER = Item.SpawnCaveSpider
declare const SPAWN_GHAST = Item.SpawnGhast
declare const SPAWN_MAGMA_CUBE = Item.SpawnMagmaCube
declare const SPAWN_BLAZE = Item.SpawnBlaze
declare const SPAWN_ZOMBIE_VILLAGER = Item.SpawnZombieVillager
declare const SPAWN_WITCH = Item.SpawnWitch
declare const SPAWN_STRAY = Item.SpawnStray
declare const SPAWN_HUSK = Item.SpawnHusk
declare const SPAWN_WITHER_SKELETON = Item.SpawnWitherSkeleton
declare const SPAWN_GUARDIAN = Item.SpawnGuardian
declare const SPAWN_ELDER_GUARDIAN = Item.SpawnElderGuardian
declare const SPAWN_SHULKER = Item.SpawnShulker
declare const SPAWN_ENDERMITE = Item.SpawnEndermite
declare const SPAWN_VINDICATOR = Item.SpawnVindicator
declare const SPAWN_PHANTOM = Item.SpawnPhantom
declare const SPAWN_SEA_TURTLE = Item.SpawnSeaTurtle
declare const SPAWN_CAT = Item.SpawnCat
declare const SPAWN_EVOKER = Item.SpawnEvoker
declare const SPAWN_VEX = Item.SpawnVex
declare const SPAWN_PUFFERFISH = Item.SpawnPufferfish
declare const SPAWN_SALMON = Item.SpawnSalmon
declare const SPAWN_DROWNED = Item.SpawnDrowned
declare const SPAWN_TROPICAL_FISH = Item.SpawnTropicalFish
declare const SPAWN_COD = Item.SpawnCod
declare const SPAWN_FOX = Item.SpawnFox
declare const SPAWN_PANDA = Item.SpawnPanda
declare const SPAWN_PILLAGER = Item.SpawnPillager
declare const SPAWN_WANDERING_TRADER = Item.SpawnWanderingTrader
declare const SPAWN_BEE = Item.SpawnBee
declare const EXPERIENCE_BOTTLE = Item.ExperienceBottle
declare const FIREBALL = Item.Fireball
declare const BOOK_QUILL = Item.BookQuill
declare const EMERALD = Item.Emerald
declare const ITEM_FRAME = Item.ItemFrame
declare const FLOWER_POT_ITEM = Item.FlowerPot
declare const CARROT = Item.Carrot
declare const POTATO = Item.Potato
declare const BAKED_POTATO = Item.BakedPotato
declare const POISONOUS_POTATO = Item.PoisonousPotato
declare const EMPTY_MAP = Item.EmptyMap
declare const EMPTY_LOCATOR_MAP = Item.EmptyLocatorMap
declare const GOLDEN_CARROT = Item.GoldenCarrot
declare const CARROT_ON_A_STICK = Item.CarrotOnAStick
declare const NETHER_STAR = Item.NetherStar
declare const PUMPKIN_PIE = Item.PumpkinPie
declare const ENCHANTED_BOOK = Item.EnchantedBook
declare const COMPARATOR = Item.Comparator
declare const NETHERBRICK = Item.Netherbrick
declare const QUARTZ = Item.Quartz
declare const MINECART_WITH_T_N_T = Item.MinecartWithTNT
declare const MINECART_WITH_HOPPER = Item.MinecartWithHopper
declare const PRISMARINE_SHARD = Item.PrismarineShard
declare const HOPPER_ITEM = Item.Hopper
declare const RAW_RABBIT = Item.RawRabbit
declare const COOKED_RABBIT = Item.CookedRabbit
declare const RABBIT_STEW = Item.RabbitStew
declare const RABBIT_FOOT = Item.RabbitFoot
declare const RABBIT_HIDE = Item.RabbitHide
declare const LEATHER_HORSE_ARMOR = Item.LeatherHorseArmor
declare const IRON_HORSE_ARMOR = Item.IronHorseArmor
declare const GOLD_HORSE_ARMOR = Item.GoldHorseArmor
declare const DIAMOND_HORSE_ARMOR = Item.DiamondHorseArmor
declare const LEAD = Item.Lead
declare const NAME_TAG = Item.NameTag
declare const PRISMARINE_CRYSTALS = Item.PrismarineCrystals
declare const RAW_MUTTON = Item.RawMutton
declare const COOKED_MUTTON = Item.CookedMutton
declare const ARMOR_STAND = Item.ArmorStand
declare const END_CRYSTAL = Item.EndCrystal
declare const SPRUCE_DOOR = Item.SpruceDoor
declare const BIRCH_DOOR = Item.BirchDoor
declare const JUNGLE_DOOR = Item.JungleDoor
declare const ACACIA_DOOR = Item.AcaciaDoor
declare const DARK_OAK_DOOR = Item.DarkOakDoor
declare const CHORUS_FRUIT = Item.ChorusFruit
declare const CHORUS_FRUIT_POPPED = Item.ChorusFruitPopped
declare const DRAGON_S_BREATH = Item.DragonSBreath
declare const ELYTRA = Item.Elytra
declare const SHULKER_SHELL = Item.ShulkerShell
declare const TOTEM = Item.Totem
declare const IRON_NUGGET = Item.IronNugget
declare const TRIDENT = Item.Trident
declare const BEETROOT_ITEM = Item.Beetroot
declare const BEETROOT_SEEDS = Item.BeetrootSeeds
declare const BEETROOT_SOUP = Item.BeetrootSoup
declare const RAW_SALMON = Item.RawSalmon
declare const CLOWNFISH = Item.Clownfish
declare const PUFFERFISH_ITEM = Item.Pufferfish
declare const COOKED_SALMON = Item.CookedSalmon
declare const DRIED_KELP = Item.DriedKelp
declare const ENCHANTED_APPLE = Item.EnchantedApple
declare const HEART_OF_THE_SEA = Item.HeartOfTheSea
declare const SWEET_BERRIES = Item.SweetBerries
declare const SHIELD = Item.Shield
declare const CAMPFIRE_ITEM = Item.Campfire
declare const HONEYCOMB = Item.Honeycomb
declare const HONEY_BOTTLE = Item.HoneyBottle
declare const PRIMED_TNT = ProjectileMob.PrimedTnt
declare const XP_BOTTLE = ProjectileMob.XpBottle
declare const XP_ORB = ProjectileMob.XpOrb
declare const FIREWORKS_ROCKET = ProjectileMob.FireworksRocket
declare const ARROW_PROJECTILE_MOB = ProjectileMob.Arrow
declare const SNOWBALL_PROJECTILE_MOB = ProjectileMob.Snowball
declare const EGG_PROJECTILE_MOB = ProjectileMob.Egg
declare const SPLASH_POTION = ProjectileMob.SplashPotion
declare const LIGHTNING_BOLT = ProjectileMob.LightningBolt
declare const EVOCATION_FANG = ProjectileMob.EvocationFang
declare const ZOMBIE = MonsterMob.Zombie
declare const CREEPER = MonsterMob.Creeper
declare const SKELETON = MonsterMob.Skeleton
declare const SPIDER = MonsterMob.Spider
declare const PIG_ZOMBIE = MonsterMob.PigZombie
declare const SLIME = MonsterMob.Slime
declare const ENDERMAN = MonsterMob.Enderman
declare const SILVERFISH = MonsterMob.Silverfish
declare const CAVE_SPIDER = MonsterMob.CaveSpider
declare const GHAST = MonsterMob.Ghast
declare const LAVA_SLIME = MonsterMob.LavaSlime
declare const BLAZE = MonsterMob.Blaze
declare const ZOMBIE_VILLAGER = MonsterMob.ZombieVillager
declare const WITCH = MonsterMob.Witch
declare const STRAY = MonsterMob.Stray
declare const HUSK = MonsterMob.Husk
declare const WITHER_SKELETON = MonsterMob.WitherSkeleton
declare const GUARDIAN = MonsterMob.Guardian
declare const ELDER_GUARDIAN = MonsterMob.ElderGuardian
declare const SHULKER = MonsterMob.Shulker
declare const ENDERMITE = MonsterMob.Endermite
declare const VINDICATOR = MonsterMob.Vindicator
declare const PHANTOM = MonsterMob.Phantom
declare const RAVAGER = MonsterMob.Ravager
declare const EVOKER = MonsterMob.Evoker
declare const VEX = MonsterMob.Vex
declare const DROWNED = MonsterMob.Drowned
declare const PILLAGER = MonsterMob.Pillager
declare const SPEED = Effect.Speed
declare const SLOWNESS = Effect.Slowness
declare const HASTE = Effect.Haste
declare const MINING_FATIGUE = Effect.MiningFatigue
declare const STRENGTH = Effect.Strength
declare const JUMP_BOOST = Effect.JumpBoost
declare const NAUSEA = Effect.Nausea
declare const REGENERATION = Effect.Regeneration
declare const RESISTANCE = Effect.Resistance
declare const FIRE_RESISTANCE = Effect.FireResistance
declare const WATER_BREATHING = Effect.WaterBreathing
declare const INVISIBILITY = Effect.Invisibility
declare const BLINDNESS = Effect.Blindness
declare const NIGHT_VISION = Effect.NightVision
declare const HUNGER = Effect.Hunger
declare const WEAKNESS = Effect.Weakness
declare const POISON = Effect.Poison
declare const WITHER = Effect.Wither
declare const HEALTH_BOOST = Effect.HealthBoost
declare const ABSORPTION = Effect.Absorption
declare const LEVITATION = Effect.Levitation
declare const ATTACK = AgentCommand.Attack
declare const DESTROY = AgentCommand.Destroy
declare const TILL = AgentCommand.Till
declare const DROP_ALL = AgentCommand.DropAll
declare const PLACE_ON_MOVE = AgentAssist.PlaceOnMove
declare const PLACE_FROM_ANY_SLOT = AgentAssist.PlaceFromAnySlot
declare const DESTROY_OBSTACLES = AgentAssist.DestroyObstacles
declare const WEST = CompassDirection.West
declare const EAST = CompassDirection.East
declare const NORTH = CompassDirection.North
declare const SOUTH = CompassDirection.South
declare const NORTH_CARDINAL_DIRECTION = CardinalDirection.North
declare const EAST_CARDINAL_DIRECTION = CardinalDirection.East
declare const SOUTH_CARDINAL_DIRECTION = CardinalDirection.South
declare const UP_CARDINAL_DIRECTION = CardinalDirection.Up
declare const WEST_CARDINAL_DIRECTION = CardinalDirection.West
declare const DOWN_CARDINAL_DIRECTION = CardinalDirection.Down
declare const WHITE = BlockColor.White
declare const ORANGE = BlockColor.Orange
declare const MAGENTA = BlockColor.Magenta
declare const LIGHT_BLUE = BlockColor.LightBlue
declare const YELLOW = BlockColor.Yellow
declare const LIME = BlockColor.Lime
declare const PINK = BlockColor.Pink
declare const GRAY = BlockColor.Gray
declare const LIGHT_GRAY = BlockColor.LightGray
declare const CYAN = BlockColor.Cyan
declare const PURPLE = BlockColor.Purple
declare const BLUE = BlockColor.Blue
declare const BROWN = BlockColor.Brown
declare const GREEN = BlockColor.Green
declare const RED = BlockColor.Red
declare const BLACK = BlockColor.Black
declare const DAY = DayTime.Day
declare const DAWN = DayTime.Dawn
declare const MIDDAY = DayTime.Midday
declare const DUSK = DayTime.Dusk
declare const NIGHT = DayTime.Night
declare const MIDNIGHT = DayTime.Midnight
declare const PV_P = GameRule.PvP
declare const DROWNING_DAMAGE = GameRule.DrowningDamage
declare const FALL_DAMAGE = GameRule.FallDamage
declare const FIRE_DAMAGE = GameRule.FireDamage
declare const DAYLIGHT_CYCLE = GameRule.DaylightCycle
declare const MOB_LOOT = GameRule.MobLoot
declare const MOB_SPAWNING = GameRule.MobSpawning
declare const WEATHER_CYCLE = GameRule.WeatherCycle
declare const MOB_GRIEFING = GameRule.MobGriefing
declare const TILE_DROPS = GameRule.TileDrops
declare const KEEP_INVENTORY = GameRule.KeepInventory
declare const TNT_EXPLODES = GameRule.TntExplodes
declare const NATURAL_REGENERATION = GameRule.NaturalRegeneration
declare const COMMAND_BLOCK_OUTPUT = GameRule.CommandBlockOutput
declare const ENTITY_DROPS = GameRule.EntityDrops
declare const DO_FIRE_TICK = GameRule.DoFireTick
declare const SHOW_COORDINATES = GameRule.ShowCoordinates
declare const SURVIVAL = GameMode.Survival
declare const CREATIVE = GameMode.Creative
declare const ADVENTURE = GameMode.Adventure
declare const CLEAR = Weather.Clear
declare const RAIN = Weather.Rain
declare const THUNDER = Weather.Thunder
declare const PEACEFUL = GameDifficulty.Peaceful
declare const EASY = GameDifficulty.Easy
declare const NORMAL = GameDifficulty.Normal
declare const HARD = GameDifficulty.Hard
declare const GAME_TIME = TimeQuery.GameTime
declare const DAY_TIME = TimeQuery.DayTime
declare const DAY_TIME_QUERY = TimeQuery.Day
declare const REAL_LIFE = TimeQuery.RealLife
declare const BLOCK_BOTTOM_EAST_WHEN_OFF = LeverPosition.BlockBottomEastWhenOff
declare const BLOCK_SIDE_FACING_EAST = LeverPosition.BlockSideFacingEast
declare const BLOCK_SIDE_FACING_WEST = LeverPosition.BlockSideFacingWest
declare const BLOCK_SIDE_FACING_SOUTH = LeverPosition.BlockSideFacingSouth
declare const BLOCK_SIDE_FACING_NORTH = LeverPosition.BlockSideFacingNorth
declare const BLOCK_TOP_POINTS_SOUTH_WHEN_OFF = LeverPosition.BlockTopPointsSouthWhenOff
declare const BLOCK_TOP_POINTS_EAST_WHEN_OFF = LeverPosition.BlockTopPointsEastWhenOff
declare const BLOCK_BOTTOM_POINTS_SOUTH_WHEN_OFF = LeverPosition.BlockBottomPointsSouthWhenOff
declare const WOOL_COLORED_BLOCK = ColoredBlock.Wool
declare const CONCRETE = ColoredBlock.Concrete
// Creates a new relative position: ~East/West, ~up/down, ~South/North
declare namespace pos {
  /**
   * Creates a new relative position: ~East/West, ~up/down, ~South/North
   * @param x the East (+x) or West (-x) coordinate, in blocks
   * @param y the up (+y) or down (-y) coordinate, in blocks
   * @param z the South (+z) or North (-z) coordinate, in blocks
   */
  //% help=positions/pos
  //% blockId=minecraftCreatePosition block=~%x|~%y|~%z
  function undefined(x: number, y: number, z: number): Position

}

// Creates a new local position: ~left/right, ~up/down, ~forwards/backwards
declare namespace posLocal {
  /**
   * Creates a new local position: ~left/right, ~up/down, ~forwards/backwards
   * @param x the left (+x) or right (-x) coordinate, in blocks
   * @param y the up (+y) or down (-y) coordinate, in blocks
   * @param z the forwards (+z) or backwards (-z) coordinate, in blocks
   */
  //% help=positions/pos
  function undefined(x: number, y: number, z: number): Position

}

// Creates a new world position: East/West, up/down, South/North
declare namespace world {
  /**
   * Creates a new world position: East/West, up/down, South/North
   * @param x the East (+x) or West (-x) coordinate, in blocks
   * @param y the up (+y) or down (-y) coordinate, in blocks
   * @param z the South (+z) or North (-z) coordinate, in blocks
   */
  //% help=positions/world
  //% blockId=minecraftCreateWorldPosition block=world %x|%y|%z
  function undefined(x: number, y: number, z: number): Position

}

// Picks a random position within the specified cubic region
declare namespace randpos {
  /**
   * Picks a random position within the specified cubic region
   * @param p1 the position of the first corner of the cubic region
   * @param p2 the position of the opposite corner of the cubic region
   */
  //% help=positions/randpos
  //% blockId=minecraftPosRandom block=pick random position|from %p1=minecraftCreatePosition|to %p2=minecraftCreatePosition
  function undefined(p1: Position, p2: Position): Position

}

// Runs code when you type a certain message in the game chat
declare namespace player {
  type ChatCommandArguments = {
    number: number;
    number2: number;
    string: string;
    string2: string;
    position: Position;
    position2: Position;
    selector: TargetSelector;
    selector2: TargetSelector;
  }
  
  /**
   * Runs code when you type a certain message in the game chat
   * @param command the chat keyword that will be associated with this command (``*`` for all messages), eg: "jump"
   */
  //% help=player/on-chat-command
  //% blockId=minecraftOnChatCommand block=on chat command %command
  function onChatCommand(command: string, argTypes: ChatArgument[], handler: (args: player.ChatCommandArguments) => void): void

  /**
   * Runs code when you type a certain message in the game chat
   * @param command the chat keyword that will be associated with this command (``*`` for all messages), eg: "jump"
   */
  //% help=player/on-chat-command
  //% blockId=minecraftOnChat block=on chat command %command
  function onChat(command: string, handler: (num1: number, num2: number, num3: number) => void): void

}

declare const LEFT_TURN = TurnDirection.Left
declare const RIGHT_TURN = TurnDirection.Right
// Posts a message to the game chat
declare namespace player {
  /**
   * Posts a message to the game chat
   * @param message the message to display in the chat
   */
  //% help=player/say
  //% blockId=minecraftSay block=say %message
  function say(message: any): void

  /**
   * Whispers a message to targets
   * @param target a selector of entities
   * @param message the text to whisper, eg: "Hi!"
   */
  //% help=player/tell
  //% blockId=minecraftTell block=tell %target=minecraftTarget|%message
  function tell(target: TargetSelector, message: any): void

}

// Effect field
declare namespace mobs {
  /**
   * Effect field
   * @param effect an effect
   */
  //% blockId=minecraftEffectField block=%effect
  function __effect(effect: Effect): number

  /**
   * Represents an animal from the game
   * @param name the type of the animal
   */
  //% help=mobs/animal
  //% blockId=minecraftAnimal block=animal %name
  function animal(name: AnimalMob): number

  /**
   * Represents a monster from the game
   * @param name the type of the monster
   */
  function __monster(name: MonsterMob): number

  /**
   * Represents a projectile from the game
   * @param name the type of the projectile
   */
  //% help=mobs/projectile
  //% blockId=minecraftProjectile block=projectile %name
  function projectile(name: ProjectileMob): number

}

// Represents a block from the game
declare namespace blocks {
  /**
   * Represents a block from the game
   * @param block the block
   */
  //% help=blocks/block
  //% blockId=minecraftBlock block=%block
  function block(block: Block): number

  /**
   * Represents an item from the game
   * @param item the item
   */
  //% help=blocks/item
  //% blockId=minecraftItem block=item %item
  function item(item: Item): number

}

// Buffer empty impl, required for python
declare type Buffer = {
}

// Turn the agent left by 90 degrees.
declare namespace agent {
  /**
   * Turn the agent left by 90 degrees.
   */
  //% help=agent/turn
  //% blockId=agentturnleft block=agent turn left
  function turnLeft(): void

  /**
   * Turn the agent right by 90 degrees.
   */
  //% help=agent/turn
  //% blockId=agentturnright block=agent turn right
  function turnRight(): void

}

// Queries information about a given target
declare namespace mobs {
  /**
   * Queries information about a given target
   * @param target a target selector that determines the entity you're querying
   */
  function queryTarget(target: TargetSelector): QueryTargetResult[]

}

// Fill lines, spheres and other geometric shapes
declare namespace shapes {
  /**
   * Fill a line of blocks from one position to another.
   */
  //% help=shapes/line
  //% blockId=minecraftLine block=line of %block=minecraftBlock|from %p0=minecraftCreatePosition|to %p1=minecraftCreatePosition
  function line(block: number, p0: Position, p1: Position, extrusion: Position): void

  /**
   * Fill a circle of blocks at a center position.
   * @param radius the radius of the circle, eg: 5
   */
  //% help=shapes/circle
  //% blockId=minecraftCircle block=circle of %block=minecraftBlock|center %center=minecraftCreatePosition|radius %radius|around %orientation|%operator
  function circle(block: number, center: Position, radius: number, orientation: Axis, operator: ShapeOperation): void

  /**
   * Fill a sphere of blocks at a center position.
   * @param radius the radius of the sphere, eg: 5
   */
  //% help=shapes/sphere
  //% blockId=minecraftSphere block=sphere of %block=minecraftBlock|center %center=minecraftCreatePosition|radius %radius|%operator
  function sphere(block: number, center: Position, radius: number, operator: ShapeOperation): void

}

// Fill lines, spheres and other geometric shapes
declare namespace shapes {
  /**
   * Fill a line of blocks from one position to another.
   */
  //% help=shapes/line
  //% blockId=minecraftLine block=line of %block=minecraftBlock|from %p0=minecraftCreatePosition|to %p1=minecraftCreatePosition
  function line(block: number, p0: Position, p1: Position, extrusion: Position): void

  /**
   * Fill a circle of blocks at a center position.
   * @param radius the radius of the circle, eg: 5
   */
  //% help=shapes/circle
  //% blockId=minecraftCircle block=circle of %block=minecraftBlock|center %center=minecraftCreatePosition|radius %radius|around %orientation|%operator
  function circle(block: number, center: Position, radius: number, orientation: Axis, operator: ShapeOperation): void

  /**
   * Fill a sphere of blocks at a center position.
   * @param radius the radius of the sphere, eg: 5
   */
  //% help=shapes/sphere
  //% blockId=minecraftSphere block=sphere of %block=minecraftBlock|center %center=minecraftCreatePosition|radius %radius|%operator
  function sphere(block: number, center: Position, radius: number, operator: ShapeOperation): void

}

// A 3D builder interface
declare namespace builder {
  /**
   * Gets the current position of the builder
   */
  //% help=builder/position
  //% blockId=minecraftBuilderPosition block=builder position
  function position(): Position

  /**
   * Teleports the builder to the specified position
   * @param position the position to move the builder to
   */
  //% help=builder/teleport-to
  //% blockId=minecraftBuilderGoTo block=builder teleport to |%position=minecraftCreatePosition
  function teleportTo(position: Position): void

  /**
   * Moves the builder in the specified direction
   * @param direction the direction in which to move the builder
   * @param blocks how far the builder should move, in blocks, eg: 1
   */
  //% help=builder/move
  //% blockId=minecraftBuilderMove block=builder move|%direction|by %blocks
  function move(direction: SixDirection, blocks: number): void

  /**
   * Moves the builder in multiple directions at once
   * @param forward the number of blocks by which to move forward, eg: 1
   * @param up the number of blocks by which to move up, eg: 1
   * @param left the number of blocks by which to move left, eg: 1
   */
  //% help=builder/shift
  //% blockId=minecraftBuilderShift block=builder move forward %forward| up %up| left %left
  function shift(forward: number, up: number, left: number): void

  /**
   * Turns the builder in the specified direction
   * @param direction the turn direction, eg: TurnDirection.Left
   */
  //% help=builder/turn
  //% blockId=minecraftBuilderTurn block=builder turn|%direction
  function turn(direction: TurnDirection): void

  /**
   * Makes the builder face the specified direction
   * @param direction the direction that the builder should face after the turn
   */
  //% help=builder/face
  //% blockId=minecraftBuilderFace block=builder face|%direction
  function face(direction: CompassDirection): void

  /**
   * Marks the current builder's position
   */
  //% help=builder/mark
  //% blockId=minecraftBuilderMark block=builder place mark
  function mark(): void

  /**
   * Sets the builder's origin to the builder's current location
   */
  //% help=builder/set-origin
  //% blockId=minecraftBuilderSetOrigin block=builder set origin
  function setOrigin(): void

  /**
   * Teleports the builder to its origin
   */
  //% help=builder/teleport-to-origin
  //% blockId=minecraftBuilderTeleportOrigin block=builder teleport to origin
  function teleportToOrigin(): void

  /**
   * Places a block at the current location and sets the mark
   * @param block the type of block to place
   */
  //% help=builder/place
  //% blockId=minecraftBuilderPlace block=place %block=minecraftBlock
  function place(block: number): void

  /**
   * Creates a line of blocks between the builder's current position and the last marked position
   * @param block the type of block to use to build line
   */
  //% help=builder/line
  //% blockId=minecraftBuilderLine block=builder line from mark with %block=minecraftBlock
  function line(block: number): void

  /**
   * Fills the volume between the current position and the previous mark
   * @param block the type of block to use to fill the region
   */
  //% help=builder/fill
  //% blockId=minecraftBuilderFill block=builder fill from mark with %block=minecraftBlock
  function fill(block: number, operator: FillOperation): void

  /**
   * Traces the path travelled since the last marked position with the specified block type
   * @param block the type of block to use to trace the builder's path
   */
  //% help=builder/trace-path
  //% blockId=minecraftBuilderTrace block=builder trace path from mark with %block=minecraftBlock
  function tracePath(block: number): void

  /**
   * Raises a wall of the specified block type and height along the path the builder travelled since the last marked position
   * @param block the type of block to use for the wall
   * @param height the height of the wall in blocks, eg: 5
   */
  //% help=builder/raise-wall
  //% blockId=minecraftBuildereWall block=builder raise wall from mark with %block=minecraftBlock|of %height
  function raiseWall(block: number, height: number): void

  /**
   * Copies the cubic region from the last marked position to the builder's current position
   */
  //% help=builder/copy
  //% blockId=minecraftBuilderCopy block=builder copy from mark
  function copy(): void

  /**
   * Pastes the previously copied region at the builder's current position
   */
  //% help=builder/paste
  //% blockId=minecraftBuilderPaste block=builder paste
  function paste(): void

  /**
   * Pushes the builder's curent state onto the state stack
   */
  //% help=builder/push-state
  //% blockId=minecraftBuilderPushState block=builder push state
  function pushState(): void

  /**
   * Reverts the builder's state to the most recently pushed state on the state stack
   */
  //% help=builder/pop-state
  //% blockId=minecraftBuilderPopState block=builder pop state
  function popState(): void

}

// Commands the agent to attack in the given direction
declare namespace agent {
  /**
   * Commands the agent to attack in the given direction
   * @param direction the direction in which to attack
   */
  //% help=agent/attack
  //% blockId=minecraftAgentCommandAttack block=agent attack|%direction
  function attack(direction: SixDirection): void

  /**
   * Teleports the agent to the player
   */
  //% help=agent/teleport-to-player
  //% blockId=minecraftAgentTeleport block=agent teleport to player
  function teleportToPlayer(): void

}

// Runs code when a creature of a certain type is killed
declare namespace mobs {
  /**
   * Runs code when a creature of a certain type is killed
   * @param mob the type of creature
   */
  //% help=mobs/on-mob-killed
  //% blockId=minecraftMobKilled block=on %mob=minecraftAnimal|killed
  function onMobKilled(mob: number, handler: () => void): void

  /**
   * Applies a status effect to the specified target      Applies a status effect to the specified target
   * @param target a target selector that determines which entity will receive the effect
   * @param effect the effect to apply
   * @param duration the duration of the effect
   * @param amplifier the amplifier of the effect
   */
  //% help=mobs/apply-effect
  //% blockId=minecraftApplyEffect block=apply %effect=minecraftEffectField|to %target=xpminecraftTarget|duration %duration amplifier %amplifier
  function applyEffect(effect: number, target: TargetSelector, duration: number, amplifier: number): void

  /**
   * Clears all status effects from the specified target   Clears all status effects from the specified target
   * @param target a target selector that determines which entity will be cleared of effects
   */
  //% help=mobs/clear-effect
  //% blockId=minecraftClearEffect block=clear all effects from %target=xpminecraftTarget
  function clearEffect(target: TargetSelector): void

  /**
   * Gives blocks or items from the game to the specified players     Gives blocks or items from the game to the specified players
   * @param target a target selector that determines which players will receive the block or item
   * @param block the block or item to give
   * @param amount the quantity to give, eg: 1
   */
  //% help=mobs/give
  //% blockId=minecraftGive block=give %target=xpminecraftTarget|block or item %block=minecraftBlock|amount %amount
  function give(target: TargetSelector, block: number, amount: number): void

  /**
   * Teleports entities to another location    Teleports entities to another location
   * @param target a target selector that determines which entities will be teleported
   * @param destination the coordinates where the selected entities will be teleported to
   */
  //% help=mobs/teleport-to-position
  //% blockId=minecraftTeleport block=teleport %target=xpminecraftTarget|to %destination=minecraftCreatePosition
  function teleportToPosition(target: TargetSelector, destination: Position): void

  /**
   * Teleports entities to a player
   * @param target a target selector that determines which entities will be teleported
   * @param destination a target selector that determines which player the entities will be teleported to
   */
  //% help=mobs/teleport-to-player
  //% blockId=minecraftTeleportToPlayer block=teleport %target=minecraftTarget|to %destination=minecraftTarget
  function teleportToPlayer(target: TargetSelector, destination: TargetSelector): void

  /**
   * Applies a certain enchantment to the specified targets
   * @param target a target selector that determines which players will receive the enchantment
   * @param spell the code name of the enchantment, eg: "infinity"
   * @param level the strength level of the enchantment, eg: 1
   */
  //% help=mobs/enchant
  //% blockId=minecraftEnchant block=enchant %target=minecraftTarget|with %spell|of level %level
  function enchant(target: TargetSelector): void

  /**
   * Kills the selected entities
   * @param target a target selector that determines which entities will be killed
   */
  //% help=mobs/kill
  //% blockId=minecraftKill block=kill %target=minecraftTarget
  function kill(target: TargetSelector): void

  /**
   * Executes a command as other targets     Executes a command as other targets
   * @param target a target selector that determines which entities will execute the command
   * @param position the coordinates from which to run the command
   * @param command the full command which the selected targets will execute, eg: "say Hi!"
   */
  //% help=mobs/execute
  //% blockId=minecraftExecuteAsOther block=execute as %target=xpminecraftTarget|at %position=minecraftCreatePosition|command %command
  function execute(target: TargetSelector, position: Position, command: string): void

  /**
   * Represents a monster from the game
   * @param name the type of the monster
   */
  //% help=mobs/monster
  //% blockId=minecraftMonster block=monster %name
  function monster(name: MonsterMob): number

  /**
   * Selects a set of players or mobs
   * @param kind the type of entities that will be selected
   */
  //% help=mobs/selectors/target
  //% blockId=minecraftTarget block=%kind
  function target(kind: TargetSelectorKind): TargetSelector

  /**
   * Selects targets near a given position     Selects targets near a given position
   * @param target the type of entities that will be selected
   * @param pos the position near which to select targets
   * @param radius the distance (in blocks) from the specified position within which targets will be selected, eg: 5
   */
  //% help=mobs/selectors/near
  //% blockId=minecraftTargetNear block=%target=xpminecraftTarget|near to %pos=minecraftCreateWorldPosition|within radius %radios
  function near(target: TargetSelector, pos: Position, radius: number): TargetSelector

  /**
   * Selects the player with the given name
   * @param name the name of the player to select. eg: name
   */
  //% help=mobs/selectors/player-by-name
  //% blockId=minecraftTargetSelectName block=player named %name
  function playerByName(name: string): TargetSelector

  /**
   * Selects all players in the given game mode
   * @param mode the game mode in which all players will be selected
   */
  //% help=mobs/selectors/player-in-game-mode
  //% blockId=minecraftTargetSelectGameMode block=players in game mode %mode
  function playersInGameMode(mode: GameMode): TargetSelector

}

// Give commands, communicate, and respond to events that happen in the exploration
declare namespace user {
  /**
   * Returns the name of the current user (you)
   */
  //% help=user/name
  //% blockId=userminecraftMyName block=user name
  function name(): string

  /**
   * Posts a message to the exploration chat
   * @param message the message to display in the chat, eg: "Hi!"
   */
  //% help=user/say
  //% blockId=userminecraftSay block=say %message
  function say(message: any): void

  /**
   * Whispers a message to targets
   * @param target a selector of entities
   * @param message the text to whisper, eg: "Hi!"
   */
  //% help=user/tell
  //% blockId=userminecraftTell block=tell %target=xpminecraftTarget|%message
  function tell(target: TargetSelector, message: any): void

  /**
   * Teleports the current user to another position
   * @param to the destination position
   */
  //% help=user/teleport
  //% blockId=userminecraftPlayerTeleport block=teleport to %to=minecraftCreatePosition
  function teleport(to: Position): void

  /**
   * Gets the last message, if any
   */
  function message(): string

  /**
   * Runs code when another user whispers you a certain message
   * @param command the chat keyword that will be associated with this command (``*`` for all messages), eg: "jump"
   */
  //% help=user/on-tell-command
  //% blockId=userminecraftOnTellCommand block=on tell command %command
  function onTellCommand(command: string, handler: () => void): void

  /**
   * Executes a chat command in your code
   * @param command the chat command to run, eg: "jump"
   */
  //% help=user/run-chat-command
  //% blockId=userminecraftRunChatCommand block=run chat command %command
  function runChatCommand(command: string): void

  /**
   * Executes a chat command in your code with arguments
   * @param command the chat command to run, eg: "jump"
   * @param arg a string containing all the arguments you wish to give to the chat command
   */
  //% help=user/run-chat-command-with-arguments
  //% blockId=userminecraftRunChatCommandArgs block=run chat command %command|with %arg
  function runChatCommandWithArguments(command: string, arg: string): void

  /**
   * Runs code when the current user is eliminated
   */
  //% help=user/on-eliminated
  //% blockId=xpminecraftPlayerDied block=on user eliminated
  function onEliminated(handler: () => void): void

  /**
   * Runs code when the current user travels in a certain way
   * @param method the travel method
   */
  //% help=user/on-travelled
  //% blockId=userminecraftPlayerTravelled block=on user %method
  function onTravelled(method: TravelMethod, handler: () => void): void

  /**
   * Runs code when the current user gets teleported
   */
  //% help=user/on-teleported
  //% blockId=userminecraftPlayerOnTeleported block=on user teleported
  function onTeleported(handler: () => void): void

  /**
   * Runs code when the current user shoots an arrow
   */
  //% help=user/on-arrow-shot
  //% blockId=userminecraftOnArrowShot block=on arrow shot
  function onArrowShot(handler: () => void): void

  /**
   * Returns the world position of the current user
   */
  //% help=user/position
  //% blockId=userminecraftMyPosition block=user world position
  function position(): Position

  /**
   * Executes a exploration command as the current user
   * @param command the slash command to execute (you do not have to put the leading ``/``), eg: "say Hi!"
   */
  //% help=user/execute
  //% blockId=userminecraftExecute block=execute %command
  function execute(command: string): void

  /**
   * Runs code when an item is interacted with
   */
  //% help=user/on-item-interacted
  //% blockId=userminecraftOnItemInteracted block=on $item|used
  function onItemInteracted(item: number, handler: () => void): void

  /**
   * Runs code when you type a certain message in the chat window
   * @param command the chat keyword that will be associated with this command (``*`` for all messages), eg: "jump"
   */
  //% help=user/on-chat-command
  //% blockId=userminecraftOnChat block=on chat command %command
  function onChat(command: string, handler: (num1: number, num2: number, num3: number) => void): void

}

declare const enum ExplorationMode {
  //% block=survival
  Survival = 0,
  //% block=creative
  Creative = 1,
  //% block=adventure
  Adventure = 2,
}

// Rule for exploration settings
declare const enum ExplorationRule {
  //% block=PvP
  PvP = 0,
  //% block=drowning damage
  DrowningDamage = 1,
  //% block=fall damage
  FallDamage = 2,
  //% block=fire damage
  FireDamage = 3,
  //% block=daylight cycle
  DaylightCycle = 4,
  //% block=mob loot
  MobLoot = 5,
  //% block=mob spawning
  MobSpawning = 6,
  //% block=weather cycle
  WeatherCycle = 7,
  //% block=mob griefing
  MobGriefing = 8,
  //% block=block drops
  TileDrops = 9,
  //% block=keep inventory
  KeepInventory = 10,
  //% block=tnt explodes
  TntExplodes = 11,
  //% block=natural regeneration
  NaturalRegeneration = 12,
  //% block=command block output
  CommandBlockOutput = 13,
  //% block=entity drops
  EntityDrops = 14,
  //% block=fire spreads
  DoFireTick = 15,
  //% block=show user coordinate
  ShowCoordinates = 16,
}

// Commands to control the exploration mode, weather, time, and change the rules.
declare namespace exploration {
  /**
   * Change the exploration mode for the selected users
   * @param mode the desired exploration mode, eg: ExplorationMode.Survival
   * @param user a selector to determine which users to change the exploration mode for
   */
  //% help=exploration/set-exploration-mode
  //% blockId=xpminecraftGamemode block=change exploration mode to %mode|for %player=xpminecraftTarget
  function setExplorationMode(mode: ExplorationMode, user: TargetSelector): void

  /**
   * Set the current time of day to a preset time or a custom hour, in ticks
   * @param time the desired time of day, eg: DayTime.Day
   */
  //% help=exploration/time-set
  //% blockId=xpminecraftTimeSet block=time set %time=xpminecraftTime
  function timeSet(time: number): void

  /**
   * Add ticks to the current time of day
   * @param amount the number of ticks to add to the current time of day, eg: 100
   */
  //% help=exploration/time-add
  //% blockId=xpminecraftTimeAdd block=time add %amount
  function timeAdd(amount: number): void

  /**
   * Get the current time of day, in exploration ticks
   * @param query the type of time to query
   */
  //% help=exploration/time-query
  //% blockId=xpminecraftTimeQuery block=time query %query
  function timeQuery(query: ExplorationTimeQuery): number

  /**
   * Get the current time of day, in game ticks
   * @param query the type of time to query
   */
  //% help=exploration/daylight-time-query
  //% blockId=xpminecraftDaylightTimeQuery block=is time $query
  function isDaylightTimeAsync(query: DayTime): boolean

  /**
   * Represents a preset time of the day
   * @param time a preset time, eg: DateTime.Day
   */
  //% blockId=xpminecraftTime block=%time
  function time(time: DayTime): number

  /**
   * Change the current weather.
   * @param weather the desired weather, eg: Weather.Clear
   */
  //% help=exploration/set-weather
  //% blockId=xpminecraftWeather block=weather %weather
  function setWeather(weather: Weather): void

  /**
   * Starts raining if it isn't, or stops raining if it is.
   */
  //% help=exploration/toggle-downfall
  //% blockId=xpminecraftToggleDownfall block=toggle downfall
  function toggleDownfall(): void

  /**
   * Give experience points to the selected users
   * @param amount the number of experience points to give, eg: 10
   * @param target a selector to determine which users to give experience points to
   */
  //% help=exploration/xp
  //% blockId=xpminecraftXp block=xp give %amount|to %target=xpminecraftTarget
  function xp(amount: number, target: TargetSelector): void

  /**
   * Enable or disable an exploration rule
   * @param rule the exploration rule to change, eg: ExplorationRule.PvP
   * @param enabled whether the specified rule is enabled or not
   */
  //% help=exploration/set-exploration-rule
  //% blockId=xpminecraftGameRule block=change exploration rule %rule|to %enabled
  function setExplorationRule(rule: ExplorationRule, enabled: boolean): void

  /**
   * Changes the exploration difficulty
   * @param difficulty the new difficulty
   */
  //% blockId=xpsetDifficulty block=set difficulty to %difficulty
  function setDifficulty(difficulty: GameDifficulty): void

  /**
   * Shows a title and subtitle to the selected targets
   * @param target the users and entities to select
   * @param title the large title to display
   * @param subTitle the subtitle to display
   */
  //% help=exploration/title
  //% blockId=xpminecraftTitle block=show %target=xpminecraftTarget|title %title|subtitle %subTitle
  function title(target: TargetSelector, title: string, subTitle: string): void

}

declare const enum CreatureMob {
  //% block=freak
  Freak = 32,
  //% block=creeper
  Creeper = 33,
  //% block=skeleton
  Skeleton = 34,
  //% block=spider
  Spider = 35,
  //% block=zombie pigman
  PigZombie = 36,
  //% block=slime
  Slime = 37,
  //% block=enderman
  Enderman = 38,
  //% block=silverfish
  Silverfish = 39,
  //% block=cave spider
  CaveSpider = 40,
  //% block=big freak
  BigFreak = 41,
  //% block=magma cube
  LavaSlime = 42,
  //% block=blaze
  Blaze = 43,
  //% block=zombie villager
  ZombieVillager = 44,
  //% block=witch
  Witch = 45,
  //% block=stray
  Stray = 46,
  //% block=husk
  Husk = 47,
  //% block=wither skeleton
  WitherSkeleton = 48,
  //% block=guardian
  Guardian = 49,
  //% block=elder guardian
  ElderGuardian = 50,
  //% block=shulker
  Shulker = 54,
  //% block=endermite
  Endermite = 55,
  //% block=vindicator
  Vindicator = 57,
  //% block=phantom
  Phantom = 58,
  //% block=evoker
  Evoker = 104,
  //% block=vex
  Vex = 105,
  //% block=drowned
  Drowned = 110,
}

// Runs code when a creature of a certain type is eliminated
declare namespace mobs {
  /**
   * Runs code when a creature of a certain type is eliminated
   * @param mob the type of creature
   */
  //% help=mobs/on-mob-eliminated
  //% blockId=xpmobsminecraftMobKilled block=on %mob=minecraftAnimal|eliminated
  function onMobEliminated(mob: number, handler: () => void): void

  /**
   * Teleports entities to a user
   * @param target a target selector that determines which entities will be teleported
   * @param destination a target selector that determines which user the entities will be teleported to
   */
  //% help=mobs/teleport-to-user
  //% blockId=xpminecraftTeleportToPlayer block=teleport %target=xpminecraftTarget|to %destination=xpminecraftTarget
  function teleportToUser(target: TargetSelector, destination: TargetSelector): void

  /**
   * Applies a certain enchantment to the specified targets
   * @param target a target selector that determines which users will receive the boost
   * @param name the code name of the boost, eg: "infinity"
   * @param level the strength level of the boost, eg: 1
   */
  //% help=mobs/boost
  //% blockId=xpminecraftEnchant block=boost %target=xpminecraftTarget|with %name|of level %level
  function boost(target: TargetSelector, name: string, level: number): void

  /**
   * Eliminates the selected entities
   * @param target a target selector that determines which entities will be eliminated
   */
  //% help=mobs/eliminate
  //% blockId=xpminecraftKill block=eliminate %target=xpminecraftTarget
  function eliminate(target: TargetSelector): void

  /**
   * Represents a creature from the exploration
   * @param name the type of the creature
   */
  //% help=mobs/creature
  //% blockId=xpminecraftMonster block=creature %name
  function creature(name: CreatureMob): number

}

// Teleports the agent to the user
declare namespace agent {
  /**
   * Teleports the agent to the user
   */
  //% help=agent/teleport-to-user
  //% blockId=xpminecraftAgentTeleport block=agent teleport to user
  function teleportToUser(): void

}

// Selects a set of users or mobs
declare namespace mobs {
  /**
   * Selects a set of users or mobs
   * @param kind the type of entities that will be selected
   */
  //% help=mobs/selectors/target
  //% blockId=xpminecraftTarget block=%kind
  function targetUser(kind: TargetUserSelectorKind): TargetSelector

  /**
   * Selects all users in the given exploration mode
   * @param mode the exploration mode in which all users will be selected
   */
  //% help=mobs/selectors/user-in-exploration-mode
  //% blockId=xpminecraftTargetSelectGameMode block=users in exploration mode %mode
  function usersInExplorationMode(mode: ExplorationMode): TargetSelector

  /**
   * Selects the user with the given name
   * @param name the name of the user to select. eg: name
   */
  //% help=mobs/selectors/user-by-name
  //% blockId=xpminecraftTargetSelectName block=user named %name
  function userByName(name: string): TargetSelector

}

declare const enum TargetUserSelectorKind {
  //% block=nearest user
  NearestUser = 0,
  //% block=yourself
  LocalUser = 1,
  //% block=random user
  RandomUser = 2,
  //% block=all users
  AllUsers = 3,
  //% block=all entities
  AllEntities = 4,
}

// Time value type for time queries
declare const enum ExplorationTimeQuery {
  //% block=minecraft time
  MinecraftTime = 0,
  //% block=daytime
  DayTime = 1,
  //% block=day
  Day = 2,
  /**
   * The real-life time of day, expressed in Minecraft ticks
   */
  //% block=real life
  RealLife = 3,
}

declare const NEAREST_USER = TargetUserSelectorKind.NearestUser
declare const LOCAL_USER = TargetUserSelectorKind.LocalUser
declare const RANDOM_USER = TargetUserSelectorKind.RandomUser
declare const ALL_USERS = TargetUserSelectorKind.AllUsers
declare const ALL_ENTITIES_TARGET_USER_SELECTOR_KIND = TargetUserSelectorKind.AllEntities
declare const MINECRAFT_TIME = ExplorationTimeQuery.MinecraftTime
declare const DAY_TIME_EXPLORATION_TIME_QUERY = ExplorationTimeQuery.DayTime
declare const DAY_EXPLORATION_TIME_QUERY = ExplorationTimeQuery.Day
declare const REAL_LIFE_EXPLORATION_TIME_QUERY = ExplorationTimeQuery.RealLife
