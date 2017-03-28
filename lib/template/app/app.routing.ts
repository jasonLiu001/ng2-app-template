import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

/**
 *
 * @summary 如果当前模块中有多个页面，最好用路由的懒加载模式， 
 */
const routes: Routes = [];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})

export class AppRoutingModule {
}