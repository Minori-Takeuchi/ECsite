export default function ({
    route,
    redirect
}) {
    if (!$auth.loggedIn && route.name !== 'login' && route.name !== 'register') {
        redirect('/login')
    }
}
