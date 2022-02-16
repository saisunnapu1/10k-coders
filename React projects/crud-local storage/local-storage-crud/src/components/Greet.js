const Greet=(props)=>{
    const {name,song}=props
    return(
        <>
        <h1>
            Hello {name} also known as {song}
        </h1>
        </>
    )
}
export default Greet;