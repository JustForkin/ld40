;(function() {
    window.ld40.constants = window.ld40.constants || {};
    const constants = window.ld40.constants;
    
    constants.SCREEN_W = 200;
    constants.SCREEN_H = 150;
    constants.TILE_SIZE = 12;
    
    constants.SNAKE_SPEED = 2.1;
    constants.POSITION_HISTORY_LENGTH = 3;
    constants.TICKS_PER_SECOND = 40;
    constants.TICK_INTERVAL = 1000/constants.TICKS_PER_SECOND;
    constants.MIN_TICKS_BETWEEN_DIR_CHANGES = 4;
    constants.SNAKE_RECT_SIZE = 6;
    constants.SNAKE_RECT_INSET = 4;
    
    constants.SNAKE_NODE_TYPES = {
        HEAD: 0,
        BODY: 1
    };
})();