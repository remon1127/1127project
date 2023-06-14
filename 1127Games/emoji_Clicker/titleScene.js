
/**
 * タイトル
 */
phina.define('TitleScene', {
    superClass: 'phina.display.DisplayScene',

    init: function(params) {
      this.superInit(params);
      this.backgroundColor = "skyblue";
      
      Label({
        text: "Emoji Clicker",
        fill: "blue",
        stroke: "white"
      }).addChildTo(this).setPosition(this.gridX.center(), this.gridY.center(-2)).setScale(2, 2);
      
      Label({
        text: "タッチでスタート",
        fill: "green",
        stroke: "white"
      }).addChildTo(this).setPosition(this.gridX.center(), this.gridY.center(6)).setScale(2, 2);
      
      // モバイルでの再生制限アンロックのため、画面タッチ時にSoundを無音再生
      this.on('enter', function() {
        var event = "touchstart";
        var dom = this.app.domElement;
        
        dom.addEventListener(event, (function() {
          return function f() {
            var context = phina.asset.Sound.getAudioContext();
            var buf = context.createBuffer(1, 1, 22050);
            var src = context.createBufferSource();
            src.buffer = buf;
            src.connect(context.destination);
            src.start(0);
  
            dom.removeEventListener(event, f, false);
          }
        }()), false);
  
        // シーン遷移
        this.on('pointend', function() {
          this.exit();
        });
      });
  
    },
  
  });