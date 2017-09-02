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
        "https://cdn.glitch.com/a9cf685c-2976-4393-9e68-47d675fe9b0d%2Fbrick.png?1504356125032",
        "https://cdn.glitch.com/a9cf685c-2976-4393-9e68-47d675fe9b0d%2Fcobblestone.png?1504356131091",
        "https://cdn.glitch.com/a9cf685c-2976-4393-9e68-47d675fe9b0d%2Fplanks_oak.png?1504356138770",
        "https://cdn.glitch.com/a9cf685c-2976-4393-9e68-47d675fe9b0d%2Fcrafting_table_top.png?1504356138979",
        "https://cdn.glitch.com/a9cf685c-2976-4393-9e68-47d675fe9b0d%2Fglass_light_blue.png?1504356139198"
    ];
    var texture = textures[Math.floor(Math.random() * textures.length)];
    return texture;
}
