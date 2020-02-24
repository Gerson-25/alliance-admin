document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var options = document.getElementById('options');
    var instances = M.FormSelect.init(elems, options);
    instances.dropdownOptions
  });

  console.log(document.getElementsByClassName('tabs'))