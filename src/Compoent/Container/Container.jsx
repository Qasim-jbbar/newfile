import stylee from"@/Compoent/Container/Container.module.css"

const Container =({children}) =>{

    return(
        <div className={stylee.container}>{children}</div>
    
        )
};
export default Container;