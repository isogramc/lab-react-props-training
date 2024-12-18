function Random(props){
    const {min, max} = props;
    function randomIntFromInterval(minn, maxx) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    return(
    <div className="random-num">
       Random value between {min} and {max} =&gt; {randomIntFromInterval(min, max)}
    </div>
)
}

export default Random;