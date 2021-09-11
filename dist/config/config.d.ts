declare class ConfigServer {
    TYPEORM_HOST: string;
    TYPEORM_USERNAME: string;
    TYPEORM_PASSWORD: string;
    TYPEORM_DATABASE: string;
    DOCKER_SQL_PORT: number;
    SERVER_PORT: number;
    constructor();
}
export declare const config: ConfigServer;
export {};
