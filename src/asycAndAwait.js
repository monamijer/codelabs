async function getUserRightAndUpdateMenu(){
	try{
	const user = await getUser(login);
	const rights = await getRights(user);
	updateMenu(rights);
	}catch(e){
	console.error(e);
	}
}
await getUserRightAndUpdateMenu();
