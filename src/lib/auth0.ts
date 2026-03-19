import { AuthenticationClient } from 'auth0';

export const AuthClient = new AuthenticationClient({
    domain: import.meta.env.AUTH0_ISSUER_BASE_URL.replace('https://', '').replace('/', ''),
    clientId: import.meta.env.AUTH0_CLIENT_ID,
    clientSecret: import.meta.env.AUTH0_CLIENT_SECRET
});

export const getLoginUrl = () => {
    const redirectUri = `${window.location.origin}/callback`;
    const domain = import.meta.env.AUTH0_ISSUER_BASE_URL;
    const clientId = import.meta.env.AUTH0_CLIENT_ID;
    const audience = import.meta.env.AUTH0_AUDIENCE;
    const scope = 'openid profile email';

    return `${domain}/authorize?` +
        `response_type=code&` +
        `client_id=${encodeURIComponent(clientId)}&` +
        `redirect_uri=${encodeURIComponent(redirectUri)}&` +
        `scope=${encodeURIComponent(scope)}&` +
        `audience=${encodeURIComponent(audience)}`;
}

export const getRegisterUrl = () => {
    const redirectUri = `${window.location.origin}/callback`;
    const domain = import.meta.env.AUTH0_ISSUER_BASE_URL;
    const clientId = import.meta.env.AUTH0_CLIENT_ID;
    const audience = import.meta.env.AUTH0_AUDIENCE;
    const scope = 'openid profile email';

    return `${domain}/authorize?` +
        `response_type=code&` +
        `client_id=${encodeURIComponent(clientId)}&` +
        `redirect_uri=${encodeURIComponent(redirectUri)}&` +
        `scope=${encodeURIComponent(scope)}&` +
        `audience=${encodeURIComponent(audience)}`;
}