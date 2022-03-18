// enums
enum Direction {
    //% block="forward"
    Forward,
    //% block="back"
    Back,
    //% block="left"
    Left,
    //% block="right"
    Right,
    //% block="up"
    Up,
    //% block="down"
    Down
}

enum Concrete {
    //% blockIdentity="blocks.block" enumval=196844 block="Light Blue Concrete"
    //% jres alias=LIGHT_BLUE_CPMCRETE
    LightBlueConcrete = 196844
}

enum IronBlock {
    //% blockIdentity="blocks.block" enumval=42 block="Iron Block"
    //% jres alias=IRON_BLOCK
    IronBlock = 42
}

enum Concrete_System {
    //% blockIdentity="blocks.block" enumval=917740 block="Red Concrete"
    //% jres alias=RED_CONCRETE
    RedConcrete = 917740,
    //% blockIdentity="blocks.block" enumval=852204 block="Green Concrete"
    //% jres alias=GREEN_CONCRETE
    GreenConcrete = 852204,
    //% blockIdentity="blocks.block" enumval=721132 block="Blue Concrete"
    //% jres alias=BLUE_CONCRETE
    BlueConcrete = 721132,
    //% blockIdentity="blocks.block" enumval=262380 block="Yellow Concrete"
    //% jres alias=YELLOW_CONCRETE
    YellowConcrete = 262380
}

enum Ice {
    //% blockIdentity="blocks.block" enumval=522 block="Blue Ice"
    //% jres alias=BLUE_ICE
    BlueIce = 522,
    //% blockIdentity="blocks.block" enumval=174 block="Packed Ice"
    //% jres alias=PACKED_ICE
    PackedIce = 174
}


// global variables
const stopBlock = BEDROCK
const stopPosition = world(35,1,0)
const locateCrackPlace = 73
const LavaBucket = 655685
const Lava = 11
const BlueIce = 522
const PackedIce = 174
const Bucket = 325
const EndRod = 208
const RedConcrete = 917740
const GreenConcrete = 852204
const BlueConcrete = 721132
const YellowConcrete = 262380

const directions = [
    FORWARD,
    BACK,
    LEFT,
    RIGHT,
    UP,
    DOWN
];

const turns = [
    LEFT_TURN,
    RIGHT_TURN
]

//%  block="Finding Summer" weight=200 color=#BF9B30 icon="\u2605"
namespace fs {

    /**
     * Move Agent n spaces in the d direction
     */
    //% block="Move %d by %n"
    export function moveFS(d: Direction, n: number): void {
        for (let i = 0; i < n; i++){
            if(shouldStop()) return;

            const direction = directions[d];

            agent.move(direction, 1);
        }
    }

    /**
     * Turn Agent in the t direction
     */
    //% block="Turn %t"
    export function turnFS(t: TurnDirection): void {
        if(shouldStop()) return;

        const turn = turns[t];

        agent.turn(turn);
    }  

    /**
     * Filling hole by placing block in the d direction
     * @param block the block
     */    
    //% block="Filling hole by %block %d"
    export function fillHole(block: Concrete, d: Direction): void {
        if(shouldStop()) return;

        agent.setItem(block, 1, 1)
        agent.setSlot(1)

        const direction = directions[d];

        agent.place(direction);
    }  

    /**
     * Replacing wall by placing block in the d direction
     * @param block the block
     */    
    //% block="Replacing wall by %block %d"
    export function replaceWall(block: IronBlock, d: Direction): void {
        if(shouldStop()) return;

        agent.setItem(block, 1, 1)
        agent.setSlot(1)

        const direction = directions[d];

        agent.place(direction);
    }  

    /**
     * Clean the leak in the d direction
     */
    //% block="Clean Leak %d"
    export function cleanLeak(d: Direction): void {
        if(shouldStop()) return;

        const direction = directions[d];

        agent.destroy(direction);
    }
    
    /**
     * Inspect in the d direction for crack
     */
    //% block="Crack is %d"
    export function locateCrack(d: Direction): boolean {
        if(shouldStop()) return false;

        const direction = directions[d];

        const inspected = agent.inspect(AgentInspection.Block, direction);

        return inspected === locateCrackPlace;
    }

    /**
     * Break the crack in the d direction
     */
    //% block="Break Crack %d"
    export function breakCrack(d: Direction): void {
        if(shouldStop()) return;

        const direction = directions[d];

        agent.destroy(direction);
    }


    /**
     * Pick up color coding block in the d direction
     */
    //% block="Picking Color Coding Block %d"
    export function pickColorBlock(d: Direction): void {

        const direction = directions[d];

        agent.destroy(direction);
    }

    /**
     * Placing block in the d direction
     * @param block the block
     */    
    //% block="Placing %block %d"
    export function repairIgnition(block: Concrete_System, d: Direction): void {
        if(shouldStop()) return;

        agent.setItem(block, 1, 1)
        agent.setSlot(1)

        const direction = directions[d];

        agent.place(direction);
    }  

    /**
     * Pick up fuel in the d direction
     */
    //% block="Picking Fuel Around"
    export function pickFuel() {

        agent.collect(Bucket);
    }

    /**
     * Fill the fuel in the d direction
     */
    //% block="Filling Fuel %d"
    export function placeFuel(d: Direction): void {
        
        const direction = directions[d];

        if (agent.getItemCount(1) > 0 && agent.getItemDetail(1) == Bucket) {
            agent.setItem(LAVA_BUCKET, 1, 2)
            agent.setSlot(2)
            agent.place(direction);
        } else {
            player.tell(mobs.target(LOCAL_PLAYER), "I don't have LavaBucket to place Lava!")
        }
    }

    /**
     * Pick up coolant in the d direction
     */
    //% block="Picking Coolant %d"
    export function pickCoolant(d: Direction): void {

        const direction = directions[d];

        if (agent.inspect(AgentInspection.Block, direction) == BlueIce) {
            agent.destroy(direction);

            let count_1 = 0;

            if (agent.getItemDetail(1) == BlueIce) {
                count_1 = agent.getItemCount(1);
            }
            agent.setItem(BlueIce, count_1 + 1, 1)
        };

        if (agent.inspect(AgentInspection.Block, direction) == PackedIce) {
            agent.destroy(direction);

            let count_2 = 0;
            
            if (agent.getItemDetail(2) == PackedIce) {
                count_2 = agent.getItemCount(2);
            }
            agent.setItem(PackedIce, count_2 + 1, 2)
        };
    }

    /**
     * Placing coolant in the d direction
     * @param block the block
     */    
    //% block="Placing Coolant %block %d"
    export function placeCoolant(block: Ice, d: Direction): void {
        if(shouldStop()) return;

        agent.setItem(block, 1, 1)
        agent.setSlot(1)

        const direction = directions[d];

        agent.place(direction);
    }  

    /**
     * Pick up receiver in the d direction
     */
    //% block="Picking Receiver %d"
    export function pickReceiver(d: Direction): void {

        const direction = directions[d];

        if (agent.inspect(AgentInspection.Block, direction) == EndRod) {
            agent.destroy(direction);

            let count_1 = 0;

            if (agent.getItemDetail(1) == EndRod) {
                count_1 = agent.getItemCount(1);
            }
            agent.setItem(EndRod, count_1 + 1, 1)
        }
    }

    /**
     * Place the Receiver in the d direction
     */
    //% block="Placing Receiver %d"
    export function placeReceiver(d: Direction): void {
        
        const direction = directions[d];

        if (agent.getItemCount(1) > 0 && agent.getItemDetail(1) == EndRod) {
            agent.setItem(EndRod, 1, 1)
            agent.setSlot(1)
            agent.place(direction);
        } else {
            player.tell(mobs.target(LOCAL_PLAYER), "I don't have receiver to place!")
        }
    }


    // helper functions
    function shouldStop(): boolean {
        return blocks.testForBlock(stopBlock, stopPosition);
    }
}
