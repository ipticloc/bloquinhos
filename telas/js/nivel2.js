var largou = false;
                                                   /*funçao que vai exibir as mensagens na minha div com id app*/
function appStatus(msg){
		documet.getElementById('app_status').innerHTML = msg+"<br />";
	}
	                                               /*funçao que sera ativada ao arrastar meu objeto*/
function drag_start(e){
		appStatus("Arrastando o objeto"+e.target.getAttribute('id'));
		e.dataTransfer.dropEffect='move';          /*aplica o efeito de estar movendo*/
	    e.dataTransfer.setData("text/plain",e.target.getAttribute('id'));
	}
function drag_enter(e){
		appStatus("voce esta arrastando sobre "+e.target.getAttribute('id'));
	}
function drag_leave(e) {
		appStatus("voce deixou o"+e.target.getAttribute('id'));
	}
function drag_drop(e){
	var element = e.dataTransfer.getData("Text");
		appStatus("largou o objetro"+element+" na "+e.target.getAttribute('id'));
		e.target.appendChild(document.getElementById(element));
		largou=true;
		document.getElementById(element).removeAttribute("draggable");
	}
 function drag_end(e){
 	var status =document.getElementById('app_status');
 	    if(largou == false){
 		appStatus("voce deixou o objeto"+e.target.getAttribute('id'));
 	}
 }

 function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(ev.dataTransfer);
    ev.target.appendChild(document.getElementById(data));
}
$(".btn-menu").click(function(){
			$(".menu").show();
		});
			$(".btn-close").click(function(){
			$(".menu").hide();

		});