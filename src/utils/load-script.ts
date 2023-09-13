
export function loadScript (src: string): Promise<HTMLElement>{
    return new Promise((resolve, reject) => {
        let shouldAppend = false;
        let script = document.querySelector('script[src="' + src + '"]') as HTMLScriptElement;
        if (!script) {
            script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = src;
            shouldAppend = true;
        } 
        else if (script.hasAttribute('data-loaded')) {
            resolve(script);
            return;
        }

        script.addEventListener('error', reject);
        script.addEventListener('abort', reject);
        script.addEventListener('load', function loadScriptHandler() {
            script.setAttribute('data-loaded', 'true');
            resolve(script);
        });

        if (shouldAppend) 
            document.head.appendChild(script);
    });
}