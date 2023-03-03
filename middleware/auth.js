export default function ({
    route,
    redirect
}) {
    if (!$auth.loggedIn && route.name !== 'login') {
        redirect('/login')
    }
}