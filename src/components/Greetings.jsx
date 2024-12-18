function Greetings(props){
    const {lang, text} = props;
    function translate(languageText){
        if(lang==='de'){
            return "Hallo "+text;     
         }
         if(lang==='en'){
             return "Hi "+text;     
         }
         if(lang==='es'){
             return "Hola "+text;     
         }
         if(lang==='fr'){
             return "Bonjour "+text;     
         }
    }

    return(
        <div className="greeting" lang={lang}>{translate(text)}</div>
    )
}
export default Greetings;