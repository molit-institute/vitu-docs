(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{267:function(e,r,n){"use strict";n.r(r);var t=n(0),i=Object(t.a)({},(function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"technische-voraussetzungen"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#technische-voraussetzungen"}},[e._v("#")]),e._v(" Technische Voraussetzungen")]),e._v(" "),n("print-header"),e._v(" "),n("p",[e._v("Die im Folgenden angegebenen Werte sind Richtwerte, die sich je nach Anwendungsfall noch ändern können.")]),e._v(" "),n("p",[n("strong",[e._v("VITU")]),e._v(" benötigt zur Teilnahme an der Videokonferenz neben einem aktuellen Firefox oder Chrome Browser (Unterstützte Browser: Chrome 58+ & Firefox 65+), eine Webcam und Mikrofon. Um den eigenen Bildschirm in der Videokonferenz via "),n("strong",[e._v("Screensharing")]),e._v(" teilen\nzu können, wird bei Chrome mindestens die Version 72 und bei Firefox mindestens die Version 66 benötigt. Alternativ kann in Chrome die Erweiterung "),n("a",{attrs:{href:"https://chrome.google.com/webstore/detail/janus-webrtc-screensharin/hapfgfdkleiggjjpfpenajgdnfckjpaj",target:"_blank",rel:"noopener noreferrer"}},[e._v("Janus WebRTC Screensharing"),n("OutboundLink")],1),e._v(" installiert werden.")]),e._v(" "),n("p",[e._v("Die eingesetzte Software VITU ist komplett browserbasiert. Die Lösung basiert technisch auf WebRTC, jegliche Kommunikation erfolgt TLS verschlüsselt. Falls vorhanden, sollten die ausgehenden Firewallregeln Zugriff auf Port 443 TCP erlauben.")]),e._v(" "),n("p",[e._v("Spezielle Hardware-Anforderungen zur Installation der VITU Instanz aller Komponenten sind aus technischer Sicht für den Administrator: zwei bis drei Server bzw. zwei bis drei VMs mit folgenden Anforderungen, je nach Konfiguration.")]),e._v(" "),n("h2",{attrs:{id:"empfohlene-systemvoraussetzungen"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#empfohlene-systemvoraussetzungen"}},[e._v("#")]),e._v(" Empfohlene Systemvoraussetzungen")]),e._v(" "),n("h3",{attrs:{id:"vm1-vitu"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vm1-vitu"}},[e._v("#")]),e._v(" VM1: VITU")]),e._v(" "),n("ul",[n("li",[e._v("Funktion: Stellt die VITU Applikation bereit, Reverseproxy für Data Server")]),e._v(" "),n("li",[e._v("Betriebssystem: Ubuntu Server 18.04 LTS")]),e._v(" "),n("li",[e._v("Arbeitsspeicher: 4GB RAM")]),e._v(" "),n("li",[e._v("Prozessor: Quad Core @2Ghz")]),e._v(" "),n("li",[e._v("Öffentliches Netzwerk: Port 80 und 443 müssen für Nutzer erreichbar sein")]),e._v(" "),n("li",[e._v("Öffentliche IP, falls Einwahl von außerhalb des Kliniknetzes möglich sein soll")]),e._v(" "),n("li",[e._v("DNS Eintrag + SSL Zertifikat")])]),e._v(" "),n("h3",{attrs:{id:"vm2-videoserver"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vm2-videoserver"}},[e._v("#")]),e._v(" VM2: Videoserver")]),e._v(" "),n("ul",[n("li",[e._v("Betriebssystem: Ubuntu Server 18.04 LTS")]),e._v(" "),n("li",[e._v("Arbeitsspeicher: 8GB RAM")]),e._v(" "),n("li",[e._v("Prozessor: Quad Core @2Ghz")]),e._v(" "),n("li",[e._v("Öffentliches Netzwerk: Port 80 und 443 müssen für Nutzer erreichbar sein")]),e._v(" "),n("li",[e._v("Internes Netzwerk: Portfreigabe für Port 8088 (muss nur von VITU-VM erreichbar sein)")]),e._v(" "),n("li",[e._v("Öffentliche IP, falls Einwahl von außerhalb des Kliniknetzes möglich sein soll")]),e._v(" "),n("li",[e._v("DNS Eintrag + SSL Zertifikat")])]),e._v(" "),n("h3",{attrs:{id:"vm3-data"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vm3-data"}},[e._v("#")]),e._v(" VM3: Data")]),e._v(" "),n("ul",[n("li",[e._v("Betriebssystem: Ubuntu Server 18.04 LTS")]),e._v(" "),n("li",[e._v("Arbeitsspeicher: 8GB RAM")]),e._v(" "),n("li",[e._v("Prozessor: Quad Core @2Ghz")]),e._v(" "),n("li",[e._v("Internes Netzwerk: Portfreigabe für Port 8088 (muss nur von VITU-VM erreichbar sein)")]),e._v(" "),n("li",[e._v("DNS Eintrag + SSL Zertifikat (von interner CA, da nicht von außen erreichbar)")])]),e._v(" "),n("pdf-download")],1)}),[],!1,null,null,null);r.default=i.exports}}]);