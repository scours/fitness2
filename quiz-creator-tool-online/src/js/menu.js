 	function CFunction(){
        fetch('./../../../../../lectures/src/json/extracontent.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });

       function appendData(data) {
        	
        var mainContainer = document.getElementById("CData");   
			document.getElementById("panel").style.display = "block";	
				mainContainer.innerHTML = ' ';
			   for (var i = 0; i < data.commonmodule.length; i++) {
                var d = document.createElement("d");				
			   d.innerHTML = data.commonmodule[i].sectionname +data.commonmodule[i].unitname+data.commonmodule[i].link;			   
              		  mainContainer.appendChild(d);	
                } 
		}	
}
	
	function SFunction(){
        fetch('./../../../../../lectures/src/json/extracontent.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });

       function appendData(data) {
				var emainContainer = document.getElementById("SData");
				document.getElementById("panel2").style.display = "block";	
				 emainContainer.innerHTML = ' ';
                for (var i = 0; i < data.specializedmodule.length; i++) {
                var e = document.createElement("e");				
			e.innerHTML = data.specializedmodule[i].sectionname +data.specializedmodule[i].unitname+data.specializedmodule[i].link;
                emainContainer.appendChild(e);				
            }
		}
 }
	
	$(document).ready(function(){
  $(".button3").click(function(){
    $(".abc3").toggle();
  });
});

$(document).ready(function(){
  $(".button1").click(function(){
    $(".abc1").toggle();
  });
});

$(document).ready(function(){
  $(".button2").click(function(){
    $(".abc2").toggle();
  });
});
		$(document).ready(function(){
  $(".label").click(function(){
    $(".mobo").toggle();
  });
});

	
        

      
			
            
        
   
  