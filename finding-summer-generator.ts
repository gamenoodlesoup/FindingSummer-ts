// enums
enum Direction {
    //% block="forward"
    Forward,
    //% block="back"
    Back,
    //% block="left"
    Left,
    //% block="right"
    Right
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


// global variables
const stopBlock = BEDROCK
const stopPosition = world(35,1,0)
const locateCrack = 73
const locateGoonTarget = 113

const directions = [
    FORWARD,
    BACK,
    LEFT,
    RIGHT
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
     * Inspect in the d direction for the crack
     */
    //% block="Crack is %d"
    export function locateCrack(d: Direction): boolean {
        if(shouldStop()) return false;

        const direction = directions[d];

        const inspected = agent.inspect(AgentInspection.Block, direction);

        return inspected == locateCrack;
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

    // helper functions
    function shouldStop(): boolean {
        return blocks.testForBlock(stopBlock, stopPosition);
    }
}
