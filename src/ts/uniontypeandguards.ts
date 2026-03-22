interface User{
  type : 'authenticated'| 'anonymous';
  name: string;
}
interface AuthenticatedUser extends User{
  type: 'authenticated';
  loggedSince: number;
}
interface AnonymousUser extends User {
  type: 'anonymous';
  visitedSince: number;
}
function onWebSiteSince(user: User): number{
  if(user.type === 'authenticated'){
	return (user as AuthenticatedUser).loggedSince;
  }else if(user.type === 'anonymous'){
	return (user as AnonymousUser).visitedSince;
  }
  return 0;
}
