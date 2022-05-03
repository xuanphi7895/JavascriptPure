// var h1 = document.createElement("h1");
// var ul = document.createElement("ul");
// var li = document.createElement("li");
//Event for window.
window.addEventListener('load',function(){
  //html DOM
    var h1_tag=createTag("h1","project","PHI DEMO PROJECT","body");
    var oderlist=createTag("ol","project_list","","body");
    //demo 1
    var list1=createTag("li","demo1","",oderlist);
    var link1=createTag("a","link_demo1","Demo 1",list1);
    link1.setAttribute("href","../demo1/index1.html");
    //demo 2
    var list2=createTag("li","demo2","",oderlist);
    var link2=createTag("a","link_demo2","Demo 2",list2);
    link2.setAttribute("href","../DEMO2/Demo/index.html");
    //demo 3
    var list3=createTag("li","demo3","",oderlist);
    var link3=createTag("a","link_demo3","Demo 3",list3);
    link3.setAttribute("href","../DEMO2/BaiDEMO2/index.html");
    // css DOM
    document.body.style.backgroundColor= "azure";
    document.body.style.fontFamily="Copperplate,Copperplate Gothic Light,fantasy";
    document.body.style.marginTop="10px";
    document.body.style.textAlign="center";
    h1_tag.style.color="red";
    h1_tag.style.textTransform="uppercase";
    link1.style.textDecoration="none";
    link1.style.fontStyle = "italic";
    link1.style.fontWeight = "bolder";
    link2.style.textDecoration="none";
    link2.style.fontStyle = "italic";
    link2.style.fontWeight = "bolder";
    link3.style.textDecoration="none";
    link3.style.fontStyle = "italic";
    link3.style.fontWeight = "bolder";
})
//Function create for content Body
function createTag(tag,classname,content,position){
    var name_tag = document.createElement(tag);
    name_tag.textContent=content;
    name_tag.classList.add(classname);
    if(position=="body")
        document.body.appendChild(name_tag);
    else
            position.appendChild(name_tag);
    return name_tag;
}