"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[97386],{242935:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-702c0bae","path":"/devices/alab.switch.html","title":"Alab alab.switch control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Alab alab.switch control via MQTT","description":"Integrate your Alab alab.switch via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-04-29T19:24:39.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch (l1 endpoint)","slug":"switch-l1-endpoint","link":"#switch-l1-endpoint","children":[]},{"level":3,"title":"Switch (l2 endpoint)","slug":"switch-l2-endpoint","link":"#switch-l2-endpoint","children":[]},{"level":3,"title":"Switch (l3 endpoint)","slug":"switch-l3-endpoint","link":"#switch-l3-endpoint","children":[]},{"level":3,"title":"Switch (l4 endpoint)","slug":"switch-l4-endpoint","link":"#switch-l4-endpoint","children":[]},{"level":3,"title":"Input state (numeric, in1 endpoint)","slug":"input-state-numeric-in1-endpoint","link":"#input-state-numeric-in1-endpoint","children":[]},{"level":3,"title":"Input state (numeric, in2 endpoint)","slug":"input-state-numeric-in2-endpoint","link":"#input-state-numeric-in2-endpoint","children":[]},{"level":3,"title":"Input state (numeric, in3 endpoint)","slug":"input-state-numeric-in3-endpoint","link":"#input-state-numeric-in3-endpoint","children":[]},{"level":3,"title":"Input state (numeric, in4 endpoint)","slug":"input-state-numeric-in4-endpoint","link":"#input-state-numeric-in4-endpoint","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1714806538000},"filePathRelative":"devices/alab.switch.md"}')},874612:(e,t,o)=>{o.r(t),o.d(t,{default:()=>w});var i=o(166252);const n=(0,i._)("h1",{id:"alab-alab-switch",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#alab-alab-switch","aria-hidden":"true"},"#"),(0,i.Uk)(" Alab alab.switch")],-1),a=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),d=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"alab.switch")],-1),c=(0,i._)("td",null,"Vendor",-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Four channel relay board with four inputs")],-1),u=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"switch (state), input_state, action, linkquality")],-1),l=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/alab.switch.png",alt:"Alab alab.switch"})])],-1),h=(0,i._)("h2",{id:"notes",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,i.Uk)(" Notes")],-1),r={href:"https://www.tindie.com/products/a_lab_technology/zigbee-4-channel-relay/",target:"_blank",rel:"noopener noreferrer"},p=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),m=(0,i.uE)('<ul><li><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l1-endpoint" aria-hidden="true">#</a> Switch (l1 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l1</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l1&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l1&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l1&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l1&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off" aria-hidden="true">#</a> On with timed off</h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionnaly an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depend on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="switch-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l2-endpoint" aria-hidden="true">#</a> Switch (l2 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l2</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l2&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l2&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l2&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l2&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off-1" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off-1" aria-hidden="true">#</a> On with timed off</h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionnaly an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depend on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="switch-l3-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l3-endpoint" aria-hidden="true">#</a> Switch (l3 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l3</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l3&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l3&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l3&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l3&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off-2" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off-2" aria-hidden="true">#</a> On with timed off</h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionnaly an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depend on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="switch-l4-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l4-endpoint" aria-hidden="true">#</a> Switch (l4 endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_l4</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l4&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l4&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l4&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l4&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off-3" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off-3" aria-hidden="true">#</a> On with timed off</h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionnaly an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depend on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="input-state-numeric-in1-endpoint" tabindex="-1"><a class="header-anchor" href="#input-state-numeric-in1-endpoint" aria-hidden="true">#</a> Input state (numeric, in1 endpoint)</h3><p>Input state. Value can be found in the published state on the <code>input_state_in1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;input_state_in1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;input_state_in1&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>1</code>.</p><h3 id="input-state-numeric-in2-endpoint" tabindex="-1"><a class="header-anchor" href="#input-state-numeric-in2-endpoint" aria-hidden="true">#</a> Input state (numeric, in2 endpoint)</h3><p>Input state. Value can be found in the published state on the <code>input_state_in2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;input_state_in2&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;input_state_in2&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>1</code>.</p><h3 id="input-state-numeric-in3-endpoint" tabindex="-1"><a class="header-anchor" href="#input-state-numeric-in3-endpoint" aria-hidden="true">#</a> Input state (numeric, in3 endpoint)</h3><p>Input state. Value can be found in the published state on the <code>input_state_in3</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;input_state_in3&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;input_state_in3&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>1</code>.</p><h3 id="input-state-numeric-in4-endpoint" tabindex="-1"><a class="header-anchor" href="#input-state-numeric-in4-endpoint" aria-hidden="true">#</a> Input state (numeric, in4 endpoint)</h3><p>Input state. Value can be found in the published state on the <code>input_state_in4</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;input_state_in4&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;input_state_in4&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>1</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on_l1</code>, <code>on_l2</code>, <code>on_l3</code>, <code>on_l4</code>, <code>off_l1</code>, <code>off_l2</code>, <code>off_l3</code>, <code>off_l4</code>, <code>toggle_l1</code>, <code>toggle_l2</code>, <code>toggle_l3</code>, <code>toggle_l4</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',30),q={},w=(0,o(983744).Z)(q,[["render",function(e,t){const o=(0,i.up)("RouterLink"),q=(0,i.up)("ExternalLinkIcon");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),n,(0,i._)("table",null,[a,(0,i._)("tbody",null,[d,(0,i._)("tr",null,[c,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=Alab"},{default:(0,i.w5)((()=>[(0,i.Uk)("Alab")])),_:1})])]),s,u,l])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),h,(0,i._)("p",null,[(0,i._)("a",r,[(0,i.Uk)("Zigbee 4 Channel Relay"),(0,i.Wm)(q)])]),(0,i.kq)(" Notes END: Do not edit below this line "),p,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),m])}]])}}]);