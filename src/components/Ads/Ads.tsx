export default function Ads():any {
    const click = () => {
        alert('cuman dummy iklan')
    }
    return (
        <div style={{textAlign: 'center', margin: '10px 0 10px 0'}}>
            <a href="" onClick={click}>
                <img src="https://tpc.googlesyndication.com/simgad/12416303986836414271" alt=""/>
            </a>
        </div>
    )
}
