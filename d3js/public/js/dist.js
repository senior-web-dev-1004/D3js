!function(n) {
    function c(g) {
        if (t[g])
            return t[g].exports;
        var a = t[g] = {
            i: g,
            l: !1,
            exports: {}
        };
        return n[g].call(a.exports, a, a.exports, c),
        a.l = !0,
        a.exports
    }
    var t = {};
    c.m = n,
    c.c = t,
    c.i = function(n) {
        return n
    }
    ,
    c.d = function(n, t, g) {
        c.o(n, t) || Object.defineProperty(n, t, {
            configurable: !1,
            enumerable: !0,
            get: g
        })
    }
    ,
    c.n = function(n) {
        var t = n && n.__esModule ? function() {
            return n.default
        }
        : function() {
            return n
        }
        ;
        return c.d(t, "a", t),
        t
    }
    ,
    c.o = function(n, c) {
        return Object.prototype.hasOwnProperty.call(n, c)
    }
    ,
    c.p = "",
    c(c.s = 0)
}([function(module, exports, __webpack_require__) {
    "use strict";
    eval("\n\nvar margin = { top: 10, right: 30, bottom: 30, left: 30 };\nvar width = 960 - margin.left - margin.right;\nvar height = 500 - margin.top - margin.bottom;\n// have a radius for clipping mask\nvar radius = 100;\n\nvar svg = d3.select('body').append('svg').attr('width', width + margin.left + margin.right).attr('height', height + margin.top + margin.bottom)\n// some unnecessary interaction ¯\\_(ツ)_/¯\n.on('mousemove', function () {\n  // update radius using mouse position (just for fun)\n  radius = Math.sqrt(d3.event.clientX + d3.event.clientY) * 4.5;\n  console.log('radius', radius);\n  // do a destroy (so we not appending anther defs)\n  svg.select('defs').remove();\n  svg.select('image').remove();\n  mask(radius);\n});\n\nsvg.append('g').attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');\n\n// render the masked img\nmask(radius);\n\n// append circle\nfunction appendCircle(selection) {\n  selection.append('circle').attr('cx', 280).attr('cy', 160).attr('r', radius);\n}\n\n// clipping mask\nfunction mask() {\n  // set up defs\n  var defs = svg.append('defs');\n  // define the clipPath\n  defs.append('clipPath') // define a clip path\n  .attr('id', 'circle-clip') // give the clipPath an ID\n  // use any shape\n  .call(appendCircle);\n  // add the image, which is clipped via the clip-path attribute\n  svg.append('image').attr('xlink:href', 'tiger.jpg').attr('x', 0).attr('y', 0).attr('width', 512 + 'px').attr('height', 320 + 'px')\n  // clip the image using id\n  .attr('clip-path', 'url(#circle-clip)');\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zY3JpcHQuanM/OWE5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtYXJnaW4gPSB7IHRvcDogMTAsIHJpZ2h0OiAzMCwgYm90dG9tOiAzMCwgbGVmdDogMzAgfVxuY29uc3Qgd2lkdGggPSA5NjAgLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodFxuY29uc3QgaGVpZ2h0ID0gNTAwIC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b21cbi8vIGhhdmUgYSByYWRpdXMgZm9yIGNsaXBwaW5nIG1hc2tcbmxldCByYWRpdXMgPSAxMDBcblxuY29uc3Qgc3ZnID0gZDMuc2VsZWN0KCdib2R5JykuYXBwZW5kKCdzdmcnKVxuICAuYXR0cignd2lkdGgnLCB3aWR0aCArIG1hcmdpbi5sZWZ0ICsgbWFyZ2luLnJpZ2h0KVxuICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pXG4gIC8vIHNvbWUgdW5uZWNlc3NhcnkgaW50ZXJhY3Rpb24gwq9cXF8o44OEKV8vwq9cbiAgLm9uKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gdXBkYXRlIHJhZGl1cyB1c2luZyBtb3VzZSBwb3NpdGlvbiAoanVzdCBmb3IgZnVuKVxuICAgIHJhZGl1cyA9IE1hdGguc3FydChkMy5ldmVudC5jbGllbnRYICsgZDMuZXZlbnQuY2xpZW50WSkgKiA0LjVcbiAgICBjb25zb2xlLmxvZygncmFkaXVzJywgcmFkaXVzKVxuICAgIC8vIGRvIGEgZGVzdHJveSAoc28gd2Ugbm90IGFwcGVuZGluZyBhbnRoZXIgZGVmcylcbiAgICBzdmcuc2VsZWN0KCdkZWZzJykucmVtb3ZlKClcbiAgICBzdmcuc2VsZWN0KCdpbWFnZScpLnJlbW92ZSgpXG4gICAgbWFzayhyYWRpdXMpXG4gIH0pXG5cbnN2Zy5hcHBlbmQoJ2cnKS5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCAke21hcmdpbi50b3B9KWApXG5cbi8vIHJlbmRlciB0aGUgbWFza2VkIGltZ1xubWFzayhyYWRpdXMpXG5cbi8vIGFwcGVuZCBjaXJjbGVcbmZ1bmN0aW9uIGFwcGVuZENpcmNsZSAoc2VsZWN0aW9uKSB7XG4gIHNlbGVjdGlvbi5hcHBlbmQoJ2NpcmNsZScpXG4gICAgLmF0dHIoJ2N4JywgMjgwKVxuICAgIC5hdHRyKCdjeScsIDE2MClcbiAgICAuYXR0cigncicsIHJhZGl1cylcbn1cblxuLy8gY2xpcHBpbmcgbWFza1xuZnVuY3Rpb24gbWFzayAoKSB7XG4gIC8vIHNldCB1cCBkZWZzXG4gIGNvbnN0IGRlZnMgPSBzdmcuYXBwZW5kKCdkZWZzJylcbiAgLy8gZGVmaW5lIHRoZSBjbGlwUGF0aFxuICBkZWZzLmFwcGVuZCgnY2xpcFBhdGgnKSAgLy8gZGVmaW5lIGEgY2xpcCBwYXRoXG4gICAgLmF0dHIoJ2lkJywgJ2NpcmNsZS1jbGlwJykgLy8gZ2l2ZSB0aGUgY2xpcFBhdGggYW4gSURcbiAgICAvLyB1c2UgYW55IHNoYXBlXG4gICAgLmNhbGwoYXBwZW5kQ2lyY2xlKVxuICAvLyBhZGQgdGhlIGltYWdlLCB3aGljaCBpcyBjbGlwcGVkIHZpYSB0aGUgY2xpcC1wYXRoIGF0dHJpYnV0ZVxuICBzdmcuYXBwZW5kKCdpbWFnZScpXG4gICAgLmF0dHIoJ3hsaW5rOmhyZWYnLCAndGlnZXIuanBnJylcbiAgICAuYXR0cigneCcsIDApXG4gICAgLmF0dHIoJ3knLCAwKVxuICAgIC5hdHRyKCd3aWR0aCcsIDUxMiArICdweCcpXG4gICAgLmF0dHIoJ2hlaWdodCcsIDMyMCArICdweCcpXG4gICAgLy8gY2xpcCB0aGUgaW1hZ2UgdXNpbmcgaWRcbiAgICAuYXR0cignY2xpcC1wYXRoJywgJ3VybCgjY2lyY2xlLWNsaXApJylcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzY3JpcHQuanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBTUE7QUFOQTtBQVFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")
}
]);
