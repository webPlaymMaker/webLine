addEvent(window,'load',function(){
	/*var fm=document.getElementById('myform');
	var fm=document.getElementsByTagName('form')[0];
	var fm=document.forms[0];
	alert(fm);
	addEvent(document,'keypress',function(evt){
		var e=evt||window.event;
		alert(e.CharCode);
	})

	var fm=document.getElementById('myform');
	var sub=document.getElementById('inp');
	//add(Eventfm,'submit',function(e){						//阻止默认行为
	//	preDef(e);
	//})
	addEvent(document,'keydown',function(e){
		if(e.ctrlKey && e.keyCode==13)fm.submit();			//ctrl+enter提交
	})
	

	//防止多次提交代码
	var fm=document.getElementById('myform');
	var flag=false;
	addEvent(fm,'click',function(evt){
		var e=evt||window.event;
		preDef(e);
		document.getElementById('inp').disabled=true;
		if (flag==true)return;
		flag=true;
		alert('提交');
		setTimeout(function(){
			fm.submit();
		},5000);
	})
	*/

	var fm=document.getElementById('myform');
	//alert(fm.elements[0]);									//表单元素
	//fm.elements[0].focus();										//聚焦
	//fm.elements[0].blur();										//移出焦点
	
	//addEvent(fm.elements[0],'focus',function(){
	//	alert('Lee')
	//})

	var user=fm.elements['user'];
	var content=fm.elements['content'];
	//alert(user.value);
	//alert(content.value);

	//alert(user.getAttribute('value'));								//兼容性奇差
	//alert(content.getAttribute('value'));							//兼容性奇差

	//DOM3方式
	//user.select();													//选中文本(实测火狐不可以)
	//user.setSelectionRange(0,3);									//选中第0到1位置的文本(实测只有ie9.0可以)
	//user.setSelectionRange(0,user.value.length);
	//user.focus();

	//ie选择文本方式
	//var range=user.createTextRange();
	//range.collapse(true);
//	range.moveStart('character',1);
	//range.moveEnd('character',3);
	//range.select();

	//selectText(user, 1, 3);

	//选中文本
	/*addEvent(user,'select',function(){
		alert(this.value);
	})
	
	addEvent(user,'select',function(){
		//alert(this.selectionStart+','+this.selectionEnd);					//返回选中位置
		document.getElementsByTagName('p')[0].innerHTML=this.value.substring(this.selectionStart,this.selectionEnd);
		//alert(this.value.substring(this.selectionStart,this.selectionEnd))	//返回选中文本
	})
	

	addEvent(user,'keypress',function(evt){
		var e=evt||window.event;
		var charCode=e.charCode;
		//防止输入非数字 
		if(!/\d/.test(String.fromCharCode(charCode))&&charCode>8){
			preDef(e);
		}
	})
	addEvent(content,'copy',function(evt){						//防止复制
		var e=evt||window.event;
		preDef(e);
	})
	addEvent(content,'cut',function(evt){						//防止剪切
		var e=evt||window.event;
		preDef(e);
	})
	addEvent(content,'paste',function(evt){						//防止粘贴
		var e=evt||window.event;
		preDef(e);
	})
	*/

	addEvent(content,'keyup',function(){
		this.value=this.value.replace(/[^\d]/g,'');				//验证后取消，非数字键返回空值
	})

	//自动换行
	addEvent(fm.elements['a1'],'keyup',tabForward);
	addEvent(fm.elements['a2'],'keyup',tabForward);
	addEvent(fm.elements['a3'],'keyup',tabForward);

	function tabForward(evt){
		var e=evt||window.event;
		var target=getTarget(e);
		if(target.value.length==target.getAttribute('maxlength')){
			for(var i=0;i<fm.elements.length;i++){
				if(fm.elements[i]==target){
					fm.elements[i+1].focus();
					return;
				}
			}
		}

	}
})

/*选择部分文本实现跨浏览器兼容
function selectText(text, start, stop) {
	if (text.setSelectionRange) {
		text.setSelectionRange(start, stop);
		text.focus();
	} else if (text.createTextRange) {
		var range = text.createTextRange();
		range.collapse(true);
		range.moveStart('character', start);
		range.moveEnd('character', stop - start); //IE 用终点减去起点得到字符数
		range.select();
	}
}*/