import env from "@utils/env";

export interface IResponseObj {
  serverType: string;
  message: string;
  dataType?: string | null;
  data?: any | null;
}

export const serverType = env.NETECH_SERVER_TYPE || "neTech:default";

export class ResponseObj implements IResponseObj {
  serverType: string;
  message: string;
  dataType?: string | null;
  data?: any | null;

  constructor(message: string, data?: any) {
    this.serverType = serverType;
    this.message = message;
    if (data) {
      this.dataType = typeof data;
      this.data = data;
    } else {
      this.dataType = null;
      this.data = null;
    }
  }
}
