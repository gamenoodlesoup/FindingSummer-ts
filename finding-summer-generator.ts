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

enum Concrete_System {

    //% blockIdentity="blocks.block" enumval=852204 block="Green Concrete"
    //% jres alias=GREEN_CONCRETE
    GreenConcrete = Block.GreenConcrete,
    //% blockIdentity="blocks.block" enumval=721132 block="Blue Concrete"
    //% jres alias=BLUE_CONCRETE
    BlueConcrete = Block.BlueConcrete,
    //% blockIdentity="blocks.block" enumval=262380 block="Yellow Concrete"
    //% jres alias=YELLOW_CONCRETE
    YellowConcrete = Block.YellowConcrete
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
    WhiteConcrete = Block.WhiteConcrete,
    //% blockIdentity="blocks.block" enumval=524524 block="LightGray Concrete"
    //% jres alias=LIGHT_GRAY_CONCRETE
    LightGrayConcrete = Block.LightGrayConcrete,
    //% blockIdentity="blocks.block" enumval=458988 block="Gray Concrete"
    //% jres alias=GRAY_CONCRETE
    GrayConcrete = Block.GrayConcrete,
    //% blockIdentity="blocks.block" enumval=983276 block="Black Concrete"
    //% jres alias=BLACK_CONCRETE
    BlackConcrete = Block.BlackConcrete,
    //% blockIdentity="blocks.block" enumval=786668 block="Brown Concrete"
    //% jres alias=BROWN_CONCRETE
    BrownConcrete = Block.BrownConcrete,
    //% blockIdentity="blocks.block" enumval=917740 block="Red Concrete"
    //% jres alias=RED_CONCRETE
    RedConcrete = Block.RedConcrete,
    //% blockIdentity="blocks.block" enumval=65772 block="Orange Concrete"
    //% jres alias=ORANGE_CONCRETE
    OrangeConcrete = Block.OrangeConcrete,
    //% blockIdentity="blocks.block" enumval=262380 block="Yellow Concrete"
    //% jres alias=YELLOW_CONCRETE
    YellowConcrete = Block.YellowConcrete,
    //% blockIdentity="blocks.block" enumval=327916 block="Lime Concrete"
    //% jres alias=LIME_CONCRETE
    LimeConcrete = Block.LimeConcrete,
    //% blockIdentity="blocks.block" enumval=852204 block="Green Concrete"
    //% jres alias=GREEN_CONCRETE
    GreenConcrete = Block.GreenConcrete,
    //% blockIdentity="blocks.block" enumval=590060 block="Cyan Concrete"
    //% jres alias=CYAN_CONCRETE
    CyanConcrete = Block.CyanConcrete,
    //% blockIdentity="blocks.block" enumval=196844 block="Light Blue Concrete"
    //% jres alias=LIGHT_BLUE_CONCRETE
    LightBlueConcrete = Block.LightBlueConcrete,
    //% blockIdentity="blocks.block" enumval=721132 block="Blue Concrete"
    //% jres alias=BLUE_CONCRETE
    BlueConcrete = Block.BlueConcrete,
    //% blockIdentity="blocks.block" enumval=655596 block="Purple Concrete"
    //% jres alias=PURPLE_CONCRETE
    PurpleConcrete = Block.PurpleConcrete,
    //% blockIdentity="blocks.block" enumval=131308 block="Magenta Concrete"
    //% jres alias=MAGENTA_CONCRETE
    MagentaConcrete = Block.MagentaConcrete,
    //% blockIdentity="blocks.block" enumval=393452 block="Pink Concrete"
    //% jres alias=PINK_CONCRETE
    PinkConcrete = Block.PinkConcrete,

}

// global variables
const stopBlock = BEDROCK
const stopPosition = world(35,1,0)
// let counting = 0
// let junk = 0
let spcaing = 0
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

        agent.setItem(block, 1, 1)
        agent.setSlot(1)

        agent.place(d);
    }  

    /**
     * Replacing wall by placing block in the d direction
     * @param block the block
     */    
    //% block="Replacing wall by %block %d"
    export function replaceWall(block: IronBlock, d: SixDirection): void {
        if(shouldStop()) return;

        agent.setItem(block, 1, 1)
        agent.setSlot(1)

        agent.place(d);
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
    export function pickColorBlock(d: SixDirection): void {

        if (checkBlockFromAgent(RED_CONCRETE, d)) {
            agent.destroy(d);

            let count_1 = 0;

            if (agent.getItemDetail(1) == RED_CONCRETE) {
                count_1 = agent.getItemCount(1);
            }
            agent.setItem(RED_CONCRETE, count_1 + 1, 1)
        };

        if (checkBlockFromAgent(BLUE_CONCRETE, d)) {
            agent.destroy(d);

            let count_2 = 0;

            if (agent.getItemDetail(2) == BLUE_CONCRETE) {
                count_2 = agent.getItemCount(1);
            }
            agent.setItem(BLUE_CONCRETE, count_2 + 1, 2)
        };

        if (checkBlockFromAgent(GREEN_CONCRETE, d)) {
            agent.destroy(d);

            let count_3 = 0;

            if (agent.getItemDetail(3) == GREEN_CONCRETE) {
                count_3 = agent.getItemCount(1);
            }
            agent.setItem(GREEN_CONCRETE, count_3 + 1, 3)
        };

        if (checkBlockFromAgent(YELLOW_CONCRETE, d)) {
            agent.destroy(d);

            let count_4 = 0;

            if (agent.getItemDetail(4) == YELLOW_CONCRETE) {
                count_4 = agent.getItemCount(1);
            }
            agent.setItem(YELLOW_CONCRETE, count_4 + 1, 4)
        };
    }

    /**
     * Placing block in the d direction
     * @param block the block
     */    
    //% block="Placing %block %d"
    export function repairIgnition(block: Concrete_System, d: SixDirection): void {
        if(shouldStop()) return;

        agent.setItem(block, 1, 1)
        agent.setSlot(1)

        agent.place(d);
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
            if (agent.getItemCount(1) > 0 && agent.getItemDetail(1) == BUCKET) {
                    agent.setItem(LAVA_BUCKET, 1, 2)
                    agent.setSlot(2)
                    agent.place(DOWN)
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
            if (agent.getItemCount(1) > 0 && agent.getItemDetail(1) == block) {
                agent.setSlot(1)
                agent.place(d);
            } else if (agent.getItemCount(2) > 0 && agent.getItemDetail(2) == block) {
                agent.setSlot(2)
                agent.place(d);
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
    
        if (agent.getItemCount(1) > 0 && agent.getItemDetail(1) == Block.EndRod) {
            agent.setItem(Block.EndRod, 1, 1)
            agent.setSlot(1)
            agent.place(d);
        } else {
            player.tell(mobs.target(LOCAL_PLAYER), "I don't have receiver to place!")
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
            if (agent.getItemCount(1) > 0 && agent.getItemDetail(1) == Block.MagmaBlock) {
                agent.setSlot(1)
                agent.place(d);
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

        if (checkBlockFromAgent(WHITE_CONCRETE, d)) {
            agent.destroy(d);
        
            let count_1 = 0;
        
            if (agent.getItemDetail(1) == WHITE_CONCRETE) {
                count_1 = agent.getItemCount(1);
            }
            agent.setItem(WHITE_CONCRETE, count_1 + 1, 1)
        };

        if (checkBlockFromAgent(LIGHT_GRAY_CONCRETE, d)) {
            agent.destroy(d);
        
            let count_2 = 0;
        
            if (agent.getItemDetail(1) == LIGHT_GRAY_CONCRETE) {
                count_2 = agent.getItemCount(2);
            }
            agent.setItem(LIGHT_GRAY_CONCRETE, count_2 + 1, 2)
        };


        if (checkBlockFromAgent(GRAY_CONCRETE, d)) {
            agent.destroy(d);
        
            let count_3 = 0;
        
            if (agent.getItemDetail(1) == GRAY_CONCRETE) {
                count_3 = agent.getItemCount(3);
            }
            agent.setItem(GRAY_CONCRETE, count_3 + 1, 3)
        };
        
        if (checkBlockFromAgent(BLACK_CONCRETE, d)) {
            agent.destroy(d);
        
            let count_4 = 0;
        
            if (agent.getItemDetail(1) == BLACK_CONCRETE) {
                count_4 = agent.getItemCount(4);
            }
            agent.setItem(BLACK_CONCRETE, count_4 + 1, 4)
        };
        
        if (checkBlockFromAgent(BROWN_CONCRETE, d)) {
            agent.destroy(d);
        
            let count_5 = 0;
        
            if (agent.getItemDetail(1) == BROWN_CONCRETE) {
                count_5 = agent.getItemCount(5);
            }
            agent.setItem(BROWN_CONCRETE, count_5 + 1, 5)
        };
        
        if (checkBlockFromAgent(RED_CONCRETE, d)) {
            agent.destroy(d);
        
            let count_6 = 0;
        
            if (agent.getItemDetail(1) == RED_CONCRETE) {
                count_6 = agent.getItemCount(6);
            }
            agent.setItem(RED_CONCRETE, count_6 + 1, 6)
        };

        if (checkBlockFromAgent(ORANGE_CONCRETE, d)) {
            agent.destroy(d);
        
            let count_7 = 0;
        
            if (agent.getItemDetail(1) == ORANGE_CONCRETE) {
                count_7 = agent.getItemCount(7);
            }
            agent.setItem(ORANGE_CONCRETE, count_7 + 1, 7)
        };

        if (checkBlockFromAgent(YELLOW_CONCRETE, d)) {
            agent.destroy(d);
        
            let count_8 = 0;
        
            if (agent.getItemDetail(1) == YELLOW_CONCRETE) {
                count_8 = agent.getItemCount(8);
            }
            agent.setItem(YELLOW_CONCRETE, count_8 + 1, 8)
        };

        if (checkBlockFromAgent(LIME_CONCRETE, d)) {
            agent.destroy(d);
        
            let count_9 = 0;
        
            if (agent.getItemDetail(1) == LIME_CONCRETE) {
                count_9 = agent.getItemCount(9);
            }
            agent.setItem(LIME_CONCRETE, count_9 + 1, 9)
        };

        if (checkBlockFromAgent(GREEN_CONCRETE, d)) {
            agent.destroy(d);
        
            let count_10 = 0;
        
            if (agent.getItemDetail(1) == GREEN_CONCRETE) {
                count_10 = agent.getItemCount(10);
            }
            agent.setItem(GREEN_CONCRETE, count_10 + 1, 10)
        };

        if (checkBlockFromAgent(CYAN_CONCRETE, d)) {
            agent.destroy(d);
        
            let count_11 = 0;
        
            if (agent.getItemDetail(1) == CYAN_CONCRETE) {
                count_11 = agent.getItemCount(11);
            }
            agent.setItem(CYAN_CONCRETE, count_11 + 1, 11)
        };

        if (checkBlockFromAgent(LIGHT_BLUE_CONCRETE, d)) {
            agent.destroy(d);
        
            let count_12 = 0;
        
            if (agent.getItemDetail(1) == LIGHT_BLUE_CONCRETE) {
                count_12 = agent.getItemCount(12);
            }
            agent.setItem(LIGHT_BLUE_CONCRETE, count_12 + 1, 12)
        };

        if (checkBlockFromAgent(BLUE_CONCRETE, d)) {
            agent.destroy(d);
        
            let count_13 = 0;
        
            if (agent.getItemDetail(1) == BLUE_CONCRETE) {
                count_13 = agent.getItemCount(13);
            }
            agent.setItem(BLUE_CONCRETE, count_13 + 1, 13)
        };

        if (checkBlockFromAgent(PURPLE_CONCRETE, d)) {
            agent.destroy(d);
        
            let count_14 = 0;
        
            if (agent.getItemDetail(1) == PURPLE_CONCRETE) {
                count_14 = agent.getItemCount(14);
            }
            agent.setItem(PURPLE_CONCRETE, count_14 + 1, 14)
        };

        if (checkBlockFromAgent(MAGENTA_CONCRETE, d)) {
            agent.destroy(d);
        
            let count_15 = 0;
        
            if (agent.getItemDetail(1) == MAGENTA_CONCRETE) {
                count_15 = agent.getItemCount(15);
            }
            agent.setItem(MAGENTA_CONCRETE, count_15 + 1, 15)
        };

        if (checkBlockFromAgent(PINK_CONCRETE, d)) {
            agent.destroy(d);
        
            let count_16 = 0;
        
            if (agent.getItemDetail(1) == PINK_CONCRETE) {
                count_16 = agent.getItemCount(16);
            }
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
            player.tell(mobs.target(LOCAL_PLAYER), "I can't place Color Block at this position!")
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
    //% block="Spacing left %spcaing"
    export function dockingLocateSpacing(spacing: number): void  {

        
        const dockingLoaction = world(-2707, 55, -356);

        count = findSpacing(agent.getPosition().toWorld(), dockingLoaction)

        if (count == -1) count = spacing;   

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

        const inspected = agent.inspect(AgentInspection.Block, d);

        return inspected === Block.Air;

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
}
