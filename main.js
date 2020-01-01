// create a close button and add it to the end of the list item
	// var myNodelist = document.getElementsByTagName('LI');
	// var i;
	// for (i =0, i < myNodelist.lenght; i++) {
	// 	var span = document.createElement('span');
	// 	var txt = document.createTextNode('\u00D7');
	// 	span.className = 'close';
	// 	span.appendChild(txt);
	// 	myNodelist[i].appendChild(span);
	// }



// Adding new Todo to the list
function createTodo() {
	var li = document.createElement('li');
	var inputValue = document.getElementById('myText').value;
	var txt = document.createTextNode(inputValue);
	var chk = document.createElement('input');
	var btn = document.createElement('button');
	btn = document.getElementById('')
	li.appendChild(chk);
	li.appendChild(btn);
	li.appendChild(txt);

	
	chk.setAttribute('type', 'checkbox');


	if (inputValue === '') {
		alert('This cannot be left blank, Enter a text')
	} else {
		document.getElementById('myUl').appendChild(li);
	}

	document.getElementById('myText').value = '';



	// for (i =0, i < myNodelist.lenght; i++) {
	// 	var li = document.createElement('li');
	// 	var txt = document.createTextNode('\u00D7');
	// 	span.className = 'close';
	// 	span.appendChild(txt);
	// 	li.appendChild(span);
	// }

}