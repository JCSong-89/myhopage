import { Routers } from "../routers/routes";
export declare class App {
    private readonly app;
    private readonly router;
    constructor(app?: import("express-serve-static-core").Express, router?: Routers);
    getApp(): import("express-serve-static-core").Express;
    setMiddleWare(): Routers;
}
