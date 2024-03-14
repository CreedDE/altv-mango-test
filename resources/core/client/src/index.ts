import '@abraham/reflection';
import { RootModule } from './root.module';
import { createAppBuilder } from '@altv-mango/client';

const appBuilder = await createAppBuilder();
appBuilder.addWebView('MAIN_VIEW', { url: 'http://localhost:5173', isVisible: true });
const app = appBuilder.build();
await app.start(RootModule);
