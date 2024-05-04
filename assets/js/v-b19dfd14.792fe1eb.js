"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[6393],{708968:(e,o,t)=>{t.r(o),t.d(o,{data:()=>i});const i=JSON.parse('{"key":"v-b19dfd14","path":"/devices/QS-Zigbee-C03.html","title":"Lonsonho QS-Zigbee-C03 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Lonsonho QS-Zigbee-C03 control via MQTT","description":"Integrate your Lonsonho QS-Zigbee-C03 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-03-31T18:55:00.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Cover","slug":"cover","link":"#cover","children":[]},{"level":3,"title":"Moving (enum)","slug":"moving-enum","link":"#moving-enum","children":[]},{"level":3,"title":"Calibration (binary)","slug":"calibration-binary","link":"#calibration-binary","children":[]},{"level":3,"title":"Motor reversal (binary)","slug":"motor-reversal-binary","link":"#motor-reversal-binary","children":[]},{"level":3,"title":"Calibration time (numeric)","slug":"calibration-time-numeric","link":"#calibration-time-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1714806538000},"filePathRelative":"devices/QS-Zigbee-C03.md"}')},973645:(e,o,t)=>{t.r(o),t.d(o,{default:()=>g});var i=t(166252);const a=(0,i._)("h1",{id:"lonsonho-qs-zigbee-c03",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#lonsonho-qs-zigbee-c03","aria-hidden":"true"},"#"),(0,i.Uk)(" Lonsonho QS-Zigbee-C03")],-1),n=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),l=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"QS-Zigbee-C03")],-1),r=(0,i._)("td",null,"Vendor",-1),d=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Curtain/blind motor controller")],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"cover (state, position), moving, calibration, motor_reversal, calibration_time, linkquality")],-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/QS-Zigbee-C03.png",alt:"Lonsonho QS-Zigbee-C03"})])],-1),u=(0,i._)("h2",{id:"notes",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,i.Uk)(" Notes")],-1),h=(0,i._)("p",null,[(0,i._)("em",null,"How to use calibration")],-1),p=(0,i._)("ul",null,[(0,i._)("li",null,"Activate calibration mode"),(0,i._)("li",null,"Open the shutter completely and press stop"),(0,i._)("li",null,"Set the number to 100 and press the refresh button"),(0,i._)("li",null,"Close the shutter completely and when it comes to an end, press STOP."),(0,i._)("li",null,"Set the position to 0, press the refresh button and deactivate the calibration.")],-1),b=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),m=(0,i.uE)('<ul><li><p><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>cover_position_tilt_disable_report</code>: Do not publish set cover target position as a normal &#39;position&#39; value (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover" aria-hidden="true">#</a> Cover</h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="moving-enum" tabindex="-1"><a class="header-anchor" href="#moving-enum" aria-hidden="true">#</a> Moving (enum)</h3><p>Value can be found in the published state on the <code>moving</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>UP</code>, <code>STOP</code>, <code>DOWN</code>.</p><h3 id="calibration-binary" tabindex="-1"><a class="header-anchor" href="#calibration-binary" aria-hidden="true">#</a> Calibration (binary)</h3><p>Value can be found in the published state on the <code>calibration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;calibration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibration&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> calibration is ON, if <code>OFF</code> OFF.</p><h3 id="motor-reversal-binary" tabindex="-1"><a class="header-anchor" href="#motor-reversal-binary" aria-hidden="true">#</a> Motor reversal (binary)</h3><p>Value can be found in the published state on the <code>motor_reversal</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;motor_reversal&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motor_reversal&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> motor reversal is ON, if <code>OFF</code> OFF.</p><h3 id="calibration-time-numeric" tabindex="-1"><a class="header-anchor" href="#calibration-time-numeric" aria-hidden="true">#</a> Calibration time (numeric)</h3><p>Calibration time. Value can be found in the published state on the <code>calibration_time</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>s</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',14),v={},g=(0,t(983744).Z)(v,[["render",function(e,o){const t=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),a,(0,i._)("table",null,[n,(0,i._)("tbody",null,[l,(0,i._)("tr",null,[r,(0,i._)("td",null,[(0,i.Wm)(t,{to:"/supported-devices/#v=Lonsonho"},{default:(0,i.w5)((()=>[(0,i.Uk)("Lonsonho")])),_:1})])]),d,s,c])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,h,p,(0,i.kq)(" Notes END: Do not edit below this line "),b,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),m])}]])}}]);