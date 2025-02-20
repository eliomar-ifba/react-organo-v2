import './Campo.css'

function Campo({tipo, label, placeholder, aoAlterar, valor}){
    return (
        <section className='campo'>
            <label>{label}</label>
            <input type={tipo} value={valor} onChange={(event) => aoAlterar(event.target.value)}  placeholder={placeholder} required></input>
        </section>
    )
}

export default Campo