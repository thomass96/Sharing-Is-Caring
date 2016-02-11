/* Visit http://www.yaldex.com/ for full source code
and get more free JavaScript, CSS and DHTML scripts! */
var no = 100;
var speed = 30;
var ie4up = (document.all) ? 0 : 0;
var ns4up = !ie4up;
var s, x, y, sn, cs;
var a, r, cx, cy;
var i, doc_width = 1240, doc_height = 600;
if (ns4up) {
doc_width = self.innerWidth;
doc_height = self.innerHeight;
}
else
if (ie4up) {
doc_width = document.body.clientWidth;
doc_height = document.body.clientHeight;
}
x = new Array();
y = new Array();
r = new Array();
cx = new Array();
cy = new Array();
s = 8;
for (i = 0; i < no; ++ i) {
initRain();
document.write("<div id=\"dot"+ i +"\" style=\"POSITION: ");
	document.write("absolute; Z-INDEX: "+ i +"; VISIBILITY: ");
	document.write("visible; TOP: 15px; LEFT: 15px;\"><font color=\"blue\">");
document.write(",</font></div>");
}
function initRain() {
a = 6;
r[i] = 1;
sn = Math.sin(a);
cs = Math.cos(a);
cx[i] = Math.random() * doc_width + 1;
cy[i] = Math.random() * doc_height + 1;
x[i] = r[i] * sn + cx[i];
y[i] = cy[i];
}
function makeRain() {
r[i] = 1;
cx[i] = Math.random() * doc_width + 1;
cy[i] = 1;
x[i] = r[i] * sn + cx[i];
y[i] = r[i] * cs + cy[i];
}
function updateRain() {
r[i] += s;
x[i] = r[i] * sn + cx[i];
y[i] = r[i] * cs + cy[i];
}
function raindropNS() {
for (i = 0; i < no; ++ i) {
updateRain();
if ((x[i] <= 1) || (x[i] >= (doc_width - 20)) || (y[i] >= (doc_height - 20))) {
makeRain();
doc_width = self.innerWidth;
doc_height = self.innerHeight;
}
document.getElementById("dot"+i).style.top = y[i];
document.getElementById("dot"+i).style.left = x[i];
}
setTimeout("raindropNS()", speed);
}
function raindropIE() {
for (i = 0; i < no; ++ i) {
updateRain();
if ((x[i] <= 1) || (x[i] >= (doc_width - 20)) || (y[i] >= (doc_height - 20))) {
makeRain();
doc_width = document.body.clientWidth;
doc_height = document.body.clientHeight;
}
document.all["dot"+i].style.pixelTop = y[i];
document.all["dot"+i].style.pixelLeft = x[i];
}
setTimeout("raindropIE()", speed);
}
if (ns4up) {
raindropNS();
}
else
if (ie4up) {
raindropIE();
}