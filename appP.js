$(()=>{
    

    $.get("https://meduza.io/rss/en/all", function(data) {
        var $xml = $(data);
        $xml.find("item").each(function() {
            var $this = $(this),
                item = {
                    title: $this.find("title").text(),
                    link: $this.find("link").text(),
                    description: $this.find("description").text(),
                    pubDate: $this.find("pubDate").text(),
                    author: $this.find("author").text()
            }
            //Do something with item here...
            ('#meduza').append("item")
        });
    });










    });