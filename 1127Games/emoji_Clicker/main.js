phina.globalize();

phina.define("MainScene", {
  // 継承
    superClass: 'DisplayScene',
  // 初期化
    init: function() {
        // 親クラス初期化
        this.superInit();

        // 背景色
        this.backgroundColor = 'skyblue';

        lscheck();
        lsload();
    },
});