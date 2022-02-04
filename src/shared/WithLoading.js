export const WithLoading = (WrappedComponent) => {
    return ({isLoad,...props}) => {
        return (
            <div>
                <WrappedComponent {...props}/>
                <br/>
                {isLoad ? <span>Loading...</span> : <></>}
            </div>
        )
    }
}
