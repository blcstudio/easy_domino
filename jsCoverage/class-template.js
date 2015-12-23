/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['class-template.js']) {
  _$jscoverage['class-template.js'] = [];
  _$jscoverage['class-template.js'][16] = 0;
  _$jscoverage['class-template.js'][19] = 0;
  _$jscoverage['class-template.js'][22] = 0;
  _$jscoverage['class-template.js'][23] = 0;
  _$jscoverage['class-template.js'][26] = 0;
  _$jscoverage['class-template.js'][27] = 0;
  _$jscoverage['class-template.js'][35] = 0;
  _$jscoverage['class-template.js'][40] = 0;
  _$jscoverage['class-template.js'][41] = 0;
}
_$jscoverage['class-template.js'].source = ["<span class=\"c\">/*</span>","<span class=\"c\"> * @file class-template.js</span>","<span class=\"c\"> * @author ginger</span>","<span class=\"c\"> * @brief class template</span>","<span class=\"c\"> */</span>","","<span class=\"c\">/*</span>","<span class=\"c\"> * @interface</span>","<span class=\"c\"> * Class(param1, param2) </span>","<span class=\"c\"> * \t\t\t\t: \t- n1 and n2 are two parameters of class constructor</span>","<span class=\"c\"> * \t\t\t\t: method1() - the first public method</span>","<span class=\"c\"> *\t\t\t\t: method2() - the second public method</span>","<span class=\"c\"> */</span>","","<span class=\"c\">/* sample class */</span>","<span class=\"k\">var</span> Class  <span class=\"k\">=</span> <span class=\"k\">{</span>","\tcreateNew<span class=\"k\">:</span> <span class=\"k\">function</span> <span class=\"k\">(</span>param1<span class=\"k\">,</span> param2<span class=\"k\">)</span> <span class=\"k\">{</span>","\t\t<span class=\"c\">// create</span>","\t\t<span class=\"k\">var</span> object <span class=\"k\">=</span> <span class=\"k\">{}</span><span class=\"k\">;</span>","\t\t","\t\t<span class=\"c\">// private</span>","\t\t<span class=\"k\">var</span> param1<span class=\"k\">;</span>","\t\t<span class=\"k\">var</span> param2<span class=\"k\">;</span>","\t\t","\t\t<span class=\"c\">// public</span>","\t\tobject<span class=\"k\">.</span>method1 <span class=\"k\">=</span> <span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span> <span class=\"k\">return</span> param1<span class=\"k\">;</span> <span class=\"k\">}</span><span class=\"k\">;</span>","\t\tobject<span class=\"k\">.</span>method2 <span class=\"k\">=</span> <span class=\"k\">function</span> <span class=\"k\">()</span> <span class=\"k\">{</span> <span class=\"c\">/* DO SOMETHING */</span> <span class=\"k\">}</span><span class=\"k\">;</span>","\t\t","\t\t<span class=\"c\">// constructor</span>","\t\t<span class=\"k\">{</span>","\t\t\t<span class=\"c\">// DO SOMETHING</span>","\t\t<span class=\"k\">}</span>","\t\t","\t\t<span class=\"c\">// return</span>","\t\t<span class=\"k\">return</span> object<span class=\"k\">;</span>","\t<span class=\"k\">}</span>","<span class=\"k\">}</span><span class=\"k\">;</span>","","<span class=\"c\">/* sample usecase */</span>","<span class=\"k\">var</span> object <span class=\"k\">=</span> Class<span class=\"k\">.</span>createNew<span class=\"k\">(</span><span class=\"s\">'param1'</span><span class=\"k\">,</span> <span class=\"s\">'param2'</span><span class=\"k\">);</span>","<span class=\"k\">if</span> <span class=\"k\">(</span>object<span class=\"k\">.</span>method1<span class=\"k\">()</span> <span class=\"k\">!==</span> <span class=\"s\">'param1'</span><span class=\"k\">)</span> <span class=\"k\">throw</span> <span class=\"s\">'Wrong !'</span><span class=\"k\">;</span>"];
_$jscoverage['class-template.js'][16]++;
var Class = {createNew: (function (param1, param2) {
  _$jscoverage['class-template.js'][19]++;
  var object = {};
  _$jscoverage['class-template.js'][22]++;
  var param1 = param1;
  _$jscoverage['class-template.js'][23]++;
  var param2 = param2;
  _$jscoverage['class-template.js'][26]++;
  object.method1 = (function () {
  _$jscoverage['class-template.js'][26]++;
  return param1;
});
  _$jscoverage['class-template.js'][27]++;
  object.method2 = (function () {
});
  _$jscoverage['class-template.js'][35]++;
  return object;
})};
_$jscoverage['class-template.js'][40]++;
var object = Class.createNew("param1", "param2");
_$jscoverage['class-template.js'][41]++;
if ((object.method1() !== "param1")) {
  _$jscoverage['class-template.js'][41]++;
  throw "Wrong !";
}