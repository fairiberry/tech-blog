function saveData(){
  var title = document.getElementById("post_title");
  var content = document.getElementById("post_content");
  let obj = {
    titleVal: title.value,
    contentVal: content.value
  };

  stringifyObj = JSON.stringify(obj);

  localStorage.setItem("object", stringifyObj);

  retrieveObj = localStorage.getItem("object");

  parseObj = JSON.parse(retrieveObj);

  document.querySelector(".postT").innerHTML = parseObj.titleVal;

};

