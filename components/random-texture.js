/**
 * Set random texture on material.
 */
AFRAME.registerComponent('random-texture', {
    dependencies: ['material'],

    init: function() {
        this.el.setAttribute('material', 'src', getRandomTexture());
    }
});

function getRandomTexture() {
    var textures = [
        "https://raw.githubusercontent.com/OpenLabsHackerspace/a-craft/master/textures/brick.png",
        "https://raw.githubusercontent.com/OpenLabsHackerspace/a-craft/master/textures/cobblestone.png",
        "https://raw.githubusercontent.com/OpenLabsHackerspace/a-craft/master/textures/planks_oak.png",
        "https://raw.githubusercontent.com/OpenLabsHackerspace/a-craft/master/textures/crafting_table_top.png",
        "https://raw.githubusercontent.com/OpenLabsHackerspace/a-craft/master/textures/glass_light_blue.png"
    ];
    var texture = textures[Math.floor(Math.random() * textures.length)];
    return texture;
}
