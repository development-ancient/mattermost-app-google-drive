import axios, { AxiosResponse } from 'axios';
import {
    Channel,
    DialogProps,
    MattermostOptions,
    PostCreate,
    PostEphemeralCreate,
    PostResponse,
    PostUpdate,
    User
} from '../types';
import { Routes } from '../constant';
import { replace } from '../utils/utils';


export class MattermostClient {
    private readonly config: MattermostOptions;

    constructor(
        config: MattermostOptions
    ) {
        this.config = config;
    }

    public updateRolesByUser(userId: string, roles: string): Promise<any> {
        const url: string = `${this.config.mattermostUrl}${Routes.MM.ApiVersionV4}${Routes.MM.UsersUpdateRolePath}`;

        return axios.put(replace(url, Routes.PV.Identifier, userId), { roles }, {
            headers: {
                Authorization: `Bearer ${this.config.accessToken}`
            }
        }).then((response: AxiosResponse<any>) => response.data);
    }

    public createPost(post: PostCreate): Promise<PostResponse> {
        const url: string = `${this.config.mattermostUrl}${Routes.MM.ApiVersionV4}${Routes.MM.PostsPath}`;
        return axios.post(url, post, {
            headers: {
                Authorization: `Bearer ${this.config.accessToken}`
            }
        }).then((response: AxiosResponse<any>) => response.data);
    }

    public createEphemeralPost(post: PostEphemeralCreate): Promise<PostResponse> {
        const url: string = `${this.config.mattermostUrl}${Routes.MM.ApiVersionV4}${Routes.MM.PostsEphemeralPath}`;
        return axios.post(url, post, {
            headers: {
                Authorization: `Bearer ${this.config.accessToken}`
            }
        }).then((response: AxiosResponse<any>) => response.data);
    }

    public getPost(postId: string): Promise<PostResponse> {
        const url: string = `${this.config.mattermostUrl}${Routes.MM.ApiVersionV4}${Routes.MM.PostPath}`;
        return axios.get(replace(url, Routes.PV.Identifier, postId), {
            headers: {
                Authorization: `Bearer ${this.config.accessToken}`
            }
        }).then((response: AxiosResponse<any>) => response.data);
    }

    public updatePost(postId: string, post: PostUpdate): Promise<any> {
        const url: string = `${this.config.mattermostUrl}${Routes.MM.ApiVersionV4}${Routes.MM.PostPath}`;
        return axios.put(replace(url, Routes.PV.Identifier, postId), post, {
            headers: {
                Authorization: `Bearer ${this.config.accessToken}`
            }
        }).then((response: AxiosResponse<any>) => response.data);
    }

    public deletePost(postId: string): Promise<any> {
        const url: string = `${this.config.mattermostUrl}${Routes.MM.ApiVersionV4}${Routes.MM.PostPath}`;
        return axios.delete(replace(url, Routes.PV.Identifier, postId), {
            headers: {
                Authorization: `Bearer ${this.config.accessToken}`
            }
        }).then((response: AxiosResponse<any>) => response.data);
    }

    public getUser(userId: string): Promise<User> {
        const url: string = `${this.config.mattermostUrl}${Routes.MM.ApiVersionV4}${Routes.MM.UserPath}`;
        return axios.get(replace(url, Routes.PV.Identifier, userId), {
            headers: {
                Authorization: `Bearer ${this.config.accessToken}`
            }
        }).then((response: AxiosResponse<any>) => response.data);
    }

    public getChannel(channelId: string): Promise<Channel> {
        const url: string = `${this.config.mattermostUrl}${Routes.MM.ApiVersionV4}${Routes.MM.ChannelPath}`;
        return axios.get(replace(url, Routes.PV.Identifier, channelId), {
            headers: {
                Authorization: `Bearer ${this.config.accessToken}`
            }
        }).then((response: AxiosResponse<any>) => response.data);
    }

    public showDialog(dialog: DialogProps): Promise<any> {
        const url: string = `${this.config.mattermostUrl}${Routes.MM.ApiVersionV4}${Routes.MM.DialogsOpenPath}`;
        return axios.post(url, dialog, {
            headers: {
                Authorization: `Bearer ${this.config.accessToken}`
            }
        }).then((response: AxiosResponse<any>) => response.data);
    }

    public createDirectChannel(ids: string[]): Promise<any> {
        const url: string = `${this.config.mattermostUrl}${Routes.MM.ApiVersionV4}${Routes.MM.ChannelDirectPath}`;
        return axios.post(url, ids, {
            headers: {
                Authorization: `Bearer ${this.config.accessToken}`
            }
        }).then((response: AxiosResponse<any>) => response.data);
    }
}