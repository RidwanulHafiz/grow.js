var AutoGrow = {
    grow : function (text, options) {
        var height = options.height || '100px';
        var maxHeight = options.maxHeight || '500px';
        text.style.height = 'auto';
        var curHeight = text.scrollHeight;
        if(curHeight > maxHeight){
            curHeight = maxHeight;
            text.style.overflow = 'auto';
        } else {
            text.style.overflow = 'hidden';
        }
        if(curHeight < height){ curHeight = height; }
        text.style.height = curHeight+'px';
    },
    init : function (options) {
        var locInputs = document.querySelectorAll('[data-grow="auto"]');
        for(var i=0;i<locInputs.length;i++){
            var target = locInputs[i];
            var height = options.height || '100px';
            var maxHeight = options.maxHeight || '500px';
            target.style.overflow = 'hidden';
            target.style.resize = 'none';
            target.style.height = height+'px';
            target.style.maxHeight = maxHeight+'px';

            target.onkeydown = function () {
                AutoGrow.grow(this, options);
            };
            target.onkeyup = function () {
                AutoGrow.grow(this, options);
            };
        }
    }
};

document.addEventListener('DOMContentLoaded', function(){
    AutoGrow.init({});
}, false);

if(typeof module != 'undefined'){
    module.export = AutoGrow;
}
