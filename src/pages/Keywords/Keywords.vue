<template>
  <div class="mixin">
    <div>
      <h2><span class="tag">#</span> Keyword Arguments</h2>
      <p>Stylus supports keyword arguments, or “kwargs”. These allow you to reference arguments by their associated parameter name.</p>
    <div class="row">
      <div class="col-md-6">
        <pre v-highlightjs="sourcecode"><code class="css">
  body {
    color: rgba(255, 200, 100, 0.5);
    color: rgba(red: 255, green: 200, blue: 100, alpha: 0.5);
    color: rgba(alpha: 0.5, blue: 100, red: 255, 200);
    color: rgba(alpha: 0.5, blue: 100, 255, 200);
  }
        </code></pre>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <pre v-highlightjs="sourcecode"><code class="css">
  body {
     color: rgba(255,200,100,0.5);
     color: rgba(255,200,100,0.5);
     color: rgba(255,200,100,0.5);
     color: rgba(255,200,100,0.5);
   }
        </code></pre>
      </div>
    </div>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
</style>
