

export const getAdminPage = (req, res) => {
    const user = req.session.user;
    res.render('../index', {user: user, view: 'views/admin'});
};

export const getProfilePage = (req, res) => {
    const user = req.session.user;
    res.render('../index', {user: user, view: 'views/profile'});
};
