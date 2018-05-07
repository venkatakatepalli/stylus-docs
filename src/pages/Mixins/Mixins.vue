<template>
  <div class="mixin">
    <div>
      <h2><span class="tag">#</span> Mixins</h2>
    <br>
    <p>Both mixins and functions are defined in the same manner, but they are applied in different ways.</p>
    <p>For example, we have a <b>border-radius(n)</b> function defined below, which is invoked as a mixin (i.e., invoked as a statement, rather than part of an expression).</p>
    <p>When <b>border-radius()</b> is invoked within a selector, the properties are expanded and copied into the selector.</p>
    <br>
    <div class="row">
      <div class="col-md-6">
        <pre v-highlightjs="sourcecode"><code class="css">
  border-radius(n)
    -webkit-border-radius n
    -moz-border-radius n
    border-radius n

  .tile-block
    border-radius(5px)

  img
    border-radius(6px)
        </code></pre>
      </div>
      <div class="col-md-6">
        <pre v-highlightjs="sourcecode"><code class="css">
  .tile-block {
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  img {
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
  }
        </code></pre>
      </div>
    </div>
    <!-- second -->
    <h2>Block Mixins</h2>
    <br>
    <p>You can pass blocks to mixins by calling mixin with + prefix.</p>
    <br>
    <div class="row">
      <div class="col-md-6">
        <pre v-highlightjs="sourcecode"><code class="css">
  +foo()
    width: 10px
        </code></pre>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <p>The passed block would be available inside the mixin as block variable, that then could be used with interpolation</p>
        <pre v-highlightjs="sourcecode"><code class="css">
  foo()
    .bar
      {block}

  +foo()
    width: 10px

  => .bar {
      width: 10px;
    }
        </code></pre>
      </div>
    </div>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
</style>
