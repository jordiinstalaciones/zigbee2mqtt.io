"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[42266],{839850:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-9a28af62","path":"/devices/WDE002906_MEG5001-0300.html","title":"Schneider Electric WDE002906/MEG5001-0300 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Schneider Electric WDE002906/MEG5001-0300 control via MQTT","description":"Integrate your Schneider Electric WDE002906/MEG5001-0300 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-04-29T19:24:38.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Switch actions (enum, right endpoint)","slug":"switch-actions-enum-right-endpoint","link":"#switch-actions-enum-right-endpoint","children":[]},{"level":3,"title":"Switch actions (enum, left endpoint)","slug":"switch-actions-enum-left-endpoint","link":"#switch-actions-enum-left-endpoint","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1714806538000},"filePathRelative":"devices/WDE002906_MEG5001-0300.md"}')},504979:(e,t,o)=>{o.r(t),o.d(t,{default:()=>_});var i=o(166252);const n=(0,i._)("h1",{id:"schneider-electric-wde002906-meg5001-0300",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#schneider-electric-wde002906-meg5001-0300","aria-hidden":"true"},"#"),(0,i.Uk)(" Schneider Electric WDE002906/MEG5001-0300")],-1),d=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),c=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"WDE002906/MEG5001-0300")],-1),s=(0,i._)("td",null,"Vendor",-1),a=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Wiser wireless switch 1-gang or 2-gang")],-1),l=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"battery, switch_actions, action, linkquality")],-1),r=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/WDE002906-MEG5001-0300.png",alt:"Schneider Electric WDE002906/MEG5001-0300"})])],-1),h=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),u=(0,i.uE)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="switch-actions-enum-right-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-actions-enum-right-endpoint" aria-hidden="true">#</a> Switch actions (enum, right endpoint)</h3><p>Set Switch Action for right Button.. Value can be found in the published state on the <code>switch_actions_right</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_actions_right&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_actions_right&quot;: NEW_VALUE}</code>. The possible values are: <code>light</code>, <code>light_opposite</code>, <code>dimmer</code>, <code>dimmer_opposite</code>, <code>standard_shutter</code>, <code>standard_shutter_opposite</code>, <code>schneider_shutter</code>, <code>schneider_shutter_opposite</code>, <code>scene</code>, <code>toggle_light</code>, <code>toggle_dimmer</code>, <code>alternate_light</code>, <code>alternate_dimmer</code>, <code>not_used</code>.</p><h3 id="switch-actions-enum-left-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-actions-enum-left-endpoint" aria-hidden="true">#</a> Switch actions (enum, left endpoint)</h3><p>Set Switch Action for left Button.. Value can be found in the published state on the <code>switch_actions_left</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;switch_actions_left&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_actions_left&quot;: NEW_VALUE}</code>. The possible values are: <code>light</code>, <code>light_opposite</code>, <code>dimmer</code>, <code>dimmer_opposite</code>, <code>standard_shutter</code>, <code>standard_shutter_opposite</code>, <code>schneider_shutter</code>, <code>schneider_shutter_opposite</code>, <code>scene</code>, <code>toggle_light</code>, <code>toggle_dimmer</code>, <code>alternate_light</code>, <code>alternate_dimmer</code>, <code>not_used</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on_right</code>, <code>on_left</code>, <code>off_right</code>, <code>off_left</code>, <code>toggle_right</code>, <code>toggle_left</code>, <code>brightness_move_to_level_right</code>, <code>brightness_move_to_level_left</code>, <code>brightness_move_up_right</code>, <code>brightness_move_up_left</code>, <code>brightness_move_down_right</code>, <code>brightness_move_down_left</code>, <code>brightness_step_up_right</code>, <code>brightness_step_up_left</code>, <code>brightness_step_down_right</code>, <code>brightness_step_down_left</code>, <code>brightness_stop_right</code>, <code>brightness_stop_left</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',13),p={},_=(0,o(983744).Z)(p,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),n,(0,i._)("table",null,[d,(0,i._)("tbody",null,[c,(0,i._)("tr",null,[s,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=Schneider%20Electric"},{default:(0,i.w5)((()=>[(0,i.Uk)("Schneider Electric")])),_:1})])]),a,l,r])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,i.kq)(" Notes END: Do not edit below this line "),h,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),u])}]])}}]);