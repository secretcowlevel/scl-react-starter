
 /* eslint-disable */
export function safeGetCredentials() {
     /* eslint-enable */
    try {
        if (window.localStorage.getItem('scl-credentials')) {
            return JSON.parse(window.localStorage.getItem('scl-credentials'));
        }
    } catch (e) {
        return null;
    }
    return null;
}
