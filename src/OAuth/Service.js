function OAuthService(options) {
    var parent = OAuthService.prototype;
    
    if (arguments.length > 0) {
        this.init(options);
    }
    
    this.init = function(options) {
        parent.init.apply(this, arguments);
    };
           
    this.signature_method = 'PLAINTEXT'; 
}

OAuthService.prototype = new OAuthConsumer();
