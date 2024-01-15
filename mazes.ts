namespace mazes {

    export enum DefaultColours {
        FONT = 3, // Pink
        IMAGE_BG = 15, // Black
        IMAGE_WALL = 1, // White
        MAP_BEGIN = 7, // Bright green
        MAP_END = 2, // Red
        MAP_PATH = 15, // Black
        MAP_SOLUTION = 9, // Light blue
        MAP_WALL = 1, // White
    }

    //% block
    export function mazeDefaults(colour: DefaultColours): DefaultColours {
        return colour;
    }

}
