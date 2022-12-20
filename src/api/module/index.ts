import request from "@/utils/axios";

interface IResponseType<P = {}> {
  code?: number;
  msg: string;
  data: P;
}

/**
 * 获取图片
 */
export const getHomeImg = () => {
  return request<IResponseType>({
    url: "/api/auth/login",
    method: "post",
    data: {},
  });
};
