//create container before AJAX call

function makeSections(element, attr, attrvalue) {
    element = document.createElement(element);
    element.setAttribute(attr, attrvalue);
    document.body.append(element);
}
makeSections("section", "id", "photo-box");



//AJAX call
var apiReq = new XMLHttpRequest();
//method ,path, asynchronosly true 
apiReq.open('GET', 'testdata.json', true);
apiReq.responseType = 'text';
//between this create function for data to load sucessfully
apiReq.onload = function () {
    //on returned data convert from string to an object
    if (apiReq.status === 200) {
        var apiObj = JSON.parse(apiReq.responseText);
        console.log(apiObj);
    }
    // iterate over response data
    apiObj.forEach(function (element) {

        var eleID = element.id;
        var eleName = element.name;
        var eleParent = element.parent;
        var eleThumbDesc = element.thumbnail.description;
        var eleThumbPath = element.thumbnail.href;

        // build dynamically based off parent value is null or not
        "use strict";

        //create parent nodes    
        //HTML templates 
        var templateNodeHTML = '<section> <div  data-id="' +
            eleID +
            '" data-parent="' +
            eleParent +
            '" class="parent"><div class="child-img"><img src="' +
            element.thumbnail.href +
            '" data-desc="' +
            eleThumbDesc +
            '" ></div><div class="child-text"><h1 class="" data-name="' +
            eleName +
            '"></h1> <span class="fa  fa-3x" aria-hidden="true" data-add-caret="' +
            eleParent +
            '"></span></div></div></section>';
              
        //parent nodes

        // should only bulid toplevel nodes if parent value is null
        var buildNode = function (ele) {            
            if (element) {
                var range = document.createRange();
                range.selectNode(document.getElementById("photo-box"));
                var htmlTemplate = range.createContextualFragment(ele);
                document.getElementById("photo-box").appendChild(htmlTemplate);
            }
           
        }
        buildNode(templateNodeHTML);

    });
 
    // add caret if parent val is not null
 function addCaret(){
    'use strict'
    var parent = document.querySelectorAll('[data-add-caret]');             
       var list = parent;
        list.forEach(function(currentValue, currentIndex, listObj){
           var parentVal = currentValue.attributes[2].nodeValue;          
         if(parentVal !== "null"){
            currentValue.classList.add('fa-caret-right');
         } 
     })
    }   
    addCaret()

  function isExpandable(){
      'use strict'
   var parentTarget = document.querySelectorAll('[data-parent]');  
      var targetList = parentTarget;      
      targetList.forEach(function(currentValue, currentIndex, listObj){
        var parentVal = currentValue.attributes[1].nodeValue;                    
       if(parentVal !== "null"){
         currentValue.classList.add('pointer-cursor');
      } 
  });
}
    isExpandable()

    // get node name from data- value 
   function getNodeName() {
    'use strict'
    var nodeName = document.querySelectorAll('[data-name]'); 
    var nodeNameList = nodeName;
    nodeNameList.forEach(function(currentValue, currentIndex, listObj){
    var parentVal = currentValue.attributes[1].nodeValue;
     currentValue.textContent = parentVal;
    
    });   
}
getNodeName();
//if elements parent value matches the another elements id value whos parent value is null,  then append to that element  
function linkNodeName() {
    'use strict'
    var nodeIDs = document.querySelectorAll('[data-id]'); 
    var isParent = document.querySelectorAll('[data-parent]');    
    var Target1 =  document.getElementsByTagName("section")[1]; 
    
    
   //console.log(Target2)


    
    var nodeIDList = nodeIDs;
   // console.log(nodeIDList);
    var parentVal = isParent;
   
    
    nodeIDList.forEach(function(currentValue, currentIndex, listObj){
     var idVal = currentValue.attributes[0].nodeValue;   
   // console.log({id:idVal});  
    var parentVal = currentValue.attributes[1].nodeValue;
   // console.log({parentvalue:parentVal});  
    // console.log({parentVal:parentVal,idVal:idVal});      
     // console.log(currentValue.attributes[0].nodeValue);  
     console.log(currentValue);
      Target1.append(isParent[1]);
      Target1.append(isParent[3]);
      function MoveDiv() {
        var fragment = document.createDocumentFragment();
        fragment.appendChild(document.querySelectorAll('[data-id="4"]')[0]);
        document.querySelectorAll('[data-id="5"]')[0].append(fragment);
    }
    MoveDiv()
     
    });   
 }
 linkNodeName();

}




//start call
apiReq.send();