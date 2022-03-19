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
    //% blockIdentity="blocks.block" enumval=917740 block="Red Concrete"
    //% jres alias=RED_CONCRETE
    RedConcrete = Block.RedConcrete,
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


// global variables
const stopBlock = BEDROCK
const stopPosition = world(35,1,0)

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


    /**
     * Pick up color coding block in the d direction
     */
    //% block="Picking Color Coding Block %d"
    export function pickColorBlock(d: SixDirection): void {

        agent.destroy(d);
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
     * Fill the fuel in the d direction
     */
    //% block="Filling Fuel %d"
    export function placeFuel(d: SixDirection): void {
    

        if (agent.getItemCount(1) > 0 && agent.getItemDetail(1) == Item.Bucket) {
            agent.setItem(Item.LavaBucket, 1, 2)
            agent.setSlot(2)
            agent.place(d);
        } else {
            player.tell(mobs.target(LOCAL_PLAYER), "I don't have LavaBucket to place Lava!")
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

        agent.setItem(block, 1, 1)
        agent.setSlot(1)

        agent.place(d);
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


    // helper functions
    function shouldStop(): boolean {
        return blocks.testForBlock(stopBlock, stopPosition);
    }
}
