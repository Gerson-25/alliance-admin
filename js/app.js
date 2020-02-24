document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var options = document.getElementById('options');
    var instances = M.FormSelect.init(elems, options);
    instances.dropdownOptions
  });

  

  console.log(document.getElementsByClassName('tabs'))

  document.getElementById("list-promotions").style.display = "block"


  function openTab(evt, TabId){
  
    var i, tabs, tablinks;
  tabs = document.getElementsByClassName("tabs");
  for (i = 0; i < tabs.length; i++) {
    if(tabs[i]==2){
      tabs[i].style.display = "active";
    }
    tabs[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }

  document.getElementById(TabId).style.display = "block";
    evt.currentTarget.className += "active";
   }
