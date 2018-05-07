<template>
  <div class="mixin">
    <div>
      <h2><span class="tag">#</span> Functions</h2>
    <div class="row">
      <div class="col-md-6">
        <pre v-highlightjs="sourcecode"><code class="css">
  add (a, b)
    a + b

  body
    padding add(10px, 5)
        </code></pre>
      </div>
      <div class="col-md-6">
        <pre v-highlightjs="sourcecode"><code class="css">
  body {
    padding: 15px;
  }
        </code></pre>
      </div>
    </div>
    <!-- second -->
    <div>
      <h2>Argument Defaults</h2>
      <p>Optional arguments may default to a given expression. With Stylus we may even default arguments to earlier arguments!</p>
    <div class="row">
      <div class="col-md-6">
        <pre v-highlightjs="sourcecode"><code class="css">
 add(a, b = a)
   a + b

 add(10, 5)
 // => 15
 
 add(10)
 // => 20
        </code></pre>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <pre v-highlightjs="sourcecode"><code class="css">
  add(a, b = unit(a, px))
   a + b
        </code></pre>
      </div>
    </div>  
    </div>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
</style>
