import { Controller, Inject, LOGGER_SERVICE, OnWebView, type LoggerService } from '@altv-mango/client';

@Controller()
export class AuthController {
    @Inject(LOGGER_SERVICE) private readonly logger: LoggerService;

    @OnWebView('MAIN_VIEW', 'Auth:Something')
    public onAuth() {
        this.logger.log('webview told me something');
    }
}
