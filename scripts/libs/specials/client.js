/**
 * Created by kliko on 4/17/16.
 */
(function(generalScope) {
    var isInitialized = false;
    function Client() {
        this._agent = 'Unknown';
        this._platform = 'Unknown';
        this._browser = {
            'name':'Unknown',
            'short':'Unknown',
            'version':'?'
        };

        this.askAgent();
    }

    Client.prototype.askAgent = function askPlatform() {
        this._agent = navigator.userAgent;
        this.askPlatform();
    };

    Client.prototype.askPlatform = function askPlatform() {
        if (this._agent.match(/linux/i)) {
            this._platform = 'linux';
        }
        else if (this._agent.match(/macintosh|mac os x/i)) {
            this._platform = 'mac';
        }
        else if (this._agent.match(/windows|win32/i)) {
            this._platform = 'windows';
        }
        this.askBrowser();
    };

    Client.prototype.askBrowser = function askBrowser() {
        // Next get the name of the useragent yes seperately and for good reason
        if(this._agent.match(/MSIE/i) && !this._agent.match(/Opera/i)) {
            this._browser.name = 'Internet Explorer';
            this._browser.short = "MSIE";
        } else if(this._agent.match(/Firefox/i)) {
            this._browser.name = 'Mozilla Firefox';
            this._browser.short = "Firefox";
        } else if(this._agent.match(/Chrome/i)) {
            this._browser.name = 'Google Chrome';
            this._browser.short = "Chrome";
        } else if(this._agent.match(/Safari/i)) {
            this._browser.name = 'Apple Safari';
            this._browser.short = "Safari";
        } else if(this._agent.match(/Opera/i)) {
            this._browser.name = 'Opera';
            this._browser.short = "Opera";
        } else if(this._agent.match(/Netscape/i)) {
            this._browser.name = 'Netscape';
            this._browser.short = "Netscape";
        }
        this.askVersion();
    };

    Client.prototype.askVersion = function askVersion() {
        var agentEntities = this._agent.split(' '),
            client = this,
            version = '?';

        agentEntities.forEach(function(elm){
            var entities = elm.split('/'),
                key = entities[0],
                value = entities[1];
            if (key.contains(client._browser.short)) {
                client._browser.version = value;
            }
        });
        this.addDetails();
    };

    Client.prototype.addDetails = function addDetails() {
        $('body').addClass(this._platform.toLowerCase())
            .addClass(this._browser.short.toLowerCase());

        generalScope.client = {
            browser: this._browser,
            platform: this._platform,
            agent: this.agent
        }
    };

    Client.prototype.askForIpAddress = function askForIpAddress() {
        return 'clientIp'
    };

    generalScope.askClientIp = function askClientIp() {
        return this.askForIpAddress();
    };

    return new Client();
}(cleverPlatform));