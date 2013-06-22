
var call_id = 0;

function nextId(){
	call_id++;
	return call_id;
}


async_callbacks = {}

PyCall = function(event){
	//alert("Esta cambiando el titulo");
	document.title = "null";
	document.title = JSON.stringify(event);
}

PyAsync = function(name, data){
	
	var Event = {
		name : name,
		args : data.args,
		callback_id : nextId()
	};
	
	async_callbacks[Event.callback_id] = data.callback;
	
	window.setTimeout(function(){
		PyCall(Event);
	}, 1);
}


PyAnswer = function(id, data){
	/*
	var async = async_callbacks[id];
	if(async){
		async(data)*/
		async_callbacks[id](data);
		delete async_callbacks[id];
	//}
	
}

