"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[84068],{355197:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-662b9d72","path":"/devices/EZ200.html","title":"Evanell EZ200 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Evanell EZ200 control via MQTT","description":"Integrate your Evanell EZ200 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-01-31T17:42:44.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Child lock (lock)","slug":"child-lock-lock","link":"#child-lock-lock","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1714806538000},"filePathRelative":"devices/EZ200.md"}')},575983:(e,t,i)=>{i.r(t),i.d(t,{default:()=>b});var o=i(166252);const l=(0,o._)("h1",{id:"evanell-ez200",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#evanell-ez200","aria-hidden":"true"},"#"),(0,o.Uk)(" Evanell EZ200")],-1),a=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),d=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"EZ200")],-1),n=(0,o._)("td",null,"Vendor",-1),c=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"Thermostatic radiator valve")],-1),r=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"lock (state), battery, climate (current_heating_setpoint, local_temperature, system_mode), linkquality")],-1),s=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/EZ200.png",alt:"Evanell EZ200"})])],-1),u=(0,o._)("h2",{id:"notes",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,o.Uk)(" Notes")],-1),h=(0,o._)("h3",{id:"pairing",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,o.Uk)(" Pairing")],-1),p=(0,o._)("p",null,'Remove batteries. Put battery back in, holding the middle button for 5s. Three horizontal lines flash. Push the "up" button. Device should now enter pairing mode (Wifi-symbol flashes).',-1),m=(0,o.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="child-lock-lock" tabindex="-1"><a class="header-anchor" href="#child-lock-lock" aria-hidden="true">#</a> Child lock (lock)</h3><p>The current state of this lock is in the published state under the <code>child_lock</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;child_lock&quot;: &quot;UNLOCK&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>current_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>30</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>, <code>auto</code>. Reading (<code>/get</code>) this attribute is not possible.</li></ul><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10),g={},b=(0,i(983744).Z)(g,[["render",function(e,t){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),l,(0,o._)("table",null,[a,(0,o._)("tbody",null,[d,(0,o._)("tr",null,[n,(0,o._)("td",null,[(0,o.Wm)(i,{to:"/supported-devices/#v=Evanell"},{default:(0,o.w5)((()=>[(0,o.Uk)("Evanell")])),_:1})])]),c,r,s])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,h,p,(0,o.kq)(" Notes END: Do not edit below this line "),m])}]])}}]);