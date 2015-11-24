<div id="sample">
</div>

<script id="perTemp" type="text/template">
    <p>{{>fullname}}</p>
</script>

<script id="partial" type="text/template">
    <p>{{salut}}. {{fName}} {{lname}}</p>
</script>

<script type="text/javscript">
  /**using partial**/
  var jsonData = {
      				fName: "Harshal",
      				lName: "Carpenter",
      				salut: "Mr."
  				};
  var tmpl = document.getElementById("perTemp").innerHTML;
  var getPartial = document.getElementById("partial").innerHTML;
  var partial = {fullName: getPartial}
  var html = Mustache.to_html(tmpl,jsonData,partial);
  document.getElementById("sample").innerHTML = html;
</script>
