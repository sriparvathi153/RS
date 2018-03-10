function loadjson(file,callback) {
var rawfile= new XMLHttpRequest();
rawfile.overrideMimeType("application/json");
rawfile.open("GET",file,true);
rawfile.onreadystatechange=function() {
  if (rawfile.readyState===4 && rawfile.status=="200") {
    callback(rawfile.responseText);
  }
}
rawfile.send();
}


loadjson("resume.json",function (text) {
 var data =JSON.parse(text);
 // console.log(data);
 basic(data.basics);
});

var main=document.getElementById('mainDiv');
var left=document.getElementById('leftDiv');
var right=document.getElementById('rightDiv');

function basic(basics) {
  // console.log(basics.name);
  var lchild1=document.createElement("div");
  lchild1.classList.add("child1");
  var image=document.createElement("img");
  image.src=basics.picture;
  var head1=document.createElement("h1");
  head1.textContent=basics.name;
  var head3=document.createElement("h3");
  head3.textContent=basics.label;
  lchild1.appendChild(image);
  lchild1.appendChild(head1);
  lchild1.appendChild(head3);
  left.appendChild(lchild1);
  var hr1=document.createElement("hr");
  left.appendChild(hr1);
  var lchild2=document.createElement("div");
  lchild2.classList.add("child2");
  var head4=document.createElement("h4");
  head4.textContent=basics.phone;

  var head=document.createElement("h4");
  head.textContent=basics.email;
  lchild2.appendChild(head);
    lchild2.appendChild(head4);
    left.appendChild(lchild2);
}
