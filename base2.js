//全浏览器兼容插入目标
function addEvent(obj,type,fn)
{
	if(obj.addEventListener){
		obj.addEventListener(type,fn);
	}else if(obj.attachEvent){
		obj.attachEvent('on'+type,fn)
	}
}
//全浏览器兼容移除目标
function removeEvent(obj,type,fn){
	if (obj.removeEventListener)
	{
		obj.removeEventListener(type,fn);
	}else if(obj.detachEvent){
			obj.detachEvent('on'+type,fn)
		}
}
//全浏览器兼容获取目标
function getTarget(evt){
	if(evt.target){
		return evt.target;
	}else if (window.evevt.srcElement)
	{
		return window.event.srcElement;
	}
}
//全浏览器兼容禁止行为
function preDef(evt){
	var e=evt||window.event;
	if(e.preventDefault){
		e.preventDefault();
	}else{
		e.returnValue=false;
	}
}