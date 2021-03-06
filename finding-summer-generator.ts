// enums
enum Concrete {
    //% blockIdentity="blocks.block" enumval=196844 block="Light Blue Concrete"
    //% jres alias=LIGHT_BLUE_CPMCRETE
    LightBlueConcrete = Block.LightBlueConcrete
}

enum IronBlock {
    //% blockIdentity="blocks.block" enumval=42 block="Iron Block"
    //% jres alias=IRON_BLOCK
    IronBlock = Block.IronBlock
}

enum Block_System {

    //% 
    //% 
    EMERALD_BLOCK = Block.EmeraldBlock,
    //% 
    //% 
    LAPIS_LAZULI_BLOCK = Block.LapisLazuliBlock,
    //% 
    //% 
    GOLD_BLOCK = Block.GoldBlock,
    //% 
    //% 
    REDSTONE_BLOCK = Block.RedstoneBlock,
    //% blockIdentity="blocks.block" enumval=236 block="White Concrete"
    //% jres alias=WHITE_CONCRETE
}

enum Ice {
    //% blockIdentity="blocks.block" enumval=522 block="Blue Ice"
    //% jres alias=BLUE_ICE
    BlueIce = Block.BlueIce,
    //% blockIdentity="blocks.block" enumval=174 block="Packed Ice"
    //% jres alias=PACKED_ICE
    PackedIce = Block.PackedIce
}

enum Rocket_Color {
    //% blockIdentity="blocks.block" enumval=236 block="White Concrete"
    //% jres alias=WHITE_CONCRETE
    WHITE_CONCRETE = Block.WhiteConcrete,
    //% blockIdentity="blocks.block" enumval=524524 block="LightGray Concrete"
    //% jres alias=LIGHT_GRAY_CONCRETE
    LIGHT_GRAY_CONCRETE = Block.LightGrayConcrete,
    //% blockIdentity="blocks.block" enumval=458988 block="Gray Concrete"
    //% jres alias=GRAY_CONCRETE
    GRAY_CONCRETE = Block.GrayConcrete,
    //% blockIdentity="blocks.block" enumval=983276 block="Black Concrete"
    //% jres alias=BLACK_CONCRETE
    BLACK_CONCRETE = Block.BlackConcrete,
    //% blockIdentity="blocks.block" enumval=786668 block="Brown Concrete"
    //% jres alias=BROWN_CONCRETE
    BROWN_CONCRETE = Block.BrownConcrete,
    //% blockIdentity="blocks.block" enumval=917740 block="Red Concrete"
    //% jres alias=RED_CONCRETE
    RED_CONCRETE = Block.RedConcrete,
    //% blockIdentity="blocks.block" enumval=65772 block="Orange Concrete"
    //% jres alias=ORANGE_CONCRETE
    ORANGE_CONCRETE = Block.OrangeConcrete,
    //% blockIdentity="blocks.block" enumval=262380 block="Yellow Concrete"
    //% jres alias=YELLOW_CONCRETE
    YELLOW_CONCRETE = Block.YellowConcrete,
    //% blockIdentity="blocks.block" enumval=327916 block="Lime Concrete"
    //% jres alias=LIME_CONCRETE
    LIME_CONCRETE = Block.LimeConcrete,
    //% blockIdentity="blocks.block" enumval=852204 block="Green Concrete"
    //% jres alias=GREEN_CONCRETE
    GREEN_CONCRETE = Block.GreenConcrete,
    //% blockIdentity="blocks.block" enumval=590060 block="Cyan Concrete"
    //% jres alias=CYAN_CONCRETE
    CYAN_CONCRETE = Block.CyanConcrete,
    //% blockIdentity="blocks.block" enumval=196844 block="Light Blue Concrete"
    //% jres alias=LIGHT_BLUE_CONCRETE
    LIGHT_BLUE_CONCRETE = Block.LightBlueConcrete,
    //% blockIdentity="blocks.block" enumval=721132 block="Blue Concrete"
    //% jres alias=BLUE_CONCRETE
    BLUE_CONCRETE = Block.BlueConcrete,
    //% blockIdentity="blocks.block" enumval=655596 block="Purple Concrete"
    //% jres alias=PURPLE_CONCRETE
    PURPLE_CONCRETE = Block.PurpleConcrete,
    //% blockIdentity="blocks.block" enumval=131308 block="Magenta Concrete"
    //% jres alias=MAGENTA_CONCRETE
    MAGENTA_CONCRETE = Block.MagentaConcrete,
    //% blockIdentity="blocks.block" enumval=393452 block="Pink Concrete"
    //% jres alias=PINK_CONCRETE
    PINK_CONCRETE = Block.PinkConcrete,

}

// global variables
const stopBlock = BEDROCK
const stopPosition = world(35,1,0)
// let counting = 0
// let junk = 0
// let spcaing = 0
let count = -1;

namespace agent {
    export function getCardinalDirection(d: SixDirection) : CardinalDirection {
        if (d == SixDirection.Up) return CardinalDirection.Up;
        if (d == SixDirection.Down) return CardinalDirection.Down;

        let actionDirection = 180 + agent.getOrientation();
        switch (d) {
            case 0: break;
            case 1: actionDirection += 180; break;
            case 2: actionDirection += 270; break;
            case 3: actionDirection += 90; break;
            default: break;
        }
        actionDirection = (actionDirection % 360) - 180

        switch (actionDirection) {
            case -180: return CardinalDirection.North;
            case -90: return CardinalDirection.East;
            case 0: return CardinalDirection.South;
            case 90: return CardinalDirection.West;
            default: return -1;
        }
    }
}

//%  block="Finding Summer" weight=200 color=#BF9B30 icon="\u2605"
namespace fs {

    /**
     * Move Agent n spaces in the d direction
     */
    //% block="Move %d by %n"
    export function moveFS(d: SixDirection, n: number): void {
        for (let i = 0; i < n; i++){
            if(shouldStop()) return;

            agent.move(d, 1);
        }
    }

    /**
     * Turn Agent in the t direction
     */
    //% block="Turn %t"
    export function turnFS(t: TurnDirection): void {
        if(shouldStop()) return;

        agent.turn(t);
    }  

// Week 1
    /**
     * Filling hole by placing block in the d direction
     * @param block the block
     */    
    //% block="Filling hole by %block %d"
    export function fillHole(block: Concrete, d: SixDirection): void {

        if(shouldStop()) return;

        const check = [
            world(1214 ,60 ,-302), 
            world(1213 ,60 ,-304), 
            world(1211 ,60 ,-306), 
            world(1214 ,60 ,-306),
            world(1210 ,62 ,-303), 
        ];

        const dir = agent.getCardinalDirection(d);
        const agentPos = agent.getPosition().move(dir, 1);
        let canPlace = false;

        for (const c of check) {
            if (compareWorldPosition(agentPos,c)) {
                canPlace = true;
                break;
            }
        }
        if (canPlace == true) {
        agent.setItem(block, 1, 1)
        agent.setSlot(1)

        agent.place(d);
        } else {
        player.tell(mobs.target(LOCAL_PLAYER), "I can't fill at this position!")
        }
    }  

    /**
     * Replacing wall by placing block in the d direction
     * @param block the block
     */    
    //% block="Replacing wall by %block %d"
    export function replaceWall(block: IronBlock, d: SixDirection): void {
        if(shouldStop()) return;

        const check = [
            world(1249 ,33 ,-266), 
            world(1249 ,32 ,-265), 
            world(1249 ,31 ,-261), 
            world(1249 ,34 ,-260),
            world(1210 ,32 ,-259), 
        ];

        const dir = agent.getCardinalDirection(d);
        const agentPos = agent.getPosition().move(dir, 1);
        let canPlace = false;

        for (const c of check) {
            if (compareWorldPosition(agentPos,c)) {
                canPlace = true;
                break;
            }
        }
        if(canPlace==true){
        agent.setItem(block, 1, 1)
        agent.setSlot(1)

        agent.place(d);
        }else{
        player.tell(mobs.target(LOCAL_PLAYER), "I can't place Iron block at this position!")
    }
}  

    /**
     * Clean the leak in the d direction
     */
    //% block="Clean Leak %d"
    export function cleanLeak(d: SixDirection): void {
        if(shouldStop()) return;

        agent.destroy(d);
    }
    
    /**
     * Inspect in the d direction for crack
     */
    //% block="Crack is %d"
    export function locateCrack(d: SixDirection): boolean {
        if(shouldStop()) return false;

        const inspected = agent.inspect(AgentInspection.Block, d);

        return inspected === Block.RedstoneOre;
    }

    /**
     * Break the crack in the d direction
     */
    //% block="Break Crack %d"
    export function breakCrack(d: SixDirection): void {
        if(shouldStop()) return;

        agent.destroy(d);
    }


// Week 2
    /**
     * Pick up color coding block in the d direction
     */
    //% block="Picking Color Coding Block %d"
    export function pickBlock(d: SixDirection) {
        let count_1 = 0;
        let count_2 = 0;
        let count_3 = 0;
        let count_4 = 0;
        if (agent.inspect(AgentInspection.Block, d) == Block.GoldBlock) {
            agent.destroy(d);
            if (agent.getItemDetail(1) == Block.GoldBlock) {
                count_1 = agent.getItemCount(1);
            }
            agent.setItem(Block.GoldBlock, count_1 + 1, 1)
        };

        if (agent.inspect(AgentInspection.Block, d) == Block.RedstoneBlock) {
            agent.destroy(d);
            if (agent.getItemDetail(2) == Block.RedstoneBlock) {
                count_2 = agent.getItemCount(2);
            }
            agent.setItem(Block.RedstoneBlock, count_2 + 1, 2)
        };

        if (agent.inspect(AgentInspection.Block, d) == Block.LapisLazuliBlock) {
            agent.destroy(d);
            if (agent.getItemDetail(3) == Block.LapisLazuliBlock) {
                count_3 = agent.getItemCount(3);
            }
            agent.setItem(Block.LapisLazuliBlock, count_3 + 1, 3)
        };


        if (agent.inspect(AgentInspection.Block, d) == Block.EmeraldBlock) {
            agent.destroy(d);
            if (agent.getItemDetail(4) == Block.EmeraldBlock) {
                count_4 = agent.getItemCount(4);
            }
            agent.setItem(Block.EmeraldBlock, count_4 + 1, 4)
        };

    }

    /**
     * Placing block in the d direction
     * @param block the block
     */    
    //% block="Placing %block %d"
    export function repairIgnition(block: Block_System, d: SixDirection): void {


        if(shouldStop()) return;

        const check = [
            world(1083 ,46 ,-291), 
            world(1079 ,46 ,-291), 
            world(1079 ,46 ,-295), 
            world(1083 ,46 ,-295), 
        ];

        const dir = agent.getCardinalDirection(d);
        const agentPos = agent.getPosition().move(dir, 1);
        let canPlace = false;

        for (const c of check) {
            if (compareWorldPosition(agentPos,c)) {
                canPlace = true;
                break;
            }
        }

        if (canPlace == true) {
            let count_1 = 0;
            let count_2 = 0;
            let count_3 = 0;
            let count_4 = 0;
            if (agent.getItemCount(1) > 0  && agent.getItemDetail(1) == block) {
                agent.setSlot(1)
                agent.place(d)
                agent.setItem(Block.Air , count_1 + 1 , 1);
            } else if (agent.getItemCount(2) > 0 && agent.getItemDetail(2) == block) {
                agent.setSlot(2)
                agent.place(d)
                agent.setItem(Block.Air , count_2 + 1 , 2);
            } else if (agent.getItemCount(3) > 0  && agent.getItemDetail(3) == block) {
                agent.setSlot(3)
                agent.place(d)
                agent.setItem(Block.Air , count_3 + 1 , 3);
            } else if (agent.getItemCount(4) > 0  && agent.getItemDetail(4) == block) {
                agent.setSlot(4)
                agent.place(d)
                agent.setItem(Block.Air , count_4 + 1 , 4);
            } else {
                player.tell(mobs.target(LOCAL_PLAYER), "I don't have Block to place!")
            }             

        } else {
            player.tell(mobs.target(LOCAL_PLAYER), "I can't place Block at this position!")
        }
}

    /**
     * Pick up fuel in the d direction
     */
    //% block="Picking Fuel Around"
    export function pickFuel() {

        agent.collect(Item.Bucket);
    }

    /**
     * Fill the fuel Down
     */
    //% block="Filling Fuel %d"
    export function placeFuel() {
    
        const check = [
            world(1081, 45, -230), 
            world(1086, 45, -230), 
            world(1091, 45, -230)
        ];

        let canPlace = false;

        for (const c of check) {
            if (compareWorldPosition(agent.getPosition().toWorld(), c)) {
                canPlace = true;
                break;
            }
        }
        
        if (canPlace == true) {
            let count_1 = agent.getItemCount(1) ;
            let count_2 = 0 ;
            if (agent.getItemCount(1) > 0 && agent.getItemDetail(1) == BUCKET) {
                    agent.setItem(BUCKET,count_2 , 1)
                    agent.setItem(LAVA_BUCKET, 1, 2)
                    agent.setSlot(2)
                    agent.place(DOWN)
                     count_2 = count_1 -1;
                    if (count_1 == 1){ 
                    agent.setItem(Block.Air, count_1 +1  , 1) 
                } 
                    count_1 = count_2;
                } else {
                    player.tell(mobs.target(LOCAL_PLAYER), "I don't have LavaBucket to place Lava!")
                }
        }else{
            player.tell(mobs.target(LOCAL_PLAYER), "I can't place Lava at this position!")
        }
    }

    /**
     * Pick up coolant in the d direction
     */
    //% block="Picking Coolant %d"
    export function pickCoolant(d: SixDirection): void {

        if (agent.inspect(AgentInspection.Block, d) == Block.BlueIce) {
            agent.destroy(d);

            let count_1 = 0;

            if (agent.getItemDetail(1) == Block.BlueIce) {
                count_1 = agent.getItemCount(1);
            }
            agent.setItem(Block.BlueIce, count_1 + 1, 1)
        };

        if (agent.inspect(AgentInspection.Block, d) == Block.PackedIce) {
            agent.destroy(d);

            let count_2 = 0;
            
            if (agent.getItemDetail(2) == Block.PackedIce) {
                count_2 = agent.getItemCount(2);
            }
            agent.setItem(Block.PackedIce, count_2 + 1, 2)
        };
    }

    /**
     * Placing coolant in the d direction
     * @param block the block
     */    
    //% block="Placing Coolant %block %d"
    export function placeCoolant(block: Ice, d: SixDirection): void {
        if(shouldStop()) return;

        const check = [
            world(1058, 50, -265), 
            world(1058, 49, -265), 
            world(1058, 48, -265), 
            world(1058, 47, -265), 
            world(1058, 46, -265)
        ];

        const dir = agent.getCardinalDirection(d);
        const agentPos = agent.getPosition().move(dir, 1);
        let canPlace = false;

        for (const c of check) {
            if (compareWorldPosition(agentPos,c)) {
                canPlace = true;
                break;
            }
        }

        if (canPlace == true) {
            let count_1 = agent.getItemCount(1);
            let count_2 = agent.getItemCount(2);
            let count_3 = 0;
            if (agent.getItemCount(1) > 0 && agent.getItemDetail(1) == block) {
                agent.setSlot(1)
                agent.place(d)
                count_3 = count_1 -1 ;
                agent.setItem(Block.BlueIce, count_3 , 1)
                if (count_1 == 1){
                   agent.setItem(Block.Air, count_1 +1  , 1)
                }
                count_1 = count_3;
            } else if (agent.getItemCount(2) > 0 && agent.getItemDetail(2) == block) {
                agent.setSlot(2)
                agent.place(d);
                count_3 = count_2 -1 ;
                agent.setItem(Block.PackedIce, count_3 , 2)
                if (count_2 == 1){
                   agent.setItem(Block.Air, count_2 +1, 2)
                }
                count_2 = count_3;
            } else {
                player.tell(mobs.target(LOCAL_PLAYER), "I don't have coolant to place!")
            }             

        } else {
            player.tell(mobs.target(LOCAL_PLAYER), "I can't place coolant at this position!")
        };

    }  

    /**
     * Pick up receiver in the d direction
     */
    //% block="Picking Receiver %d"
    export function pickReceiver(d: SixDirection): void {

        if (agent.inspect(AgentInspection.Block, d) == Block.EndRod) {
            agent.destroy(d);

            let count_1 = 0;

            if (agent.getItemDetail(1) == Block.EndRod) {
                count_1 = agent.getItemCount(1);
            }
            agent.setItem(Block.EndRod, count_1 + 1, 1)
        }
    }

    /**
     * Place the Receiver in the d direction
     */
    //% block="Placing Receiver %d"
    export function placeReceiver(d: SixDirection): void {

        if(shouldStop()) return; 

        const check = [ 

            world(1112, 46, -267 ),  

            world(1117, 46, -267 ),  

            world(1117, 46, -259 ),  

            world(1112, 46, -259 ),   
 ]; 
        const dir = agent.getCardinalDirection(d); 
        const agentPos = agent.getPosition().move(dir, 1); 
        let canPlace = false;
        for (const c of check) {
            if (compareWorldPosition(agentPos,c)) {
                canPlace = true;
                break;
            }
        }
        if (canPlace == true) {
         let count_1 = agent.getItemCount(1);
         let count_2 = 0;
         if (agent.getItemCount(1) > 0 && agent.getItemDetail(1) == Block.EndRod) {
            agent.setSlot(1)
            agent.place(d)
            count_2 = count_1 -1  ;
            agent.setItem(Block.EndRod, count_2, 1)
            if (count_1 == 1){ 
             agent.setItem(Block.Air, count_1 +1  , 1) 
            } 
            count_1 = count_2;
         } else {
            player.tell(mobs.target(LOCAL_PLAYER), "I don't have receiver to place!")
         }
        }else {
             player.tell(mobs.target(LOCAL_PLAYER), "I can't place receiver at this position!") 
        }
    }
// Week 3
    /**
     * Pick up Nuclear Rod in the d direction
     */
    //% block="Pick up Nuclear Rod %d"
    export function pickMagmaFuel(d: SixDirection): void {

        if (agent.inspect(AgentInspection.Block, d) == Block.MagmaBlock) {
            agent.destroy(d);

            let count_1 = 0;

            if (agent.getItemDetail(1) == Block.MagmaBlock) {
                count_1 = agent.getItemCount(1);
            }
            agent.setItem(Block.MagmaBlock, count_1 + 1, 1)
        }
    }

    /**
     * Place the Nuclear Rod in the d direction
     */
    //% block="Placing Nuclear Rod %d"
    export function placeMagmaFuel(d: SixDirection): void {
    
        const check = [
            world(2212, 45, -302)
        ];

        const dir = agent.getCardinalDirection(d);
        const agentPos = agent.getPosition().move(dir, 1);
        let canPlace = false;

        for (const c of check) {
            if (compareWorldPosition(agentPos,c)) {
                canPlace = true;
                break;
            }
        }
        
        if (canPlace == true) {
            let count_1 = agent.getItemCount(1);
            let count_2 = 0;
            if (agent.getItemCount(1) > 0 && agent.getItemDetail(1) == Block.MagmaBlock) {
                agent.setSlot(1)
                agent.place(d);
                count_2 = count_1 -1 ;
            agent.setItem(Block.MagmaBlock, count_2, 1)
            if (count_1 == 1){ 
             agent.setItem(Block.Air, count_1 +1  , 1) 
            } 
            count_1 = count_2;
         } else {
                player.tell(mobs.target(LOCAL_PLAYER), "I don't have Nuclear Rod to place!")
            }
        } else {
            player.tell(mobs.target(LOCAL_PLAYER), "I can't place Nuclear Rod at this position!")
        };
    }

    /**
     * Pick up Color Block in the d direction
     */
    //% block="Pick up Color Block %d"
    export function pickRocketColor(d: SixDirection): void {
        let count_1 = agent.getItemCount(1);
        let count_2 = agent.getItemCount(2);
        let count_3 = agent.getItemCount(3);
        let count_4 = agent.getItemCount(4);
        let count_5 = agent.getItemCount(5);
        let count_6 = agent.getItemCount(6);
        let count_7 = agent.getItemCount(7);
        let count_8 = agent.getItemCount(8);
        let count_9 = agent.getItemCount(9);
        let count_10 = agent.getItemCount(10);
        let count_11 = agent.getItemCount(11);
        let count_12 = agent.getItemCount(12);
        let count_13 = agent.getItemCount(13);
        let count_14 = agent.getItemCount(14);
        let count_15 = agent.getItemCount(15);
        let count_16 = agent.getItemCount(16);      
        if (checkBlockFromAgent(WHITE_CONCRETE, d)) {
            agent.destroy(d);
            agent.setItem(WHITE_CONCRETE, count_1 + 1, 1)
        };

        if (checkBlockFromAgent(LIGHT_GRAY_CONCRETE, d)) {
            agent.destroy(d);
            agent.setItem(LIGHT_GRAY_CONCRETE, count_2 + 1, 2)
        };


        if (checkBlockFromAgent(GRAY_CONCRETE, d)) {
            agent.destroy(d);
            agent.setItem(GRAY_CONCRETE, count_3 + 1, 3)
        };
        
        if (checkBlockFromAgent(BLACK_CONCRETE, d)) {
            agent.destroy(d);
            agent.setItem(BLACK_CONCRETE, count_4 + 1, 4)
        };
        
        if (checkBlockFromAgent(BROWN_CONCRETE, d)) {
            agent.destroy(d);
            agent.setItem(BROWN_CONCRETE, count_5 + 1, 5)
        };
        
        if (checkBlockFromAgent(RED_CONCRETE, d)) {
            agent.destroy(d);
            agent.setItem(RED_CONCRETE, count_6 + 1, 6)
        };

        if (checkBlockFromAgent(ORANGE_CONCRETE, d)) {
            agent.destroy(d);
            agent.setItem(ORANGE_CONCRETE, count_7 + 1, 7)
        };

        if (checkBlockFromAgent(YELLOW_CONCRETE, d)) {
            agent.destroy(d);
            agent.setItem(YELLOW_CONCRETE, count_8 + 1, 8)
        };

        if (checkBlockFromAgent(LIME_CONCRETE, d)) {
            agent.destroy(d);
            agent.setItem(LIME_CONCRETE, count_9 + 1, 9)
        };

        if (checkBlockFromAgent(GREEN_CONCRETE, d)) {
            agent.destroy(d);
            agent.setItem(GREEN_CONCRETE, count_10 + 1, 10)
        };

        if (checkBlockFromAgent(CYAN_CONCRETE, d)) {
            agent.destroy(d);
            agent.setItem(CYAN_CONCRETE, count_11 + 1, 11)
        };

        if (checkBlockFromAgent(LIGHT_BLUE_CONCRETE, d)) {
            agent.destroy(d);
            agent.setItem(LIGHT_BLUE_CONCRETE, count_12 + 1, 12)
        };

        if (checkBlockFromAgent(BLUE_CONCRETE, d)) {
            agent.destroy(d);
            agent.setItem(BLUE_CONCRETE, count_13 + 1, 13)
        };

        if (checkBlockFromAgent(PURPLE_CONCRETE, d)) {
            agent.destroy(d);
            agent.setItem(PURPLE_CONCRETE, count_14 + 1, 14)
        };

        if (checkBlockFromAgent(MAGENTA_CONCRETE, d)) {
            agent.destroy(d);
            agent.setItem(MAGENTA_CONCRETE, count_15 + 1, 15)
        };

        if (checkBlockFromAgent(PINK_CONCRETE, d)) {
            agent.destroy(d);
            agent.setItem(PINK_CONCRETE, count_16 + 1, 16)
        };

    }

    /**
     * Place the Color BLock in the d direction
     */
    //% block="Placing Color %block %d"
    export function placeRocketColor(block: Rocket_Color, d: SixDirection): void {
    
        
        const check = [
            world(209, 10, -284),
            world(214, 10, -284),
            world(219, 10, -284)
        ];

        const dir = agent.getCardinalDirection(d);
        const agentPos = agent.getPosition().move(dir, 1);
        let canPlace = false;
        let color = block

        for (const c of check) {
            if (compareWorldPosition(agentPos,c)) {
                canPlace = true;
                break;
            }
        }

        if (canPlace == true) {
            let count_1 = agent.getItemCount(1);
            let count_2 = agent.getItemCount(2);
            let count_3 = agent.getItemCount(3);
            let count_4 = agent.getItemCount(4);
            let count_5 = agent.getItemCount(5);
            let count_6 = agent.getItemCount(6);
            let count_7 = agent.getItemCount(7);
            let count_8 = agent.getItemCount(8);
            let count_9 = agent.getItemCount(9);
            let count_10 = agent.getItemCount(10);
            let count_11 = agent.getItemCount(11);
            let count_12 = agent.getItemCount(12);
            let count_13 = agent.getItemCount(13);
            let count_14 = agent.getItemCount(14);
            let count_15 = agent.getItemCount(15);
            let count_16 = agent.getItemCount(16);
            let count_18 = 0 ;      
            if (agent.getItemCount(1) > 0 && block == 236){
                agent.setSlot(1)
                agent.place(d)
                count_18 = count_1 -1 ;
                agent.setItem(Block.WhiteConcrete, count_18 , 1)
                if (count_1 == 1){
                   agent.setItem(Block.Air, count_1 +1  , 1)
                }
                count_1 = count_18;
            } else if (agent.getItemCount(2) > 0 && block == 524524) {
                agent.setSlot(2)
                agent.place(d);
                count_18 = count_2 -1 ;
                agent.setItem(Block.LightGrayConcrete, count_18 , 2)
                if (count_2 == 1){
                   agent.setItem(Block.Air, count_2 +1, 2)
                }
                count_2 = count_18;
            } else if (agent.getItemCount(3) > 0 && block == 458988) {
                agent.setSlot(3)
                agent.place(d);
                count_18 = count_3 -1 ;
                agent.setItem(Block.GrayConcrete, count_18 , 3)
                if (count_3 == 1){
                   agent.setItem(Block.Air, count_3 +1, 3)
                }
                count_3 = count_18;
            } else if (agent.getItemCount(4) > 0 &&  block == 983276) {
                agent.setSlot(4)
                agent.place(d);
                count_18 = count_4 -1 ;
                agent.setItem(Block.BlackConcrete, count_18 , 4)
                if (count_4 == 1){
                   agent.setItem(Block.Air, count_4 +1, 4)
                }
                count_4 = count_18;
            }else if (agent.getItemCount(5) > 0 && block == 786668) {
                agent.setSlot(5)
                agent.place(d);
                count_18 = count_5 -1 ;
                agent.setItem( Block.BrownConcrete, count_18 , 5)
                if (count_5 == 1){
                   agent.setItem(Block.Air, count_5 +1, 5)
                }
                count_5 = count_18;
            }else if (agent.getItemCount(6) > 0 && block == 917740) {
                agent.setSlot(6)
                agent.place(d);
                count_18 = count_6 -1 ;
                agent.setItem(Block.RedConcrete, count_18 , 6)
                if (count_6 == 1){
                   agent.setItem(Block.Air, count_6 +1, 6)
                }
                count_6 = count_18;
            }else if (agent.getItemCount(7) > 0 && block == 65772) {
                agent.setSlot(7)
                agent.place(d);
                count_18 = count_7 -1 ;
                agent.setItem(Block.OrangeConcrete, count_18 , 7)
                if (count_7 == 1){
                   agent.setItem(Block.Air, count_7 +1, 7)
                }
                count_7 = count_18;
            }else if (agent.getItemCount(8) > 0 && block == 262380) {
                agent.setSlot(8)
                agent.place(d);
                count_18 = count_6 -1; 
                agent.setItem(Block.YellowConcrete, count_18 , 8)
                if (count_8 == 1){
                   agent.setItem(Block.Air, count_8 +1, 8)
                }
                count_6 = count_18;
            }else if (agent.getItemCount(9) > 0 && block == 327916) {
                agent.setSlot(9)
                agent.place(d);
                count_18 = count_9 -1; 
                agent.setItem(Block.LimeConcrete, count_18 , 9)
                if (count_9 == 1){
                   agent.setItem(Block.Air, count_9 +1, 9)
                }
                count_6 = count_18;
            }else if (agent.getItemCount(10) > 0 && block == 852204) {
                agent.setSlot(10)
                agent.place(d);
                count_18 = count_10 -1; 
                agent.setItem(Block.GreenConcrete, count_18 , 10)
                if (count_10 == 1){
                   agent.setItem(Block.Air, count_10 +1, 10)
                }
                count_10 = count_18;
            }else if (agent.getItemCount(11) > 0 && block == 590060) {
                agent.setSlot(11)
                agent.place(d);
                count_18 = count_11 -1; 
                agent.setItem(Block.CyanConcrete, count_18 , 11)
                if (count_11 == 1){
                   agent.setItem(Block.Air, count_11 +1, 11)
                }
                count_11 = count_18;
            }else if (agent.getItemCount(12) > 0 && block == 196844) {
                agent.setSlot(12)
                agent.place(d);
                count_18 = count_12 -1 ;
                agent.setItem(Block.LightBlueConcrete, count_18 , 12)
                if (count_12 == 1){
                   agent.setItem(Block.Air, count_12 +1, 12)
                }
                count_12 = count_18;
            }else if (agent.getItemCount(13) > 0 && block ==721132) {
                agent.setSlot(13)
                agent.place(d);
                count_18 = count_13 -1 ;
                agent.setItem(Block.BlueConcrete, count_18 , 13)
                if (count_13 == 1){
                   agent.setItem(Block.Air, count_13 +1, 13)
                }
                count_11 = count_18;
            }else if (agent.getItemCount(14) > 0 && block == 655596) {
                agent.setSlot(14)
                agent.place(d);
                count_18 = count_14 -1; 
                agent.setItem(Block.PurpleConcrete, count_18 , 14)
                if (count_14 == 1){
                   agent.setItem(Block.Air, count_14 +1, 14)
                }
                count_14 = count_18;
            }else if (agent.getItemCount(15) > 0 && block == 131308) {
                agent.setSlot(15)
                agent.place(d);
                count_18 = count_15 -1; 
                agent.setItem(Block.MagentaConcrete, count_18 , 15)
                if (count_15 == 1){
                   agent.setItem(Block.Air, count_15 +1, 15)
                }
                count_15 = count_18;
            }else if (agent.getItemCount(16) > 0 && block == 393452) {
                agent.setSlot(16)
                agent.place(d);
                count_18 = count_16 -1; 
                agent.setItem(Block.PinkConcrete, count_18 , 16)
                if (count_16 == 1){
                   agent.setItem(Block.Air, count_16 +1, 16)
                }
                count_16 = count_18;
            } else {
                player.tell(mobs.target(LOCAL_PLAYER), "I don't have color block to place!")
            }             

        } else {
            player.tell(mobs.target(LOCAL_PLAYER), "I can't place color block at this position!")
        };

    }  

    // Week 4
    /**
     * Let Agent move Foward and Back to count down 1 second.
     */
    //% block="Minus 1 seconds from %seconds"
    export function countDownRun (seconds: number) {
       
        agent.move(FORWARD, 6)
        agent.move(BACK, 6)
        count = count - 1
    }

    /**
     * Let Agent say the variable of seconds.
     */
    //% block="Announce seconds %seconds"
    export function countDownSay (seconds: number) {
        if (count == -1) count = seconds;
        player.say(count)
    }

    /**
     * Let agent moving up n blocks.
     */
    //% block=" Moving up %n"
    export function rocketLift (n: number) {
        agent.move(UP, n)
    }

    /**
     * Let agent move left 1 block.
     */
    //% block="Move left to avoid %junk"
    export function rocketLeft (junk: number) {
        if (count == -1) count = junk;
        agent.move(LEFT, 1)
        count = count + 1
    }

    /**
     * Let agent move right 1 block.
     */
    //% block="Move right to avoid %junk"
    export function rocketRight (junk: number) {
        if (count == -1) count = junk;
        agent.move(RIGHT, 1)
        count = count + 1
    }

    /**
     * Let Agent report how many junk avoided.
     */
    //% block="Report junk %junk"
    export function rocketReportJunk (junk: number) {
        // if (count == -1) count = junk;
        player.say(count)
    }

    /**
     * Counting the spacing between the satellite
     */
    //% block="Counting spaces left %spcaing"
    export function dockingLocateSpacing(spacing: number): void  {
        if (count == -1) count = spacing;
        
        const dockingLoaction = world(-2707, 55, -356);

        count = findSpacing(agent.getPosition().toWorld(), dockingLoaction)           

    }

    /**
     * Let Agent report how many spacing left between the satellite.
     */
    //% block="Report spacing %spacing"
    export function dockingReportSpacing (spacing: number) {
        player.say(count)
    }

    /**
     * Inspect underneath for airlock crack
     */
    //% block="Airlock crack is %d"
    export function airlockCrackLocate(d:SixDirection): boolean {
        if(shouldStop()) return false;
        const check = [
            world(-2640, 48, -363),
            world(-2640, 48, -362),
            world(-2640, 48, -361),

            world(-2640, 51, -360),
            world(-2640, 50, -360),
            world(-2640, 49, -360),

            world(-2640, 51, -364),
            world(-2640, 50, -364),
            world(-2640, 49, -364),

            world(-2640, 52, -363),
            world(-2640, 52, -362),
            world(-2640, 52, -361)
        ];

        const dir = agent.getCardinalDirection(d);
        const agentPos = agent.getPosition().move(dir, 1);
        let canPlace = false;

        for (const c of check) {
            if (compareWorldPosition(agentPos,c)) {
                canPlace = true;
                break;
            }
        }  
        if(agent.inspect(AgentInspection.Block, d) == Block.Air && canPlace == true){
            return true;   
        }else{
            return false;
        }

    }

    /**
     * Repair the airlock crack in the d direction
     */
    //% block="Repair airlock crack %d"
    export function airlockCrackRepair(d:SixDirection): void {

        const check = [
            world(-2640, 48, -363),
            world(-2640, 48, -362),
            world(-2640, 48, -361),

            world(-2640, 51, -360),
            world(-2640, 50, -360),
            world(-2640, 49, -360),

            world(-2640, 51, -364),
            world(-2640, 50, -364),
            world(-2640, 49, -364),

            world(-2640, 52, -363),
            world(-2640, 52, -362),
            world(-2640, 52, -361)
        ];

        const dir = agent.getCardinalDirection(d);
        const agentPos = agent.getPosition().move(dir, 1);
        let canPlace = false;

        for (const c of check) {
            if (compareWorldPosition(agentPos,c)) {
                canPlace = true;
                break;
            }
        }

        if (canPlace == true) {
            agent.setItem(CONCRETE, 1, 1)
            agent.setSlot(1)

            agent.place(d);
        } else {
            player.tell(mobs.target(LOCAL_PLAYER), "This position is not a crack!")
        };
    }

    // Week 5
    /**
     * Pick up new chip in the d direction
     */
    //% block="Picking new chip %d"
    export function pickChip(d: SixDirection): void {

        if (agent.inspect(AgentInspection.Block, d) == Block.GoldOre) {
            agent.destroy(d);

            let count_1 = 0;

            if (agent.getItemDetail(1) == Block.GoldOre) {
                count_1 = agent.getItemCount(1);
            }
            agent.setItem(Block.GoldOre, count_1 + 1, 1)
        }
    }

    /**
     * Place the new chip in the d direction
     */
    //% block="Placing new chip %d"
    export function placeChip(d: SixDirection): void {
    
        const check = [
            world(-2670, 93, -160),
            world(-2669, 94, -160),
            world(-2669, 95, -160),
            world(-2670, 96, -160)
        ];

        const dir = agent.getCardinalDirection(d);
        const agentPos = agent.getPosition().move(dir, 1);
        let canPlace = false;

        for (const c of check) {
            if (compareWorldPosition(agentPos,c)) {
                canPlace = true;
                break;
            }
        }
        
        if (canPlace == true) {
            let count_1 = agent.getItemCount(1)
            let count_2 = 0
            if (agent.getItemCount(1) > 0 && agent.getItemDetail(1) == Block.GoldOre) {
                agent.setSlot(1)
                agent.place(d);
                count_2 = count_1-1
                agent.setItem(Block.GoldOre, count_2, 1)
                if(count_1 == 1){
                    agent.setItem(Block.Air, count_2 + 1, 1)
                }
                count_1 = count_2
            } else {
                player.tell(mobs.target(LOCAL_PLAYER), "I don't have Chip to place!")
            }
        } else {
            player.tell(mobs.target(LOCAL_PLAYER), "I can't place the Chip at this position!")
        };
    }

    /**
     * Break the broken chip in the d direction
     */
    //% block="Breaking broken chip %d"
    export function breakOldChip(d: SixDirection): void {
    
        const check = [
            world(-2670, 93, -160),
            world(-2669, 94, -160),
            world(-2669, 95, -160),
            world(-2670, 96, -160)
        ];

        const dir = agent.getCardinalDirection(d);
        const agentPos = agent.getPosition().move(dir, 1);
        let canBreak = false;

        for (const c of check) {
            if (compareWorldPosition(agentPos,c)) {
                canBreak = true;
                break;
            }
        }
        
        if (canBreak == true) {
            agent.destroy(d)
        } else {
            player.tell(mobs.target(LOCAL_PLAYER), "This Chip do not need to change!")
        };
    }

    /**
     * Inspect in the d direction for the broken chip
     */
    //% block="Chip %d is broken"
    export function locateChip(d: SixDirection): boolean {
        if(shouldStop()) return false;

        const inspected = agent.inspect(AgentInspection.Block, d);

        return inspected === Block.CoalOre;
    }

    /**
     * Inspect in the d direction for the virus agent
     */
    //% block="Virus Agent is %d"
    export function locateAgent(d: SixDirection): boolean {
        if(shouldStop()) return false;

        const inspected = agent.inspect(AgentInspection.Block, d);

        return inspected === Block.LapisOre;
    }

    /**
     * Break the crack in the d direction to get the agent out
     */
    //% block="Find agent %d"
    export function getAgent(d: SixDirection): void {
        if(shouldStop()) return;
        
        const inspected = agent.inspect(AgentInspection.Block, d);

        if (inspected == Block.LapisOre){
            agent.destroy(d);
        } else {
            player.tell(mobs.target(LOCAL_PLAYER), "The virus agent is not here!")
        }
    }

    // Week 6
    /**
     * Inspect in the d direction for the gate
     */
    //% block="Gate %d need open"
    export function locateGate(d: SixDirection): boolean {
        if(shouldStop()) return false;

        const inspected = agent.inspect(AgentInspection.Block, d);

        return inspected === Block.WoodenTrapdoor;
    }

    /**
     * Open the gate in the d direction
     */
    //% block="Open gate %d"
    export function openGate(d: SixDirection): void {
        if(shouldStop()) return;

        const check = [
            world(-2643, 114, -168),
            world(-2643, 114, -176),
            world(-2643, 113, -172),
            world(-2643, 109, -175),
            world(-2643, 108, -173),
            world(-2643, 108, -170),
            world(-2643, 106, -169)

        ];

        const dir = agent.getCardinalDirection(d);
        const agentPos = agent.getPosition().move(dir, 1);
        let canBreak = false;

        for (const c of check) {
            if (compareWorldPosition(agentPos,c)) {
                canBreak = true;
                break;
            }
        }
        
        if (canBreak == true) {
            agent.destroy(d)
        } else {
            player.tell(mobs.target(LOCAL_PLAYER), "This is not a gate!")
        };
    }

    /**
     * Place the new wire in the d direction
     */
    //% block="Placing new wire %d"
    export function placeWire(d: SixDirection): void {
    
        const check = [
            world(-2662, 102, -179),
            world(-2667, 102, -179),
            world(-2670, 102, -179),
            world(-2673, 102, -179),
            world(-2674, 102, -179),
            world(-2679, 102, -179),
            world(-2682, 102, -179)
        ];

        const dir = agent.getCardinalDirection(d);
        const agentPos = agent.getPosition().move(dir, 1);
        let canPlace = false;

        for (const c of check) {
            if (compareWorldPosition(agentPos,c)) {
                canPlace = true;
                break;
            }
        }
        
        if (canPlace == true) {
            agent.setItem(SOUL_SAND, 64, 1)
            agent.setSlot(1)
            agent.place(d);
        } else {
            player.tell(mobs.target(LOCAL_PLAYER), "I can't place the wire at this position!")
        };
    }

    /**
     * Break the broken wire in the d direction
     */
    //% block="Breaking broken wire %d"
    export function breakWire(d: SixDirection): void {
    
        const check = [
            world(-2662, 102, -179),
            world(-2667, 102, -179),
            world(-2670, 102, -179),
            world(-2673, 102, -179),
            world(-2674, 102, -179),
            world(-2679, 102, -179),
            world(-2682, 102, -179)
        ];

        const dir = agent.getCardinalDirection(d);
        const agentPos = agent.getPosition().move(dir, 1);
        let canBreak = false;

        for (const c of check) {
            if (compareWorldPosition(agentPos,c)) {
                canBreak = true;
                break;
            }
        }
        
        if (canBreak == true) {
            agent.destroy(d)
        } else {
            player.tell(mobs.target(LOCAL_PLAYER), "This wire do not need to change!")
        };
    }

    /**
     * Inspect in the d direction for the broken wire
     */
    //% block="Wire %d need change"
    export function locateWire(d: SixDirection): boolean {
        if(shouldStop()) return false;

        const inspected = agent.inspect(AgentInspection.Block, d);

        return inspected === Block.QuartzOre;
    }

    // helper functions
    function shouldStop(): boolean {
        return blocks.testForBlock(stopBlock, stopPosition);
    }

    function compareWorldPosition(oldPos: Position, newPos: Position) {
        let same = true;
        if (oldPos.getValue(Axis.X) != newPos.getValue(Axis.X)) same = false;
        if (oldPos.getValue(Axis.Y) != newPos.getValue(Axis.Y)) same = false;
        if (oldPos.getValue(Axis.Z) != newPos.getValue(Axis.Z)) same = false;
        return same;
    }

    function checkBlockFromAgent(block: Block, d: SixDirection) : boolean {
        const dir = agent.getCardinalDirection(d);
        const checkPos = agent.getPosition().move(dir, 1);

        return blocks.testForBlock(block, checkPos)
    }

    function findSpacing(oldPos: Position, newPos: Position) {
        let x = oldPos.getValue(Axis.X) - newPos.getValue(Axis.X);
        let y = oldPos.getValue(Axis.Y) - newPos.getValue(Axis.Y);
        let z = oldPos.getValue(Axis.Z) - newPos.getValue(Axis.Z);

        return x;
        return y;
        return z;
        
    }
    function checkblockslot(block: Rocket_Color, color : Rocket_Color){
    let same= false
    if (block == color){
        same = true
    }
    return same;
}
}
