let filterWords =  [
    'google.com','.au','.fr', '.cz', '.ca', 'archive.org',
    'web.archive.org', ,'isni.org', ,'viaf.org', 'wiki', 
    '.gov', '.edu', '.ac', '.res', '.ernet', 'jstor', 
    'worldcat', 'semanticscholar', 'doi', '.ch', '.ru', '.se', 
    '.lv', '.kr','.no', '.il', '.hr', '.bd', '.pk', '.jp', '.it', 
    '.gr', '.uk', '.pl', '.nl', '.es', 'at', '.eu', '.dk', ".az", 
    '.mx', '.lt', ".de", '.nz', '.mil', '.am', '.sk', '.pa', '.uy',
    '.dm'
]



function filter(url){

   for(let k of filterWords){
       if(url.includes(k)){
           return false
       }
   }
   return true;
}


module.exports = filter;