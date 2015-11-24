/**using partial**/
var jsonData = {
    			dept:[{
    				name: "Engg",
    				employees: [
                        {
                            fname: "Suzy",
                            lname: "Bertram"
                        },
                        {
                            fname: "Brianna",
                            lname: "Kreutz"
                        }
                    ]
                 },
    			 {
    				name: "Sales",
    				employees: [
                        {
                            fname: "Jim",
                            lname: "Halpert"
                        },
                        {
                            fname: "Dwight",
                            lname: "Schrute"
                        }
                    ]
                 }]
};
var tmpl = document.getElementById("perTemp").innerHTML;
var getPartial = document.getElementById("partial").innerHTML;
var partial = {employee: getPartial}
var html = Mustache.to_html(tmpl,jsonData,partial);
document.getElementById("sample").innerHTML = html;
