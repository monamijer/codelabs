function onWebSiteSince(user) {
    switch (user.type) {
        case 'authenticated':
            return user.loggedSince;
        case 'anonymous':
            return user.visitedSince;
        case 'admin':
            return user.adminSince;
    }
}
export {};
//# sourceMappingURL=uniontypeandguards2.js.map