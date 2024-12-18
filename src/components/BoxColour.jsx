function BoxColor(props){
    const {r, g, b} = props;
    const stringColour = stringCol(r, g, b);
    function stringCol(red, green, blue){
        return `rgb(${red},${green},${blue})`;
    }
    function rgbToHex(rval, gval, bval){
        const red = r.toString(16).padStart(2, '0');
        const green = g.toString(16).padStart(2, '0');
        const blue = b.toString(16).padStart(2, '0');
        return `#${red}${green}${blue}`;
    }
    return(
        <div className="block-colour" style={{
            backgroundColor: stringColour
        }}>
           <strong>{stringCol(r, g, b)}</strong> <br/>
           <strong>{rgbToHex(r, g, b)}</strong> 
        </div>
    )
}
export default BoxColor