<template>
  <div class="mixin">
    <div>
      <h2><span class="tag">#</span> Interpolation</h2>
    <br>
    <p>Stylus supports interpolation by using the {} characters to surround an expression, which then becomes part of the identifier.
      <br> For example, -webkit-{'border' + '-radius'} evaluates to -webkit-border-radius.</p>
    <div class="row">
      <div class="col-md-6">
        <span class="s-head">Stylus</span>
        <pre v-highlightjs="sourcecode"><code class="css">
   vendor(prop, args)
    -webkit-{prop} args
    -moz-{prop} args
    {prop} args

  border-radius()
    vendor('border-radius', argum   ents)
  
  box-shadow()
    vendor('box-shadow', arguments)

  button
    border-radius 1px 2px / 3px 4px
        </code></pre>
      </div>
      <div class="col-md-6">
        <span class="s-head">Yield to</span>
        <pre v-highlightjs="sourcecode"><code class="css">
   button {
    -webkit-border-radius: 1px 2px / 3px 4px;
    -moz-border-radius: 1px 2px / 3px 4px;
    border-radius: 1px 2px / 3px 4px;
  }
        </code></pre>
      </div>
    </div>
    <!-- second example -->
    <div>
      <h2>Selector Interpolation</h2>
    <br>
    <p>Interpolation works with selectors as well. For example, we may iterate to assign the height property for the first 5 rows in a table.</p>
    <div class="row">
      <div class="col-md-6">
        <span class="s-head">Stylus</span>
        <pre v-highlightjs="sourcecode"><code class="css">
   table
    for row in 1 2 3 4 5
      tr:nth-child({row})
        height: 10px * row
        </code></pre>
      </div>
      <div class="col-md-6">
        <span class="s-head">Yield to</span>
        <pre v-highlightjs="sourcecode"><code class="css">
  table tr:nth-child(1) {
    height: 10px;
  }
  table tr:nth-child(2) {
    height: 20px;
  }
  table tr:nth-child(3) {
    height: 30px;
  }
  table tr:nth-child(4) {
    height: 40px;
  }
  table tr:nth-child(5) {
    height: 50px;
  }
        </code></pre>
      </div>
    </div>
    </div>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
</style>
