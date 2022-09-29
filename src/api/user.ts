import { $axios, $axiosInstance } from "@/plugins/axios";
import { IUserDetail } from "@/typescript/User";

interface payloadGetList {
  q: string;
  page: number;
}
export interface IItemUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  score: number;
}
interface IUserInfo {
  data: IItemUser[];
  totalItems: number;
}
const user = () => ({
  async fetchListUser({ q, page }: payloadGetList): Promise<IUserInfo> {
    const response = await $axiosInstance.get("search/users", {
      params: {
        q,
        per_page: 12,
        ...(page && { page }),
      },
    });
    return {
      data: response.data.items,
      totalItems: response.data.total_count,
    };
  },
  async fetchListUserFollows(url: string) {
    try {
      const response = await $axiosInstance.get(url);
      return response.data;
    } catch (error) {
      return [];
    }
  },
  async fetchUserDetail(username: string) {
    const { data } = await $axiosInstance.get(`/users/${username}`);
    return {
      name: data.name,
      login: data.login,
      avatar_url: data.avatar_url,
      followers_url: data.followers_url,
      following_url: data.following_url,
      starred_url: data.starred_url,
      repos_url: data.repos_url,
      location: data.location,
      followers: data.followers,
      following: data.following,
    };
  },
});
export default user;
