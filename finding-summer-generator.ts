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
    //% jres alias=RED_CONRETE
    RedConcrete = 917740,
    //% blockIdentity="blocks.block" enumval=852204 block="Green Concrete"
    //% jres alias=GREEN_CONRETE
    GreenConcrete = 852204,
    //% blockIdentity="blocks.block" enumval=721132 block="Blue Concrete"
    //% jres alias=BLUE_CONRETE
    BlueConcrete = 721132,
    //% blockIdentity="blocks.block" enumval=262380 block="Yellow Concrete"
    //% jres alias=YELLOW_CONRETE
    YellowConcrete = 262380
}


// global variables
const stopBlock = BEDROCK
const stopPosition = world(35,1,0)
const locateCrackPlace = 73
const LavaBucket = 655685
const BlueIce = 522
const PackedIce = 174

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
    //% block="Pick up fuel around"
    export function pickFuel() {

        agent.collect(LavaBucket);
    }

    /**
     * Place fuel in the d direction
     */
    //% block="Place Fuel %d"
    export function placeFuel(d: Direction): void {
        
        const direction = directions[d];

        if (agent.getItemCount(1) > 0 && agent.getItemDetail(1) == LavaBucket) {
            agent.place(direction);
        } else {
            player.tell(mobs.target(LOCAL_PLAYER), "I don't have LavaBucket to place Lava!")
        }
    }

    /**
     * Pick up cooler in the d direction
     */
    //% block="Pick up cooler %d"
    export function pickCooler(d: Direction): void {

        const direction = directions[d];

        if (agent.destroy(direction)) {

            let count_1 = 0;
            let count_2 = 0;

            if (agent.getItemDetail(1) == BlueIce) {
                count_1 = agent.getItemCount(1);
            }
            if (agent.getItemDetail(2) == PackedIce) {
                count_2 = agent.getItemCount(2);
            }
            agent.setItem(BlueIce, count_1 + 1, 1)
            agent.setItem(PackedIce, count_2 + 1, 2)
        }
    }

    /**
     * Place cooler in the d direction
     */
    //% block="Place cooler %d"
    export function placeCooler(d: Direction): void {
        
        const direction = directions[d];

        agent.place(direction);
    }


    // helper functions
    function shouldStop(): boolean {
        return blocks.testForBlock(stopBlock, stopPosition);
    }
}
