
const Neon = (props:any) => {
    const {type, size, color} = props

    const style ={
            position: 'absolute',
            zIndex: '-1',
            width: size,
            height: size,
            borderRadius: type == 'c' ? '50%' : '50px',
        } as React.CSSProperties

    return (
        <div 
        className={color == 'pr' ? 'neon neon-pr' : 'neon neon-ac'}
        style={style}
        ></div>
    )
}

export default Neon