'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-demo documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-435b5f23cd7166a7276703b7bb8f48e8ca5e7807c375657093bc761d8efd0aae1fea4459c96ef09214ce076bdcaaccbd7cd78d299d779a0af72a5bf0bd7ece9e"' : 'data-bs-target="#xs-controllers-links-module-AppModule-435b5f23cd7166a7276703b7bb8f48e8ca5e7807c375657093bc761d8efd0aae1fea4459c96ef09214ce076bdcaaccbd7cd78d299d779a0af72a5bf0bd7ece9e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-435b5f23cd7166a7276703b7bb8f48e8ca5e7807c375657093bc761d8efd0aae1fea4459c96ef09214ce076bdcaaccbd7cd78d299d779a0af72a5bf0bd7ece9e"' :
                                            'id="xs-controllers-links-module-AppModule-435b5f23cd7166a7276703b7bb8f48e8ca5e7807c375657093bc761d8efd0aae1fea4459c96ef09214ce076bdcaaccbd7cd78d299d779a0af72a5bf0bd7ece9e"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-435b5f23cd7166a7276703b7bb8f48e8ca5e7807c375657093bc761d8efd0aae1fea4459c96ef09214ce076bdcaaccbd7cd78d299d779a0af72a5bf0bd7ece9e"' : 'data-bs-target="#xs-injectables-links-module-AppModule-435b5f23cd7166a7276703b7bb8f48e8ca5e7807c375657093bc761d8efd0aae1fea4459c96ef09214ce076bdcaaccbd7cd78d299d779a0af72a5bf0bd7ece9e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-435b5f23cd7166a7276703b7bb8f48e8ca5e7807c375657093bc761d8efd0aae1fea4459c96ef09214ce076bdcaaccbd7cd78d299d779a0af72a5bf0bd7ece9e"' :
                                        'id="xs-injectables-links-module-AppModule-435b5f23cd7166a7276703b7bb8f48e8ca5e7807c375657093bc761d8efd0aae1fea4459c96ef09214ce076bdcaaccbd7cd78d299d779a0af72a5bf0bd7ece9e"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-c3769fff9d9b632bc652d037c368df3faeab03c3d12252a1166325697b62861b7450e9dcd7403cc016b58663e1e25ccaeab455b297c58db8d4fd8020ff762a6c"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-c3769fff9d9b632bc652d037c368df3faeab03c3d12252a1166325697b62861b7450e9dcd7403cc016b58663e1e25ccaeab455b297c58db8d4fd8020ff762a6c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-c3769fff9d9b632bc652d037c368df3faeab03c3d12252a1166325697b62861b7450e9dcd7403cc016b58663e1e25ccaeab455b297c58db8d4fd8020ff762a6c"' :
                                            'id="xs-controllers-links-module-AuthModule-c3769fff9d9b632bc652d037c368df3faeab03c3d12252a1166325697b62861b7450e9dcd7403cc016b58663e1e25ccaeab455b297c58db8d4fd8020ff762a6c"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-c3769fff9d9b632bc652d037c368df3faeab03c3d12252a1166325697b62861b7450e9dcd7403cc016b58663e1e25ccaeab455b297c58db8d4fd8020ff762a6c"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-c3769fff9d9b632bc652d037c368df3faeab03c3d12252a1166325697b62861b7450e9dcd7403cc016b58663e1e25ccaeab455b297c58db8d4fd8020ff762a6c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-c3769fff9d9b632bc652d037c368df3faeab03c3d12252a1166325697b62861b7450e9dcd7403cc016b58663e1e25ccaeab455b297c58db8d4fd8020ff762a6c"' :
                                        'id="xs-injectables-links-module-AuthModule-c3769fff9d9b632bc652d037c368df3faeab03c3d12252a1166325697b62861b7450e9dcd7403cc016b58663e1e25ccaeab455b297c58db8d4fd8020ff762a6c"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CompaniesModule.html" data-type="entity-link" >CompaniesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CompaniesModule-d6f2423c4930a539e4a35135cd4c8c59b1351ec10d74f36222e860359c5498e7368b947d6c27bf7c02c9d830e8c163fbca719843387435b21709f1ac5048e42b"' : 'data-bs-target="#xs-controllers-links-module-CompaniesModule-d6f2423c4930a539e4a35135cd4c8c59b1351ec10d74f36222e860359c5498e7368b947d6c27bf7c02c9d830e8c163fbca719843387435b21709f1ac5048e42b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CompaniesModule-d6f2423c4930a539e4a35135cd4c8c59b1351ec10d74f36222e860359c5498e7368b947d6c27bf7c02c9d830e8c163fbca719843387435b21709f1ac5048e42b"' :
                                            'id="xs-controllers-links-module-CompaniesModule-d6f2423c4930a539e4a35135cd4c8c59b1351ec10d74f36222e860359c5498e7368b947d6c27bf7c02c9d830e8c163fbca719843387435b21709f1ac5048e42b"' }>
                                            <li class="link">
                                                <a href="controllers/CompaniesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompaniesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CompaniesModule-d6f2423c4930a539e4a35135cd4c8c59b1351ec10d74f36222e860359c5498e7368b947d6c27bf7c02c9d830e8c163fbca719843387435b21709f1ac5048e42b"' : 'data-bs-target="#xs-injectables-links-module-CompaniesModule-d6f2423c4930a539e4a35135cd4c8c59b1351ec10d74f36222e860359c5498e7368b947d6c27bf7c02c9d830e8c163fbca719843387435b21709f1ac5048e42b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CompaniesModule-d6f2423c4930a539e4a35135cd4c8c59b1351ec10d74f36222e860359c5498e7368b947d6c27bf7c02c9d830e8c163fbca719843387435b21709f1ac5048e42b"' :
                                        'id="xs-injectables-links-module-CompaniesModule-d6f2423c4930a539e4a35135cd4c8c59b1351ec10d74f36222e860359c5498e7368b947d6c27bf7c02c9d830e8c163fbca719843387435b21709f1ac5048e42b"' }>
                                        <li class="link">
                                            <a href="injectables/CompaniesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompaniesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabasesModule.html" data-type="entity-link" >DatabasesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-DatabasesModule-dd8a90d9dae27c9b81844cea561ceb57653c62e6260010947114f46da31124b553a76fba02efcfb292d23edb3663e5674b14df57a06df2f2ecc39ba9be737053"' : 'data-bs-target="#xs-controllers-links-module-DatabasesModule-dd8a90d9dae27c9b81844cea561ceb57653c62e6260010947114f46da31124b553a76fba02efcfb292d23edb3663e5674b14df57a06df2f2ecc39ba9be737053"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DatabasesModule-dd8a90d9dae27c9b81844cea561ceb57653c62e6260010947114f46da31124b553a76fba02efcfb292d23edb3663e5674b14df57a06df2f2ecc39ba9be737053"' :
                                            'id="xs-controllers-links-module-DatabasesModule-dd8a90d9dae27c9b81844cea561ceb57653c62e6260010947114f46da31124b553a76fba02efcfb292d23edb3663e5674b14df57a06df2f2ecc39ba9be737053"' }>
                                            <li class="link">
                                                <a href="controllers/DatabasesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabasesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DatabasesModule-dd8a90d9dae27c9b81844cea561ceb57653c62e6260010947114f46da31124b553a76fba02efcfb292d23edb3663e5674b14df57a06df2f2ecc39ba9be737053"' : 'data-bs-target="#xs-injectables-links-module-DatabasesModule-dd8a90d9dae27c9b81844cea561ceb57653c62e6260010947114f46da31124b553a76fba02efcfb292d23edb3663e5674b14df57a06df2f2ecc39ba9be737053"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DatabasesModule-dd8a90d9dae27c9b81844cea561ceb57653c62e6260010947114f46da31124b553a76fba02efcfb292d23edb3663e5674b14df57a06df2f2ecc39ba9be737053"' :
                                        'id="xs-injectables-links-module-DatabasesModule-dd8a90d9dae27c9b81844cea561ceb57653c62e6260010947114f46da31124b553a76fba02efcfb292d23edb3663e5674b14df57a06df2f2ecc39ba9be737053"' }>
                                        <li class="link">
                                            <a href="injectables/DatabasesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabasesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FilesModule.html" data-type="entity-link" >FilesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FilesModule-d82861e8424fd879e84d0e8a1707e4678dff525eb3e1a1dec3c493b5934ed809813a44d6be46ec7dfd84ca75a52efcf5b5f0b06c833c8b9aca8cd5f3cb451289"' : 'data-bs-target="#xs-controllers-links-module-FilesModule-d82861e8424fd879e84d0e8a1707e4678dff525eb3e1a1dec3c493b5934ed809813a44d6be46ec7dfd84ca75a52efcf5b5f0b06c833c8b9aca8cd5f3cb451289"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FilesModule-d82861e8424fd879e84d0e8a1707e4678dff525eb3e1a1dec3c493b5934ed809813a44d6be46ec7dfd84ca75a52efcf5b5f0b06c833c8b9aca8cd5f3cb451289"' :
                                            'id="xs-controllers-links-module-FilesModule-d82861e8424fd879e84d0e8a1707e4678dff525eb3e1a1dec3c493b5934ed809813a44d6be46ec7dfd84ca75a52efcf5b5f0b06c833c8b9aca8cd5f3cb451289"' }>
                                            <li class="link">
                                                <a href="controllers/FilesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FilesModule-d82861e8424fd879e84d0e8a1707e4678dff525eb3e1a1dec3c493b5934ed809813a44d6be46ec7dfd84ca75a52efcf5b5f0b06c833c8b9aca8cd5f3cb451289"' : 'data-bs-target="#xs-injectables-links-module-FilesModule-d82861e8424fd879e84d0e8a1707e4678dff525eb3e1a1dec3c493b5934ed809813a44d6be46ec7dfd84ca75a52efcf5b5f0b06c833c8b9aca8cd5f3cb451289"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FilesModule-d82861e8424fd879e84d0e8a1707e4678dff525eb3e1a1dec3c493b5934ed809813a44d6be46ec7dfd84ca75a52efcf5b5f0b06c833c8b9aca8cd5f3cb451289"' :
                                        'id="xs-injectables-links-module-FilesModule-d82861e8424fd879e84d0e8a1707e4678dff525eb3e1a1dec3c493b5934ed809813a44d6be46ec7dfd84ca75a52efcf5b5f0b06c833c8b9aca8cd5f3cb451289"' }>
                                        <li class="link">
                                            <a href="injectables/FilesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HealthModule.html" data-type="entity-link" >HealthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-HealthModule-2254f8bcb0147ff1911ff1b9b77501a45d248d5328e64de92723865ddaecca28e0f631bf915282386dd2781a6e09971864bec194e7a7819ff134c9e261e5e7f7"' : 'data-bs-target="#xs-controllers-links-module-HealthModule-2254f8bcb0147ff1911ff1b9b77501a45d248d5328e64de92723865ddaecca28e0f631bf915282386dd2781a6e09971864bec194e7a7819ff134c9e261e5e7f7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HealthModule-2254f8bcb0147ff1911ff1b9b77501a45d248d5328e64de92723865ddaecca28e0f631bf915282386dd2781a6e09971864bec194e7a7819ff134c9e261e5e7f7"' :
                                            'id="xs-controllers-links-module-HealthModule-2254f8bcb0147ff1911ff1b9b77501a45d248d5328e64de92723865ddaecca28e0f631bf915282386dd2781a6e09971864bec194e7a7819ff134c9e261e5e7f7"' }>
                                            <li class="link">
                                                <a href="controllers/HealthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JobsModule.html" data-type="entity-link" >JobsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-JobsModule-ea53640cafac7ee6269d4b402e41a8f7a5d4ab24ab609b546a210f128963fe0802bde3869eb1f0fff71b45d242d945e854eaa33fa3aef5deb0ef2ca7e8dfde2c"' : 'data-bs-target="#xs-controllers-links-module-JobsModule-ea53640cafac7ee6269d4b402e41a8f7a5d4ab24ab609b546a210f128963fe0802bde3869eb1f0fff71b45d242d945e854eaa33fa3aef5deb0ef2ca7e8dfde2c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-JobsModule-ea53640cafac7ee6269d4b402e41a8f7a5d4ab24ab609b546a210f128963fe0802bde3869eb1f0fff71b45d242d945e854eaa33fa3aef5deb0ef2ca7e8dfde2c"' :
                                            'id="xs-controllers-links-module-JobsModule-ea53640cafac7ee6269d4b402e41a8f7a5d4ab24ab609b546a210f128963fe0802bde3869eb1f0fff71b45d242d945e854eaa33fa3aef5deb0ef2ca7e8dfde2c"' }>
                                            <li class="link">
                                                <a href="controllers/JobsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-JobsModule-ea53640cafac7ee6269d4b402e41a8f7a5d4ab24ab609b546a210f128963fe0802bde3869eb1f0fff71b45d242d945e854eaa33fa3aef5deb0ef2ca7e8dfde2c"' : 'data-bs-target="#xs-injectables-links-module-JobsModule-ea53640cafac7ee6269d4b402e41a8f7a5d4ab24ab609b546a210f128963fe0802bde3869eb1f0fff71b45d242d945e854eaa33fa3aef5deb0ef2ca7e8dfde2c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-JobsModule-ea53640cafac7ee6269d4b402e41a8f7a5d4ab24ab609b546a210f128963fe0802bde3869eb1f0fff71b45d242d945e854eaa33fa3aef5deb0ef2ca7e8dfde2c"' :
                                        'id="xs-injectables-links-module-JobsModule-ea53640cafac7ee6269d4b402e41a8f7a5d4ab24ab609b546a210f128963fe0802bde3869eb1f0fff71b45d242d945e854eaa33fa3aef5deb0ef2ca7e8dfde2c"' }>
                                        <li class="link">
                                            <a href="injectables/JobsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MailModule.html" data-type="entity-link" >MailModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MailModule-e440d7d48361de7df3d4f1d91d3e6b782e03258afb8b0c934bb92b8cf782ad7979230008fd507afbfe631f62ec8d51256e5fcb67afd964da703152b0c50fadee"' : 'data-bs-target="#xs-controllers-links-module-MailModule-e440d7d48361de7df3d4f1d91d3e6b782e03258afb8b0c934bb92b8cf782ad7979230008fd507afbfe631f62ec8d51256e5fcb67afd964da703152b0c50fadee"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MailModule-e440d7d48361de7df3d4f1d91d3e6b782e03258afb8b0c934bb92b8cf782ad7979230008fd507afbfe631f62ec8d51256e5fcb67afd964da703152b0c50fadee"' :
                                            'id="xs-controllers-links-module-MailModule-e440d7d48361de7df3d4f1d91d3e6b782e03258afb8b0c934bb92b8cf782ad7979230008fd507afbfe631f62ec8d51256e5fcb67afd964da703152b0c50fadee"' }>
                                            <li class="link">
                                                <a href="controllers/MailController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PermissionsModule.html" data-type="entity-link" >PermissionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PermissionsModule-4459af3b716cf7e04b47c5af2a850a0b8cccdd21b4ee90a9e4b4ca90b091f4792cd541adcc224f07d7edb753e3eedfce4763c1ab485f38e303709c01ea31b1aa"' : 'data-bs-target="#xs-controllers-links-module-PermissionsModule-4459af3b716cf7e04b47c5af2a850a0b8cccdd21b4ee90a9e4b4ca90b091f4792cd541adcc224f07d7edb753e3eedfce4763c1ab485f38e303709c01ea31b1aa"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PermissionsModule-4459af3b716cf7e04b47c5af2a850a0b8cccdd21b4ee90a9e4b4ca90b091f4792cd541adcc224f07d7edb753e3eedfce4763c1ab485f38e303709c01ea31b1aa"' :
                                            'id="xs-controllers-links-module-PermissionsModule-4459af3b716cf7e04b47c5af2a850a0b8cccdd21b4ee90a9e4b4ca90b091f4792cd541adcc224f07d7edb753e3eedfce4763c1ab485f38e303709c01ea31b1aa"' }>
                                            <li class="link">
                                                <a href="controllers/PermissionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PermissionsModule-4459af3b716cf7e04b47c5af2a850a0b8cccdd21b4ee90a9e4b4ca90b091f4792cd541adcc224f07d7edb753e3eedfce4763c1ab485f38e303709c01ea31b1aa"' : 'data-bs-target="#xs-injectables-links-module-PermissionsModule-4459af3b716cf7e04b47c5af2a850a0b8cccdd21b4ee90a9e4b4ca90b091f4792cd541adcc224f07d7edb753e3eedfce4763c1ab485f38e303709c01ea31b1aa"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PermissionsModule-4459af3b716cf7e04b47c5af2a850a0b8cccdd21b4ee90a9e4b4ca90b091f4792cd541adcc224f07d7edb753e3eedfce4763c1ab485f38e303709c01ea31b1aa"' :
                                        'id="xs-injectables-links-module-PermissionsModule-4459af3b716cf7e04b47c5af2a850a0b8cccdd21b4ee90a9e4b4ca90b091f4792cd541adcc224f07d7edb753e3eedfce4763c1ab485f38e303709c01ea31b1aa"' }>
                                        <li class="link">
                                            <a href="injectables/PermissionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResumesModule.html" data-type="entity-link" >ResumesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ResumesModule-463f5dff6cf23e2c365e20adee35f859f8a44f7e65efd8edf3faea3b8732c679f0dce7cc1c9cfb1c2d48e2b2fa07c0898386145267bc2fa31301384098c8b31f"' : 'data-bs-target="#xs-controllers-links-module-ResumesModule-463f5dff6cf23e2c365e20adee35f859f8a44f7e65efd8edf3faea3b8732c679f0dce7cc1c9cfb1c2d48e2b2fa07c0898386145267bc2fa31301384098c8b31f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ResumesModule-463f5dff6cf23e2c365e20adee35f859f8a44f7e65efd8edf3faea3b8732c679f0dce7cc1c9cfb1c2d48e2b2fa07c0898386145267bc2fa31301384098c8b31f"' :
                                            'id="xs-controllers-links-module-ResumesModule-463f5dff6cf23e2c365e20adee35f859f8a44f7e65efd8edf3faea3b8732c679f0dce7cc1c9cfb1c2d48e2b2fa07c0898386145267bc2fa31301384098c8b31f"' }>
                                            <li class="link">
                                                <a href="controllers/ResumesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResumesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ResumesModule-463f5dff6cf23e2c365e20adee35f859f8a44f7e65efd8edf3faea3b8732c679f0dce7cc1c9cfb1c2d48e2b2fa07c0898386145267bc2fa31301384098c8b31f"' : 'data-bs-target="#xs-injectables-links-module-ResumesModule-463f5dff6cf23e2c365e20adee35f859f8a44f7e65efd8edf3faea3b8732c679f0dce7cc1c9cfb1c2d48e2b2fa07c0898386145267bc2fa31301384098c8b31f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ResumesModule-463f5dff6cf23e2c365e20adee35f859f8a44f7e65efd8edf3faea3b8732c679f0dce7cc1c9cfb1c2d48e2b2fa07c0898386145267bc2fa31301384098c8b31f"' :
                                        'id="xs-injectables-links-module-ResumesModule-463f5dff6cf23e2c365e20adee35f859f8a44f7e65efd8edf3faea3b8732c679f0dce7cc1c9cfb1c2d48e2b2fa07c0898386145267bc2fa31301384098c8b31f"' }>
                                        <li class="link">
                                            <a href="injectables/ResumesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResumesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RolesModule.html" data-type="entity-link" >RolesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-RolesModule-bdf7d1e1d1178e980c86673150d40a71b4b4c4cd26ce935f962e8e5ad4fbff424efee3f37bbc80f02493a980f03e0d4d420784987a8d3b188db19a34d7ccf9cd"' : 'data-bs-target="#xs-controllers-links-module-RolesModule-bdf7d1e1d1178e980c86673150d40a71b4b4c4cd26ce935f962e8e5ad4fbff424efee3f37bbc80f02493a980f03e0d4d420784987a8d3b188db19a34d7ccf9cd"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RolesModule-bdf7d1e1d1178e980c86673150d40a71b4b4c4cd26ce935f962e8e5ad4fbff424efee3f37bbc80f02493a980f03e0d4d420784987a8d3b188db19a34d7ccf9cd"' :
                                            'id="xs-controllers-links-module-RolesModule-bdf7d1e1d1178e980c86673150d40a71b4b4c4cd26ce935f962e8e5ad4fbff424efee3f37bbc80f02493a980f03e0d4d420784987a8d3b188db19a34d7ccf9cd"' }>
                                            <li class="link">
                                                <a href="controllers/RolesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RolesModule-bdf7d1e1d1178e980c86673150d40a71b4b4c4cd26ce935f962e8e5ad4fbff424efee3f37bbc80f02493a980f03e0d4d420784987a8d3b188db19a34d7ccf9cd"' : 'data-bs-target="#xs-injectables-links-module-RolesModule-bdf7d1e1d1178e980c86673150d40a71b4b4c4cd26ce935f962e8e5ad4fbff424efee3f37bbc80f02493a980f03e0d4d420784987a8d3b188db19a34d7ccf9cd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RolesModule-bdf7d1e1d1178e980c86673150d40a71b4b4c4cd26ce935f962e8e5ad4fbff424efee3f37bbc80f02493a980f03e0d4d420784987a8d3b188db19a34d7ccf9cd"' :
                                        'id="xs-injectables-links-module-RolesModule-bdf7d1e1d1178e980c86673150d40a71b4b4c4cd26ce935f962e8e5ad4fbff424efee3f37bbc80f02493a980f03e0d4d420784987a8d3b188db19a34d7ccf9cd"' }>
                                        <li class="link">
                                            <a href="injectables/RolesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SubscribersModule.html" data-type="entity-link" >SubscribersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SubscribersModule-0180e6e43058874382f49ec662e81177eab1fc4dc207ddcbb52dcfd0011db36f552d03d40d20eda533407141c6b51e4709bd38091de17b4358e54afd9cfde7e3"' : 'data-bs-target="#xs-controllers-links-module-SubscribersModule-0180e6e43058874382f49ec662e81177eab1fc4dc207ddcbb52dcfd0011db36f552d03d40d20eda533407141c6b51e4709bd38091de17b4358e54afd9cfde7e3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SubscribersModule-0180e6e43058874382f49ec662e81177eab1fc4dc207ddcbb52dcfd0011db36f552d03d40d20eda533407141c6b51e4709bd38091de17b4358e54afd9cfde7e3"' :
                                            'id="xs-controllers-links-module-SubscribersModule-0180e6e43058874382f49ec662e81177eab1fc4dc207ddcbb52dcfd0011db36f552d03d40d20eda533407141c6b51e4709bd38091de17b4358e54afd9cfde7e3"' }>
                                            <li class="link">
                                                <a href="controllers/SubscribersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscribersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SubscribersModule-0180e6e43058874382f49ec662e81177eab1fc4dc207ddcbb52dcfd0011db36f552d03d40d20eda533407141c6b51e4709bd38091de17b4358e54afd9cfde7e3"' : 'data-bs-target="#xs-injectables-links-module-SubscribersModule-0180e6e43058874382f49ec662e81177eab1fc4dc207ddcbb52dcfd0011db36f552d03d40d20eda533407141c6b51e4709bd38091de17b4358e54afd9cfde7e3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SubscribersModule-0180e6e43058874382f49ec662e81177eab1fc4dc207ddcbb52dcfd0011db36f552d03d40d20eda533407141c6b51e4709bd38091de17b4358e54afd9cfde7e3"' :
                                        'id="xs-injectables-links-module-SubscribersModule-0180e6e43058874382f49ec662e81177eab1fc4dc207ddcbb52dcfd0011db36f552d03d40d20eda533407141c6b51e4709bd38091de17b4358e54afd9cfde7e3"' }>
                                        <li class="link">
                                            <a href="injectables/SubscribersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscribersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-26b0530bb4555fa6e5f32fe0a75d490dae0264da4ba5d5f8aba99ef6899c013444e7f8a644274e232ce39adad1a156c5036a36d8e83ea2249d0f241c228c6a29"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-26b0530bb4555fa6e5f32fe0a75d490dae0264da4ba5d5f8aba99ef6899c013444e7f8a644274e232ce39adad1a156c5036a36d8e83ea2249d0f241c228c6a29"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-26b0530bb4555fa6e5f32fe0a75d490dae0264da4ba5d5f8aba99ef6899c013444e7f8a644274e232ce39adad1a156c5036a36d8e83ea2249d0f241c228c6a29"' :
                                            'id="xs-controllers-links-module-UsersModule-26b0530bb4555fa6e5f32fe0a75d490dae0264da4ba5d5f8aba99ef6899c013444e7f8a644274e232ce39adad1a156c5036a36d8e83ea2249d0f241c228c6a29"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-26b0530bb4555fa6e5f32fe0a75d490dae0264da4ba5d5f8aba99ef6899c013444e7f8a644274e232ce39adad1a156c5036a36d8e83ea2249d0f241c228c6a29"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-26b0530bb4555fa6e5f32fe0a75d490dae0264da4ba5d5f8aba99ef6899c013444e7f8a644274e232ce39adad1a156c5036a36d8e83ea2249d0f241c228c6a29"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-26b0530bb4555fa6e5f32fe0a75d490dae0264da4ba5d5f8aba99ef6899c013444e7f8a644274e232ce39adad1a156c5036a36d8e83ea2249d0f241c228c6a29"' :
                                        'id="xs-injectables-links-module-UsersModule-26b0530bb4555fa6e5f32fe0a75d490dae0264da4ba5d5f8aba99ef6899c013444e7f8a644274e232ce39adad1a156c5036a36d8e83ea2249d0f241c228c6a29"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CompaniesController.html" data-type="entity-link" >CompaniesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DatabasesController.html" data-type="entity-link" >DatabasesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FilesController.html" data-type="entity-link" >FilesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/HealthController.html" data-type="entity-link" >HealthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/JobsController.html" data-type="entity-link" >JobsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MailController.html" data-type="entity-link" >MailController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PermissionsController.html" data-type="entity-link" >PermissionsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ResumesController.html" data-type="entity-link" >ResumesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/RolesController.html" data-type="entity-link" >RolesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SubscribersController.html" data-type="entity-link" >SubscribersController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Company.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/CompanyDto.html" data-type="entity-link" >CompanyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CompanyDto-1.html" data-type="entity-link" >CompanyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCompanyDto.html" data-type="entity-link" >CreateCompanyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFileDto.html" data-type="entity-link" >CreateFileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateJobDto.html" data-type="entity-link" >CreateJobDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePermissionDto.html" data-type="entity-link" >CreatePermissionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateResumeDto.html" data-type="entity-link" >CreateResumeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRoleDto.html" data-type="entity-link" >CreateRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSubscriberDto.html" data-type="entity-link" >CreateSubscriberDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserCVDto.html" data-type="entity-link" >CreateUserCVDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/File.html" data-type="entity-link" >File</a>
                            </li>
                            <li class="link">
                                <a href="classes/Job.html" data-type="entity-link" >Job</a>
                            </li>
                            <li class="link">
                                <a href="classes/Permission.html" data-type="entity-link" >Permission</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterUserDto.html" data-type="entity-link" >RegisterUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Resume.html" data-type="entity-link" >Resume</a>
                            </li>
                            <li class="link">
                                <a href="classes/Role.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="classes/Subscriber.html" data-type="entity-link" >Subscriber</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCompanyDto.html" data-type="entity-link" >UpdateCompanyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFileDto.html" data-type="entity-link" >UpdateFileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateJobDto.html" data-type="entity-link" >UpdateJobDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePermissionDto.html" data-type="entity-link" >UpdatePermissionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateResumeDto.html" data-type="entity-link" >UpdateResumeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateRoleDto.html" data-type="entity-link" >UpdateRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSubscriberDto.html" data-type="entity-link" >UpdateSubscriberDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserLoginDto.html" data-type="entity-link" >UserLoginDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CompaniesService.html" data-type="entity-link" >CompaniesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DatabasesService.html" data-type="entity-link" >DatabasesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FilesService.html" data-type="entity-link" >FilesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JobsService.html" data-type="entity-link" >JobsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStrategy.html" data-type="entity-link" >LocalStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MulterConfigService.html" data-type="entity-link" >MulterConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PermissionsService.html" data-type="entity-link" >PermissionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResumesService.html" data-type="entity-link" >ResumesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RolesService.html" data-type="entity-link" >RolesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SubscribersService.html" data-type="entity-link" >SubscribersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TransformInterceptor.html" data-type="entity-link" >TransformInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link" >IUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Response.html" data-type="entity-link" >Response</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});