const request=require('request');
const cheerio=require('cheerio');


request('https://www.indgovtjobs.in/search?updated-max=2023-01-05T21%3A59%3A00%2B05%3A30&max-results=4#PageNo=4',(error,response,html)=>{
    if (!error && response.statusCode==200){

        const $=cheerio.load(html);
        // const title=$('.wrapfullpost');
        // const tit=title.find('h3').text();
        // console.log(tit);

        // $('.wrapfullpost').each((i,el)=>{
        //     const title=$(el)
        //     .find('h3')
        //     .text();
        // console.log(title);

        

        $(' .post-body > p').each((i,el)=>{
            const title=$(el)
            // .find('p')
            .html();
        console.log(title);

        });
    
    }
    else {
        console.log('error')
    }
});