interface BaseUser {
  name: string;
}
interface AuthenticatedUser extends BaseUser{
  type: 'authenticated';
  loggedSince: number;
}
interface AnonymousUser extends BaseUser{
  type: 'anonymous';
  visitedSince: number;
}
interface AdminUser extends BaseUser{
  type: 'admin';
  adminSince: number;
}
type User = AuthenticatedUser | AnonymousUser | AdminUser;

function onWebSiteSince(user: User): number{
  switch(user.type){
	case 'authenticated':
		return user.loggedSince;
	case 'anonymous':
		return user.visitedSince;
	case 'admin':
		return user.adminSince;
  }
}
