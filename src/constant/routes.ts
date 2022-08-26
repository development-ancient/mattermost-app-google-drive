const PathsVariable = {
    Identifier: ':IDENTIFIER',
    Account: ':ACCOUNT'
}

export const AppsPluginName = 'com.mattermost.apps';

const AppPaths = {
    ManifestPath: '/manifest.json',
    BindingsPath: '/bindings',
    InstallPath: '/install',
    CallPathHelp: '/help',

    CallPathConfigForm: '/config/form',
    CallPathUpdateConfigForm: '/config/update/form',
    CallPathConfigSubmit: '/config/form/submit',

    CallPathConnectSubmit: '/connect/login/submit',
    OAuthConnectPath: '/oauth2/connect',
    OAuthCompletePath: '/oauth2/complete',
    CallPathDisconnectSubmit: '/connect/disconnect/submit',

    CallPathStartNotifications: '/notifications/start',
    CallPathStopNotifications: '/notifications/stop',

    CallPathIncomingWebhookPath: '/webhook',
    CallPathCommentReplay: '/comment/replay',
}

const GooglePaths = {

};

const MattermostPaths = {
    PathKV: '/kv',
    PathOAuth2App: '/oauth2/app',
    PathOAuth2User: '/oauth2/user',
    UsersUpdateRolePath: `/users/${PathsVariable.Identifier}/roles`,
    PostsPath: '/posts',
    PostsEphemeralPath: '/posts/ephemeral',
    PostPath: `/posts/${PathsVariable.Identifier}`,
    UserPath: `/users/${PathsVariable.Identifier}`,
    ChannelPath: `/channels/${PathsVariable.Identifier}`,
    ChannelDirectPath: `/channels/direct`,
    DialogsOpenPath: '/actions/dialogs/open',
    ApiVersionV4: '/api/v4',
    ApiVersionV1: '/api/v1',
}

export const Routes = {
    PV: PathsVariable,
    App: AppPaths,
    MM: MattermostPaths,
    GD: GooglePaths,
};