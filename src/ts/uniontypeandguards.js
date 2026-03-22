function onWebSiteSince(user) {
    if (user.type === 'authenticated') {
        return user.loggedSince;
    }
    else if (user.type === 'anonymous') {
        return user.visitedSince;
    }
    return 0;
}
export {};
//# sourceMappingURL=uniontypeandguards.js.map