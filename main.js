var IITarget = {}
const	sstyle = "; filter:invert(1);"

chrome.runtime.onMessage.addListener(msg=>{
	if (msg.cmd !== "invert") return

	var node = IITarget, found=false, medimg={},	pref=".";
	const	scls=[]
	const	sids=[]
	for(var cl of scls){
		//medimg = node.parentNode.parentNode.getElementsByClassName(cl);
		if(sids.indexOf(cl)>-1) pref="#"
		medimg = node.closest(pref+cl)
		//medimg = findAncestor(node, cl);
		if(medimg){
			nodechk(medimg)
			found=true
			break
		}
	}
	if(!found){
		nodechk(node)
	}

})

function nodechk(ob){
	var sty=ob.getAttribute? ob.getAttribute("style")||"" :""

	if(sty && sty.indexOf(sstyle) >-1){
		sty=sty.replace(sstyle, '')
	}else{
		sty = sty+sstyle;
	}
	try{
		ob.setAttribute("style", sty)
	}catch(err){
		console.log(`invertimage nodechk: ${err}`)
	}
}

addEventListener('contextmenu', evn=> {
	IITarget = evn.target
}, false);
