chrome.contextMenus.create({
	id: "invertimage",
	title: "Invert Image",
	contexts: ["all"]
})

chrome.contextMenus.onClicked.addListener((info, tab)=>{
	if(info.menuItemId !== "invertimage") return;
	
	try{
		chrome.tabs.sendMessage(tab.id, {cmd:"invert"})
	}catch(err){
		console.log(`invertimage error: ${err}`)
	}
})

